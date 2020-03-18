### Problem

You have created objects and link types in the p4b database. Now you
want to create manual links between these objects via the ExcelImport
Wizard.

### Solution

An example:

<table style="width:100%;">
<colgroup>
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr class="header">
<th><p> </p></th>
<th><p>Object Name</p></th>
<th><p>LanguageID</p></th>
<th><p>Unit</p></th>
<th><p>Class</p></th>
<th><p>Object Links</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><em>someID</em></p></td>
<td><p><em>NameOfObject01</em></p></td>
<td><p>EN</p></td>
<td><p><em>UnitName</em></p></td>
<td><p><em>ClassName</em></p></td>
<td><p><em>ListOfLinks</em></p></td>
</tr>
<tr class="even">
<td><p><em>someID</em></p></td>
<td><p><em>NameOfObject02</em></p></td>
<td><p>EN</p></td>
<td><p><em>UnitName</em></p></td>
<td><p><em>ClassName</em></p></td>
<td><p><em>ListOfLinks</em></p></td>
</tr>
</tbody>
</table>

-   The name of the columns "Unit" and "Class" should be consistent to
    the current database language (i.e."Class" for English, "Klasse" for
    German, "Classe" for French). All other columns should have the same
    (english) name, as shown above.
-   LanguageID can take on the values: EN (English), DE (Deutsch), FR
    (Francais), regardless of the desired languages, but should
    correspond with the language of the object data, i.e. objects with
    LanguageID "DE" should also have a German "ObjectName" in order not
    to buffle the import process.
-   Each object has *an ID.* The easiest way to obtain it  is to export
    the selected class, choosing only the **class** name in the Data
    selection window. This process requires all objects to be already
    placed in the database.
-   The cell *ListofLinks* should be formatted in such a way that a link
    is created per cell **within the same cell. **To create a line break
    in Excel in the same cell, press Alt+Enter.

Here is the link:

<table style="width:100%;">
<colgroup>
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Direction</p></th>
<th><p>LinkType</p></th>
<th><p><em>(Distance)</em></p></th>
<th><p>Class</p></th>
<th><p><em>(Distance)</em></p></th>
<th><p>Object</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><em>Direction</em></p></td>
<td><p>[ <em>LinkType</em> ]</p></td>
<td><p><em>space</em></p></td>
<td><p><em>Class</em></p></td>
<td><p>colon with space (&quot; : &quot;)</p></td>
<td><p><em>Object</em></p></td>
</tr>
</tbody>
</table>

-   Direction can take on the values: **&gt;** (direct link from our
    object to the object described in this cel)l, **&lt;** (direct link
    from the object described in this cell to our object),
    **&lt;&gt;** (indirect link between these objects.)
-   The LinkType is the full name of the link type in square brackets.
    Please note that in direct links the full name and not the direct or
    opposite name is given.

Example:  
&gt; \[ linked to \] SomeOtherObjectClass : Object1\_Class2  
&lt; \[ linked to \] SomeOtherObjectClass : Object2\_Class2  
&lt;&gt; \[ linked with \] SomeOtherObjectClass : Object3\_Class2

See also the attached excel spreadsheet **Example.xls**.

**Summary:**

**1.** Create an excel file with the Excel-Export. Choose the selected
class and choose only the class name in the Data selection window.

**2.** Enter the desired links in the column Object Links, whereby each
link needs to be referenced only once, e.g. only from the outgoing
from-object.

**3.** Import the final Excel spreadsheet. Select "Import object links".
You can also delete all previously created links of the respective
objects via "Overwrite object links with Excel", before importing the
new links from the Excel file.
