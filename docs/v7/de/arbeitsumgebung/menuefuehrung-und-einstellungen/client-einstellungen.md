-   [Client-Einstellungen](#client-einstellungen)
    -   [Sprachen](#sprachen)
        -   [Datei mit Datenbankprofilen](#datei-mit-datenbankprofilen)
    -   [Ansichten](#ansichten)
        -   [Separate Navigationsbäume für Units und Klassen](#separate-navigationsbäume-für-units-und-klassen)
        -   [Objektezählung im Baum im Repository](#objektezählung-im-baum-im-repository)
        -   [Objektezählung für Auswahlfelder](#objektezählung-für-auswahlfelder)
        -   [Ausblenden von Funktionen, die nicht zur Verfügung stehen](#ausblenden-von-funktionen-die-nicht-zur-verfügung-stehen)
        -   [Aktivieren des Einfärbens für Datenfelder](#aktivieren-des-einfärbens-für-datenfelder)
        -   [Sortierungseinstellungen](#sortierungseinstellungen)
            -   [Numerische Sortierung](#numerische-sortierung)
            -   [Groß-/Kleinschreibungs-Sortierung](#groß-kleinschreibungs-sortierung)
            -   [Diese Zeichen beim Sortieren ignorieren](#diese-zeichen-beim-sortieren-ignorieren)
        -   [Anzeigen von Smart-Tags](#anzeigen-von-smart-tags)
        -   [Ausrichtung der Smart-Tags von Diagrammverknüpfungen](#ausrichtung-der-smart-tags-von-diagrammverknüpfungen)
        -   [Markieren von Objekten auf Diagrammen, die in den letzten X
            Tagen verändert wurden](#markieren-von-objekten-auf-diagrammen-die-in-den-letzten-x-tagen-verändert-wurden)
        -   [Immer alle Shape-Instanzen auf einem Diagramm aktualisieren](#immer-alle-shape-instanzen-auf-einem-diagramm-aktualisieren)
        -   [Auch die SharePoint-Daten beim Klicken des Refresh-Knopfes aktualisieren](#auch-die-sharepoint-daten-beim-klicken-des-refresh-knopfes-aktualisieren)
    -   [Systemdialoge](#systemdialoge)
-   [Administrative Einstellungen](#administrative-einstellungen)
    -   [Ändern des Passworts](#ändern-des-passworts)
    -   [Importieren von / Exportieren in Datei](#importieren-von-exportieren-in-datei)
    -   [Zurücksetzten der Client-Einstellungen](#zurücksetzten-der-client-einstellungen)
    -   [Aktivieren des Logfiles](#aktivieren-des-logfiles)

----------------------------
Die Client-Einstellungen werden über das entsprechende Symbol im
process4.biz Menüband geöffnet. Dieses Symbol teilt sich in 2 Bereiche:

1.  Client-Einstellungen (oberer Bereich)  
    ![](//images.ctfassets.net/utx1h0gfm1om/9ZSuszWhiMyCu06yoSSWA/46b268326e5994b9644f0dcf15eccbf9/1017647.png)
2.  Administrative Einstellungen (unterer Bereich)  
    ![](//images.ctfassets.net/utx1h0gfm1om/5EmMOmMMyQs06UYyGQq4AS/c7b72af53bc86bdcfad518750b1cfc01/1017609.png)

### Client-Einstellungen

#### Sprachen

Hier können Sie die Sprache der Benutzeroberfläche und darunter die
Inhaltssprache für die Datenbankinhalte festlegen. Jene Sprache, die im
Moment für diese Datenbank als Inhaltssprache ausgewählt ist, wird als
aktuelle Sprache gekennzeichnet. Wenn man die Inhaltssprache ändert,
werden alle Inhalte der Datenbank in dieser Sprache angezeigt. Auch die
Schablonen-Sprache für Diagramme, wird bei entsprechender Konfiguration
geändert.

In jenen Feldern, für die in der ausgewählten Sprache keine Inhalte
existieren, werden die Inhalte der Defaultsprache (siehe
[Datenbank-Einstellungen](datenbank-einstellungen)) herangezogen.

##### Datei mit Datenbankprofilen

Hier kann der Pfad zur *DbConfig.xml* angegeben bzw. geändert werden.

Siehe dazu: [Installationsablauf](installationsablauf) und [DbConfig:
Verwalten von Datenbanken](dbconfig-verwalten-von-datenbanken)



 

#### Ansichten

##### Separate Navigationsbäume für Units und Klassen

Das Aktivieren dieser Option führt zur Teilung des
[Repository](repository-de)- und des
[Designer](database-designer)-Fensters. Im oberen Teil werden Units und
im unteren Teil Klassen mit deren Objekten und Diagrammen bzw.
Attributen angezeigt. Diese Ansicht hilft Ihnen in großen
Datenbank-Strukturen mit vielen Units, den Überblick zu behalten.

##### Objektezählung im Baum im Repository

Aktiviert/Deaktiviert die Anzeige der Anzahl der Objekte pro Klasse bzw.
die Anzahl der Diagramme, für die jeweils ausgewählte Unit im
[Navigationsfenster](repository-de) im Repository

##### Objektezählung für Auswahlfelder

Aktiviert/Deaktiviert die Anzeige der Anzahl der Objekte pro Klasse für
Auswahlfelder.

![](//images.ctfassets.net/utx1h0gfm1om/29hk0bsuOQMC6MmOaKMwMy/714047299c820407ba18d5de36eff9b5/1017577.png)

##### Ausblenden von Funktionen, die nicht zur Verfügung stehen

Blendet jene Funktionen aus, die in der lizenzierten Edition (z.B.
Standard-Edition) nicht zur Verfügung stehen.

##### Aktivieren des Einfärbens für Datenfelder

Diese Option erlaubt es, Text- und Hintergrund von Datenfeldern im
Repository mit Farbe zu markieren, was von den Werten der
[Attribute](attributgruppe-und-attribut),
[Attributgruppen](attributgruppe-und-attribut) oder [Klassen](klasse)
abhängig gemacht wird. Siehe dazu: [Einfärben von
Datenfeldern](einfärben-von-datenfeldern)

![](//images.ctfassets.net/utx1h0gfm1om/1hGfHtQcHCwqgC0gS4cswi/94eb562d73517deb8e61e53e5aae0423/1017704.png)

*Client-Einstellungen: Ansichten*

##### Sortierungseinstellungen

###### Numerische Sortierung

Wenn aktiviert, erkennt process4.biz Nummerierungen und sortiert
Diagramme und Objekte dementsprechend korrekt.

###### Groß-/Kleinschreibungs-Sortierung

Wenn die Option deaktiviert ist, werden Objekte oder Diagramme rein
alphabetisch sortiert, ohne Beachtung von Groß-/Kleinbuchstaben. Wenn
die Option aktiviert wird, werden zuerst großgeschriebene Elemente
alphabetisch sortiert und erst dann die klein geschriebenen Einheiten.

###### Diese Zeichen beim Sortieren ignorieren

Geben Sie hier ein Zeichen an, das beim Sortieren der Objekte und
Diagramme im Repository ignoriert werden soll. Diese Option kann für
eine Sortierung von Objekten, die ein Präfix oder Postfix haben,
behilflich sein.

##### Anzeigen von Smart-Tags

Definieren Sie hier, wann die Smart-Tags auf Diagrammen im Modeller
angezeigt werden sollen: immer, nur beim Mouse-Over, oder nur, wenn das
Shape selektiert ist.  
Für die Einstellung von Smart-Tags in Web-Publikationen stehen separate
und weitergehende Optionen zur Verfügung. Siehe dazu:
[Publikationseinstellungen](publikationseinstellungen)

##### Ausrichtung der Smart-Tags von Diagrammverknüpfungen

Dieser Parameter entscheidet darüber, wo genau auf den Shapes der
Smart-Tag positioniert sein soll, um z.B. Texte oder Shape Data Graphics
auf Shapes nicht zu verdecken, oder bei Rundungen nicht außerhalb eines
Shapes zu liegen. Auswahlmöglichkeiten stehen für horizontal (links,
x-zentriert, rechts) und für vertikal (unten, y-zentriert, oben) zur
Verfügung.

##### Markieren von Objekten auf Diagrammen, die in den letzten X Tagen verändert wurden

Objekte, die vor Kurzem geändert wurden (innerhal der hier definierten
Zeitperiode), werden auf dem Diagramm markiert.

##### Immer alle Shape-Instanzen auf einem Diagramm aktualisieren

Wenn diese Option aktiviert wird, werden alle Shapes von einem Objekt
optisch verändert, so bald sich Objekt Eigenschaften ändern (z.B. werden
ein Smart-Tag oder Datengrafiken dadurch zu allen Shapes hinzugefügt,
die einem Objekt entsprechen).

##### Auch die SharePoint-Daten beim Klicken des Refresh-Knopfes aktualisieren

Diese Option erlaubt es, die SharePoint Synchronisation mit einem Klick
auf die "Aktualisieren"-Schaltfläche anzustoßen.

#### Systemdialoge

-   Anzeigen einer Sicherheitsnachfrage beim Löschen von Objekten  
    Hier können Sie entscheiden, ob beim Löschen von Objekten generell
    eine Sicherheitsnachfrage erscheinen soll.
-   Anzeigen des Eigenschafts-Fensters beim Ablegen eines Shapes auf
    einem Diagramm  
    Wenn diese Option deaktiviert ist, wird das
    [Eigenschafts-Fenster](eigenschaften-dialogfenster) beim Erstellen
    eines Objekts auf einem Diagramm nicht angezeigt. Der Name des
    Objektes wird sofort auf dem Shape dargestellt und kann bearbeitet
    werden.
-   Anzeigen des Verknüpfungs-Selektors beim Ablegen eines Shapes  
    Das aktivieren dieser Funktion führt zu folgendem Effekt: wenn eine
    manuelle oder automatische Verknüpfung zwischen Objekten bereits
    besteht und diese Objekte auf einem Diagramm vorhanden sind,
    erscheint beim Ziehen eines Objekts aus dem Repository auf das
    Diagramm ein Dialog, wo alle Verknüpfungen des Objektes
    aufgezeichnet sind. Das Aktivieren des Hakens in der Spalte
    "Verknüpfung(en) zeichnen?", führt dann dazu, dass diese Verknüpfung
    via Pfeil auf dem Diagramm visualisiert wird. Mit diesem Mittel
    lassen sich Verlinkungen, die in der DB existieren, aber vielleicht
    am Diagramm nicht visualisiert sind, anzeigen und manipulieren.
-   Beim Speichern zur Änderung des Genehmigungsstatus auffordern  
    Wenn das [Genehmigungsmanagement](genehmigungsmanagement) für
    Diagramme bzw. Objekte aktiviert ist, wird jedes Mal beim Speichern
    des Diagramms bzw. Objekts eine Meldung erscheinen, ob der
    Genehmigungsstatus des Diagramms bzw. Objektes geändert werden soll.
    Wenn diese Option ausgeschaltet ist, wird die Meldung beim Speichern
    nicht vorkommen.
-   Anzeigen einer Benachrichtigung im Repository, falls es bei der
    Berechnung von Eigenschtswerten zu Unregelmäßigkeiten kommt  
    Wenn diese Option aktiviert wurde, dann wird im Repository eine
    Infomeldung erscheinen, falls Werte von Attributen nicht richtig
    berechnet werden können.
-   Eine Warnung anzeigen, wenn Verbinder nicht richtig platziert sind  
    Zeigt eine Warnung, wenn Verbinder nicht korrekt auf einem Diagramm
    platziert wurden, also z.B. statt <span class="underline">an</span>
    einem Shape, <span class="underline">vor</span> einem Shape enden.
-   Eine Warnung anzeigen, wenn Objekte verbunden werden, aber die
    Verknüpfungsregel fehlt  
    Zeigt eine Warnung an, falls Objekte zwar grafisch mit einem
    Verbinder verbunden wurde, es aber keine entsprechende
    [Verknüpfungsregel](verknüpfungen) für diese Objekte gibt.
-   Eine Warnung anzeigen, wenn mehrere Verknüpfungsregeln mit der
    selben Priorität definiert sindZeigt eine Warnung an, wenn es für
    eine Verknüpfung mehrere Verknüpfungsregeln mit der selben Priorität
    in der Datenbank gibt.
-   Eine Warnung anzeigen, wenn eine Verknüpfung zwischen Objekten
    "gerichtet" ist, aber alle Verknüpfungsregeln für diese Objekte
    "ungerichtet" sind  
    Zeigt eine Warnung an, wenn eine Verknüpfung zwischen Objekten
    "gerichtet" ist, aber alle Verknüpfungsregeln für diese Objekte
    "ungerichtet" sind
-   Eine Warnung anzeigen, wenn eine Verknüpfung zwischen Objekten
    "ungerichtet" ist, aber alle Verknüpfungsregeln für diese Objekte
    "gerichtet" sind  
    Zeigt eine Warnung an, wenn eine Verknüpfung zwischen Objekten
    "ungerichtet" ist, aber alle Verknüpfungsregeln für diese Objekte
    "gerichtet" sind
-   Eine Warnung anzeigen, wenn die Richtung einer Verknüpfung der
    Richtung in Ihrer Verknüpfungsregel widerspricht  
    Zeigt eine Warnung an, wenn die Richtung einer Verknüpfung der
    Richtung in Ihrer Verknüpfungsregel widerspricht
-   Eine Warnung anzeigen, wenn ein Benutzer die Größe eines Diagramms
    so verändern will, dass es nicht mehr nur auf ganze A4-Seiten
    passt  
    Zeigt eine Warnung an, wenn die Größe eines Diagramms so verändert
    wird, dass es nicht mehr auf eine ganze A4-Seite passt und sich
    Seitenfragmente ergeben, die später beim Ausdrucken Probleme machen
    können.
-   Alle Systemdialoge auf ihren Defaultwert zurücksetzen  
    Alle unterdrückten Systemdialoge, werden auf den Defaultwert
    zurückgesetzt.

### Administrative Einstellungen

#### Ändern des Passworts

Mitdieser Option, können Sie jeder Zeit das Passwort des derzeit
eingeloggten process4.biz Benutzers ändern.

#### Importieren von / Exportieren in Datei

Wenn Sie die Client-Einstellungen exportieren möchten, wählen Sie die
entsprechende Funktionaus. Ein Fenster erscheint, in dem Sie definieren,
wohin die Einstellungen als \*.xml Datei gespeichert werden. Wenn Sie
die Client-Einstellungen auf einen anderen Client bzw . für einen
anderen Windows-Benutzer verwenden möchten, importieren Sie einfach die
so erstellte \*.xml-Datei.

#### Zurücksetzten der Client-Einstellungen

Möchten Sie die Client-Einstellungen zurücksetzten, wählen Sie diese
Funktion aus oder löschen Sie die Datei *settings.xml* direkt aus dem
Ordner:

*C:\\Dokumente und Einstellungen\\User\\Anwendungsdaten\\process4*
("User" ist der Name Ihres Windows Benutzers).

#### Aktivieren des Logfiles

Diese Option erlaubt es, eine Log Datei zu erstellen. Die Logdatei
(p4b\_log.txt) wird am Desktop erstellt und hilft bei Helpdesk-Anfragen.
Wenn Sie Visio schließen, wird diese Option automatisch wieder
deaktiviert.


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>