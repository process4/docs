-   [Export Settings](#export-settings)
-   [Advanced filtering of object data](#advanced-filtering-of-object-data)
    -   [Conditions](#conditions)
-   [Select Data](#select-data)
-   [Finish Excel Data Export](#finish-excel-data-export)



### Export Settings

-   **Choose a set**Settings are stored in the set (selection of the
    unit to be exported, classes, properties, etc.). You can select an
    already defined set or define a new one. You can remove here sets no
    longer used.In this window, you can define the set name and the
    description and you can also enter the translations. For existing
    sets you open this window by clicking on Set Details. The name of
    the set and the description can be translated into other languages;
    to open the translation window, click the button "T". 
    
![ImportExport Setpage](//images.ctfassets.net/6mz8d8cle1nl/2x53jpn8m3dZme4DHWgHlQ/e5e6fa2d3d5df61217f6dac980ffb759/ImportExport_Setpage.png)

*The start window of the Import Export Manager*


![](//images.ctfassets.net/utx1h0gfm1om/6Yw155QBdCiKYCMysky64U/460982bdde571ba3feefcc97feef4980/329538.png)

  
-   **Unit**  
    Select the desired [Unit(s)](unit) from which you want to export
    data. The export can be performed for data of one or more selected
    units. [Objects](object) of an individual Child-unit can also be
    exported.

-   **Excel document**  
    Specify the MS Excel file name and the path for storing the data to be exported. You can use an already existing file.
    <!-- -->
-	**Export shape-specific data**
Check this box to export shape-specific data of objects (see chapter [Shape-Specific Properties](shape-specific-properties)). Property values that are marked as shape-specific are displayed in Excel in the following form: "Unit Name :: :: DiagramName Shape Number :: Value". 
-	**Filling empty property values with default values**
Enable this option if you want empty properties to be filled with values from the default language. Note that there are some properties, such as unit name, object name, class name, and some selectors, such as diagram selector, class selector, etc., which are filled automatically, because it is necessary for the proper functioning of the extension.  
-	**Exclude all items that are defined in the modeler as invisible**
Units, classes, objects and diagrams can be marked as invisible in process4.biz (see [Visibility Settings](visibility-settings) and Apply/Edit a design element). If you enable this option, these invisible items are excluded from the Excel report. In other words, classes are invisible in the wizard window and objects from these classes are not included in the report.  
-	**Export hyperlink name as address**
This option allow ignoring the name of hyperlinks in the report and presenting only its value. The options is not active by default and when it is not selected in the report exported names of hyperlinks (it still operates as link).   

<!-- -->
-   **Object links**  
    Check this box if you want to export object links as well.

-   **Diagram Links**
     Check this box if diagram links are to be exported as well.

-   **Used in Diagram**  
    Check this box if you want to see the list of diagrams on which the object to be exported is used. 
    
<!-- -->
-   **Export diagram properties**  
    Check this box if you want to see the list of diagrams properties in the report.
    
- **Export the file properties**
	Check that box if you want to see the list of files properties in the report 
-	**Export the tag properties**
	Check that box if you want to see the list of tags properties in the report 



-   **Choose another content language for the export**  
    This option allows you to export your data in multiple languages to
    Excel. This allows for maintenance and translation of your model in
    a simple manner. When selecting one or more additional languages for
    each object in Excel, a second, third, etc. line is generated, which
    contains the object descriptions in the chosen language. The
    abbreviation for the respective language appears in the column
    "LanguageID".   
    If for example, the object name, description, or another property is
    available in only one language in the repository, the second, third,
    etc. row of this column remains empty in the exported Excel
    document. You can then translate in this line and import the updated
    and complemented data back to the database using the Import Export
    Manager. 

![](//images.ctfassets.net/utx1h0gfm1om/cuiT5pgsz62KMmaggwIGm/d33f24673f85b1c9bd64a3431d3de4e2/329552.png)

*Language selection for the data export*

In Wizard on the bottom left are the following additional buttons: 

-   **Help**  
    Opens the documentation of the Import Export Manager.

-   **Save**  
    If you click here you can save the set at any time during the
    Wizard, before the export is complete. ** **

-   **Save under**  
    Saves a new set based on the currently selected.

-   **Cancel**  
    Cancel the wizard without any changes.

-   **Back**  
    Return to the previous page of the wizard. ** **

-   **Next**  
    When you click the Next button, you can specify the data for export
    in more detail (see [Advanced Filtering of Object
    Data](advanced-filtering-of-data)).Your selection will be saved as a
    preselection for future exports under the specified set name. ** **

-   **Finish**  
    When you click the Finish button, the export process with the
    existing set definitions is completed (see [Finish Excel Data
    Export](excel-data-export)).

 

### Advanced filtering of object data

In this window you can determine easily with the help of filters which
specific items are to be included in the Excel document. Activate
Advanced filtering for data to define the following filter settings. The
filter settings are defined via special formulas. 

![](//images.ctfassets.net/utx1h0gfm1om/7IteGSjyUMssmUkiiQ8iIK/317014292603f74625950b944ebaa072/329547.png)*Advanced filtering of object data*


In the table Applied to, determine whether these settings are to be used
for filtering of objects. 

![ImportExport Export content](//images.ctfassets.net/6mz8d8cle1nl/3CNxvgHnfIVr2EyifeqbCx/2b6b005d47826884aaa0f0808f5ae70c/ImportExport_Export_content.png)

*Selecting the exported content*


In the table, you can define the following conditions: 

-   **With owners  
    **Select a specific owner whose objects you want to display. Any
    user or Windows user group can be selected as the owner. In the
    latter case, all objects are displayed, which belong to the members
    of this group. 
-   **Created by**  
    Using this option you can publish all objects that were created by a
    specific user or member of a particular Windows user group. 
-   **Created after**  
    Objects created after the selected date are published. 
-   **Created before**   
    Objects created before the selected date are published. Always
    define +1 days. If an object was created e.g. on 20.09.08, you
    define "created before 21.09.08" to include this item in the
    report. 
-   **Modified by**  
    You are able to evaluate all objects in the form of an Excel
    document that have been modified by a specific user or a member of a
    particular Windows user group. 
-   **Modified after**  
    Objects modified after the selected date are published.
-   **Modified before**  
    Objects modified before the selected date are published.
-   **With approval management**   
    Define with this option that only objects with certain approval
    statuses are to be included in the Excel report (multiple selection
    is possible whereby more lines are drawn with "AND"). 
-   **All statuses**
-   **Approved**
-   **Unapproved (all objects are exported except for the approved
    objects)**
-   **Undefined**
-   **New - work in progress**
-   **New - needs improvement**
-   **New - waiting for Approval**
-   **Updated - work in progress**
-   **Updated - needs improvement**
-   **Updated - waiting for approval**
-   **Deleted**  
    This filter is only available when the approval management  has been
    activated in your database, i.e. a corresponding property
    (ApprovalStatus) is available for one of the object classes or
    diagrams (see [approval management](approval-management)). Otherwise
    this option is greyed out.

-   **With tags**  
    Only objects and diagrams with
    selected [tags](timeline-properties-for-classes-and-diagrams) are
    published. This filter is only available when the selected unit
    contains classes for which tags have been enabled.
-   **Satisfy the query criteria**  
    The filtering of data can also be based on a query which was created
    with the [Query Builder](querybuilder).

    <div class="info">
    Please note:

    Only queries with the object type "Generic objects" can be used for Excel data filtering. 
    </div>

-   #### Conditions

    The conditions can be combined via the logical operators AND or OR.
    Click on the "+" sign if you want to add an additional condition and
    on "-" if you want to delete the condition.  
    OR means logical summation, AND - logical multiplication, which also
    means that AND has more priority than OR. Determine the priority
    with a bracket. For example, "A or B and C" is equal to "A, or (B
    and C)".

    **Example:** All objects (with approval status = new OR with
    approval status = updated) AND (with owner = "admin," or with owner
    = "User1"). Result: all of the objects that have been created or
    updated by users admin or user1.  
    In the column "Non", you can set the exceptions. For example, you
    can show all objects that have been modified by all users except for
    Admin and Designer. The formula for this is "NOT changed by Admin
    AND NOT changed by Designer".

    In the field below, a special text is generated that describes all
    defined filter settings.

![](//images.ctfassets.net/utx1h0gfm1om/4Aqi2z4VeEWGAEc0GeMGOE/5464aaa88fd094570103410e4c284afb/329025.png)

### Select Data

Here you can select the classes, property groups and properties of
object and diagrams to be exported. Enable or disable the corresponding
entries. Then click the finish button to start the export process.

You can change the order of classes in the list with the property
"priority" (see [Creating a new Property](creating-a-new-property)).

### Finish Excel Data Export

Finally, the generated Excel document is opened automatically.


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>