-   [Datenbank-Einstellungen](#Datenbank-Einstellungen-Datenbank-Einstellungen)
    -   [Sprachen](#Datenbank-Einstellungen-Sprachen)
    -   [Genehmigungen](#Datenbank-Einstellungen-Genehmigungen)
    -   [SharePoint](#Datenbank-Einstellungen-SharePoint)
    -   [Exchange](#Datenbank-Einstellungen-Exchange)
    -   [Sicherheit](#Datenbank-Einstellungen-Sicherheit)
    -   [Erweitert](#Datenbank-Einstellungen-Erweitert)
        -   [Abspeicherungsoptionen für Diagramme &
            Vorlagen](#Datenbank-Einstellungen-AbspeicherungsoptionenfürDiagramme&Vorlagen)
            -   [Erlaube der Bearbeitung im Designer ohne
                Sperren](#Datenbank-Einstellungen-ErlaubederBearbeitungimDesignerohneSperren)
            -   [Verwenden der schnelleren automat.
                Linkerstellung](#Datenbank-Einstellungen-Verwendenderschnellerenautomat.Linkerstellung)
            -   [Aktualisieren des Mastershapes nur bei einer Änderung
                der zugrunde liegenden
                Objektattributs](#Datenbank-Einstellungen-AktualisierendesMastershapesnurbeieinerÄnderungderzugrundeliegendenObjektattributs)
        -   [Eindeutigkeit des
            Objektnamens](#Datenbank-Einstellungen-EindeutigkeitdesObjektnamens)
            -   [Erlauben von
                Namensduplikaten](#Datenbank-Einstellungen-ErlaubenvonNamensduplikaten)
            -   [Jedes Objekt muss einen eindeutigen Namen in den Ästen
                der Unit
                haben](#Datenbank-Einstellungen-JedesObjektmusseineneindeutigenNamenindenÄstenderUnithaben)
            -   [Jedes Objekt muss einen eindeutigen Namen innerhalb
                einer Klasse
                haben](#Datenbank-Einstellungen-JedesObjektmusseineneindeutigenNameninnerhalbeinerKlassehaben)
        -   [Erzwingen eindeutiger Namen für
            Designerelemente](#Datenbank-Einstellungen-ErzwingeneindeutigerNamenfürDesignerelemente)
        -   [Zeige den vollen Benutzernamens statt des
            Login-Usernamens](#Datenbank-Einstellungen-ZeigedenvollenBenutzernamensstattdesLogin-Usernamens)
        -   [Automatische Generierung von Hyperlinks für Verknüpfte
            Visio-Diagramme](#Datenbank-Einstellungen-AutomatischeGenerierungvonHyperlinksfürVerknüpfteVisio-Diagramme)
        -   [Wenn ein Shape vom Diagramm entfernt
            wird](#Datenbank-Einstellungen-WenneinShapevomDiagrammentferntwird)
        -   [Wenn ein Shape am Diagramm eingefügt
            wird](#Datenbank-Einstellungen-WenneinShapeamDiagrammeingefügtwird)
        -   [Wenn ein Diagramm geöffnet
            wird](#Datenbank-Einstellungen-WenneinDiagrammgeöffnetwird)
        -   [Anzeigen einer "Liste mit Parent-Diagrammen" statt
            "Mehrfach-Parent-Diagramme" in der
            Diagramme-Kopfzeile](#Datenbank-Einstellungen-Anzeigeneiner%22ListemitParent-Diagrammen%22statt%22Mehrfach-Parent-Diagramme%22inderDiagramme-Kopfzeile)
        -   [Zeige Tooltips von Attributen auf
            Diagrammen](#Datenbank-Einstellungen-ZeigeTooltipsvonAttributenaufDiagrammen)
    -   [Pfade](#Datenbank-Einstellungen-Pfade)
-   [Festlegen der Defaultsprache für das
    Modell](#Datenbank-Einstellungen-FestlegenderDefaultsprachefürdasModell)

Die Datenbank-Einstellungen werden über das entsprechende Symbol im
process4.biz Menüband geöffnet. Dieses Symbol teilt sich in 2 Bereiche:

1.  Datenbank-Einstellungen (oberer Bereich)  
    ![](//images.ctfassets.net/utx1h0gfm1om/35WeciuO4M2QGaYWQ8kEK4/bd1808fefc6f618bfe0905925b161433/1017563.png)
2.  Defaultsprache (unterer Bereich)  
    ![](//images.ctfassets.net/utx1h0gfm1om/1SgBxLGd2Uik2m0WOsQ6qU/7be04ea8587a7630b9a2d8eae01d928a/1017571.png)

### Datenbank-Einstellungen

#### Sprachen

Hier haben Sie die Möglichkeit, durch Anklicken der Schaltfläche "Neu",
beliebig viele Sprachen einzurichten bzw . auszuwählen, in welche die
Inhalte in Ihrer Datenbank übersetzt und gespeichert werden können.
Zudem können nicht mehr benötigte Sprachen, die aber bereits angelegt
wurden, hier gelöscht werden. Die Defaultsprache, sowie die aktuelle
Sprache, können dabei aber nicht gelöscht werden.

<div class="success">

Für jede aktivierte Sprache, können Sie neben der inhaltlichen
Ausprägung zusätzlich auch alle veränderbaren Felder im [Database
Designer](database-designer-de) (=alles außer ausgegraute System-Attribute)
übersetzen. Die Übersetzung der Inhalte müssen Sie dabei selbst
vornehmen; in der Praxis, hat sich für diese Aufgabe der
[ImportExportManager](importexportmanager-de) als sehr hilfreich erwiesen,
da dieser u.a. eine jeweils zweisprachige Manipulation der
[Attribute](attributgruppe-und-attribut) erlaubt.

</div>

#### Genehmigungen

Siehe dazu: [Genehmigungsmanagement](genehmigungsmanagement)



------------------------------------------------------------------------

 

#### SharePoint

-   SharePoint Prefix  
    Hier können Sie einen Pfad auf eine SharePoint Bibliothek angeben,
    wo Dokumente zum Verlinken mit p4b-Objekten hintergelegt sind. Wenn
    Sie ein Objekt mit einem Dokument aus dieser SharePoint Bibliothek
    via Attribut Hyperlink verlinken, wird der SharePoint-Pfad erkannt
    und ein speziellen SharePoint Symbol im Smart-Tag auf dem Diagramm
    angezeigt
-   Aktivieren des automatischen Exports von SVG-Diagrammen nach
    SharePoint  
    Aktiviert den Export von Diagrammen als SVG-Dateien nach SharePoint
    in die hier eingetragene Bibliothek bzw. Liste  
    **Achtung**: diese Option ist überholt und sollte nur dann aktiviert
    werden bzw. bleiben, wenn eine SharePoint App zur Anzeige der
    SVG-Diagramme vorhanden ist.  
    -   Aktualisieren der SVG-Datei im SharePoint beim Speichern des
        Diagramms  
        Aktualisiert bereits in SharePoint vorhandene SVG-Dateien
        automatisch, wenn das jeweilige Diagramm gespeichert wird



#### Exchange

Hier werden die nötigen Optionen für das Verweneden der Synchranisation
mit dem ExchangeServer (für die Erweiterung
[TaskManagement](taskmanagement-de)) aktiviert.

#### Sicherheit

-   Verschlüsseln die Passwörter in der Datenbank  
    Aktivieren Sie diese Funktion, um die diversen Passwörter auch in
    der SQL-Server Datenbank nicht als Text, sondern verschlüsselt zu
    speichern, damit diese auch für den SQL-Admin nicht auslesbar sind.
-   Unterbinden der Vergabe leerer Passwörter  
    Diese Option verbietet es Usern leere Passwörter anzulegen
-   Verlangen eine Passwortänderung vom Benutzer alle X Tage  
    Verlangt automatisch eine Passwortänderung nach Ablauf des hier
    definierten Zeitraums
-   Verlangen Passwörter vom Benutzer mit mindestens X Zeichen  
    Wenn diese Option aktiviert ist und die bereits vorhandene
    Passwörter der Benutzer der ausgewählten Bedingung nicht
    entsprechen, werden Benutzer aufgefordert, ihre Passwörter zu ändern
-   Setzen der Passwortkomplexität (1=tief/5=hoch) auf die X Stufe
    1.  Stufe: Passwortlänge &gt; 4
    2.  Stufe: Passwortlänge  &gt; 12
    3.  Stufe: Passwort beinhalted Nummern
    4.  Stufe: Passwort beinhaltet Symbole
    5.  Stufe: Passwort beinhaltet sowohl Groß-, als auch
        Kleinschreibung

    Wenn diese Option aktiviert ist und die bereits vorhandene
    Passwörter der Benutzer der ausgewählten Bedingung nicht
    entsprechen, werden Benutzer aufgefordert, ihre Passwörter zu ändern
-   Sperren des Benutzers der falsch einloggt für 15 Minuten nach X
    Versuchen  
    Sperrt einen Benutzer nach der hier definierten Anzahl erfolgloser
    Login-Versuche
-   Erzwingen des Logouts für Benutzer die inaktiv sind für mehr als X
    Minuten  
    Diese Option bewirkt, dass Benutzer automatisch aus der Datenbank
    ausgeloggt werden, wenn sie das Programm über einen angegebenen
    Zeitraum hinaus nicht verwenden.

#### Erweitert




###### Erlaube der Bearbeitung im Designer ohne Sperren

Diese Option erlaubt es, Elemente der Datenbank-Struktur im [Database
Designer](database-designer) zu bearbeiten, ohne dafür Units sperren zu
müssen. Achtung: Nicht empfohlen im Multiusermode.


###### Aktualisieren des Mastershapes nur bei einer Änderung der zugrunde liegenden Objektattributs

Diese Option wird für Shapes angewendet, bei denen das "Ist ein
Mastershape"-Attribut auf Wahr gesetzt ist: wenn ein Diagramm mit
solchen Shapes in einer anderen Sprache, als in der, in der es
gespeichert wurde, geöffnet wird, wird sich das Aussehen des Shapes
dadurch nicht ändern (außer das "Ist ein Mastershape"-Attribut wurde
geändert).

##### Eindeutigkeit des Objektnamens

Abhängig davon, welche Option in der Auswahlbox gewählt wird, ist es
möglich Objekte mit dem selben Namen im [Repository](repository) zu
erzeugen. Wenn Sie ein neues Objekt erzeugen wird automatisch ein
eindeutiger Name erzeugt, bzw. wird der Name automatisch als eindeutig
angepasst, wenn Sie ein kopiertes Objekt einfügen.

###### Erlauben von Namensduplikaten

Diese Option ermöglicht es, Objekte zu erzeugen die den selben Namen wie
andere Objekte im Repository haben. Beim Erstellen solch eines Objekts,
wird zunächst eine Warnmeldung angezeigt, um den Benutzer darüber zu
informieren; das Objekt kann aber trotzdem namensgleich angelegt werden.

###### Jedes Objekt muss einen eindeutigen Namen in den Ästen der Unit haben

Wenn Sie diese Option aktivieren, dann ist es nicht erlaubt zwei oder
mehrere [Objekte](objekt) mit dem selben Namen in einer [Unit](unit-de) und
ihren Child-Units anzulegen. In den parallelen Units ist das dann
allerdings noch möglich.

<div class="info">

Groß- und Kleinbuchstaben werden dabei nicht unterschieden. Also werden
z.B. "Prozess" und "prozess" als gleichnamig interpretiert; das
bedeutet, dass wenn ein Objekt "Prozess" schon existiert, ein Objekt mit
dem Namen "prozess" nicht angelegt werden kann.

</div>

###### Jedes Objekt muss einen eindeutigen Namen innerhalb einer Klasse haben

Wenn Sie diese Option auswählen, wird die Eindeutigkeit von Objekten nur
innerhalb einer [Klasse](klasse) und innerhalb der Unit und ihrer
Child-Units geprüft. Das heißt, dass in zwei verschiedenen Klassen in
der selben Unit (oder in Child-Units), die Objekte mit dem selben Namen
angelegt werden können. Wenn Sie ein Objekt mit einem bereits
existierenden Namen erzeugen, dann wird eine Warnmeldung angezeigt und
Sie müssen den Namen zu einem eindeutigen Namen ändern. Wenn ein Objekt
schon in einem anderen Ast bzw. in einer anderen Klasse existiert, dann
werden Sie auch darüber informiert, aber können diesen Namen trotzdem
behalten und für dieses Objekt ein Namensduplikat erzeugen. In
parallelen Ästen können Sie die Objekte mit Namensduplikat problemlos
erzeugen, auch wenn Sie in derselben Klasse sind.

##### Erzwingen eindeutiger Namen für Designerelemente

Im Designer wird beim Anlegen der Elemente für [Attribute und
Attributgruppen](attributgruppe-und-attribut) die Eindeutigkeit innerhalb
einer Klasse geprüft. Für Klassen und Units wird die Eindeutigkeit in
einem Unit-Ast überprüft. Wenn Sie ein neues Element erstellen, wird vom
System zunächst immer ein eindeutiger Name generiert, auch wenn diese
Option nicht extra aktiviert wurde. Der Benutzer kann diesen Standard
durch Änderung des Namens aushebeln und ein Namensduplikat erzeugen.
Wenn aber diese Option aktiviert wurde und ein Name geändert wird der
vorher schon existiert, dann wird der Benutzer darüber informiert und
der Name muss auf jeden Fall zu einem eindeutigen Namen geändert werden.
Wenn die Einfüge-Operation verwendet wird, so wird der Eintrag
automatisch in einen eindeutigen Namen umbenannt.

##### Zeige den vollen Benutzernamens statt des Login-Usernamens

Wenn diese Option aktiviert wird, werden bei Windows- und p4b-Benutzern
nicht der Login-Name, sondern der vollständige Name angezeigt.

##### Begrenzen der Tiefe der Formelberechnung
Die Nummer der Attribute der Formelberechnung für den QueryBuilder. Der Benutzer kann diese Zahl ändern. 

![Dbset2](//images.ctfassets.net/6mz8d8cle1nl/nFmRMQ7AG3ilem5k97yHh/f2354154e36b814f257d8feaaa0f95c0/Dbset2.png)

##### Wenn ein Shape vom Diagramm entfernt wird

Hier können Sie bestimmen, was beim Entfernen eines [Objekts](objekt)
von einem [Diagramm](diagramm) (dies betrifft die Operationen "Löschen"
und "Ausschneiden") mit dem Objekt geschehen soll. Zur Auswahl stehen
folgende Optionen:

-   jedes Mal nachfragen, ob es auch aus der Datenbank gelöscht werden
    soll
-   ohne Nachfragen es immer auch gleich von der Datenbank löschen  
    Achtung: beim Ausschneiden/Einfügen eines Objekts, besteht dann die
    Möglicchkeit, dass
    [Geister-Shapes](graphical-visio-modeler-de)
    entstehen, falls das ausgeschnittene Objekt bereits auf mehreren
    Diagrammen verwendet wird.
-   ohne Nachfragen es immer in der Datenbank belassen

##### Wenn ein Shape am Diagramm eingefügt wird

Hier können Sie bestimmen, was beim Einfügen eines zuvor kopierten
[Objekts](objekt) auf einem [Diagramm](diagramm) mit dem Objekt
geschehen soll. Zur Auswahl stehen folgende Optionen:

-   Fragen ob das DB-Objekt dupliziert werden soll
-   Immer das DB-Objekt duplizieren  
    Diese Option fügt jeweils ein neues Objekt ein: das bestehende
    Objekt "Absage" wird damit automatisch als neues Objekt "Absage1"
    eingefügt.
-   Nie das DB-Objekt duplizieren  
    Diese Option fügt jeweils das bestehende Objekt ein.

Siehe dazu auch: [Ausschneiden, Kopieren, Einfügen &
Spezial](ausschneiden-kopieren-einfuegen-und-spezial)

##### Wenn ein Diagramm geöffnet wird

![](//images.ctfassets.net/utx1h0gfm1om/23zvoHb3jmAqayWsywGAeO/87d94c9f987fd0f6006aa1661732f14f/1017543.png)

*Steuerung von Visio-Tooltips für Attribute im* *[Database
Designer](database-designer-de)*

Mit Hilfe dieser Option, kann das Fensterverhalten beim Öffnen von
Diagrammen gesteuert werden.

![](//images.ctfassets.net/utx1h0gfm1om/2IoMUWgHQkK8Gw4qoucy0C/64560b31810bcae5c627b9e1af6bde75/1018287.png)

*Optionen zur Steuerung des Fensterverhaltens*

Folgende Auswahlmöglichkeiten stehen zur Verfügung:

-   Visio Defaultverhalten  
    Keine Änderung im Gegensatz zum Standardverhalten von Visio.
-   Diagrammfenster maximieren  
    Das Diagrammfenster wird mit dieser Auswahl beim Öffnen maximiert.
-   Diagrammfenster maximieren und das Zeichenblatt anpassen  
    Das Diagrammfenster wird mit dieser Auswahl beim Öffnen maximiert
    und das Zeichenblatt wird an die Fenstergröße angepasst.
-   Diagrammfenster maximieren und die Breite anpassen  
    Das Diagrammfenster wird mit dieser Auswahl beim Öffnen maximiert
    und die Zeichenblatt-Breite wird an die Fenstergröße angepasst.

##### Verwenden einer schnelleren automatischen Link-Generierung aber weniger präzise Erkennung der Formvertikale (z.B. eine L-Form wird nur als Rechteck erkannt)
Diese Option kontrolliert das Fensterverhalten, wenn Diagramme geöffnet werden. 
Folgende Optionen sind verfügbar:

##### Aktualisieren der MasterShape nur wenn die zugrundeliegende Objekteigenschaft geändert wurde. 

##### Automatische Generierung von Hyperlinks für verbundene Visio Diagramme

Diese Option generiert Visio Hyperlinks für Object-To-Diagram Links und sollte in den folgenden Fällen aktiviert werden:
1.	Wenn Sie eine Simulation des Prozesses für das Model über mehrere verlinkte Diagramme ausführen wollen, indem sie den PCS Process Simulator nutzen
2.	Wenn Sie Diagramme im SharePoint speichern und dann die Diagramme im SharePoint öffnen wollen



##### Zeige Tooltips von Attributen auf Diagrammen

Zeigt in Visio beim Mouse-Over einen Tooltip für Objekte an. Der Inhalt
dieses Tooltips wird auf Attributebene über die Option "Zeigen im
Tooltip" (Wahr/Falsch) gesteuert und ist standardmäßig für das Attribut
"Beschreibung" aktiviert.

#### Zeigen Sie eine „List of Parent Diagrams“ statt einer „Multiple Parent Diagrams“ im Diagramm-Header

Im process4.biz kann ein Diagramm mehrere Parent-Diagramme haben. Diese Option definiert welcher der Parent-Diagramm-Name sein sollte. Für diese Formel tippen Sie ein:
•	"[Several parent diagrams]" 
or
•	a listing of all parent diagrams

  ![DbSet](//images.ctfassets.net/6mz8d8cle1nl/35zlD3Du3hEY88r7zVfxQ/8d8b17217305066383c5084c9a63b643/DbSet.png)
  
 ![DbSet1](//images.ctfassets.net/6mz8d8cle1nl/2dqwn2IMJ9vGMqWpOdFEc2/a71e87ea4dd51b58407a85d1d20c8b9c/DbSet1.png) 



#### Pfade

Hier können Sie Basisverzeichnisse anlegen, verändern oder löschen. Die
hier definierten Pfade, werden für Attribute vom Attributtyp Hyperlink
oder [Pfad](attributgruppe-und-attribut) verwendet.
Um ein neues Basisverzeichnis anzulegen, klicken Sie auf "Neu". In dem
so geöffneten Fenster,  geben Sie den Namen für den Pfad und den Pfad
selbst ein. Um einen Pfad von Ihrem Computer oder aus dem Netzwerk
auszuwählen, klicken Sie auf den Button "Suchen".

### Festlegen der Defaultsprache für das Modell

Mit dieser Option der Datenbank-Einstellungen, können Sie eine andere
Sprache als ihre neue Defaultsprache auswählen.

<div class="warning">
<h3>Achtung:</h3>

Es wird dringend empfohlen, vor der Umstellung der Defaultsprache, ein
Backup der Datenbank zu machen.

</div>

 

Für jede Datenbank, gibt es eine Defaultsprache, das heißt, das alle
Objekte zumindest in dieser Sprache verfügbar sind. Wenn Sie eine neue
Sprache hinzufügen und dann auf diese neue Sprache umschalten, werden
Objekte, die noch nicht übersetzt sind, nach wie vor in der vorherigen
Defaultsprache angezeigt; dies ist notwendig, um keine leeren Namen oder
Attribute in der Datenbank zu haben.


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>