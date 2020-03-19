In QueryBuilder, it is also possible to use already existing queries, in
order to create new queries building on them.

The existing query is called the base query, the new query is called
successor query. The idea is that the output result is used by the base
query as input to a subsequent query.   
To use this functionality, a query from the selection box base query
must be chosen first. Select then for the selected query a column in the
selection box ***column for the base query,*** which is then used as
input for the successor query. 

     ![](//images.ctfassets.net/utx1h0gfm1om/6EVKlveARGmk8CYAmGEmk8/35fd41010cfdecacfc1484a7ac83bfd5/329277.png)           
![](//images.ctfassets.net/utx1h0gfm1om/74r3Nhjl7iqKkIMYMq8AeK/bf04c2ecf2c595729f94339031505ed8/329279.png)

In the list of queries, the base query is displayed as superordinate to
the successor query. 

![](//images.ctfassets.net/utx1h0gfm1om/5JcGmF6TDi84s6eEuksaG8/24731d7900f1b6faefd4b78fbd191209/329281.png)

Only queries of the same class can be used as a base queries. If you
change the class of the base query, the class of the successor query is
also changed. If you delete the base query, all successor queries are
deleted. Functions like ***Copy / Copy special*** and ***Paste / Paste
special*** are available for queries. If you select ***Copy
special*** for the base query, successor queries can also be copied. 

![](//images.ctfassets.net/utx1h0gfm1om/1hnQQQidP686sKEQgS2aKq/07cb0de4f69deae9c9033c3cff409fc9/329283.png)

You will be able to understand the procedure more, if you consider the
following example.  
In the demo database a new query *Query1* is created, which should
display all objects of the *Unit 2.1. Enterprise Architecture* of the
classes *Process* and *Application*, which are connected to these
objects through the link type *"link with the following processes"*. 

![](//images.ctfassets.net/utx1h0gfm1om/4P9DTOuxgc0GAumAS2Moyi/3ccb118dc13db1bd905e05e9fe12b769/329337.png)

This query will be used as a basis for the new query Q*uery2.* The entry
name is chosen in Q*uery2* in the selection box base query *Query1* and
in the selection box ***column for the base query.***   
After this selection, the entry *name* and e.g. the name of the diagrams
are selected, which use the object. If you click run query now, then the
objects of the first column from the *Unit 2.1* *Enterprise
Architecture* and from the
classes *Process* and *Application *appear with the link type "*linked
with the following processes"* (this information is taken from
the *Query1)*. The second column shows the names of the diagram, where
the objects are used.

![](//images.ctfassets.net/utx1h0gfm1om/1FgMrBwL9ySeqMuccim8Cc/572fa1c7b2a252d1c9f381d23df89044/329339.png)

 


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>