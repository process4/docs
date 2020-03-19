-   [Create a structure diagram](#create-a-structure-diagram)
-   [Use diagram structure](#use-diagram-structure)

To create a Document Composer report from parts of your model, you can
either create a special process4.biz diagram (a so-called structure
diagram) or use the existing diagram structure (parent - child
diagrams). 

If a structure diagram is used, it is specific to this report and is
used to provide the structure and other texts that can be inserted into
the report. In order to easily understand how it works, please see the
handbook diagram in the Unit "Document Composer" in the DEMODB.

![](//images.ctfassets.net/utx1h0gfm1om/1AvpOAztDi2i2mkEQ4UeYC/54642d7f8a71a0d9250904b48f48bfea/329494.png)


### Create a structure diagram

Please create a diagram first, which
uses [shapes](shapes-stencils-and-templates) of two kinds. In this example,
these shapes come from the classes "handbook" and "chapters". These
shapes are directly linked to each other via the link types "includes"
and "is included in". The structure of the document is later
automatically created from these objects starting with the top-level
object handbook and then all objects of the class chapter. This will
create the table of contents.

You can also use [diagram links](links) for linking to diagrams. The
linked diagrams are automatically added to the document either as an
image or as a Visio object (see next chapter for settings). You can also
create special properties (e.g. text properties), to be used later in
order to be added to the report.

### Use diagram structure

The existing diagram structure may also be used. This occurs
automatically through the diagram-object-diagram links. This can be
useful for example in the creation of process descriptions from process
diagrams groups (for example in the DEMODB in the AX or NAV reference
model).
 


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>