-   [Properties of a property](#properties-of-a-property)
    -   [Name](#name)
    -   [DbName](#dbname)
    -   [Property Type](#property-type)
    -   [Default Value](#default-value)
    -   [Priority](#priority)
    -   [Required Field](#required-field)
    -   [Condition](#condition)
    -   [Highlighting Rule](#highlighting-rule)
-   [System Properties](#system-properties)


To create a [property](property-group-and-property), select the desired
[property group](property-group-and-property) in the [Database
Designer](database-designer) in a [class](class) (or create a new one)
and then click on the "New" button. Alternatively, you can right-click
on a property group in the display window of the existing property and
then select "New ..." from the context menu.

![](//images.ctfassets.net/utx1h0gfm1om/cGUHs4HDEc8uOAwcWi28e/4230ac84e72817225aeaefe33006c4ef/329427.png)

*Properties window for a new property*


### Properties of a property

#### Name

Process4.biz automatically assigns a name to the new properties
(e.g."Property1") which you can change accordingly.

#### DbName

For design elements, a DbName (= unique database name that contains only
ANSI characters) is automatically created. If the DbName begins with the
symbol "\_", it is automatically converted to the "a" icon.

#### Property Type

Here you can select the property type for the property.

See: [Property Group & Property](property-group-and-property)

#### Default Value

With the property "default value" (in the property group Definition), it
is possible to define a default value for all property types which is
assigned automatically, when creating a new object of this class (but
not for already existing properties).

You can set default values for multiple properties using the multiple
selection. Keep in mind, however, that it is not possible, to set
default values for

-   Properties with different property types (properties should be
    either string, text or integer) and
-   Properties from the enum-type (enum items of different enum
    properties are different)

#### Priority

With the property "priority" (in the property group definition), you can
change the order of the list of classes, property groups and properties
in the [properties](property-group-and-property) of an object, in
the [Repository](repository) or [Database Designer](database-designer),
and in the [extension modules](process4.biz_Extension_Modules). The
lower this value is, the higher the property is listed.

#### Required Field

Defines whether the property is a mandatory field
for [objects](object) of the relevant class or not. Mandatory fields are
marked in the properties of an object or property by their blue font
color. If a mandatory field has no assigned value, the text color
changes to red and a corresponding message appears when attempting to
save the object.

#### Condition

See: [Conditions](conditions)

#### Highlighting Rule

See: [Coloring Data Fields](property-group-and-property)

### System Properties

Over the [system properties](system-properties), you can control the
behavior of the properties of the objects of the respective class in
specific situations.