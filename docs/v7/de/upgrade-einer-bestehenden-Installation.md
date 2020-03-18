-   [Deinstallation](#deinstallation)
-   [Installation](#installation)
    -   [Server-Lizenz](#server-lizenz)
-   [DbUpgrade](#dbupgrade)
    -   [Das DbUpgrade
        durchführen](#das-dbupgrade-durchführen)
-   [Lizenzierung](#lizenzierung)


In diesem Artikel finden Sie die nötigen Schritte, um ein Upgrade einer
bestehenden process4.biz Installation durchzuführen.

<div class="warning"> 
Achtung:

**Der Upgrade-Prozess kann nicht rückgängig gemacht werden.**

Eine Datenbank und die darauf zugreifenden Clients, müssen immer
denselben Release-Stand haben.

Wenn Sie einen Ihrer Clients upgraden und dies ein Upgrade der Datenbank
(=DbUpgrade) erfordert, dann müssen auch alle anderen Clients auf diese
jeweils höhere Version umgestellt werden, um auf die gehobene Datenbank
weiterhin zugreifen zu können.

Damit Formeln und Bedingungen von älteren Releases nach dem Upgrade
weiterhin funktionieren, stellen Sie bitte sicher, dass dabei verwendete
p4b-Attribute mittels "This.DBName" angesprochen werden (siehe dazu
[Attributtyp: Formel](Attributtyp_Formel)).

</div>

### Deinstallation

Um ein neueres Release-Build zu installieren, muss zuerst die
installierte Version von process4.biz deinstalliert werden.

Die Deinstallation lässt sich rasch und unkompliziert über die Windows
Systemsteuerung, unter der Sektion Programme und Funktionen durchführen.

Sämtliche angelegte Datenbanken, Diagramme, Schablonen und Vorlagen,
sowie bereits mit [DbConfig](DbConfig_Verwalten_von_Datenbanken)
konfigurierte Verbindungsprofile, bleiben bei der Deinstallation
erhalten.

### Installation

Nach der erfolgreich durchgeführten Deinstallation des bisher
verwendeten process4.biz Releases, kann nun die aktuelle Version
installiert werden. Diese Installation läuft grundsätzlich wie eine
Neuinstallation ab, was im Detail im Artikel zum
[Installationsablauf](Installationsablauf) beschrieben wird.

------------------------------------------------------------------------

![](//images.ctfassets.net/utx1h0gfm1om/2jHZG0kocMI8w4YeIM2y20/1f29ae7e6aee5664ff392c20eeb8050e/1017797.png)

*Der Datenbank Aktualisierungs-Wizard*

#### Server-Lizenz

Falls Sie mit der [Server-Lizenz](Server-Lizenz) arbeiten, ist zu
beachten, dass im Zuge eines Upgrades Ihrer bestehenden Installation
auch der Server-Lizenz-Dienst auf das entsprechende Release gehoben
werden muss.

Wie für den Client, muss dazu der installierte Server-Lizenz-Dienst
zuerst deinstalliert und dann in der aktuellen Version neu installiert
werden.

### DbUpgrade

Das DbUpgrade bzw. der Datenbank Aktualisierungs-Wizard, wird beim
erstmaligen Einloggen in eine Datenbank aus einer Vorversion automatisch
gestartet. Alternativ dazu, lässt sich dieser Wizard auch manuell über
die Datei "DbUpgrade.exe" aus dem Installationsverzeichnis
(standardmäßig "C:\\Programme\\process4biz\\DBUpgrade") aufrufen.

#### Das DbUpgrade durchführen

1.  Wählen Sie die Datenbank aus, für die ein Upgrade durchgeführt
    werden soll
2.  Geben Sie den process4.biz-Admin und das Passwort für diese
    Datenbank an. Das verwendete p4b-native Benutzerkonto muss zur Rolle “Administrators“ gehören  
    <div class="warning">
    Achtung: Hier kann keine NT-Authentifizierung verwendet werden.
  </div>
3.  Wählen Sie das Release-Build Ihrer zuvor ausgewählten Datenbank,
    sowie das Build, auf welches das Upgrade durchzuführen ist (wird von
    DbUpgrade automatisch ausgefüllt)

4.  Wenn Sie eine Sicherungskopie der alten Datenbank erstellen möchten,
    aktivieren Sie bitte die entsprechende Option

5.  Ein Klick auf Weiter führt nun das gewünschte DbUpgrade durch
6.  Nach dem erfolgreich durchgeführten Upgrade der Datenbank, wird
    manchmal eine Meldung angezeigt, dass auch die Diagramme
    aktualisiert werden müssen. Dafür kann direkt aus der Warnmeldung
    der Wizard zum [Aktualisieren der Diagramme](aktualisieren-von-diagrammen) gestartet werden

### Lizenzierung

Nach einem Versionsupgrade, kann ein neuer Lizenzschlüssel nötig sein.

Siehe dazu: [Lizenz-Freischaltung &
Verlängerung](freischalten-und-verlaengern-der-lizenzen)

