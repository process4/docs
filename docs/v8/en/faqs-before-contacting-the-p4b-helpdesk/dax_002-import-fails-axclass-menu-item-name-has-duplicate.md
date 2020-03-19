### Problem

During ***Import from Axapta*** the following error message appears:

![](//images.ctfassets.net/utx1h0gfm1om/53wkScU1GUakaiWuoMkqWa/8ce72ed6b14fcaa42fd65057fdb8155a/329304.png)

### Reasons

In the database there are a few objects of the class Axapta Report with
the **menu item name **empty. However, the **menu item name** of these
objects should be unique.

### Remark

Please note that classes Axapta Form, Axapta Class and Axapta Report are
created specifically for Axapta. Objects of these classes should be
imported (that is, they should not be created manually).


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>