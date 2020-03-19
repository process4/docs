The easiest way to create a custom web-publisher theme is to copy an
existing theme and then modify it.

Publisher is delivered with 2 built-in themes:

-   Process4.biz default
-   Simple Green

Here is a step-by-step manual on how to clone the "Simple Green" theme,
modify it, and save the modified copy in the database.

### Create a custom theme

1.  Navigate to the publisher styles folder: **C:\\Program Files
    (x86)\\process4biz\\Extensions\\Publisher Server\\config\\styles**.
    The themes delivered with the setup are stored in this folder.  
    ![](//images.ctfassets.net/utx1h0gfm1om/2qfYngPAXOE8UG6SOUiOaO/604a536aa238557d098f0deb8bf53a5d/328912.png)

 

1.  The "Simple Green" folder contains theme related files. Copy it to
    some other location, e.g. C:\\Temp  
    ![](//images.ctfassets.net/utx1h0gfm1om/Hyh2d3hSGOuQaIMIkE2uo/131bd3d5f9c30dfbf24e1d3823d0c65a/328914.png)

 

1.  Rename the copied "Simple Green" folder so that it is named
    appropriately:  
    ![](//images.ctfassets.net/utx1h0gfm1om/2OORgOrDRYKAycqSsKaMYy/0dd1b433332587ad8fed2b22e027f7d8/328900.png)

<!-- -->

1.  Modify files in this folder (css-style files, images, etc) according
    to your preference.  
    Place the CSS theme files to the "css" subfolder; put the custom
    image files to the "img" subfolder.  
    Note that you can use this folder directly in publisher as a custom
    theme by selecting it as "theme" in options:  
    ![](//images.ctfassets.net/utx1h0gfm1om/2gw55mGC7a8QEA6aoMqeGu/e1f109862458991f393b107720e23f62/328902.png)

 

### To save the theme in the database:

1.  In the site options dialogue, click "***Upload***" and select the
    folder with the custom theme to be uploaded to the database.  
    This should add the new item to the list of themes uploaded to the
    database:  
    ![](//images.ctfassets.net/utx1h0gfm1om/5XfGEJylUIsMCGuC4oIcEw/14ffbd0465a34a5abe9330db988f5350/328904.png)
2.  Switch the theme selector to "Database" and select this new theme in
    the list:  
    ![](//images.ctfassets.net/utx1h0gfm1om/7wQMx2lDy0yi8ScQoGQaQ6/549492389243b708b7323add41c1f051/328906.png)
3.  You can also ***Extract*** the theme from the database to the disc
    folder in order to modify it. Not needed themes can be deleted from
    the database by clicking on ***Delete***.
4.  In this way the theme in the database is selected as the custom
    theme. Note that database themes are marked with the "\#" sign.  
    ![](//images.ctfassets.net/utx1h0gfm1om/7bZLUSxSesKSCikCc28A86/7a1019d08b67427c23948d5b8bd17e6e/328950.png)

JIRA issue: <http://dev.process4.biz/jira/browse/MOD-5186>


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>