using ToolsotTrade.Models;
using Microsoft.Data.SqlClient;

namespace ToolsotTrade.DataAccess
{
    public class CollectionRepository : ICollectionRepository
    {
        private readonly IConfiguration _config;
        public CollectionRepository(IConfiguration config)
        {
            _config = config;
        }
        public SqlConnection Connection
        {
            get
            {
                return new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            }
        }
        private List<BuisnessCollection> ReadCollection(SqlDataReader _reader)
        {
            var collections = new List<BuisnessCollection>();
            while (_reader.Read())
            {
                BuisnessCollection collection = new BuisnessCollection()
                {
                    Location = _reader.GetString(_reader.GetOrdinal("Location")),
                    ToolId = _reader.GetInt32(_reader.GetOrdinal("ToolId"))
                };
                collections.Add(collection);
            }
            _reader.Close();
            return collections;
        }
        public List<BuisnessCollection> GetAllCollections()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT * FROM BuisnessCollections
                        ";
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var tools = ReadCollection(reader);
                        return tools;
                    }
                }
            }
        }
        public List<BuisnessCollection> GetByLocation(string _location)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT * FROM BuisnessCollection
                        WHERE Location = @location
                        ";
                    cmd.Parameters.AddWithValue("@location", _location);
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var tools = ReadCollection(reader);
                        return tools;
                    }
                }
            }
        }
        public void AddToCollection(BuisnessCollection _collection)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO [dbo].[BuisnessCollection] (Location, ToolId)
                        VALUES (@Location, @ToolId)
                        ";
                    cmd.Parameters.AddWithValue("@location", _collection.Location);
                    cmd.Parameters.AddWithValue("@Type", _collection.ToolId);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
