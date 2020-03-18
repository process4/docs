To start the Model Publisher extension you need to select corresponding extension from the drop-down list.

![MPub 1](//images.ctfassets.net/6mz8d8cle1nl/1XCAu5yln62c3KyE4DfN1l/bc680c245f3203d55e562c5b339affa2/MPub_1.png)
 
On the firs page of Model Publisher extension you can select one of three actions: 
-	Create new publication: to create new web site and publish model there
-	Update an existing publication(s): to refresh already existing publication(s) 
-	Delete an existing publication(s): to delete publication(s)

### Create new publication
 
![MPub 2](//images.ctfassets.net/6mz8d8cle1nl/3F0NSKvLmoQv6fLXV6uEqg/96491435076b22c719299b0c0dc4d945/MPub_2.png)
To create new publication you need to define following website and publication data:

**Website path**

Enter the path (incl. web site or folder names) to save content published as a web site (HTML and SVG files). Click Browse… if you want to define a path different from the proposed one. 

__Website subpath__

The name of the subfolder in the website path location to save your publication files. You can specify at this point any file folder as a website path, provided you select HTML as the Site Script Type in the next dialog box. Your published model can then be opened without an installed web server via a browser (via the file "index.htm") and can be burnt on a CD-ROM or DVD.

__Website address__

The web address that should be opened after running the Model Publisher Wizard and where the published model can be viewed. 

__Publication name__

Enter the name of your publication sets that appears as the name of the model in the Web Portal. All settings that are defined in the next steps will be stored in this set and can be reused. You can open and edit properties from the set, by clicking on properties from the set. Already created WebPublisher sets can be managed in p4b Modeller under permissions for sets. If a user does not have "create" or modification permissions for a set, s/he can create or modify publications, but cannot save this publication set in the database. You can save the set before completing the wizard, by clicking save.

__Publication name__

Enter the name of the folder, which will contain all files related to created publication. 

__Description__

Enter description of created publication. If you use Multilanguage model enter corresponding descriptions. 

__Model language__

Set the language of the model that will be published to the website. 

__Site settings__

You can customize site settings:  Home, Contact, Help, and the e-mail address for the Feedback button. You can also remove the buttons that you do not need, by unchecking the respective box.
![MPub 3](//images.ctfassets.net/6mz8d8cle1nl/7ndnt7UjCVi2Xk8Jh2SmB0/bdae1257e72c562a7d784f9be80b1b39/MPub_3.png)
 

#### Selecting Units for publication
Select the units the content of which you want to publish. If you select a specific unit, only objects and diagrams created in this unit will be published, and no inherited objects. You can also publish content from multiple units. In this case, you might want to consider grouping objects by units (see chapter grouping settings for objects).

![MPub 4](//images.ctfassets.net/6mz8d8cle1nl/5ger2RtPLJnzczIv1mQg6x/d5d8992b67eba6288687d00bb203914f/MPub_4.png)
 
#### Selecting diagrams
__Display for Units__

On the web site diagrams of published model can be grouped by Units in the following way: 
- No Units: the diagrams will not be grouped by Units on the site
- Group by Units: the diagrams will be grouped by unis in alphabetical order
- Generate unit hierarchy: the diagrams will be grouped in a hierarchical way
You need to check __Include empty units__ check box if you want to publish units that do not contain any diagrams. 

__Display for diagrams__
- Generate a diagram tree
Similarly to the repository, a diagram hierarchy tree can be generated on the website, displaying diagram links graphically. In contrast to the repository, only diagrams in the selected unit are displayed in the tree and no inherited diagrams. Each diagram is displayed only once on the web. If you selected generate a  diagram tree you can apply following sorting to the diagram tree: 
  -	Show diagrams of parent units in the tree. 
  -	Show diagrams of child units in the tree.
  -	Hide the unavailable ones (and adjust the tree). 
   
- Group diagrams alphabetically
Select this option to sort diagrams alphabetically. If you selected this kind of sorting for diagrams, you also can set grouping by Diagram classes. 

__Publish only diagrams that have the selected approval status __

Select this checkbox if you want to publish diagrams only with defined approval status. In the drop-down menu select one or several approval statuses the diagrams with which should be published. 

__Publish only selected Visio pages__

Select this checkbox if you want to publish diagrams only based on defined Visio pages. In the drop-down menu select one or several types of Visio pages that should be published.

__Collapse root (diagrams) node by default__
 
 If you enable this option for diagrams, the diagram branch in the web portal collapses by default.
 
__Automatically synchronize the navigation tree with currently selected diagram__

Enable this option if you want a diagram to be automatically selected in the tree, when you e.g. open the diagram from the smart tag.
Note: If you want to preview how the diagram tree will be presented in the publication with selected settings  click on Reload Diagram tree button and tree preview will be updated. 

![MPub 5](//images.ctfassets.net/6mz8d8cle1nl/XUrTszWtf9aVSMxUiOQ6C/f331c0ae2a9e5df9587993edf6169c0b/MPub_5.png)

#### Selecting objects
__Display for Units__

On the web site objects of published model can be grouped by Units in the following way: 
- No Units: objects  will not be grouped by Units on the site
- Group by Units: objects will be grouped by unis in alphabetical order
- Generate unit hierarchy: objects will be grouped in a hierarchical way
You need to check Include empty units check box if you want to publish units that do not contain any objects. 

__Grouping of objects__

In the publication objects in the tree can be grouped in the traditional way by its classes. 

 
__Additional settings for objects__

-	Consider only these objects which exist on published diagrams: select this option if you want to publish only object that used on the diagrams that will be published 
-	Group linked objects by diagrams they are used in 
-	Mark these objects, that have been modified in the last X days:  Objects recently edited will be specially marked in the publication. A symbol with the word "NEW" is used to identify the new or modified objects on diagrams and a yellow dot in the hierarchy tree is used for highlighting modified data and/or diagrams. You can define the period which is used for determining the editing of objects (by default 5 days).
-	Collapse root (data) node by default: If you enable this option for data, the data branch in the web portal collapses by default.
-	Automatically synchronize the navigation tree with currently selected object: Enable this option if you want that an object is automatically selected in the tree when it is clicked on a diagram.

![MPub 6](//images.ctfassets.net/6mz8d8cle1nl/3L3sXCibAgJuBTPVaHI0dp/8e786485ff205d68c47d023be1bb9655/MPub_6.png)

#### Select files
__Display for Units __

On the web site files of published model can be grouped by Units in the following way: 
- No Units: files  will not be grouped by Units on the site
- Group by Units: files will be grouped by units in alphabetical order
- Generate unit hierarchy: files will be grouped in a hierarchical way
You need to check Include empty units check box if you want to publish units that do not contain any files. 

__Grouping of files__
In the publication files in the tree can be  grouped in the traditional way by its classes. 

 
__Additional settings for files__

-	Copy files from the database (uploaded to the database) to the target site location
-	Copy files created as link (do not uploaded to the database) from external storage to the target site location
-	Collapse root (file) node by default
-	Automatically synchronize the navigation tree with the currently selected file

![MPub 7](//images.ctfassets.net/6mz8d8cle1nl/1oEAJTgRpmQGw4JmnaFYRG/c657dce4de113e81be6972a066b56395/MPub_7.png)

#### General publication settings
 
![MPub 8](//images.ctfassets.net/6mz8d8cle1nl/4mKXzWiJ2eoRBJ7Ml4q6k0/961603a99125af4bb56595610880585a/MPub_8.png)

__Using a specific diagram as the start page__

Enable this option and select a diagram so that the diagram is displayed as the start diagram when you open the web portal. You can choose the start diagram only from the units that you have selected for publication (see Selecting the Model and Unit). You can then open linked diagrams directly from the start diagram.

__Suppress empty data fields__

If you enable this option, empty data fields (properties without values) of objects and diagrams are not displayed in the Web Portal.

__Show only "working" links __

Enable this option if you do not want to publish links not included in the publication to objects and diagrams.

__Show additional properties in the list with the linked objects__

When an object is linked with other objects, you will see a list with linked objects in the web portal in the object properties. By default, the class, object name and association object of the linked objects are displayed in the list. However, you can also define for each class, which additional properties are to be displayed in the list of linked objects. Click Select properties and just tick the desired property per class.

![MPub 9](//images.ctfassets.net/6mz8d8cle1nl/5pC1d3TLLGn5FqSqS7r378/c53af6afbec4adb6c89744a6d40e9971/MPub_9.png)
 

