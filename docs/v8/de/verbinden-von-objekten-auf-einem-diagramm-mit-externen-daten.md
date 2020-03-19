

Die Visio Funktion „Daten mit Shapes verknüpfen..." kann auch für
process4.biz-Objekte verwendet werden. Das heißt, man kann Excel-Zeilen
direkt mit process4.biz-Objekten verbinden. Diese Information wird in
der Datenbank gespeichert und kann auf allen Diagrammen angezeigt
werden, wo das Objekt verwendet wird. Wir möchten Ihnen anhand eines
einfachen Beispiels vermitteln, wie man diese Verbindung erstellen
kann.  
Sie haben beispielsweise ein solches process4.biz-Diagramm erstellt:

  

Parallel dazu verfügen Sie über eine Excel-Datei, in welcher Attribute der Objekte (wie in diesem Fall die Farbe) beschrieben wurden.

![16-08-2019 09-48-26](//images.ctfassets.net/6mz8d8cle1nl/7w8DFh7ukvwToqB5m8g9E9/99a1dd4330d9eb3cd7dafc27bc9910f4/16-08-2019_09-48-26.png)

Sie wollen nun die process4.biz-Objekte auf Diagrammen mit den
Excel-Zeilen verbinden. Dabei sollen diese externen Daten nicht als
process4.biz-Attribute in die Datenbank importiert werden, sondern
weiterhin im Excel-File gepflegt und nur an interne Objekte der
Datenbank angebunden werden. Rufen Sie zur Anbindung externer Daten aus
dem Visio-Menü Daten den Eintrag Daten mit Shapes verknüpfen… auf und
wählen Sie Microsoft Office Excel-Arbeitsmappe aus.

  
![16-08-2019 08-59-37](//images.ctfassets.net/6mz8d8cle1nl/4V7xklEsc13mgV0CDQyXoj/888e72c74efafb8abc57a36b133ac42f/16-08-2019_08-59-37.png)

Wählen Sie die Excel-Datei zum Verknüpfen aus. Definieren Sie anschließend, welches Excel-Arbeitsblatt Sie verwenden wollen.


Wählen Sie hier Spalten und Zeilen aus, die Sie auf dem Diagramm anzeigen möchten:

![16-08-2019 09-46-33](//images.ctfassets.net/6mz8d8cle1nl/5Miclap78lJ9tzzpRiUiQ/8e861935b8a724b8f643f1a66db8a86c/16-08-2019_09-46-33.png)

Selektieren Sie jene Spalte, nach der Excel-Daten auf Diagrammen identifiziert und später aktualisiert werden können. Das können z. B. Spalten wie Name oder ID sein.

Klicken Sie dann auf Fertig stellen.  

Die Excel-Datei wurde mit dem Diagramm verbunden. Ein Abbild der Excel-Tabelle erscheint im rechten Teil des Diagramms.

![16-08-2019 09-59-46](//images.ctfassets.net/6mz8d8cle1nl/4BqsHsxmecBNpg8KxbS5Md/ca43a228c985dd35bf71eb9a79ddc723/16-08-2019_09-59-46.png)

Jetzt können Sie via Drag-&-Drop die gewünschte Zeile mit dem Objekt verknüpfen. Die verknüpften Daten werden entsprechend der gewählten Visualisierung beispielsweise als Text rechts vom Shape angezeigt. Das Aussehen des Textes bzw. die Art der Visualisierung lässt sich mit Hilfe von Datengrafiken verändern. Dieses Fenster rechts vom Diagramm ist über
das Visio-Menü Daten → Daten für Shapes anzeigen … aufrufbar und
ermöglicht die Anzeige der Daten als Text, Datenbalken, Symbolsatz oder
Farbe nach Wert. In Visio 2019 kann die Datengrafiken Ansicht hier
angepasst werden:

![16-08-2019 10-09-52](//images.ctfassets.net/6mz8d8cle1nl/4aQypqwoSwirHLXD9N4Yel/02ff71669c99ad5d53efaf15251cc9f0/16-08-2019_10-09-52.png)

In unserem Beispiel gibt es bisher noch kein process4.biz - Attribut um es mit den Shape-Daten zu synchronisieren; daher wird es jetzt erzeugt und konfiguriert. Mit der rechten Maustaste klicken Sie auf das Shape des Objekts und wählen Ausstatten mit p4b-Eigenschaften → Statte das Shape mit Objekt-Eigenschaften von process4.biz aus. Dadurch öffnet sich das folgende Fenster.

Klicken Sie nun auf die Attributgruppe z.B. Definition und klicken Sie den Knopf Neu, um ein neues Attribut anzulegen. Geben Sie einen Namen (z.B. Farbe) an, setzen Sie das Attribut Shape-spezifisch auf Wahr und das Attribut Synchronisation auf Visio=&gt;P4B. Wenn Sie nicht wollen
oder es nicht benötigen, dass dasselbe Objekt verschiedene Werte dieses Attributs auf den verschiedenen Shapes hat, lassen Sie das Attribut Shape-spezifisch auf Falsch. Klicken Sie nun OK, um das Attributfenster zu schließen. (Dieser Vorgang kann auch im Designer vorgenommen werden).

![16-08-2019 09-08-01](//images.ctfassets.net/6mz8d8cle1nl/fZ4VeXgX1fpz1DzTLYni1/a3009e73deef7e987376d64d14a5e22a/16-08-2019_09-08-01.png)

Wählen Sie nun das Attribut Farbe um die Synchronisation zu aktivieren und wählen Sie den Wert Description für das Attribut Visio Shapes Ziel-Zelle. Die Visio Shape-Daten wurden schon von Visio erzeugt. Definieren Sie die Synchronisation Visio=&gt; P4b. Klicken Sie OK um das
Fenster zu schließen.

![16-08-2019 09-12-00](//images.ctfassets.net/6mz8d8cle1nl/6abHlwQn8ISf0JpSuWKDiK/ae37932bcfd1b8ee430212ebad3cfd73/16-08-2019_09-12-00.png)

Danach speichern Sie das Diagramm. Nun hat das shape-spezifische process4.biz-Attribut Farbe den Wert der Shape-Daten (eigentlich den Wert aus einer Excel Zeile). Sie können den Wert auch im Fenster des Attribute-Explorers sehen.


Jetzt wird das Excel Dokument geändert, z.B. wird die Farbe red (r) zu
pink (p) geändert und gespeichert.

 ![16-08-2019 10-15-23](//images.ctfassets.net/6mz8d8cle1nl/3ZAJesG2Kysie2siUz1hzD/6a945b33828cd63927329f6236e61071/16-08-2019_10-15-23.png) 
 
![](//images.ctfassets.net/utx1h0gfm1om/3wJw8TreD6cCqIccqcEgUk/69021a54dd344db3292e851b99d4519c/1018329.png)  
  
Um die externen Daten in Visio zu aktualisieren, klicken Sie auf Alle
aktualisieren im Visio Menü Daten. Visio zeigt ein Fenster und
informiert über das erfolgreiche Update. Dieses Fenster können Sie
schließen. Nun steht der aktualisierte Excel-Wert in den Visio
Shape-Daten und im process4.biz  
shape-spezifischen Attribut.

![16-08-2019 10-15-08](//images.ctfassets.net/6mz8d8cle1nl/66HhC1YykKzyBPWxdJa3CE/25816fd0b7cb6231c7e9fee695b7ccd2/16-08-2019_10-15-08.png)


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>