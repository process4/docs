-   [Definition](#definition)
-   [Working with Tags](#working-with-tags)
    -   [Tags On or Off](#tags-on-or-off)
    -   [Create and Manage Tag Classes](#create-and-manage-tag-classes)
    -   [Manage Tags](#manage-tags)
        -   [Create Tags](#create-tags)
-   [Equip objects and/or diagrams with tags](#equip-objects-andor-diagrams-with-tags)


### Definition

Tags are individually custom metadata, which enable you to group and
categorize [objects](object) outside the [unit](unit) - and [class
hierarchy](class) and equip them with additional information (e.g cost
center, location, etc.) which is not covered by
the [properties](property-group-and-property). Objects can also be equipped
with multiple tags.

![](//images.ctfassets.net/utx1h0gfm1om/4EyWhI3BNCUwKgIykgIUqU/19a43029d04ce5f100dc37ee76dd17eb/329627.png)

*Overview of all tag classes and tags in the demo database*

### Working with Tags

#### Tags On or Off

Tags belong to the [system properties](system-properties) and can be
created or removed through the context menu of a
(system) [class](class) also automatically.

-   To activate tags for class (diagrams) click right mouse button on it
    and select from the context menu spesial properties. Click on the
    *Tags* propertie and it will  result in  checkmark next to it. When
    tags are activated from the context menu <span class="underline">of
    a</span> (diagram) class, the system property "tags" is added only
    to this one (diagram) class.  
     ![](//images.ctfassets.net/utx1h0gfm1om/7E1rLot0AMeQm6oOCw8EW4/77dcf1b318e2e679d6983906b5ecfd8b/329171.png)
-   If tags are available <span class="underline">for
    all</span> diagrams and/or classes of a database, they can be
    activated in the context menu of the system class "General diagram"
    and/or "General Property".

![](//images.ctfassets.net/utx1h0gfm1om/7fJ6TJ6aM8owOGukYGaASk/108f912ec8b0094aeeecc4441276468e/329648.png)

*Manage tag classes in [the Database Designer](database-designer)*


#### Create and Manage Tag Classes

Tag classes can be created and managed via the corresponding item in the
upper part of the navigation window in Designer Database. Similar to the
"normal" [classes](class) for [objects](object) or [diagrams,](diagram) tag
classes can also be equipped with [property groups and
properties](property-group-and-property) to assign properties to the tags
contained therein.

*![](//images.ctfassets.net/utx1h0gfm1om/3kpTubXqg8aK4aEMCqgWoy/994ab26dc1a2bed5a47409b8666c8ca2/329661.png)*

*Select objects with tags window*

#### Manage Tags

Tags are displayed via the button "tags" on the top left in the
process4.biz menu.

The display of tags is based on the [repository](repository):

-   Tags are divided into classes in the left navigation window.
-   In the right object window, the [objects](object) equipped with the
    selected tag or with a tag of the selected class are displayed.
-   The menu strip of the tag display, provides - similar to
    the [repository](repository) - the options for creating, editing,
    and deleting tags.
    
*![](//images.ctfassets.net/utx1h0gfm1om/4XSbST8JQIaAwsIkWy6SUa/9cfa6c8d9d0928eb0b8398c7aa45f7c4/329655.png)*

*Manage tags window*

##### Create Tags

1.  Choose one tag class where the tag should be created.
2.  Click the "New" button in the menu strip.

    <div class="success">
    Alternative:

    Call the context menu (right-click) of a tag class and select "New
    ..."
    </div>

3.  The [properties window](properties-dialog-box) appears.
4.  Enter a name, and the desired property values for the new tag.

### Equip objects and/or diagrams with tags

[Objects](object) and/or [diagrams](diagram) can be equipped with tags
in 3 ways:

1.  With the option "Select objects with tags..." in the context menu of
    a tag tab.  
    This function opens a window with list of the objects for which the
    property "tags" is available and there you can assign selected tag
    to all objects and/or diagrams. It is also possible to filter
    according to [class](class) and/or [unit](unit) and invert the
    display of those elements that have already been equipped with the
    selected tag.  
      
    ![](//images.ctfassets.net/utx1h0gfm1om/3p6tgpB5BSeWycAY4MAqu6/17f2e08f42b1f8b214b558068a6ff6d3/329641.png)
    
2.  With the option "Manage tags..." in the context menu of the object
    and/or diagram. This function opens the window with list of the tags
    that can be assigned/cleared to this object or diagram. It is also
    possible to filter according to [class](class) and invert the
    display of those elements that have already been equipped with the
    selected tag.  
      
3.  Via the [properties window](properties-dialog-box) of an object or
    diagram  
    A selection window can be opened via the property "tags" in the
    Properties window where all tags (which can be filtered according to
    tag classes) are displayed. Here you can assign to the object or
    diagram the desired tags via the checkboxes.
    