## Goal

-   Connect (link) any P4B Objects on diagrams
-   Links are Visio connectors and not P4B objects
-   Links are directed (successor/predecessor = vorgaenger/nachfolger)
-   Links should work on all type of diagrams (Raci, Business Unit,…)
-   Use QueryBuilder to find connected objects results

## Steps

1.  Create new LinkType in a desired Unit
    1.  Set any name (in this example *Connector*)
    2.  Set directed to *True*
    3.  Set direct vectored name and opposite names  
        ![](//images.ctfassets.net/utx1h0gfm1om/5metRAs5gWu0QE0WuGEY0G/5c4f7b71629acb6ef8bce02d916dd48c/329522.png)
2.  Create new LinkRule
    1.  Give it arbitrary name (in this example *VorgNach*)
    2.  Set Link type to *nachfolger*
    3.  Choose *Direct* technology  
        ![](//images.ctfassets.net/utx1h0gfm1om/6AnJw5jbwsSuoaAMgWuuES/73f36c30e8681a4d61a936f668efc781/329518.png)
3.  Create new/open existing diagram  
    ![](//images.ctfassets.net/utx1h0gfm1om/1c2BJ5o7byMuiug0OMQMA0/1107a8ae1d6d4bd4583d60fa55590419/329513.png)
4.  Add P4B objects to the diagram (in this example B1 and B2)
5.  Connect them using *Visio* connector
6.  Save the diagram (links are created in the db only after the diagram
    is saved)
7.  ![](//images.ctfassets.net/utx1h0gfm1om/136jYKM5NM4c84g04kkIe2/376103304836bd1208bc0fb087b575a8/329546.png)
8.  B2 is now a successor (nachfolger) of B1. Done!

Note that when there are multiple rules for a link type that can be
applied, then the link rule with the highest priority will be used.

 

 

## QueryBuilder

 

1.  Create Diagram with multiple connections (as described above):  
    ![](//images.ctfassets.net/utx1h0gfm1om/3c1Wn75acEUQO8KC8mcgGa/3fd0787b340f59b0bf8c42912fc8f39e/329527.png)
2.  Go to QueryBuilder
3.  Create a new Query
4.  Restrict data to see only B1:  
    ![](//images.ctfassets.net/utx1h0gfm1om/6ntE7f5Z9CqAqg8K8UiAci/8fa562966e765ac98a2dd9efe96296e9/329532.png)
5.  Now we would like to find all connections to B1 (that is objects B2
    and B5 from the diagram)
6.  Choose to show LinekedObject Name in the parameters of the query
    builder:
7.  Now, we would like to see what objects are connected to our
    connected objects (nachfolger von nachfolger), that is object B3 in
    the diagram. For that, we explicitely say that we want to trace 1
    further nodes:  
    ![](//images.ctfassets.net/utx1h0gfm1om/iKzznH704gIMAM26E2MU4/b067b66bf416c67b13389c92998f0d16/329536.png)
8.  If we would like to trace all reachable objects from object B1, we
    choose “Trace all links in the model recursively”:

 

 ![](//images.ctfassets.net/utx1h0gfm1om/3gx8RSXer6y2O2M0Ea2yuo/d9c686dcba93c50c5d8efc951394a01e/329541.png)

## Further reading

-   Direct Link Technology (connecting objects using Visio connector):  
    <http://help.process4.biz/confluence/display/DOCEN/Example%3A+Direct+Link+Technology>
-   Displaying linked objects in QueryBuilder:  
    <http://help.process4.biz/confluence/display/DOCEN/Displaying+linked+objects>

 

