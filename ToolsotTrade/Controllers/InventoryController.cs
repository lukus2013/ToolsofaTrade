using Microsoft.AspNetCore.Mvc;
using ToolsotTrade.Facades;

namespace ToolsotTrade.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryController : Controller
    {
        private readonly IInventoryFacade facade;

        public InventoryController(IInventoryFacade facade)
        {
            this.facade = facade;
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(facade.GetInventory());
        }
        [HttpDelete("{toolId}")]
        public IActionResult RemoveInventory(int toolId)
        {
            //this.facade.RemoveTool(toolId);
            return Ok();
        }

    }
}
