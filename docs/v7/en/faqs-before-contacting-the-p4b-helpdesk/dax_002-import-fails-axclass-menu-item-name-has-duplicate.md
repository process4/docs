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

