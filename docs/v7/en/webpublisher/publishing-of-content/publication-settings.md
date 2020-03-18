-   [Publish objects and diagrams with the selected approval status](#publish-objects-and-diagrams-with-the-selected-approval-status)
-   [Consider objects and diagrams without any approval status](#consider-objects-and-diagrams-without-any-approval-status)
-   [Publish only selected Visio pages](#publish-only-selected-visio-pages)
-   [Using a specific diagram as the start page](#using-a-specific-diagram-as-the-start-page)
-   [Mark those objects that have been changed in the last X days...](#mark-those-objects-that-have-been-changed-in-the-last-x-days-)
-   [Show only "working" links ](#show-only-working-links)
-   [Suppress empty data fields](#suppress-empty-data-fields)
-   [Show invisible objects](#show-invisible-objects)
    -   [Enable the timeline function](#enable-the-timeline-function)
-   [Generate a load-delay optimized tree](#generate-a-load-delay-optimized-tree)
-   [Copy all linked files (e.g. using "Hyperlink" property) FROM EXTERNAL SYSTEMS to the target location.](#copy-all-linked-files-eg-using-hyperlink-property-from-external-systems-to-the-target-location)
-   [Copy all attached files FROM THE DATABASE to the target location](#copy-all-attached-files-from-the-database-to-the-target-location)
-   [Always open linked documents (files and hyperlinks) in a new window](#always-open-linked-documents-files-and-hyperlinks-in-a-new-window)
-   [Generate as well a printable PDF version of each published diagram](#generate-as-well-a-printable-pdf-version-of-each-published-diagram)
-   [Hide the navigation tree by default](#hide-the-navigation-tree-by-default)
-   [Automatically synchronize the navigation tree](#automatically-synchronize-the-navigation-tree)
    -   [... With the currently selected object](#-with-the-currently-selected-object)
    -   [... With each currently selected diagram](#-with-each-currently-selected-diagram)
-   [Show additional properties in the list with the linked objects](#show-additional-properties-in-the-list-with-the-linked-objects)
-   [Generate the context menu / smart tags](#generate-the-context-menu--smart-tags)
    -   [Generate the context menu / the Smart Tags](#generate-the-context-menu--the-smart-tags)
    -   [Use Smart Tags](#use-smart-tags)
    -   [Hide the smart tags by default (Show them only on hover)](#hide-the-smart-tags-by-default-show-them-only-on-hover)
    -   [Show the context menu, even if there is only one target to jump to](#show-the-context-menu-even-if-there-is-only-one-target-to-jump-to)
    -   [Include the link for "properties" to the context menu](#include-the-link-for-properties-to-the-context-menu)
-   [Generate a tag-cloud ](#generate-a-tag-cloud)
    -   [with maximum X tags](#with-maximum-x-tags)
    -   [with tags / full text as source for
        tags](#with-tags--full-text-as-source-for-tags)


### Publish objects and diagrams with the selected approval status

This option allows you to publish only those objects that have a
specific approval status (e.g. approved, new, updated, deleted, etc.).
You can select either a concrete status or also combine several
statuses, which should be considered in the publication, for example,
approved + new + updated. It is not possible to tick this option and
leave the Approval Status field empty. In this case, the Next button is
disabled. Objects with specific approval status are then marked
accordingly in the Web Portal.

### Consider objects and diagrams without any approval status

Objects and diagrams created before activating the approval status have
approval status zero. Select this option if you want to add such objects
to the publication.

### Publish only selected Visio pages

The Web Publisher supports also the publication of several pages of a
diagram. If you select this option, you can select all pages for all
diagrams that are to be published to the web.

### Using a specific diagram as the start page

Enable this option and select a diagram so that the diagram is displayed
as the start diagram when you open the web portal. You can choose the
start diagram only from the units that you have selected for publication
(see [Selecting the Model and Unit](selecting-the-model-and-unit)). You
can then open linked diagrams directly from the start diagram.

### Mark those objects that have been changed in the last X days ...

Objects and diagrams recently edited are specially marked in the portal:
A symbol with the word "NEW" is used to identify the new or modified
objects on diagrams and a yellow dot in the hierarchy tree is used for
highlighting modified data and/or diagrams. You can define the period
which is used for determining the editing of objects (by default 5
days).

### Show only "working" links 

Enable this option if you do not want to publish links not included in
the publication to objects and diagrams.

**Grouping of linked objects by diagrams they are used in**

By default, linked objects and diagrams where the object is used, are
displayed separately in the properties of an object in the Web portal:

![](//images.ctfassets.net/utx1h0gfm1om/2mb2969nz6AIqCM66cisg/0b4f947edd3f6d26701bd30cd39df4ce/328542.png)If you select this option, linked objects are displayed
together with the diagram on which they are used.  
![](//images.ctfassets.net/utx1h0gfm1om/6sLkRIHhwACqysq44sQYae/19bbfbac3fe8cb658a462ca259a3688f/328611.png)

### Suppress empty data fields

If you enable this option, empty data fields (properties without values)
of objects and diagrams are not displayed in the Web Portal.

### Show invisible objects

This option allows you to show in the Web portal classes and objects
invisible in the repository or the designer (invisible via the property
"Visible" or by "Managing the Visibility"). Please note the following
rule. If the property "Visible" is set for a class to false and the
option "Show invisible objects" is disabled in the WebPublisher Wizard,
then

-   the class and its objects are by default not published. BUT:

-   when objects of this class are used on diagrams, the class and these
    objects will be published

If the property "Visible" is set for a class to false and the option
"Show invisible objects" is enabled in the WebPublisher Wizard, then the
invisible class and its objects are published to the web.

#### Enable the timeline function

See: [Timeline diagrams](timeline-diagram) and [Searching for Timeline
Objects in the Web-Portal](searching-for-timeline-objects-in-the-web-portal)

![](//images.ctfassets.net/utx1h0gfm1om/7ekayms4FyeQS6Sk4guEok/eb490bc6f811c0210081b133a25e32fb/329024.png)

*First page with settings*

### Generate a load-delay optimized tree

If you enable this option, the hierarchy tree is generated only once,
and only those classes and objects are updated which you have selected
during this publication. This approach is recommended for large models
(Axapta, Co bit). If you publish as HTML, this option is greyed out and
cannot be selected.

### Copy all linked files (e.g. using "Hyperlink" property) FROM EXTERNAL SYSTEMS to the target location.

Enabling this option means that all external files which have a link
(hyperlink) in the VisioModeler via smart tag, are copied to the portal
target directory (the directory with your published data). Ticking this
box helps you avoid access problems when opening these documents out of
the portal. If this option is disabled, a link from the portal to the
linked file is created and the files are not copied to the destination
directory. In this case, you should make sure that the linked documents
are in a shared directory available to all users
(\\\\server\\MyDocuments), otherwise they cannot be opened from the
portal.

### Copy all attached files FROM THE DATABASE to the target location

Enabling this option means that the linked files that are located
directly in the database and are linked to the object or diagram in the
tab "File" in the properties window, are also copied to the destination
directory. Clicking the smart tag on an object, opens the files from the
target directory. If this option is disabled, the files are not copied
to the destination directory and the smart tags for objects are not
displayed in the Web Portal. A warning in the Web Publisher log file
will inform you that linked files cannot be opened in the Web Portal.

### Always open linked documents (files and hyperlinks) in a new window

When you associate an object with an external file or a web link using
the property hyperlink, documents or sites always open in a new window
(and not in the existing Web portal frame).

### Generate as well a printable PDF version of each published diagram

This option enables diagrams to be exported not only as SVG files, but
also as printable PDF files. If the option is enabled and a diagram is
opened in the web portal, click on the print button and the diagram is
then opened in a separate window as a PDF file for printing.

### Hide the navigation tree by default

<div class="success">
It is recommended that you use this option in combination with "Use a
specific diagram as the start page".
  </div>
You can hide the diagram and object navigation tree as the default. In
this way you can navigate directly into diagrams.

You can also display the navigation tree at anytime:

![](//images.ctfassets.net/utx1h0gfm1om/Df7qCP6lXwq8kM8GCG2KW/157e4276c80c96e8e1dbc4c2a2b01621/328625.png)

Hide the (bread crumb) location trail

A path is displayed by default on the top right of diagrams, where you
can display all predecessor (parent) diagrams and open them with a
single click. If you select this option, this path will not be displayed
on the diagram.

### Automatically synchronize the navigation tree

#### ... With the currently selected object

Enable this option if you want that an object is automatically selected
in the tree when it is clicked on a diagram.

#### ... With each currently selected diagram

Enable this option if you want a diagram to be automatically selected in
the tree, when you e.g. open the diagram from the smart tag.

### Show additional properties in the list with the linked objects

When an object is linked with other objects, you will see a list with
linked objects in the web portal in the object properties. By default,
the class, object name and association object of the linked objects are
displayed in the list. However, you can also define for each class,
which additional properties are to be displayed in the list of linked
objects. Click Select properties and just tick the desired property per
class.

![](//images.ctfassets.net/utx1h0gfm1om/6Qq2N6Nf5mWEa6uC2q2CuG/e75242e907a31d978ca096bff3990798/329026.png)

*Second page of settings*

*![](//images.ctfassets.net/utx1h0gfm1om/1fJGg0xArkag0YiGuASEu/5888cac5e2f535babb8de64a1a6a7eec/329078.png)*

*![](//images.ctfassets.net/utx1h0gfm1om/6BVgk9vkliwu840MO2ugEa/860e52d682f03d574f4f2bcb2fa31bfb/329028.png)  
*

### Generate the context menu / smart tags

This option manages the display / hide of smart tags when you click on
an object on the diagram in WebPublisher.

You are able to define on a diagram in process4.biz what shape web links
are displayed in WebPublisher (right click on the object, ***equip with
Process4.biz properties ..→ Select shape web links ...).***

The following objects can be enabled or disabled in the list, which are
then displayed in an object-smart tag in WebPublisher:

-   Hyperlink (e.g. [www.example.com](http://www.example.com)) -
    see [Property Group & Property](property-group-and-property) 
-   Linked files - see [Linking Objects with Files](linking-objects-with-files)
-   Linked diagrams - see [Linking Objects with Diagrams](linking-objects-with-diagrams)
-   Object properties (data) - see [Properties (Dialog
    box)](properties-dialog-box)

In WebPublisher Wizard the following options can be selected:

#### Generate the context menu / the Smart Tags

-   If disabled, NO smart tags are displayed for the object in the
    WebPublisher. If the user has activated a shape web link, the page
    with this link will open, when you click the object in the
    WebPublisher (e.g. linked file or object properties).
-   If activated, the smart tags for the object are displayed. If the
    user clicks on the smart tag, the context menu with all linked shape
    web links will be displayed (when there are several active shape web
    links and the option "display the context menu" has been selected). 

#### Use Smart Tags

When activated, the smart tags are displayed. When you click on the
smart tag, the context menu opens with all the linked shape web links.

#### Hide the smart tags by default (Show them only on hover)

The smart tags are only displayed on hover. When you click on the smart
tag (as described above), the context menu opens. 

#### Show the context menu, even if there is only one target to jump to

When activated, the context menu with the linked objects / files
will always be displayed when you click the smart tag, even if there is
only one shape web link.

#### Include the link for "properties" to the context menu

When activated, the link to the object properties window appears under
smart tags.

### Generate a tag-cloud 

This option allows you to generate a tag cloud with all of the
definitions used in WebPublisher. The following additional options can
be defined:

-   __with maximum X tags__

    Defines the maximum number of words in the cloud.

-   __with tags / full text as source for tags__

    Tag properties (see [Tags](tags)) or full text properties (all
    properties in which "Activate for the "property search"" is set to
    true) can be used for the cloud.

![](//images.ctfassets.net/utx1h0gfm1om/V3DgOfdfuUQ4OEmoKgCci/f6037ff37c9320a96c3fb7d218b9b062/328626.png)

**Select shape web links in the Graphical Visio Modeler**



![](//images.ctfassets.net/utx1h0gfm1om/7kl6PBNNzUauksciwEwkuQ/71de02f94c0101b4e6d6393d6b870c24/328618.png)

*The window for selecting the shape web links*

![](//images.ctfassets.net/utx1h0gfm1om/6OMI0B3fgsmGYQ8iY4AyGI/f1e0c30d4830e1e25d527e519d9d29eb/328627.png)  


*Smart tags and context menu in WebPublisher*



![](//images.ctfassets.net/utx1h0gfm1om/7wcEeZaDUAgyqUEOgWkkQC/ec370a8b1d7606225cb576db14e31c9e/328628.png)  


*Tag-Cloud in WebPublisher*

