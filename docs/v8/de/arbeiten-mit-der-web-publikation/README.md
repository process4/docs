
-   [Struktur und Aufbau der Web-Publikation](#struktur-und-aufbau-der-web-publikation)
-   [Navigation in der Web-Publikation](#navigation-in-der-web-publikation)
    -   [Smart-Tags](#smart-tags)
    -   [Krümelpfad](#krümelpfad)
    -   [Suche](#suche)
    -   [Diagramm-Zeichenblätter](#diagramm-zeichenblätter)
    -   [Objekt-Eigenschaften](#objekt-eigenschaften)
    -   [Home / Kontakt / Hilfe / Feedback](#home--kontakt--hilfe--feedback)

------------------------------------------------------------------------

### Struktur und Aufbau der Web-Publikation

Die mit dem [WebPublisher](WebPublisher) generierte Web-Publikation, ist
ähnlich strukturiert wie das [Repository](Repository) und enthält neben
den Diagrammen auch Klassen, Objekte und Attribute gemäß der
gewählten [Publikationseinstellungen](Publikationseinstellungen).

Oben in der Mitte können Sie aus allen bisher publizierten Modellen
(Sets), das Modell zur Anzeige auswählen; daneben wird das
Publikationsdatum angezeigt. Im Fenster links sind die publizierten
[Klassen](Klasse), [Objekte](Objekt) und [Diagramme](Diagramm), gemäß
der gewählten Gruppierungseinstellungen (siehe Publizieren der Inhalte),
dargestellt.

Wenn Sie ein Objekt auf dem Diagramm anklicken, können Sie dessen
Eigenschaften im rechten Fenster sehen. Wählen Sie ein Diagramm aus, so
wird das Diagramm im rechten Fenster als SVG-Grafik und der Objekt- und
Diagrammbaum im linken Fenster dargestellt.

### Navigation in der Web-Publikation

Mit den Navigationsschaltflächen im Header der Web-Publikation, können
Sie die Größe der Diagramme ändern oder auf die Default-Größe
zurücksetzen. Zusätzlich können Sie Zeichenblattbreite oder
Zeichenblattgröße anpassen. Wenn die Zoom-Größe des Diagramms einmal
geändert wurde, wird diese Größe auch für alle andere Diagramme
übernommen.

Sie können den Objekt- und Diagrammbaum im linken Fenster ausblenden und
wieder anzeigen, wenn Sie auf das folgende Symbol im Header klicken:

![23-DE-1](//images.ctfassets.net/6mz8d8cle1nl/3kw1gxLAggQoMgCoeyWIig/6487e2c36db25003b42708b80b24f07e/23-DE-1.png)

Die Diagrammeigenschaften, lassen sich mit einem Klick auf dieses Symbol
öffnen:

![23-DE-2](//images.ctfassets.net/6mz8d8cle1nl/2ZyGNoZkGIU6e86Cgy0E4O/9a3c32ac3ee9fca57b67b753df3ac881/23-DE-2.png)

![23-DE-3](//images.ctfassets.net/6mz8d8cle1nl/e5DNafe4Kcy4QK20UU6WW/74469a057d10ece6594ed32ae7caa732/23-DE-3.png)

#### Smart-Tags

Wenn ein Objekt mit einem Diagramm verknüpft ist, können Sie dieser
Verknüpfung mit dem Smart-Tag folgen. Zudem werden so auch mit dem
jeweiligen Objekt verknüpfte Dateien und Webseiten angezeigt.

#### Krümelpfad

Der Krümelpfad bietet die Möglichkeit, den Weg zum aktuell angezeigten
Diagramm zurück zu verfolgen. Er wird rechts oben unter dem Header für
das jeweils aktuelle Diagramm (minimiert) angezeigt, kann aber in den
[Publikationseinstellungen](Publikationseinstellungen) auch komplett
deaktiviert werden.

Falls Sie den Krümelpfad permanent ausgeklappt anzeigt bekommen möchten,
finden Sie die nötigen Schritte dazu hier: [WebP\_001: Krümelpfad
permanent anzeigen](WebP_001_Krümelpfad_permanent_anzeigen).

#### Suche

Mit der Suche können Sie Objekte und Diagramme unter Angabe ihres Namens
im Portal suchen. Sie können auch erweiterte Suche verwenden, wenn Sie

-   einen Suchbegriff im Feld Suche eingeben und auf der Enter-Taste
    drücken oder
-   auf das Symbol rechts vom Zeit/Datum klicken (ein nochmaliger Klick
    schließt die Suche wieder):

![23-DE-4](//images.ctfassets.net/6mz8d8cle1nl/6xG1ehgIy40OSmgMkqSGGM/a8632a89f3e44d56260c9d6bd356e54f/23-DE-4.png)In der erweiterten
Suche, können Sie definieren, in welcher Unit bzw. Klasse gesucht werden
soll. Gefundene Objekte werden mit dem grünen und Diagramme mit dem
roten Symbol wie im Repository markiert. Objekte, in deren Namen der
Suchbegriff vorhanden ist, werden zuerst aufgelistet, erst dann kommen
Objekte, in deren Attributnamen der Suchbegriff vorhanden ist.

Hinweis

Um die Suchfunktion in der Web-Publikation verwenden zu können, muss
diese auf einem Webserver laufen; das heißt, (offline)
HTML-Publikationen verfügen über keine Suchfunktion. Der entsprechende
Button wird in Offline-Publikationen nicht angezeigt.

#### Diagramm-Zeichenblätter

Es ist natürlich möglich, mehrere Zeichenblätter von einem Diagramm ins
Web zu publizieren (siehe [Aktualisieren der
Publikation](Aktualisieren_der_Publikation)) und sie dann im Web zu
öffnen. Sie können entweder ein gewünschtes Diagramm Zeichenblatt im
Drop-Down Menü auswählen oder mit einem Klick auf den entsprechenden
Button alle Diagramm Zeichenblätter gleichzeitig in separaten Tabs
öffnen.

#### Objekt-Eigenschaften

Wenn Sie ein Objekt auf einem Diagramm oder im linken Fenster anklicken,
werden im rechten Fenster seine Eigenschaften zusammen mit Informationen
dazu, in welchen Diagrammen das Objekt verwendet ist und mit welchen
Diagrammen bzw. Objekten es verknüpft ist, angezeigt. Für verknüpfte
Objekte gibt es die Information, aus welcher Klasse das verknüpfte
Objekt kommt, mit welchem Verknüpfungstyp und via welchem
 Assoziationsobjekt die Verknüpfung erstellt
wurde[.](http://www.process4.biz/HelpContent/540/mod-hand/de/) Auch
[Shape-spezifische Attribute](Shape-spezifische_Attribute) werden in den
Objekt-Eigenschaften angezeigt.

#### Home / Kontakt / Hilfe / Feedback

Die Belegung dieser Links, lässt sich indivuduell und komfortabel über
den WebPublisher (siehe [Pfadangabe &
Funktionsauswahl](Pfadangabe_Funktionsauswahl)) steuern.

![23-DE-5](//images.ctfassets.net/6mz8d8cle1nl/6KCI3OP7c4yUA4yyoogawm/e5a5d4f1bbb74ed46da7746b0357c80f/23-DE-5.png)

*Smart-Tag*

![23-DE-6](//images.ctfassets.net/6mz8d8cle1nl/7BynwuWkX6CYII0aEMwGK8/2d4a6bc7c768f31ee3331143acb4aac2/23-DE-6.png)

*Krümelpfad*

![23-DE-7](//images.ctfassets.net/6mz8d8cle1nl/2rXiw98abeyykkmW0kCO2I/09f760ec5c7f673151978ef3aee2e9d8/23-DE-7.png)

*Optionen zur Anzeige von Diagramm-Zeichenblättern*

