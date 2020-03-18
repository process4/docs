-   [Export Einstellungen](#export-einstellungen)
-   [Erweitertes Filtern von Objektdaten](#erweitertes-filtern-von-objektdaten)
    -   [Bedingungen](#bedingungen)
-   [Daten auswählen](#datenauswählen)
-   [Excel Data Export Abschluss](#excel-data-export-abschluss)

### Export Einstellungen

-   **Wähle ein Set**In einem Set werden Einstellungen gespeichert
    (Auswahl der zu exportierenden Unit, Klassen, Attribute usw.). Sie
    können ein bereits definiertes Set auswählen oder ein neues
    definieren. Nicht mehr benötigte Sets können Sie hier entfernen. In
    diesem Fenster, können Sie den Setnamen und die Beschreibung setzen,
    weiters können Sie hier auch die Übersetzungen eingeben. Bei schon
    bestehenden Sets öffnen Sie dieses Fenster in dem Sie auf Setdetails
    klicken. Der Name des Sets und die Beschreibung können in andere
    Sprechen übersetzt werden, um das Übersetzungsfenster zu öffnen
    klicken Sie auf den Knopf "T".



![3-DE-1](//images.ctfassets.net/6mz8d8cle1nl/20fLAjo6EV2Y4kaCQePIGP/da2d2dcf6781ef985a5ff34b8a168b61/3-DE-1.png)

*Das Startfenster des ImportExportManagers*

-   Unit Wählen Sie die gewünschte(n) Unit(s), aus der Sie Daten
    exportieren möchten. Der Export kann entweder für Daten einer oder
    mehrerer gewählter Units innerhalb derselben absteigenden
    Hierarchielinie durchgeführt werden. Es können keine parallelen
    Units gleichzeitig für einen Exportvorgang selektiert werden. Es
    können auch Objekte einer einzelnen Child-Unit exportiert werden.

-   Excel DokumentGeben Sie den MS Excel Dateinamen und den Pfad für die
    Speicherung der zu exportierenden Daten an. Sie können eine bereits
    bestehende Datei verwenden. 

-   **Objektverknüpfungen**Aktivieren Sie dieses Feld, wenn Sie auch
    Objektverknüpfungen exportieren wollen.

-   **Diagrammverknüpfungen**Aktivieren Sie dieses Feld, wenn
    Diagrammverknüpfungen ebenfalls exportiert werden sollen.

-   **Verwendet in Diagramm**Aktivieren Sie dieses Feld, wenn Sie die
    Liste derjenigen Diagramme sehen möchten, auf denen das zu
    exportierende Objekt verwendet wird.** **

-   **Exportiere shape-spezifische Daten**Aktivieren Sie dieses Feld, um
    shape-spezifische Daten von Objekten zu exportieren (siehe
    Kapitel Shape-spezifische Attribute). Werte von Attributen, die als
    shape-spezifisch markiert sind, werden in Excel in der folgender
    Form angezeigt: "UnitName :: DiagramName :: ShapeNumber ::
    Value". ** **

-   **Befüllen leerer Attributwerte mit Defaultwerten**Aktivieren Sie
    diese Option, wenn Sie möchten, dass leere Attribute mit Werten aus
    Default-Sprache befüllt werden sollen. Beachten Sie, dass es einige
    Attribute gibt, wie Unit Name, Objekt Name, Klassenname und einige
    Selektoren, wie Diagramm Selektor, Klassenselektor usw., die
    automatisch befüllt werden, weil es für das korrekte Funktionieren
    der Erweiterung notwendig ist. ** **

-   **Ausschließen aller Elemente, die im Modeller als unsichtbar
    definiert sind**Units, Klassen, Objekte und Diagramme können in
    process4.biz als unsichtbar markiert werden (siehe Verwalten der
    Sichtbarkeit und Anlegen/Bearbeiten eines Designelements). Wenn Sie
    diese Option aktivieren, werden solche unsichtbare Elemente aus dem
    Excel-Report ausgeschlossen. Das heißt, unsichtbare Klassen werden
    im Wizard-Fenster Daten auswählen nicht angezeigt und Objekte von
    diesen Klassen werden in den Report nicht eingeschlossen.** **

-   **Wählen Sie eine weitere Inhaltssprache für den Export aus**  
    Mit Hilfe dieser Option können Sie Ihre Daten in mehreren Sprachen
    nach Excel exportieren. Das ermöglicht Ihnen, Pflege und Übersetzung
    Ihres Modells auf einfache Art und Weise durchzuführen. Bei
    Selektion einer oder mehreren zusätzlichen Sprachen wird für jedes
    Objekt in Excel eine zweite, dritte, etc. Zeile generiert, welche
    die Objektbeschreibungen in der gewählten Sprache beinhaltet. Das
    Kürzel für die entsprechende Sprache wird in der Spalte „
    LanguageID" angezeigt. Sofern beispielsweise der Objektname, die
    Beschreibung oder ein anderes Attribut im Repository nur in einer
    Sprache verfügbar sind, wird die zweite, dritte, etc. Zeile dieser
    Spalte im exportierten Excel-Dokument leer bleiben. Sie können dann
    die Übersetzung in dieser Zeile vornehmen und anschließend die
    aktualisierten und ergänzten Daten mit Hilfe von ImportExportManager
    zurück in die Datenbank importieren.

*Sprachauswahl für den Datenexport*

Im Wizard unten links gibt es zudem folgende Schaltflächen: 

-   **Hilfe**Öffnet die Dokumentation zum ImportExportManager.

-   **Speichern**Wenn Sie hier klicken können Sie das Set zu jeder Zeit
    während des Wizards abspeichern, noch bevor der Export abgeschlossen
    ist. ** **

-   **Speichern unter**Speichert ein neues Set auf Basis des gerade
    ausgewählten.

-   **Abbrechen**Abbrechen des Wizards ohne Änderungen.

-   **Zurück**Zurückkehren auf die vorherige Seite des Wizards.** **

-   **Weiter**Wenn Sie auf die Schaltfläche Weiter klicken, können Sie
    die Daten für den Export genauer spezifizieren (siehe Erweitertes
    Filtern von Objektdaten). Ihre Auswahl wird als Voreinstellung für
    künftige Exporte unter dem angegebenen Set-Namen gespeichert. ** **

-   **Fertigstellen**Wenn Sie auf die Schaltfläche Fertigstellen
    klicken, startet der Export-Vorgang mit den bestehenden
    Set-Definitionen (siehe Excel Data Export Abschluss).

### Erweitertes Filtern von Objektdaten

In diesem Fenster können Sie mit Hilfe von Filtern komfortabel
bestimmen, welche spezifischen Objekte in das Excel-Dokument aufgenommen
werden sollen. Aktivieren Sie Erweitertes Filtern für Daten, um folgende
Filter-Einstellungen zu definieren. Die Filtereinstellungen werden via
spezieller Formeln definiert. 

In der Tabelle Angewendet auf legen Sie fest, ob die weiteren
Einstellungen zur Filterung von Objekten eingesetzt werden sollen. 

In der Tabelle Bedingung können Sie folgende Bedingungen definieren: 

-   **Mit Eigentümer  
    **Selektieren Sie einen bestimmten Eigentümer, dessen Objekte
    angezeigt werden sollen. Als Eigentümer können beliebiger Benutzer
    oder eine Windows-Benutzergruppe ausgewählt werden. Im letzten Fall
    werden alle Objekte angezeigt, die im Eigentum der Mitglieder dieser
    Gruppe sind. 
-   **Erstellt durch**  
    Mit Hilfe dieser Option können Sie alle Objekte publizieren, die
    durch einen bestimmten Benutzer oder Mitglied einer bestimmten
    Windows-Benutzergruppe erstellt wurden. 
-   **Erstellt nach**  
    Nach dem ausgewählten Datum erstellte Objekte sollen publiziert
    werden. 
-   **Erstellt vor**  
    Objekte erstellt vor dem ausgewählten Datum sollen publiziert
    werden. Definieren Sie bitte dabei immer +1 Tag. Ein Objekt wurde
    z.B. am 20.09.08 erstellt, definieren Sie "erstellt vor 21.09.08",
    um dieses Objekt in Report zu inkludieren. 
-   **Geändert durch**  
    Sie haben die Möglichkeit alle Objekte in Form eines Excel-Dokuments
    auszuwerten, die durch einen bestimmten Benutzer oder ein Mitglied
    einer bestimmten Windows-Benutzergruppe verändert wurden. 
-   **Geändert nach**  
    Nach dem ausgewählten Datum geänderte Objekte sollen publiziert
    werden. 
-   **Geändert vor**  
    Vor dem ausgewählten Datum geänderte Objekte sollen publiziert
    werden. 
-   **Mit Genehmigungsmanagement**  
    Legen Sie mittels dieser Option fest, dass nur Objekte mit
    bestimmten Genehmigungsstatus in den Excel-Report aufgenommen werden
    sollen (Mehrfachselektion ist möglich in dem man mehrere Zeilen mit
    „UND" anlegt). 
-   **Alle Status-Zustände**
-   **Genehmigt**
-   **Nicht genehmigte (alle außer genehmigten Objekten werden
    exportiert)**
-   **Undefiniert**
-   **Neu – Ist noch in Arbeit**
-   **Neu – Braucht noch Verbesserung**
-   **Neu – Wartet auf Genehmigung**
-   **Aktualisiert – Ist noch in Arbeit**
-   **Aktualisiert – Braucht noch Verbesserung**
-   **Aktualisiert – Wartet auf Genehmigung**
-   **Gelöscht**  
    Dieser Filter steht nur dann zur Verfügung, wenn in Ihrer Datenbank
    das Genehmigungsmanagement aktiviert wurde, also ein entsprechendes
    Attribut ( ApprovalStatus) bei einer der Objekt-Klassen oder
    Diagramme vorhanden ist (siehe Genehmigungsmanagement). Ansonsten
    ist diese Option ausgegraut.

![3-DE-2](//images.ctfassets.net/6mz8d8cle1nl/35J9bxnmQu4K7IlRGU9ORw/c96c36cb2ac3e9b392d2e877fac0b811/3-DE-2.png)

*Erweitertes Filtern von Objektdaten*

 

![3-DE-3](//images.ctfassets.net/6mz8d8cle1nl/YFVJhiUYbI4tEHSTHrfmo/b053af456018c013313381be339a91bc/3-DE-3.png) 

*Auswahl der zu exportierenden Daten*

-   **Mit Tag**  
    Nur Objekte und Diagramme mit ausgewählten [Tags](Tags) werden
    publiziert. Dieser Filter steht nur dann zur Verfügung, wenn die
    ausgewählte Unit Klassen enthält, für die Tags aktiviert wurden. 
-   **Erfüllen der Abfragekriterien**  
    Filtern von Daten kann auch auf einer Abfrage basieren, die mit dem
    [QueryBuilder](QueryBuilder) erstellt wurde.[Beachten Sie bitte,
    dass nur Abfragen mit dem Objekttyp "Generic objects" für
    Excel-Daten-Filterung herangezogen werden
    können. ](http://www.process4.biz/HelpContent/540/ext-qb/de/)

#### Bedingungen

Die Bedingungen können via logischen Operator UND oder ODER kombiniert
werden. Klicken Sie auf "+" Zeichen, wenn Sie eine zusätzliche Bedingung
hinzufügen möchten und auf "-" Zeichen, wenn Sie die Bedingung löschen
möchten.  
ODER bedeutet logische Summierung, UND – logische Multiplikation, was
auch bedeutet, dass UND mehr Priorität hat als ODER. Verwenden Sie eine
Klammer, um die Priorität zu bestimmen. Zum Beispiel "A oder B und C"
ist gleich "A oder (B und C)".

**Beispiel**: Alle Objekte (mit Genehmigungsstatus = Neu ODER mit
Genehmigungsstatus = Aktualisiert) UND (mit Eigentümer = "Admin" ODER
mit Eigentümer = "User1"). Ergebnis: alle Objekte, die von Benutzern
Admin oder User1 erstellt oder aktualisiert wurden.  
In der Spalte "Nicht", können Sie Ausnahmen definieren. Sie können so
zum Beispiel alle Objekte anzeigen, die von allen Benutzern außer Admin
und Designer geändert wurden. Die Formel dafür lautet "NICHT geändert
durch Admin UND NICHT geändert durch Designer".

Im Bereich unten wird ein spezieller Text generiert, die alle
definierten Filter-Einstellungen beschreibt.

 ![](//images.ctfassets.net/utx1h0gfm1om/6G8J3ubTJCA2oCIMsgS04e/fd5b8f3ffd06c47fc4838eafc9d8313f/1017779.png)

### Daten auswählen

Hier können Sie die zu exportierenden Klassen, Attributgruppen und
Attribute auswählen. Aktivieren oder deaktivieren Sie die entsprechenden
Einträge. Klicken Sie danach auf die Schaltfläche Fertigstellen, damit
der Export-Vorgang starten kann.

Sie können die Reihenfolge von Klassen in der Liste mit dem Attribut
"Priorität" verändern (siehe Anlegen eines Attributs).

### Excel Data Export Abschluss

Abschließend wird das soeben generierte Excel-Dokument automatisch
geöffnet.

