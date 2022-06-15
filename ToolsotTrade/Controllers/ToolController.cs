using Microsoft.AspNetCore.Mvc;
using ToolsotTrade.DataAccess;
using ToolsotTrade.Models;

namespace ToolsotTrade.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToolController : ControllerBase
    {
        private readonly IToolRepository _toolRepository;
        public ToolController(IToolRepository toolRepository)
        {
            _toolRepository = toolRepository;
        }
        [HttpGet]
        public List<Tool> GetTools()
        {
            return _toolRepository.GetAllTools();
        }

        [HttpGet("id/{id}")]
        public IActionResult GetToolFromId(int id)
        {
            var match = _toolRepository.GetToolById(id);
            if (match == null)
            { 
                return NotFound();
            }
            return Ok(match);
        }
        [HttpGet("name/{name}")]
        public IActionResult GetToolFromName(string name)
        {
            var match = _toolRepository.GetToolByName(name);
            if (match == null)
            {
                return NotFound();
            }
            return Ok(match);
        }
        [HttpGet("type/{type}")]
        public IActionResult GetToolByType(string type)
        {
            var matchs = _toolRepository.GetByType(type);
            if (matchs != null)
            {
                return Ok(matchs);
            }
            else
            {
                return NotFound();
            }
            
        }
        [HttpGet("manufacturer/{manufacturer}")]
        public IActionResult GetToolFromManufacturer(string manufacturer)
        {
            var matchs = _toolRepository.GetByManufacturer(manufacturer);
            if (matchs != null)
            {
                return Ok(matchs);
            }
            else
            {
                return NotFound();
            }
        }
        [HttpPut("{id}")]
        public IActionResult UpdateTool(Tool toolToUpdate)
        {
            var match = _toolRepository.GetToolById(toolToUpdate.ToolId);
            if (match == null)
            {
                return NotFound();
            }
            _toolRepository.UpdateTool(toolToUpdate);
            return Ok();
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var match = _toolRepository.GetToolById(id);
            if (match == null)
            {
                return NotFound();
            }
            else
            {
                _toolRepository.DeleteTool(id);
                return Ok();
            }
        }
        [HttpPost("add/")]
        public IActionResult CreateTool(Tool newTool)
        {
            if (newTool == null)
            {
                return NotFound();
            }
            else
            {
                _toolRepository.AddNewTool(newTool);
                return Ok(newTool);
            }
        }
    }
}
