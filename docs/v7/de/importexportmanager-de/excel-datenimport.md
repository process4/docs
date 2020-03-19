-   [Import Einstellungen](#import-einstellungen)
-   [Auswahl der Units](#auswahl-der-units)
-   [Auswahl der Klassen und Attributen](#auswahl-der-klassen-und-attributen)
-   [Excel Data Import Abschluss](#excel-data-import-abschluss)

### Import Einstellungen

Wenn Sie beim Starten des ImportExportManagers die Funktion Excel
Datenimport ausgewählt haben (siehe dazu [Starten des
ImportExportManagers](Starten_des_ImportExportManagers)), erscheint das
folgende Fenster:

-   **Wähle ein Set **

In einem Set werden Import-Einstellungen gespeichert. Sie können ein
bereits definiertes Set auswählen oder ein neues definieren. Nicht mehr
benötigte Sets können Sie hier entfernen (siehe Export Einstellungen). 

-   **Unit **

Wählen Sie bitte diejenige Unit aus, in welche die Daten aus der
Excel-Datei importiert werden sollten. 

-   **Importieren von** 

Geben Sie den MS Excel- Dateinamen und den Pfad derjenigen Excel-Datei
an, aus der die Daten importiert werden sollen. Das Dateiformat der
Excel-Datei ist hier [Excel ImportExport
Dokumentenformat](Datenaustausch-zwischen-process4.biz-und-MS-Excel_1016260.html#Datenaustauschzwischenprocess4.bizundMSExcel-ExcelImportExportDokumentenformat) beschrieben. 

-   **Ausschließen aller Elemente, die im Modeller als unsichtbar
    definiert sind **

Units, Klassen, Objekte und Diagramme können in
[process4.biz](http://process4.biz) als unsichtbar markiert werden
(siehe Verwalten der Sichtbarkeit). Wenn Sie diese Option aktivieren,
werden solche unsichtbare Elemente aus dem Excel-Report nicht in die
Datenbank importiert. Das heißt, unsichtbare Klassen werden im
Wizard-Fenster Auswahl der Klassen und Attribute nicht angezeigt und
Objekte von diesen Klassen werden nicht in die Datenbank importiert.
Wenn ein Objekt unsichtbar in process4.biz ist und dieses Objekt in der
Excel-Datei verfügbar ist, wird während des Excel-Imports gefragt, ob
das unsichtbares Objekt überschrieben werden soll oder nicht. 

-   **Importieren von Objektverknüpfungen** 

Aktivieren Sie diese Option, wenn Sie Objekt- bzw. Diagrammverknüpfungen
eines Objektes inkl. entsprechende Verknüpfungstypen und
Assoziationsobjekte in die Datenbank importieren möchten. 

-   **Objektverknüpfungen über Excel löschen** 

Diese Option erlaubt ein vollständiges Synchronisieren zwischen den
Objektverknüpfungen in der Excel Datei und der process4.biz - Datenbank.
Das heißt, wenn eine oder mehrere Objektverknüpfungen in der Excel Datei
GELÖSCHT bzw. nicht vorhanden sind, werden sie nach dem Import auch aus
der process4.biz - Datenbank gelöscht. 

-   **Diagrammverknüpfungen über Excel löschen** 

Diese Option erlaubt ein vollständiges Synchronisieren zwischen den
Diagrammverknüpfungen in der Excel-Datei und der process4.biz -
Datenbank. Das heißt, wenn eine oder mehrere Diagrammverknüpfungen in
der Excel-Datei GELÖSCHT bzw. nicht vorhanden sind, werden sie nach dem
Import auch aus der process4.biz - Datenbank gelöscht. 

-   **Wenn eine „automatische" Verknüpfung (= die ja nur beim
    Modellieren auf Diagrammen generiert werden kann) im Ziel-Repository
    nicht existiert, dann soll sie als „manuelle" Verknüpfung importiert
    werden **

Falls Sie auch automatische Verknüpfungen importieren möchten,
aktivieren Sie zusätzlich diese Check-Box. Automatische Verknüpfungen
werden anhand der selektierten Linktechnologien aus den Visio-Diagrammen
ausgelesen und in der Datenbank gespeichert. Wenn Sie diese nach Excel
exportieren, verändern und wieder reimportieren möchten, dann wird sie
als automatische Verknüpfung upgedated. Erst wenn diese Verknüpfung in
der Datenbank nicht existiert, wird  
sie als manuelle Verknüpfung importiert . 

-   **Vergleich nach Name/ Vergleich nach ID** 

Beim Import wird geprüft, ob das aus der Excel-Datei zu importierende
Objekt  
im Repository bereits vorhanden ist. Wenn ja, dann werden evtl.
Änderungen aller Attribute durchgeführt. Wenn dieses Objekt in der
Ziel-Unit des Repositoriums noch nicht vorhanden ist, wird es dort neu
angelegt. Zum Vergleich kann entweder der Name oder die ID von Objekten
herangezogen werden (siehe [Excel ImportExport
Dokumentenformat](Datenaustausch-zwischen-process4.biz-und-MS-Excel_1016260.html#Datenaustauschzwischenprocess4.bizundMSExcel-ExcelImportExportDokumentenformat)).   
  
Wenn Sie eine Excel-Datei für den Import auswählen stellen Sie sicher,
dass die aktuelle Datenbank-Sprache und die Sprache von Daten, die Sie
aus Excel importieren wollen, die gleiche ist. Das hilft, falsche
Übereinstimmungen z wischen Units, Klassen und Objekten in der Datenbank
und den entsprechenden Excel-Blättern zu vermeiden. Wenn die Namen in
Spalten sich von den Namen in der aktuellen Datenbank-Sprache
unterscheiden (siehe [Excel ImportExport
Dokumentenformat](Datenaustausch-zwischen-process4.biz-und-MS-Excel_1016260.html#Datenaustauschzwischenprocess4.bizundMSExcel-ExcelImportExportDokumentenformat)),
werden Sie darüber mit einer Warnmeldung informiert.  
Klicken Sie auf die Schaltfläche ***Weiter***, um im anschließenden
Dialogfenster folgende Einstellungen auszuwählen.



![](//images.ctfassets.net/utx1h0gfm1om/2sObpG8feA4mEqQAIMy2Ey/e396a3d9d90ab85cd1c0e881392a3e3a/1017785.png)

### Auswahl der Units

-   **Inhaltssprache für den Import auswählen**

Wenn Sie Ihre Daten zwei- oder mehrsprachig publiziert haben um
Übersetzungen durchzuführen, können Sie hier einstellen, in welchen
Sprachen die Objektbeschreibungen zurück in die Datenbank importiert
werden sollen. Beachten Sie bitte, dass der Rück-Import von Daten aus
Excel in die p4b - Datenbank in zwei oder mehreren verschiedenen
Sprachen zur selben Zeit unter bestimmten Umständen zu Fehlern führen
kann, weshalb wir empfehlen, am besten die Daten jeweils separat pro
Sprache zu importieren. Bedenken Sie folgende Punkte wenn Sie dennoch
zwei Sprachen gleichzeitig importieren wollen: 

-   Das ID-Feld muss in beiden Sprachen für das jeweilige Objekt mit
    derselben ID befüllt werden, da ansonsten der p4b - Import-Manager
    zwei unterschiedliche Objekte identifiziert. 
-   Verändern Sie nicht die abwechselnde Sortierung der Zeilen nach
    Sprache, die Sie exportiert haben und dann wieder importieren wollen
    (gemeint ist die Reihenfolge von Zeilen DE, EN, DE, EN… und nicht
    EN, DE…), 
-   Wenn Sie neue Objekte in Excel anlegen, die Sie später in beiden
    Sprachen gleichzeitig re-importieren wollen, dann müssen Sie
    unbedingt die ID-Felder (erste Spalte in der Tabelle) für beide
    Zeilen des selben Objekts mit demselben negativen Zahlenwert
    befüllen (-1, -2, -3, etc.), um Duplikate zu vermeiden 
-   Exportieren und Importieren Sie im Mehrsprachenmodus
    keine Objektverknüpfungen 

 

-   **Wählen Sie Units aus, die Sie aus Microsoft Excel importieren
    wollen**

Hier können Sie jene Unit(s) selektieren, deren Daten aus dem
Excel-Dokument in die Datenbank importiert werden sollen. Beachten Sie
bitte, dass alle Objekte aus mehreren Units in nur eine vorher
definierte Unit importiert w erden. 

Am unteren Ende des Fensters stehen Ihnen zwei Optionen für die
Fortsetzung des Dialogs zur Verfügung: 

-   Wenn Sie auf die Schaltfläche ***Weiter*** klicken, können Sie die
    Zuordnung der Excel-Arbeitsblätter und Spalten zu den
    process4.biz-Klassen und -Attributen überprüfen und gegebenenfalls
    abändern (siehe Auswahl der Klassen und Attributen). 
-   Wenn Sie auf die Schaltfläche ***Fertigstellen*** klicken, startet
    der Import-Vorgang auf Basis der automatischen Zuordnung
    (siehe Excel Data Import Abschluss).

![](//images.ctfassets.net/utx1h0gfm1om/5dFwIXxvnicyse0O4QqEgg/8a9a6508ee99a4226bfc33ef1b6cd50d/1017803.png)

### Auswahl der Klassen und Attributen

An dieser Stelle können Sie im Fenster links diejenigen
Excel-Arbeitsblätter auswählen, die beim Import den gewünschten
process4.biz- Klassen entsprechen sollen. Zusätzlich wird die ID-Nummer
jeder Klasse angezeigt. Dadurch können Sie zwei Klassen mit gleichem
Namen anhand Ihrer ID unterscheiden.

Darüber hinaus haben Sie in der rechten Hälfte des Dialogfensters die
Möglichkeit, für jede (links markierte) Klasse diejenigen Excel-Spalten
auszuwählen, die beim Import den process4.biz- Attributen entsprechen
sollen. 

  
Die Schaltfläche ![](//images.ctfassets.net/utx1h0gfm1om/N6ADfUo6iGK4qSuWWu6yo/dc8d1ff643cf0c034f37a851f66c7030/1017813.png) verändert die
Spaltenordnung zwischen P4B - Klassen und Excel-Arbeitsblättern und auch
die Spaltenordnung zwischen p4b - Attributen und Excel-Spalten für alle
Klassen. Es wird nach dem Regel geändert "Klassenname -&gt;
Excel-Arbeitsblatt" (und "Attribut Name -&gt;  
Excel-Spalten Name").   
  
  
Die Schaltfläche ![](//images.ctfassets.net/utx1h0gfm1om/5XK1GOHqyk8wyqY8WEMM0Q/54197290b92da55e8d957c97d6ee5167/1017808.png) verändert die
Spaltenordnung zwischen p4b - Attributen und Excel-Spalten in der
ausgewählten Klasse. Es funktioniert nach den gleichen Regeln, nur für
eine einzelne Klasse. 

  
Klicken Sie auf die Schaltfläche ***Fertigstellen***, um den
Import-Vorgang zu starten.

![](//images.ctfassets.net/utx1h0gfm1om/3iJgYfktOgu8IW82QA264G/d4149f23a03b557e1f6eeaed9496df68/1017796.png)

### Excel Data Import Abschluss

In diesem Folgefenster wird der Status des Import-Vorgangs angezeigt:

Wenn der Import abgeschlossen ist, können Sie durch Klicken auf die
anschließend erscheinende Schaltfläche Log anzeigen das Import-Logfile
einsehen. Mit Hilfe dieses Protokolls können Sie prüfen, ob der Import
fehlerfrei abgelaufen ist bzw. welche Fehler eventuell aufgetreten
sind: 

![](//images.ctfassets.net/utx1h0gfm1om/3TI0ODZNoA0YCE4q4kougM/622fc0a332d1601344f249a1f4ace52a/1017746.png)   
Durch Anklicken der Schaltfläche ***Fertigstellen** *des letzten
Dialogfensters wird der Importvorgang beendet.

![](//images.ctfassets.net/utx1h0gfm1om/2UipTo0NpKYeAs6uc6aEsg/78fb8056b1523a2d4a876f110cb4d712/1017735.png)


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>