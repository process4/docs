### Problem

In Visio 2010, an error appears in the Validation window on "Update
instances", when some of the following "Preserve" options are checked:

-   Line format
-   Fill format
-   Text format

![](//images.ctfassets.net/utx1h0gfm1om/2kiu1oRE68AuGQOw84Ukkq/09f14eb7caa8fd16d7d7737cb03c0236/328300.png)

### Reason

The .vst template, on which the current diagram is based, was created in
Visio 2013.

Visio 2013 stores template's styles in a different way, that also
affects .vst templates created in Visio 2013.

&gt; In Visio 2013 there is a new master-based style included in all
documents named ‘Theme’ and as you can see from the following
screenshot, all of the other styles are inherited from this new item

### Solution

### On the Developer ribbon select to display "Drawing Explorer" and in the styles folder remove the "Theme" node as displayed on the following screenshot.

![](//images.ctfassets.net/utx1h0gfm1om/5dZUVeFhyg8K4cKWa0mUCg/38217e25ee3bc9ee18248efa2a5f60aa/328301.png)


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>