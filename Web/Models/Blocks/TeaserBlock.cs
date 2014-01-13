namespace EpiExercises.Models.Blocks
{
    #region Using

    using System;
    using System.ComponentModel.DataAnnotations;
    using EPiServer.Core;
    using EPiServer.DataAbstraction;
    using EPiServer.DataAnnotations;
    using EPiServer.Web;
    using EPiServer;
using EPiServer.SpecializedProperties;

    #endregion
    
    [ContentType(DisplayName = "TeaserBlock", GUID = "7356bca1-fbe1-4f84-b5f0-26d354f999f2", Description = "")]
    public class TeaserBlock : BlockData
    {
        /// <summary>
        /// Gets or sets the teaser heading
        /// </summary>
        [CultureSpecific]
        [Required(AllowEmptyStrings = false)]
        [Display(
            Name = "Heading",
            GroupName = SystemTabNames.Content,
            Order = 1)]
        public virtual string TeaserHeading { get; set; }

        /// <summary>
        /// Gets or sets the teaser text
        /// </summary>
        [CultureSpecific]
        [Required(AllowEmptyStrings = false)]
        [Display(
            Name = "Text",
            GroupName = SystemTabNames.Content,
            Order = 2)]
        public virtual string TeaserText { get; set; }

        /// <summary>
        /// Gets or sets teaser image
        /// </summary>
        [CultureSpecific]
        [Required(AllowEmptyStrings = false)]
        //[UIHint(UIHint.Image)]
        [BackingType(typeof(PropertyImageUrl))]
        [Display(Name = "Image")]
        public virtual Url TeaserImage { get; set; }

        /// <summary>
        /// Gets or set the teaser link
        /// </summary>
        [Display(
            Name = "Link",
            GroupName = SystemTabNames.Content,
            Order = 4)]
        public virtual PageReference TeaserLink { get; set; }

    }// class
}// namespace