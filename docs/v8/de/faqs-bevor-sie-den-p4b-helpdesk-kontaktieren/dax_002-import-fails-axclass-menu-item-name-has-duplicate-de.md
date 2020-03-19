

### Problem description

By ***Import from Axapta*** the following error message appears:

![](//images.ctfassets.net/utx1h0gfm1om/5LJkBH3Y5ycsqO8gWyweaI/51bab3c02ea0bd03b965baa47f6f62cf/1018573.png)

### Reasons

In the database there are a few objects of the class Axapta Report with
empty **menu item name**. But **menu item name** of these objects should
be unique.

### Remark

Please pay attention, that classes Axapta Form, Axapta Class and Axapta
Report are created specially for Axapta. Objects of these classes should
be imported (that is, they should not be created manually).


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>