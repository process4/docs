-   [Ein neues Template erstellen](#ein-neues-template-erstellen)
    -   [Diagramm- oder Unit-Attribute auf dem Template anzeigen](#diagramm-oder-unit-attribute-auf-dem-template-anzeigen)
        -   [Statischen Text zusammen mit einem Attribut anzeigen](#statischen-text-zusammen-mit-einem-attribut-anzeigen)
        -   [Datengrafiken](#datengrafiken)
    -   [Templates in mehreren Sprachen erstellen](#templates-in-mehreren-sprachen-erstellen)
-   [Bestehende Templates bearbeiten](#bestehende-templates-bearbeiten)

------------------------------------------------------------------------

### Ein neues Template erstellen

1.  Erstellen Sie eine neue leere Zeichnung in Visio.
2.  Fügen Sie alle benötigten Elemente im Hintergrund des Diagramms ein
    (der Hintergrund wird im Zeichnungsexplorer geöffnet).  
    1.  Um die exakte Positionierung der Shapes auch bei variabler
        Diagrammgröße sicherzustellen, verwenden Sie das Visio
        ShapeSheet. Dort können Sie relative Positionen (= relativ zur
        Seitengröße) definieren, die das jeweilige Shape - auch bei vom
        Template abweichender Diagrammgröße - zuverlässig an der
        richtigen Stelle halten.  
        **Beispiel**: ein Shape (z.B. das Logo) soll immer in der
        rechten oberen Ecke angezeigt werden, egal wie breit das
        Diagramm wird. Es wird ein A4-Template im Querformat angenommen;
        folgende Werte müssten dafür im ShapeSheet hinterlegt werden:
        -   PinX: *ThePage!PageWidth-3 cm*
        -   PinY: *ThePage!PageHeight-2.5 cm*

            Achtung:

            Sind relative Positionen für ein Shape gesetzt worden, gehen
            diese Verloren, so bald das entsprechende Shape nicht über
            das ShapeSheet, sondern z.B. manuell mit der Maus oder mit
            den Cursortasten verschoben wird!
3.  Wechseln Sie zurück in den Vordergrund der Visio-Zeichnung.

    Achtung:

    Wenn ein Template mit geöffnetem Hintergrund gespeichert wird,
    bedeutet dass, das Sie künftig auch im Hintergrund modellieren. Dies
    kann zu Problemen und zu unerwartetem Verhalten führen. Stellen Sie
    daher bitte unbedingt sicher, dass Sie vor dem Speichern des
    Templates immer den Vordergrund im Zeichnungsexplorer ausgewählt
    haben!

4.  Öffnen Sie alle benötigten Stencils (= Schablonen) für dieses
    Template.
5.  Speichern Sie das Template als solches (\*.vstx) ab.
6.  Wenn nun ein neues [Diagramm](Diagramm) mit diesem Template erstellt
    wird, werden automatisch Ihr Layout und die gewählten Stencils
    verwendet.


![](//images.ctfassets.net/utx1h0gfm1om/5WbumS8RhK8IkiE6MiSKMg/0511e3519cd64ed81e1594b971a38eb4/1018006.png)

*Das ausgewählte Shape mit Diagramm- oder Unit-Attributen ausstatten und diese so auf dem Template anzeigen*

#### Diagramm- oder Unit-Attribute auf dem Template anzeigen

Bei der Erstellung der Diagrammvorlage (\*.vstx-Datei) kann man auf den
Visio-Shapes diverse process4.biz-[Attribute](Attributgruppe_Attribut)
anzeigen lassen. Wenn Sie dann auf Basis der Vorlage
[Diagramme](Diagramm) erstellen, werden automatisch die entsprechenden
Attributwerte auf den Shapes angezeigt.

Um diese Shapes automatisch zu erstellen, sollen Sie in process4.biz
eingeloggt sein. Öffnen Sie dann in Visio eine Vorlage, erstellen Sie
ein Shape, und wählen Sie in dessen Kontextmenü unter "Ausstatten mit
process4.biz-Attributen" eine der folgenden Funktionen aus:

-   Statte das Shape mit Unit-Attributen von process4.biz aus  
    Sie können das Shape mit beliebigen Eigenschaften der Unit
    ausstatten, in der das Diagramm erstellt wird.

-   Statte das Shape mit Diagramm-Attributen von process4.biz aus  
    Sie können das Shape mit beliebigen Diagrammeigenschaften, wie Name,
    Eigentümer, Erstellt am etc. auf einem Diagramm automatisch anzeigen
    lassen.
-   Markiere das Shape als Platzhalter für den Diagramm-NAMEN  
    Wählen Sie diese Option aus, wenn Sie den Namen des Diagramms auf
    dem Shape anzeigen wollen (die Namenanzeige kann auch manuell im
    ShapeSheet als Shape Data Feld "p4b\_diagram\_Name" angelegt
    werden). Wenn Sie diese Option auswählen, wird der Wert als Text im
    Shape angezeigt.
-   Markiere das Shape als Platzhalter für den PARENT-Diagrammnamen  
    Wählen Sie diese Option aus, wenn Sie den Namen des obergeordneten
    Diagrammes (Parent Diagramm) auf dem Shape anzeigen wollen (der Name
    kann allerdings auch manuell im ShapeSheet als Shape Data Feld
    "p4b\_diagram\_ParentName" angelegt werden). Wenn Sie diese Option
    auswählen, wird der Wert als Text im Shape angezeigt.

 

![](//images.ctfassets.net/utx1h0gfm1om/4VfffbAAEM6qS4QwSICy6/278b0b16e103bf5ef94d783f2f3e05ef/1018005.png)

*Ausstatten eines Shapes mit process4.biz-Attributen*

Um das ausgewählte Attribut als Textfeld auf einem Shape anzuzeigen,
fügen Sie dem entsprechenden Shape ein Feld hinzu:

![](//images.ctfassets.net/utx1h0gfm1om/1lqMwaLrVSMImEIESEk2O6/0c4bc439d45cecf85d5a61084228aeaf/1018004.png)

Im darauffolgenden Fenster, wählen Sie dann aus der Kategorie
"Shape-Daten" den gewünschten Eintrag (= das hinzugefügte Attribut) aus.

Im Dialogfenster zum Ausstatten eines Shapes mit Diagramm- oder
Unit-Attributen, ist es nicht nur möglich, bestehende
[Attribute](Attributgruppe_Attribut) auszuwählen: Sie können hier direkt
- ohne den Umweg über den [Database Designer](Database_Designer) - neue
Attribute anlegen oder bestehende Attribute bearbeiten. (Achtung: dazu
sind Design-Rechte erforderlich).

Hinwies:

Die einem [Shape](Shapes_Stencils_Templates) hinzugefügten
[Attribute](Attributgruppe_Attribut), werden oftmals erst nach dem
Speichern des Diagramms angezeigt.

##### Statischen Text zusammen mit einem Attribut anzeigen

Es ist auch möglich, process4.biz-[Attribute](Attributgruppe_Attribut)
zusammen mit einem statischen Beschreibungstext auf dem Shape
darzustellen.

Nach dem erfolgreichen Hinzufügen eines Attributs zu einem Shape, öffnen
Sie dazu das ShapeSheet. Suchen Sie dort nach der Tabelle "Text Fields"
und geben Sie in das Feld "Value" für das entsprechende Attribut
folgendes ein:

``` java
="Klasse: "&Prop.p4b_diagram_ClassID
```

Somit erreichen Sie nicht nur die Anzeige der [Klasse](Klasse) des
jeweiligen Diagramms, sondern haben auch noch eine Erklärung des
angezeigten Attributwerts miteingebunden.

Die selbe Syntax, lässt sich natürlich auch auf alle anderen einem Shape
hinzugefügten Attribute anwenden.

![](//images.ctfassets.net/utx1h0gfm1om/4cWUsWKNrGiwgA0AWoiGKo/1fc277282264ac7d164184b23390644e/1017794.png)

*Ein Textfeld im ShapeSheet*

##### Datengrafiken

Um das Attribut als Shape-Datengrafik anzuzeigen, wählen Sie im
Kontextmenü des entsprechenden Shapes die Funktion "Daten" und dann
"Datengrafik bearbeiten" aus. Hier definieren Sie die Sicht auf die
Datengrafik (diese kann Text, ein Datenbalken, ein Icon oder eine Farbe,
je nach Wert sein). Siehe dazu: [Anzeigen von Attributen als
Visio-Datengrafik](Anzeigen_von_Attributen_als_Visio-Datengrafik)

#### Templates in mehreren Sprachen erstellen

Um Diagramm-Templates in verschiedenen Sprachen zu erstellen bzw.
verfügbar zu machen, gehen Sie wie folgt vor:

1.  Die Templates sollten in einer nach der Sprache sortierten
    Ordnerstruktur landen  
    Hier ein entsprechendes Beispiel:

    ``` java
    Stencils\
        de\
            RACI.vstx
            RACI.vssx
        en\
            RACI.vstx
            RACI.vssx
    ```

2.  Namen der sprachspezifischen Ordner sind zum Beispiel "**en**" und
    "**de**"
3.  Die Templates der verschiedenen Sprachen sollten den exakt gleichen
    Namen haben

Wenn nun bei aktiver englischer Inhaltssprache (siehe
[Client-Einstellungen](Client-Einstellungen)) ein neues
[Diagramm](Diagramm) erstellt wird, wird dafür automatisch das englische
Template mit dem entsprechenden Stencil verwendet. Bei einer
nachträglichen Sprachänderung zurück auf Deutsch, wird auch das Template
inkl. des Stencils in Deutsch geladen, so bald das Diagramm erneut
geöffnet wird.

### Bestehende Templates bearbeiten

Um bestehende Templates zu bearbeiten, gehen Sie wie folgt vor:

1.  Öffnen Sie das entsprechende Template in Visio unter "Datei" -&gt;
    "Öffnen"
    1.  Falls Sie Ihre Templates nicht lokal oder auf einem
        Netzwerk-Sahre, sondern im SQL-Server oder in SharePoint
        gespeichert haben (siehe dazu
        [Datenbank-Einstellungen](Datenbank-Einstellungen)), müssen
        diese vorher im [Database Designer](Database_Designer) (über das
        Kontextmenü der entsprechenden [Unit](Unit)) zur Bearbeitung aus
        der Datenbank ausgecheckt werden.
2.  Bearbeiten Sie das Template entsprechend Ihrer Anforderungen
3.  Nach erfolgter Bearbeitung des Templates, stellen Sie bitte
    unbedingt sicher, dass Sie den ggf. geöffneten Diagramm-Hintergrund
    wieder geschlossen haben.
4.  Speichern Sie das Template ab
    1.  Falls Sie mit Templates aus der Datenbank oder aus SharePoint
        gearbeitet haben, checken Sie diese bitte wieder ein.
5.  Führen Sie den Wizard zum [Aktualisieren von
    Diagrammen](Aktualisieren_von_Diagrammen) aus, um Ihre Änderungen
    auf bereits bestehende Diagramme anzuwenden.

