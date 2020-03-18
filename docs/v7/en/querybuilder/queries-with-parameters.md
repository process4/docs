In QueryBuilder, it is possible to define one or more parameters for a
query. You can enter parameters in a specific parameter window. Enter
here first the DB name of the parameter.

Then define a *Value* and a *Default value* for the parameter. The
*Value *is a parameter value, which may differ from the *Default
value* and is reset after logging out of the database to the *Default*
*value.* The *Value* in comparison to the *Default value* is **not**
stored in the database (it is transient). The *Default value* is,
however, used when the *Value* field is empty. The *Default value* is
stored in the database and is available after logout/login.

![](//images.ctfassets.net/utx1h0gfm1om/5SBsNnmaFGQwCoiwaYY2WE/93ae5c2d7a80db10d98d3b44694baadf/329269.png)

If you want to use the defined parameters for a query, you must use it
using @ symbol following *DbName*, where *DbName* is the DB name of the
parameter (which can be seen in the properties window of a parameter).
For example, if we wanted to select all Laboratory positions from the
database, we create a new parameter "Poistion name" (DbName is
*Position\_name*) and set its *Default value* to "Laboratory\*" and
restrict search objects to class Position, then we get the following
result:  

![](//images.ctfassets.net/utx1h0gfm1om/2TiHCQsZZKkSwCe6woGMMs/09cb0911389da8db4446c26b88023dad/329271.png)

Here is another example of how the parameters can be used for a query.
In this scenario we would like to know all *Input-Output* type objects
that are present on diagram *AX Sales Offer Processing* (from demo
database).  
1.) We create a new query, where we list all diagrams and their IDs. In
order to be able to select ID of a diagram, select *Show
"administration" entities* in the properties window. We also choose
source type as *Generic Diagram* since we want a list of diagrams and
not repository objects. In the Query results section we see that our
desired diagram has id 3537.

![](//images.ctfassets.net/utx1h0gfm1om/5Z8lpwFEhGWa0I6CqcA0MK/cb1f6aae6ce2bfa161a078cc35111e63/329273.png)

2.) In the second query we choose to output *Name* and we restrict
output **{ObjectClass}** to *Input-Output*. Then we create a new
parameter called Diagram id (Dbname *diagram\_id*) and set its *Value*
(or *Default value*, does not matter in this case) to 3537. From the
properties window, choose ID** **in **{UsedInDiagrams}**. It is now
possible to restrict this column to a specific ID, saved in our
parameter. Choose condition "is equal to" and set *@diagram\_id* in the
text box. After executing a query, you will get a list of all
Input-Output objects, that are present on a diagram *AX Sales Offer
Processing*.

![](//images.ctfassets.net/utx1h0gfm1om/3U69ySjWCcusI2MIuwEKG0/d0e812b9beba530459d9e21a110a8e00/329275.png)

If the value of the parameter is changed to a different diagram ID from
the first query, then all *Input-Output* objects are listed, which are
used on the diagram with the ID entered in the parameter.   
The ability to use parameters in queries is particularly useful in
combination with the use of the
extension [DocumentComposer](documentcomposer).