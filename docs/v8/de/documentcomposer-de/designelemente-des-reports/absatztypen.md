-   [Objektbasierender Inhalt](#objektbasierender-inhalt)
    -   [Textblock](#textblock)
    -   [Inhaltsverzeichnis](#inhaltsverzeichnis)
    -   [Diagramm](#diagramm)
    -   [Objekte einer Klasse](#objekte-einer-klasse)
    -   [Abfrage](#abfrage)
-   [Abfragebasierender Inhalt](#abfragebasierender-inhalt)
    -   [TextBlock](#textblock-1)
    -   [Inhaltsverzeichnis](#inhaltsverzeichnis-1)
    -   [Diagramm](#diagramm-1)
    -   [Objekte einer Klasse](#objekte-einer-klasse-1)
    -   [Abfrage](#abfrage-1)



## Objektbasierender Inhalt

### Textblock

![](//images.ctfassets.net/utx1h0gfm1om/3TkUpUN6mICOMe28MYAA8Q/bf41ceecfb71965a956a0397e9de4c95/1017897.png)  
Inhalt: Liste von Eigenschaften des aktuellen Objekts.  
Darstellungstyp:

-   Als Wert Style: P4B\_TextBlock
-   Als Wert mit Feldbezeichner Style: P4B\_TextBlockNamed

Wert: Attributname (wenn ausgewählt) und Wert von dem Attribut. Attribut
gehört zu aktuellem Objekt.

### Inhaltsverzeichnis

![](//images.ctfassets.net/utx1h0gfm1om/6AF9WlExqgC2AYGgMIIO64/0978ee5a6c30114d526631174ffac791/1017917.png)  
Inhalt: –  
Darstellungstyp:

-   Ausgewählte Attribute
-   Ausgewählte Attribute geteilt durch Attributgruppen
-   Ausgewählte Attribute (ohne Textblock) (*entferne Attribute, die
    schon verwendet sind im aktuellen Block als "Text Block"*)
-   Ausgewählte Attribute (mit/ohne Text-Block) unterteilt durch
    Attributgruppen (*entferne Attribute, die schon verwendet sind im
    aktuellen Block als "Text Block"*)

Style: P4B\_ObjectTable  
Wert: Zwei zweispaltige Tabelle – erste Spalte beinhaltet den
Attributnamen, zweite Spalte enthält den Attributwert. Tabelle gehört zu
aktuellem Objekt.

### Diagramm

![](//images.ctfassets.net/utx1h0gfm1om/yP7AaQPDnEeCc0AMKSsIk/4c648ff03b3207cc473c98ea0c2468de/1017922.png)  
Inhalt: Liste von Diagrammen verknüpft mit aktuellem Objekt.  
Darstellungstyp: –  
Style: P4B\_Diagram (für Diagramme verknüpft mit aktuellem Objekt)
oder  
P4B\_Root\_Diagram (für root Diagramm mit Dokumentenbaum)

### Objekte einer Klasse

![](//images.ctfassets.net/utx1h0gfm1om/6fhiaRD6vYCCoeq6IOIqQQ/3d501a24229088ef943fdf6b55707ad6/1017912.png)  
Inhalt: Diagramm verknüpft mit aktuellem Objekt  
Darstellungstyp:

-   Liste von Klassen für Objekte verwendet auf dem Diagramm

Style: P4B\_ObjectTable  
Wert: Zwei zweispaltige Tabelle – erste Spalte beinhaltet den
Klassennamen, zweite Spalte enthält eine Liste von Objektnamen.

### Abfrage

![](//images.ctfassets.net/utx1h0gfm1om/LeFzmWGyAKgQi8ECMIG2O/e9d20aeeabf59843f382191594e5f0bd/1017950.png)  
Inhalt: Liste von Abfragen  
Darstellungstyp:

-   Als Tabelle Style: P4B\_QueryTable (*mehrspaltige Tabelle; erste
    Zeile beinhaltet die Namen der Spalten*)
-   Als Absatz Style: P4B\_QueryParagraphItem (*jede Zelle der Abfrage
    wird als eigener Paragraph dargestellt*)
-   Als Liste mit Nummern Style: P4B\_QueryList (für Liste) und
    P4B\_QueryListItem (für andere Einträge) (Die Zeilen der Abfrage
    werden dargestellt als Liste mit Style P4B\_QueryList*; jede Zelle
    einer Zeile wird dargestellt als Absatz mit einer Liste mit Style*
    P4B\_QueryListItem)
-   Als Liste mit Nummern und Feldbezeichnern Style: P4B\_QueryList (für
    Liste) und P4B\_QueryNamedListItemCaption mit
    P4B\_QueryNamedListItem (für andere Einträge) (*Die Zeilen der
    Abfrage werden dargestellt als Liste mit Style*
    P4B\_QueryList*; *jede Zelle einer Zeile wird dargestellt als Absatz
    mit einer Liste* – Name der Spalte mit Style*
    P4B\_QueryNamedListItemCaption *und der Wert der Zelle mit Style*
    P4B\_QueryNamedListItem)
-   Als Liste mit Aufzählungszeichen Style: P4B\_QueryBulletList (für
    Liste) und P4B\_QueryListItem (für andere Einträge) (*Die Zeilen der
    Abfrage werden dargestellt als Liste mit Style* P4B\_QueryList*;
    J**ede Zelle einer Zeile wird dargestellt als Absatz mit einer
    Liste** mit Style* P4B\_QueryListItem)
-   Als Liste mit Aufzählungszeichen und Feldbezeichnern Style:
    P4B\_QueryBulletList (für Liste) und P4B\_QueryNamedListItemCaption
    mit P4B\_QueryNamedListItem (für andere Einträge) (*Die Zeilen der
    Abfrage werden dargestellt als Liste mit Style*
    P4B\_QueryBulletList*; *jede Zelle einer Zeile wird dargestellt als
    Absatz mit einer Liste* – Name der Spalte mit Style*
    P4B\_QueryNamedListItemCaption *und der Wert der Zelle mit Style*
    P4B\_QueryNamedListItem)

  
Tabelle Style: P4B\_QueryTable  
Listen Style: P4B\_QueryList, P4B\_QueryBulletList  
Absatz Style: P4B\_QueryParagraphItem, P4B\_QueryListItem,
P4B\_QueryNamedListItemCaption

### Tabelle mit Objekten einer Klasse

Inhalt:
- Diagramm verbunden mit dem aktuellen Objekt
Darstellungstyp: 
- Liste mit Tabellen dieser Objekte mit Eigenschaften

Style: P4B_ObjectTable
Wert: Zwei zweispaltige Tabelle – erste Spalte beinhaltet den Namen des Objekt-Attributs, zweite Spalte enthält den Wert des Attributs.



## Abfragebasierender Inhalt

### Text Block

![](//images.ctfassets.net/utx1h0gfm1om/1T9GavpzLuCKKIMEmWOMak/29d7126550c7ef5cadb58dff649b5541/1017944.png)  
Inhalt: Liste von Spalten mit aktueller Abfrage.  
Darstellungstyp:

-   Als Wert Style: P4B\_TextBlock
-   Als Wert mit Feldbezeichner Style: P4B\_TextBlockNamed

Wert: Spaltenname (wenn ausgewählt) und der Wert von der Spalte und
Zeile. Spalte gehört zur aktuellen Abfrage.

### Inhaltsverzeichnis

![](//images.ctfassets.net/utx1h0gfm1om/1b7I2zhNJyCmAIsC4YgqUO/71fd1aee44f4827a247cde959d703296/1017938.png)  
Inhalt: –  
Darstellungstyp:

-   Ausgewählte Attribute
-   Ausgewählte Attribute geteilt durch Attributgruppen

Style: P4B\_ObjectTable  
Wert: Zwei zweispaltige Tabelle – erste Spalte beinhaltet den
Attributnamen, zweite Spalte enthält Attributwert. Tabelle gehört zu
aktuellem Objekt.

### Diagramm

![](//images.ctfassets.net/utx1h0gfm1om/5wR7WELVTyQUcqIIk2SmIS/6bde2ba07c689ea6d1e034943b8f27b1/1017932.png)  
Inhalt: –  
Darstellungstyp: –  
Style: P4B\_Diagram (für ein Diagramm zur aktuellen Zeile der Abfrage)

### Objekte einer Klasse

Noch nicht definiert.

### Abfrage

![](//images.ctfassets.net/utx1h0gfm1om/2BJ5eFrzFaWOIWEwoaI8S0/7d49872e8af7deae1706f42ca774a38e/1017970.png)  
Inhalt: Liste von Abfragen  
Darstellungstyp:

-   Als Tabelle Style: P4B\_QueryTable (*mehrspaltige Tabelle; erste
    Zeile beinhaltet die Namen der Spalten*)
-   Als Absatz Style: P4B\_QueryParagraphItem (*jede Zelle der Abfrage
    wird als eigener Paragraph dargestellt*)
-   Als Liste mit Nummern Style: P4B\_QueryList (für Liste) und
    P4B\_QueryListItem (für andere Einträge) (Die Zeilen der Abfrage
    werden dargestellt als Liste mit Style P4B\_QueryList*; jede Zelle
    einer Zeile wird dargestellt als Absatz mit einer Liste mit Style*
    P4B\_QueryListItem)
-   Als Liste mit Nummern und Feldbezeichnern Style: P4B\_QueryList (für
    Liste) und P4B\_QueryNamedListItemCaption mit
    P4B\_QueryNamedListItem (für andere Einträge) (*Die Zeilen der
    Abfrage werden dargestellt als Liste mit Style*
    P4B\_QueryList*; *jede Zelle einer Zeile wird dargestellt als Absatz
    mit einer Liste* – Name der Spalte mit Style*
    P4B\_QueryNamedListItemCaption *und der Wert der Zelle mit Style*
    P4B\_QueryNamedListItem)
-   Als Liste mit Aufzählungszeichen Style: P4B\_QueryBulletList (für
    Liste) und P4B\_QueryListItem (für andere Einträge) (*Die Zeilen der
    Abfrage werden dargestellt als Liste mit Style* P4B\_QueryList*;
    J**ede Zelle einer Zeile wird dargestellt als Absatz mit einer
    Liste** mit Style* P4B\_QueryListItem)
-   Als Liste mit Aufzählungszeichen und Feldbezeichnern Style:
    P4B\_QueryBulletList (für Liste) und P4B\_QueryNamedListItemCaption
    mit P4B\_QueryNamedListItem (für andere Einträge) (*Die Zeilen der
    Abfrage werden dargestellt als Liste mit Style*
    P4B\_QueryBulletList*; *jede Zelle einer Zeile wird dargestellt als
    Absatz mit einer Liste* – Name der Spalte mit Style*
    P4B\_QueryNamedListItemCaption *und der Wert der Zelle mit Style*
    P4B\_QueryNamedListItem)

 

Tabelle Style: P4B\_QueryTable  
Liste Style: P4B\_QueryList, P4B\_QueryBulletList  
Absatz Style: P4B\_QueryParagraphItem, P4B\_QueryListItem,
P4B\_QueryNamedListItemCaption

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>