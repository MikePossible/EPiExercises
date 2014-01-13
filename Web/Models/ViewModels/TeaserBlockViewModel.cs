namespace EpiExercises.Models.ViewModels
{

    #region Using

    using EpiExercises.Models.Blocks;
    using EPiServer.Core;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;

    #endregion

    public class TeaserBlockViewModel
    {
        public TeaserBlock Block { get; set; }
        public PageData Page { get; set; }
    }// class
}// namespace