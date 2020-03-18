-   [Show object links with a link type](#show-object-links-with-a-link-type)
-   [Option  Trace \[1,2,3..\] nodes of further links](#option-trace-123-nodes-of-further-links)
-   [Option Trace all link in the model recursively](#option-trace-all-link-in-the-model-recursively)
-   [Option Add  \[1,2,3..\] further columns for linked objects](#option-add--123-further-columns-for-linked-objects)

This chapter describes some special features on displaying linked objects in the QueryBuilder.

### Show object links with a link type

In process4.biz an object is linked to another object via a link type.
Link types may have a certain direction, or be bidirectional (see [link
types](link-types)).

If a link type has two directions, then there is a direct vectored name and an opposite name of the link type. 

![](//images.ctfassets.net/utx1h0gfm1om/5G0k2uNzfqQakcGSu8sGO2/c6533751432d655f83969e4ae22689e3/329325.png)

In QueryBuilder, the direction of the link type can be displayed via the `{Link}` property __IsForward__. If you select it in the tree of the Properties browser, then a new column with the values *True* or *False* is displayed:

![](//images.ctfassets.net/utx1h0gfm1om/2mxzUSKy6QYc0W2oyCm42K/68dbbfd5e714a26886c202eeae100bd2/329327.png)

If an object from the first column is linked via a direct link type to the object of the second column, then the value *true* is displayed in the column ***IsForward.*** If the link is opposite, then the value *false* is displayed. Furthermore, you can restrict the links to selected link types in the QueryBuilder in order not to have all linked objects displayed, but only those objects that are linked via the selected link type.

From the demo database, the link-type "On Server" with directed vectored name "Made available by" and the opposite name "Host for" is used as an example. 

This link type is used to link objects of the class *Server* with objects of the classes *Application *and *System* in *Unit 2.1. IT-Systems*. Objects of the class *Server* are linked to objects of the class *Application* (or *System*) using the opposite link "On Server" (displayed as "Host for" since it is set in "Opposite name" property of the given link type): 

![](//images.ctfassets.net/utx1h0gfm1om/3dz9U0lQR2WKgGSkoYOSYW/d235a293f43ae46afea3a709c9057630/329313.png)

Objects of the class *Application* (as well as *System*) are linked with objects of the class *Server* with the direct link type "On Server" (displayed as "Made available by" since it is set in "Directed vectored name" property of the given link type):

![](//images.ctfassets.net/utx1h0gfm1om/3gLhvtJe3KmWekAUUkciqU/dab50972d5b57d934bb86b9cba77d539/329315.png)

To display the links between objects of the class *Server* and *Application* (links between *Server* and *System* will __not__ be shown) in the QueryBuilder, the following boxes are selected in the tree of the Properties browser:

-   Name
-   In node __Unit__ restrict to __Unit 2.1. IT-Systems__

![](//images.ctfassets.net/utx1h0gfm1om/2OERUFXuRGCkoKkGUeqAOA/59c080a54e03d1ed2373ab5280c71461/329317.png)

-   In node **ObjectClass** restrict to the classes *Application* and *Server* (restrict to *System* as well if you want to see it in results):

![](//images.ctfassets.net/utx1h0gfm1om/1M4ZBNOofGky8kc4SyIm86/386a39966dd18e98f3d94c9fb71c880a/329319.png)

-   In node __Link__ select the property *IsForward* and name for the linked object:

![](//images.ctfassets.net/utx1h0gfm1om/2eGKhwa2sYUccOSimG8iK6/41c5cca0f23829599e7f38988526e98d/329237.png)

-   In node __LinkType__, select the name of the link type: 

![](//images.ctfassets.net/utx1h0gfm1om/1zV3kSvIYA8qoUmE0EG4aA/237eddc29bd6b82954c581e1458ce07e/329239.png)

Now click __Run Query__ and you will get the results as displayed in the next image. The first column shows the name of the object from which a link originated (notice *Mailbox Database* object which was used in the example above), the second column shows type of the object, the third column shows linked object name (notice VM.001 Exchange object which was used in the example above), the fourth column shows what link type was used to connect two objects (notice there are more link types besides *On Server*, this is because there multiple links that can connect *Application* and *Server* objects), the fifth column shows the direction of the link (*IsForward* property):

![](//images.ctfassets.net/utx1h0gfm1om/3159tSLO5GyWYAWoKoouce/1beef1421b2d3a619599dfc7b8e023ce/329229.png)

Now you can also filter the result output by the property *IsForward*. If you want to display only the objects with the direct link type, then open with a double click the dialogue condition for the columns value and select *True*. If you want to see only objects connected by the opposite link type, then simply select *False*.

![](//images.ctfassets.net/utx1h0gfm1om/5m2FWJcR1YSKGoocQoMQgY/369976ae90e6e8162308b6099a91bce4/329243.png)

### Option *Trace \[1,2,3..\] nodes of further links*

Another special feature of links in the Query Builder can be shown in the next example.

The database contains certain (organizational) positions with persons linked to them. On the other hand, there are applications that are administered by certain people. We would like to find out, what application(-s) are being administered by a given position. Relation Position-Person is represented via Link type "Position employee" (not directed) and corresponding link rule. Relation *Person*-*Application* is represented via Link type "Administration" (with direct vectored name "Admin for") with corresponding link rule.

![](//images.ctfassets.net/utx1h0gfm1om/60gT6FTSmIimumYsCysOmy/82069c360a050a423dfe41b402c39641/329231.png)

Above image shows different levels of recursion for links: green - zeroth level of recursion (object itself), red - first level of recursion (one connection to *Outlook* via link *Admin for*), blue - third level of recursion (connections of connections of original object).

We would like to model the first level of recursion (red on the image above) in QueryBuilder. We create a new Query, and check *Name*, then restrict *ObjectClass* to object type *Position*. In __Link -&gt; LinkedObject__ check *Name* and in __Link -&gt; LinkedObject -&gt; ObjectClass__ check *Name* as well (as shown in the image below). It is important to set *Trace* to 1, in order to trace nodes of further links:

![](//images.ctfassets.net/utx1h0gfm1om/6MhlvioQ3CKgCq4AGaUuom/fce4c8ed1080e492d9c11947ea4b2ad2/329235.png)

 
 "Execute Query" gives the following result: two query results, where
one is the zeroth level of recursion (*Gerald Mustermann*) and the other
one is the first level of recursion (*Outlook*). Further nodes and their
connections can be explored by changing the value of the number of
subsequent links on the properties window on the left.

### Option  *Trace all link in the model recursively*

It is also possible to choose option *Trace all links in the model recursively*. This option enables user to see __all__ objects with direct or indirect link to the chosen (starting) object. If we were to apply this option to our example, we would get all connections to current object (*Position*), but also its linked objects, objects linked to linked objects, etc.

![](//images.ctfassets.net/utx1h0gfm1om/uODithwkRE8ESKEAMiAyu/a975bd779fd3ef08e11c287e88f26f36/329221.png)

This query may result in a huge number of objects. Starting from just one object, it was possible to reach 276 other objects. This is because the maximum depth of search is unbounded and will stop only when no new (further) objects can be found. In our example, in order to reach the end of a search, QueryBuilder has performed 9 further levels of object search. This means that in this case choosing option *Trace __9__ nodes of further links* is identical to option *Trace all links in the model recursively*.

### Option  *Add  \[1,2,3..\] further columns for linked objects*

Using this option it is possible to display the links on the first level of an object in multiple columns (instead of in only one column - default). For example if we wanted to show *Object class* column in QueryBuilder result, then we choose to add 1 further column for linked objects and choose ObjectClass Name of the newly appeared {Link1} connection. This is shown on the image below:

![](//images.ctfassets.net/utx1h0gfm1om/403QcPrP1mSOEC08i4QEIE/35356c8e1d7f07a88b0aad28a0a99cca/329225.png)

The number of columns you want to display varies depending on the number you set in the option. For every column a new __{LinkX}__ is created which can be altered to display desired columns.

 
