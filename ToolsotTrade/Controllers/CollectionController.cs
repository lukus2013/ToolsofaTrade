using Microsoft.AspNetCore.Mvc;
using ToolsotTrade.DataAccess;
using ToolsotTrade.Models;

namespace ToolsotTrade.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CollectionController : ControllerBase
    {
        private readonly ICollectionRepository _collectionRepository;
        public CollectionController(ICollectionRepository collectionRepository)
        {
            _collectionRepository = collectionRepository;
        }
        //[HttpGet]
        //public IActionResult GetCollection(int toolId)
        //{
        //    GetBuisnessCollectionByToolId
        //}
    }
}
