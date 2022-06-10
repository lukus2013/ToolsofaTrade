using ToolsotTrade.Models;


namespace ToolsotTrade.DataAccess
{
    public interface ICollectionRepository
    {
        BuisnessCollection GetBuisnessCollectionByToolId(int _toolId);
        List<BuisnessCollection> GetAllCollections();
        List<BuisnessCollection> GetByLocation(string _location);
        void AddToCollection(BuisnessCollection _collection);
        void UpdateToolInCollection(BuisnessCollection _collection);
        void DeleteToolInCollection(int id);
    }
}
