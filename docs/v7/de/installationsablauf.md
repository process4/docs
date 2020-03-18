-   [Sprachauswahl](#sprachauswahl)
-   [Installationsart wählen](#installationsart-wählen)
    -   [Komponenten wählen](#komponenten-wählen)
-   [Datenbankprofile / DbConfig.xml](#datenbankprofile--dbconfigxml)
-   [Andere Softwarekomponenten](#andere-softwarekomponenten)
    -   [SQL](#sql)
    -   [Adobe SVG-Viewer](#adobe-svg-viewer)
-   [Datenbanken erstellen](#datenbanken-erstellen)
-   [Lizenzschlüssel eingeben](#lizenzschlüssel-eingeben)
-   [Der erste Login](#der-erste-login)


## Sprachauswahl

Der [process4.biz](http://process4.biz) Installer lässt Sie die Sprache
für die Installation auswählen, Deutsch, Englisch, sowie Französisch
stehen als Installationssprachen zur Verfügung. Diese Auswahl betrifft
die Installation und setzt auch die für den ersten Start von
[process4.biz](http://process4.biz) gesetzte Sprache - die
Anzeigesprache für die Oberfläche und die Modellinhalte, kann aber jeder
Zeit über die [Client-Einstellungen](client-settings-de) geändert
werden.

## Installationsart wählen

Sie können grundsätzlich zwischen einer Client-Installation und der
Installation des Server-Lizenz-Dienstes (siehe Server-Lizenz) wählen.

Die Client-Installation lässt Sie im nächsten Schritt die benötigten
Komponenten wählen, der Server-Lizenz-Dienst ist für die Verwaltung der
Server-Lizenz nötig und stellt den p4b-Clients dann zentral gesteuert
die Lizenz zur Verfügung.

### Komponenten wählen

-   p4b Basismodule: Kernbestandteil, besteht aus dem Repository, dem
    Designer und dem Graphical Visio Modeler. Kann für die
    Standalone-Installation
    der [DbConfig](dbconfig-verwalten-von-datenbanken) abgewählt werden.
-   DB Aktualisierung
    ([DbUpgrade](upgrade-einer-bestehenden-Installation))
-   Dynamics AX: ermöglicht den Import von Daten aus dem ERP-System
    Microsoft Dynamics AX
-   [ImportExportManager](importexportmanager-de)
-   Dynamics SureStep Reporter: ermöglicht die automatische Befüllung
    der Excel-basierten Dynamics SureStep Gap-Fit Berichte
-   [WordReporter](wordreporter_de)
-   [DocumentComposer](documentcomposer-de)
-   process4.biz CobiT/ITIL generiert spezielle Reports über das
    Maturity Level von IT Prozessen in Ihrem Unternehmen spezifiziert
    durch das COBIT5 Referenzmodell.
-   [WebPublisher](webpublisher-de)
-   [QueryBuilder](querybuilder-de)
-   SharePointSync: ermöglicht die SharePoint Integration
-   TaskManagement: ermöglicht die Zuordnung einer Aufgabe mit
    Fälligkeit in Outlook für den Verantwortlichen einer Aktivität.
-   RACI-Reports: ermöglich die Erstellung von Berichten über die
    Verantwortung der jeweiligen Rollen oder Funktionen in den
    Aktivitäten eines Prozesses
-   ActiveDirectory Import: Erweiterung eines Drittherstellers; das
    "Active Directory" kann damit in process4.biz visualisiert und
    dessen Daten in das Repository eingelesen werden.
-   [DbConfig](dbconfig-verwalten-von-datenbanken): Programm zur
    Konfiguration der Verbindungsprofile Ihrer p4b-Datenbanken auf dem
    SQL-Server.
-   Serverlizenzierung: installiert den Server-Lizenz-Dienst (siehe
    Server-Lizenz)
-   Datenbank: installiert die mit dem jeweiligen Release ausgelieferte
    Demo Datenbank; zusätzlich steht auch eine leere Datenbank zur
    Verfügung

Datenbanken, die das Dynamics AX oder NAV, oder COBIT5 Referenzmodell
enthalten, werden jedenfalls immer nur separat ausgeliefert und sind
kein Bestandteil des Setups.


------------------------------------------------------------------------

![](//images.ctfassets.net/utx1h0gfm1om/Kk7r4uRM06Aos4uKWwc2K/7722a577eaaad31dacf39023ce99a65b/1017615.png)

*Auswahl der zu installierenden Komponenten*

## Datenbankprofile / DbConfig.xml

Gibt den Speicherort der *DbConfig.xml* an, in der die Datenbankprofile
gespeichert werden.

**Standard-Pfad der DbConfig.xml**

``` java
C:\ProgramData\process4\DbConfig.xml
```

 Wenn Sie die Option "Die XML-Datei des Profils kopieren und diese dann
lokal verwenden" aktivieren, wird die *DbConfig.xml* in einen lokalen
Ordner kopiert. Alle während des Setups vorgenommenen Änderungen (z.B.
erstellen der Demo-Datenbank) werden in diese lokale XML-Datei
übernommen.

Wenn danach der Benutzer auf dem zur Installation verwendeten Client die
DbConfig öffnet, wird die lokale XML-Datei geöffnet und ggf. verändert.
Diese Änderungen werden lokal gespeichert und sind nur beim jeweiligen
Benutzer sichtbar. Diese Option ist für Multi-User Installationen
geeignet, wenn Benutzer keine Zugriffsrechte auf ein zentrales Laufwerk
(wo die allgemein gültige XML-Datei liegt) haben.

Beachten Sie bitte, dass das Verwenden dieser Option nur beim Ausführen
des Setups als Administrator möglich ist.

Beim [Upgrade einer bestehenden
Installation](upgrade-einer-bestehenden-Installation): tragen Sie hier
den Pfad zu Ihrer bisher verwendeten *DbConfig.xml* ein, um diese
(mitsamt aller bereits konfigurierten Verbindungsprofile) weiterhin zu
verwenden.

Siehe dazu: [DbConfig: Verwalten von
Datenbanken](dbconfig-verwalten-von-datenbanken)

## Andere Softwarekomponenten

### SQL

**Nur für Demo-Installationen!**

Installiert SQL 2008 Express zu Demo-Zwecken auf jenen Clients, die über
keinen lokalen oder im Netzwerk verfügbaren SQL-Server verfügen.

### Adobe SVG-Viewer

Installiert den Adobe SVG-Viewer, der bei alten Versionen des Internet
Explorers zur Anzeige von SVG-Grafiken benötigt wird. Diese Option ist
standardmäßig deaktiviert, da die Anzeige von SVGs ab Internet Explorer
9 nativ unterstützt wird.

## Datenbanken erstellen

Das Setup von process4.biz bietet Ihnen bei einer Installation die
Möglichkeit, die mit dem Setup verfügbaren Datenbank/en (DEMO & LEER)
direkt in einen verfügbaren SQL-Server einzuspielen und die
Datenbankverbindungsprofile dafür automatisch einzurichten.

1.  Definieren Sie den Namen für die Datenbank
2.  Wählen Sie den Ziel-SQL-Server für die Wiederherstellung der
    Datenbank aus (standardmäßig wird eine Demo-Installation angenommen
    und daher ".\\SQLExpress" vorselektiert)
3.  Selektieren Sie, ob Sie [Windows NT
    Authentifizierung](login-als-windows-benutzer) oder [SQL Server
    Authentifizierung](login-als-sql-server-benutzer) verwendet werden
    soll: standardmäßig können Sie für das Wiederherstellen der Demo DB
    die Option Windows NT Authentifizierung verwenden.

     
<div class="info">
    Bitte beachten Sie:
    1.  Wenn ein Benutzer der Gruppe Administrator die DB
        wiederherstellt und dann ein anderer Benutzer in die Datenbank
        einloggen will, so muss dieser andere Benutzer zuerst als User
        im SQL Server mit den notwendigen Berechtigungen für die
        Datenbank hinzugefügt werden
    2.  Unter Windows 7 und 8 muss selbst ein Benutzer der Gruppe
        Administrator zuerst im SQL Server mit entsprechenden
        Berechtigungen für die Datenbank hinzugefügt werden, um die
        Datenbank mit "Windows NT Authentifizierung" wiederherstellen zu
        können
  </div>

4.  Alternativ zur Windows NT Authentifizierung, können Sie die
    SQL-Server Authentifizierung verwenden. Geben Sie in diesem Fall
    Ihre Login-Daten für den SQL-Server ein (benötigt zumindest die
    Serverrolle "dbcreator").

    <div class="info">
    Wenn Sie mithilfe des p4b-Setups SQL Express installiert haben und
    dann Datenbanken wiederherstellen möchten, verwenden Sie bitte die
    folgenden Zugangsdaten:
    -   Benutzer: sa
    -   Passwort: Process4.biz

</div>

5.  Verbindung mittels "Test"-Button überprüfen

![](//images.ctfassets.net/utx1h0gfm1om/46DKyEfapWOMoo0WGE4Qyq/c795ee3315d34b715068cdd76b997d91/1017621.png)

*Eine Demo-Datenbank erstellen  
*

Die beiden Datenbankverbindungsprofile zur LEEREN und zur DEMO-Datenbank
werden automatisch in der zuvor erstellten bzw. gewählten *DbConfig.xml*
abgespeichert.

## Lizenzschlüssel eingeben

Wenn Sie den Haken für das Aktivieren der Lizenz im Zuge der
Installation gesetzt haben, können Sie abschließend Ihren
Lizenz-Benutzernamen und den Lizenzschlüssel eintragen. Falls Sie auch
Lizenz-Modifikationsschlüssel (z.B. für das zusätzliche Aktivieren von
Erweiterungen) erhalten haben, tragen Sie diese bitte in das
entsprechende Feld ein (falls es mehrere sind, dann getrennt durch
Kommazeichen).

Wenn Sie die [Server-Lizenz](server-lizenz) für Ihre p4b-Clients nutzen
möchten und das Lizenzserverprogramm bereits installiert ist, können Sie
den Namen (oder die IP-Adresse) des Lizenz-Servers angeben und auch
gleich testen, ob die Verbindung vom Client zum Lizenz-Server
funktioniert.

![](//images.ctfassets.net/utx1h0gfm1om/3dl3guDtLyYWseOmywk0oc/df8d685f998fde1438b59d06ccefa71d/1017628.png)

*Den Lizenzschlüssel im Setup eintragen*

## Der erste Login

Zur Verwendung von process4.biz, ist der [Login](login-logout-de) in eine
Datenbank erforderlich.

<div class="warning">
Im Falle einer leeren bzw. Demo-Datenbank, sollte der erste Login mit
dem bereits vorkonfigurierten User "Admin" erfolgen: das Passwort für
diesen User, ist beim ersten Login leer zu lassen, sollte aber umgehend
über die Benutzerverwaltung gesetzt werden.
  </div>

Nach dem erfolgreichen Login als process4.biz-Admin, können weitere
process4.biz- und/oder Windows-Benutzer (-Gruppen) hinzugefügt werden
und entsprechende Berechtigungen erstellt bzw.
vergeben werden.

