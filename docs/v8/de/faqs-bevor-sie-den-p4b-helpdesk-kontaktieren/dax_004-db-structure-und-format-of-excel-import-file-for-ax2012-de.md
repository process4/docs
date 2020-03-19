#### Differences between Axapta 2009 and Axapta 2012 (new version):

-   Objects are imported in one class **AX Class** with GUID
    11600853-22ac-4cc4-bc79-ed7553a1cd0b (same as Axapta 2009).

<!-- -->

-   Layers **BUP**, **BUS**, **SL3**, **SL2**, **SL1** and **HFX** are
    changed to **ISP**, **ISV**, **SLP**, **SLN**, **FPP** and **FPK**.
    The respective properties for layers should be changed (either
    f**ull name** or **Db name**) in the property group **Layer**.

![](//images.ctfassets.net/utx1h0gfm1om/6bPJ5ojiHmIOWiewmiMyuU/539ed3bfd2387dd0865880457e0894bd/328066.jpg)

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
<td><p>SYS Layer</p></td>
<td><p>SYP Layer</p></td>
<td><p>GLS Layer</p></td>
<td><p>GLP Layer</p></td>
<td><p>FPK Layer</p></td>
<td><p>FPP Layer</p></td>
<td><p>SLN Layer</p></td>
<td><p>SLP Layer</p></td>
<td><p>ISV Layer</p></td>
<td><p>ISP Layer</p></td>
</tr>
<tr class="even">
<td><p>Property Db name</p></td>
<td><p>SYS</p></td>
<td><p>SYP</p></td>
<td><p>GLS</p></td>
<td><p>GLP</p></td>
<td><p>FPK</p></td>
<td><p>FPP</p></td>
<td><p>SLN</p></td>
<td><p>SLP</p></td>
<td><p>ISV</p></td>
<td><p>ISP</p></td>
</tr>
<tr class="odd">
<td><p>Property name</p></td>
<td><p>SYS</p></td>
<td><p>SYP</p></td>
<td><p>GLS</p></td>
<td><p>GLP</p></td>
<td><p>FPK</p></td>
<td><p>FPP</p></td>
<td><p>SLN</p></td>
<td><p>SLP</p></td>
<td><p>ISV</p></td>
<td><p>ISP</p></td>
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
<td><p>VAR Layer</p></td>
<td><p>VAP Layer</p></td>
<td><p>CUS Layer</p></td>
<td><p>CUP Layer</p></td>
<td><p>USR Layer</p></td>
<td><p>USP Layer</p></td>
<td><p>LinkedPermissionObject</p></td>
<td><p>LinkedPermissionType</p></td>
</tr>
<tr class="even">
<td><p>Property Db name</p></td>
<td><p>VAR</p></td>
<td><p>VAP</p></td>
<td><p>CUS</p></td>
<td><p>CUP</p></td>
<td><p>USR</p></td>
<td><p>USP</p></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td><p>Property name</p></td>
<td><p>VAR</p></td>
<td><p>VAP</p></td>
<td><p>CUS</p></td>
<td><p>CUP</p></td>
<td><p>USR</p></td>
<td><p>USP</p></td>
<td> </td>
<td> </td>
</tr>
</tbody>
</table>

#### Value for enum property av**ailability**:

This property is not used in this version. This is the reason why the
panel "Active layers" is inactive for the Axapta 2012 database:

![](//images.ctfassets.net/utx1h0gfm1om/17VsRwukYs6MiImIsQ2oWA/d638e170b969aec4d9128e966d60ecb4/328068.png)


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>