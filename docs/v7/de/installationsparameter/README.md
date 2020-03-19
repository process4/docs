

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

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Parameter</strong></p></td>
<td><p><strong>Beschreibung des Parameters</strong></p></td>
<td><p><strong>Parameterwert (Beispiel)</strong></p></td>
</tr>
<tr class="even">
<td><p>INSTALL_DIR</p></td>
<td><p>Geben Sie hier das Zielverzeichnis an, in das process4.biz installiert werden soll.</p></td>
<td><p>=&quot;C:\Program Files\process4\&quot;</p></td>
</tr>
<tr class="odd">
<td><p>PROFILE</p></td>
<td><p>Wählen Sie den Speicherort für die XML-Datei des Profils</p></td>
<td><p>=&quot;C:\ProgramData\process4 &quot;</p></td>
</tr>
<tr class="even">
<td><p>PROFILE_LOCAL</p></td>
<td><p>Wählen Sie den Speicherort für die lokale XML-Datei des Profils</p></td>
<td><p>=&quot;C:\Users\USERNAME\AppData\ Local\process4&quot;</p></td>
</tr>
<tr class="odd">
<td><p>DBCONFIG_PWD</p></td>
<td><p>Geben Sie das Passwort für die DBConfig ein (optional)</p></td>
<td><p>=&quot;p4b&quot;</p></td>
</tr>
<tr class="even">
<td><p>LANGUAGE_ID</p></td>
<td><p>Wählen Sie die Sprache des GUI, die für den User beim ersten Login angezeigt wird. (Der User kann später selbst in der Applikation die Sprache wechseln)</p>
<ul>
<li>Parameter &quot;1031&quot; –&gt; für Deutsch</li>
<li>Parameter &quot;1033&quot; –&gt; für Englisch</li>
<li>Parameter &quot;1036&quot; –&gt; für Französisch</li>
</ul></td>
<td><p>=&quot;1033&quot;</p></td>
</tr>
<tr class="odd">
<td><p>USE_SERVER_LICENSE</p></td>
<td><p>Geben Sie an, ob Sie Server-Lizenzierung verwenden möchten oder nicht.</p></td>
<td><p>=&quot;1&quot; - verwenden<br />
=&quot;0&quot; – nicht verwenden</p></td>
</tr>
<tr class="even">
<td><p>LICENSE_SERVER_NAME</p></td>
<td><p>Geben Sie die IP-Adresse oder den Namen von jenem Server an, auf dem das p4b-Lizenzserverprogramm läuft. (Falls der Parameter USE_SERVER_LICENSE aktiviert ist)</p></td>
<td><p>=&quot;193.166.0.155&quot; (Die IP-Adresse wird automatisch gefunden, wenn p4b aus der Virtual Machine heraus auf das Serverlizenz- Programm am Host [= am selben PC] zugreifen kann).</p></td>
</tr>
<tr class="odd">
<td><p>INSTALL_LICENSE_SERVICE</p></td>
<td><p>Definieren Sie, ob der Lizenz-Server als Windows-Dienst installiert werden soll oder nicht. Dieser Parameter soll nur für den Haupt-Computer (Server) aktiviert werden, auf dem das Service gestartet und für alle anderen Computer verfügbar sein soll. (Falls der Parameter USE_SERVER_LICENSE aktiviert ist)</p></td>
<td><p>=&quot;1&quot; - Service installieren<br />
=&quot;0&quot; – Service nicht installieren</p></td>
</tr>
<tr class="even">
<td><p>LICENSE_USER_NAME</p></td>
<td><p>Geben Sie den Lizenz-Usernamen an</p></td>
<td><p>=&quot;John&quot;</p></td>
</tr>
<tr class="odd">
<td><p>LICENSE_KEY</p></td>
<td><p>Geben Sie den Lizenzschlüssel an.</p></td>
<td><p>=&quot;LX01-FK5R-RTS5-...&quot;</p></td>
</tr>
<tr class="even">
<td><p>INSTALL_DB</p></td>
<td><p>Definieren Sie hier, welche p4b-Datenbanken Sie beim Setup automatisch via Skript mit Verbindungsprofil installieren lassen wollen. Sie können auch eine leere Datenbank installieren.</p>
<ul>
<li>&quot;0&quot; –&gt; keine DB installieren</li>
<li>&quot;1&quot; –&gt; eine leere Datenbank installieren</li>
<li>&quot;2&quot; –&gt; Demo Datenbank installieren</li>
<li>&quot;3&quot; –&gt; beide (Demo und leere Datenbank) installieren</li>
</ul></td>
<td><p>=&quot;1&quot;</p></td>
</tr>
<tr class="odd">
<td><p>DB_SERVER_NAME</p></td>
<td><p>Name des DB-Servers (SQL-Server) für die Installation der leeren Datenbank</p></td>
<td><p>=&quot;MAURITIUS&quot;</p></td>
</tr>
<tr class="even">
<td><p>DB_SQL_AUTH_MODE</p></td>
<td><p>Geben Sie an, ob die SQL-Server-Authentifizierung (mit Benutzernamen und Passwort) oder Windows NT Integrated Security für den<br />
SQL-Serverzugriff verwendet werden soll. Der Parameter gilt für die Installation der leeren DB.</p>
<ul>
<li>&quot;0&quot; –&gt; Windows NT<br />
verwenden</li>
<li><p>&quot;1&quot; –&gt; SQL Server<br />
Authentifizierung verwenden</p></li>
</ul></td>
<td><p>=&quot;0&quot;<br />
(Wenn &quot;1&quot; angegeben ist, sollen die Parameter DB_USER_NAME und DB_PASSWORD einen Wert enthalten)</p></td>
</tr>
<tr class="odd">
<td><p>DB_USER_NAME</p></td>
<td><p>Login für den DB-Server zur Installation der leeren DB.</p></td>
<td><p>=&quot;sa&quot;</p></td>
</tr>
<tr class="even">
<td><p>DB_PASSWORD</p></td>
<td><p>Passwort für den DB-Server zur Installation der leeren DB.</p></td>
<td><p>=&quot;123&quot;</p></td>
</tr>
<tr class="odd">
<td><p>DEMODB_SERVER_NAME</p></td>
<td><p>Name des DB-Servers (SQL-Server) für die Installation der DEMO-Datenbank</p></td>
<td><p>=&quot;MAURITIUS&quot;</p></td>
</tr>
<tr class="even">
<td><p>DEMODB_SQL_AUTH_MODE</p></td>
<td><p>Geben Sie an, ob die SQL-Server-Authentifizierung (mit Benutzernamen und Passwort) oder Windows NT Integrated Security für den SQL-Serverzugriff verwendet werden soll. Der Parameter gilt für die Installation der DEMO-DB.</p>
<ul>
<li>&quot;0&quot; –&gt; Windows NT<br />
verwenden</li>
<li>&quot;1&quot; –&gt; SQL Server<br />
Authentifizierung verwenden</li>
</ul></td>
<td><p>=&quot;0&quot;<br />
(Wenn &quot;1&quot; angegeben ist, sollen die Parameter DEMODB_USER_NAME und DEMODB_PASSWORD einen Wert enthalten)</p></td>
</tr>
<tr class="odd">
<td><p>DEMODB_USER_NAME</p></td>
<td><p>Login für den DB-Server zur Installation der DEMO-DB.</p></td>
<td><p>=&quot;sa&quot;</p></td>
</tr>
<tr class="even">
<td><p>DEMODB_PASSWORD</p></td>
<td><p>Passwort für den DB-Server zur Installation der DEMO-DB.</p></td>
<td><p>=&quot;123&quot;</p></td>
</tr>
<tr class="odd">
<td>INSTALL_DBCONFIG</td>
<td>Entscheidet, ob DbConfig installiert werden soll, oder nicht.</td>
<td><p>=&quot;1&quot; – installieren<br />
=&quot;0&quot; – nicht installieren</p></td>
</tr>
<tr class="even">
<td>INSTALL_MODELER</td>
<td>Entscheidet, ob process4.biz installiert werden soll, oder nicht; auf &quot;0&quot; setzen, um nur DbConfig zu installieren (z.B. auf dem SQL-Server)</td>
<td><p>=&quot;1&quot; – installieren<br />
=&quot;0&quot; – nicht installieren</p></td>
</tr>
<tr class="odd">
<td><p>INSTALL_WEB_PUBLISHER</p></td>
<td><p>Web Publisher Erweiterung</p></td>
<td><p>=&quot;1&quot; – installieren<br />
=&quot;0&quot; – nicht installieren</p></td>
</tr>
<tr class="even">
<td><p>INSTALL_WEB_PUBLISHER_IIS_SUPPORT</p></td>
<td><p>Der Parameter installiert die &quot;IIS 6 Management Compatibility&quot;. Diese Option ist nötig, damit ein lokales p4b-Web-Portal auf IIS 8 richtig funktioniert.</p></td>
<td><p>=&quot;1&quot; – installieren<br />
=&quot;0&quot; – nicht installieren</p></td>
</tr>
<tr class="odd">
<td><p>INSTALL_SVG</p></td>
<td><p>Wählen Sie diesen Parameter, wenn Sie den SVG-Viewer für die Anzeige der Diagramme im Webportal installieren wollen. (Der SVG-Viewer ist nicht nötig bei Verwendung des IE9+.)</p></td>
<td><p>=&quot;1&quot; – installieren<br />
=&quot;0&quot; – nicht installieren</p></td>
</tr>
<tr class="even">
<td><p>INSTALL_AXAPTA</p></td>
<td><p>Dynamics AX Erweiterung</p></td>
<td><p>=&quot;1&quot; – installieren<br />
=&quot;0&quot; – nicht installieren</p></td>
</tr>
<tr class="odd">
<td><p>INSTALL_EXCELIE_PPOINT</p></td>
<td><p>Import-Export Manager<br />
(Excel, PowerPoint) Erweit erung</p></td>
<td><p>=&quot;1&quot; – installieren<br />
=&quot;0&quot; – nicht installieren</p></td>
</tr>
<tr class="even">
<td><p>INSTALL_WORD_REPORTER</p></td>
<td><p>Word Reporter Erweiterung</p></td>
<td><p>=&quot;1&quot; – installieren<br />
=&quot;0&quot; – nicht installieren</p></td>
</tr>
<tr class="odd">
<td><p>INSTALL_COBIT_REPORTS</p></td>
<td><p>Cobit Reports Erweiterung</p></td>
<td><p>=&quot;1&quot; – installieren<br />
=&quot;0&quot; – nicht installieren</p></td>
</tr>
<tr class="even">
<td><p>INSTALL_ACTIVE_DIRECTORY</p></td>
<td><p>Active Directory Erweiterung</p></td>
<td><p>=&quot;1&quot; – installieren<br />
=&quot;0&quot; – nicht installieren</p></td>
</tr>
<tr class="odd">
<td><p>INSTALL_SURE_STEP</p></td>
<td><p>Dynamics SureStep Reporter Erweiterung</p></td>
<td><p>=&quot;1&quot; – installieren<br />
=&quot;0&quot; – nicht installieren</p></td>
</tr>
<tr class="even">
<td><p>INSTALL_DOC_COMPOSER</p></td>
<td><p>DocumentComposer Erweiterung</p></td>
<td><p>=&quot;1&quot; – installieren<br />
=&quot;0&quot; – nicht installieren</p></td>
</tr>
<tr class="odd">
<td><p>INSTALL_TASK_MGMT</p></td>
<td><p>TaskManagement Erweiterung</p></td>
<td><p>=&quot;1&quot; – installieren<br />
=&quot;0&quot; – nicht installieren</p></td>
</tr>
<tr class="even">
<td><p>INSTALL_SP_SYNC</p></td>
<td><p>SharePoint Integration</p></td>
<td><p>=&quot;1&quot; – installieren<br />
=&quot;0&quot; – nicht installieren</p></td>
</tr>
</tbody>
</table>

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

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>