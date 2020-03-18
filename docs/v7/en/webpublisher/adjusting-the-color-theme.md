In addition to the existing color themes, you can edit the [publication
settings](publication-settings) too and create your own style for your
web portal.

![](//images.ctfassets.net/utx1h0gfm1om/2MsLwwRms0OguUccAmqWee/64dabead87a4d2bccbdde868457e0747/329068.png)

By default there are two pre-defined color themes to choose from:

-   Process4.biz (default color theme of the Web publication)
-   Simple Green

If you want to change more often the color themes used, make sure that
you delete the temporary internet files from your browser's cache
between the publications so the changed site settings are taken into
account by display.

### Customize the Color Scheme

The required workflow to adapt an existing color theme equates largely
to that of the creation of a new color theme. You can find the article
here: [Creating a Color Theme](creating-a-color-theme)

![](//images.ctfassets.net/utx1h0gfm1om/3GF7JIGpWoEYK8m8S6MAyG/9e906cf03a221e9598e2ad9b9c42ff47/329054.png)


### Include a Company Logo

The web publication can also be adjusted with respect to the displayed
logo.

If you want to use your own logo, simply change the logo in p4b default
color theme or paste it into a color theme you created.

Copy an appropriate image with the file named "logo.gif" in the
appropriate folder:

``` xml
C:\Program Files (x86)\process4biz\Extensions\PublisherServer\config\styles\Process4.biz [default]
```

In each next publication with the WebPublisher, your logo will be
displayed in the web publication.

When you republish the model, the publication folder should be empty.
Otherwise, no design changes are displayed.

If you do not want to re-publish, but only want to change the logo for
an existing web publication, place the file in the following folder:

``` xml
C:\Inetpub\wwwroot\process4\img
```

<div class="info">
Please note:

If you then publish again and update all the pages, the modified logo
will be replaced with the logo set in the color theme.
</div>
