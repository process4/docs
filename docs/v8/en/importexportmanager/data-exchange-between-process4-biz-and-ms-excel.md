-   [Excel Import Export document format](#excel-import-export-document-format)
    -   [Object links in Excel](#object-links-in-excel)
-   [Bidirectional data exchange](#bidirectional-data-exchange)
    -   [Generate Excel lists of all diagrams](#generate-excel-lists-of-all-diagrams)

 

### Excel Import Export document format

In order for the export or import to an Excel file to be completed
successfully, MS Excel documents must have the following format.

-   For each class, a separate worksheet is needed or created in the
    Excel file. When exporting, the name of the worksheet corresponds to
    the class names in process4.biz. When importing, you can select the
    desired worksheets for every class yourself. 
-   The first 3 columns (A, B, C) are required to import data into the
    database
-   Column A contains the ID number of objects. Cell A2 contains the
    class names of the objects listed below
-   Column B is called "Object Name" and the object names are listed in
    the same column. This column should always be available and filled
    with values.
-   Column C is called LanguageID. When you export content in two or
    more languages, a second, third, etc., row is generated for each
    object in Excel with the language description, which includes the
    object descriptions in the chosen language. If the value of the
    column "LanguageID" has been set as empty or is false, the object is
    ignored during import (not imported).
-   After exporting, the property groups are contained in the second row
    and the property names in the first row of the Excel file.
    Exceptions: the cells A2, B2, C2.
    
![](//images.ctfassets.net/utx1h0gfm1om/IIXN3jdPKCOgK6EwSCy0Q/a80ab37f6df16ce492d69f899c93799d/328916.png)

*Format of the Excel document*

When importing, you select the Excel columns or the process4.biz
properties which should match each other (see [Data
Select](excel-data-export)). 

<div class="info">
When exporting diagram or object links, the links in the columns
"diagram links" and "Object Links" can be seen. These links can also be imported into the repository. 
  </div>

When you have selected during import the setting "comparison by name"
(see [Import Settings](excel-data-import)), column A must exist and be
filled. If an ID exists in Column B and you have selected the option
"comparison by ID" (see [Import Settings](excel-data-import)), the
object description will be adjusted in the repository. If no ID is
present, a new object is created. 

All remaining columns contain the property values of the properties
listed in line 2. 

If the field multiple selection (multi-selection) is set to TRUE for a
property, multiple values can be simultaneously imported for a property.
They should be separated with a comma "," or semicolon ";".

If you want to fill a property with the type "DataTime" in Excel and
import it into the database, you should make sure that the date format
is specified correctly in Excel. Set this field in Excel format on the
"Date" or "Time" and then enter the value. 

If you have created a property with the type Hyperlink
(e.g. http://process4.biz/) in process4.biz, exported it in Excel and
imported it back into process4.biz, you will get as a result
in process4.biz "[http://process4.bi](http://process4.bi/)[z](http://process4.biz/) \| [http://process4.biz](http://process4.biz/)["](http://process4.biz/).
In other words, the name of the hyperlink is filled automatically with
the hyperlink value. 

If you want to create and import new objects in Excel, it would be
enough to fill in the column Object Name. During import, you should then
also select data for import from the empty unit.

![](//images.ctfassets.net/utx1h0gfm1om/4dQoRgg3GE4MEYaKcYAsEE/0fb7fc4325403214b000425c44af07fc/329352.png)

*Creating new objects in Excel and import into process4.biz*

#### Object links in Excel

Object links are exported to Excel in the following way:

-   The characters &lt;,&gt;, &lt;&gt; indicate the directions of the
    standard link types: *linked to, linked from, linked with.* The name
    of the link type itself is enclosed in square brackets \[uses
    following server\]. If the link type is directional (directed
    directly = True) and has directly directed and opposite names, these
    names are indicated via directions &lt;,&gt;; only the name of the
    link type is displayed as text in brackets.
-   The symbol {a} shows that objects were automatically linked using
    activated link technology.
-   The name of the corresponding class of the linked object follows and
    then the name of the object itself.
-   When available, the association objects are enclosed in square
    brackets \[R, A\], for the link.

![](//images.ctfassets.net/utx1h0gfm1om/57B8hAtNza0gEsgKUcUOeU/d36fc69167f048f2e5d8f7d5c651b24f/328928.png)

-   If a property type Enumerator or Object linked selector is defined
    for a class with the multiple selection set to "true" and multiple
    values are specified for an object, they are separated via a comma
    "," or semicolon ";".

![](//images.ctfassets.net/utx1h0gfm1om/39CsImGgVOscAkGmComSsW/374a410f88f859346fd88128f71ef9a2/328926.png)

-   As of release 6.0.0, there are 2 types of object-to-diagram links:
    -   TreeLinks are relationships between objects and diagrams that
        affect the diagram hierarchy tree. In other words, those
        diagrams are displayed under the respective parent diagram in
        the tree. During export to Excel, they are marked thus: "{R:
        ParentDiagramName}LinkedDiagramName".

![](//images.ctfassets.net/utx1h0gfm1om/7abs99HPYQMYGcGM4KGoU8/a2a81a3eaa1333f005788b751d2aaac7/328920.png)

-   -   Reference links are those between objects and diagrams that do
        not affect the diagram hierarchy tree. In other words, those
        diagrams do not appear under the respective parent diagram, but
        simply in the highest hierarchy level in the tree. During the
        export to Excel they are marked thus: "{T: ParentDiagramName}
        LinkedDiagramName".

![](//images.ctfassets.net/utx1h0gfm1om/yn0IRgnkbuWGUa4ysKyea/724c5d8b6e6b3e4ad0e3b891c7d0850b/328921.png)

 

### Bidirectional data exchange

As mentioned above, the Import Export Manager can be used as tool for
bidirectional exchange of selected content between the process4.biz
database and Microsoft Excel. The prerequisite is that the MS Excel
files correspond to the document format described above ([Excel Import Export document format](excel-data-import)).

Especially in connection with the intake of larger amounts of data in
the standardized process4.biz database or their modification or
translation into other languages, the use of MS Excel can be used itself
as an effective and simple tool. You have the option to export your
database contents in one, two or more selected content languages to MS
Excel. You can define what languages should be available in your model
via ***Process4.biz → Administration → Database Settings ...*** and
select via ***Process4.biz → Client settings ...*** the currently
displayed content language for your model. 

When exporting to Excel, you can use the special option "More Content
Languages ..." (see [Export settings](excel-data-export)) to export your
entire model, including all properties in two or multiple languages into
a single file. The generated Excel document is structured in such a way
that there are two rows with object descriptions (one per language) for
every object of an ID that can be clearly identified by means of the
LanguageID.

You have the ability to modify data, to supplement them, or even
translate your model into the second or third selected content language.
Enter the translations in the empty cells of the second line, save the
file and then start the process4.biz Import Export Manager to import the
data back into the process4.biz repository. You can select whether the
objects, including their property values, are to be imported, in a
specific language or in both languages.

 

![](//images.ctfassets.net/utx1h0gfm1om/2vMsVaNd0cOqyqYUqEkiIu/88bf6948d39bf7e950985de985510c63/328932.png)

*Multilingual import from Excel*

#### Generate Excel lists of all diagrams

If you use the Process4.biz import-export manager for export to MS Excel
(see [Excel data entry](excel-data-export)), you can evaluate when
activating the respective export options, among other things, on which
diagrams is an object and what links exist to diagrams. 

If you want to generate in Excel an object view in addition to this
listing of your process4.BIΖ diagrams, you can mark the desired diagrams
in the right window of the repository, the object table, and paste them
simply by copying and pasting into an open MS Excel worksheet.

In this example, the diagrams of the unit "0.Organizational structure"
were copied to MS Excel. 

Similar to the Excel data entry (see [Excel Data Export
Statements](excel-data-export)), the individual diagrams are represented
by the rows of the worksheet and the columns display the diagram
properties.

![](//images.ctfassets.net/utx1h0gfm1om/2akjjHqpY4yYMA4YUKiQg8/963cdf84e47114768e15406243fad396/328930.png)

 

![](//images.ctfassets.net/utx1h0gfm1om/4ikOQy2GuA2Sqo66KuC8So/836032841e8d7f181e22cfa285e529b1/328923.png)

*Object links and Uses diagram in Excel*



![](//images.ctfassets.net/utx1h0gfm1om/36iPL2mkBWsoYqUywiUiQ4/331f372a1cfde7918347b432e575da8f/329346.png)  


*Copy diagrams*

