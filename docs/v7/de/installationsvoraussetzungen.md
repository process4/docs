-   [Allgemeine Vorbemerkungen](#allgemeine-vorbemerkungen)
-   [System- & Hardwareanforderungen](#system---hardwareanforderungen)
    -   [Das richtige Betriebssystem](#das-richtige-betriebssystem)
    -   [Der richtige SQL-Server für die process4.biz Datenbank(en)](#der-richtige-sql-server-für-die-process4biz-datenbanken)
    -   [.NET Framework](#net-framework)
    -   [Browser](#browser)
    -   [Microsoft Visio und Office](#microsoft-visio-und-office)
        -   [Upgrade von Visio 2007 auf Visio 2013](#upgrade-von-visio-2007-auf-visio-2013-oder-2016)



### Allgemeine Vorbemerkungen

-   Für eine Installation von process4.biz und zur Änderung bestimmter
    [Installationsparameter](installationsparameter) (bei Verwendung des
    \*.msi-Setups) sind Windows Administrator Berechtigungen
    erforderlich.
-   Für die tägliche Arbeit mit dem p4b-Client reichen normale Windows
    Benutzerrechte.
-   Eine Installation umfasst immer alle
    [Erweiterungsmodule](process4.biz_Erweiterungsmodule), außer dem
    Data Synchronizer, und dem EPS (Enterprise Portal Server; dieser
    erfordert eine separate Installation).
-   Referenzmodelle, werden von uns entweder als separate Datenbanken
    ausgeliefert, oder von unseren Consultingpartnern gegen separate
    Beauftragung in Ihre vorhandene/n Datenbank/en eingespielt.
-   Nach einer erfolgreichen Installation, ist die Software auch ohne
    Freischaltung durch einen Lizenzschlüssel nur für 14 Tage und auch
    nur mit einer Datenbank, die selbst auch nicht älter als 14 Tage
    ist, nutzbar. In dieser Zeit sollten Sie daher unbedingt gemäß der
    Angaben zur Lizenzierung entweder einen gültigen erworbenen
    Lizenzschlüssel einspielen, sofern Sie unsere Software erworben
    haben, oder eine Verlängerung der Testperiode bei uns beantragen.
-   Gültige [Lizenzschlüssel](lizenzierung) werden immer erst nach
    Zahlungseingang ausgestellt und haben ein Ablaufdatum zum Stichtag
    der fälligen Maintenance.
-   Lizenzschlüssel werden per Mail zugesendet oder persönlich übergeben
    oder über das Web bereitgestellt.
-   Zusätzliche Module von Drittherstellern, bedürfen einer separaten
    Installation und Lizenzierung durch den Dritthersteller, sowie evtl.
    auch durch process4.biz.


------------------------------------------------------------------------

### System- & Hardwareanforderungen

Der process4.biz Client-Rechner muss mindestens folgende Voraussetzungen
erfüllen:

-   2-GHz Dual Core Prozessor (x86 oder x64)
-   Microsoft Windows 8 oder Windows 10 (x86 oder x64)
-   2 GB RAM
-   250 MB freier Festplattenspeicher
-   Monitor mit einer Auflösung von 1280 x 1024

<div class="info">
Generell gilt aber, dass der process4.biz Client selbst auch nur jene
Anforderungen an die Hardware stellt, die das jeweilige Microsoft
Windows und Office Release braucht, um eine performante Leistung zu
bringen.  
  </div>
  
Für die jeweiligen Hardwareanforderungen der Microsoft Produkte Visio
und SQL-Server bitten wir Sie, sich auf den Webseiten von Microsoft zu
informieren.

Für die Datenbank wird empfohlen, eine Speicherkapazität von ca. 250 KB
pro Diagramm zu veranschlagen, wenn Sie die Diagramme mittels BLOB
(Binary Large Objects) in der Datenbank direkt ablegen wollen, oder ca.
200 KB pro Diagramm, wenn Sie diese stattdessen auf einem Fileserver
ablegen wollen. Die Datenbank selbst wird auch bei besonders großen
Installationen und einer Speicherung der Diagramme am Fileserver nur ca.
500 MB umfassen.

Sollten Ihre Diagramme oder Ihre Datenbank größere Dateikapazitäten als
hier erwähnt ausweisen, so bitten wir Sie uns zu kontaktieren, da es
hier jedenfalls Optimierungsmöglichkeiten für Ihre Diagramme bei den
[Shapes, Stencils und Templates](Shapes_Stencils_Templates), oder in der
Datenbank für die zugrunde liegende Verlinkungstechnologie gibt, die Sie
jedenfalls nutzen sollten.

#### Das richtige Betriebssystem

Process4.biz läuft auf den Server-Betriebssystemen mit den jeweiligen
Servicepacks

-   Windows Server 2014 oder2016

und auf den Desktop-Betriebssystemen der Professional Editionen

-   Windows 8 oder Windows 10

Wir empfehlen die Verwendung von Windows Home oder Mediacenter Editionen
(Windows 7, Windows 8) nicht, weil diese unter anderem z.B. die
notwendigen Webfunktionalitäten nicht unterstützten und diverse Dateien
fehlen. Ebenso empfehlen wir nicht die Verwendung von Windows XP
Professional , da dieses nicht mehr den modernen Anforderungen unserer
Software entspricht. Für derartige Installationen können wir daher auch
keinen Support anbieten, selbst wenn solche Installationen mit großer
Wahrscheinlichkeit auch fehlerfrei laufen werden. Bei der Verwendung von
Windows 7 und 8 müssen Sie sicherstellen, die kostenlosen IIS (Internet
Information Services) mitinstalliert zu haben, wenn Sie die
Webpublikations-Funktionalitäten von process4.biz auch am lokalen
Rechner mit Webserver nutzen wollen. Wenn der Webserver im LAN steht, so
ist es nicht nötig die IIS auf Ihrem Rechner zu installieren.

Installationen unter Verwendung von Windows Terminalserver, oder Citrix,
oder von anderen Remotezugriffstechnologien sind technisch zwar möglich,
werden aber von uns nicht supportet und bedürfen eigener Lizenzen
(process4.biz Concurrent Serverlizenz). Nicht möglich sind
Installationen in virtuellen Maschinen auf Basis eines Microsoft OS,
welche physisch auf einem Rechner mit Apple OS aufsetzen.

#### Der richtige SQL-Server für die process4.biz Datenbank(en)

Die process4.biz-Datenbanken, die Sie als [Repository](Repository) in
Verbindung mit dem process4.biz Client (der immer erst nach Visio 2010
(32Bit) oder 2013 installiert wird) nutzen, laufen nur auf dem SQL
Server 2008 R1 und R2 und 2012 von Microsoft mit den jeweiligen
Servicepacks. Datenbanken, die auf dem SQL Server 2012 erstellt bzw.
wiederhergestellt und dann gesichert wurden, können nicht auf einem SQL
Server 2008 wiederhergestellt werden. Datenbankserver anderer Hersteller
(z.B.: Oracle, MySQL, oder SQL2000) werden nicht unterstützt.

Beachten Sie bitte, dass für die Installation eines SQL-Servers im LAN
(z.B. Standard Edition) auf einem Serverbetriebssystem andere
SQL-Editionen zu verwenden sind, als für die Installation eines
SQL-Servers auf einem Desktopbetriebssystem.

Darüber hinaus gibt es für Demoinstallationen, die nach der Demophase
wieder deinstalliert werden sollten, auch noch kostenlose
Demo-SQL-Servereditionen für den Desktop (z.B. SQL 2008 Express).
Befragen Sie bitte Ihren SQL-Administrator zur Verfügbarkeit der
unterschiedlichen bzw. notwendigen SQL-Server Editionen in Ihrem
Unternehmen und stellen Sie jedenfalls mit ihm sicher, dass Sie mit
Ihrer p4b-Installation (Client) den entsprechenden Zugriff am SQL-Server
erhalten.  
  

<div class="warning">
Bitte beachten Sie:

Bevor Sie neue Service-Packs für Windows oder insbesondere den
SQL-Server einspielen, empfiehlt es sich, bei unserem
[Helpdesk](FAQs_bevor_Sie_den_p4b-Helpdesk_kontaktieren)nachzufragen, ob
diese von process4.biz bereits unterstützt werden.
  </div>

#### .NET Framework

Der Client, sowie der EPS, benötigen zumindest das .NET Framework 4.0.

#### Browser

Als Browser empfehlen wir für die optimale Darstellung der Modelle im
Web nach der Publikation mit dem [WebPublisher](webpublisher) oder im
EPS-Portal zumindest den IE9 zu verwenden. Auch wenn andere Browser und
andere Releases des Internet Explorers eine Darstellung zumeist
fehlerfrei ermöglichen, so unterstützen wir diese nicht (z.B.
kompatibilitätsbedingte Supportfälle).

#### Microsoft Visio und Office

process4.biz setzt die Installation von Microsoft Visio 2013 (32 oder 64 Bit) oder Visio 2016 (32 oder 64 Bit) in der Standard bzw. Professional Edition und inkl. der aktuellsten Service Packs auf dem Client-PC voraus. Die aktuellsten Service-Packs von Visio sollten jeweils installiert sein.

##### Upgrade von Visio 2007 auf Visio 2013 oder 2016

Sollten Sie von Visio 2007 auf das von uns empfohlene wesentlich
mächtigere Visio 2013 upgraden wollen, so ist zuerst
process4.biz zu deinstallieren (sichern Sie davor unbedingt alle
Datenbanken, Stencils, Vorlagen und Diagramme) und danach ist auch Visio
2007 zu deinstallieren. Erst dann können Sie zuerst Visio 2013 bzw. 2016
installieren und danach wieder process4.biz. Bitte gehen Sie beim
Upgrade von Visio 2007 auf das 2013 (32 BIT) analog vor und beachten Sie die jeweiligen Installationsvoraussetzungen.

Die neuen Funktionalitäten zur Anbindung von externen Daten (Excel etc.)
und von Datengrafiken an die Visio Shapes stehen nur in den Visio Professional 2013 oder 2016 zur Verfügung. Daher können Sie die dafür entwickelten Erweiterungen von process4.biz auch nicht mit den Standard Editionen von Visio 2013 und 2016 in vollem Umfang nutzen. Es ist aber möglich, dass z.B. mehrere
User process4.biz mit Visio Standard 2013 oder 2016 verwenden und nur
einige wenige User Visio Professional 2013 oder 2016 einsetzen. In
diesem Fall können die wenigen Visio Professional 2013 und 2016 User die
Editierung dieser erweiterten Funktionen (externe Daten, Datengrafiken)
vornehmen und den anderen Usern zur Ansicht zur Verfügung stellen.

Process4.biz ist nicht kompatibel mit einigen anderen Visio Add-Ins, was
unter Umständen zu Visio Abstürzen führen kann. Wenn Add-Ins, die zu
Problemen führen könnten, auf Ihrem PC installiert sind, werden Sie
darüber mit einer Warnmeldung informiert.

Information, wie man die Visio Add-Ins deaktivieren kann, finden Sie
hier: <http://support.microsoft.com/kb/937997>

Process4.biz setzt für die Verwendung der
meisten [Erweiterungsmodule](process4.biz_Erweiterungsmodule) voraus,
dass Sie Microsoft Office in der Version 2013 installiert
haben. Software von Microsoft wie SQL-Server, Visio, oder der MOSS
(Microsoft Office SharePoint Server) und andere können in Verbindung mit
process4.biz zu besonders günstigen Konditionen bei uns erworben werden,
da die process4.biz GmbH nicht nur "Microsoft Certified Partner",
sondern zusätzlich auch "Microsoft Royalty Partner" ist. Dieser
besondere Vertrag erlaubt es uns, die Software von Microsoft im Bundle
mit unserer Software zu verkaufen und im Namen von Microsoft
Lizenzpapiere, und Ihren Lizenzschlüssel dafür auszustellen. Die Preise,
die wir für diese besonderen Royaltylizenzen anbieten können, sind fast
immer günstiger als die Einkaufspreise der größten internationalen
Konzerne oder der öffentlichen Hand. Kontaktieren Sie uns für ein
Angebot.

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>