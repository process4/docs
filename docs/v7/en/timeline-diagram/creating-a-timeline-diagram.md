Once you have defined all timeline properties for classes and diagrams,
you can create a new timeline diagram. Right-click in the repository on
diagram and select create ***New Timeline Diagram*** (alternatively
right click on the Diagrams view on the right).

![](//images.ctfassets.net/utx1h0gfm1om/4QINtup6WQwGmCEosaYCMi/46795d43655f369e9ff610deb1c053ef/328697.png)![](//images.ctfassets.net/utx1h0gfm1om/5B83IHZ0GI6KiEKECe6YWU/3ba4138ef9018da377ae8db8a6877411/328683.png)

The property ***"Enable timeline function"*** is automatically set to
TRUE so that all timeline properties are displayed in the diagram
properties. 

![](//images.ctfassets.net/utx1h0gfm1om/6gA8M5bvXOKSIGmksK0Agu/9022c4fe030e91b274767ed970fcaa42/328685.png)

Fill in the following diagram properties:

![](//images.ctfassets.net/utx1h0gfm1om/4YlCz8LpzqUI0IMCCqcQSm/48600ecdbae60b0678678794095db0f7/328679.png)

-   ***Start time*** and ***end time*** of the timeline displayed on the
    diagram.  
    The time can either be defined as a date from the calendar, or as a
    relative date (duration) with a "-" or a "+" in front, e.g.:

    <table>
    <colgroup>
    <col style="width: 25%" />
    <col style="width: 25%" />
    <col style="width: 25%" />
    <col style="width: 25%" />
    </colgroup>
    <tbody>
    <tr class="odd">
    <td><p>Start time:</p></td>
    <td><p>-12m</p></td>
    <td><p>+ 1m</p></td>
    <td><p>02/12/2016</p></td>
    </tr>
    <tr class="even">
    <td><p>End Time:</p></td>
    <td><p>-1m</p></td>
    <td><p>+ 12m</p></td>
    <td><p>05/12/2016</p></td>
    </tr>
    </tbody>
    </table>

    Please note:

    Start and end times must be defined strictly in the same format!

-   ******Time duration units****** that appear on the diagram as
    divisions (time segments): Years (y), months (m), weeks (w), days
    (d), minutes (M), seconds (s).
-   ***Timeline subdivisions (snap)*** - each time unit is subdivided in
    the number specified here between the divisions (time segments), for
    the year it would be 12 (months), for months - 4 (weeks), for week -
    7 (days) etc. When an object is created between the divisions, its
    date is configured in accordance with the subdivision (e.g. 2m 2w).
    Timeline subdivisions (snap) property is only applicable when
    working with relative dates. It does not affect the diagram when
    working with absolute dates.

-   ***Time format*** - in this property you define how the time is
    displayed on the divisions (time segments). You can either use the
    default time settings (e.g. 12/02/2016) or define your own, for
    example:  
    `MMM yyyy` - Dec 2016  
    `MMM yy` - Dec 16  
    `dd.MM.yy - `02.12.2016
-   ***Show start and end time*** - set this property to TRUE if you
    want to display the start and / or end time on the diagram.
-   ***Synchronize with properties of parent object***  
    When you create an object as a time interval (e.g. from -7m to -2m)
    and create from this object a new (interconnected) timeline diagram
    and then you set the property Synchronize with properties of parent
    diagram in the properties of the diagram to TRUE, then the date of
    this object (here is meant the "jumping-off object" from which you
    created the smart tag on the new diagram) and of this interconnected
    diagram are synchronized. This means that when the time interval for
    the object is increased or decreased (e.g. at -6m to -3m), then the
    timeline on the linked diagram is changed accordingly.

Now you can create objects on the new timeline diagram. When you place a
time interval  or a time point object on the diagram and define a
specific time in the object properties, then the object is created
precisely in this time interval or time point on the diagram.
Conversely, if you change the position or size of the object, its time
properties change accordingly.

![](//images.ctfassets.net/utx1h0gfm1om/6GL5qxvoJiuCgi0yUO6GIi/0cd860bc21733041f48463d5957417a6/328681.png)

 


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>