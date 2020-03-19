-   [PowerPoint Export settings](#powerpoint-export-settings)
-   [Advanced Diagram Data Filtering](#advanced-diagram-data-filtering)
-   [Diagrams sorting](#diagrams-sorting)
-   [Finish PowerPoint Export](#finish-powerpoint-export)



### PowerPoint Export settings

If you have selected the function **PowerPoint diagram export** on the
welcome screen of the Import Export Manager (see [Starting the
ImportExportManager](starting-the-importexportmanager)), the following
window appears.

![](//images.ctfassets.net/utx1h0gfm1om/4LqGLcKPmg2IKYmoUgSoqY/7fa65078e569caf1d598c66eb2ac62f0/329591.png)  


*Export settings*

-   **Choose a set** 

In a set, PowerPoint diagram export settings are saved. You can select
an already defined set or create a new one. You can remove sets no
longer needed (see [Export settings](excel-data-export)). 

-   **Unit **

Select one or more desired units, whose diagrams are to be exported. 

-   **PowerPoint Template** 

Similar to the process4 .biz Word Reporter, you are able with PowerPoint
to create a document template in the format "\* .pot", in which all
desired document settings can be saved. If you do not want a customized
document template, leave this option disabled and click Next. In this
case, the default template is used for the PowerPoint export. 

-   **PowerPoint document **

Enter the MS PowerPoint file name and path where the exported file
should be saved. You can also select an existing file. 

-   **Exclude all items that are defined in the modeller as invisible**

Units, classes, objects and diagrams can be marked as invisible in
process4.biz (see [Managing the Visibility](visibility-settings)).
If you enable this option, these invisible items are excluded from the
PowerPoint report. This means that invisible diagrams are not displayed
in the window **diagrams sorting**, if the option ***"Sort diagrams by
property"*** is selected***.*** When the option ***"Generate diagram
tree"*** is selected, invisible diagrams are visible but greyed out,
i.e. not selectable (see [Extended Diagram sorting](extended-diagram-sorting)).

-   **Table of Contents**

A table of contents is added to the document.

-   **Site alignment  
    **

Here you can determine whether diagrams should be exported in portrait
or landscape format to PowerPoint. 

-   **Diagrams as embedded Visio files**

This function will export process4.biz diagrams as Visio objects. 

-   **Diagrams as images**

If you select this option, process4.biz diagrams are exported as "PNG"
files, i.e. as images. Diagrams that are saved as BLOB objects directly
in the database or are password-protected (see [protecting
diagrams](diagram) or [Database settings](database-settings)) can ONLY be exported as PNG images and not as Visio objects.

### Advanced Diagram Data Filtering 

In this window you can select with the help of filters which diagram you
want to export to the PowerPoint document. Activate "Define filters for
data" to define filter settings. The filter settings are defined
according to the same principle, as for the Excel export (see [Advanced Filtering of Data](advanced-filtering-of-data)).

![](//images.ctfassets.net/utx1h0gfm1om/5YKQXXzus8SmG8GYG2KUou/d17a4b423dcbf7d6cf16bf053dc13fcb/329608.png)

*Advanced Filtering of Diagram Data*

### Diagrams sorting

In this step, you can determine the order of diagrams in the PowerPoint
document. You can select one of the 3 following options. 

-   **Sort diagrams by property **

From the top of the window in the column property, choose which diagram
properties should determine the sequence of diagrams. Choose in the
column **order** whether diagrams are to be sorted by ascending or
descending order by this property. The
button ![](//images.ctfassets.net/utx1h0gfm1om/6XJEHqjSF2ummose2MySIK/249610add9fae0c883c25c5207af61d5/328952.png) adds a new sorting criterion
(property), with the button ![](//images.ctfassets.net/utx1h0gfm1om/59rziZLscEIcWYoG2su22W/3bb58c70ad179bffc4b7d5044f1c962d/328955.png) an
existing criterion is deleted. In the list below, you can track in which
order your diagrams are exported into PowerPoint.

For example, you define the property *Unit* as first sort criterion. In
this case, diagrams of one unit are exported first, then of another
unit, and so on. You select the property *classification* as the second
criterion*.* When sorting by unit, diagrams are sorted according to the
type. And finally, select the diagram *names. *When sorting according to
type, diagrams are sorted alphabetically.  

![](//images.ctfassets.net/utx1h0gfm1om/29bUvWVgkg2ckGoIgoUiYm/e1f998fe25e12fbfbe3adfa0a2ca5952/329602.png)

*Sort diagrams by property*
  
Here is an example of sorting according to these criteria:

|        |        |         |
|--------|--------|---------|
| Unit A |    <div></div>    |   <div></div>      |
|  <div></div>      | Type A | <div></div>        |
|  <div></div>    |  <div></div>      | Diagram |
|  <div></div>      | <div></div>       | Diagram |
|  <div></div>      | Type B |  <div></div>       |
|  <div></div>      |  <div></div>      | Diagram |
| <div></div>       | Type C | <div></div>        |
| Unit B | <div></div>       | <div></div>        |
|   <div></div>     | Type A | <div></div>        |
|  <div></div>      | Type B |  <div></div>       |
|  <div></div>     |  <div></div>      | Diagram |
|  <div></div>      | <div></div>       | Diagram |
|  <div></div>      | Type C |  <div></div>       |

In PowerPoint, you get this list of diagrams:

|         |
|---------|
| Diagram |
| Diagram |
| Diagram |
| Diagram |
| Diagram |

-   **Generating the diagram tree**

This option allows you to publish diagrams in PowerPoint in the order in
which they are displayed in the hierarchy tree in the repository. Only
those diagrams are displayed in each unit which are created in this
unit. 

![](//images.ctfassets.net/utx1h0gfm1om/35nZDlgPa0ea6yG24qY4qm/5dd15126a1a87e87a8000d3f0c13c09c/329620.png)

*Generating the diagram tree*

-   **Generate the extended tree diagram**

This option allows to export diagrams in the form of a diagram tree.  
In contrast to the option described above, ALL diagram links are
displayed here, regardless of the unit, from which the diagrams
originate.

![](//images.ctfassets.net/utx1h0gfm1om/54iO3znA5G8GIQSyAM8agY/63ed6a00a29c0d99c21443fe439ab80f/329614.png)

In the lower part of the window, you can select those diagrams that are
to be exported and included in the generated report.

-   **Publish only selected Visio pages**

If diagrams have several Visio pages (see [Using Several Diagram
Pages](Using_Several_Diagram_Pages)), you can select with this option
which pages should be published in PowerPoint.

### Finish PowerPoint Export

After the export process has been completed, the MS PowerPoint opens the
diagrams automatically in the form of a PowerPoint presentation.

![](//images.ctfassets.net/utx1h0gfm1om/3SXvKLdBW8qYcYkI8UIQWe/38a32354a092dd5541fc62d8c04b1a50/329634.png)
 
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>