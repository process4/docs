Text and background color of data fields in the
[repository](repository) can be changed automatically in combination
with  property, property group or class values. This function can be
enabled or disabled in the [client settings](client-settings).

### Create Highlighting Rule

In Designer, under "color settings", you can create a highlighting rule.
Here, a formula can be entered with a condition that defines how and
when the color of data fields should be changed (e.g. if the value is
less than 5).

*![](//images.ctfassets.net/utx1h0gfm1om/qS9m2YoCe4YqMOCCcWQKU/7b03df5f59c1b8ddda60e9bc24b8300c/329544.png)*

*Create Highlighting Rule*

### Apply Highlighting Rule

After you create a highlighting rule, these can be entered for a
property easily in the [properties window](properties-dialog-box) and
is then applied with immediate effect. In the properties Explorer window
to the right of the diagram, properties are marked accordingly.

![](//images.ctfassets.net/utx1h0gfm1om/Ajsfsby46s8AAaK6swcio/f38562d400b7d6a52a47c4af6aa09e76/329548.png)

*Apply Highlighting Rule*

### Comments

-   If a highlighting rule is set for the class, then it affects all
    properties of the class.
-   If a highlighting rule is set for a property group, then it affects
    all properties of the attribute group.
-   If several highlighting rules are set simultaneously for classes,
    property groups and properties, then these rules are applied in the
    following order:
    -   first applies the highlighting rule for the property
    -   if no highlighting rule has been set for the property, the
        highlighting rule for the property group applies,
    -   if no highlighting rule has been set for neither for the
        property nor for the property group, a highlighting rule for the
        class applies.
-   A highlighting rule is set per class. So it applies to all units, in
    which this class exists.


![](//images.ctfassets.net/utx1h0gfm1om/6PCeIVYrLiE2Yq8QQmWmqu/b047239584b6476e5e05e1a58bab9ace/329554.png)

*Result*