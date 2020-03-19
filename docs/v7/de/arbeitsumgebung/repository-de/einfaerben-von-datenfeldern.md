

Text- und Hintergrundfarbe von Datenfeldern im [Repository](repository-de),
kann in Abhängigkeit von Attribut-, Attributgruppen- oder Klassenwerten
automatisch geändert werden. Diese Funktion kann in den
[Client-Einstellungen](client-einstellungen)
aktiviert bzw. deaktiviert werden.

### Hervorhebungsregel erstellen

Im Designer unter dem Punkt "Farbeneinstellungen", können Sie eine
Hervorhebungsregel erstellen. Hier kann eine Formel mit einer Bedingung
eingeben werden, die definiert, wie und wann die Farbe von Datenfeldern
geändert werden soll (z.B., wenn der Wert kleiner als 5 ist).  
  

### Hervorhebungsregel anwenden

Nach dem Erstellen einer Hervorhebungsregel, kann diese z.B. für ein
Attribut ganz einfach im
[Eigenschafts-Fenster](eigenschaften-dialogfenster) des eingetragen
werden und wird dann mit sofortiger Wirkung angewendet. Auch im
Attribute Explorer Fenster rechts vom dem Diagramm werden Attribute
entsprechend markiert.

### Anmerkungen

-   Wenn eine Hervorhebungsregel für die Klasse definiert wird, dann
    betrifft sie alle Attribute der Klasse.
-   Wenn eine Hervorhebungsregel für eine Attributgruppe definiert wird,
    dann betrifft sie alle Attribute der Attributgruppe.
-   Wenn gleichzeitig mehrere Hervorhebungsregeln für Klassen,
    Attributgruppen und Attribute definiert werden, dann werden diese
    Regeln in der folgenden Reihenfolge angewandt:
    -   zuerst wird die Hervorhebungsregel für das Attribut verwendet,
    -   dann, wenn keine Hervorhebungsregel für das Attribut definiert
        wurde, wird die Hervorhebungsregel der Attributgruppe verwendet,
    -   dann, wenn keine Hervorhebungsregel weder für das Attribut noch
        für die Attributgruppe definiert wurde, wird die
        Hervorhebungsregel für die Klasse verwendet.
-   Eine Hervorhebungsregel wird per Klasse definiert. Sie betrifft also
    alle Units, in denen es diese Klasse gibt.

![](//images.ctfassets.net/utx1h0gfm1om/5L9IQb9u1iiqGCKCwwQKsI/5e833e35e34da512703d11191b075a03/1017580.png)

*Eine Hervorhebungsregel erstellen*

![](//images.ctfassets.net/utx1h0gfm1om/6gMUC49OWQOwwOgsMYEAKM/8b60c869171dd772c1bd77ef9f3878f4/1017584.png)

*Hervorhebungsregeln Anwenden*

![](//images.ctfassets.net/utx1h0gfm1om/6BwIgoTzC8o4YIWYkUiuii/bdd170ccaed371467f8b44e343fca871/1017558.png)

*Ergebnis*


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>