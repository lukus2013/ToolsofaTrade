using ToolsotTrade.Models;


namespace ToolsotTrade.DataAccess
{
    public interface ICollectionRepository
    {
        List<BuisnessCollection> GetAllCollections();
        List<BuisnessCollection> GetByLocation(string _location);
        void AddToCollection(BuisnessCollection _collection);
    }
}
