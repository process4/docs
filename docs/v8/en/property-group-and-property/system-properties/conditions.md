-   [Create Conditions](#create-conditions)
    -   [Examples](#examples)
    -   [Example-Application](#example-application)


With the [system property](system-properties) "condition", you can
define the conditions under which a
particular [property](property-group-and-property), a property group or an
enum item is shown or hidden.

Conditions relate to the values of other properties in the
same [class](class).

If conditions for [link rules](link-rules) should be created,
see [Conditions for link rules](conditions-for-link-rules).

### Create Conditions

For the creation of conditions, you can use the standard operators of
Visual Basic, along with the DbNames of the properties.

#### Examples

<div class="warning">

Caution:

"Property" needs to be replaced in the following examples with the
DbName of the property, on which the condition is based.
  </div>
  

| Goal     | Condition    |
| ---------- | ---------- |
| The property containing the condition is displayed only if the specified Bool-Property is set to "true".     | This.Attribute=True      |
| The property containing the condition is displayed only if the specified Bool-Property is set to "false".       | 	Not This.Attribute      |
| The property containing the condition is displayed only if the specified property is not empty.      | This.Attribut<>""     |
| The property containing the condition is displayed only if the specified property is empty. (also valid for properties of the type "Linked Element Selector").      | This.Attribute=""       |
| The property containing the condition is displayed only if the specified enum item of the specified enum property is selected. ("#" should be replaced with the number of the Enum item)  <div class="info"> Note:If the conditions apply to several enum items, you can use the "OR" operator.</div>       | This.Attribut=#                                                            ---                 This.Attribut=# OR This.Attribut=#       |
| Multiple selection in Enum properties: The property containing the conditions should be displayed only if all listed Enum items are selected.       | This.Attribute="1,2,4"       |
| An enum item should only be displayed in the selection list of the corresponding property, if the selected enum items of another enum property are a combination of "1, 2". ("1, 2, 3", "0 1", "1; 3", etc. must not be selected)  <div class="info">Note: Can also be used for properties in order to make them dependent on the selected enum items of another property.</div>       | ContainAll(This.Attribut,"1;2",True)      |
| An enum item should only be displayed in the selection list of the corresponding property, if the selected enum items of another enum property include at least "1" and "2". (With "1" or "2", any number of other values can be selected together)     | ContainAll(This.Attribute,"1;2", False)       |
| An enum item should only be displayed in the selection list of the corresponding property, if the selected enum items of another enum property include "1" and/or "2". (With "1" and / or "2", no other values can be selected together)       | ContainAny (This.Attribute,"1;2", True)       |
| An enum item should only be displayed in the selection list of the corresponding property, if the selected enum items of another enum property include "1" and/or "2". (With "1" and/or "2", any other values can be selected together; as soon as "1", "2" are selected together or separately, the item containing the condition is active)       | ContainAny (This.Attribute,"1;2", False)      |




#### Example-Application

**Goal:** A text property for an [object](object) should be displayed
only when an associated status has been selected.

1.  Create the enum property "state" to select the Status (see [Creating
    a new Property](creating-a-new-property))
2.  Add the desired enum items  
    ![](//images.ctfassets.net/utx1h0gfm1om/16pHhz55vWKu44c6AQQoMk/dc8bb4a8fdaef46b10a02435431a3037/329334.png)
3.  Create the text property "state feedback" (see [Creating a new
    Property](creating-a-new-property))
4.  Add the corresponding condition - the text box should be visible
    only when an enum item is selected  
    ![](//images.ctfassets.net/utx1h0gfm1om/3viWQDtbj2ASKu24yQ8yIS/e044c1dc0e9030c296b16fb0cb3726f1/329336.png)

**Result:** only if a "state" is selected, the respective text box for
description will appear.

 
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>