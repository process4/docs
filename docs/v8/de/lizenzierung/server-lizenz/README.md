Die Serverlizenz kann von einem Administratorbenutzer erstellt und auf mehreren Computern verwendet werden. Dieser Lizenztyp funktioniert nicht auf einer virtuellen Maschine. Wenn die License Server-Anwendung auf einem Computer mit dem Betriebssystem Windows 8 oder niedriger installiert wird, muss Firewall 4.6.1 installiert werden.
<div class="info">
  <h3>Wichtig:</h3>
Die Version des Lizenzservers und des Modeler können sich unterscheiden und zu Inkonsistenzen im Betrieb des Lizenzservers führen. Wenn Sie beim Start des Lizenzservers die Warnmeldung erhalten, aktualisieren Sie Ihre Installation.
</div>

#### Installation

So installieren Sie den Serverlizenzserver auf dem Computer, für den der Server verwendet werden soll. Um die Lizenzierung zu starten, starten Sie das Setup von process4.biz.
Wenn Sie Modeler bereits auf dem Computer installiert haben, können Sie dies tun.
Wählen Sie im Setup-Fenster die Option Change function.

![](//images.ctfassets.net/utx1h0gfm1om/2E97DsIIgoeSAWoae0USea/207cae3d744a393735b6fa4cef5cbada/329438.png)

Wählen Sie auf der nächsten Installationsseite die ServerLicensing aus.
Die gesamte Funktion wird auf lokaler Festplatte installiert.

![](//images.ctfassets.net/utx1h0gfm1om/T27vrJmwmIMI8ECQOC8G8/795684f6710ec81d1f10d66d1f16d3b9/329432.png)

Wenn der Serverlizenz auf dem Computer installiert wurde, muss man den Serverlizenzdienst starten: ** Start - &gt; process4.biz - &gt; Process4.biz License Server x86 (oder x64) **.
  
![Server License1](//images.ctfassets.net/6mz8d8cle1nl/2ddVOKQsstTugg1SNe1b2K/2e48ccd8f256ab06f51af168f7268fa4/Server_License1.png)

Wenn die Serverlizenz installiert ist, müssen Sie in der Lizenzserververwaltung eine Serverlizenz anfordern, indem Sie auf Lizenz anfordern klicken und Benutzeranmeldeinformationen auf der Online-Lizenzseite in ActivateLicenseWindow eingeben.

![Server License3](//images.ctfassets.net/6mz8d8cle1nl/7GEdTxiV7ekJxyM9N6lCDp/3667cfdf4ec54789adbb23c5683bb719/Server_License3.png)

Wenn Sie noch nicht auf der Online-Lizenzseite registriert sind, öffnen Sie das Menü des ActivateLicenseWindow und klicken Sie auf Registrieren, und fahren Sie mit dem entsprechenden Registrierungsvorgang fort.

![Server License4](//images.ctfassets.net/6mz8d8cle1nl/6KMiA0CPh9IiXQ2lqWla4X/1a4f118e090c46f2e878b58f16c3da60/Server_License4.png)

Erst nach der Installation und dem Erwerb der Lizenz für den aktuellen Server können Sie die Datenbank importieren, die Sie als Server erstellen möchten (die Datenbank muss bereits erstellt worden sein), indem Sie das Menü __License Server Management__ eingeben und __Import… __ wählen.
Das __Open__-Fenster wird geöffnet.

![Server License7](//images.ctfassets.net/6mz8d8cle1nl/64yFGuqp1nRID6RkViCRVA/5a3ee8525b050f854c8d57264e8a62e4/Server_License7.png)

Eine oder mehrere Datenbanken, die vom Lizenzserver verfügbar sein werden, müssen aus der Liste ausgewählt werden.

![Server License8](//images.ctfassets.net/6mz8d8cle1nl/4jphtE3s157wW6Rr1lax7v/5634bca8fabb54dc0881603d756a0b5d/Server_License8.png)

Nach dem Import der Datenbank muss die Serverlizenz aktiviert werden. Der Benutzer muss das Menü __File__ aufrufen und __Lizenz aktivieren…__

![Server License9](//images.ctfassets.net/6mz8d8cle1nl/733HWCKakhXXZImRriMD1e/1bcb2700208f6bace9b37f5761da4ef9/Server_License9.png)

Das Fenster Lizenz aktivieren wird geöffnet. Der Benutzer hat sich auf der Online-Lizenzseite mit einem E-Mail- oder Google- oder Facebook-Konto angemeldet.
Informationen zur Datenbank werden im Fenster Lizenz aktivieren angezeigt. Wenn der Benutzer mehrere Kunden verwaltet, muss er entsprechend dieser Datenbank __Verbundener Kunde__ aus der Dropdown-Liste auswählen.
Durch Klicken auf die Schaltfläche __Aktivieren__ wird eine neue Serverlizenz aktiviert.
Nach der Lizenzaktivierung wird die Anzahl der Lizenzen im Process4.biz-Lizenzserver erhöht. Jetzt können mehrere Benutzer mit einer Serverlizenz im Netzwerk auf die Datenbank zugreifen, wenn die Lizenzserveranwendung auf dem Computer des Benutzers installiert ist.

![Server License10](//images.ctfassets.net/6mz8d8cle1nl/ORE07jKdroxAkGOkF2NQ3/02e7f93345e1a35a90b9100f62b3d84a/Server_License10.png)

Die Anzahl der Datenbankbenutzer, die gleichzeitig arbeiten, darf die für diese Lizenz maximal zulässige Anzahl von Benutzern nicht überschreiten.
Nach der Lizenzaktivierung muss der Lizenztyp im Modeler geändert werden. Öffnen Sie das Lizenzaktivierungsfenster und klicken Sie auf die Schaltfläche __Lizenzierungstyp auswählen__.

![Server License11](//images.ctfassets.net/6mz8d8cle1nl/6ZcDl8mGwnNqQyA27YAzwo/0c22791108a58759433ff94a516ade24/Server_License11.png)

Ändern Sie im geöffneten Fenster Lizenzaktivierung den Lizenztyp von ONLINE License in SERVER License und klicken Sie auf die Schaltfläche Next>.
Serverlizenzen werden aktiviert und der Benutzer kann sich im Modeler an der Datenbank anmelden. In der Liste der Datenbanken stehen nur Datenbanken mit Serverlizenz zur Verfügung.

#### Server License Konfiguration

Es ist möglich, den Lizenzserver mit einer statischen Adresse zu konfigurieren. Öffnen Sie im Lizenzserver-Modalfenster das Menü __Lizenzserververwaltung ...__ und wählen Sie __Open configuration ...__. Hier kann ein Benutzer festlegen, ob die Serverlizenz eine statische Adresse verwenden soll.
<div class="info">
  <h3>Notiz</h3>
Aktivieren Sie das Kontrollkästchen Protokolle aktivieren im Konfigurationsfenster, um die Verbindungen der Serverlizenz mit der Online-Lizenzsite zu ermitteln. Server-Lizenzprotokolle werden im LicenseServer-Ordner gespeichert.
</div>

![Server License12](//images.ctfassets.net/6mz8d8cle1nl/4yDIBukuCE2fNuZC9x7QZX/3f5428a541d0acd38a80c2fda5b4541a/Server_License12.png)

Diese Lizenzserveradresse sollte in den Client-Einstellungen im Modeler angegeben werden.

![Server License13](//images.ctfassets.net/6mz8d8cle1nl/44BUhElYTaxx1VhZI9HbqY/cb61ccb2d96322f2439fe80916bdd584/Server_License13.png)

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>