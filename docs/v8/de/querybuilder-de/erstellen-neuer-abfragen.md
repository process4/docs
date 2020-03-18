Starten Sie den QueryBuilder aus dem process4.biz-Menü.  
Erstellen Sie eine neue Abfrage, für die sich zunächst das Dialogfeld
mit den Eigenschaften öffnet. Vergeben Sie einen Namen für diese
Abfrage, die alle Ihre Filter-Einstellungen speichert.  
![6-DE-1](//images.ctfassets.net/6mz8d8cle1nl/3XPhI04GZWcsaqmEywAKMA/b9e6cc36c78d555e026630e75be70cdf/6-DE-1.png)
  
Die Abfragen werden mit Hilfe von Abfrageklassen kategorisiert.
Abfrageklassen können im Designer erstellt werden.

![6-DE-2](//images.ctfassets.net/6mz8d8cle1nl/1r2iRy46CIIK6Guc64e6um/8e25309e2c438483d651b5d76ba3f2d1/6-DE-2.png)

Neue Abfragen der ausgewählten Klasse kann man im QueryBuilder
erstellen. Sie können auch die Klassen von Abfragen direkt im
Eigenschaften-Fenster ändern.  
![6-DE-3](//images.ctfassets.net/6mz8d8cle1nl/5jYEVPnfSoWSekEU84O6gg/e681bc321bdd69845f2a72044dc759b0/6-DE-3.png)
  
![6-DE-4](//images.ctfassets.net/6mz8d8cle1nl/5dntT0ckbSquK2UgeooGCe/56c3f12722e9a174dd3a5ac58e8a0a5d/6-DE-4.png)
  
Im folgenden Fenster öffnet sich der Abfragegenerator mit seinen
Fensteransichten (Übersicht aller Abfragen, Eigenschaften- Browser,
Abfragespalten und dem Fenster für die Abfrageergebnisse).  
![6-DE-5](//images.ctfassets.net/6mz8d8cle1nl/2xOwhr08TOGEmg68O2C22Y/788f4f34c23c3ebecb51574a560ba415/6-DE-5.png)
  
Im Eigenschaften- Browser wählen Sie hier zunächst:

1.  Per Haken in der Checkbox, ob Sie für den Bericht
    Administrationselemente (z.B. Benutzer), Designelemente (z.B. Unit,
    Klasse, Attributgruppe, Attribut, Verknüpfungs-Typ, …), oder
    Repositoryelemente (Objekt, Diagramm, Objekt-Verknüpfung, …) oder
    eine Kombination von diesen verwenden möchten.
2.  Im aufklappbaren Menü darunter wählen Sie, über welchen primären
    Quelltyp (Objekt, Diagramm, Objektverknüpfung, Datei) Sie den Report
    erstellen möchten.
3.  Im Baum darunter selektieren Sie dann mittels Checkbox zur
    Filterung, welche gewünschten Parameter des oben gewählten primären
    Abfragetyps beim Erstellen der Ergebnisse berücksichtigt werden
    sollen. 

![6-DE-6](//images.ctfassets.net/6mz8d8cle1nl/1yP8Txdvg0awU0m2KGseqq/08cd6e762d5f646ad96e841365314ba9/6-DE-6.png)

Für jeden einzelnen Parameter in der Baumsicht mit den einzelnen
Selektionskriterien können Sie durch einen Mausklick auf das
Plus-Zeichen den Baum erweitern. Sie können zudem auswählen, welche
Informatio nen, wie beispielsweise Attribute (auch shape-spezifische
Attribute), verknüpfte Objekte und/oder Diagramme etc., angezeigt werden
sollen, aber Sie können die Abfrage auch gleichzeitig nach bestimmten
Kriterien wie nach Unit und / oder Klasse, etc., einschränken.

Im folgenden Beispiel haben wir Objekte ausgewählt, bei denen die
Attribute *Name* und *Description* angezeigt werden, außerdem soll der
Klassenname eingeblendet werden und die gesuchten Objekte sollen über
verknüpfte Objekte verfügen, deren Namen ebenfalls dargestellt werden
soll.  
Die angehakten Felder und Äste des Baums werden jeweils fett markiert.

![6-DE-7](//images.ctfassets.net/6mz8d8cle1nl/fOQ6WqrjpYma8wky0oEmo/b8d1e8478142d21fd47080e546cd91af/6-DE-7.png)

![6-DE-8](//images.ctfassets.net/6mz8d8cle1nl/32tvgfYr8AsOQwaosE04k/1e54351e78825fbf951dcc0c14f35324/6-DE-8.png)
Weiteres kann angezeigt werden auf welchem Zeichenblatt innerhalb eines
VisioDiagramms ein Objekt abgelegt ist (im Knoten *VerwendetAufBlatt*)
bzw. können die mit diesem Objekt verknüpften Dateien ausgegeben werden
(im Knoten *VerknüpfteDatei*). Es kann auch gezeigt werden auf welchem Diagramm dieses Objekt genutzt wird (VerwendetImDiagramm) und auch Diagramme die mit Objekten verbunden sind (VerknüpfteDiagramme).
![6-DE-9](//images.ctfassets.net/6mz8d8cle1nl/1uxOWr7xGQUiieAYcuqOCU/007ad00fcf098a3ade4496ee0139079d/6-DE-9.png)
  
Es besteht die Möglichkeit Beschränkungen nicht nur an Objekten sondern auch an Objekt-Verknüpfungen zu platzieren. Dies kann in der {Link} Section gemacht werden. Zum Beispiel,  um zu sehen auf welchem Diagramm die Verknüpfung erstellt wurde, wählen Sie {LinkOriginDiagram}.
Wenn Sie eine Abfrage für ein Diagramm definieren, können Sie z.B. den
Namen und andere Attribute des Diagramm-Zeichenblattes anzeigen
(*DiagrammZeichenblatt*) und die mit dem Diagramm verknüpften Dateien
anzeigen (*VerknüpfteDatei*).  
![6-DE-10](//images.ctfassets.net/6mz8d8cle1nl/4bna2H3WLeqYEuK6ySeCmU/284b083307d1359056072b335cda522d/6-DE-10.png)
Um auf Basis der gewählten Einstellungen eine Abfrage in process4.biz
durchzuführen und sich das Ergebnis anzeigen zu lassen, klicken Sie auf
***Abfrage ausführen***:  
![6-DE-11](//images.ctfassets.net/6mz8d8cle1nl/5muF4Y2zxmwWya04y6UO4W/8f245eb23666c618d596666d6cacc205/6-DE-11.png)
  
Anschließend wird der QueryBuilder Report mit allen Objekten (bzw.
anderen Elementen), auf welche die definierten Bedingungen zutreffen,
erstellt. Jedes von Ihnen abgefragte Element wird mit seinen relevanten
Attributen als Zeile im Auswertungsergebnis angezeigt.  
Alle Elemente in der Abfrageergebnisliste können hier direkt bearbeitet
und gelöscht werden, wobei das aber dieselben Konsequenzen auf die
gelisteten Elemente hat, als würde man Sie gleich im Repository oder
Designer bearbeiten oder löschen! Die Hyperlink-Werte können per
Mausklick direkt aus diesem Fenster geöffnet werden. Auch Diagramme
können direkt von hier aus geöffnet werden. 

![6-DE-12](//images.ctfassets.net/6mz8d8cle1nl/6uBsHulBXUiIAm6AA6ayIg/d3699a19caf33f0470ac22ca04aef244/6-DE-12.png)

Wenn Sie als Quelltyp ***Diagramm*** auswählen, dann ist es möglich, die
Attribute von den Diagrammklassen auszuwählen und die Liste der
Diagramme auf die ausgewählten Klassen einzuschränken.

![6-DE-13](//images.ctfassets.net/6mz8d8cle1nl/7uSuksVTfa8u8YCSY4ISGg/b62228440ab87b8b6705d5ecd22c1da7/6-DE-13.png)

Für den Typ ***Unit*** können Sie sowohl Attribute von Objektklassen als
auch von Diagrammklassen auswählen.

![](//images.ctfassets.net/utx1h0gfm1om/2ygs4XpzRW8Oi0M8q4SwQk/484d9756f7efb3008aa6f8202b9c1524/1017662.png)

Sie können - wie für alle anderen Einträge in der Datenbank - auch die
Abfragen mittels rechter Maustaste kopieren, ausschneiden und einfügen.

![6-DE-15](//images.ctfassets.net/6mz8d8cle1nl/41RP5XIuo84y2mOemAGekG/a8ee7fc90f66c5898ad34aecf0cb9478/6-DE-15.png)

