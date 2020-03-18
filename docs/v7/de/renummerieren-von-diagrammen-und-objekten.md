

Mit der Funktion ***Renummerieren..*** im Ribbon unter "Aktualisieren
von Diagrammen" können Sie Objekte auf mehreren Diagrammen und auch die
Diagramme selbst durchnummerieren. Diagramme und Objekte können getrennt
oder zusammen renummeriert werden. Es gibt zwei Hauptmethoden, Diagramme
und Objekte zu nummerieren. 

1.  ***Zuerst (***re)nummerieren der*** Objekte am Diagramm. Danach
    sollen die Nummer von Navigationsabsprung-Objekten für die
    Child-Diagrammenummerierung verwendet werden***.

Die Nummerierung der Diagramme hängt von der Nummer des Objektes ab, das
mit den Diagrammen verknüpft ist. Wenn ein Objekt namens „1.8.
Aufbauorga" mit einem Diagramm verknüpft ist, bekommt das Diagramm nach
der eigenen Nummer zusätzlich auch die Nummer des Objekts („1.8"). Siehe
Bild:  
![](//images.ctfassets.net/utx1h0gfm1om/1WYtKH3UBCEEi8UoGkmkWU/f117804688bb92b5ba9c78fb5d9e0e8a/1018376.png)

2. ***Zuerst (***re)nummerieren der ***Diagramme. Danach renummeriere
der Objekte pro Diagramm, wobei für die Objektnummerierung die Nummer
des jeweiligen Diagramms verwendet wird.***

Diagramme werden zuerst nummeriert in der Reihenfolge, wie sie im
Hierarchiebaum dargestellt sind. Objekte werden dann auf jedem Diagramm
unabhängig renummeriert. Die Diagrammnummer wird für die
Objektnummerierung verwendet. Wenn das Diagramm die Nummer „1.8." hat,
werden Objekte entsprechend Nummer 1.8.1, 1.8.2, 1.8.3 etc. bekommen.
Das Bild zeigt diese Nummerierung:  
![](//images.ctfassets.net/utx1h0gfm1om/5iveKrliAMSMmYGMMqmWw/493bfad80567d4c7d5ba58c22182d09f/1018380.png)

Um die Funktion Nummerierung auszuwählen, gehen Sie wie folgt vor:

1.  Klicken Sie entweder im linken Navigationsfenster oder im
    rechten Objektfenster mit der rechten Maustaste auf das Diagramm
    Ihrer Wahl.
2.  Klicken Sie im Kontextmenü auf ***Renummerieren … ***
3.  Es öffnet sich der Nummerierungs-Wizard, in dem Sie
    folgende Einstellungen vornehmen können: 

![](//images.ctfassets.net/utx1h0gfm1om/1BOEsrtW7Go8AQK4MAWI4i/866c8b31208ad385fbd064890c8c1b2b/1018341.png)  
  

-   ***Nummerierung beginnen von:***

Geben Sie hier die Nummer an, ab der die Nummerierung beginnen soll.

Sie können eine der oben beschriebenen Nummerierungsmethoden
auswählen: ***Zuerst (***re)nummerieren der*** Objekte am Diagramm***
oder ******Zuerst (***re)nummerieren der ***Diagramme.******

-   ***Nummerierung entfernen***

Mithilfe dieser Optionen können Sie alle Nummer von sämtlichen
Diagrammen, welche Sie im anschließenden Dialogfenster auswählen, und
auch von deren Objekten entfernen. Wenn Sie wollen, dass sich bereits
vorhandene Nummern von Diagrammen oder Objekten im Zuge der Nummerierung
ändern (d.h., dass diese aktualisiert werden), sollten folgende Optionen
der Datenbank-Modifikationen aktiviert werden:

-   ***Objekt-Nummerierung aktualisieren***
-   ***Diagramm-Nummerierung aktualisieren ***

Wählen Sie im nächsten Schritt alle Diagramme, die Sie (re)nummerieren
möchten, bzw. bei denen die Nummerierung entfernt werden soll. Die
Auswahl der in diesem Bildschirm zur Verfügung stehenden Diagramme hängt
von der zuvor von Ihnen gemachten Selektion (einzelnes Diagramm oder
Diagrammast) ab. Wenn Sie nur Diagramme einer bestimmten Unit
renummerieren möchten, klicken Sie auf Diagramm-Ast dieser Unit mit der
rechten Maustaste und wählen Sie ***Renummerieren…*** aus.

![](//images.ctfassets.net/utx1h0gfm1om/2QnQiZtCqcMEUmesKm82EY/110c12868a4a6e089765ea2569ead8c9/1018353.png)

Im folgenden Fenster können Sie die Klassen von den zu nummerierenden
Objekten auswählen bzw. von jenen Objekten, deren Nummerierung entfernt
werden soll:

![](//images.ctfassets.net/utx1h0gfm1om/63hm3wbuyQiokuQgK44gG/e9dc0d9d0561d71aea387b1e2bfaad1e/1018349.png)

Wenn Sie auf ***Weiter*** klicken, wird der Nummerierungsvorgang
gestartet. Wenn Sie nur Diagramme renummerieren möchten, gehen Sie wie
folgt vor:

1.  Wählen Sie im Renummerierungs-Wizard die Option „Zuerst Diagramme
    und dann Objekte renummerieren".
2.  Deaktivieren Sie die Option „Objekt-Nummerierung aktualisieren".
3.  Wählen Sie Diagramme aus, die Sie renummerieren möchten.
4.  Wählen Sie alle Klassen aus. Diagramme werden nach dem Prinzip des
    Hierarchiebaums nummeriert.

Wenn Sie nur Objekte in allen Diagrammen renummerieren möchten:

1.  Wählen Sie im Renummerierungs-Wizard die Option „Zuerst Objekte und
    dann Diagramme renummerieren".
2.  Deaktivieren Sie die Option „Diagramm-Nummerierung aktualisieren".
3.  Wählen Sie alle Diagramme aus.
4.  Wählen Sie die Klassen der Objekte aus, die Sie renummerieren
    möchten. 

Wenn Sie Objekte auf einem einzelnen Diagramm nummerieren möchten,
klicken Sie mit der rechten Maustaste auf das betreffende Diagramm und
wählen Sie ***Renummeriere..*** im Kontextmenü aus. Der
Renummerierungs-Wizard wird gestartet, aber in diesem Fall wird,
entsprechend der Objektverwendung auf diesem Diagramm, nur eine
reduzierte Anzahl an Klassen und deren Objekten zum Renummerieren
angezeigt.

Die Nummerierung von Objekten hängt von den Richtungen der
Objektverknüpfungen ab. Wenn Objekte A und B automatisch oder manuell
verknüpft worden sind und die Richtung zwischen ihnen (mit „ von" oder
„zu") gesetzt wurde, so werden die beiden Objekte auf dem Diagramm
entsprechend verknüpft (1.A, 2.B bei der Richtung von A &gt; B ( A zu B)
und 1.B, 2.A bei der Richtung A &lt; B (B zu A)). Wenn die Richtung
„beide" gesetzt ist oder die beiden Objekte nicht verknüpft sind, werden
Sie standardmäßig von links nach rechts und von oben nach unten auf dem
Diagramm durchnummeriert.

