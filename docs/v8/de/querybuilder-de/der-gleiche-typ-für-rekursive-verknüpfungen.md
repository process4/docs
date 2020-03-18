![image](//images.ctfassets.net/6mz8d8cle1nl/44TSRSjiUL7MlUbW414SIW/76c43b5c633ae9bc020ee4c8286db6db/image.png)

In diesem Beispiel werden wir die Funktionalität des „Selber Typ für rekursive Verknüpfungen“ Option. Nehmen wir an wir habe 2 Verknüpfungs-Typen.  Verknüpfungs-Typ 1 und Verknüpfungs-Typ2. Und wir haben die folgenden 5  Klassen die so wie gezeigt verknüpft sind. 

![](//images.ctfassets.net/6mz8d8cle1nl/3lO19TSfqbQZ3k2rZNgR1V/89428abe21bef9e581df375bf0c30f3a/13-03-2019_13-41-30_-_Copy.png)

Wie Sie bemerken können, nur A1 und A7 sind mit der Verknüpfungs-Typ 2 verbunden. In der Repository-Ansicht wird es wie im Bild aussehen.

![](//images.ctfassets.net/6mz8d8cle1nl/4xpF9Kj9lSZQEhgeJk4ASz/c5378e17b83ba164a7856dd4a3e25235/13-03-2019_13-48-22.png)

Wenn wir die Option „Gleicher Typ für rekursive Verknüpfungen“ erlauben“ auswählen, dann wird der anfängliche Verknüpfungs-Typ ausgewählt und als Beschränkung für die weiteren Verknüpfungen am Pfad verwendet. Das bedeutet, im Diagramm oben wenn wir mit dem Objekt A1 starten, dann würden wir folgende Objekte erwarten: 
•	A2,A6 – weil sie verknüpft mit dem selben Verknüpfungs-Typ wie A2 und A1  sind (nämlich Verknüpfungs-Typ 1)
•	A7 – weil es ein direkter Nachfolger von A1 ist (verbunden mit Verknüpfungs-Typ2)
•	A3 – weil es ein direkter Nachfolger von A1 ist. Bemerken Sie dass A4 nicht gezeigt wird, weil es einen anderen Verknüpfungs-Typ hat. Obwohl A5 und A4 den gleichen Verknüpfungstyp haben wie A1 und A3 (Verknüpfungs-Typ 1) wird auch nicht gezeigt, weil der Pfad zwischen A3 und A4 festgelegt wurde. 

![](//images.ctfassets.net/6mz8d8cle1nl/7e32HiZ8tbzeyd4CBzUlYm/ec97f708bf06b67e764372448eefad06/13-03-2019_13-41-30.png)

Das wird auch im QueryBuilder gezeigt:

![](//images.ctfassets.net/6mz8d8cle1nl/24dUjgU7WAxc3kERpTulUK/042783f14120046caebe60ecaa88d3c4/13-03-2019_13-52-20.png)

