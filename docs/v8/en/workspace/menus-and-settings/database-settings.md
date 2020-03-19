-   [Database Settings](#database-settings)
    -   [Languages](#languages)
    -   [Approvals](#approvals)
    -   [SharePoint](#sharepoint)
    -   [Exchange](#exchange)
    -   [Security](#security)
    -   [Advanced](#advanced)
          -   [Allow editing in the designer without locking](#allow-editing-in-the-designer-without-locking)
    -   [Uniqueness of the object name](#uniqueness-of-the-object-name)
        -   [Allowing name duplicates](#allowing-name-duplicates)
        -   [Each object must have a unique name in any class in the
            nested tree](#each-object-must-have-a-unique-name-in-any-class-in-the-nested-tree)
        -   [Each object must have a unique name within class in the
            nested tree](#each-object-must-have-a-unique-name-within-class-in-the-nested-tree)
    -   [Force unique names for Designer Elements](#force-unique-names-for-designer-elements)
    -   [See the full username instead of the login username](#see-the-full-username-instead-of-the-login-username)
    -   [Limit the formulas calculation depth to...](#limit-the-formulas-calculation-depth-to-)
    -   [When a shape is removed from a diagram](#when-a-shape-is-removed-from-a-diagram)
    -   [When a shape is pasted to a diagram](#when-a-shape-is-pasted-to-a-diagram)
    -   [See also: Cut, Copy, Paste & Special](#see-also-cut-copy-paste--special)
    -   [When a diagram is opened](#when-a-diagram-is-opened)
    -   [Use the faster automatic link generation but less precise detection of the shapes verticles (e.g. an "L"-shape is detected as rectangle only)](#use-the-faster-automatic-link-generation-but-less-precise-detection-of-the-shapes-verticles-eg-an-l-shape-is-detected-as-rectangle-only)
    -   [Update the mastershape only when the underlying object property
        has been changed.](#update-the-mastershape-only-when-the-underlying-object-property-has-been-changed)
    -   [Automatic generation of hyperlinks for linked Visio diagrams](#automatic-generation-of-hyperlinks-for-linked-visio-diagrams)
    -   [Show Tooltips of properties on diagrams](#show-tooltips-of-properties-on-diagrams)
    -   [Display a "list of Parent diagrams" instead of "multiple parent
        diagrams" in the diagrams header](#display-a-list-of-parent-diagrams-instead-of-multiple-parent-diagrams-in-the-diagrams-header)
  -   [Paths](#paths)
- [Setting the default language for the model](#setting-the-default-language-for-the-model)


The database settings are opened via the corresponding icon in the
process4.biz menu strip. This symbol is divided into 2 areas:

-   Database settings (upper section)


![](//images.ctfassets.net/utx1h0gfm1om/CYc4x4voWGmwAgcGSKGwM/a67972bfaf2e14b8ed3bb59cf0820ac9/329398.png)

-   Default language (lower section)

![](//images.ctfassets.net/utx1h0gfm1om/2c8w58mj9GAEQiWySMYaA8/aafa8097088888ca86c020fca3729e6e/329402.png)

### Database Settings

#### Languages

Here you have the option to set up or select many languages, in which
the content is to be translated and stored in your database, by clicking
on the "New" button. In addition, languages that have already been
created, but are unnecessary, can be deleted here. However, the default
language as well as the current language cannot be deleted.


<div class="success">
  
 In each activated language you can translate all changeable fields in
the [Database Designer](Database_Designer) in addition to the content
(everything except for greyed system properties). You have to do the
translation of the content yourself; the [Import Export
Manager](ImportExportManager) has proved to be very helpful in practice,
because it allows you to manage [properties](Property_Group_Property)
-among other things- in two languages.

</div>

#### Approvals

See: [Approval Management](approval-management)

#### SharePoint

-   SharePoint Prefix  
    Here you can specify a path on a SharePoint library, where documents
    are placed to link with p4b objects. If you link an object with a
    document from the SharePoint library via properties hyperlink, the
    SharePoint path is detected and a special SharePoint icon is
    displayed in the smart tag on the diagram
-   Activating automatic export of SVG diagrams after SharePoint  
    Activates the export of diagrams as SVG files after SharePoint in
    the library or list entered here  
    **Warning:** this option is outdated and should only be activated or
    remain so if a SharePoint app is available to display SVG
    diagrams.  
    -   Update the SVG file in SharePoint when saving the diagram  
        Updates already existing SVG files in SharePoint automatically
        when the respective diagram is saved


#### Exchange

Here the necessary options for the use of the Synchronisation with the
Exchange server are activated (for the extension [Task
Management](task-management)).

#### Security

-   Encrypt the passwords in the database  
    Activate this function to store the various passwords in the SQL
    Server database too not as text, but encrypted so they cannot be
    read by the SQL Admin.
-   Prohibit the creation of empty passwords  
    This option forbids users to create empty passwords
-   Request a password change from the user every X days  
    Requires an automatic password change after the period set here
-   Request passwords from the user with at least X characters   
    If this option is activated and already existing user passwords do
    not comply with the the selected condition, users are prompted to
    change their passwords
-   Set the password complexity (1 = low / 5 = high) on X stage
    1.  Level: password length&gt; 4
    2.  Level: password length&gt; 12
    3.  Stage: Password contains numbers
    4.  Stage: Password contains symbols
    5.  Level: password contains both uppercase and lowercase letters

    If this option is activated and already existing user passwords do
    not comply with the the selected condition, users are prompted to
    change their passwords
-   Block user who fails to log for 15 minutes after X attempts  
    Blocks a user according to the set number of unsuccessful login
    attempts
-   Force logout for users who are inactive for more than X minutes  
    This option logs the user out of the database automatically, if they
    do not use the program for over a specified timeframe.


#### Advanced

![Db settings5](//images.ctfassets.net/6mz8d8cle1nl/55ZaEFgaS0MZcW0hRSq1kI/f8ecff90c763691c8303d1f48846c6a3/Db_settings5.png)


*Database Settings - Advanced Options*
 
##### Allow editing in the designer without locking

This option allows the editing of database structure elements in
the [Database Designer](database-designer) without having to lock Units.
<div class="warning">
  <h3>Warning</h3> 
  Not recommended in multiuser mode.
  </div>

#### Object locking policy in multi-user modeling scenarios
Depending on which option is selected from the drop-down menu the multi-user modeling scenario will be available or not. The setting can be set by Administrator only. 

##### Strict objet locking (locked objects cannot be edited) 
This option is set by default and when it’s selected several users cannot edit objects, diagrams and files simultaneously. 

##### Lazy object locking (locked objects can be edited after warning confirmation)

When this option is selected it is possible to edit objects, files or diagrams by several users simultaneously after warning confirmation. 
<div class="warning">
  <h3>Warning</h3> 
 Simultaneous editing of objects can lead to data inconsistency
  </div> 


##### Uniqueness of the object name

Depending on which option is selected in the selection box, it is
possible to create objects under the same name in
the [repository](repository). When you create a new object, a unique
name will be created automatically or the name will be automatically
adjusted, when you paste a copied object.

###### Allowing name duplicates

This option allows you to create objects that have the same name as
other objects in the repository. When creating such an object, a warning
is shown to inform the user; the object may nevertheless be created
under the same name.

###### Each object must have a unique name in any class in the nested tree

If this option is activated, no two or more [objects](object) can be
created under the same name in a [unit](unit) and its child units.
However, in the parallel units this is still possible.

<div class="info">
  
There is no distinction between uppercase and lowercase letters. For
example, "Process" and "process" are interpreted as the same name; this means that when an object "Process" already exists, an object named "process" cannot be created.
 
 </div>

###### Each object must have a unique name within class in the nested tree

If you select this option, the uniqueness of objects is tested within
a [class](class) and within the unit and its child units. This means
that objects can be created under the same name in two different classes
in the same unit (or child units). If you create an object under a name
that already exists, a warning message is displayed and you have to
change the name to a unique name. If an object already exists in another
branch or in another class, then a warning message appears, but you can
keep this name and generate a duplicate name for this object. You can
create objects with duplicate names easily in parallel branches, even if
they are in the same class.

##### Force unique names for Designer Elements

In the designer the uniqueness is tested, when you create the elements
for [properties and property groups](property-group-and-property) within a
class. For classes and units, uniqueness is checked in a unit branch.
When you create a new item, the system will initially always generate a
unique name, even if this option was not activated additionally. The
user can cancel this default option, by changing the name and thus can
create a duplicate name. However, when this option is activated and an
already existing name is changed, the user is warned and the name needs
to be changed to a unique name. If the paste function is used, the entry
is automatically renamed to a unique name.

##### See the full username instead of the login username

When this option is activated, the full name of the Windows and p4b
users is displayed instead of the login name.

##### Limit the formulas calculation depth to ...

The number of formula type properties possible levels for Query builder.
User is able to change this number.


##### When a shape is removed from a diagram

Here you can determine what should be done with the object, when
deleting an [object](object) from a [diagram](diagram). You can choose
between the following options:

-   ask each time, whether it should be deleted from the database
-   delete it always from the database too, without asking   
    Attention: when cutting/pasting objects, there is always the
    possibility that ghost shapes appear, when the object cut is used on
    several diagrams
-   leave it always in the database without asking

##### When a shape is pasted to a diagram

Here you can define what is to be done with the object, when you paste a
previously copied object to a diagram. You can choose between the
following options:

-   Ask whether the DB object is to be duplicated
-   Always duplicate the DB object   
    This option pastes each time a new object: the existing object
    "rejection" is therefore pasted automatically as new object
    "Rejection1"
-   Never duplicate the DB object   
    This option pastes each time the existing object
    
     
![](//images.ctfassets.net/utx1h0gfm1om/7rkPRg7VmMAqqAqAO0C2Sq/04684ac5cf373a0c31313e9de438bdbc/329407.png)


##### See also: [Cut, Copy, Paste & Special](cut-copy-paste-and-special)

##### When a diagram is opened

This option controls the window behaviour, when opening diagrams.

The following options are available:

-   Visio default behaviour  
    No change as opposed to the default behaviour of Visio.
-   Maximise the diagram window  
    The diagram window is maximised through this option, when opened.
-   Maximise diagram window and adjust the page  
    The diagram window is maximised through this option when opened and
    the page is adjusted to the window size.
-   Maximise diagram window and adjust the width  
    The diagram window is maximised through this selection when opened
    and the page width is adjusted to the window size.
    
    ![](//images.ctfassets.net/utx1h0gfm1om/7x7TeyhcKQUWGcOGyAuiEo/637a46ebe14fac42caae9d4b044c3fb7/329369.png)

Control Visio tooltips for properties in [Database
Designer](database-designer)


##### Use the faster automatic link generation but less precise detection of the shapes verticles (e.g. an "L"-shape is detected as rectangle only).

This option controls the window behaviour, when opening diagrams.

The following options are available:

##### Update the mastershape only when the underlying object property has been changed.

If this option is activated, then the shapes on diagram will not be replaced with the shapes from stencil but will simply be updated, when object is not changed in fact (when master shape property in the object was not changed, but the stencil was changed), e.g. diagram is opened in different languages.  

##### Automatic generation of hyperlinks for linked Visio diagrams

This option creates Visio hyperlinks for object-to-diagram links and
should be activated in the following cases:

1.  when you want to run a simulation of the processes for the model
    over several linked diagrams using the PCS Process Simulator
2.  when you save diagrams in SharePoint and then want to open diagrams
    in SharePoint for navigation.

##### Show Tooltips of properties on diagrams

Displays in Visio through mouse-over a tooltip for objects. The content
of this tooltip is controlled on property level via the option "Show in
Tooltip" (True/False) and is activated by default for the property
"description".

##### Display a "list of Parent diagrams" instead of "multiple parent diagrams" in the diagrams header

In [process4.biz](http://process4.biz), a diagram can have several
parent diagrams. This option defines what the "ParentDiagramName" should
be for such a diagram in the formula type: 

-   "\[Several parent diagrams\]"   
    or
-   a listing of all parent diagrams


#### Paths

Here you can create, modify or delete base directories. The set paths
here are used for properties of the property
type Hyperlink or [Path](property-group-and-property). To create a new
directory, click "New". In the opened window, enter the name of the path
and the path itself. To select a path from your computer or from the
network, click on the "Search" button.

### Setting the default language for the model

This option of the database settings allows you to select another
language as your new default language.

<div class="warning">
 <h3>Attention:</h3>

It is strongly recommended to backup the database before changing the
default language.
</div>

There is a default language for each database, that is, all objects are
available at least in this language. When you add a new language and
then change to this new language, objects not yet translated are still
shown in the previous default language; this is necessary so that no
empty names or properties exist in the database.
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>