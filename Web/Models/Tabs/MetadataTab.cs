#region Using

using EPiServer.Security;
using EPiServer.UI.WebControls;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

#endregion

namespace EpiExercises.Web.Models.Tabs
{
    public class MetadataTab
    {
        /// <summary>
        /// Gets the tab name
        /// </summary>
        public string Name { get { return "Metadata"; } }

        /// <summary>
        /// Gets the required access
        /// </summary>
        public AccessLevel RequiredAccess { get { return AccessLevel.Edit; } }

        /// <summary>
        /// Gets the index of the sort
        /// </summary>
        public int SortIndex { get { return 10000; } }
    }// class

}// namespace