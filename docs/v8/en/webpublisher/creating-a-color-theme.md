-   [Create a New WebPublisher Color Theme](#create-a-new-webpublisher-color-theme-)
    -   [Save the theme in the Database](#save-the-theme-in-the-database)


### Create a New WebPublisher Color Theme 

The easiest way to create a custom WebPublisher theme is to copy an
existing theme and then modify it.  
Publisher is shipped with 2 built-in themes:

-   Process4.biz default
-   Simple Green

Here is a step-by-step manual on how to clone the "Simple Green" theme,
modify it, and save the modified copy in db.

**Create a Custom Theme**

-   Navigate to the publisher themes folder:

    ``` xml
    C:\Program Files (x86)\process4biz\Extensions\Publisher Server\config\styles
    ```

    The themes shipped with setup are stored in this folder.

![](//images.ctfassets.net/utx1h0gfm1om/15bqnmWETMAMGMucwASmKM/e170cbc0210579ca7af6e46cc03c1b76/329070.png)

-   The "Simple Green" folder contains theme related files. Copy it to
    some other location, e.g. C:\\Temp

![](//images.ctfassets.net/utx1h0gfm1om/43h22ZPCl2amU0yCmuY2Ei/1234d53dfc464d253ddc57488a35a29d/329072.png)

-   Rename the copied "Simple Green" folder so that it is named
    appropriately:

![](//images.ctfassets.net/utx1h0gfm1om/3omfYLf4KsguG6iuCYm8eK/086e9e831be1fe022c33b235db61455d/329074.png)

-   Modify files in this folder (css-style files, images, etc.)
    according to your preference. Put CSS theme files to "css"
    subfolder; put custom image files to "img." subfolder. Note that you
    can use this folder directly in publisher as custom theme by
    selecting it as "theme" in options:

![](//images.ctfassets.net/utx1h0gfm1om/11ZqeJuFYseIS8kqO8YIqq/26e70db1f7d31c59b68c5dcd7edcb5c9/329076.png)

#### **Save the theme in the Database**

-   In the site options dialog, click "***Upload***" and select the
    folder with custom theme to upload it to the database. This should
    add a new item to the list of themes uploaded to the database:

![](//images.ctfassets.net/utx1h0gfm1om/GMkHkhSd8YcyegyqMyKwM/dc877008d7ddbbfa5269c1837a25eb32/329062.png)

-   Switch theme selector to "Database" and select this new theme in the
    list:

![](//images.ctfassets.net/utx1h0gfm1om/4XIhXLqk7mMmemSkEEewk0/fe4fe191eb6b008b2a06fa1a789d6132/329064.png)

-   You can also ***Extract*** the theme from the database to the disc
    folder in order to modify it. Themes no longer used can be deleted
    from the database by clicking on ***Delete***.
-   This should select theme in the database as Custom Theme. Note that
    database themes are marked with the "\#" sign. 

![](//images.ctfassets.net/utx1h0gfm1om/3A8g60HYDm6ECciYOcgggw/752e4fd54b27f602816de804dfda2643/329066.png)

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>