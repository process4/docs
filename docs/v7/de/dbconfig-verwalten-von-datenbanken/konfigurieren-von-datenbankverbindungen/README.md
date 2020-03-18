-   [DbConfig Menü](#dbconfig-menü)
    -   [Datenbank Sicherungsprozeduren](#datenbank-sicherungsprozeduren)
    -   [Ändern des Passworts](#Ändern-des-passworts)
    -   [Wählen eines Sets mit Profilen](#wählen-eines-sets-mit-profilen)
    -   [Wählen der Standardwerte](#wählen-der-standardwerte)
        -   [Standard SQL-Server](#standard-sql-server)
        -   [Default-Pfad für Wiederherstellen](#standard-sql-server)
        -   [Default-Pfad für Backups](#default-pfad-für-backups)
        -   [Standardpfad für temporäres Backup](#standardpfad-für-temporäres-backup)
    -   [Starte oder beende Log](#starte-oder-beende-log)
    -   [Zurücksetzen des Passworts für den Admin-Benutzer dieser
        Datenbank](#zurücksetzen-des-passworts-für-den-admin-benutzer-dieser-datenbank)
-   [Datenbankprofile](#datenbankprofile)
    -   [Hinzufügen](#hinzufügen)
    -   [Entfernen](#entfernen)
    -   [Testen](#testen)
    -   [Backup/Versionen - Wiederherstellen - Duplizieren](#backupversionen---wiederherstellen---duplizieren)
-   [Verbindungskonfiguration](#verbindungskonfiguration)
    -   [Profilname](#profilname)
    -   [Datenbankserver](#datenbankserver)
    -   [Datenbankname](#datenbankname)
    -   [Benutzen Sie die integrierte Sicherheit von Windows NT](#benutzen-sie-die-integrierte-sicherheit-von-windows-nt)
    -   [Benutzername](#benutzername)
    -   [Passwort](#passwort)
    -   [Diagrammepfad](#diagrammepfad)
    -   [Schablonenpfad](#schablonenpfad)

------------------------------------------------------------------------

### DbConfig Menü

#### Datenbank Sicherungsprozeduren

-   Datenbank wiederherstellen – siehe [Wiederherstellen von
    Datenbanken](wiederherstellen-von-datenbanken)
-   Backup der Datenbank – im Unterschied zu der Funktion
    [Backup/Versionen](backup-von-datenbanken), erlaubt diese Option
    lediglich das Erstellen einer \*.db-Datei <span
    class="underline">ohne</span> Diagramme und Schablonen.

#### Ändern des Passworts

Hier lässt sich das Passwort für DbConfig ändern.

#### Wählen eines Sets mit Profilen

Verwenden Sie diese Funktion, um vorkonfigurierte Datenbankprofile mit
den passenden Pfaden zu Diagrammen und Schablonen über eine gemeinsame,
zentral abgelegte \*.xml-Profildatei auf allen anderen
process4.biz-Clients verfügbar zu machen.

Tragen Sie dazu die DB-Verbindungsprofile auf einem process4.biz-Client
mittels DbConfig ein und legen Sie die \*.xml-Datei in einem zentralen
Ordner Ihres LANs ab, auf den alle p4b-Benutzer Zugriff haben. Geben Sie
anschließend den Pfad und Dateinamen Ihrer XML-Profildatei in der
DbConfig Ihrer Clients ein, um diesen die bereits vorkonfigurierten
Datenbankverbindungen zu ermöglichen.

#### Wählen der Standardwerte

##### Standard SQL-Server

Hier kann ein Standardwert für den standardmäßig zu benutzenden
SQL-Server gesetzt werden, um in anderen DbConfig-Funktionen (z.B.
[Wiederherstellen von Datenbanken](wiederherstellen-von-datenbanken))
dann diese Auswahl bereits vorausgefüllt angezeigt zu bekommen.

##### Default-Pfad für Wiederherstellen

Sie können hier jenen Ordner bestimmen, der beim Wiederherstellen der
Demo bzw. leeren Datenbank automatisch verwendet wird. Diagramme und
Schablonen der wiederhergestellten Datenbank werden standardmäßig hier
abgelegt. Sie können gegebenenfalls bei der Wiederherstellung diesen
Ordner manuell wechseln.

##### Default-Pfad für Backups

Hier können Sie ein Standardverzeichnis festlegen, welches zur lokalen
Sicherung Ihrer process4.biz-Datenbanken inklusive Diagramme und
Schablonen mittels Backup/Versionen dienen soll. Falls Sie keinen
spezifischen Ordner angeben, werden Backups standardmäßig im Ordner
"C:\\Users\\Public\\Documents\\Process4.biz Data\\Backups" abgelegt.

##### Standardpfad für temporäres Backup

Setzt den Pfad für etwaige temporäre Backups (z.B. nötig, um
[Datenbanken zu duplizieren](duplizieren-von-datenbanken)). Nach der
Installation, ist hier standardmäßig folgender Pfad gesetzt:
"C:\\Users\\USER\\AppData\\Local\\Temp\\process4biz\_backup".

#### Starte oder beende Log

Wenn es Probleme mit der DbConfig gibt, können Sie das Programm zusam
men mit einer Protokollierung starten. Daraufhin wird eine
"Log.txt"-Datei automatisch unter dem Installationsordner
"…\\process4\\Dbconfig\\" erstellt, die Sie zur Fehleranalyse an den
aaaaaBevor Sie den p4b-Helpdesk kontaktieren schicken können.

#### Zurücksetzen des Passworts für den Admin-Benutzer dieser Datenbank

Diese Funktion setzt das Passwort für den Benutzer „Admin" zurück, mit
dem man in die ausgewählte Datenbank in den process4.biz–Client
einloggt.

 ![](//images.ctfassets.net/utx1h0gfm1om/3SM66N5TF6SgeaASEg48Y4/0d463bb9e53ea45150e3fac7ad744430/1017697.png)

### Datenbankprofile

#### Hinzufügen

Fügt ein neues, leeres Datenbankverbindungsprofil hinzu und kann dazu
verwendet werden, z.B. im SQL-Management Studio erstellte Datenbanken
mit process4.biz zu verbinden.

#### Entfernen

Entfernt das ein bestehendes Verbindungsprofil und wahlweise auch die
Datenbank selbst SQL-Server, sowie alle Diagramme und Schablonen des
Profils. Die Option "Entferne die Datenbank-Backups " ist nur
verwendbar, wenn bereits Backups von dieser Datenbank mit DbConfig
erstellt wurden.

#### Testen

Testet das ausgewählte Verbindungsprofil und den Zugriff auf den
SQL-Server. Zusätzlich wird geprüft, welche Rechte der Benutzer in Bezug
auf die selektierte Datenbank am Server hat (z.B.: "db\_datareader"
und/oder "db\_datawriter").

#### Backup/Versionen - Wiederherstellen - Duplizieren

Diese Funktionen werden in den entsprechenden Artikeln separat
beschrieben:

-   [Backup von Datenbanken](backup-von-datenbanken)
-   [Wiederherstellen von Datenbanken](wiederherstellen-von-datenbanken)
-   [Duplizieren von Datenbanken](duplizieren-von-datenbanken)

### Verbindungskonfiguration

#### Profilname

Hier wird der Name definiert, der beim Login in process4.biz für die
Auswahl der Datenbank präsentiert wird.

#### Datenbankserver

Geben Sie bitte den Namen des SQL-Servers an, der die process4.biz
Datenbank/en zur verfügung stellt bzw. stellen soll. Im Falle einer
lokalen SQL-Installation auf Ihrem Rechner, entspricht dieser Name
entweder dem Computernamen, dem Wert "(local)", oder sonst dem Namen,
den Sie für Ihre SQL-Instanz gewählt haben.

Wenn Sie keinen Namen angeben, sondern stattdessen auf die Schaltfläche
Suche klicken, werden sämtliche sichtbare SQL-Server in Ihrem lokalen
Netzwerk gefunden.

#### Datenbankname

Geben Sie bitte den Namen für Ihre Datenbank im SQL-Server an. Beim
Klicken auf die Schaltfläche Suche werden alle in Ihrem SQL-Server schon
vorhandenen Datenbanken automatisch gefunden, vorausgesetzt, dass Sie
den Benutzernamen und das Passwort bereits angegeben haben.

#### Benutzen Sie die integrierte Sicherheit von Windows NT

Das Aktivieren dieser Schaltfläche hat zur Folge, dass die Verbindung zu
der process4.biz-Datenbank unter dem aktuellen Windows-Benutzernamen
hergestellt wird. In diesem Fall sollten Sie die Felder Benutzername und
Passwort nicht ausfüllen. Beachten Sie bitte, dass der Windows-Benutzer
auch im SQL-Server mit den notwendigen Berechtigungen für die Datenbank
hinzugefügt werden muss.

Information zur Konfiguration des SQL-Servers für die Anmeldung als
Windows-Benutzer, finden Sie hier: [Login als
Windows-Benutzer](Login_als_Windows-Benutzer)

#### Benutzername

Hier geben Sie den Benutzernamen für den Zugriff auf die Datenbank im
SQL-Server ein. Beachten Sie, dass dies nicht derselbe Benutzername ist
(bzw. sein muss), mit dem Sie sich beim Start von
[process4.biz](http://process4.biz) in die Datenbank einloggen.

Information zur Konfiguration des SQL-Servers für die Anmeldung als
SQL-Benutzer, finden Sie hier: [Login als SQL-Server
Benutzer](login-als-windows-benutzer)

#### Passwort

Hier geben Sie - analog zu der Beschreibung unter Benutzername - das
Passwort für den Zugriff auf die Datenbank im SQL-Server an.

#### Diagrammepfad

Hier legen sie fest, in welchem (beliebig auszuwählenden) Verzeichnis
die [Diagramme](diagramm) gespeichert werden sollen. Pro installierte
Datenbank sollte ein jeweils separates Verzeichnis auf einem
Netzwerk-Server ausgewählt werden, damit alle User (im Multiuserbetrieb)
darauf Zugriff haben.

#### Schablonenpfad

Hier geben Sie an, aus welchem Verzeichnis die
[Schablonen](shapes-stencils-und-templates-de) geladen werden. Diese Schablonen
sollten (insbesondere wenn Sie vorhaben, sie an Ihre Bedürfnisse
anzupassen oder dies schon getan haben) ebenfalls in einem zentralen
Netzwerkverzeichnis liegen. Auf das Netzwerkverzeichnis sollten alle
process4.biz-User zugreifen können, außer Sie verwenden die
BLOB-Funktionalität (Binary Large OBjects), bei der die Stencils und die
Diagramme auch in der Datenbank im SQL-Server direkt abgelegt werden. Im
gleichen Verzeichnis sollten Sie auch Ihre Visio-Vorlagen abspeichern.

