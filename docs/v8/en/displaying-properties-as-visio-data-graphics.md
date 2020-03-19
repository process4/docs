<div class="info">
Preliminary note:

The display of [properties](property-group-and-property) as Visio data
graphic is possible only with Visio Professional 2010 or 2013.
</div>

### Implementation

-   Define the corresponding [shape-specific property](shape-specific-properties).  
    It is advisable to define this property as mandatory field, and to
    set a default value to prevent it from being forgotten or
    disregarded.  
    ![](//images.ctfassets.net/utx1h0gfm1om/15tGnMmjNqCoeq2uosM6SI/c664025544f935c96ca7ae87ba3b423e/328687.png)

<!-- -->

-   Adjust the shape, designated for displaying the data graphic.  
      
   -   Select "Equip this master shape with process4.biz properties" in
        the context menu of the shape and equip the shape with the
        desired property.  
        The property "Visio value adjustment mode" should in this case
        be set to "Use typed value".  
        ![](//images.ctfassets.net/utx1h0gfm1om/6z3wVi6LPUQ0eSWseEk8SM/4de5804976a3e7979276367724f84142/328689.png)

<!-- -->
  - Define under "Data" - "Define Shape Data"&gt; (found in the context menu of the respective shapes) the corresponding shape data:

![](//images.ctfassets.net/utx1h0gfm1om/3ozTqxow80Wws4YuAMmWO4/33dcfe83d3f9a46c444e157c43e8ed24/328675.png)

Make sure that "type" and "value" are set to "number" and "0" as in the
screenshot above.

  - Add under "Data" - "Add data graphic">; (found in the context menu of the respective shapes) the desired data graphic and adjust its values according to the property initially selected:

![](//images.ctfassets.net/utx1h0gfm1om/NyZ0pHLzWe2msigEMAogm/9acb8b43c6dcfb94d0f08a4c7cba42d1/328677.png)

-   Integrate the finished shape again in the desired stencil (save and
    terminate the edit mode of the stencil).  
      
-   **Optional:** Display the shape-specific property in the shape
    context menu to simplify the work:

![](//images.ctfassets.net/utx1h0gfm1om/61TxEb8fiEKsYckiyW0s6A/01121195ff2da32d70771080dbacb9e0/328192.png)

See: [Property Group & Property](property-group-and-property)

 


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>