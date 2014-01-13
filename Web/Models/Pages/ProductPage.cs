namespace EpiExercises.Models.Pages
{
    #region Using

    using System;
    using System.ComponentModel.DataAnnotations;
    using EPiServer.Core;
    using EPiServer.DataAbstraction;
    using EPiServer.DataAnnotations;
    using EPiServer.SpecializedProperties;
    using EpiExercises.Models.Pages;
    
    using EPiServer.Templates.Alloy.Models.Pages;

    #endregion

    /// <summary>
    /// Used to present a single product
    /// </summary>
    [ContentType(
        DisplayName = "ProductPage", 
        GUID = "2e1fd662-0543-4c23-b3c5-427f22daea9f", 
        Description = "",
        GroupName = "Product Group")]
    [AvailableContentTypes(
        IncludeOn = new[] { typeof(StartPage) })]    
    //public class ProductPage : PageData
    public class ProductPage : SitePageData
    {
        [Required]
        [BackingType(typeof(PropertyString))]
        [Display(Order = 305)]
        public virtual string UniqueSellingPoints { get; set; }

        [CultureSpecific]
        [Display(
            GroupName = SystemTabNames.Content,
            Order = 330)]        
        public virtual ContentArea RelatedContentArea { get; set; }
    }// class

}// namespace