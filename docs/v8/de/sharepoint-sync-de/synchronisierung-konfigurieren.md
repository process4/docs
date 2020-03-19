-   [Configure synchronization](#configure-synchronization)
    -   [Zuordnung der Standardeigenschaften](#zuordnung-der-standardeigenschaften)
    -   [Manuelle Ausführung](#manuelle-ausführung)
    -   [Automatische Synchronisierung](#automatische-synchronisierung )

## Synchronisierung konfigurieren

 
<div class="info">
Important notice!

Before configuring SharePoint synchronization makes sure that timezone
is set correctly in SharePoint site settings (client and SharePoint must be set to the **same** timezone). This requirement is no longer needed for p4b v.7.0.3 and higher.
</div>

 

Um die Synchronisierung mit der SharePoint Seite zu nutzen, muss der Benutzer die Synchronisierung konfigurieren und Synchronisierungs Regeln aufstellen. Um dies zu tun nutzen Sie die „Configuration of SharePoint Synchronization“ Assistenten.
![](//images.ctfassets.net/utx1h0gfm1om/7kabypUzUQaw0W4qIYemQI/04e9d50868fbcc6689c0d1551411bcde/329596.png)


Im Assistenten muss die SharePoint Verbindungsinformation spezifiziert werden. Wählen Sie die SharePoint Seite aus dem DropDown-Menü. Wenn die Seite als Diagramm Speicher benutzt  wird, wird es mit „…“ markiert. Danach muss der Benutzer die Regel für die Synchronisierung für die gewählte Seite festlegen. Um neue Regeln zu erstellen, wählen Sie das entsprechende Feld im Fenster und klicken sie auf__ NEXT__. 
![](//images.ctfassets.net/utx1h0gfm1om/60Yz9qJTuowC86QIi2M64k/1954e47261294cd38f1982761cb4208e/329590.png)

Im nächsten Fenster des Assistenten, geben Sie den Name der Regel und wählen Sie die Sprache der Synchronisierung. 

 ![](//images.ctfassets.net/utx1h0gfm1om/S2QJXB8KS2mcg8G0yksoS/2b529228cb6c900bbc48e8f1a756a4f9/329581.png)

Dann wird ein Fenster, wo der Benutzer die Synchronisierung konfigurieren kann aufgemacht. Der Baum der verfügbaren Elemente und Eigenschaften befindet sich auf dem linken Teil des Fensters. Synchronisierungs Eigenschaften der ausgewählten Elemente von dem linken Teil des Fensters werden auf dem rechten Teil  des Fensters gezeigt. Objekte, Dateien, Diagramme (in diesem Fall Diagramm Speicher müssen zu SharePoint Bibliothek wechseln) und Objekt-Verknüpfungen können synchronisiert werden. 
-	__Daten:__ Liste aller verfügbaren Objekt Klasse für die Synchronisierung (Objekte der ausgewählten Klassen werden mit den Eigenschaften synchronisiert)
-	__Dateien:__ Liste aller verfügbaren Datei Klassen für die Synchronisierung (Dateien der Klasse werden mit Eigenschaften synchronisiert, Dateien werden im SharePoint gespeichert). Jede Datei Klasse kann nur mit einer Regel synchronisiert werden. Nachdem es in einer Regel inkludiert war, kann es in einer anderen nicht aufgelistet werden. 
-	__Diagramme:__ Liste aller verfügbaren Diagramm Klassen inklusive System Diagramm Klassen für die Synchronisierung (Eigenschaften der ausgewählten Diagramme werden synchronisiert und die Dateien werden im SharePoint gespeichert). __Beachten Sie: Diagramme werden nur in der Synchronisationsregel gezeigt wenn SharePoint als Diagramm Speicher benutzt wird. __
-	__Verknüpfungstypen:__ Liste aller Verknüpfungstypen (Objekt-Verknüpfungen der Verknüpfungstypen werden mit den Eigenschaften des Assoziationsobjektes synchronisiert).

      
      
 ![](//images.ctfassets.net/utx1h0gfm1om/3WLh7dJ5BYAcqSseMAGqeW/22eb8b40c234204a7350d38493f6df5a/329565.png)
      
Es gibt eine Liste für Eigenschaftsgruppen für Dateien, Diagramme und jede Klasse der Verknüpfungstypen. Jede Eigenschaftsgruppe enthält eine Liste der Eigenschaften von Benutzern (__Name, Beschreibung__ und für Objekte zusätzlich die __Unit__) der Objekte/Dateien/Diagramme, welche synchronisiert werden für die ausgewählte Klasse, oder den Verknüpfungstyp – Eigenschaften der Assoziationsobjekte mit __„TO“__ und __„FROM“__ Eigenschaft einer Verknüpfung

Der Benutzer kann die zusätzlichen Synchronisierungs-Eigenschaften (im rechten Teil des Fensters) spezifizieren. Um neue Eigenschaften zu spezifizieren, wählen Sie Element im Baum und dann legen Sie die folgenden Eigenschaften fest. 

Für Klassen und Verknüpfungstypen: 
- __	Richtung:__ um die Richtung für Elemente der ausgewählten Klassen/Verknüpfungstypen festzulegen:
  -	__Process4.biz =&gt; SharePoint:__ Alle Daten werden immer von Process4.biz zu SharePoint verschoben. Jedes Element im SP, das nicht vorher synchronisiert wurde, wird jetzt ignoriert (und auch gelöscht aus der SP Liste), jedes gelöschte Element von Process4.biz wird immer von SP auch gelöscht und jedes neue in Process4.biz wird im SP erstellt.  
  -	__Process4.biz &lt;= SharePoint:__ Alle Daten werden immer von SharePoint zu Process4.biz verschoben. Jedes Element in Process4.biz, das nicht vorher synchronisiert wurde, wird jetzt ignoriert, jedes gelöschte Element von SP wird immer von SP auch gelöscht und jedes neue in SP wird im Process4.biz erstellt.  
  -	__Process4.biz &lt;=&gt; SharePoint:__ Jedes Element im Process4.biz, welches nicht synchronisiert wurde wird im SP erstellt. Jedes Element von SP, welches nicht synchronisiert wurde wird Process4.biz erstellt. Für bereits existierende Beziehungen zwischen Process4.biz Elementen und SP Elementen wird die Richtung basierend auf der letzten Modifizierungszeit und letzten Synchronisierungszeit festgelegt. Element mit dem nähesten Modifizierungsdatum wird als Form verwendet. 
-	__Unit:__ Spezifizieren der Unit für die Synchronisation. Diese Eigenschaft ist verfügbar nur für Objekt-Klassen und erlaubt nur die Auswahl jeder Unit wo die jetzige Klasse verfügbar ist. Währen der Synchronisierung, wenn die Unit ausgewählt ist, werden nur Objekte dieser ausgewählten Unit synchronisiert, nur Eigenschaften die in dieser Unit verfügbar sind werden synchronisiert und neue Objekte werden in dieser Unit erstellt. Wenn die Unit nicht wirklich eine aktuelle Klasse enthält, werden alle Objekte dieser Klasse synchronisiert mit allen Eigenschaften  und neue Objekte werden in einer Unit erstellt, wo die aktuelle Klasse gespeichert ist. 
-	__SP Pause the workflows:__ kann für Wahr oder Falsch eingestellt werden. Diese Eigenschaft zeigt ob der Workflow im SharePoint während der Synchronisierung pausiert werden soll. 
-	__SP Condition Property DbName (SP):__ Name eines Feldes in der SP Liste, welches festlegt on SP Elemente  synchronisiert werden sollten oder nicht. Wenn es Wahr ist, kann die Synchronisierung beginnen. 
-	__SP Condition Property DbName (DB):__ db ist ein Name einer Eigenschaft eine P4B Elementen, welche festlegt ob P4B Elemente synchronisiert werden sollen oder nicht. Wenn es Wahr ist, kann die Synchronisierung beginnen. 

Für Eigenschaften:
- __	Richtung:__ um die Richtung der Synchronisierung zu spezifizieren:
  -	__Vererbt:__ Richtung wird von der Klasse/Verknüpfungs-Typ genommen
  -	__P4B =&gt; SharePoint:__ alle Werte gehen von P4B zu SP
  -	__P4B &lt;= SharePoint:__ alle Werte gehen von SP zu P4B
  -	__P4B &lt;=&gt; SharePoint:__ Richtung wird festgelegt basierend auf dem Modifizierungs- und Synchronisierungsdatum
-	__Auto-update in SP:__ Wenn es Wahr ist, dann wird beim Ändern der Synchronisierungskonfigurationen oder im Synchronisierungsfeld in SP die Liste für diese Eigenschaft aktualisiert um mit den veränderlichen, benötigten, anschaulichen Eigenschaften zu stimmen (für Eigenschaften wie Enum)

<div class="warning">
Um die Werte der Eigenschaften zu ändern, muss es aus der ersten Spalte ausgewählt werden.
  </div>

 

### Zuordnung der Standardeigenschaften

Es gibt manche vorher definierte Process4.biz Eigenschaften in der SP Feld Zuordnung. Diese Eigenschaften können nicht für Synchronisierungen ausgeschaltet werden, während manche geändert werden können:
•	Process4.biz Name Eigenschaft von Objekten und Diagrammen (auch für Verknüpfungen, die ein assoziierte Objekte haben) vorgegeben zugeordnet zu Title SP Feld.
-	 Process4.biz Name Eigenschaft von Dateien ist zugeordnet zu FileLeafRef SP Feld und das kann nicht geändert werden.
-	Wenn SP Genehmigungsmanagement genutzt wird, sind da auch folgende Eigenschaften:
  -	Process4.biz ApprovalStatus Eigenschaft eines Diagramms ist immer zugeordnet als _ModerationStatus SP Feld und das kann nicht geändert werden;
  -	Process4.biz ApprovalComment Eigenschaft eines Diagramms (wenn es im Genehmigungsmanagement zugelassen ist) ist immer zugeordnet als _ModerationComments SP Feld und das kann nicht geändert werden.

**Restriktionen von Synchronisierungsrichtungen**

Nicht jedes Element kann in alle Richtungen Synchronisiert werden. Es gibt manche Restriktionen:
-	Jede Genehmigungsmanagement Eigenschaft für Diagramme, wenn SP Genehmigungsmanagement benutzt wird, kann nur in Process4.biz &lt;= SP Richtung synchronisiert werden
-	Genehmigungsstatus Eigenschaft wenn Built-In Genehmigungsmanagement benutz wird, kann nur in P4B =&gt; SP Richtung synchronisiert werden. 
-	Unit Eigenschaft (eine die ein Behälter für Objekte ist) kann nur in P4B =&gt; SP Richtung synchronisiert werden 
-	Eigenschaften mit Formeln können nur in P4B =&gt; SP Richtung synchronisiert werden


**Eigenschaftsbeschränkungen für verknüpfte Elementenauswahl**

Es gibt manche Beschränkungen für die Auswahl der verknüpften Elemente um sie synchronisieren zu können:
-	Es sollte exakt nur eine Klasse spezifiziert sein
-	Um den Eigenschaftswert in P4B zu aktualisieren, muss die Eigenschaft im Eigenschaftsraster in P4B aktualisiert sein:
  -	Wenn diese Eigenschaft Diagramme auswählt, sollte es verknüpfte Diagramme auswählen, nicht benutzt an Diagrammen oder Objekten dieser Eigenschaft sollte ein Datenobjekt sein
  -	Wenn diese Eigenschaft für Verknüpfungen zwischen Datenobjekten ist, dann sollte exakt eine Verknüpfung spezifiziert werden, Verknüpfungstyp sollte nicht automatische Assoziierung haben und es sollte nicht mehr als ein assoziiertes Objekt sein


**Beschränkungen für Verknüpfungssynchronisierung **

Damit es möglich ist einen Verknüpfungstyp zu synchronisieren sollte folgendes zutreffen:

-	To, From Klassen dieses Verknüpfungstyps sollten erlaubt sein für Synchronisierung. 
-	Wenn der Verknüpfungstyp Assoziierungsklassen benutzt, sollte das auch erlaubt sein
-	Es sollte genau eine Verknüpfungstyp Regel existieren, die Verknüpfung zwischen To und From Klassen erlaubt. 



### Manuelle Ausführung

Der Benutzer kann die Synchronisierung für jede Regel ausführen indem er den __„Synchronize with the SharePoint“__ Assistenten startet. 

![](//images.ctfassets.net/utx1h0gfm1om/5VPUZc5f7aCGsGWeCWAUua/911c9c881d61661305d2accd4b342734/329613.png)  
Dafür muss der Benutzer von der SharePoint Seite aus dem DropDown-Menü ausgewählt werden und die Regel spezifiziert werden. 

![](//images.ctfassets.net/utx1h0gfm1om/42TsTNsBK08gMGQ0UEgQGE/dbe70f5929b8685d9af489442ee367f6/329514.png)

Für Dateisynchronisation muss die Funktion __„Move the local files to the SharePoint document libraries”__ überprüft warden. Wenn die für Synchronisierung erlaubt Datei Klasse Dateien enthält die nicht mit den Dateien in der Dokumenten-Bibliothek verknüpft ist, dann werden solche Dateien nicht synchronisiert. Mit dem Erlauben der Funktion __„Move the local files to the SharePoint document libraries”__ (Checkbox anhaken), warden alle solche Dateien im SharePoint geladen (wenn der Benutzer Zugang zu den Dateien hat).
 ![](//images.ctfassets.net/utx1h0gfm1om/1UjEuVkAQMg6U6iceima6G/f36d2304cbcdeec13ed94323cce5d939/329509.png)

 

Im nächsten Fenster kann der Benutzer Anmeldedaten für Synchronisierung spezifizieren. Zusätzlich kann er auswählen Seiten Anmeldedaten zu nutzen, wenn es in den SharePoint Seiten Einstellungen erlaubt ist. In diesem Fall werden die Anmeldedaten, die spezifiziert wurde als die Seite erstellt wurde während der Synchronisierung genutzt. Der Benutzer kann seine eigenen Anmeldedaten nutzen, die für die Zukunft für diese Seite genutzt werden (können im Manage SP passwords Assistent geändert werden). Im Modeler werden die Symbole der synchronisierten Objekte mit einer roten Linie markiert 
![](//images.ctfassets.net/utx1h0gfm1om/6MdWlHobdKs2meaYUgA4Iy/4cc12f5d7dc5c9296c8af18f598d4c46/329493.png)

### Automatische Synchronisierung 

Aktuell funktioniert die automatische Synchronisierung nur für Diagramme und manchmal für Dateien. (Keine Objekte und Verknüpfungen, weil sie in so vielen Synchronisierungsregeln genutzt werden können, ohne der Möglichkeit exakt auszuwählen was ausgeführt werden kann, kann die Synchronisierung ein Problem werden). 
Wenn automatische Synchronisierung erlaubt ist, wenn „Refresh“ Knopf im Modeler gedrückt wird, wird die Synchronisierung der Diagramme ausgeführt. 
Automatische Synchronisierung von Dateien funktioniert so, wenn der Benutzer eine Datei in Klasse erstellt, wo SharePoint Synchronisierung erlaubt ist, wird die Datei automatisch auf SharePoint geladen und die Datei von P4B zeigt die Datei von SP.

Wenn Diagramme geöffnet oder gespeichert werden, wird die Synchronisierung ausgeführt. Wenn ein Diagramm, das gespeichert wird, Formen von Objekten für Klassen für welche SP AutoBinding erlaubt ist enthält, dann wird die Synchronisierung für diese Regel ausgeführt. 


All diese automatischen Synchronisierungen ermöglichen dem Benutzer nicht die Anmeldedaten für die Seite zu nutzen. Folgende Regeln müssen dafür stimmen: 
-	Seiten Anmeldedaten werden benutzt, wenn die Seite erlaubt die Anmeldedaten zu nutzen und jede der folgenden Sachen ist korrekt:
  -	Benutzeranmeldedaten existieren nicht
  -	Letzte Synchronisierung hat der Benutzer  ausgewählt, dass er Seiten Anmeldedaten benutzen will
-	Seiten Anmeldedaten werden in einem der folgenden Fälle genutzt:
  -	Seite erlaubt es nicht ihre Anmeldedaten zu nutzen
  -	Letze Synchronisierung hat der Benutzer ausgewählt, dass er seine eigenen Anmeldedaten verwenden möchte

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>