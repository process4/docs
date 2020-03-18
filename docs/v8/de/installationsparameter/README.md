

Abhängig von Ihren Installationsanforderungen und den gekauften Lizenzen
erhalten Sie von uns unterschiedliche Setup-Dateien:

-   Wir liefern \*.exe-Dateien für die Demoversion, für die Named
    User-Installation und für den Enterprise Portal Server aus.
-   Für die Concurrent User-Installation gibt es zusätzlich auch eine
    \*.msi-Datei, die ein Ausrollen im LAN von zentraler Stelle aus
    ermöglicht

Das Ausrollen von process4.biz im LAN mittels Fernwartung, ist durch
einen Administrator im "silent mode" möglich. Dazu rufen Sie die an Sie
ausgelieferte \*.msi-Datei, mit der modifizierbaren \*.bat-Datei auf, in
welcher Sie jeweils die für Ihre Installation relevanten Parameter
setzen können. Sie können alternativ auch in der Windows-Befehlszeile
die Parameter direkt eingeben.

Zur korrekten und automatischen Erstellung der Installationsparameter
für Ihre individuelle \*.bat-Datei, können Sie auch unseren Wizard
verwenden: [Silent Mode
Installations-Erstellung](silent-mode-installation-settings-de)

Prinzipiell gilt für die Komponentenauswahl:

-   0 = nicht installieren
-   1 = installieren

Alle unten aufgelisteten Parameter für Erweiterungen (mit Ausnahme von "
INSTALL\_ACTIVE\_DIRECTORY") werden standardmäßig, also per Default
installiert. Wenn Sie daher eine Erweiterung nicht installieren möchten,
so müssen Sie dies in der Befehlszeile mit dem Parameterwert "0" extra
angeben. Bitte beachten Sie, dass das Ausführen der "silent mode"
Installation nur als Administrator möglich ist.

### Übersicht der Installationsparameter



Beispiel

msiexec /i "process4biz\_2014\_620.msi" /qn LANGUAGE\_ID="1031"
TRANSFORM=:de-DE USE\_SERVER\_LICENSE="0" INSTALL\_DBCONFIG="1"
INSTALL\_MODELER="1" INSTALL\_LICENSE\_SERVICE="0" INSTALL\_DB="0"
INSTALL\_SVG="0" INSTALL\_AXAPTA="0" INSTALL\_EXCELIE\_PPOINT="1"
INSTALL\_SURE\_STEP="0" INSTALL\_WORD\_REPORTER="1"
INSTALL\_DOC\_COMPOSER="1" INSTALL\_COBIT\_REPORTS="1"
INSTALL\_BPMN2\_IE="0" INSTALL\_WEB\_PUBLISHER="1"
INSTALL\_TASK\_MGMT="1" INSTALL\_SP\_SYNC="1"

*process4biz\_2014\_620.msi ist nur eine Variable - geben Sie bitte den
exakten Dateinamen an*
