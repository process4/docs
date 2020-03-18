#### Differences between Axapta 4.0 (old version) and **Axapta 2009** (new version):

**Axapta 4.0**:  
Objects are imported to 3 classes with special GUIDs - **AX Report**
a9e6c30d-20db-4ee0-9cc8-d781d768ab83, **AX Class**
77dd4214-550a-45f6-baeb-02af25b1d4ef and **AX Form**
832b98e9-10dd-4e92-aa72-53621bdec7f2.

**Axapta 2009**:  
Objects are imported to one class **AX Class** with GUID
11600853-22ac-4cc4-bc79-ed7553a1cd0b.

#### Correspondence between columns and properties:

<table style="width:100%;">
<colgroup>
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 9%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Excel column</p></th>
<th><p>1 - A</p></th>
<th><p>2 - B</p></th>
<th><p>3 - C</p></th>
<th><p>4 - D</p></th>
<th><p>5 - E</p></th>
<th><p>6 - F</p></th>
<th><p>7 - G</p></th>
<th><p>8 - H</p></th>
<th><p>9 - I</p></th>
<th><p>10 - J</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>Column name</p></td>
<td><p>ObjectName</p></td>
<td><p>LangID</p></td>
<td><p>Helptext</p></td>
<td><p>ObjectLabel</p></td>
<td><p>CalledObjectType</p></td>
<td><p>ObjectType</p></td>
<td><p>ConfigurationKey</p></td>
<td><p>SecurityKey</p></td>
<td><p>Path</p></td>
<td><p>CalledObjectName</p></td>
</tr>
<tr class="even">
<td><p>Property Db name</p></td>
<td><p>MenuItemName</p></td>
<td> </td>
<td><p>Help</p></td>
<td><p>Label</p></td>
<td><p>ObjectTyp</p></td>
<td><p>MenuItemType</p></td>
<td><p>ConfigurationKey</p></td>
<td><p>SecurityKey</p></td>
<td><p>Formaufruf</p></td>
<td><p>ObjectName</p></td>
</tr>
<tr class="odd">
<td><p>Property name</p></td>
<td><p>Menu Item Name</p></td>
<td> </td>
<td><p>Help</p></td>
<td><p>Label</p></td>
<td><p>Object Typ</p></td>
<td><p>Menu Item Type</p></td>
<td><p>Configuration Key</p></td>
<td><p>Security Key</p></td>
<td><p>Form call</p></td>
<td><p>Object Name</p></td>
</tr>
</tbody>
</table>

<table style="width:100%;">
<colgroup>
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 9%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Excel column</p></th>
<th><p>11 - K</p></th>
<th><p>12 - L</p></th>
<th><p>13 - M</p></th>
<th><p>14 - N</p></th>
<th><p>15 - O</p></th>
<th><p>16 - P</p></th>
<th><p>17 - Q</p></th>
<th><p>18 - R</p></th>
<th><p>19 - S</p></th>
<th><p>20 - T</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>Column name</p></td>
<td><p>Enabled</p></td>
<td><p>SYS Layer</p></td>
<td><p>SYP Layer</p></td>
<td><p>GLS Layer</p></td>
<td><p>GLP Layer</p></td>
<td><p>HFX Layer</p></td>
<td><p>SL1 Layer</p></td>
<td><p>SL2 Layer</p></td>
<td><p>SL3 Layer</p></td>
<td><p>BUS Layer</p></td>
</tr>
<tr class="even">
<td><p>Property Db name</p></td>
<td><p>Active</p></td>
<td><p>SYS</p></td>
<td><p>SYP</p></td>
<td><p>GLS</p></td>
<td><p>GLP</p></td>
<td><p>HFX</p></td>
<td><p>SL1</p></td>
<td><p>SL2</p></td>
<td><p>SL3</p></td>
<td><p>BUS</p></td>
</tr>
<tr class="odd">
<td><p>Property name</p></td>
<td><p>Availability</p></td>
<td><p>SYS</p></td>
<td><p>SYP</p></td>
<td><p>GLS</p></td>
<td><p>GLP</p></td>
<td><p>HFX</p></td>
<td><p>SL1</p></td>
<td><p>SL2</p></td>
<td><p>SL3</p></td>
<td><p>BUS</p></td>
</tr>
</tbody>
</table>

<table style="width:100%;">
<colgroup>
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Excel column</p></th>
<th><p>21 - U</p></th>
<th><p>22 - V</p></th>
<th><p>23 - W</p></th>
<th><p>24 - X</p></th>
<th><p>25 - Y</p></th>
<th><p>26 - Z</p></th>
<th><p>27 - AA</p></th>
<th><p>28 - AB</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>Column name</p></td>
<td><p>BUP Layer</p></td>
<td><p>VAR Layer</p></td>
<td><p>VAP Layer</p></td>
<td><p>CUS Layer</p></td>
<td><p>CUP Layer</p></td>
<td><p>USR Layer</p></td>
<td><p>USP Layer</p></td>
<td><p>HTMLHelpTopic</p></td>
</tr>
<tr class="even">
<td><p>Property Db name</p></td>
<td><p>BUP</p></td>
<td><p>VAR</p></td>
<td><p>VAP</p></td>
<td><p>CUS</p></td>
<td><p>CUP</p></td>
<td><p>USR</p></td>
<td><p>USP</p></td>
<td> </td>
</tr>
<tr class="odd">
<td><p>Property name</p></td>
<td><p>BUP</p></td>
<td><p>VAR</p></td>
<td><p>VAP</p></td>
<td><p>CUS</p></td>
<td><p>CUP</p></td>
<td><p>USR</p></td>
<td><p>USP</p></td>
<td> </td>
</tr>
</tbody>
</table>

#### Name of imported object:

**ObjectName** (column 1) and **ObjectLabel** (column 4) are used to
create **object name** in format: ObjectName (ObjectLabel).

#### Value for enum property a**vailability**:

If some of the selected layers (i.e.*, checked by checkbox in wizard*)
**SYP Layer** (column 13) or **GLS Layer** (column 14) or ... **USP
Layer** (column 27) receive values that are not empty and not equal to 0
(*zero*) - property a**vailability** (db name is a**ctive**), they
receive the value Available and modified.

Otherwise (if values of checked layers are empty or "0") and the value
in excel-column **Enabled** (column 11) is "Yes" (or "Ja"), the property
**availability** (db name is **Active**) receives the value Available.

Otherwise (if values of checked layers are empty or "0") and the value
in excel-column **Enabled** (column 11) is not "Yes" (or "Ja"), the
property **Availability** (db name is **Active**) receives the value Not
available.
