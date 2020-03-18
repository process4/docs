## Problem

When publishing models, WebPublisher reports an error (Error code in log
file 0x86DB09E4): "DOS: sharing violation" (DOS: Freigabefehler).

## Solution

That can happen due to **Windows Defender** configuration (if you use a
different anitvirus program e.g. COMODO, Kaspersky,.. then do similar
steps to add VISIO to trusted applications). In order to solve this add
exceptions:

1.  Add **VISIO.EXE** into "Excluded processes". Note, there are two
    files that need to be added:  
    ![](//images.ctfassets.net/utx1h0gfm1om/3p5YjMq7kAm6EmMiyU0wg0/c6a28560040d4f6e0c055ab8f34e1d2f/329618.png)  
      
2.  Add Visio file extensions (svg, vsd, vsdx) to "Excluded file
    types":  

    ![](//images.ctfassets.net/utx1h0gfm1om/3eOOfv7S6Ac8CKgWagIMCU/f6cce2e5a0fec0be3b57e2d36dad3856/329631.png)

![](//images.ctfassets.net/utx1h0gfm1om/2HnVxliN2MAMYg8wawuKE4/7a48df06163bf236595819c35de17b8d/329624.png)

