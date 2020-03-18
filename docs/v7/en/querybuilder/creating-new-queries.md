Start the Query Builder from the process4.biz menu.   
Create a new query, for which the dialog box with the properties opens
first. Enter a name for this query that stores all your filter
settings. 

![](//images.ctfassets.net/utx1h0gfm1om/3XPhI04GZWcsaqmEywAKMA/79038f56c26aad2f5e324e582f0d3215/329430.png)

The queries are categorized using query classes. Query classes can be
created in the Designer.

![](//images.ctfassets.net/utx1h0gfm1om/1r2iRy46CIIK6Guc64e6um/faacff7c508702396f51c78fd87e5b85/329305.png)

New queries of the selected class can be created in the QueryBuilder.
You can also change the classes of queries directly in the properties
window.

![](//images.ctfassets.net/utx1h0gfm1om/5jYEVPnfSoWSekEU84O6gg/9c5b0e64195e26aa9e3b522effeb694c/329440.png)

![](//images.ctfassets.net/utx1h0gfm1om/5dntT0ckbSquK2UgeooGCe/f1e90508e6d749b7c6924d4d7b46d979/329301.png)

In the next window, the Query Builder opens with its window views
(overview of all queries, properties browser, query columns and the
window for the query results). 

![](//images.ctfassets.net/utx1h0gfm1om/2xOwhr08TOGEmg68O2C22Y/ecd4f17f2cb756a7361b66a2b8a6d4c0/329307.png)

In the properties browser, first select:

1.  Per hook in the checkbox, if you want to use administration items
    (e.g. user) design items (e.g. unit, class, property group,
    property, link type, ...), or repository items (object, diagram,
    object link, ...) or a combination of them for the report.
2.  In the folding menu underneath select, through which primary source
    type (object, diagram, object link, file) you want to create the
    report.
3.  In the tree underneath, you select then via the checkbox for
    filtering which desired parameters of the above selected primary
    query type should be considered when creating the results. 

![](//images.ctfassets.net/utx1h0gfm1om/1yP8Txdvg0awU0m2KGseqq/59ace39801dc652e3b2acf79506cecba/329310.png)

You can extend the tree for each parameter in the tree view with
individual selection criteria, by clicking on the plus sign. You can
also select which information, such as properties (also shape-specific
properties), linked objects and/or diagrams etc., are to be displayed,
but you can also restrict the query according to certain criteria such
as Unit and/or class, etc.

In the example below we have selected objects for which the
properties *Name* and *Description* are displayed; in addition, the
class name should be displayed and the searched objects should have
linked objects, whose names will also be displayed.   
The ticked fields and branches of the tree are highlighted in bold.

![](//images.ctfassets.net/utx1h0gfm1om/fOQ6WqrjpYma8wky0oEmo/79e1bd648a7e77a546c547215fc1f86b/329293.png)

![](//images.ctfassets.net/utx1h0gfm1om/32tvgfYr8AsOQwaosE04k/cf740d0a6970ccc6593d8eca27a7c2a9/329295.png)

Moreover, it can be displayed on which page within a Visio diagram an
object is stored (in the node *UsedOnPage)* or the files linked with
that object can be processed (in the node *LinkedFile*)*.  
*It can also be displayed on which diagram this object is being used
(*UsedInDiagram*) as well as any diagrams linked to this object
(*LinkedDiagram*).

![](//images.ctfassets.net/utx1h0gfm1om/1uxOWr7xGQUiieAYcuqOCU/4b504c1a7d563863242b521d54beb103/329297.png)

There is a possibility to place constraints not only on objects, but on
object links as well. This can be done in the **{Link}** section. For
example, to see on which diagram a link was created, simple
choose **{LinkOriginDiagram}**:

![](//images.ctfassets.net/utx1h0gfm1om/3VK8py6L7qQkWgw2sQQ8qi/34776cd20f80e02d17a46ac2a3dbe405/329603.png)

When you define a query on a diagram, you can display the name and other
properties of the diagram page (D*iagramPage*) and display the files
linked with the diagram (*LinkedFile*)*.* 

![](//images.ctfassets.net/utx1h0gfm1om/4bna2H3WLeqYEuK6ySeCmU/0ce0edf1b7b270b7c0074803669487a7/329299.png)

In order to execute a query based on the selected settings
in process4.biz and to display the result, click ***Execute Query:*** 

![](//images.ctfassets.net/utx1h0gfm1om/5muF4Y2zxmwWya04y6UO4W/53cc72d0c09dc4406bc18a935d969040/329285.png)

Subsequently, the Query Builder Report with all objects (or other items)
are created, to which the conditions apply. Each item you have selected
appears with its relevant properties as a row in the evaluation
result.   
All items in the query results list can be edited and deleted here
directly, but this has the same consequences on the listed items, as if
you were editing or deleting them in the repository or designer! The
hyperlink values can be opened directly from this window using the
mouse. Even diagrams can be opened directly from here. 

![](//images.ctfassets.net/utx1h0gfm1om/6uBsHulBXUiIAm6AA6ayIg/feb083d61cbd993950fbc83d3c0a463a/329287.png)

If you select the source type ***diagram,*** it is possible to select
the properties of the diagram classes and restrict the list of the
diagrams to the selected classes.

![](//images.ctfassets.net/utx1h0gfm1om/7uSuksVTfa8u8YCSY4ISGg/c88d998bf1affc9c3295952371d490b2/329289.png)

You can copy, cut and paste the queries using the right mouse button, as
for all other entries in the database.

![](//images.ctfassets.net/utx1h0gfm1om/41RP5XIuo84y2mOemAGekG/d4dfcd02392ffeca05fd5e0d1b896523/329291.png)

 
