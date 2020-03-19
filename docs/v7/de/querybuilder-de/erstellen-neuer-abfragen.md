Starten Sie den QueryBuilder aus dem process4.biz-Menü.  
Erstellen Sie eine neue Abfrage, für die sich zunächst das Dialogfeld
mit den Eigenschaften öffnet. Vergeben Sie einen Namen für diese
Abfrage, die alle Ihre Filter-Einstellungen speichert.  
![](//images.ctfassets.net/utx1h0gfm1om/tAIprWcQJEs42OY2U4a0k/8f97c56695c0867ef7ffc5e0fa6d7088/1017493.png)  
  
Die Abfragen werden mit Hilfe von Abfrageklassen kategorisiert.
Abfrageklassen können im Designer erstellt werden.

![](//images.ctfassets.net/utx1h0gfm1om/7HmpSEFBXGWC06CysIiuUu/e15f55a6cdacbc0c3a993a70d97a6a96/1017505.png)

Neue Abfragen der ausgewählten Klasse kann man im QueryBuilder
erstellen. Sie können auch die Klassen von Abfragen direkt im
Eigenschaften-Fenster ändern.  
![](//images.ctfassets.net/utx1h0gfm1om/3HyXRXWFfq6o8wo40sac6u/9f7f063cacd6b413898756f87152a309/1017501.png)  
  
![](//images.ctfassets.net/utx1h0gfm1om/6uCq54Wm7CSI2AmIiuWEOI/b3337fa6cf0924e98c22947a5ba64648/1017443.png)  
  
Im folgenden Fenster öffnet sich der Abfragegenerator mit seinen
Fensteransichten (Übersicht aller Abfragen, Eigenschaften- Browser,
Abfragespalten und dem Fenster für die Abfrageergebnisse).  
![](//images.ctfassets.net/utx1h0gfm1om/6iLiHejEcwEkWeKeG6gasu/11b7d4fffd46f16d8da9a701a1f508ed/1017438.png)  
  
  
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

![](//images.ctfassets.net/utx1h0gfm1om/4wfKTzjlTOokiGS8w66C4u/7830e07076d15b75bec04b3bec98a634/1017453.png)  
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

![](//images.ctfassets.net/utx1h0gfm1om/1YKWGJEYggySiWuUW0esAw/23f50bf0837f955cd7826a8ca4167de1/1017448.png)

![](//images.ctfassets.net/utx1h0gfm1om/5BXJloFPhKmA6CEcokaWyQ/fed28a69c545100efba6fd28818a5b05/1017463.png)   
Weiteres kann angezeigt werden auf welchem Zeichenblatt innerhalb eines
VisioDiagramms ein Objekt abgelegt ist (im Knoten *VerwendetAufBlatt*)
bzw. können die mit diesem Objekt verknüpften Dateien ausgegeben werden
(im Knoten *VerknüpfteDatei*). Es kann auch gezeigt werden auf welchem Diagramm dieses Objekt genutzt wird (VerwendetImDiagramm) und auch Diagramme die mit Objekten verbunden sind (VerknüpfteDiagramme). 
![](//images.ctfassets.net/utx1h0gfm1om/1agFunY4WEE6CysoW4CiGM/ea7a8bf86583ff688cdc6c791c53e492/1017458.png)   
  
Es besteht die Möglichkeit Beschränkungen nicht nur an Objekten sondern auch an Objekt-Verknüpfungen zu platzieren. Dies kann in der {Link} Section gemacht werden. Zum Beispiel,  um zu sehen auf welchem Diagramm die Verknüpfung erstellt wurde, wählen Sie {LinkOriginDiagram}.
Wenn Sie eine Abfrage für ein Diagramm definieren, können Sie z.B. den
Namen und andere Attribute des Diagramm-Zeichenblattes anzeigen
(*DiagrammZeichenblatt*) und die mit dem Diagramm verknüpften Dateien
anzeigen (*VerknüpfteDatei*).  
![](//images.ctfassets.net/utx1h0gfm1om/Y2O9hn2lquy4kQyY2OWmc/f4d69547cab64d9983d9afece2124eb3/1017468.png)  
Um auf Basis der gewählten Einstellungen eine Abfrage in process4.biz
durchzuführen und sich das Ergebnis anzeigen zu lassen, klicken Sie auf
***Abfrage ausführen***:  
![](//images.ctfassets.net/utx1h0gfm1om/s4YxFlDonm4SOwasmWmMc/729bbc438c8a367e6777f6b2b98a1d2b/1017406.png)   
  
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

![](//images.ctfassets.net/utx1h0gfm1om/6hAGFTfi7YAmiiy464iUaW/1a490611dbd8dd0d652ccdca2d48a1f5/1017401.png)

Wenn Sie als Quelltyp ***Diagramm*** auswählen, dann ist es möglich, die
Attribute von den Diagrammklassen auszuwählen und die Liste der
Diagramme auf die ausgewählten Klassen einzuschränken.

![](//images.ctfassets.net/utx1h0gfm1om/7rJiuP7vW0cUKQgaOSQw2W/c5f808d5beb75e6563190a00549f314f/1017414.png)

Für den Typ ***Unit*** können Sie sowohl Attribute von Objektklassen als
auch von Diagrammklassen auswählen.

![](//images.ctfassets.net/utx1h0gfm1om/2ygs4XpzRW8Oi0M8q4SwQk/484d9756f7efb3008aa6f8202b9c1524/1017662.png)

Sie können - wie für alle anderen Einträge in der Datenbank - auch die
Abfragen mittels rechter Maustaste kopieren, ausschneiden und einfügen.

![](//images.ctfassets.net/utx1h0gfm1om/1YBXXE3KDSiiEo84kY64eu/00d3580e7ad827e4e74fb972436c331f/1017655.png)


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>