-   [Choose a Set](#choose-a-set)
    -   [Word Template](#word-template)
    -   [Save the report to a folder on a disk](#save-the-report-to-a-folder-on-a-disk)
    -   [Save the report to the Process4.biz database](#save-the-report-to-the-process4biz-database)
    -   [Diagrams as embedded Visio files](#diagrams-as-embedded-visio-files)
    -   [Diagrams as Pictures](#diagrams-as-pictures)
    -   [Table of Contents](#table-of-contents)
    -   [Buttons in the lower part](#buttons-in-the-lower-part)
        -   [Help](#help)
        -   [Save](#save)
        -   [Save as](#saveas)
        -   [Abort](#abort)
        -   [Back](#back)
        -   [Next and Finish](#next-and-finish)

### Choose a Set
![](//images.ctfassets.net/utx1h0gfm1om/5wmIco9otiyQWIOoqcwMcy/3304a59f88ef657184cb064c099d1aad/329515.png)

In a "Set" the settings are stored for the publication of the report to
Word. You can either choose an existing set or define your own by
clicking on New.

![](//images.ctfassets.net/utx1h0gfm1om/5SgFvnIgfe6Aqiak6cYMSs/7a94121ea4df39ad784d5b4b3babe1e3/329383.png)

In the window that appears, you can enter a set name and a description,
and translate them into other languages. You can open this window again,
by clicking on set details of an existing set. The translation window
can be opened by clicking on the T-button. Finally, you can remove sets
not used anymore. 

![](//images.ctfassets.net/utx1h0gfm1om/7u3LrIPuUgM6oeUAyIYi8g/94a03b7db03ac9c6a0142aaeb9738a27/329347.png)

If the set is already stored, it will be marked with the
![](//images.ctfassets.net/utx1h0gfm1om/2Yeigx3wkUgAioiY66O4eY/78d82ae086543c88587933b75dd9444e/329357.png)symbol. However, if the set is new, it
is additionally marked with a question mark.

![](//images.ctfassets.net/utx1h0gfm1om/5r33rXkIpysKsI44qc0muu/60e62e5297ab03b8c45e3527de9323f6/329353.png)


#### Word Template

Your desired settings are saved in a document template ("\* .dot" file).
Process4.biz provides you with a template for this purpose in the
defined path. You can customize this file before publication according
to your personal preferences or save your personal settings in a
separate template (see Document Composer document template for
Word). Please make sure when formatting that the content generated in
the Document Composer is inserted after the Title Page and the
Management Summary.

#### Save the report to a folder on a disk

Choose this checkbox if you desire to save the report file on the disk.
In this case you need to define the name of the file and the path where
the generated report will be saved on the disk.

#### Save the report to the Process4.biz database

Choose this checkbox if you desire to save the report file directly to
the Process4.biz database.  In this case you need to define file class
and name of the word document. By clicking the *Save as...* button you
can open *Save the report* window where you can define the unit to store
the report. Also, from the list of files you can choose an existing file
and it will be overwritten. If the file should not be overwritten
uncheck the box next to *Overwrite existing file(s)* in lower left
corner and new file with the same name will be created. 

*![](//images.ctfassets.net/utx1h0gfm1om/689hOgbDQASUSYe0E4yuIM/a812b475067f6da161426c73aa527466/329405.png)*

 
<div class="info">
When report saved as document to p4b database it will be automatically
linked to the object or to the diagram that has been selected for the
report.
  </div>

#### Diagrams as embedded Visio files

This function allows you to export process4.biz diagrams as Visio
objects.

#### Diagrams as Pictures

If you enable this option, .process4.biz diagrams are inserted into the
report as images in PNG format. Diagrams that are saved as BLOB objects
directly in the database or are password-protected (see chapter diagram
protection in the user manual) can ONLY be exported as JPEG images and
not as Visio objects.

#### Table of Contents

Enable this option if you want to generate a table of contents
automatically. This will be inserted in the report before the contents.

 

#### Buttons in the lower part

![](//images.ctfassets.net/utx1h0gfm1om/3L4f5YLeowoc0Ci4W8cq8o/112c6cd26ef61a1ba0fb750c21f8b3ee/329363.png)

##### Help

This button opens the Help Page for the Document Composer.

##### Save

Click this button to save the set at anytime during the wizard execution
and not just at the end of the export process.

##### Save as

Save the current set as a new one.

##### Abort

Click this button to exit the wizard without any changes.

##### Back

Click this button to return to the previous page.

##### Next and Finish

These two options are available to continue the dialogue:

-   If you click "Next", you can select in more detail what content is
    to be exported (see next chapter). Your selection is stored as the
    default selection for further exports under the set name you have
    entered.
-   If you click "Finish", the selected report is immediately generated.
    In this case an already stored set is used. This initiates the
    export process with the existing set settings.

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>