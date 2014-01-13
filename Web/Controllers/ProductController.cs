#region Using

using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Framework.DataAnnotations;
using EPiServer.Web.Mvc;

using EpiExercises.Models.Pages;

#endregion

namespace EpiExercises.Controllers
{
    public class ProductController : PageController<ProductPage>
    {
        public ActionResult Index(ProductPage currentPage)
        {           

            return View(currentPage);
        }// Index(...)

    }// class

}// namesapce