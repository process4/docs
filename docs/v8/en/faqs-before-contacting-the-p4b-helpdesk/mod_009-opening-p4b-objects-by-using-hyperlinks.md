## Problem

As of version 5.2 it is possible to activate objects and diagrams in
process4.biz using hyperlinks.

This will allow opening (activating) diagrams and objects  
(in the **already opened** modeler client) by its GUID, name, or
property value.  
Note that this can work only if P4B client is already open  
(i.e. connected to the database).

We implement this by custom "application protocol".  
For example, it would be possible to open a diagram by clicking on the
link as in the following:

p4b://query/object?UUID=987191987123461  
p4b://query/object?Name=MyApplication  
p4b://query/diagram?Name=MyApplication&Type=Imported

You can just type the URL in the explorer for example (this will work if
the client is installed and running):  
![](//images.ctfassets.net/utx1h0gfm1om/4wnNQvnW3SAMGOio4wK4gU/68dbf821ee66a88a28ee9e7e447e815c/329439.png)

The URL is built according to the following syntactical rules:

\*p4b://query/\[object\|diagram\|associated\_diagram\|linked\_diagram\|used\_in\_diagram\]?{DbName=Value}+

That is, "p4b://" followed with either "object", "diagram", or one of
"...\_diagram" followed with the list of parameters.  
Each of the parameters should be the db name of the property so that it
can be checked against the parameter value.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Query</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>p4b://query/object?Name=Object1</p></td>
<td><p>This query will open all objects named &quot;Object1&quot;</p></td>
</tr>
<tr class="even">
<td><p>p4b://query/diagram?Name=Diagram1</p></td>
<td><p>This query will open all diagrams named &quot;Diagram1&quot;</p></td>
</tr>
<tr class="odd">
<td><p>p4b://query/linked_diagram?Menu32Item32Name=SalesTable</p></td>
<td><p>This query will open all diagrams linked to objects having the property Menu32Item32Name that is equal to 'SalesTable'</p></td>
</tr>
<tr class="even">
<td><p>p4b://query/used_in_diagram?Menu32Item32Name=SalesTable</p></td>
<td><p>This query will open all diagrams where objects with the property Menu32Item32Name that is equal to 'SalesTable' are used.</p></td>
</tr>
<tr class="odd">
<td><p>p4b://query/associated_diagram?Menu32Item32Name=SalesTable</p></td>
<td><p>This query will open both 'linked' diagrams and 'used in' diagrams (both of the above)</p></td>
</tr>
</tbody>
</table>

All objects corresponding to the given property values can be opened
(the selection dialogue is shown, if there is more than 1 match).  
![](//images.ctfassets.net/utx1h0gfm1om/69GgY838UEWkqeAY4YKme/78c4e1e738a73ec344ca92ac4304fff9/329429.png)

If there is no object matching these properties, a message box appears.

![](//images.ctfassets.net/utx1h0gfm1om/6JqRIhF08oE2aoI6EqcQWq/ca3c9ead68c36a81c0b54a4b94a7ffa5/329434.png)

If there are too many (&gt;100) objects matching the given property set,
a message box appears. The user is given the option to proceed or cancel
the process.

**More examples**

Open objects by name:  
p4b://query/object?Name=MyApplication

Open objects by class name and name:  
p4b://query/object?ClassID=Process&Name=MyApplication

Open all diagrams that are either linked to or contain objects with the
property 'MenuItemName' equal to 'SalesTable':  
p4b://query/associated\_diagram?Menu32Item32Name=SalesTable

Open diagrams by UUID:  
p4b://query/diagram?UUID=908712398719873

Open all objects having Property1=MyValue:  
p4b://query/object?Property1=MyValue

Open all diagrams of the type "Imported", created by admin:  
p4b://query/diagram?DType=Imported&UserCreatedID=Admin

## Implementation

This is to be implemented using the so-called "application protocol".  
The following registry info will be written to the registry by setup:

HKEY\_CLASSES\_ROOT\\**p4b**\\shell\\open\\command  
"C:\\Program Files\\process4biz\\P4BLaunch.exe" "%1"

This will make the explorer start the P4BLaunch.exe with the p4b
hyperlink as a parameter when the user clicks on this hyperlink. The
P4BLaunch.exe will analyze its command-line parameters, and pass them to
the P4B modeler client, provided it is already running (if not it will
just quit, or a message box may appear)

The modeler will parse the passed hyperlink, search the database for an
object that satisfies the given parameters, and activate it if such an
objects exists.


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>