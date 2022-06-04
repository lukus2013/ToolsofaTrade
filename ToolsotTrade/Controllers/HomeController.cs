using Microsoft.AspNetCore.Mvc;

namespace ToolsotTrade.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
