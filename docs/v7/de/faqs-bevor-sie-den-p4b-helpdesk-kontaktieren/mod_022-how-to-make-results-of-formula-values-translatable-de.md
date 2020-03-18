#### Description

How to make result values of formula property types translatable.

#### Problem example

Master shape names do not match class names, but master shape names
(results) have to be in the current DB language.

#### Solution

In this case, the additional <span class="underline">translatable</span>
property should represent the master shape name.

1.  Create the **Enum** property type "ActivityTypeGlobal". Add the
    necessary **Enum items** with the translations. In this case these
    are the master shape names.  
    ![](//images.ctfassets.net/utx1h0gfm1om/54OR2ekHfiUSUsK4AAi0G6/52e58d878516a54ca7b02bb72b660553/328935.png)  
      
     
2.  Create the **Formula** property type "ActivityTypeMastershape". The
    **formula text** uses Enum identifiers (0, 1..) of the
    property "ActivityTypeGlobal" for identifying result values.   
    Since Enum identifiers do not depend on the current DB language,
    they can be used to make the Mastershape name appear in the current
    DB language.  
    ![](//images.ctfassets.net/utx1h0gfm1om/2UOOJ0zoakaWGOg6IM0Uw6/eeeb2808dd594383bb5ed42604102e11/328937.png)  
      

