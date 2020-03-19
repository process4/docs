

Das nachfolgende Beispiel auf einem Diagramm erzeugt im Repository eine
automatische Verknüpfung der Art XY-Technologie zwischen den
Objekten „Applikation1" und „Prozess3", sowie zwischen „Applikation1"
und „Prozess4", obwohl sie keinen expliziten (am Diagramm sichtbaren)
Verbinder haben, weil sich diese Objekte auf der durch diese Objekte
aufgespannten Gesamtfläche kreuzen. Zwischen den Klassen „Applikation"
und „Prozess" muss diese Technologie aktiviert sein.

![](//images.ctfassets.net/utx1h0gfm1om/6GrEw5v2r6meEgEWegkC0G/fcd46d2291144fc9f7f16f7a7c1ba2f6/1017337.png)

  
Da das Objekt „Prozess5" außerhalb der aufgespannten Fläche liegt, kommt
es zu keiner Verknüpfung mit „Applikation1".   
 

 ![](//images.ctfassets.net/utx1h0gfm1om/5LZbLnlb44kckYAmIyymCG/6c72b17a7a10aebf4afb14ae8b7c2c08/1017333.png)![](//images.ctfassets.net/utx1h0gfm1om/4fMXmKpti8u6Eae6q6eSEY/5787309d7f19d7931bc4ea1b2fe6b1e8/1017328.png)  
  
Hinsichtlich der Erstellung der automatischen Verknüpfung wird im obigen
Beispiel das Diagramm von process4.biz analysiert und festgestellt,
welche Objekte der beiden Klassen (auch nur teilweise) auf der rot
umrandeten Fläche liegen. Diese Objekte werden dann als verlinkt in der
Datenbank eingetragen. Wie bei der Schwimmbahnen-Technologie reicht auch
hier eine teilweise Überlappung aus.   
  
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>