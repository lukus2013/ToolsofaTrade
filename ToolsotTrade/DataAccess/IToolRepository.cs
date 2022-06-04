using ToolsotTrade.Models;

namespace ToolsotTrade.DataAccess
{
    public interface IToolRepository
    {
        List<Tool> GetAllTools();
        Tool GetToolById(int _id);
        Tool GetToolByName(string name);
        List<Tool> GetByType(string type);
        List<Tool> GetByManufacturer(string _manufacturer);
        void AddNewTool(Tool _tool);
        void UpdateTool(Tool _tool);
        void DeleteTool(int id);
    }
}
