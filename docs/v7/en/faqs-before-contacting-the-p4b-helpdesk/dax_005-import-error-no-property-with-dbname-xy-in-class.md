How to deal with the following error message during the import of AX
objects to process4.biz:

  

 

There are two possible reasons for this error message:

1.  The DbName of the said property has been changed
2.  This property has been moved to another unit and is therefore not
    available in the class "AX Class"

 Ad 1. The DbName of the said property has been changed

DbNames are used for programming and for hard-coded import
functionalities. A user may change the "Full Name" of a property in the
respective user languages, but the DbNames should remain unchanged!
Please make sure that in p4b Designer the DbName of this property is
spelled exactly "ObjectTyp" (without a space).

  

 

Ad 2. This property has been moved to another unit and is therefore not
available in the class "AX Class" 

The process4.biz AX 2009 reference database has a predefined hierarchy
with units for the "organizational structure", the "Dynamics AX
reference model", etc. The whole content of the AX2009 reference model
is entirely modeled in the corresponding unit. The Extension for
importing AX forms via Excel searches for the class "AX Class" and
imports all AX objects into this unit (where AX Class is located).In
fact, no spreading of AX objects into different units is intended with
the current process4.biz release - so that there exists now only one
common pool for all AX forms within the unit, where the class "AX Class"
is originated.

If this "AX Class" is moved to another unit (and not all of its
properties are moved with it) or only some of its properties are moved,
then the described import problem may occur, because all necessary
properties have to be available in the target unit (= unit of that
special "AX Class"). Take the following steps to solve the problem:

   a) Login as Admin;

   b) Open "Designer" tab and lock top unit;

   c) Expand "Data" trees under units and search for class "AX Class";

   d) Move to unit "2. Dynamics AX (Reference Model)"  (right-click
-&gt; "Special" -&gt; "Move to..." ).

   e) Make sure that all of its properties are situated in this unit
(like e.g. "ObjectTyp") and are not inherited from other units
(indicated by a yellow triangle) and move them to the unit of class "AX
Class"

  

 
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>