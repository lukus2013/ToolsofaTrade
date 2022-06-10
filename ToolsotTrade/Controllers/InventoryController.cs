using Microsoft.AspNetCore.Mvc;
using ToolsotTrade.DataAccess;
using ToolsotTrade.Facades;
using ToolsotTrade.Models;

namespace ToolsotTrade.Controllers
{
    public class PlaceToolRequest
    {
        public int ToolId { get; set; }
        public string Location { get; set; }
    }
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryController : Controller
    {
        private readonly IInventoryFacade facade;
        private readonly IToolRepository repository;

        public InventoryController(IInventoryFacade facade, IToolRepository repository)
        {
            this.facade = facade;
            this.repository = repository;
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(facade.GetInventory());
        }
        [HttpPut]
        public IActionResult PlaceTool([FromBody] PlaceToolRequest request)
        {
            var tool = repository.GetToolById(request.ToolId);
            this.facade.PlaceTool(tool, request.Location);
            return Ok();
        }

        [HttpDelete("{toolId}")]
        public IActionResult RemoveInventory(int toolId)
        {
            var tool = repository.GetToolById(toolId);
            this.facade.RemoveTool(tool);
            return Ok();
        }

    }
}
