-   [Import Settings](#import-settings)
-   [Selection of units](#selection-of-units)
-   [Selection of classes and properties](#selection-of-classes-and-properties)
-   [Finish Excel Data Import](#finish-excel-data-import)

### Import Settings

If you have selected the Excel data import function, when starting the
Import Export Manager (see [Starting the
ImportExportManager](starting-the-importexportmanager)), the following
window appears:

-   **Choose a set **

In a set, import settings are stored. You can select an already defined
set or define a new one. Sets that are no longer needed can be removed
(see [Export settings](excel-data-export)). 

![Import Setpage](//images.ctfassets.net/6mz8d8cle1nl/2ipvSY9kSQIX5AvHjbmEIr/918429480fd1a309cde10b42ac66e8da/Import_Setpage.png)

-   **Unit **

Please choose the unit, in which the data should be imported from the
Excel file. 

-   **Import from**

Specify the MS Excel file name and path of the Excel files, from which
the data will be imported. The file format of the Excel file is
described here in [Excel Import Export document
format](data-exchange-between-process4-biz-and-ms-excel). 

-   **Exclude all items that are defined in the modeller as invisible **

Units, classes, objects and diagrams can be marked as visible
in process4.biz (see [Managing the Visibility](visibility-settings)).
If you enable this option, invisible items from the Excel report will
not be imported into the database. This means that invisible classes are
not displayed in the wizard selection window of the classes and
properties and that classes are not imported into the database. When an
object is invisible in process4.biz and this object is available in the
Excel file, you are asked during the Excel import, if the invisible
object is to be overwritten or not. 

-   **Import from object links** 

Enable this option if you want to import object or diagram links of an
object incl. the corresponding link types and association objects into
the database. 

-   **Delete object links via Excel** 

This option allows a complete synchronization between object links in
the Excel file and the process4.biz database. This means that if one or
more object links in the Excel file have been DELETED or do not exist,
they are deleted also from the process4.biz database after import.

-   **Delete diagram links via Excel** 

This option allows a complete synchronization between diagram links in
the Excel file and the process4.biz database. This means that if one or
more diagram links in the Excel file have been DELETED or do not exist,
they are deleted also from the [process4.biz](http://process4.biz)
database after import.

**When an "automatic" link (=which can be generated only while modelling
on diagrams) does not exist **in the target repository**, then it should
be imported as a "manual" link **

If you want to import automatic links, activate this check box.
Automatic links are read by the selected link technologies from the
Visio diagrams and stored in the database. If you want to export, modify
and reimport it to Excel, then it will be updated as automatic link.
Only if this link does not exist in the database is it imported as a
manual link. 

-   **Compare by name / Compare by ID** 

During import, it is checked whether the object to be imported from the
excel file already exists in the repository. If so, changes made are
applied to all properties. If this object does not exist in the target
unit of the repository, it is created. By comparison, either the name or
the ID of objects can be used (see [Excel Import Export document
format](data-exchange-between-process4-biz-and-ms-excel)). 

<div class="warning">
When you select an Excel file for the import, make sure that the current
database language and the language of the data that you want to import
from Excel, are the same. This helps you to avoid false matches between
units, classes and objects in the database and the corresponding Excel
sheets. If the names in the columns differ from the names in the current
database language (see [Excel Import Export Document
Format](data-exchange-between-process4-biz-and-ms-excel)), you will be
notified with a warning message.
  </div>

Click the ***Next*** button to select the following settings in the
subsequent dialog box.

### Selection of units

-   **Select content language for import**

If you have published your data in two or several languages for
translation, you can define here languages in which the object
descriptions are to be imported back into the database. Please note that
the back importing of data from Excel in the p4b database in two or more
languages at the same time, under certain circumstances, may lead to
mistakes; therefore we recommend that you import the data separately for
each language. Consider the following points if you still want to import
two languages simultaneously: 

-   The ID field must be filled in both languages for the object with
    the same ID, otherwise the p4b - Import Manager identifies two
    different objects. 
-   Do not change the alternating mapping of rows according to the
    language that you have exported and then want to re-import (i.e. the
    order of lines DE, EN, DE, EN ... and not EN, DE ...) 
-   When you create new objects in Excel that you want to re-import in
    both languages simultaneously, then you absolutely need to fill the
    ID fields (first column in the table) for both rows of the same
    object with the same negative value (-1, -2, -3, etc.), to avoid
    duplicates 
-   Do not export and import object links in multi-language mode

<!-- -->

-   **Choose Units which you want to import from Microsoft Excel**

Here you can select those unit(s) whose data you want to import from the
Excel document in the database. Please note that all objects from
multiple units will only be imported in one pre-defined unit. 

At the bottom of the window there are two options for the continuation
of the dialogue: 

-   When you click the ***Next*** button, you can check how Excel
    worksheets and columns are assigned to the process4.biz classes and
    properties and, where appropriate, modify them (see selection of
    classes and properties).
-   When you click the ***Finish*** button, the import process will
    start based on the automated assignment (see [Excel data import
    completion](excel-data-import)).
    
![](//images.ctfassets.net/utx1h0gfm1om/3cJqyzQYqcEowKKaEa40GU/ec70b4ec0c1b9bcdcbaad353159e9631/329560.png)

### Selection of classes and properties

At this point you can select the Excel worksheet in the left window,
which should correspond to the desired process4.biz classes when
importing. Classes of objects and diagrams are highlited by different
colors. In addition, the ID number of each class is displayed. This
allows you to distinguish between two classes with the same name based
on their ID.

In addition, you are able to select in the right half of the dialog
box those Excel columns for each (left marked) class that should
correspond to the process4.biz properties. 

The button ![](//images.ctfassets.net/utx1h0gfm1om/1i2qWRQ0EaiKwk48cCmKyw/473ccb45b2a7ecb0aff36e185c355a3b/329582.png) changes the
column order between P4B classes and Excel worksheets and the column
mapping between p4b - properties and Excel columns for all classes. It
is changed according to the rule "Class Name -&gt; Excel Worksheet" (and
"Property Name -&gt; Excel Column Name"). 

The button  ![](//images.ctfassets.net/utx1h0gfm1om/3eudrJnJ0AsMMeEa88EMas/05a4f6df46b34744d25d16b79b1a3f08/329574.png)changes the column order
between p4b properties and Excel columns in the selected class. It works
according to the same rules, only for a single class. 

Click the ***Finish*** button to start the import process.

![Import property mappin](//images.ctfassets.net/6mz8d8cle1nl/767CahJglIHEDGhMz8Tuu6/4978a4f660807e7f7fc8a52644012463/Import_property_mappin.png)


### Finish Excel Data Import

This following window shows the import process:

When the import is complete, you can click on the button Show Log, to
show the import log file. This protocol allows you to check whether the
import ran without errors or which errors may have occurred: 

![](//images.ctfassets.net/utx1h0gfm1om/KuTsHhdcAe86KIcmwCs04/ef59e9d16e1e8210bc57f20039c5a992/329114.png)By
clicking ***Finish*** in the last dialogue window, the import process is
completed.

![](//images.ctfassets.net/utx1h0gfm1om/5RYO9kgHniC6IskGI8M68A/a26276e384d5ddd0d2721b57bc683adf/329597.png)

