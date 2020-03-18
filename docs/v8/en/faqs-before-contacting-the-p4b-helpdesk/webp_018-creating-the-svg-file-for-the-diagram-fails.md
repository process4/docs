### Problem

SVGs cannot be created during the publication
with [WebPublisher](#){.unresolved}, log displays the following:

14/10/2014 12:28:24 \| - Exporting SVG file ...

14/10/2014 12:30:46 \| Process4.biz: Remote procedure call failed.

### Solution

1.  Open the relevant diagram in process4.biz
2.  Save the diagram via the Visio function *Save as…* local as \*.xml
    file
3.  Close Process4.biz incl. Visio
4.  Open the \*.xml diagram in Visio and store it via *Save as…* as
    \*.vsdx file
5.  *Optional:* open the saved \*vsdx file and check the SVG export via
    Save as…
6.  Replace the corrupt diagram with the repaired \*.vsdx- file   
    in the diagram folder, as indicated in [DbConfig](#){.unresolved} or
    the database settings; if necessary, diagrams should have been
    previously checked out of the database (s. [database
    settings](#){.unresolved}))

After carrying out these steps, you should be able to create the SVG for
the diagram again.

If the error appears in other diagrams, follow the exact same steps.
