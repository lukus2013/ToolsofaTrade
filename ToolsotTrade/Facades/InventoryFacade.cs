using ToolsotTrade.DataAccess;
using ToolsotTrade.Models;

namespace ToolsotTrade.Facades
{
    public class InventoryFacade : IInventoryFacade
    {
        private readonly IToolRepository toolRepository;
        private readonly ICollectionRepository collectionRepository;

        public InventoryFacade(IToolRepository toolRepository, ICollectionRepository collectionRepository)
        {
            this.toolRepository = toolRepository;
            this.collectionRepository = collectionRepository;
        }
        public IEnumerable<InventoryItem> GetInventory()
        {
            return this.toolRepository.GetAllTools()
                .Select(x =>
                {
                    var location = collectionRepository.GetBuisnessCollectionByToolId(x.ToolId)?.Location ?? "unknown";
                    return new InventoryItem { ToolId = x.ToolId, Location = location, Manufacturer = x.Manufacturer, Name = x.Name, Type = x.Type };
                });
        }
        public void PlaceTool(Tool tool, string location)
        {
            var item = this.collectionRepository.GetBuisnessCollectionByToolId(tool.ToolId);
            if (item == null)
            {
                item = new BuisnessCollection
                {
                    Location = location,
                    ToolId = tool.ToolId,
                };
                this.collectionRepository.AddToCollection(item);
            }
            else
            {
                item.Location = location;
                this.collectionRepository.UpdateToolInCollection(item);
            }
        }
        public void RemoveTool(Tool tool)
        {
            var item = this.collectionRepository.GetBuisnessCollectionByToolId(tool.ToolId);
            if (item != null)
            {
                this.collectionRepository.DeleteToolInCollection(item.Id);
            }

            this.toolRepository.DeleteTool(tool.ToolId);
        }
    }
}
