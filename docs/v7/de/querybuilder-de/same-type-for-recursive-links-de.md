![](//images.ctfassets.net/utx1h0gfm1om/1JKBtbTKYASkK4quk48U46/96b7eb3f22b29a422e3bf9dcdd742e04/329611.png)

In diesem Beispiel werden wir die Funktionalität des „Selber Typ für rekursive Verknüpfungen“ Option. Nehmen wir an wir habe 2 Verknüpfungs-Typen.  Verknüpfungs-Typ 1 und Verknüpfungs-Typ2. Und wir haben die folgenden 5  Klassen die so wie gezeigt verknüpft sind. 

![](//images.ctfassets.net/utx1h0gfm1om/2lwz0uTqtK84Euc4GEuOKU/9358829d4ca88cdbc00eef2e568416a4/329585.png)

Wie Sie bemerken können, nur A1 und A7 sind mit der Verknüpfungs-Typ 2 verbunden. In der Repository-Ansicht wird es wie im Bild aussehen.

![](//images.ctfassets.net/utx1h0gfm1om/5SEuT0MSYgE6mSYuIMoq6k/f912bb297b8c7acdf5e4a547531b6c25/329658.png)

Wenn wir die Option „Gleicher Typ für rekursive Verknüpfungen“ erlauben“ auswählen, dann wird der anfängliche Verknüpfungs-Typ ausgewählt und als Beschränkung für die weiteren Verknüpfungen am Pfad verwendet. Das bedeutet, im Diagramm oben wenn wir mit dem Objekt A1 starten, dann würden wir folgende Objekte erwarten: 
•	A2,A6 – weil sie verknüpft mit dem selben Verknüpfungs-Typ wie A2 und A1  sind (nämlich Verknüpfungs-Typ 1)
•	A7 – weil es ein direkter Nachfolger von A1 ist (verbunden mit Verknüpfungs-Typ2)
•	A3 – weil es ein direkter Nachfolger von A1 ist. Bemerken Sie dass A4 nicht gezeigt wird, weil es einen anderen Verknüpfungs-Typ hat. Obwohl A5 und A4 den gleichen Verknüpfungstyp haben wie A1 und A3 (Verknüpfungs-Typ 1) wird auch nicht gezeigt, weil der Pfad zwischen A3 und A4 festgelegt wurde. 

![](//images.ctfassets.net/utx1h0gfm1om/4Du62tkMc8226Aq4aGkiMu/2d17fc74b83a29f713148b02421e9c81/329644.png)

Das wird auch im QueryBuilder gezeigt:

![](//images.ctfassets.net/utx1h0gfm1om/4Vlr0OMUU0AAE4YqkCsy42/cdfd1c73cbec0cacfd8d751712284909/329651.png)


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>