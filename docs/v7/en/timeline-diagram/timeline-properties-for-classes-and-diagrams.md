Create special timeline properties for diagrams and classes in your
database.

-   Choose in Designer the system class ***diagram,*** right-click to
    select ***Special Properties → TIMELINE: Enable timeline
    function.*** Specific timeline properties are added to the
    class **diagram.**  
    ***

![](//images.ctfassets.net/utx1h0gfm1om/432svpvt5mSWk8COui4MeW/f12e4f6d8882292673b680eb8315644f/328703.png)  


-   Enable the specific timelines properties for your classes. You can
    select whether the object should be used as a time interval (e.g.
    an ***activity*** that is carried out from a given date to another)
    or as time point (e.g. an ***event*** which occurs at a particular
    time).

![](//images.ctfassets.net/utx1h0gfm1om/4mjoETGD044wKaMgWsgY4i/76a5512549e69a0c4d5cdaaaefc7fffb/328695.png)

-   A time-point object has the property ***time*** where the date is
    displayed. A time-interval object has the following
    properties: ***start time, end time, duration.*** The value for the
    property ***duration*** is calculated automatically "duration = end
    time - start time". If ***the start time*** or the ***end time***
    are changed, the value for the property ***duration*** changes
    accordingly; and vice versa: if the value for the
    property ***duration*** has changed, then the ***end time*** changes
    accordingly.

The property ***duration*** is generated differently, depending on
whether ***start*** and ***end time*** are defined in absolute or
relative format:  
1) for diagrams with absolute date format as from 02.01.2013 to
03.03.2013, the duration is an exact number of calendar days,  
2) for diagrams with relative date format as from -4m to 0, the time is
calculated in days. We assume that a "relative" month has 28 days (4
weeks).

 


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>