
-   [Create New Master-Shapes](#create-new-master-shapes)
-   [Automatically Connect Master-Shapes With Process4bIz Object On Drag
    & Drop](#automatically-connect-master-shapes-with-process4biz-object-on-drag--drop)
-   [Equip master shapes with properties](#equip-master-shapes-with-propertiess)


In process4.biz, all [Stencils](shapes-stencils-and-templates) and
Master [Shapes](shapes-stencils-and-templates) available in Visio can be
used. In addition, new master shapes can be created or existing shapes
can be adapted according to your preferences.

The basic delivery of process4.biz and the demo database, usually involves the [Stencils](shapes-stencils-and-templates) for the methods EPK, CATALYST ™, EAM, RACI and BPMN, and optionally matching stencils for reference models.

### Create New Master-Shapes

To add a new Master-Shape to a stencil, proceed as follows:

1.  Open an existing template (=stencil) in Visio, by opening
    a [template](shapes-stencils-and-templates) or a [diagram](diagram).
2.  Turn the template to the edit mode.

    <div class="info">
    Note:

    Stencils and templates that are saved as Visio files not on the hard
    drive, but in the SQL Server database, must first be checked out
    from the database. See: [Shapes, Stencils & Templates](shapes-stencils-and-templates)
    </div>
    ![](//images.ctfassets.net/utx1h0gfm1om/6XSktFgosEc6uACGKWoSeI/9bcc8a645a443c2bc8c7bf7177624a42/328730.png)*Edit a Stencil*  
    
    ![](//images.ctfassets.net/utx1h0gfm1om/5kkumzWlRS8kIaisMOukgC/7a53ea61dab99bfd2c1a70b455afa59a/328716.png)
*Drag a shape from a diagram in the Stencil*

3.  To create a new or edit an existing Master-Shape, select the
    appropriate function from the context menu (for this tutorial we
    chose *New Master*).
4.  Fill the fields in the dialogue box (for detailed information, see
    [Visio documentation](https://msdn.microsoft.com/en-us/library/office/fp161226.aspx))  
    The hook (in the *Behavior* properties group) "Match master by name
    on drop", should not be set, so that the [Diagram Update
    Wizard](diagram-update) can update modified Master Shapes on the
    diagrams.

5.  Clicking OK adds a new (empty) shape to the stencil.
6.  Open the added Shape via its context menu for shape editing (context
    menu *Edit Master &gt; Edit Master Shape*).

7.  Draw a new shape; you can use all functions offered by Visio.

8.  After completing the design, close the window, and save the new
    Master-Shape.

*![](//images.ctfassets.net/utx1h0gfm1om/5TRROO2FPOcEKUmSOU4OCw/5c7fb76183f23f184cd1202f5a44be84/329441.png)*

*Insert new "User-defined cells" Section in order to automatically connect mastershape with process4biz object*
 

<div class="success">
  Alternative

Alternatively, you can create the shape on a [diagram](diagram) (or use
an existing one) and then drag it to the stencil. If the template is not
in edit mode, you will be prompted to activate it.  
Then enter the name for the new Master-Shape, save the template and turn
off the edit mode again.
</div>


If you want to edit existing master shapes, e.g. to add or change [data
graphics](displaying-properties-as-visio-data-graphics), you should put
an [object](object) with this master shape on the [diagram](diagram),
edit the shape accordingly and then drag it back to the templates. You
can select the name of the future master shapes with reference to the
existing [classes](class) during the procedure. In addition, you can
decide whether the temporarily used object should be deleted only from
the respective diagram or from the database. Finally, deactivate the
edit mode.

 

### Automatically Connect Master-Shapes With Process4bIz Object On Drag & Drop

1.  Open template and choose "Edit Stencil"
2.  Choose Mastershape you wish to edit: Right-click on the
    mastershape &gt; *Edit Master* &gt; *Edit Master Shape*
3.  Right-click anywhere on the shape and choose *Show ShapeSheet*
4.  Right-click and choose *Insert Section...* &gt; *User-defined
    cells* &gt; *OK*
5.  Rename user-defined cell *User.Row\_1* to *User.P4BClass*
6.  Set value column to the name (in quotation marks) of the class you
    wish to connect this mastershape to, in this example it is
    "Information":  
      
    ![](//images.ctfassets.net/utx1h0gfm1om/323HzSTGjS0gGGQyyQy6UC/65d443a1df9260f4f099d7e9cdce32b8/329203.png)

 

### Equip master shapes with properties

It is possible to show [properties](property-group-and-property) on
the [shapes](shapes-stencils-and-templates) that represent graphically
the [objects](object) of a [class](class). This means, for example, that
 instead of the name of the object, a value of another property is
displayed on the configured shapes of the objects on
a [diagram](diagram). In addition, this function can be used to [display properties as Visio Data Graphics](displaying-properties-as-visio-data-graphics).

To equip master shapes with properties, proceed as follows:

1.  Select the Master-Shape in the template
2.  From context menu select *Equip with Process4.biz-properties* &gt;
    *Select a Process4.biz object...* and select desired object, whose
    property (-ies) will be displayed on shape.
3.  Select option "Equip the shape with object-properties of
    Process4.biz..." from the context menu of shapes.
4.  Select the desired property.  
    You can also create new properties in this window, as well as
    editing existing [properties](property-group-and-property) and [system properties](system-properties) (Caution: design rights are
    required).
5.  Open the Master-shape for editing (see above) and edit.
    a.  To display the selected property as a text field on a shape, add        a field to the corresponding shape:

       ![](//images.ctfassets.net/utx1h0gfm1om/1siaS3f5vCGaEkIiKsQeI2/db0aee68f6b2cdb193a40ecfae88288e/328775.png)

        In the next window, select then the category in "shape data" (=
        the added property).

    b.  If you want to add a data diagram to the master shape, you can
        find the necessary information here: [Displaying Properties as Visio Data Graphics](displaying-properties-as-visio-data-graphics)

6.  Save the template with the modified Master Shape.

7.  Now create a new object on the diagram by dragging the modified
    shape. Enter a value for the defined property in the [Properties window](properties-dialog-box) and click OK. As a result, the
    property value is displayed on the shape.

If you open the master shape to edit it on a [diagram](diagram), select
the shape and right-click on it, you can use the context menu to equip
the master shape directly on a diagram with
a [property](property-group-and-property).

![](//images.ctfassets.net/utx1h0gfm1om/1pgw7Tb7hK28qs8MAAmkcI/c42bb9f012700b4f30a7fbe90e6337e9/328773.png)

*Equip a master shape with a property*