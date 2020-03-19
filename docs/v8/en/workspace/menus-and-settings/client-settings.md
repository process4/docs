-   [Client Settings](#client-settings)
    -   [Languages](#languages)
        -   [File with database profiles](#file-with-database-profiles)
    -   [Views](#views)
        -   [Separate Navigation Trees for Units and Classes](#separate-navigation-trees-for-units-and-classes)
        -   [Object counting in the tree in the repository](#object-counting-in-the-tree-in-the-repository)
        -   [Object counting for selection fields](#object-counting-for-selection-fields)
        -   [Hiding unavailable functions](#hiding-unavailable-functions)
        -   [Enabling the coloring of data fields](#enabling-the-coloring-of-data-fields)
        -   [Sort Settings](#sort-settings)
            -   [Numeric sorting](#numeric-sorting)
            -   [Case-sensitive sorting](#case-sensitive-sorting)
            -   [Ignore this sign when sorting](#ignore-this-sign-when-sorting)
        -   [Viewing Smart Tags](#viewing-smart-tags)
        -   [Aligning smart tags of diagram links](#aligning-smart-tags-of-diagram-links)
        -   [Marking objects on diagrams that have been modified in the
            last X days](#marking-objects-on-diagrams-that-have-been-modified-in-the-last-x-days)
        -   [Always update all instances on a Shape chart](#always-update-all-instances-on-a-shape-chart)
        -   [Update the SharePoint data too when clicking the refresh
            button](#update-the-sharepoint-data-too-when-clicking-the-refresh-button)
    -   [System dialogs](#system-dialogs)
-   [Administrative settings](#administrative-settings)
    -   [Change password](#change-password)
    -   [Importing/exporting to a file](#importingexporting-to-a-file)
    -   [Resetting the Client Settings](#resetting-the-client-settings)
    -   [Activate the log file](#activate-the-log-file)


The client settings are opened via the corresponding icon in the
process4.biz menu strip. This icon is divided into 2 sections:

-   Client settings (upper section)

![](//images.ctfassets.net/utx1h0gfm1om/39fxX96L4QaKWSceY6qAgs/347b4b90714b683f13a067f90e2a97f4/329422.png)

-   Administrative settings (lower section)

![](//images.ctfassets.net/utx1h0gfm1om/1Oh1divIy0Gi4aMUSg8yMY/d9a08e84ac7f9f9167d52029e408a46c/329388.png)

### Client Settings

#### Languages

Here you can set the interface language as well as the content language
for the database contents. The language selected at the moment as
content language for this database is marked as the current language.
When you change the content language, all contents of the database will
be displayed in this language. The template language for the diagrams is
changed as well with the appropriate configuration.

In the fields with no content in the selected language, the contents of
the default language (see [database settings](database-settings)) are
used.

##### File with database profiles

Here can be specified and/or changed the path to *DbConfig.xml.*

See: [Installation procedure](installation-procedure/) and [DBConfig:
Managing Databases](dbconfig-managing-databases)


#### Views

*![](//images.ctfassets.net/utx1h0gfm1om/6uaaWWjAtOw2QCqKWauqmY/63b98c2e0106bbe469acdb6d6f5397cc/329392.png)*

*Client Settings: Views*

##### Separate Navigation Trees for Units and Classes

Activating this option divides the [repository](repository) and
the [designer](database-designer) window. In the upper part, units are
displayed and at the bottom classes with their objects and diagrams or
properties. This view helps you to keep track in large database
structures with many units.

##### Object counting in the tree in the repository

Activates/deactivates the display of the number of objects per class or
the number of diagrams for each selected unit in the [navigation
window](кepository) in the repository.

##### Object counting for selection fields

Activates/deactivates the display of the number of objects per class for
selection fields.

![](//images.ctfassets.net/utx1h0gfm1om/yXuq8kmYZUYU6UySeIO4G/e967731b8d1f6fb3d1333b99653cef43/329397.png)

##### Hiding unavailable functions

Hides the unavailable functions in the licensed edition (e.g. Standard
Edition).

##### **Enabling the coloring of data fields**

This option allows you to mark with color, text and background of data
fields in the repository which depends on the values of the [properties,
property groups](property-group-and-property) or [classes](сlass).
See: [Coloring Data Fields](coloring-data-fields).



##### Sort Settings

###### Numeric sorting

When activated, it detects process4.biz numberings and sorts diagrams
and objects in accordance to them.

###### Case-sensitive sorting

When activated, objects or diagrams are sorted in strict alphabetical
order, regardless of upper/lower case letters. If the option is
activated, items with capital letters are first sorted alphabetically
and then follow the lower-case elements.

###### Ignore this sign when sorting

Enter a character that should be ignored when sorting objects and
diagrams in the repository. This option can be useful when sorting
objects that have a prefix or postfix.

##### Viewing Smart Tags

Here you can set when the [smart tag](graphical-visio-modeler) should be
displayed on diagrams in Modeler: always by mouse-over or only when the
shape is selected. Separate advanced options are available for the
setting of smart tags in web-publications. See: Publication settings.

##### Aligning smart tags of diagram links

This parameter defines the exact place of the smart tag on the shapes so
that e.g. texts or shape data graphics are not hidden on shapes or so
that they are not outside of the shape by roundings. Options are
available for horizontal (left, x-centered, right) and vertical (bottom,
y-centered, upper).

##### Marking objects on diagrams that have been modified in the last X days

Objects changed recently (within the defined time period here) appear
marked on the diagram.

##### Always update all instances on a Shape chart

When this option is activated, all the shapes of an object are visually
changed immediately after object properties have been changed (e.g. a
smart tag or data graphics are added to all shapes corresponding to an
object).

##### Update the SharePoint data too when clicking the refresh button

This option allows you to initiate the [SharePoint
synchronization](file:///S:/confluence/pages/createpage.action?spaceKey=DOC&title=SharePoint+Synchronisation&linkCreation=true&fromPageId=1736899) by clicking on the "Update" button.

#### System dialogs

-   Display a security question when deleting objects  
    Here you can decide whether a security question should appear in
    general, when deleting objects.
-   Display the Properties window when dropping a shape on a diagram  
    If this option is deactivated, the [properties
    window](properties-dialog-box) does not appear when you create an
    object on a diagram. The name of the object is immediately displayed
    on the shape and can be edited.
-   Display the link selector when dropping a shape  
    Enabling this function results in the following: if there is a
    manual or automatic link between objects and these objects exist on
    a diagram, a dialog appears with all the links of the object, when
    dragging an object from the repository on the diagram. Enabling the
    hook "Characterized link (s)?" in the column, displays this link via
    an arrow on the diagram. In this way links that exist in the DB, but
    may not be visible on the diagram, can be displayed and managed.
-   Ask when saving changes to the approval status  
    If the [approval management](approval-management) for diagrams or
    objects is activated, each time you save the diagram or object, a
    message appears, asking if the approval status of the diagram or the
    object should be changed. If this option is turned off, the message
    does not appear by saving.
-   Display a notification in the repository in case of irregularities
    in the calculation of property values  
    When this option is activated, an information message will appear in
    the repository, if property values cannot be calculated correctly.
-   Display a warning when connectors are not properly placed  
    Displays a warning when connectors were not properly placed on a
    diagram, e.g. instead of ending <span class="underline">on</span> a
    shape, they end <span class="underline">in front</span> of a shape.
-   Display a warning when objects are connected, but the linking rule
    is missing  
    Displays a warning if objects were connected graphically with a
    connector, but there is no respective [link rule](link-rules) for
    these objects.
-   Display a warning when multiple link rules are defined with the same
    priorityDisplays a warning if there are multiple link rules with the
    same priority for one link in the database.
-   Display a warning when a link between objects is "directed" but all
    link rules for these objects are "undirected"  
    Displays a warning when a link between objects is "directed" but all
    link rules for these objects are "undirected"
-   Display a warning when a link between objects is "undirected", but
    all link rules for these objects are "directed"  
    Displays a warning when a link between objects is "undirected", but
    all link rules for these objects are "directed"
-   Display a warning when the direction of the link contradicts the
    direction of its link rule  
    Displays a warning when the direction of the link contradicts the
    direction of its link rule
-   Display a warning when a user wants to change the size of a diagram
    so that it no longer fits to whole A4 pages  
    Displays a warning when the size of a diagram is changed so that it
    no longer fits on a full A4 page, resulting in page fragments which
    may cause problems later by printing.
-   Reset all system dialogs to their default values  
    All suppressed system dialogs are reset to the default value.

### Administrative settings

#### Change password

With this option, you can always change the password of the currently
logged process4.biz user.

#### Importing/exporting to a file

If you want to export the client settings, select the appropriate
function. A window appears where you set where the settings should be
saved as \* .xml file. If you want to use the client settings on another
client or for another windows user, just import the created \*.xml file.

#### Resetting the Client Settings

Should you want to reset the client settings, select this function or
delete the *settings.xml* file from this folder:

*C:\\Documents and Settings\\User\\Application Data\\process4* ("User"
stands for the name of your Windows user).

#### Activate the log file

This option allows you to create a log file. The log file (p4b\_log.txt)
is created on the desktop and helps in [help desk
calls](faqs-before-contacting-the-p4b-helpdesk). When you close the
Visio, this option is automatically deactivated.

 
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>