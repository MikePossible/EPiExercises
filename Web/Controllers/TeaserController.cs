#region Using

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;
using EpiExercises.Models.Blocks;
using EpiExercises.Models.ViewModels;

#endregion

namespace EpiExercises.Web.Controllers
{
    public class TeaserController : BlockController<TeaserBlock>
    {
        private readonly IContentRepository _repo = 
            EPiServer.ServiceLocation.ServiceLocator.Current.GetInstance<IContentRepository>();

        
        public override ActionResult Index(TeaserBlock currentBlock)
        {
            TeaserBlockViewModel vModel = new TeaserBlockViewModel();
            vModel.Block = currentBlock;

            //Gets the Teaser Link
            if (currentBlock.TeaserLink != null)
            {
                vModel.Page = _repo.Get<PageData>(currentBlock.TeaserLink);
            }// if

            return PartialView(vModel);
        }// Index(...)

    }// class
}// namespace