

In der System-[Attributgruppe](attributgruppe-und-attribut) "Validation",
ist es möglich, Attributwerte zu validieren.

Die Validierungsregel und die Validierungsnachricht, können für jedes
Attribut (außer für Systemattribute) im [Database
Designer](database-designer-de) definiert werden.

Wenn das Feld "Validierungsregel" befüllt wird, erscheint das Feld
"Validierungsnachricht" automatisch.

#### Beispiel-Anwendungsfall

1.  Ein zu validierendes [Attribut anlegen](anlegen-eines-attributs)
    oder ein bestehendes Attribut über
    das [Eigenschafts-Fenster](eigenschaften-dialogfenster) bearbeiten
2.  Eine Validierungsregel definieren  
    Für unser Beispiel, muss der Wert eines Integer-Attirbuts zwischen 3
    und 7 liegen, darf aber nicht 3 oder 7 sein.  
    Die dafür verwendete Validierungsregel ist demnach folgende:

    ``` vb
    3 < Value AND Value < 7
    ```

3.  Eine Validierungsnachricht eingeben  
    Für unser Beispiel: "Der Wert des Attributs muss zwischen 3 und 7
    liegen!"
4.  Die Änderungen mit "Ok" bestätigen

**Ergebnis**: das angelegte bzw. bearbeitet Attribut, darf ab sofort nur
mehr die Werte 4,5 oder 6 haben; andernfalls wird bei inkorrekten Werten
eine entsprechende Validierungs-Fehlermeldung angezeigt.

 

![](//images.ctfassets.net/utx1h0gfm1om/5V5348bCWkaIAEAyWKyqCI/dd355970f3ef8c7722657800f83f170d/1017727.png)

*Validierungsregel und Validierungsnachricht im*
*[Eigenschafts-Fenster](eigenschaften-dialogfenster) eines Attributs*

 

![](//images.ctfassets.net/utx1h0gfm1om/6btT7YoIuWAqcSC40w8kwc/0264d5bce0821fddfbbb6ad44c219019/1017764.png)

*Fehlermeldung gemäß der Validierungsregel*

