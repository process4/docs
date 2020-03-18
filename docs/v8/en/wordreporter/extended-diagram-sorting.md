In this step you can define the sorting and the order of the diagrams in
the Word document and choose diagrams for the report.

![](//images.ctfassets.net/utx1h0gfm1om/6Bur6eheVySkCSKsyeu6KY/508dd29fc6bbea8a7eb3e09d67e6c3da/328970.png)

-   **Sort the** diagrams by property 

This option allows you to sort the diagrams in Word Reporter by one or
more properties (e.g. unit, type, category, etc.).


Select at the top of the window in the **property** column the property
according to which the diagrams should be grouped (you can create new
diagram properties in the system class diagram in the Designer). Select
in the column **order** whether diagrams are to be sorted in an
ascending or descending order by that property. Select in
the **Chapter** column, whether a chapter should be created in Word
document, corresponding to the selected property. The
button ![](//images.ctfassets.net/utx1h0gfm1om/2f6awFRC6Uqq0MSmmoKMym/1202cb8d402432f212ff56bd9c4820b0/328972.png) adds a new sorting criterion
(property), with the button ![](//images.ctfassets.net/utx1h0gfm1om/5dfi3sXkOkgcCAc2awsM4o/4c9143cf40afe16744792ad2f1238e74/328958.png) you can
delete an existing criterion. In the list below, you can track how your
diagrams are exported to Word.

You can change the order of rules using drag & drop. Click best on the
number in front of the row and drag it to the new location.

You define, for example, the property unit as first sorting criterion.
In this case, diagrams are grouped by ***units*** (units alphabetically
ascending or descending). The second criterion you select is the
property ***classification.*** Within the sorting
by ***unit,*** diagrams are grouped by ***classification.*** And
finally, select the diagram ***name.*** Within the sorting
by ***classification,*** diagrams are sorted alphabetically. For the
properties ***Unit*** and ***classification*** create a chapter in Word,
but not for the diagram name.  
In the lower part of the window, you can select those diagrams that are
to be exported and included in the generated report. 

![](//images.ctfassets.net/utx1h0gfm1om/5wDPHciD96YkiqKqkegUIq/01917eb215e3cee3faad6317f37e9dc9/328223.png)

On the right is an example of the table of contents for the grouping
described above.

![](//images.ctfassets.net/utx1h0gfm1om/6I8qQe0Ypium2gOK0A8AkM/b954e25dfecf77968f1a96583c04c38f/328960.png)

 

-   **Generate diagram tree**

This option allows you to publish diagrams in the form of a hierarchy
tree (as in the repository) to Word.

In the lower part of the window, you can select those diagrams that are
to be exported and included in the generated report. Units without
exported diagrams do not appear in this dialogue unless you have
selected objects from this unit to be published.  
In this case, the numbering of the diagrams is displayed corresponding
to the diagram level in the tree: 1.Grand Parent diagram 1.1. Parent
diagram 1.1.1. Child diagram etc. 

![](//images.ctfassets.net/utx1h0gfm1om/6xwg3Ats52aiIUOi6Qggu2/c077d862a8c4982ed2904e2490b265a1/328549.png)

If you deselect some diagrams, then they are still displayed in the
diagram tree diagram with name and number, but no diagrams or objects
are published. These "empty" diagrams are also displayed in the table of
contents.  
Within the diagram tree you can move diagrams via drag-and-drop and
bring them in any order within the selected unit. The order of diagrams
you selected is included in the WordReport.

  
1) If you want to publish a diagram *(NAV Project Bid Proposal
Management)* parallel to another diagram *(NAV Sales)*, move the desired
diagram *(*NAV Project Bid Proposal Management*)* so that the dotted
line is above the target diagram *(NAV Sales).*

![](//images.ctfassets.net/utx1h0gfm1om/5Oy9AoHB7OQ8IIWSYA4oOg/3d8ff39c83e265316c940d8c36c6145c/328962.png)

Result:

![](//images.ctfassets.net/utx1h0gfm1om/jf7EbeWWQgGaykwEm6ggI/44f0c7b464cf2e2360f49dca75b94047/328964.png)

2) If you want to publish a diagram *(*NAV Project Bid Proposal
Management*)* under another diagram *(NAV Sales) *(as a child diagram),
move the desired diagram *(*NAV Project Bid Proposal Management*)* so
that the dotted line crosses the target diagram *(NAV Sales)*.

![](//images.ctfassets.net/utx1h0gfm1om/3kGtS29mwEEO82kqewKQ4K/cbee040681220ddda62e13cf5923a6d8/329014.png)

Result:

![](//images.ctfassets.net/utx1h0gfm1om/4Cnmlrf4hGuYY0GquYe4kY/08100352430def78fe97fe93609306d4/329016.png)

3) If you want to change the order of parallel diagrams (diagram *NAV
Sales* will be published before diagram *NAV Order Processing),* move
the diagram *NAV Order Processing* so that the dotted line is above the
target diagram *NAV Sales.*

![](//images.ctfassets.net/utx1h0gfm1om/4Cnmlrf4hGuYY0GquYe4kY/08100352430def78fe97fe93609306d4/329016.png)

Result (+reordering):

![](//images.ctfassets.net/utx1h0gfm1om/6TOYruTvXyG8oSscaEsGWO/73cf3b148a9df594d957bcd321ba094e/329018.png)

 

4) If you want to use same diagram in several parts of the tree you can
clone any diagram by right mouse click on the diagram to cloned (diagram
*NAV Project Bid Proposal Management*). After that you can move and
reordered in any way through the tree (diagram *NAV Project Bid Proposal
Management* will be published before diagram *NAV Process Lanscape).  
*

*![](//images.ctfassets.net/utx1h0gfm1om/2c7TekDPb20226Sy4QUA42/ce08ca3c5096c97ba8b49e444851dbfb/329475.png)*

*![](//images.ctfassets.net/utx1h0gfm1om/5Uaz9PdIQMYO4KKk8IsKum/7b9aee4a511401653c88803351ba2f61/329472.png)*

Result (+reordering):

*![](//images.ctfassets.net/utx1h0gfm1om/3EYSaPBXQ4s6Kma4go2AqS/f529dc8c51756c628477d3e3c0963d59/329469.png)  
*



The button ![](//images.ctfassets.net/utx1h0gfm1om/2SiSD2P6DusgyQwyI2QWaY/d5435c43ab759354ed1ef2d225b69c08/329006.png) can reset the diagram tree to the default state.

 

