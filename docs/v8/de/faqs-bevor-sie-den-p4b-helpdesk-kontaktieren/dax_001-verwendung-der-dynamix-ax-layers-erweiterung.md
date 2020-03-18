

#### Checkboxes and attributes of layers:

-   Suppose that object **ActivitiesMain (Aktivitätsdetails)** has three
    filled layers - **SYS**, **SYP** and **GLS**:  
    ![](//images.ctfassets.net/utx1h0gfm1om/vbVpK6U6rY4COq8c2EO84/4c4eb519b67fe9630e586e86ed06ab33/1017693.png)

<!-- -->

-   Note checkbox positions for that layers in our "Dynamix AX layers"
    extension:  
    ![](//images.ctfassets.net/utx1h0gfm1om/3Yc2RW0zjiGywSE6s0maYC/ca0a614870cd529730fa099bc91895a9/1017578.png)

<!-- -->

-   See object's representation on diagram:  
    ![](//images.ctfassets.net/utx1h0gfm1om/3uWq8S2ufYesYqcGy0Y4Qy/ecdcbb34d0c6170a7f6d9d3597a89b23/1017567.png)  
      

Algorithm is simple:

1.  Check all filled layers
2.  Collect data for that layers from "Dynamix AX layers" extension -
    first row means 1, second - 2 etc (for example: it is 3 for **SYS**
    layer, 2 for **SYP** and 1 for **GLS**).
3.  Choose maximum data for filled layers (in our case: for **SYS**,
    **SYP** and **GLS**) - it is 3. Note that **VAP** layer set to value
    4, but it is not used because appropriate attribute is not filled in
    our object.
4.  It means that 3 stairs in ladder will be filled on diagram (for this
    object).

