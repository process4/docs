The function ***Update Diagrams*** is available to users with update
permissions and can be called by selecting the function *Update
Diagrams...* from the drop-down menu under *Update diagrams* button.

<div class="info">
  <h3>Info</h3>
  By default, Permissions for Diagram Update and Diagram Import extensions are disabled for all Users except Administrator. 
</div>

<div class="info">
  <h3>Info</h3>
  
Update diagrams wizard will be available only for users with Update permission for any unit and Diagram Update extension permission.

Import a diagram wizard will be available only for users with Create and Update permission for any unit and Diagram Import extension permission.

</div>

![](//images.ctfassets.net/utx1h0gfm1om/3dBxLtiZS8yigumsAKC6KQ/832a59981e794f94cceebbf70026afb4/328743.png)

 

 ![](//images.ctfassets.net/utx1h0gfm1om/6KT0K7VygwKwOUyyO0kYuk/369c03fab97e208c395c2474fe700d00/328745.png)

There are several ways to update diagrams. Multiple options can be
selected simultaneously: 

-   ***Refresh diagrams with data from the database (e.g. update with
    text and property values from the database).*** This function does
    not perform a master shape update. It updates objects on diagrams
    based on information from the database, when for example texts or
    properties have been changed, which are shown on diagrams. This
    option allows you to save all diagrams at once (e.g. as SVG files,
    as shown below in the digression). The database is not updated. 
-   ***Update database with information from the diagrams (e.g. analyze
    the diagrams and refresh the objects usage and linkage in the
    database).*** This function does not perform a master shape update.
    It updates the database with information from the diagrams. The
    diagrams are not saved. Use this function when you have performed
    changes to the automatic [link technologies](link-technologies) in
    the designer. When you enable for example a specific automatic link
    for a class later, then all objects of the selected classes on all
    selected diagrams are analyzed. The information obtained about the
    location and links of objects is then stored as links between the
    objects concerned in the database.
-   **[Update the diagram
    template](updating-the-diagram-template)** (logo, background etc
    ...). *This option allows you to update the template of all
    diagrams. That is, if the template* (\* VST Visio file with opened
    stencils (stencils)) has been changed (logo replaced, new templates
    (stencils) added, size changed, etc.), these changes can be
    transferred to other selected diagrams. The prerequisite is that the
    diagram template consists of two sheets: a foreground and a
    background.
-   __Remove hidden information from diagrams (The type of
    hidden information to remove can be selected on the next
    pages).__ This feature removes hidden information that is stored
    user-specifically for each Visio diagram. This can be e.g a template
    directory that refers to an outdated network path and thus slows
    down extremely the time for opening a diagram as it tries to find
    and open this path. 

 ![](//images.ctfassets.net/utx1h0gfm1om/pN5GGAniikMK0oO06csmw/245c01eb2a31d7004ee11b39c19b0443/328667.png)

-   **Update the diagrams to comply with edited master shapes.** This
    function transfers subsequent changes to master shapes on existing
    diagrams. You can define in the next steps the update settings. 
-   The option ***Create backup copies of diagrams*** is activated
    automatically so that unwanted changes can be reversed, when one of
    the dangerous options has been selected: update the diagram
    template, use an update script, remove hidden information from
    diagrams, update diagrams to comply with edited master shapes.
-   Select __[Run validation scripts](updating-diagrams-with-a-script)__ to update diagrams with
    a special "\* .vbs" script.

You can either click ***Next*** to move to the next wizard page, or
click ***Finish*** to exit the wizard with the default settings.
