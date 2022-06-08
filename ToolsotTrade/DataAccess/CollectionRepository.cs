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
        public List<BuisnessCollection> GetAllInCollection()
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
        public BuisnessCollection GetBuisnessCollectionByToolId(int _toolId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT * FROM BuisnessCollection
                        Where Id = @id
                        ";
                    cmd.Parameters.AddWithValue("@id", _toolId);
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var collection = ReadCollection(reader).FirstOrDefault();
                        return collection;
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
        public void UpdateToolInCollection(BuisnessCollection _collection)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE [dbo].[BuisnessCollection]
                        SET Location = @Location, ToolId = @ToolId
                        WHERE Id = @Id
                        ";
                    cmd.Parameters.AddWithValue("@Id", _collection.Id);
                    cmd.Parameters.AddWithValue("@Location", _collection.Location);
                    cmd.Parameters.AddWithValue("@ToolId", _collection.ToolId);

                    cmd.ExecuteNonQuery();
                }
            }
        }
        public void DeleteToolInCollection(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        DELETE From BuisnessCollection
                        WHERE Id = @Id
                        ";
                    cmd.Parameters.AddWithValue("@Id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
