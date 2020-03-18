

Erstellen Sie spezielle Zeitachsen-Attribute für Diagramme und Klassen
in Ihrer Datenbank.

1.  Wählen Sie im Designer die System-Klasse ***Diagramm*** aus, klicken
    Sie mit der rechten Maustaste und wählen Sie ***Spezielle Attribute
    → ZEITACHSE: Verwendung aktivieren*** aus. Spezielle
    Zeitachsen-Attribute werden zur Klasse ***Diagramm*** hinzugefügt.  
    ![](//images.ctfassets.net/utx1h0gfm1om/72IKuOSMHSE6Cukck460my/3381a94a99d8deb84df69c9a87fc9cbd/1018791.png)
2.  Aktivieren Sie auch die speziellen Zeitachsen-Attribute für Ihre
    Klassen. Dabei können Sie auswählen, ob das Objekt als Zeitintervall
    (z.B. eine ***Tätigkeit***, die von einem bestimmten Zeitpunkt bis
    zum anderen ausgeführt wird) oder als Zeitpunkt (z. B. ein
    ***Ereignis***, das zu einem bestimmten Zeitpunkt auftritt)
    verwendet werden sollen.  
    ![](//images.ctfassets.net/utx1h0gfm1om/c3bBVO02FGI4kEeIsgwAu/8414737aa5a2f8fed60a8a5318ebb9d4/1018804.png)  
    Ein Zeitpunkt-Objekt verfügt über ein Attribut ***Zeitpunkt***, mit
    dem das Datum angezeigt wird. Ein Zeitintervall-Objekt verfügt über
    folgende Attribute: ***Anfangszeit***, ***Endzeit***, ***Dauer***.
    Der Wert für das Attribut ***Dauer*** wird automatisch berechnet:
    „Dauer = Endzeit – Anfangszeit". Wenn die ***Anfangszeit*** oder die
    ***Endzeit*** geändert wird, ändert sich der Wert für das Attribut
    ***Dauer*** entsprechend; und umgekehrt: wenn der Wert für das
    Attribut ***Dauer*** geändert wird, so ändert sich das
    ***Enddatum*** entsprechend.

Das Attribut ***Dauer*** wird unterschiedlich generiert, je nachdem, ob
***Anfangs-*** und ***Endzeit*** im absoluten oder relativen Format
definiert sind:  
1) für Diagramme mit absolutem Datumformat, wie von 02.01.2013 bis
3.03.2013, wird die Dauer in genauer Anzahl der Kalendertagen
kalkulliert,  
2) für Diagramme mit relativem Datumformat, wie von -4m bis 0, wird die
Dauer in Tagen kalkulliert. Wir nehmen an, dass ein "relativer" Monat 28
Tagen (4 Wo chen) hat.

