1.  Create a folder on the server on which you want to publish your
    content and name it for example "process4"  
      
2.  Open "Internet Information Services (IIS)" from Start → Control
    Panel → Administrative Tools → Computer Management.  
      
3.  Add a new virtual directory under "Default Web Site".  
      
4.  Enter the name of the directory, specifying the path to the
    directory created previously for the publication content. Then click
    OK, the virtual directory is then added.  
    a. Depending on the IIS configuration, it may be necessary to
    convert the directory to an application. You will find this option
    in the context menu of the respective (virtual) directory.   
      
5.  Now when you publish the content, enter the path to the folder you
    created earlier on the server  
      
6.  Disable the option Setup IIS Website at target location  


![](//images.ctfassets.net/utx1h0gfm1om/5HBv1x48EguGSCOWIMaGUi/d95c1ccbf3e0881c933330fb05289739/329056.png)

*Step 6*

      
7.  To open the web page with the published content, enter the following
    address:

    ``` xml
    http://Server Name/website name
    ```

    **In our example it would be:**


    ``` xml
    http://server/process4
    ```

![](//images.ctfassets.net/utx1h0gfm1om/6pSHbkvVO8GIg0mOOOSCAa/1ac6e5c6de746c5a2b791e2f668cb8c5/328516.png)

*Step 4*
