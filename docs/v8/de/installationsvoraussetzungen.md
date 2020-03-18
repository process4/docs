- [Allgemeine Vorbemerkungen](#allgemeine-vorbemerkungen)
- [Hardwareanforderungen](#hardwareanforderungen)
- [Softwareanforderungen](#softwareanforderungen)
  - [Microsoft Windows](#microsoft-windows)   
  - [Visio](#visio)
  - [Microsoft Office](#microsoft-office)
  - [Microsoft SQL Server](#microsoft-sql-server)
  - [.NET Framework](#net-framework)
  - [Browser](#browser)
  - [Sharepoint](#sharepoint)
- [ServerLizenz](#serverlizenz)



### Allgemeine Vorbemerkungen

-   Um process4.biz zu herunterladen, müssen Sie sich auf der Website [https://registration.process4.biz](https://registration.process4.biz) registrieren.
-   Für eine Installation von process4.biz und zur Änderung bestimmter [Installationsparameter](installationsparameter) (bei Verwendung des \*.msi-Setups) sind Windows Administrator Berechtigungen erforderlich.
-   Für die tägliche Arbeit mit dem p4b-Client reichen normale Windows Benutzerrechte.
-   Eine Installation umfasst immer alle Erweiterungsmodule.
-   Referenzmodelle, werden von uns entweder als separate Datenbanken ausgeliefert, oder von unseren Consultingpartnern gegen separate Beauftragung in Ihre vorhandene/n Datenbank/en eingespielt.
-   Gültige [Lizenzschlüssel](lizenzierung) werden immer erst nach Zahlungseingang ausgestellt und haben ein Ablaufdatum zum Stichtag der fälligen Maintenance.
-   Lizenzschlüssel werden per Mail zugesendet oder persönlich übergeben oder über das Web bereitgestellt.
-   Zusätzliche Module von Drittherstellern, bedürfen einer separaten Installation und Lizenzierung durch den Dritthersteller, sowie evtl. auch durch process4.biz.


### Hardwareanforderungen

Der process4.biz Client-Rechner muss mindestens folgende Voraussetzungen erfüllen:

-   2-GHz Dual Core Prozessor (x86 oder x64)
-   2 GB RAM
-   250 MB freier Festplattenspeicher
-   Monitor mit einer Auflösung von 1280 x 1024

<div class="info">
Generell gilt aber, dass der process4.biz Client selbst auch nur jene Anforderungen an die Hardware stellt, die das jeweilige Microsoft Windows und Office Release braucht, um eine performante Leistung zu bringen.  
  </div>
  
Für die jeweiligen Hardwareanforderungen der Microsoft Produkte Visio und SQL-Server bitten wir Sie, sich auf den Webseiten von Microsoft zu informieren.

Für die Datenbank wird empfohlen, eine Speicherkapazität von ca. 250 KB pro Diagramm zu veranschlagen, wenn Sie die Diagramme mittels BLOB (Binary Large Objects) in der Datenbank direkt ablegen wollen, oder ca. 200 KB pro Diagramm, wenn Sie diese stattdessen auf einem Fileserver ablegen wollen. Die Datenbank selbst wird auch bei besonders großen Installationen und einer Speicherung der Diagramme am Fileserver nur ca. 500 MB umfassen.

Sollten Ihre Diagramme oder Ihre Datenbank größere Dateikapazitäten als hier erwähnt ausweisen, so bitten wir Sie uns zu kontaktieren, da es hier jedenfalls Optimierungsmöglichkeiten für Ihre Diagramme bei den [Shapes, Stencils und Templates](Shapes_Stencils_Templates), oder in der Datenbank für die zugrunde liegende Verlinkungstechnologie gibt, die Sie jedenfalls nutzen sollten.

### Softwareanforderungen
#### Microsoft Windows

Process4.biz läuft auf den Server-Betriebssystemen mit den jeweiligen
Servicepacks

-   Windows Server 2012 oder 2016

und auf den Desktop-Betriebssystemen der Professional Editionen

-   Windows 8.1 oder Windows 10

Nur __Professional Editions__ von Microsoft Windows sind unterstützt.

Installationen unter Verwendung von Windows Terminalserver, oder Citrix, oder von anderen Remotezugriffstechnologien sind technisch zwar möglich, werden aber von uns nicht supportet und bedürfen eigener Lizenzen (process4.biz Datenbank Lizenz). Nicht möglich sind Installationen in virtuellen Maschinen auf Basis eines Microsoft OS, welche physisch auf einem Rechner mit Apple OS aufsetzen.

#### Visio

Folgende Visio Versionen sind unterstützt:

| Visio | Version/Build Nummer |
| ------------- |-------------|
| 2016 Click-to-Run | version 1808 build 10730.20280 |
| 2016 | build 16.0.4266.1001 |
| 2019 Click-to-Run | version 1808 build 10341.20010 |
| 2019 | version 1808 build 10340.20017 |

<div class="info">
Auf allen Clients, auf denen process4.biz ausgeführt wird, muss dieselbe Visio-Version installiert sein. Installationen mit gemischten Versionen werden nicht unterstützt und nicht empfohlen. Verschiedene Visio-Editionen (Professional / Standard) können installiert werden und werden unterstützt.
</div>

#### Microsoft Office

Folgende MS Office Versionen sind unterstützt:
- 2013
- 2016
 
Zusätzlich wurde die MS Office 2010-Version getestet, sie wird jedoch nicht offiziell unterstützt.

#### Microsoft SQL Server 

Folgende MS SQL Server Versionen sind unterstützt:
 - 2016
 - 2017 
 
Zusätzlich wurden die 2012- und 2014-Versionen getestet, sie werden jedoch nicht ofiziell unterstützt.

<div class="warning">
Bevor Sie neue Service Packs für Windows oder insbesondere den SQL Server installieren, wenden Sie sich an unser Helpdesk, um zu erfahren, ob diese von process4.biz unterstützt werden.
</div>

#### .NET Framework

Folgende .Net Komponenten und Versionen sind unterstützt:
- .Net Core 2.1
- .Net Framework 4.6.1 
- .Net Framework 4.5.2.

#### Internet Information Services (IIS)

Wenn Sie die Erweiterung ApprovalHistory verwenden möchten, stellen Sie sicher, dass die Funktion __IIS Metabase and IIS 6 configuration compatibility__ installiert ist. 

![image](//images.ctfassets.net/6mz8d8cle1nl/3XT9M0zMT6nR7AulX3plIW/26825a9a028fe9d79f1b62d5feb1137f/image.png)


#### Browser

Folgende Browser sind für Publikationen aus dem neuen Model Publisher unterstüzt: 
- Google Chrome (61.0.3163.100)
- Firefox (65.0.2)
 
Publikationen, welche mit dem Web Publisher erstellt wurden, unterstützen höchstens IE11.

#### SharePoint

Folgende Microsoft SharePoint Versionen sind bei Nutzung des optionalen process4.biz Erweiterungsmoduls SharePointSync unterstützt: 
 - Microsoft SharePoint 2013
 - Microsoft SharePoint 2016
 - Microsoft SharePoint Online

### ServerLizenz

ServerLizenz (SL) hat keine besondere Softwareanforderungen, außer .Net Framework, das oben aufgeführt ist.