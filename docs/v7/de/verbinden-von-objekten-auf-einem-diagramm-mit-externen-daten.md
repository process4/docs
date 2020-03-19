

Die Visio Funktion „Daten mit Shapes verknüpfen..." kann auch für
process4.biz-Objekte verwendet werden. Das heißt, man kann Excel-Zeilen
direkt mit process4.biz-Objekten verbinden. Diese Information wird in
der Datenbank gespeichert und kann auf allen Diagrammen angezeigt
werden, wo das Objekt verwendet wird. Wir möchten Ihnen anhand eines
einfachen Beispiels vermitteln, wie man diese Verbindung erstellen
kann.  
Sie haben beispielsweise ein solches process4.biz-Diagramm erstellt:

  

Parallel dazu verfügen Sie über eine Excel-Datei, in welcher Attribute
der Objekte (wie in diesem Fall die Farbe) beschrieben wurden.

![](//images.ctfassets.net/utx1h0gfm1om/1MX9seipc4YWaGC4uYyM4I/5ef097829256c2d9548de636fcb4df5d/1018397.png)

Sie wollen nun die process4.biz-Objekte auf Diagrammen mit den
Excel-Zeilen verbinden. Dabei sollen diese externen Daten nicht als
process4.biz-Attribute in die Datenbank importiert werden, sondern
weiterhin im Excel-File gepflegt und nur an interne Objekte der
Datenbank angebunden werden. Rufen Sie zur Anbindung externer Daten aus
dem Visio-Menü Daten den Eintrag Daten mit Shapes verknüpfen… auf und
wählen Sie Microsoft Office Excel-Arbeitsmappe aus.

  

 Wählen Sie die Excel-Datei zum Verknüpfen aus.

  

Definieren Sie anschließend, welches Excel-Arbeitsblatt Sie verwenden
wollen.

![](//images.ctfassets.net/utx1h0gfm1om/2ESo7SjzMgaQEQ8sUkumQ2/c5b6ebca0e2a2a516819accbdeadc6a4/1018417.png)

Wählen Sie hier Spalten und Zeilen aus, die Sie auf dem Diagramm
anzeigen möchten:

  

Selektieren Sie jene Spalte, nach der Excel-Daten auf Diagrammen
identifiziert und später aktualisiert werden können. Das können z. B.
Spalten wie Name oder ID sein.

![](//images.ctfassets.net/utx1h0gfm1om/1sRfjbRC84CuiS04IKecu4/6f336ada9308e9b8f93e1f2d0443d077/1018362.png)

Klicken Sie dann auf Fertig stellen.

  

Die Excel-Datei wurde mit dem Diagramm verbunden. Ein Abbild der
Excel-Tabelle erscheint im unteren Teil des Diagramms.

![](//images.ctfassets.net/utx1h0gfm1om/c0uo7YkqreyeAiqAkMioq/c03e95be331919b2147eb2121be4514e/1018370.png)

Jetzt können Sie via Drag-&-Drop die gewünschte Zeile mit dem Objekt
verknüpfen. Die verknüpften Daten werden entsprechend der gewählten
Visualisierung beispielsweise als Text rechts vom Shape angezeigt. Das
Aussehen des Textes bzw. die Art der Visualisierung lässt sich mit Hilfe
von  
Datengrafiken verändern. Dieses Fenster rechts vom Diagramm ist über
das Visio-Menü Daten → Daten für Shapes anzeigen … aufrufbar und
ermöglicht die Anzeige der Daten als Text, Datenbalken, Symbolsatz oder
Farbe nach Wert. In Visio 2010 kann die Datengrafiken Ansicht hier
angepasst werden:

![](//images.ctfassets.net/utx1h0gfm1om/3RmIBipJ3q4UEEKgyeOu2y/13a39a53d2ab4a8228e80c7bfd15b324/1018365.png)

In unserem Beispiel gibt es bisher noch kein process4.biz - Attribut um
es mit den Shape-Daten zu synchronisieren; daher wird es jetzt erzeugt
und konfiguriert.  
Mit der rechten Maustaste klicken Sie auf das Shape des Objekts und
wählen Ausstatten mit p4b-Eigenschaften → Statte das Shape
mit Objekt-Eigenschaften von process4.biz aus. Dadurch öffnet sich das
folgende Fenster.

Klicken Sie nun auf die Attributgruppe z.B. Definition und klicken Sie
den Knopf Neu, um ein neues Attribut anzulegen. Geben Sie einen Namen
(z.B. Farbe) an, setzen Sie das Attribut Shape-spezifisch auf Wahr und
das Attribut Synchronisation auf Visio=&gt;P4B. Wenn Sie nicht wollen
oder es nicht benötigen, dass dasselbe Objekt verschiedene Werte dieses
Attributs auf den verschiedenen Shapes hat, lassen Sie das Attribut
Shape-spezifisch auf Falsch. Klicken Sie nun OK, um das Attributfenster
zu schließen. (Dieser Vorgang kann auch im Designer vorgenommen werden).

![](//images.ctfassets.net/utx1h0gfm1om/1aPqGwCOTcG04O6YKAm8OE/f8d5f2e1a166a96b172a70aab62fc822/1018377.png)

Wählen Sie nun das Attribut Farbe um die Synchronisation zu aktivieren
und wählen Sie den Wert Description für das Attribut Visio Shapes
Ziel-Zelle. Die Visio Shape-Daten wurden schon von Visio erzeugt.
Definieren Sie die Synchronisation Visio=&gt; P4b. Klicken Sie OK um das
Fenster zu schließen.

![](//images.ctfassets.net/utx1h0gfm1om/5hISoBdLkcgYKAeuywAYc0/4068342f0ac349f09d18a3b668f3f703/1018373.png)

Danach speichern Sie das Diagramm. Nun hat das shape-spezifische
process4.biz-Attribut Farbe den Wert der Shape-Daten (eigentlich den
Wert aus einer Excel Zeile). Sie können den Wert auch im Fenster des
Attribute-Explorers sehen.

![](//images.ctfassets.net/utx1h0gfm1om/26RQ4MJVHCoiyqIkemE4Gy/e964a80e75905e8fed0f250f3fffeb03/1018385.png)

Jetzt wird das Excel Dokument geändert, z.B. wird die Farbe red (r) zu
pink (p) geändert und gespeichert.

 ![](//images.ctfassets.net/utx1h0gfm1om/3RXYKVimgwMwA6wuEUGGGA/b4a1340d0ac3a641ada7ed331b600bb0/1018381.png)  
![](//images.ctfassets.net/utx1h0gfm1om/3wJw8TreD6cCqIccqcEgUk/69021a54dd344db3292e851b99d4519c/1018329.png)  
  
Um die externen Daten in Visio zu aktualisieren, klicken Sie auf Alle
aktualisieren im Visio Menü Daten. Visio zeigt ein Fenster und
informiert über das erfolgreiche Update. Dieses Fenster können Sie
schließen. Nun steht der aktualisierte Excel-Wert in den Visio
Shape-Daten und im process4.biz  
shape-spezifischen Attribut.

 ![](//images.ctfassets.net/utx1h0gfm1om/4oC4PeIVGEQ2ecSgC6ACWI/a4339fcfa7227a0de38d65ee796ba6cd/1018325.png)  
  


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>