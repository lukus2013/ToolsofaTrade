using ToolsotTrade.Models;

namespace ToolsotTrade.Facades
{
    public interface IInventoryFacade
    {
        IEnumerable<InventoryItem> GetInventory();
        void PlaceTool(Tool tool, string location);
        void RemoveTool(Tool tool);
    }
}