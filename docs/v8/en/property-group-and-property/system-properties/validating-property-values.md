In the system [property group](property-group-and-property) "Validation", it
is possible to validate the property values.

The validation rule and validation message can be defined for each
proeprty in the [Database Designer](database-designer) (except for
system properties) .

If the "validation rule" field is filled, the "Validation Message" box
will automatically appear.

 

#### Example-Application

1.  Create a property that needs to be validated or edit an existing
    property in the [Properties window](properties-dialog-box)
2.  Set a validation rule  
    For our example, the value of an integer property must be between
    3-7, but must not be 3 or 7.  
    The validation rule used here is therefore the following:

    ``` vb
    3 < Value AND Value < 7
    ```

3.  Enter a validation message  
    For our example: "The property value must be between 3 and 7!"
4.  Confirm the changes with "Ok"

**Result:** the applied or edited property may from now on only have the
values 4, 5 or 6; otherwise an error message is shown for incorrect
values.

 

![](//images.ctfassets.net/utx1h0gfm1om/5E0HydMioo08saMSIwCw4S/229f88d3ce1218deaca178be6a7adc2b/329338.png)

*Validation rule and validation message in the [properties
window](properties-dialog-box) of a property*

 

![](//images.ctfassets.net/utx1h0gfm1om/3Wy5XEoHny028QcU6cOqw2/2a5fe876b55514d74c9b9d25cb3f438a/329340.png)

*Error message according to the validation rule*

