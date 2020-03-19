In this window you can determine easily with the help of filters which
specific diagrams or items should be included in the Word document.
Activate Advanced filtering of data to define the following filter
settings. The filter settings are defined via special formulas.

In the table ***Affected to*** determine whether the other settings are
to be used for the filtering only of objects or diagrams or objects and
diagrams.

In the table ***Condition***, you can define following conditions:

-   **With owner**

Select a specific owner whose diagrams and/or objects should be
displayed. Any user or Windows user group can be selected as an owner.
In the latter case all objects and diagrams are shown, which are the
members of this group in the property.

-   **Created by**

Using this option you can publish all objects that were created by a
specific user or members of a particular Windows user group.

-   **Created after**

Objects and/or diagrams created after the selected date are published.

-   **Created before**

Objects and/or diagrams created before the selected date are published.
Define always +1 days. If an object was e.g. created on 20:09:08, you
set "created before 21.09.08" to include that item in the report.

-   **Changed by**

You have the option to evaluate all objects or diagrams and objects in
the form of a Word document that have been modified by a specific user
or members of a particular Windows user group.

-   **Changed after**

Objects and/or diagrams modified after the selected date are published.

-   **Changed before**

Objects and/or diagrams modified before the selected date are published.

![](//images.ctfassets.net/utx1h0gfm1om/1tovzhdsuccukO8Quus8Mg/ae9e356571fcbeb0ea2080e04cb50d66/328978.png)

-   **With Approval Management**

Setting this option means that only diagrams and/or objects with certain
approval status are included in the Word report (multiple selection is
possible in which more lines are selected with "AND").

-   ***All statuses***
-   ***Approved***
-   ***Not approved (all are exported except approved diagrams)***
-   ***Undefined***
-   ***New - is still in progress***
-   ***New - Needs improvement***
-   ***New - Waiting for Approval***
-   ***Updated - is still in progress***
-   ***Updated - Needs improvement***
-   ***Updated - Waiting for Approval***
-   ***Deleted***

This filter is only available if the approval management has been
activated in your database, i.e. a corresponding property
(ApprovalStatus) exists in one of the object classes or diagrams
available (see [approval management](approval-management)). Otherwise
this option is greyed out.

-   **with tag**

Objects and diagrams with selected tags are published. This filter is
only available if the selected class contains the special tag property.

-   **Satisfy the query criteria**

Filtering data can be based on a query created with the help of the
process4 - QueryBuilder
(see [QueryBuilder](querybuilder)).  Please
note that only queries with the object type "GenericObjects" for Excel
data filtering.  
The conditions can be combined via the logical operator AND or OR
operator. Click "+" sign if you want to add an additional condition and
"-" sign if you want to delete the condition
![](//images.ctfassets.net/utx1h0gfm1om/4fARURG2E0KOKUQeo8Ug4K/3479045f8ce8037eab1e63459b0c6714/328980.png),  
OR means logical summation, AND - logical multiplication, which also
means that AND has more priority than OR. Use the bracket to determine
priority.  
For example, "A or B and C" regardless of "or A (B and C)".  
Example: All diagrams (with approval status = new OR with approval
status = updated) AND (with owner = "admin," or with owner = "User1").
Result: all diagrams that have been created or updated by user admin or
user1.  
In the table Non you can define exceptions. You can display for example,
all  
objects and diagrams that have been modified by all users except Admin
and Designer. The formula is "NOT changed by Admin AND NOT changed by
Designer".

In the field below, a special text is generated that describes all
defined filter settings. 

![](//images.ctfassets.net/utx1h0gfm1om/5HI2B6xK5UMiI4GeoCS4Q2/ad49f7d7cd827fda8f71b7993e8d9b8f/328966.png)

You can also change the order of the rules by drag and drop from the
row. The easiest way to achieve this is if you click on the number at
the beginning of the row, and then drag the entire row to the new
location.

![](//images.ctfassets.net/utx1h0gfm1om/7vduzUcUBUE0UCwwq2qCKc/9b0097fa0f45934072006e8c7dfc4667/328968.png)

 


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>