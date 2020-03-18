-   [Structure of the Dialog Box](#structure-of-the-dialog-box)
    -   [Properties](#properties)
        -   [General Section](#general-section)
        -   [Shape-specific Section](#shape-specific-section)
    -   [Object links](#object-links)
    -   [Diagram Links](#diagram-links)
    -   [Versions](#versions)
    -   [Files](#files)
    -   [Tags (Optional)](#tags-optional)
    -   [Permissions](#permissions)
-   [Multiple Instances of Property Windows](#multiple-instances-of-property-windows)


The Properties window is used to display the [property groups and
properties](property-group-and-property) of
an [object](object) or [diagram](dizgram), but is also available (in
reduced form) for design elements, users, etc.

The dialog box can be displayed in the following ways:

-   Highlight an item with the left mouse button and open the context
    menu by right-clicking. There "Properties" is available.
-   Double-click with the left mouse button on the desired item.
-   Use the buttons Alt + Enter.
-   Highlight the desired item and click the button "properties" in the
    toolbar.
    
    ![](//images.ctfassets.net/utx1h0gfm1om/Z2qSbI5cgUeM2gCaIQ60y/c22675d8cd06b832b9129fbd83ec01e7/329367.png)

### Structure of the Dialog Box

The Properties dialog box contains by default 6 tabs;
optionally [tags](tags) can be displayed as a 7th tab.

#### Properties

##### General Section

This tab shows [properties](property-group-and-property) and their values or
expressions.

If a property is displayed in black color, it can be changed. If it
appears in grey, it cannot be changed. If a property is displayed in
blue color, it is a mandatory field that must be filled.

Property values or expressions, can - depending on the property types
set for each [property](property-group-and-property) - be entered or
selected in the left column on the Properties window. If you want to
enter a multi-line property value and need a line break, click Ctrl +
Enter. The edited property by the user is checked with a green as long
as the property window is open.

Clicking the OK button or double-clicking the Enter button saves the
changes made in the database. The Cancel button or double-clicking on
ESC closes the properties window and discards any changes.

When you delete the value of a property, you can either delete it only
in the current language or in all languages. This selection is possible
in a separate dialog that appears when you confirm the changes by
pressing OK after deleting.

<div class="info">
Note:

When you delete a value only in the current language (and when an
equivalent value exists in the default language), this value is replaced
with the default language value, despite deletion.
  </div>


At the bottom of this section, there is a display field for the
descriptions of the properties stored (optional) in the [Database
Designer](database-designer). See: [System
Properties](system-properties)

##### Shape-specific Section

Shows the [Shape-Specific Properties](shape-specific-properties) of
an [object](object) and provides the ability to change them.
Shape-specific properties are displayed in this section depending on
their appearance on diagrams.

#### Object links

Displays the [links](links) to objects and provides the ability to
manage these links.

#### Diagram Links

Displays the [link](links) of an object to a [diagram](diagram) and
provides the ability to manage these links.

See: [Linking Objects with Diagrams](linking-objects-with-diagrams)

#### Versions

The History tab facilitates the [version
management](Version_Management): here you can see Version Differences
for [objects](objects) and [diagrams](diagram).

#### Files

Displays the file [links](links) of an object or diagram and provides
the ability to manage these links.

See: [Linking Objects with Files](linking-objects-with-files)

#### Tags (Optional)

Shows the [tags](tags) of the selected [object](objects), but does not
allow to edit tags. Changes are made in the properties window via the
properties tab.

#### Permissions

In this tab, [permissions](permissions) can be set for all elements of
the database. Granting permissions is is only available for user-created
elements; it is not permitted to change the permissions for system
classes, system property groups and properties and this is the reason
why this tab does not exist in the properties window.

A prerequisite for editing the permissions is that the current user has
administration rights for the item in question, or design rights for the
editing of design elements.

### Multiple Instances of Property Windows

In some cases (e.g. [Manual Object Links](manual-object-links) ), it is
possible to open multiple instances of property windows. In this special
case, you should note the following:

<div class="warning">
Changes made in a subsequently opened properties window will only be
accepted when you confirm with "OK" in the originally opened properties
window. If the originally opened properties window is closed with
"Cancel", all changes made in subsequent windows are reset.
  </div>