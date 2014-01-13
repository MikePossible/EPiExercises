namespace EpiExercises.Models.Pages
{
    #region Using

    using System;
    using System.ComponentModel.DataAnnotations;
    using EPiServer.Core;
    using EPiServer.DataAbstraction;
    using EPiServer.DataAnnotations;
    using EPiServer.SpecializedProperties;

    using EPiServer.Templates.Alloy.Models.Pages;

    #endregion

    [ContentType(DisplayName = "StartPage", GUID = "36b28e61-1f04-4dfb-a551-c996ac399cf8", Description = "")]
    public class StartPage : PageData
    {        
        [CultureSpecific]
        [Editable(true)]
        [Display(
            Name = "Main body",
            Description = "The main body will be shown in the main content area of the page, using the XHTML-editor you can insert for example text, images and tables.",
            GroupName = SystemTabNames.Content,
            Order = 1)]
        public virtual XhtmlString MainBody { get; set; }

    }// class
}// namespace