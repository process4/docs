-   [Shape](#shape)
-   [Stencil](#stencil)
-   [Template](#template)
    -   [Individual template path per Unit](#individual-template-path-per-unit)
    -   [Functions for managing templates](#functions-for-managing-templates)


### Shape

A shape (in German a "form"), is the graphical representation of
an [object](object) on a [diagram](diagram).

Shapes can be managed through the stencil and always match the name of
a [class](class). Thus, new shapes, as soon as they are placed on
a diagram become a (new or existing) object of the respective class.

See also: 

-   [Creating new Master-Shapes](creating_new_Master-Shapes)
-   [Multiple Shapes for a single Class](multiple-shapes-for-a-single-class)
-   [Assigning a different Name to the Master-Shape for a Class](assigning-a-different-name-to-the-master-shape-for-a-class)
-   [Grouping Master-Shapes](grouping-master-shapes)
-   [Using Organisation Diagrams](using-orgcharts)
-   [Creating and Editing Templates](creating-and-editing-templates)


*![](//images.ctfassets.net/utx1h0gfm1om/32MyLFqZtK8qgUKgce20EK/6e64f67bc22ea83a348b827773575727/328738.png)  
*

*The shapes in the Stencil "RACIVS (DE)"*


### Stencil

A stencil (in German "Schablone"), is a thematic or otherwise combined
collection of shapes, which can be used then in the [Graphical Visio
Modeler](graphical-visio-modeler) for modelling.

Stencils are separate files (\* or \* .vss .vssx), which can be
connected to templates and then are always available when
a [diagram](diagram) is created with this template.

### Template

A template (in German a "Vorlage"), is the custom, adjustable base of
new [diagrams](diagram). Templates include the desired shapes as
stencils, but are created and managed as separate files (.vst \* or \*
.vstx). They also provide the opportunity to provide diagrams in the
background with the custom corporate identity (logo etc.), with [diagram
properties](property-group-and-property) (e.g. name, approval status, etc.),
as well as required structures of the selected method (e.g. RACI),
before the modelling takes place in the foreground.

The default template path for new diagrams will be set separately for
each database in [DBConfig](dbconfig-managing-databases).

It is useful to use a structure equal to the [unit](unit) hierarchy in
the [Repository](repository) for the setting up of the Windows
directories for storing the stencils and templates. Parallel folders are
used for the distinction between different languages or methods,
hierarchies allow the inheritance of stencils and templates from top to
bottom.

See also: [Login as Windows User](login-as-windows-user)

<div class="warning">
Attention:

Please make sure that the templates and stencils of a database are saved
in a format appropriate for the version of Visio used.
  </div>
  

![](//images.ctfassets.net/utx1h0gfm1om/2mX8fG8nnCE8eoacgAkWeI/d875f604e8bb1cedae37b3616b15cdc7/328724.png)

*A generic RACI template from the demo database*

#### Individual template path per Unit

On the contrary to specifying the default template path in DBConfig, you
can define in the [Database Designer](database-designer) a separate
template path per [unit](unit)  that should apply to the diagrams of the
respective Unit. When creating new diagrams in the corresponding unit,
only these stencils and templates are used. By using different templates
(incl. stencils) per Unit, it is e.g. possible to create different
notations and modelling methods in a common database on the unit level. 

To set up a custom template path for a unit, proceed as follows:

1.  In the designer open the [properties
    window](properties-dialog-box) of the unit in which you want to
    make the change
2.  Enter in the [property group](property-group-and-property) "Administration", in
    the [property](property-group-and-property) "template path", the path
    that directs to the desired templates and stencils for this unit.
    This path should be entered in relation (".\\Organization\\") to the
    standard template path which is specified
    in [DBConfig](dbconfig-managing-databases).

    <div class="info">
    Note:

    When specifying paths that contain subdirectories, the stencils and
    templates in these subdirectories will also be available for
    modelling in the selected unit. 
    </div>

3.  After logging out and re-logging in to the database, the path will
    be taken over and you can create a new [diagram](diagram) now based
    on the selected template in this unit.
 
#### Functions for managing templates

In the context menu of a [Unit](unit) in the [Database
Designer](database-designer), you can select the following options under
"Diagram templates":

-   *Check-out from the DB (as a locked local working file)* and
    *Check-in to the DB (as an unlocked central file in the DB)*  
    These options are necessary in order to be able to edit the stencils
    and templates stored in the database and become active when stencils
    and templates are stored in the SQL Server (see: [Change the diagram
    storage](change-the-diagram-storage)). Select "Check-out from the
    DB" to check stencils and templates out of the database, to lock
    them for other users and unlock them for editing. A corresponding
    selection window opens to select the stencils and templates for
    editing. Once editing is complete, click "Check-in to the DB" to
    check the stencils and templates back into the database and unlock
    them for other users.
-   *Manage the local templates (add or edit them)*  
    This option allows you to open all stencils and templates defined
    for the unit in order to be edited. A selection window with all
    stencils and templates defined for the unit, provides more options
    for editing:
    -   Change the selected item  
        This option allows you to open the selected stencil or template
        in Visio for editing.
    -   Change the duplicate of the selected item   
        This option allows you to open a new stencil or template based
        on the existing one. Edit this stencil or template and save it
        under a different name, so a new template is created.
-   *Select the folder for the templates*  
    Allows you to define a different template folder for the selected
    unit.
-   *Open the folder of the templates in the file explorer*  
    Opens the default template path which was defined
    in [DBConfig](dbconfig-managing-databases), in Windows Explorer.

![](//images.ctfassets.net/utx1h0gfm1om/7qBn1F6Qg0yQm6mkiIMAi0/c11988d67e73b9955cf5f3093b1c6a69/328726.png)*Context menu for Diagram templates*


*![](//images.ctfassets.net/utx1h0gfm1om/5fySXZ1j3i0IyQ2GqGCQ0s/cc70db7c2288916a95691d0ce0ea9542/328728.png)*

*Two options for editing templates and stencils*