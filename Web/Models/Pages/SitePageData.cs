using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
//using EPiServer.Templates.Alloy.Business.Rendering;
//using EPiServer.Templates.Alloy.Models.Properties;
using EPiServer.Web;
using EPiServer.UI.WebControls;
using EpiExercises.Models;
using EPiServer.Templates.Alloy.Models.Properties;

namespace EPiServer.Templates.Alloy.Models.Pages
{
    /// <summary>
    /// Base class for all page types
    /// </summary>
    [ContentType(Order = 50000)]
    public abstract class SitePageData : PageData//, ICustomCssInContentArea
    {
        [Display(
            //GroupName = Global.GroupNames.MetaData,
            //GroupName = SystemTabNames.Content,
            Name = "Meta title",
            GroupName = TabsEPi.Metadata,            
            Order = 100)]
        [CultureSpecific]
        public virtual string MetaTitle
        {
            get
            {
                var metaTitle = this.GetPropertyValue(p => p.MetaTitle);

                // Use explicitly set meta title, otherwise fall back to page name
                return !string.IsNullOrWhiteSpace(metaTitle)
                       ? metaTitle
                       : PageName;
            }
            set { this.SetPropertyValue(p => p.MetaTitle, value); }
        }

        [Display(
            Name = "Meta keywords",
            GroupName = TabsEPi.Metadata,
            Order = 200)]
        [CultureSpecific]
        [BackingType(typeof(PropertyStringList))]        
        public virtual string[] MetaKeywords { get; set; }

        [Display(
            Name = "Meta description",
            GroupName = TabsEPi.Metadata,
            Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.LongString)]
        public virtual string MetaDescription { get; set; }

        [Display(
            GroupName = TabsEPi.Metadata,
            Order = 400)]
        [CultureSpecific]
        public virtual bool DisableIndexing { get; set; }

        [Display(
            GroupName = SystemTabNames.Content,
            Order = 100)]
        [UIHint(UIHint.Image)]
        public virtual ContentReference PageImage { get; set; }

        [Display(
            Name = "Teaser text",
            GroupName = SystemTabNames.Content,
            Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual string TeaserText
        {
            get
            {
                var teaserText = this.GetPropertyValue(p => p.TeaserText);

                // Use explicitly set teaser text, otherwise fall back to description
                return !string.IsNullOrWhiteSpace(teaserText)
                       ? teaserText
                       : MetaDescription;
            }
            set { this.SetPropertyValue(p => p.TeaserText, value); }
        }

        [Display(
            GroupName = SystemTabNames.Settings,
            Order = 200)]
        [CultureSpecific]        
        public virtual bool HideSiteHeader { get; set; }

        [Display(
            GroupName = SystemTabNames.Settings,
            Order = 300)]
        [CultureSpecific]
        public virtual bool HideSiteFooter { get; set; }

        public string ContentAreaCssClass
        { 
            get { return "teaserblock"; } //Page partials should be style like teasers
        }

    }// class

}// namespace
