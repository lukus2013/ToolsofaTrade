using ToolsotTrade.Models;
using Microsoft.Data.SqlClient;

namespace ToolsotTrade.DataAccess
{
    public class ToolRepository : IToolRepository
    {
        private readonly IConfiguration _config;
        public ToolRepository(IConfiguration config)
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
        private List<Tool> ReadTools(SqlDataReader _reader)
        {
            var tools = new List<Tool>();
            while (_reader.Read())
            {
                Tool tool = new Tool()
                {
                    ToolId = _reader.GetInt32(_reader.GetOrdinal("ToolId")),
                    Name = _reader.GetString(_reader.GetOrdinal("Name")),
                    Type = _reader.GetString(_reader.GetOrdinal("Type")),
                    Manufacturer = _reader.GetString(_reader.GetOrdinal("Manufacturer"))
                };
                tools.Add(tool);
            }
            _reader.Close();
            return tools;
        }

        public List<Tool> GetAllTools()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT * FROM Tools
                        ";
                        using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var tools = ReadTools(reader);
                        return tools;
                    }
                }
            }
        }
        public Tool GetToolById(int _id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT * FROM Tools
                        Where ToolId = @id
                        ";
                    cmd.Parameters.AddWithValue("@id", _id);
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var tool = ReadTools(reader).FirstOrDefault();
                        return tool;
                    }
                }
            }
        }
        public Tool GetToolByName(string _name)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT * FROM Tools
                        WHERE Name = @name
                        ";
                    cmd.Parameters.AddWithValue("@name", _name);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var tool = ReadTools(reader).FirstOrDefault();
                        return tool;
                    }
                }
            }
        }
        public List<Tool> GetByType(string _type)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT * FROM Tools
                        WHERE Type = @type
                        ";
                    cmd.Parameters.AddWithValue("@type", _type);
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var tools = ReadTools(reader);
                        return tools;
                    }
                }
            }
        }
        public List<Tool> GetByManufacturer(string _manufacturer)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT * FROM Tools
                        WHERE Manufacturer = @manufacturer
                        ";
                    cmd.Parameters.AddWithValue("@manufacturer", _manufacturer);
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var tools = ReadTools(reader);
                        return tools;
                    }
                }
            }
        }
        public void AddNewTool(Tool _tool)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO [dbo].[Tools] (Name, Type, Manufacturer)
                        VALUES (@Name, @Type, @Manufacturer)
                        ";
                    cmd.Parameters.AddWithValue("@Name", _tool.Name);
                    cmd.Parameters.AddWithValue("@Type", _tool.Type);
                    cmd.Parameters.AddWithValue("@Manufacturer", _tool.Manufacturer);
                    
                    cmd.ExecuteNonQuery();
                }
            }
        }
        public void UpdateTool(Tool _tool)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE [dbo].[Tools]
                        SET Name = @Name, Type = @Type, Manufacturer = @Manufacturer
                        WHERE ToolId = @ToolId
                        ";
                    cmd.Parameters.AddWithValue("@ToolId", _tool.ToolId);
                    cmd.Parameters.AddWithValue("@Name", _tool.Name);
                    cmd.Parameters.AddWithValue("@Type", _tool.Type);
                    cmd.Parameters.AddWithValue("@Manufacturer", _tool.Manufacturer);
                    
                    cmd.ExecuteNonQuery();
                }
            }
        }
        public void DeleteTool(int id)
        {
            using (SqlConnection conn = Connection)
            { 
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        DELETE From Tools
                        WHERE ToolId = @ToolId
                        ";
                    cmd.Parameters.AddWithValue("@ToolId", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
