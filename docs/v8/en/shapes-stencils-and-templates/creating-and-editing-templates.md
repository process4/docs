-   [Create a new template](#creating-and-editing-templates)
    -   [Show diagram or unit properties on the template](#show-diagram-or-unit-properties-on-the-template)
        -   [Display static text with a property](#display-static-text-with-a-property)
        -   [Data Graphics](#data-graphics)
    -   [Create templates in multiple languages](#create-templates-in-multiple-languages)
-   [Edit existing templates](#edit-existing-templates)

 

### Create a new template

1.  Create a new blank drawing in Visio.
2.  Add all the required elements in the background of the diagram (the
    background is opened in the Drawing Explorer).  
    a.  To ensure the accurate positioning of shapes when the size of     the diagrams vary too, use the Visio ShapeSheet. There you can define relative positions (= relative to the page size) which hold the shape in place even in sizes different from the diagram template. 
Example: a shape (e.g. the logo) should always be displayed in the upper right corner, no matter how wide the diagram is. As an example we use an A4-landscape in landscape format; the following values should be stored in the ShapeSheet:
       -   PinX: *ThePage!PageWidth \* 3 cm*
       -   PinY: *ThePage!PageHeight \* 2.5 cm*

  <div class="warning">
            Attention:

            When relative positions have been set for a shape, they will
            not be lost, if the shape is moved via ShapeSheet, but for
            example manually moving it with the mouse or the cursor keys
            will change relative positions (PinX and PinY)!
            
   </div>
3.  Switch back to the forefront of the Visio drawing.

    <div class="warning">
    Attention:

    When a template is saved with an open background, that means that
    you will be modelling also in the background. This can lead to
    problems and unexpected behavior patterns. Please make absolutely
    sure that you have always selected the forefront in drawing Explorer
    before saving the template!
    </div>

4.  Open all required stencils for this template.
5.  Save the template (.vstx \*) as such.
6.  When a new [diagram](diagram) is created with this template, your
    layout and the selected stencils are used automatically.
    
    ![](//images.ctfassets.net/utx1h0gfm1om/4X54PXFgEMaY46KIIukWcm/bddb4c8cf7cfb8854efd7c220878db64/328867.png)

*Equip the selected shape with diagram or unit properties and display
them as in the Template*

#### Show diagram or unit properties on the template

When creating the diagram template (\* .vstx file), you can display
diverse process4.biz- [properties](property-group-and-property) on Visio
shapes. When you then create a diagram based on the template, the
respective property values are displayed on the shapes automatically.

![](//images.ctfassets.net/utx1h0gfm1om/4NDmOI7EkgsSwOksc4As4g/4a289c155dde9fcbf18afc2de598dbbd/328760.png)

*Equip a shape with process4.biz properties*

In order to create these shapes automatically, you should be logged
in process4.biz. Open then the Visio template, create a shape, and
select in the context menu under "Equip with process4.biz properties"
one of the following functions:

-   Equip the shape with unit properties of process4.biz  
    You can equip the shape with the desired properties of the unit
    where the diagram is created.

-   Equip the shape with diagram properties of process4.biz   
    The shape can be displayed with any diagram properties automatically
    such as name, owner, created on etc.
-   Mark the shape as placeholder for the diagram name  
    Select this option if you want to display the name of the diagram on
    the shape (the name display can also be created manually as shape
    data field "p4b\_diagram\_Name" in the ShapeSheet). When you select
    this option, the value is displayed as text in the shape.
-   Mark the Shape as placeholder for the PARENT diagram name  
    Select this option if you want to display the name of the
    superordinate diagram (Parent diagram) on the shape (the name,
    however, can also be manually created as shape data field
    "p4b\_diagram\_ParentName" in the ShapeSheet). When you select this
    option, the value is displayed as text in the shape.

To display the selected property as a text box on a shape, add the
corresponding field to the shape in question:

![](//images.ctfassets.net/utx1h0gfm1om/3BYm4XIBkAYCmu0cQuqKQ0/005130a74a5fb76f948c69dd0d4a5e98/328762.png)

At the next screen, select the desired entry (= the added property) from
the category "shape data".

In the dialog box for equipping a shape with diagram or unit properties,
it is not only possible to select
existing [properties](property-group-and-property): here you can create new
properties or edit existing ones directly - without the detour via
the [Database Designer](database-designer). (Caution: design rights are
required).

<div class="success">
Note:

The properties added to a [Shape](shapes-stencils-and-templates) are often
displayed only after saving the diagram.

</div>

##### Display static text with a property

It is also possible to display
[process4.biz](http://process4.biz)- [properties](property-group-and-property) together
with a static description text on the shape.

After successfully adding a property to a shape, open the ShapeSheet.
Look for the table "Text Fields" and enter the following in the field
"Value" for the corresponding property:

``` xml
= "Class" & Prop.p4b_diagram_ClassID
```

Thus, you will not only display the [class](class) of each diagram, but
have also included a statement from the displayed property value.

The same sort of syntax of course, can also be applied to all the other
properties of the shape added.

![](//images.ctfassets.net/utx1h0gfm1om/3Uw1sVFv4koGiwQU868AKU/5258acaaa2df7cab7fb970eaea025f89/328873.png)

*A text box in the ShapeSheet*

##### Data Graphics

To view the property as Shape Data Graphics, select the function "Data"
and then "Edit Data Graphics" in the context menu of the corresponding
shape. Here you define the view of the data graphics (these can contain
text, a data bar, an icon or a color, depending on the value).
See: [Displaying Properties as Visio Data
Graphics](displaying-properties-as-visio-data-graphics)

#### Create templates in multiple languages

To create diagram templates in different languages and to make them
available, proceed as follows:

1.  The templates should be aligned in a folder structure according to
    language

    
    __Here an example of this:__

    ` xml
    Stencils\
        de\
            RACI.vstx
            RACI.vssx
        en\
            RACI.vstx
            RACI.vssx
    `

2.  Names of language-specific folders are, for example,
    **"en"** and **"de"**
3.  The templates of different languages should have the exact same name

If a new [diagram](diagram) is created with active content English
language (see [Client Settings](client-settings)), the English template
is automatically used for the corresponding stencil. In a subsequent
language change back to German, the template incl. the stencils will be
loaded in German, as soon the diagram is reopened.

### Edit existing templates

To edit existing templates, proceed as follows:

1.  Open the relevant template in Visio "File" -&gt; "Open"
    1.  If you have your templates stored not locally or on a network,
        but in SQL Server or SharePoint (see [database
        settings](database-settings)), they must be checked out of the
        database in the [Database Designer](database-designer) (via the
        context menu of the [Unit](unit)) for editing.
2.  Edit the template according your preference
3.  After editing the template, please make absolutely sure that you
    have closed any open diagram background again.
4.  Save the template
    1.  If you have worked with templates from the database or from
        SharePoint, check them in again.
5.  Run the Wizard [updating diagrams](diagram-update), to apply your
    changes to already existing charts.

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>