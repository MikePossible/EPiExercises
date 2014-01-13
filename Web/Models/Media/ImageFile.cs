namespace EpiExercises.Models.Media
{
    #region Using

    using System;
    using System.ComponentModel.DataAnnotations;
    using EPiServer.Core;
    using EPiServer.DataAbstraction;
    using EPiServer.DataAnnotations;
    using EPiServer.SpecializedProperties;
    using EPiServer.Framework.DataAnnotations;

    #endregion

    [ContentType(
        DisplayName = "ImageFile", 
        GUID = "7292d5d8-067a-49e5-95bb-bbc297869310", 
        Description = "Image File description")]
    [MediaDescriptor(ExtensionString = "jpg,jpeg,jpe,ico,gif,bmp,png")]
    public class ImageFile : ImageData
    {
        /// <summary>
        /// Gets or sets the copyright
        /// </summary>
        public virtual string Copyright { get; set; }
    }// class
}// namespace