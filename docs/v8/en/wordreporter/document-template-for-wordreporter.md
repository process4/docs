To create a report with the process4.biz Word Reporter you should have a
Word document template (= a "\*.dot" file) available, containing the
formatting instructions for the report to be drawn (see [Publication
Settings](publication-settings)). 

<div class="success">
Process4.biz offers along with the software Word Reporter, such a
document template that is used when generating the report, if you do not specify your own template (see [Exported Contents](exported-contents)). 
  </div>

The first page of your template is formatted as title page of the
report, the second serves as the basis for formatting the summary (=
Management Summary). These pages can be adjusted in the document as well
as be filled according to your ideas and precede the generated report.
The document template integrated by
[process4.biz](http://process4.biz) provides you with certain formatting
properties which you can change and customize so that the layout of the
resulting report fits your personal needs better.

In addition, the process4.biz Word report and table of contents can be
added in a specific place in a Word document. In this section it is
explained how changes to the formatting of headings are carried out in
the template of MS Word 2007, 2010 or 2013:

1.  Open the template file ("\*.dot").
2.  Change stylesheets of headings

-   Choose ***Change style*** under the Word menu **Format** or
    under **Start** for Word 2010 or 2013.

![](//images.ctfassets.net/utx1h0gfm1om/1Fuy3ypROMMiUAgowwK04S/23e32893b0f94975f19024e256308960/328254.png)

-   Edit the titles and headings 1 to 9 and so on, by right-clicking on
    the relevant heading and select ***Modify.***

![](//images.ctfassets.net/utx1h0gfm1om/1N0bg44PKk6SmiEAkuwCkI/a75e914284cea2468013136682db17fc/328253.png)

You can change the font size or font or deactivate the numbering.

3. There are some pre-defined styles for formatting. These styles are
already predefined in the template - these styles are used for specific
parts of the document.

 

**Predefined Style**

**Used by default**

**Used for**

**Description**

P4B\_Diagram

Normal

Diagrams

Used for the placement of the diagrams (applied to a row). You can
determine here for example the paragraphs indentation, the distance
before and after the diagram.

P4B\_ObjectPropText

Formatting program

Object properties in text format

Used for object properties that are displayed in raw format (without
table). All format options can be used. Note that the name of the
properties and their value are separated by a tabulator. You can thus
define the desired tabulator distance. 

P4B\_ObjectPropNameText

Normal

Name of object properties in text format

Used for names of object properties generated in text format (not in
table format). Only the font can be changed here.

P4B\_ObjectPropGroupText

Normal

Names of property groups in text format

Used for names of object properties generated in text format (not in
table format). Only the font can be changed here. 

P4B\_ObjectPropTable

Table cell

Object properties in table format

Used for object properties that are generated in table format. 

P4B\_ObjectPropTableItem

Normal

Cells of the object property table

Used for the text in a table cell for object properties (generated in
table format). You can select a specific font and/or color of the text
here. 

P4B\_ObjectPropNameTableItem

Normal

Property name cell in the table of object properties

Used for the text in a table cell for names of object properties
(generated in table format). You can select a specific font and / or
color of the text here. 

P4B\_ObjectPropGroupTableItem

Normal

Name of the property group - cell in the table of object properties

Used for the text in a table cell for names of property groups of
objects (generated in table format). You can select a specific font and
/ or color of the text here. 

P4B\_DiagramPropText

Formatting program

Diagram properties in text format

Used for diagram properties. This format is similar to that of the
object properties. The option "Export the Diagram Properties" must be
activated (see [Publication Settings](Publication_Settings)).

P4B\_DiagramPropNameText

Normal

Name of diagram properties in text format

P4B\_DiagramPropGroupText

Normal

Names of diagram groups in text format

P4B\_DiagramPropTable

Table cell

Diagram properties in table format

P4B\_DiagramPropTableItem

Normal

Cells of the diagram property table

P4B\_DiagramPropNameTableItem

Normal

Property Name - cell in the table of the diagram properties

P4B\_DiagramPropGroupTableItem

Normal

Name of the property group - cell in the table of the diagram properties

P4BLinkTableFormat

Table cell

Object Links

Used for the presentation of information on the object links. The option
"Export objects and diagram links" must be activated (see [Publication
Settings](Publication_Settings)). 

P4B\_ObjectLinkTableItem

Normal

Cells of the object link table

Used for the text in the table cells for object links with the selected
objects (as well as P4B\_ObjectPropTableItem and
P4B\_DiagramPropTableItem). 

P4B\_DiagramLinkTableItem

Normal

Cells of the diagram link table

Used for the text in the table cells for diagram links with selected
objects (generated in table format). You can select a specific font
and/or color of the text or the table.

4. Insert process4.biz Word Report at a selected place in the document:

-   Place the cursor in the document at the place where the Word Report
    is to start, e.g.: after a chapter or a heading.
-   Select ***bookmark*** in Word menu **Insert**: 

![](//images.ctfassets.net/utx1h0gfm1om/5bgqtu2cu4iMoQoMs0oM6C/87ed27de961b6a9679395f4b2365c361/328252.png)

-   In the window ***bookmark,*** enter the name of the bookmark. There
    are two options: 

1) Bookmark **Process4biz\_report** indicates the place where
the process4.biz Word Report inserts. If you want to maintain the
consecutive numbering of headings, the bookmark must be inserted after
the heading of the appropriate paragraph (and the existing numbering is
kept).  
2) bookmark **Process4biz\_index** indicates where the table of contents
is inserted. If there is already a table of contents in the document, it
is automatically updated (even if this bookmark is not used), if none
exists, a new one is inserted at the place of this bookmark. 

![](//images.ctfassets.net/utx1h0gfm1om/20jopo2r3G2swoMe6GuaCa/ac7491699684a9116204c875292412b5/329002.png)

-   Click ***Add*** to add a bookmark. The window closes automatically.
-   Select **bookmark** in Word menu **Insert**, if you want to see
    which bookmarks exist or delete one. 

![](//images.ctfassets.net/utx1h0gfm1om/5ZCrQJ3RpmuooOAGaSQq2K/d0ee12c41dbf6678d817d079223f0860/329000.png)

5. Save the edited document as a "\* .dot" file and use it as a template
the next time you run the Word Reporter. When you apply the Word
Reporter to the saved templates, the table of contents in the generated
diagram will resemble the following picture: 

![](//images.ctfassets.net/utx1h0gfm1om/4pMaS7ZLocYak4YuuEwMgM/ae3a0f334062a616cf33bc23ac0ad85b/328249.png)

 
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>