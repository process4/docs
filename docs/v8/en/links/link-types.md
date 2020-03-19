Link types can be created in the Database Designer under the entry "Link Types" and then can be used together with the link technology for link rules. Link types created in one unit apply however to the entire database (regardless of the unit hierarchy) and are copied too when you copy a whole unit.

![](//images.ctfassets.net/utx1h0gfm1om/62iRMrXumWeSCYAU8QYEEQ/beb231699c64487e018eb2037d07f0c0/328776.png)

  *Create a new link type*

### Create a Link Type

To create a new link type, proceed as follows:

1.  Select the item "Link types" in a [unit](unit) in the [Database
    Designer](database-designer).
2.  Choose "New" from the context menu or use the "New" button in the
    menu bar.
3.  A [properties window](properties-dialog-box) to create a new link
    type appears.
4.  The following [properties](property-group-and-property) are available
    for link types:
    
    a.  Name  
        Enter a name for the link type; this name is then used for the
        classification and grouping of links in the [properties
        window](properties-dialog-box) of [objects](object).
        
    b.  Is direct vectored  
        This field should be set to "true" only when the link type
        should be used for the direct or indirect [link
        technology](link-technologies). In this case, the additional
        fields "direct name" and "opposite name" should be filled.   
        
        i.  Direct Name  
            This field contains the description of the link type in the
            direction of the object of the target class (e.g."linked
            to"), used in the [properties
            window](properties-dialog-box) of [objects](object).
        ii.  Opposite Name  
            This field contains the description of the link type in the
            opposite direction of the object of the target class
            (e.g."linked from" or similar), used in the [properties
            window](properties-dialog-box) of [objects](object).
            
    c.  Automatic Association Data  
        This property is used to automatically create objects of the
        association class between two linked objects.   
        If the property is set to "false", then you can link objects
        normally with this link type (either with an association class,
        or without an association class). If you use an association
        object for a (e.g., direct) [link
        technology](link-technologies), it will only be taken in the
        link, if you place this object explicitly on the diagram.  
        If the property is set to "True", then you need to choose an
        association class. When you link two objects with a connector,
        the connector created belongs automatically to the association
        class previously selected. I.e. a new object of the association
        class is created automatically, no matter which connector you
        use.

        i.  AutoInitializationscript  
            When the property "Automatic association data" is set to
            true and an association class has been selected, you can
            fill in the property AutoInitializationScript. This property
            is used when filing [formulas](property-type-formula), which can             be used for example to define the association data
            automatically.

    d.  Association Class  
        With this selection box, you can create a
        third [class](class) as association class for the linking
        of [objects](object). Their objects are then used to describe
        the link with additional information. An association class can
        be used with the [indirect link](example-indirect-link-technology)           and the [RACI technology](example-raci). For the direct link                 technology, the connector is automatically recognized as an                 association object, when it is a process4.biz object. An association         class can always be selected from the unit where the corresponding           link type has also been created, or can be inherited from overlying         units too.

5.  Clicking "OK" creates the configured link type.


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>