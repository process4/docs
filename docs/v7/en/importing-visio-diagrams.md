Process4.biz provides a special function Diagram Import, with which the
existing Visio diagrams can be imported into the database unchanged as
process4.biz objects with allocation in the corresponding units.

1.  The Import function is called either using the context menu of the
    diagram hierarchy branch on the left navigation window of the
    Repository (s. image below), or you can open the function in the
    process4.biz menu under Wizards.   
    ![](//images.ctfassets.net/utx1h0gfm1om/5lYy31cgW4MSgMGEy88GoS/7ca92d673070f6ef35b636a9dc325b75/329051.png)  
    or: ![](//images.ctfassets.net/utx1h0gfm1om/1ZHQRgiGRyu46o20w4IU4Y/ee03040f2c27dfdf35f0573a84aa2f9f/329037.png)
2.  You will see a welcome page. Click ***Next.***
3.  Select the unit into which the diagram should be imported:  
    ![](//images.ctfassets.net/utx1h0gfm1om/1K65FQVV4c0MGmeogWmCOe/00ca077ad3eb13c83b8b1c6d8e08863e/329039.png)
4.  Select the Visio diagram file ("\*.vsd" / \*.vsdx) that contains the
    diagram to be imported. When a Visio diagram has several diagram
    pages, all these pages are imported in process4.biz.
5.  Give the new diagram a (freely chosen) name and select the
    diagram [class](file:///S:/Temp/Andre/help.process4.biz/bitte%20%FCberpr%FCfen/Klasse_1736714.html).  
    ![](//images.ctfassets.net/utx1h0gfm1om/42y71ClhgQqiWQCqoiqeoU/89eea543bf940f49b4c94bf27745c891/329041.png)
6.  Tick the check box ***"Use the previously saved schema",*** if you
    want to use diagram-import settings that you had previously
    already stored in the form of a "\*.settings" file (see item 11).
7.  Select the template (= stencil) that you want to use in your
    diagram. You can keep the original template of the Visio diagram to
    be imported or add a template used in Process4.biz to the
    diagram. The templates of Visio and Process 4.biz can both be
    preserved at the same time, when you select the function
    ***Preserve the "source" -stencil additionally to the"process4.biz"
    stencil.***

   <div class="info"> 
  The template (template="\*.vst" / \*.vstx) is not adopted in the import.
  </div>

     

   ![](//images.ctfassets.net/utx1h0gfm1om/14Q1wY5hJiEMUagcyYAkgK/b6272c9590e8f10d9b4446228ea40450/329043.png)

     

8.  Next, the import settings are defined.

    ![](//images.ctfassets.net/utx1h0gfm1om/7ifeurJcxGYGo2yuu0W68w/4a20c77879cb0d2618c5c7cb54b5736f/329029.png)

    You can choose whether new classes should be created for those
    import objects for which no matching classes are found in the
    database, or whether such objects should be ignored. The first
    option is only available if the target unit is locked in the
    designer and the user who performs the import, has design
    permissions. Select also whether properties of shapes with no value
    are to be ignored. This option relates to the import of user-defined
    properties of Visio shapes to the import diagram, which are then
    added as properties in the process4.biz database. Visio shapes may
    sometimes also contain invisible properties. Select the
    option ***"Ignore invisible properties"***, if these properties
    should not be imported into the p4b database. Enable ***"Generate
    only one object for duplicates of the same shape"*** if only one
    object should be created in the database for several shapes of the
    same name.

9.  Now define the different classes in the repository, which the
    individual shapes of the import diagram should be assigned to (for
    the previously defined stencils in section 7). Select an existing
    process4.biz class or create with process4.biz a new class that will
    be associated with the template.

Example 1: Creating the new class "Prozess" in the repository:

![](//images.ctfassets.net/utx1h0gfm1om/3sa2VvL7kQ0YaciY44kCew/634532d5e597f0e1a450ca804e1a6f5f/329031.png)

Example 2: Assignment possibilities for the shape "Manage IT-strategy"
from the import diagram to classes in the opened drop-down menu with the
possibilities not to assign this shape to any class ("Ignore"), to
define a new class name ("New ..."), to create a new class with this
shape name or to assign this shape to one of the existing classes:

![](//images.ctfassets.net/utx1h0gfm1om/T7n3eFHgoUiE0se2K4eiu/6bc54a2698e5effce0f698f06aeb5dd0/329033.png)

Next, you can import the user-defined properties of the Visio shapes
(objects) of the imported diagram into the process4.biz database.

-   The first column shows the Visio Shape data and, when you open a
    property, the related import object.
-   By clicking, you can choose a property in the second column you can
    choose a property group, in which the shape data property should be
    imported. 
-   In the third column you can select the name of the new property in
    the process4.biz database, or specify a new name (and thus create a
    new property).

 

In the picture below you can see the drop-down menu in the third column,
where the name is defined:

![](//images.ctfassets.net/utx1h0gfm1om/7IOUnKGu3Yee0mOIEUeCuc/ee94bf5b96ed5ba9200a21b24fcf79a7/329035.png)

 

  10. The Diagram Import wizard is now ready for the import process:

![](//images.ctfassets.net/utx1h0gfm1om/1oMnXlq7a4mqmGaY2UUOkE/6ba0c64ddbcbb1f6c86bdf7869b61b12/329021.png)

Click ***"Save schema as ..."*** if you want to save the diagram import
settings to use them during the next import process. The schema is
created in the form of a "\*.settings" file and the following settings
are stored: 

-   Target unit (see point 6)
-   Template settings (see point 7)
-   Import settings described in point 8,
-   the assignment of diagram master shapes to process.4biz classes
    (point 9),
-   the assignment of user-defined properties of Visio shapes to process
    4.biz property groups and properties (point 10). 

Click ***Finish.*** The imported diagram is opened after the import
process has been completed.
