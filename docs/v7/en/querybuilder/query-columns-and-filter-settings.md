In addition to the items selected on the left in the properties window,
the primary query types, and the parameters, you can define additional
filter settings on the top right of the window query columns for
selected objects.

Path: The first column shows all properties and other items selected by
you. If you double-click with on a row, the tree in the Property Browser
is extended and you can select the corresponding entry. If a property,
which appears in the **Path** column, was deleted in the designer, it is
marked with a Symbol ![](//images.ctfassets.net/utx1h0gfm1om/3ptWwDAwUgCcok0Cc6Cwco/c0ec5dc35b03b5602662882f3b8f8ba5/328495.png). 

![](//images.ctfassets.net/utx1h0gfm1om/3TB7tblf3yWeguOk0oiScA/07b648760e650be40396c3224f3f130f/329341.png)

Visible: You can make each property visible or invisible in the second
column by enabling / disabling the hook.

Sort: You can define in the third column, "Sort", whether the evaluation
results should be sorted by the values of the selected criterium in
alphabetical order, either in ascending or in descending order.

Order: After having selected in the 3rd column the type of alphabetical
sorting, you can specify in this column the order in which the
individual criteria should be used for sorting. Assume that you have
defined for the properties Name and (Class) Name that you want them sort
in ascending alphabetical order. If you now specify as sort order in the
next column for the Name "2" and for the (Class) Name "1", the objects
of the query are sorted alphabetically in ascending order first by class
name and then by name in the query result (report).

As a result, you can determine in the column **"Condition"** further
filter conditions for the query. Click twice in this column on the line
for which you want to define the filter in more detail. A window opens
where you define one (or more) conditions for the item of this column: 

-   ***is any value: ***Objects with any values are listed (corresponds
    to the default setting - no limitation). 
-   ***is empty / is not empty:*** Only objects with empty or not empty
    value entry are listed in this property / item. 
-   ***is equal to / is not equal:*** By selecting this filter
    condition, you can specify a value, to which the items of the query
    either correspond or not. 
-   ***is / is not like:*** Here you can choose between asterisks (\*
    \*), which serve as placeholders, which symbols should or should not
    contain the value. For example, \*sa**\*** gives the result of all
    values, which contain "sa" in the description, sa\*: all values
    beginning with "sa" and \*sa: all values ending with "sa". 
-   ***is one/ is not one:*** with this condition objects are listed
    that belong to one of the selected values or that cannot be assigned
    to them.

The condition is activated automatically when you select specific
classes or units in the object tree using "(confined to)". This
restriction can be changed later, by selecting a different value. 

![](//images.ctfassets.net/utx1h0gfm1om/6c1kdgB52oQqWk6EW8yu6i/048f9bc273f4405140270b66381825f6/329343.png)

You can also define simultaneously several conditions.   
  
In the dialogue box *conditions for the columns value* (which can be
opened by double-clicking in the table cell of the query column
"Condition") open the small drop-down menu under "More ..." and select
the combination of several conditions with either AND or OR. You can
delete an additionally entered condition by clicking on "&lt;delete
last&gt;".

![](//images.ctfassets.net/utx1h0gfm1om/T8BRViddmwwYeuoa0oaYQ/28f77ad1549a69465d535e16f568c6f4/329329.png)

In the column **Identifier**, you can assign a self-defined name to the
associated column in the query results. By default, the value is taken
from the column "path". With this field you can replace the often long
and incomprehensible path names with short names.  
For example: Instead of
`{Link}.{LinkedObject}.{Link}.{LinkedObject}.Name` you name the column
"Rolle". This name is then used in the column description in Excel, as
the figure below shows. The name in the column **identifier **can also
be translated to other languages.

![](//images.ctfassets.net/utx1h0gfm1om/2QD9jHIvSMCaOMqYU0WWQY/c7f273e680957a2aabd498fba9bb7866/329331.png)

In MS Excel, the report looks like this:

![](//images.ctfassets.net/utx1h0gfm1om/3b3sFYGF1us8wU4EmmYymK/38a48d1ab0e313416d0eb8947debc351/329333.png)

The advantage of using the column **identifier** is that their values
can be translated into other languages. The small
icon ![](//images.ctfassets.net/utx1h0gfm1om/1doYZXuPqKaEsYOS6wYOQo/0c0a5e9ca7c43b447a56bde0fdd6deb8/329323.png) opens the window in which
translations for all languages currently available in the database can
be added. Therefore, an "international" query can be produced.

![](//images.ctfassets.net/utx1h0gfm1om/7Bw6KVH68gwgU4iIC2iSy2/aa3295b0886a916562d5ad8aacfcf57b/329335.png)

Each path has also its unique Db name, which cannot be translated. The
DBNames in the database are used for example in properties or classes,
in order for the process4.biz to recognize the path.   
By right-clicking on the row **"Query columns",** on the top
right** **in the QueryBuilder, which includes the filter settings, you
can remove rows or move them up or down. Moving rows is also possible
via these arrows ![](//images.ctfassets.net/utx1h0gfm1om/3h0E6zyl0Qe6K0SeMMyeKU/3488f90455c46e868651975f03674245/329321.png) and influences the
order in which the columns are then listed with the evaluated properties
in the window below.

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>