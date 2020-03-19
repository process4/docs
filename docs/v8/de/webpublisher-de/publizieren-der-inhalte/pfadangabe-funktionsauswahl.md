-   [Name der Publikation](#name-der-publikation)
-   [Pfad der Webseite](#pfad-der-webseite)
-   [Webseite Adresse](#webseite-adresse)
-   [Neuerliches Erstellen der Site-Dateien](#neuerliches-erstellen-der-site-dateien)
-   [Site Sprache](#site-sprache)
-   [Site Scripttype](#site-scripttype)
-   [Site Einstellungen](#site-einstellungen)
    -   [Site Farbschema](#site-farbschema)
    -   [Tooltips Einblendezeit](#tooltips-einblendezeit)
    -   [Web-Links](#web-links)
-   [IIS Website am Ziel-Speicherplatz aufsetzen](#iis-website-am-ziel-speicherplatz-aufsetzen)
    -   [Name der Site](#name-der-site)
    -   [Konfigurieren](#konfigurieren)

------------------------------------------------------------------------

![](//images.ctfassets.net/utx1h0gfm1om/2QgDY1uD4kgqoKcAeKkIAw/e493c1d5d5720403f9d62c04362fe072/1018425.png)

### Name der Publikation

Geben Sie den Namen Ihres Publikations- Sets an, der als Name des
Modells im Web Portal angezeigt wird. Alle Einstellungen, die in den
nächsten Schritten definiert werden, werden in diesem Set gespeichert
und können wieder verwendet werden. Sie können Eigenschaften vom Set
öffnen und bearbeiten, wenn Sie auf Eigenschaften klicken. Bereits
erstellte WebPublisher Sets können im p4b Mo deller unter Berechtigungen
für Sets verwaltet werden. Wenn ein Benutzer keine "Erstellen"- bzw.
"Aktualisieren"-Rechte für einen Set hat, kann er Publikationen zwar
erstellen bzw. ändern, kann aber dieses Publikations-Set in der
Datenbank nicht speichern. Sie können das Set noch vor dem Beenden des
Wizards speichern, in dem Sie auf Speichern klicken.

### Pfad der Webseite

Geben Sie den Pfad (inkl. Website- bzw. Ordner-Namen für die Speicherung
der als Website publizierten Inhalte (HTML- und SVG-Dateien) an. Klicken
Sie auf Suche, wenn Sie statt dem vorgeschlagenen einen anderen Pfad
definieren mö chten. Sie können an dieser Stelle auch einen beliebigen
Dateiordner als Website-Pfad angeben, sofern sie im folgenden
Dialogfenster HTML als Site Scripttype auswählen. Dadurch ist Ihr
publiziertes Modell auch ohne installierten Webserver mittels Browser
(über die Datei „index.htm") aufrufbar und lässt sich beispielsweise auf
CD-ROM oder DVD brennen.

### Webseite Adresse

Hier können Sie definieren, welche Webseite Adresse nach dem Ausführen
des WebPublisher Wizard geöffnet werden soll. Im Fall, wenn die Webseite
direkt auf dem IIS erstellt wurde, können Sie diese Adresse mit Hilfe
von der Schaltfläche Bearbeiten ändern, damit die richtige Webseite nach
dem Ausführen des WebPublisher Wizard immer automatisch geöffnet wurde.

### Neuerliches Erstellen der Site-Dateien

Aktivieren Sie diese Option, wenn Sie die darunter angeführten glo balen
Einstellungen (Sprache, Farbschema, Scripttype) für die Website
definieren möchten. Bedenken Sie, dass es sich hier um gemeinsam
genutzte Dateien vo n allen Modellen einer Seite handelt, die daher in
der Regel auch nur einmal erstellt werden müssen. Für die Erstellung
einer neuen Website muss diese Optio n angewählt sein. Beim neuerlichen
Wiederveröffentlichen bestehender Publikationen erübrigen sich diese
Angaben.

### Site Sprache

Sie können eine der verfügbaren Sprachen (Deutsch, Englisch oder
Französisch) für das Portal auswählen. Alle Menüs und Befehle werden in
dieser Sprache dargestellt. Die Modellinhaltssprache wählen Sie im
nächsten Dialog.

### Site Scripttype

Hier können Sie die zu verwendende Scriptsprache auswählen: Idealerweise
ASP oder ASP.NET für den IIS oder PHP für Apache Webserver. Für PHP
sollten die notwendigen Einstellungen vorgeno mmen worden sein (siehe
dazu Kapitel PHP-Konfiguration des Web Publisher ).  
Sie können Ihre Inhalte auch als pure HTML-Dateien ohne serverseitige
Einbindung einer Skriptsprache publizieren, wenn Sie die Optio n HTML
unter dem Punkt Site Scripttype wählen. In diesem Fall benötigen Sie
keine installierte IIS-Konfiguration auf dem Zielrechner für Ihre
Publikation.

HTML-Publikationen

<div class="info">
 Beachten Sie bitte, dass bei reinen HTML-Veröffentlichungen die
Such-Funktion im Portal nicht verwendet werden kann. Darüber hinaus wird
dadurch auch das Aktivieren der Option „ Ladegeschwindigkeitsoptimierten
Baum generieren " in einem der folgenden Dialogfenster des WebPublishers
unmöglich.
  </div>


### Site Einstellungen

#### Site Farbschema

Hier können Sie eines der im Portal verfügbaren Farbeschemen auswählen
(Definition eigener Farbschemen, sowie die Anpassung bestehender
Farbschemen sind möglich; siehe [Erstellen neuer
Farbschemas](Erstellen_neuer_Farbschemas) und [Anpassen des
Farbschemas](Anpassen_des_Farbschemas)).

![](//images.ctfassets.net/utx1h0gfm1om/6F26AnNTWgYgeA2iUWGqyw/56606c03c2c68f52d7d1530849c4de81/1018421.png)

#### Tooltips Einblendezeit

Hier können Sie die Einblendezeit der Tooltips von Objektbeschreibungen
ändern.

#### Web-Links

Sie können Web-Links für folgende Schaltflächen im Web-Portal anpassen:
Home, Kontakt, Hilfe, so wie die Mail-Adresse für die Schaltfläche
Feedback. Sie können auch die Schaltflächen, die Sie nicht brauchen,
entfernen, in dem Sie den Hacken deaktivieren.

### IIS Website am Ziel-Speicherplatz aufsetzen

Wenn Sie diese Option auswählen, wird (je nach Namenswahl im Feld
darunter) entweder eine neue Website lokal (= auf dem localhost Ihres
PCs) im IIS erstellt, oder eine schon existierende Site mit demselben
Namen wiederhergestellt. Für die Publikation des Portals für einen
Webserver im LAN ist der Haken nicht zu setzen.

#### Name der Site

Geben Sie hier den gewünschten Namen für die Website ein, wodurch Sie
dann das Portal z.B. lokal unter: http://localhost/\[Name-der-Seite\]
auf Ihrem Rechner aufrufen können.

#### Konfigurieren

Wenn kein IIS auf Ihrem Computer installiert ist, wird diese
Schaltfläche angezeigt und Sie sollen zuerst denn IIS konfigurieren und
nur dann die Option IIS Webseite am Ziel-Speicherplatz aufsetzen
aktivieren. Auch, wenn der IIS bereits installiert ist aber einige
IIS-Komponente noch fehlen, wird die Schaltfläche "Konfigurieren"
aktiviert. Wenn Sie darauf klicken, kommt eine Meldung mit der
Information, welche Komponentem genau jetzt automatisch installiert
werden. Wenn die Installation fertig ist, können Sie die Logdatei
öffnen, in dem Sie auf Zeige den Logeintrag der IIS Installation
klicken. Wenn Sie ASP.NET als Site Scripttype auswählen, soll diese
Technologie richtig konfiguriert und in IIS erlaubt werden. Wenn nicht,
wird die Schaltfläche Konfigurieren erscheinen. Klicken Sie auf
Konfigurieren und alle Einstellungen werden automatisch durchgeführt.

 



<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>