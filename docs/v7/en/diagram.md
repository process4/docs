-   [Definition](#definition)
-   [Creating a New Diagram](#creating-a-new-diagram)
    -   [Creating a Linked Diagram](#creating-a-linked-diagram)
    -   [Creating a Dependency Diagram](#creating-a-dependency-diagram)
    -   [System Properties for Diagrams](#system-properties-for-diagrams)
-   [Saving Options for Diagrams](#system-properties-for-diagrams)
-   [Open a diagram](#open-a-diagram)
-   [Protect Diagrams](#protect-diagrams)
    -   [Remove diagram protection](#remove-diagram-protection)
-   [Validate diagrams](#validate-diagrams)


### Definition

Diagrams are native Visio diagrams in the [Graphical Visio
Modeler](graphical-visio-modeler) which are used for modeling. They
always consist of the foreground (for modeling, contains
the [objects](object) ) and background (for the Design, Logo udgl.;
see [Templates](shapes-stencils-and-templates)) and can include
multiple [pages](using-several-diagram-pages) (= separate "diagram
pages").

All diagrams are centrally stored and managed in
the [repository](repository) and described in detail as well
by [property groups and properties](property-group-and-property).

### Creating a New Diagram

1.  Choose in the [Repository](repository) the [unit](unit), where the
    diagram should be created.
2.  Select at the bottom of the navigation window the "diagram" node.
3.  Click the context menu (right mouse button) and select the function
    "New Diagram".

    Alternative:

    Click on the menu bar in the [repository](repository) on the button
    "New".

4.  Select a [template](shapes-stencils-and-templates) to be used for the
    new diagram.
5.  The [properties window](properties-dialog-box) appears.
6.  Enter a name, and the desired property values for the diagram.
7.  The diagram opens for modeling in the [Graphical Visio
    Modeler](graphical-visio-modeler).

#### Creating a Linked Diagram

1.  From the [repository](repository), choose an [object](object), with
    which the new diagram is to be linked
2.  Click on the context menu (right mouse button) and select the
    function "New linked diagram".
3.  Select a [template](shapes-stencils-and-templates) to be used for the
    new diagram.
4.  The [properties window](properties-dialog-box) appears.
5.  Enter a name, and the desired property values for the diagram.
6.  The diagram opens for modeling in the [Graphical Visio
    Modeler](graphical-visio-modeler).
7.  In all diagrams, in which the selected object was used in the
    beginning (step 1), a smart tag is displayed with the object
    representing the link to the diagram you just created.

#### Creating a Dependency Diagram

See: [Creating a dependency diagram](creating-a-dependency-diagram)

#### System Properties for Diagrams

See: [System Properties for Diagrams](system-properties-for-diagrams)

### Saving Options for Diagrams

See: [Database Settings](database-settings)

### Open a diagram

Diagrams can be opened in the [repository](repository) in the following
ways:

-   Double-click on a diagram in the navigation window

    Alternative:

    "Open" in the context menu

-   Double-click on a diagram in the object window

    Alternative:

    "Open" in the context menu

-   Through the context menu for [objects](object)
    -   "Linked Diagrams" - indicates those diagrams with which the
        selected object is linked. Clicking on the diagram opens the
        corresponding diagram.
    -   "Used in diagrams" - indicates those diagrams on which the
        selected object is used. Clicking on the diagram opens the
        corresponding diagram.

![](//images.ctfassets.net/utx1h0gfm1om/1JxEEkS4DWkiKEio2gsqeo/9cdd54dfaf6e0d93fba050fe79f12513/329246.png)  
Create a new diagram

  

*Diagram selection in the context menu of an object in
the [repository](repository)*

### Protect Diagrams

Diagrams can be protected before being processed by other process4.biz
users, as well as before being used without process4.biz

1.  To protect a diagram, select in the context menu of this diagram the
    option "Protect" under "Special".
2.  The diagram protection wizard opens.
3.  Select the diagrams to be protected.
4.  Set a new password and allow, if needed, the protected diagrams to
    be used in the [extension
    modules](process4.biz_Extension_Modules) mentioned above. For
    password complexity, refer to [Database
    settings](database-settings).
5.  The diagram protection wizard now protects the selected diagrams
    under the respective password.

Protected diagrams can be used as follows:

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>A protected diagram can</th>
<th>A protected diagram cannot</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><ul>
<li>be deleted</li>
</ul></td>
<td><ul>
<li>be opened without entering the password</li>
</ul></td>
</tr>
<tr class="even">
<td><ul>
<li>be copied, cut, pasted or moved; the copy of the diagram remains also protected</li>
</ul></td>
<td><ul>
<li>be opened as a Visio file; an empty Visio file opens</li>
</ul></td>
</tr>
<tr class="odd">
<td><ul>
<li>be opened, edited and saved after entering the password</li>
</ul></td>
<td><ul>
<li><p>be saved after entering the password as a Visio file (the &quot;save as&quot; function cannot be executed)</p></li>
</ul></td>
</tr>
<tr class="even">
<td><ul>
<li>be copied as a screenshot</li>
</ul></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

#### Remove diagram protection

1.  To remove the protection of diagrams again, select the "Remove
    protection" function under "Special" in the context menu of a
    protected diagram.
2.  In the diagram protection wizard, select then which diagrams you
    want to decrypt.
3.  Then enter the password that you used for protection.

Note:

Each user of the group administrator can remove the diagram protection
without entering the password.

### Validate diagrams

See: [Validation Scripts](validation-scripts)

 

![](//images.ctfassets.net/utx1h0gfm1om/4z4XbCXct22kSOqOuSmg8A/9f92f918c4b47895ca3169d4380ebbe2/329250.png)

The diagram protection wizard
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>