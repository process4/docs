Link rules are managed in the [Database Designer](database-designer) and
use [link technologies](link-technologies) and [link
types](link-types) to create automatic links
between [objects](object) on [diagrams](diagram). Link rules that use
the [manual link technology](link-technologies), also allow [to link
objects manually](manual-object-links) .

### Create Link Rules

To create a new link rule, proceed as follows:

1.  Choose the section "link rules" at the top of the navigation window
    in the [Database Designer](database-designer).
2.  Click the "New" button.

   <div class="success">
   <h3>Alternative:</h3>

    You can use the function "New" from the context menu of the section
    "link rules".
   </div>
   
   
![328778](//images.ctfassets.net/utx1h0gfm1om/3McyA9ggDSKA6KcE6gWGqg/8f0da6d30da791944ceb478e2bbfedee/328778.png)   

*Create a new link rule in the Database Designer.*

3.  A [properties window](properties-dialog-box) for the newly created
    link usually appears.
4.  You can define the link rule through the following attributes:
    1.  Name  
        The desired name for this link rule.
    2.  From Class  
        Specifies the output class of the link; it can be set to
        "**&lt;any&gt;**" so that the link applies regardless of the
        participating [classes](class).
    3.  To Class  
        Specifies the target class of the link; can be set to
        "**&lt;any&gt;**" so that the link applies regardless of the
        participating [classes](class).
    4.  Link Type  
        Defines the [link type](link-types) to be used for this link
        rule.
    5.  Technology  
        Determines which link technology should be used for this
        link rule.
        1.  If "swimlane" was chosen, the property [stacking all
            shapes](link-technologies) is available too.
        2.  If "Drag & Drop" was chosen, the property [only
            link](link-technologies) is available.
    6.  Rule  
        Defines whether this link rule should be allowed; can be set to
        "Forbid" to stop links between [objects](object).
    7.  Condition & Notifications  
        See: [Conditions for Link Rules](conditions-for-link-rules)
    8.  Diagram Classes  
        Determines to which [diagram classes](class) the link rule
        should be limited; multiple selection is possible. If no
        selection is made, the link rule applies to all diagram classes.
    9.  Priority  
        Defines which link rule shall be applied when multiple rules
        have been created for a link type and for the same classes. The
        link rule with the lowest value in this property (= the highest
        priority) is used.
5.  Clicking OK creates the new link rule.

<div class="info">
  <h3>Note:</h3>

To apply a new link rule to an existing diagram, the diagram may need to
be saved again.
  </div>


![](//images.ctfassets.net/utx1h0gfm1om/6J1pWximZOAq66CIw0sQCS/a9b77c4208f4f6c221e5790aee3a2c05/328828.png)

*The tab "link rules" in the properties window of the class "Activity".*



#### Alternate Way to Create a Link Rule

Alternatively to the above approach, link rules can be also directly
created and managed in the [properties
window](properties-dialog-box) of [classes](class) in the [Database
Designer](database-designer).

 If this approach is chosen, the following points should be noted:

-    No name can be defined for the link rule.
-    The initial class of the link is fixed on the [class](class), whose
    properties window has been opened for the creation of the link rule.
-    The [link type](link-types) can be edited directly or newly
    created.

 All other properties behave as described above.

![](//images.ctfassets.net/utx1h0gfm1om/3Ret4a5t5u0sWQC8E6qQSO/2a9e2c924b44c3f6a8da7fcc54ea0f70/328830.png)

*Creating a new link rule over the properties window of a class.*