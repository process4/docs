-   [Definition](#efinition)
-   [Arbeiten mit Tags](#arbeiten-mit-tags)
    -   [Tags ein- oder ausschalten](#Ttags-ein--oder-ausschalten)
    -   [Tag Klassen anlegen und
        verwalten](#tag-klassen-anlegen-und-verwalten)
    -   [Tags verwalten](#tags-verwalten)
        -   [Tags anlegen](#tags-anlegen)
-   [Objekte und/oder Diagramme mit Tags
    versehen](#objekte-undoder-diagramme-mit-tags-versehen)
    
    ------------------------------------------------------------------------


### Definition

Tags sind kundenindividuell erstellbare Metadaten, die es erlauben,
[Objekte](Objekt) abseits der [Unit](Unit)- und
[Klassenhierarchie](Klasse) zu gruppieren, zu kategorisieren und mit
zusätzlichen Informationen (z.B. Kostenstelle, Standort, etc.) zu
versehen, die nicht von den [Attributen](Attributgruppe_Attribut)
abgedeckt werden. Objekte können dabei auch mit mehreren Tags versehen
werden.

![image](//images.ctfassets.net/utx1h0gfm1om/4dMZRWCL8uQFsWljOEJmlO/023a4f09bc05638cb3bf097c6733510c/image.png)
 

### Arbeiten mit Tags

#### Tags ein- oder ausschalten

Tags zählen zu den [Systemattributen](Systemattribute) und können über
das Kontextmenü einer (System-)
[Klasse](http://help.process4.biz/confluence/display/DOC/Klasse) auch
automatisch angelegt bzw. entfernt werden.

-   Um Tags zu aktivieren für Klassen (Diagramme) klicken Sie die rechte      Maustaste und wählen Sie aus dem Kontextmenü „spezielle Attribute“ aus. Klicken Sie auf die Tags Attribute.Wenn Tags aus dem Kontextmenü <span class="underline">einer</span> (Diagramm-) Klasse aktiviert werden, wird das Systemattribut "Tags" auch nur zu dieser einen (Diagramm-) Klasse hinzugefügt.


-   Falls Tags <span class="underline">für alle</span> Diagramme
    und/oder Klassen einer Datenbank zur Verfügung stehen sollen, können
    sie im Kontextmenü der Systemklasse "Allgemeines Diagramm" und/oder
    "Allgemeines Objekt" aktiviert werden.
    
![image](//images.ctfassets.net/utx1h0gfm1om/4qDEVXaGlYLEttu1wc5xRg/df0f676a443273fb25f420f0c4ddba7c/image.png)
   

#### Tag Klassen anlegen und verwalten

Tag Klassen können über das entsprechende Element im oberen Bereich des
Navigationsfensters im [Database Designer](Database_Designer) angelegt
und verwaltet werden. Analog zu den "normalen" [Klassen](Klasse) für
[Objekte](Objekt) oder [Diagramme,](Diagramm) können auch Tag Klassen
mit [Attributgruppen & Attributen](Attributgruppe_Attribut) ausgestattet
werden, um die darin enthaltenen Tags entsprechend zu attributieren.

 ![image](//images.ctfassets.net/utx1h0gfm1om/55Co2Jc3AJEBhEyXL919Iz/fd726bee258544e4cfadc186f1bcb21e/image.png)


#### Tags verwalten

Tags werden über den Button "Tags" links oben im process4.biz Menü
angezeigt.

Die Anzeige der Tags, orientiert sich am [Repository](Repository):

-   Tags werden nach Klassen gegliedert im linken Navigationsfenster
    angezeigt.
-   Im rechten Objektfenster, werden die mit dem ausgewählten Tag, bzw.
    mit einem Tag der ausgewählten Klasse versehenen [Objekte](Objekt)
    angezeigt.
-   Das Menüband der Tag-Anzeige, bietet - analog zum
    [Repository](Repository) - die Optionen zum Anlegen, Bearbeiten und
    Löschen von Tags.
    
     ![image](//images.ctfassets.net/utx1h0gfm1om/4e0LwCiGTBR0TwvpMkPOrH/c44a456d63cf601b3ecf19b445e8d10d/image.png)

##### Tags anlegen

1.  Wählen Sie eine Tag Klasse, in der das Tag angelegt werden soll
2.  Klicken Sie auf den Button "Neu" im Menüband
    1.  Alternative: Rufen Sie das Kontextmenü (rechte Maustaste) einer
        Tag Klasse auf und wählen Sie "Neu..."
3.  Das
    [Eigenschafts-Fenster](http://help.process4.biz/confluence/pages/viewpage.action?pageId=1736733)
    erscheint.
4.  Geben Sie einen Namen, sowie die gewünschten Attributwerte für das
    neue Tag ein.  
      

 ![image](//images.ctfassets.net/utx1h0gfm1om/7DKQJCatd2JXFCyLjeBQlo/40a79309f1278903dbc5108abb26fb27/image.png)
 
*Übersicht aller Tag-Klasse*n und Tags in der Demo-Datenbank**



### Objekte und/oder Diagramme mit Tags versehen

[Objekte](Objekt) und/oder [Diagramme](Diagramm), können auf 2 Arten mit
Tags versehen werden:

1.  Mit der Option "Wählen von Objekten mit Tags" im Kontextmenü eines
    Tags  
    Diese Funktion, öffnet ein Auswahlfenster, in dem Sie allen Objekten
    und/oder Diagrammen, für die es das Attribut "Tags" gibt, das
    ausgewähllte Tag zuweisen können. Es ist zudem möglich, nach
    [Klasse](Klasse) und/oder [Unit](Unit) zu filtern, sowie die Anzeige
    auf jene Elemente umzukehren, die bereits mit dem gewählten Tag
    versehen wurden.
2.	Mit der Option „Tags Managen“ im Kontextmenü des Objekts oder Diagramms. Diese Funktion macht das Fenster mit der Liste der Tags auf, welche vergeben/gelöscht werden könne. Es ist möglich nach Klassen zu filtern und die Elemente die mit Tags versehen wurden zu invertieren.

![image](//images.ctfassets.net/utx1h0gfm1om/5JTNRsE9Qqru4q4AdTVrAI/de2ae0f3e4d66b4b6ac6c392e00a6420/image.png)
 	
3.  Über das
    [Eigenschafts-Fenster](http://help.process4.biz/confluence/pages/viewpage.action?pageId=1736733)
    eines Objekts oder Diagramms  
    Für das Attribut "Tags", lässt sich über das Eigenschafts-Fenster
    ein Auswahlfenster öffnen, in dem Ihnen alle Tags (nach Tag Klassen
    filterbar) angezeigt werden. Hier können Sie dem Objekt oder
    Diagramm über die entsprechenden Checkboxen die gewünschten Tags
    zuweisen.