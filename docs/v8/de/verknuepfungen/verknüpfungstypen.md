

Verknüpfungstypen können im [Database Designer](database-designer-de) unter
dem Eintrag "Verknüpfungs-Typen" in jeder [Unit](unit-de) erstellt und dann
zusammen mit der gewählten
[Verknüpfungstechnologie](verknüpfungstechnologien) für
[Verknüpfungsregeln](verknüpfungsregeln) verwendet werden.
Verknüpfungstypen, die in einer Unit angelegt sind, besitzen trotzdem
Gültigkeit für die ganze Datenbank (unabhängig von der Unit-Hierarchie)
und werden mit-kopiert, wenn man eine ganze Unit kopiert.

![](//images.ctfassets.net/utx1h0gfm1om/3tNSenJSVO2aIwkOm8QCCA/8c21937b7fde613618b168ea4cd28dba/1017821.png)

*Einen neuen Verknüpfungstyp erstellen*

### Einen Verknüpfungstyp erstellen

Um einen neuen Verknüpfungstyp zu erstellen, gehen Sie wie folgt vor:

-  Selektieren Sie den Punkt "Verknüpfungs-Typen" in einer [Unit](unit-de)
    im [Database Designer](database-designer-de).
-  Wählen Sie "Neu" aus dem Kontextmenü oder verwenden Sie den Button
    "Neu" in der Menüleiste.
-  Ein [Eigenschafts-Fenster](eigenschaften-dialogfenster) zur
    Erstellung eines neuen Verknüpfungstyps erscheint.
-  Folgende [Attribute](attributgruppe-und-attribut) stehen für
    Verknüpfungstypen zur Verfügung:
    -  Name  
        Geben Sie hier einen Namen für den Verknüpfungstyp ein; dieser
        Name, wird dann zur Kategorisierung und Gruppierung von
        Verknüpfungen im
        [Eigenschafts-Fenster](eigenschaften-dialogfenster) von
        [Objekten](objekt) verwendet.
    -  Ist direkt gerichtet  
        Dieses Feld sollte nur dann auf "Wahr" gesetzt werden, wenn Sie
        den Verknüpfungstyp für die direkte oder indirekte
        [Verknüpfungstechnologie](verknüpfungstechnologien) verwenden
        möchten. In diesem Fall müssen die zusätzlichen Felder "Direkt
        gerichteter Name" und "Entgegengesetzter Name" ausgefüllt
        werden. 
        -  Direkt gerichteter Name  
            Dieses Feld enthält die Bezeichnung für den Verknüpfungstyp
            in Richtung des Objekts der Zielklasse (z.B. "verknüpft zu"
            o.Ä.), die im
            [Eigenschafts-Fenster](eigenschaften-dialogfenster) von
            [Objekten](objekt) verwendet wird.
        -  Entgegengesetzter Name  
            Dieses Feld enthält die Bezeichnung für den Verknüpfungstyp
            in entgegengesetzter Richtung des Objekts der Zielklasse
            (z.B. "verknüpft von" o.Ä.), die im
            [Eigenschafts-Fenster](Eigenschaften_Dialogfenster_) von
            [Objekten](Objekt) verwendet wird.
    -  Automatische Assoziationsdaten  
        Dieses Attribut dient dazu, Objekte der Assoziationsklasse
        zwischen zwei zu verknüpfenden Objekten automatisch anzulegen.  
        Wenn das Attribut auf "Falsch" gesetzt ist, dann können Sie
        Objekte mit diesem Verknüpfungstyp ganz normal (also entweder
        mit einer Assoziationsklasse, oder ohne Assoziationsklasse)
        verknüpfen. Wenn Sie so für eine (z.B. direkte)
        [Verknüpfungstechnologie](Verknüpfungstechnologien) ein
        Assoziationsobjekt verwenden möchten, wird es nur dann in die
        Verknüpfung übernommen, wenn Sie dieses Objekt explizit auf das
        Diagramm legen.  
        Wenn das Attribut auf "Wahr" gesetzt ist, dann müssen Sie
        zwingend eine Assoziationsklasse auswählen. Wenn Sie dann zwei
        Objekte mit einem Verbinder verknüpfen, wird der angelegte
        Verbinder automatisch zu der vorher ausgewählten
        Assoziationsklasse gehören. Das heisst, ein neues Objekt der
        Assoziationsklasse wird automatisch angelegt, egal welchen
        Verbinder Sie nehmen.

        -  AutoInitializationScript  
            Wenn das Attribut "Automatische Assoziationsdaten" auf Wahr
            gesetzt ist und eine Assoziationsklasse ausgewählt wurde,
            kann man das Attribut AutoInitializationScript ausfüllen.
            Dieses Attribut dient der Hinterlegung von
            [Formeln](attributtyp-formel), die z.B. verwendet werden
            können, um die Assoziationsdaten automatisch zu definieren.

    -  Assoziationsklasse  
        Mit diesem Auswahlfeld können Sie eine dritte [Klasse](klasse)
        als Assoziationsklasse für die Verknüpfung von
        [Objekten](objekt) angeben. Deren Objekte werden dann
        herangezogen, um die Verknüpfung mit zusätzlichen Informationen
        zu beschreiben. Eine Assoziationsklasse kann sowohl bei der
        [indirekten Verknüpfung](beispiel-zur-indirekten-verknüpfungstechnologie),
        als auch zusammen mit der
        [RACI-Technologie](beispiel-zur-raci-technologie)
        verwendet werden. Für die Direkte Verknüpfungstechnologie, wird
        der Verbinder automatisch als Assoziationsobjekt anerkannt, wenn
        er ein process4.biz-Objekt ist. Eine Assoziationsklasse kann
        immer aus der Unit ausgewählt werden, in der auch der
        entsprechende Verknüpfungstyp angelegt wurde, oder auch von
        darüber liegenden Units vererbt werden.

-  Ein Klick auf "Ok" legt den so konfigurierten Verknüpfungstyp an.

------------------------------------------------------------------------




<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>