#### Checkboxes and attributes of layers:

-   Suppose that object **ActivitiesMain (Aktivitätsdetails)** has three
    filled layers - **SYS**, **SYP** and **GLS**:  
    ![](//images.ctfassets.net/utx1h0gfm1om/3hnN9kPrL2MGyMQOguU4oi/5943cb8668bb0251c90887be842217fd/329309.png){width="530"}

<!-- -->

-   Note the checkbox positions for these layers in our "Dynamix AX
    layers" extension:  
      ![](//images.ctfassets.net/utx1h0gfm1om/3RptqY6kd28sc0WCOcaGaA/044ea81e05ac5f0427cde962f8e06a48/329428.png)

<!-- -->

-   See the object's representation on diagram:  
    ![](//images.ctfassets.net/utx1h0gfm1om/I9THXKxgQKG8IwUQoqmAu/9b895b76df5ba9535ec18febc04ac6ec/329312.png)

The algorithm is simple:

1.  Check all filled layers.
2.  Collect data for these layers from "Dynamix AX layers" extension -
    first row means 1, second 2 etc. (for example: it is 3 for **SYS**
    layer, 2 for **SYP** and 1 for **GLS**).
3.  Choose the maximum data for the filled layers (in our case: for
    **SYS**, **SYP** and **GLS**) - it is 3. Note that the **VAP** layer
    is set to value 4, but it is not used because the respective
    property is not filled in our object.
4.  This means that 3 stairs in ladder will be filled on the diagram
    (for this object).


