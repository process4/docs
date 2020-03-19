
Approval History extension allow a User to view and compare Approved versions of diagrams on generated local website. 

To create, update or delete Approval History website a User need to start Approval History extension from the modeler. 
Before using Approval History you need to Configure IIS on your machine. On first launch of Approval History wizard you need to click Configure IIS… button. It will check if necessary features are installed and turned on. If there are features that need to be downloaded then it will started automatically. 

<div class="Info">
  <h3>Info</h3>
   You need Administrator credentials to configure IIS for Approval History site. 
</div>

![vb 6(1)](//images.ctfassets.net/6mz8d8cle1nl/F9D4sKpOPFVgHd6TFUz6B/ccca18322fae6e651521b2b4f8ff9277/vb_6_1_.jpg)

#### Publication creation

To create new publication a User need to set publication name, website name, the path where publication will be stored with DbConfig file, and the address which will be used to open publication with approved versions. 

![vb 2(1)](//images.ctfassets.net/6mz8d8cle1nl/2eQhpWS1qT8uJDrvufyppG/083321d09b8261e715adf0f8182e36bb/vb_2_1_.jpg)

In addition, the type of website authentication should be selected depending on the mode you use to log it to the databse. 
If you use [SQL Authentication](login-as-sql-server-user) mode to log in to the database select as a website authentication Anonymous type from the drop-down menu and proceed with publications process. 
If you use the [Windows authentication](login-as-windows-user) to login to the database, select from the drop-down menu Windows authentication.  If the website authentication is anonymous the publication will not be available and you will be proposed to change it on the opened site. 
![vb 3](//images.ctfassets.net/6mz8d8cle1nl/2c0oFtPQorzzMtgNtts1so/199a047f8a8a4d81dee3bd0c87bb8ed5/vb_3.jpg)
 
To change authentication of created publication you need to open Internet Information Services (IIS) Manager on your machine, expand sites folder and in the Default Web Site select the site that was created for your publication. Click on Authentication icon and in the opened list right click on the status of the Anonymous Authentication to change it to __Disabled__ and on Windows Authentication to __Enable__ it. 

![vb 10.jpg](//images.ctfassets.net/6mz8d8cle1nl/4ZyL5o3I8jJaBL5jdx5E1T/1710b328770c6158ab82db1c2c579642/vb_10.jpg.png)

<div class="warning">
  <h3>Warning</h3> 
  It is recommended to use Chrome browser to view Approval history. If you use Firefox browser for Approval history you need to enter your Windows user credentials to view the site. 
  </div>

When Approval History installation process successfully finished on the specified website address Published database can be found.

#### Updating a publication

To update already existing publication you need to start Approval history extension and select Update an existing publication option. On the next screen check one or several publications to update from the list. 

![vb 11.jpg](//images.ctfassets.net/6mz8d8cle1nl/2nzpMiDeD63QTmOTVB7bKF/f5edb23b2cc1c0d09180b171466f2f64/vb_11.jpg.png)

When the updating process successfully finished all approved changes of current database will be visible in the Approval History. New versions of the approved diagrams can be compared with preious one. 

<div class="info">
  If there is no new approved version were created before updating a publication the number of diagram versions remains the same.
  </div>
 
  
#### Deleting a publication  

To delete already existing publication you need to start Approval history extension and select Delete an existing publication option. On the next screen check one or several publications to update from the list. When deleting process successfully finished the selected publication will be deleted including the folder on the local hard drive. 

<div class="info">
  The site created for the publiation will be also deleted. 
  </div>

### Approval History site
On the generated Approval History site a User can compare several versions of Approved diagrams, its properties and objects, placed on diagrams. The site got generated for all databases of current DbConfig and all these databases will be available on the site. 
The database to display can be selected from the drop-down menu. 
![VB site 1](//images.ctfassets.net/6mz8d8cle1nl/2bnp9B9w1EwXWs6WOH8NIp/6c8bdf5412e401e039492a56584b95b0/VB_site_1.jpg)

On the left side, the tree contains all diagrams of selected database with approved versions. Click on diagram title will expand list of all approved versions of selected diagram and will open the diagram in the Diagram view. Each version has date and time of its creation. List of diagrams can be sorted by the last approval date. 
Simultaneously can be displayed two, three or four diagrams. If there is only one approved version then only one diagram will be displayed. 

![VB site 2](//images.ctfassets.net/6mz8d8cle1nl/3Bh3yKHEN8azRqVbz8fTIX/02d6e34426741098e6bacb3d3bd5a3e9/VB_site_2.jpg)
 
If there are more diagrams approved versions then only selected number will be visible on the page and to move to next versions of diagrams a User can by clicking “Previous” and “Next” buttons. Order of diagrams is from newer to older version. Diagrams versions can be pinned or hidden. Pinned diagram will be always fixed on the first position even if its version older than other ones. 



Hidden diagrams become non-visible on the site. If there is at least one hidden diagram in selected database the check-mark “Show hidden” will appear on the toolbar. 
![VB site 3](//images.ctfassets.net/6mz8d8cle1nl/5JOAtQfSYdFxzu7Em7Cm8w/7fa72cef05f1108463c6557f6fef9ae4/VB_site_3.jpg)

To make hidden diagrams visible a User need to put a check mark in this field. Hidden diagrams will have “Show” button instead of “Hide”. 

![VB site 4](//images.ctfassets.net/6mz8d8cle1nl/7mhZIW212mvJhnfhayoRxb/5547df8f71eb5bd7e0c3f10677191b13/VB_site_4.jpg)

All displayed diagrams zoomed in, zoomed out and fitted in simultaneously but scrolling works separately for each displayed diagram. 

![VB site 5](//images.ctfassets.net/6mz8d8cle1nl/2k1bl0EfVbbYguBuQxkyxs/33df7f0f12868e44520171a1c4a4d3b9/VB_site_5.jpg)

There are four modes to display diagrams:
•	Diagram view – only diagram will be displayed;
•	Diagram with properties – below the diagram will be displayed its properties with marked new and changed properties and objects; 
•	History view – only diagram properties with marked new and changed properties and objects displayed; 
•	History view (difference only) – only changed or new properties and objects of diagram will be displayed. 

![VB site 6](//images.ctfassets.net/6mz8d8cle1nl/3S5FpZd6CTuGyDiOzkGm2n/8585e39c2282fd62eed6027f1f011b4f/VB_site_6.jpg)
 

The difference between diagrams highlighted on the site. New properties and new objects will be colored with green and changed properties and objects will be colored in yellow in properties list and highlighted on the diagram.  

![VB site 7](//images.ctfassets.net/6mz8d8cle1nl/3qtna638bua1QUuCmSf2rI/8c980f0ea2ef7d99283bbda5ff737cea/VB_site_7.jpg)

![vb 8.jpg](//images.ctfassets.net/6mz8d8cle1nl/5WTYkFHozJ08iCIHH54ecj/dc0bdf49e4acf05cad1252c078bfa4a8/vb_8.jpg.png)

It is possible to customize the order of items and colors of new and changed items. In the upper right corner of the page click on settings button. 

![vb 12jpg](//images.ctfassets.net/6mz8d8cle1nl/6vlF5aTSkIc3Q83FVTdxJE/2ca0d13ce8c455768ba3b3686c405e59/vb_12jpg.png)

Four options can be changed on the site: 
-	__New item color:__ select the color to highlight new items on the diagram or in the property sheet and adjust its transparency. 
-	__Changed item color:__ select the color to highlight changed items on the diagram or in the property sheet and adjust its transparency.
-	__Tree item order:__ select the order to display the versions in the tree. 
-	__Content items order:__ select the order to display the versions of the diagrams on the site.

![vb 13 jpg](//images.ctfassets.net/6mz8d8cle1nl/4CGFcMUOKaMfvnNcP1eReY/482cf383869577d507ea456d7c62cccb/vb_13_jpg.png)

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>