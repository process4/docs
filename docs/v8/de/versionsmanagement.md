-   [Erstellen einer neuen Version](#erstellen-einer-neuen-version)
-   [Wiederherstellen einer Version](#wiederherstellen-einer-version)
-   [Löschen einer Version](#löschen-einer-version)
-   [Versions Delta Report](#versions-delta-report)

------------------------------------------------------------------------


In process4.biz gibt es die Möglichkeit, Datenbankversionen zu erstellen
und bei Bedarf auch die Unterschiede zwischen diesen Versionen
anzusehen. Zudem ist es auch möglich, die gewünschte Version des
Objekts, Diagramms oder der gesamten Datenbank wiederherzustellen.

### Erstellen einer neuen Version

Um eine neue Datenbankversion zu erstellen, gehen Sie wie folgt vor:

1.  Wählen Sie "Erstellen einer neuen Version" aus dem Menü.  
    <div class="info"> Hinweis: zum Erstellen einer neuen Datenbankversion, ist die Administrations-[Berechtigung](Berechtigungen) erforderlich.
  </div>
2.  Der Versionierungs-Wizard startet.
3.  Geben Sie einen Namen und (optional auch) eine Beschreibung für die
    zu erstellende Version ein.
4.  Eine Version der Datenbank wird entsprechend ihrem derzeitigen Stand
    erstellt.  
      

### Wiederherstellen einer Version

Um eine bestehende Datenbankversion wiederherzustellen, gehen Sie wie
folgt vor:

1.  Starten Sie den Wizard über den Eintrag "Wiederherstellen der
    gesamten Version.  
    Hinweis: zum Erstellen einer neuen Datenbankversion, ist die
    Administrations-[Berechtigung](Berechtigungen) erforderlich.
2.  Der Versionierungs-Wizard startet.
3.  Wählen Sie die wiederherzustellende Datenbankversion aus.
4.  Die gewählte Datenbankversion wird wiederhergestellt und umfasst
    dabei folgende Elemente:
    -  Alle [Objekte](Objekt) und [Diagramme](Diagramm)
    -  Alle Elemente aus dem [Database Designer](Database_Designer)
    -  Benutzer und Rollen mit entsprechenden Berechtigungen
    -  Abfragen im [QueryBuilder](QueryBuilder)
    -  Die Sets aller
        [Erweiterungsmodule](process4.biz_Erweiterungsmodule)
    -  [Schablonen und Vorlagen](Shapes_Stencils_Templates)
          

![](//images.ctfassets.net/utx1h0gfm1om/6gN2a0bVba0wgOeecEww2A/65444b754e20631f006c6d0f16ef8aba/1017993.png)

*Das Versionsmanagement im process4.biz Menü*

![](//images.ctfassets.net/utx1h0gfm1om/6HEp8R5AM8awKyQ4qCQwMA/2be62263dce1fa2303922624c1752f80/1017995.png)

*Versionen eines Objekts im
[Eigenschafts-Fenster](Eigenschaften_Dialogfenster_)  
*

Achtung:

Alle Elemente, die nach dem Erstellen einer Version angelegt wurden,
werden beim Wiederherstellen dieser Version verschwinden.

Bitte beachten Sie außerdem, dass keine
[Systemattribute](Systemattribute) in den Versionen einer Datenbank
gespeichert werden.

Dazu ein Beispiel: ein Benutzer benennt das Systemattribut "Name" in
"Einheitsname" um und erstellt dann eine Version. Danach wird es in
"Vollständiger Name" umbenannt. Wenn nun die zuvor erstellte Version
wiederhergestellt wird, wird das Systemattribut weiterhin "Vollständiger
Name" (und nicht "Einheitsname") heißen.

#### Wiederherstellen einzelner Objekt- bzw. Diagrammversionen

Auch für einzelne [Diagramme](Diagramm) bzw. [Objekte](Objekt), gibt es
die Möglichkeit, vorherige Versionen wiederherzustellen. Eine Liste
aller vorhandenen Versionen eines Diagramms bzw. Objekts, findet sich im
[Eigenschafts-Fenster](Eigenschaften_Dialogfenster_).

Wenn Sie nun eine Version von einem einzelnen Objekt oder Diagramm
wiederherstellen möchten, klicken Sie hier auf "Wiederherstellen von
"Version X". Dadurch werden Objekt- und Diagrammeigenschaften aus der
gewählten Version wiederherstellt. Für Diagramme wird auch die
entsprechende \*.vsd bzw. \*.vsdx-Datei wiederhergestellt.

Wichtige Punkte beim Wiederherstellen eines Objekts:

1.  Eine frühere Version eines Objekts, kann nur dann wiederhergestellt
    werden, wenn das Objekt in der aktuellen Version vorhanden ist.
2.  Alle in der aktuellen Version vorhandenen
    [Attribute](Attributgruppe_Attribut), werden mit den Werten aus der
    wiederhergestellten Version überschrieben.
3.  Leere Werte von Attributen, werden nicht wiederhergestellt –
    aktuelle Werte werden beibehalten.
4.  Attribute aus der früheren Version, die in der aktuellen Version
    nicht mehr vorhanden sind, werden nicht wiederhergestellt.
5.  Attribute, die in der aktuellen Version vorhanden sind und in der
    früheren Version nicht vorhanden waren, werden nicht geändert.

Wichtige Punkte beim Wiederherstellen eines Diagramms:

1.  Für Diagramme, werden Werte von Diagramm-Attributen nach den selben
    Regeln wiederhergestellt, wie für Objekte; zusätzlich wird die
    \*.vsd bzw. \*.vsdx--Datei wiederhergestellt.
2.  Wenn Sie ein neues Diagramm erstellen, eine Version der Datenbank
    machen, dann auf dem Diagramm ein neues Objekt hinzufügen und die
    frühere Version des Diagramms (ohne Objekt darauf) wiederherstellen,
    wird die \*.vsd bzw. \*.vsdx-Datei ohne das
    [Shape](Shapes_Stencils_Templates) für das Objekt wiederhergestellt.
    Das Objekt selbst bleibt aber in der DB vorhanden.
3.  Wenn Sie ein Objekt auf dem Diagramm erstellen, eine Version machen,
    dann das Objekt vom Diagramm und aus der Datenbank löschen und das
    Diagramm aus der früheren Version wiederherstellen, wird die \*.vsd
    bzw. \*.vsdx-Datei mit dem Ghost-Shape darauf wiederhergestellt, das
    Objekt selbst wird in der Datenbank nicht wiederhergestellt (das
    Wiederherstellen der gesamten Version ist in diesem Fall
    erforderlich).

### Löschen einer Version

Um eine bestehende Datenbankversion zu löschen, gehen Sie wie folgt vor:

1.  Wählen Sie "Erstellen einer neuen Version" aus dem Menü.  
    Hinweis: zum Erstellen einer neuen Datenbankversion, ist die
    Administrations-[Berechtigung](Berechtigungen) erforderlich.
2.  Der Versionierungs-Wizard startet.
3.  Wählen Sie die zu löschende Version aus.
    1.  Alternativ dazu, können Sie auch alle Datenbankversionen auf
        einmal löschen.
4.  Die ausgewählte Version wird gelöscht.

Falls mehrere Versionen einer Datenbank vorhanden sind, hat das Löschen
einer Version A (= jeweils 1. vorhandene Version bzw. Startversion)
folgende Auswirkungen:

-   alle in der nächsten (zweiten) Version B (= Folgeversion) *nicht
    geänderten *Objekte, werden in die (jetzt neue) erste Version B (=
    die neue Startversion) verschoben.
-   alle in der ursprünglichen ersten Version A *geänderten* Objekte,
    verlieren ihre Version (= werden ohne Vor-Version abgelegt).
-   alle in Version B gelöschten Objekte werden gelöscht.

![versionDR](//images.ctfassets.net/6mz8d8cle1nl/37JjfrGlbSiU36sjuUND3p/6ca1b6f2ee3415f8f4ba4c6b5839fdd4/versionDR.png)

### Versions Delta Report

Der Versions Delta Report, dient dem Vergleich der Änderungen zwischen
verschiedenen Datenbankversionen. Die globalen Unterschiede zwischen der
aktuellen Version und einer frei wählbaren Vergleichsversion einer
Datenbank, kann man so in einem web-basierten Report betrachten und
analysieren.

Um einen Versions Delta Report zu erstellen, gehen Sie wie folgt vor:

1.  Wählen Sie "Versions Delta Report" aus dem Versionen-Menü.
2.  Der Versionierungs-Wizard startet.
3.  Wählen Sie zu Beginn jene Version aus, mit der Sie die aktuelle
    Datenbankversion vergleichen möchten. Im Feld Beschreibung, wird
    ggf. die Beschreibung angezeigt, die für die ausgewählte Version
    hinterlegt wurde.
4.  Geben Sie das Verzeichnis an, in welchem der Delta Report
    gespeichert werden soll.
    
    ![versionDR2](//images.ctfassets.net/utx1h0gfm1om/6F2V22ri1TjMuHNOHj3kph/96875e4ba8614e429fe4b3ecb45c2810/versionDR2.png)
    
5.  Klicken Sie auf Weiter, um die Generierung des Reports zu starten. 
6.  Der Report wird erstellt.

Im fertigen Version Delta Report, werden alle [Objekte](Objekt) und
[Diagramme](Diagramm) aufgelistet, die sich im Vergleich zwischen den
beiden Datenbankversionen verändert haben.

Zudem werden im Version Delta Report auch folgende Informationen
angezeigt:

-   der Name der Datenbank, aus der heraus der Report generiert wurde.
-   der Name und das Datum der Version, mit der verglichen wurde.
-   das Datum der Erstellung des Reports.

Neu hinzugefügte Objekte/Diagramme  werden mit einem Plus markiert, entferne Objekte/Diagramme mit einem Kreuz und bearbeitete Objekte/Diagramme mit einem Haken.  Beim Klicken auf das Objekt/Diagramm kann der Benutzer mehr detaillierte Informationen über die Veränderungen sehen. Es wird in Form einer Tabelle mit 3 Spalten angezeigt: Name des geänderten Attributs, alter Wert des Attributs und neuer Wert des Attributs. Zusätzlich zeigt der Version Delta Report auch Informationen über den Namen der Datenbank, aus welcher der Report erstellt wurde, den Name und das Datum der vergleichbaren Version und das Datum der Report Erstellung. 

![versionDR3](//images.ctfassets.net/utx1h0gfm1om/4Orube9sscGSIFC5ITyawJ/34a50390c09c1182f7ed259fe3579fcc/versionDR3.png) 