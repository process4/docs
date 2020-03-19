-   [Styles](#styles)
    -   [P4B\_Title](#p4b_title)
    -   [P4B\_Diagramm](#p4b_diagramm)
    -   [P4B\_TextBlock](#p4b_textblock)
    -   [P4B\_TextBlockNamed](#p4b_textblocknamed)
    -   [P4B\_QueryTable](#p4b_querytable)
    -   [P4B\_QueryTableItem](#p4b_querytableitem)
    -   [P4B\_QueryList](#p4b_querylist)
    -   [P4B\_QueryBulletList](#p4b_querybulletlist)
    -   [P4B\_QueryListItem](#p4b_querylistitem)
    -   [P4B\_QueryNamedListItem](#p4b_querynamedlistitem)
    -   [P4B\_QueryNamedListItemCaption](#p4b_querynamedlistitemcaption)
    -   [P4B\_ListItem](#p4b_listitem)

To generate a report with the DocumentComposer you need a Word document
template (i.e., a "\* .dot" file). This contains the instructions for
formatting the report (see chapter Definition of the set for the
report).

<div class="success">
If you do not enter a template, the DocumentComposer will provide such a
document template for you. This is used for the generation of the
reports.
  </div>

The first page of your document is formatted as title page. The second
page serves as basis for the formation of the summary. These pages can
be adjusted directly in the document according to your preferences. They
will appear at the top of the generated report.  
The template integrated from
[process4.biz](http://process4.biz) provides several formatting features
that you can change and adapt so that the layout of the report suits
your needs.

### Styles

Several predefined styles. If one of these is selected in the template,
it is applied within the specified part of the document.


#### P4B\_Title

Used for the title of the report. You can choose a font, and other
options for the title.

#### P4B\_Diagramm

Used for diagrams placement (is applied in a row). You can mark a
section as well as defining a distance before and after the diagram,
etc.

#### P4B\_TextBlock

Used for object properties that are exported in the form of series. All
format options can be used here.

#### P4B\_TextBlockNamed

Used for object properties with attribute names that are exported in the
form of series. All format options can be used here. Note that this
property name and its value are separated by a tab.

#### P4B\_QueryTable

Used for queries that are exported in table form.

#### P4B\_QueryTableItem

Used for texts in table cells for query values. You can define a special
font or color for the text.

#### P4B\_QueryList

Used for queries that are exported in list form. This style is applied
in the first column of the query.

#### P4B\_QueryBulletList

The same as P4B\_QueryList but with predefined bullets instead of
numbers in the list.

#### P4B\_QueryListItem

Used for values that are exported in list form. This style is applied in
the second and further columns of the query.

#### P4B\_QueryNamedListItem

Same as P4B\_QueryListItem but the column name is placed before the
query value. Note that the column name and its value are separated by a
tab. You can also define the desired place of the tab.

#### P4B\_QueryNamedListItemCaption

is used for the names query columns and marked in bold.

#### P4B\_ListItem

Used for objects that should be treated as sub-chapters. They are
exported as a list and the object names are regarded as values in that
list.

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>Defined Style</p></td>
<td><p>defaults</p></td>
<td><p>used for</p></td>
</tr>
<tr class="even">
<td><p>P4B_Title</p></td>
<td><p>Title</p></td>
<td><p>Title of the report</p></td>
</tr>
<tr class="odd">
<td><p>P4B_Diagram</p></td>
<td><p>Normal</p></td>
<td><p>Diagram</p></td>
</tr>
<tr class="even">
<td><p>P4B_TextBlock</p></td>
<td><p>Formatting program</p></td>
<td><p>Text Block &quot;as value&quot;</p></td>
</tr>
<tr class="odd">
<td><p>P4B_TextBlockNamed</p></td>
<td><p>Formatting program</p></td>
<td><p>Text Block &quot;as value with <br />
field identifier &quot;</p></td>
</tr>
<tr class="even">
<td><p>P4B_QueryTable</p></td>
<td><p>Table</p></td>
<td><p>Query &quot;as table&quot;</p></td>
</tr>
<tr class="odd">
<td><p>P4B_QueryTableItem</p></td>
<td><p>Normal</p></td>
<td><p>Cell in the query table</p></td>
</tr>
<tr class="even">
<td><p>P4B_QueryList</p></td>
<td><p>List number 2</p></td>
<td><p>Query &quot;as list with number&quot; (first column of the query)</p></td>
</tr>
<tr class="odd">
<td><p>P4B_QueryBulletList</p></td>
<td><p>List number 2</p></td>
<td><p>Query &quot;as list with bullets&quot; (first column of the query)</p></td>
</tr>
<tr class="even">
<td><p>P4B_QueryListItem</p></td>
<td><p>Normal Identifier</p></td>
<td><p>second and subsequent columns of the query - used for query &quot;as a list with number / bullet&quot;</p></td>
</tr>
<tr class="odd">
<td><p>P4B_QueryNamedListItem</p></td>
<td><p>Normal Identifier</p></td>
<td><p>second and subsequent columns of the query with column names before its value - used for query &quot;as list with number / bullets and field identifiers&quot;</p></td>
</tr>
<tr class="even">
<td><p>P4B_QueryNamedListItemC <br />
aption</p></td>
<td><p>Normal Identifier</p></td>
<td><p>marks the names of query columns - used for query &quot;as list with number / bullet and field identifiers&quot;</p></td>
</tr>
<tr class="odd">
<td><p>P4B_ListItem</p></td>
<td><p>List number</p></td>
<td><p>Chapter List</p></td>
</tr>
</tbody>
</table>

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>