

Verknüpfungsregeln werden im [Database Designer](database-designer-de)
verwaltet und verwenden
[Verknüpfungstechnologien](verknüpfungstechnologien) und
[Verknüpfungstypen](verknüpfungstypen), um automatische Verknüpfungen
zwischen [Objekten](objekt) auf [Diagrammen](diagramm) herzustellen.
Verknüpfungsregeln, die die [manuelle
Verknüpfungstechnologie](verknüpfungstechnologien)
verwenden, erlauben es zudem auch, [Objekte manuell zu
verknüpfen](objekte-manuell-verknüpfen).

### Verknüpfungsregeln erstellen

Um eine neue Verknüpfungsregel zu erstellen, gehen Sie wie folgt vor:

1.  Wählen Sie die Sektion "Verknüpfungsregeln" im oberen Bereich des
    Navigationsfensters im [Database Designer](database-designer-de) aus.
2.  Klicken Sie auf den Button "Neu".  
    <div class="success">
  
  Alternativ dazu, können Sie auch die Funktion "Neu" aus dem Kontextmenü der Sektion "Verknüpfungsregeln" verwenden.
        </div>
3.  Ein [Eigenschafts-Fenster](eigenschaften-dialogfenster) für die neu
    anzulegende Verknüpfungsregel erscheint.
4.  Sie können die Verknüpfungsregel durch folgende Attribute
    definieren:
    1.  Name  
        Der gewünschte Name für diese Verknüpfungsregel.
    2.  Von Klasse  
        Bestimmt die Ausgangsklasse der Verknüpfung; kann auf "beliebig"
        gesetzt werden, um die Verknüpfung unabhängig von den
        beteiligten [Klassen](klasse) allgemein gültig zu halten.
    3.  Zu Klasse  
        Bestimmt die Zielklasse der Verknüpfung; Bestimmt die
        Ausgangsklasse der Verknüpfung; kann auf "beliebig" gesetzt
        werden, um die Verknüpfung unabhängig von den beteiligten
        [Klassen](klasse) allgemein gültig zu halten.
    4.  Verknüpfungstyp  
        Legt fest, welcher [Verknüpfungstyp](verknüpfungstypen) für
        diese Verknüpfungsregel verwendet werden soll.
    5.  Verknüpfungstechnologie  
        Legt fest, welche Verknüpfungstechnologie für diese
        Verknüpfungsregel verwendet werden soll.
        1.  Falls "Swimlane" gewählt wurde, steht zusätzlich das
            Attribut [Stapeln aller Shapes](verknüpfungstechnologien)
            zur Verfügung.
        2.  Falls "Drag & drop" gewählt wurde, steht zusätzlich das
            Attribut [Nur Verknüpfung](verknüpfungstechnologien)
            zur Verfügung.
    6.  Regel  
        Definiert, ob diese Verknüpfungsregel erlaubt sein soll; kann
        auf "Verbieten" gesetzt werden, um Verknüpfungen zwischen
        [Objekten](objekt) zu unterbinden.
    7.  Bedingung & Meldung  
        Siehe dazu: [Bedingungen für
        Verknüpfungsregeln](bedingungen-für-verknüpfungsregeln)
    8.  Diagrammklassen  
        Legt fest, auf welche [Diagrammklassen](klasse) die
        Verknüpfungsregel beschränkt werden soll; Mehrfachselektion
        möglich. Wenn keine Auswahl getroffen wird, gilt die
        Verknüpfungsregel für alle Diagrammklassen.
    9.  Priorität  
        Definiert, welche Verknüpfungsregel angewandt werden soll, wenn
        mehrere Verknüpfungsregeln für einen Verknüpfungstyp und für die
        selben Klassen erstellt wurden. Die Verknüpfungsregel mit dem
        niedrigsten Wert in diesem Attribut (= mit der höchsten
        Priorität) kommt zur Anwendung.
5.  Ein Klick auf OK erstellt die neue Verknüpfungsregel.

<div class="info">
  <h3>Hinweis</h3>

Um eine neu erstellte Verknüpfungsregel auf ein bestehendes Diagramm
anzuwenden, muss dieses Diagramm ggf. erneut gespeichert werden.
</div>

#### Alternative Erstellung einer Verknüpfungsregel

Alternativ zum oben angeführten Vorgehen, können Verknüpfungsregeln auch
direkt im [Eigenschafts-Fenster](eigenschaften-dialogfenster) von
[Klassen](klasse) im [Database Designer](database-designer-de) erstellt und
verwaltet werden.

![](//images.ctfassets.net/utx1h0gfm1om/3EnFAQ88k844KOouKWwYM0/39e4bb4a2ffd007008804575a22a00b6/1017618.png)

*Anlegen einer neuen Verknüpfungsregel über das Eigenschafts-Fenster
einer Klasse.*

Wenn diese Herangehensweise gewählt wird, sind folgende Punkte zu
beachten:

-   Es kann kein Name für die Verknüpfungsregel definiert werden.
-   Die Ausgangsklasse der Verknüpfung ist unveränderlich auf jene
    [Klasse](klasse) festgelegt, deren Eigenschafts-Fenster zur
    Erstellung der Verknüpfungsregel geöffnet wurde.
-   Der [Verknüpfungstyp](verknüpfungstypen) kann direkt bearbeitet oder
    neu angelegt werden.

Alle anderen Attribute verhalten sich wie oben beschrieben.


![](//images.ctfassets.net/utx1h0gfm1om/55Vc2AEhi8eCC6Ceka4igO/d1a65b4690668b157f674aabd6f59d94/1017605.png)

*Eine neue Verknüpfungsregel im* *[Database Designer](database-designer-de)* *erstellen.*


![](//images.ctfassets.net/utx1h0gfm1om/52tp68S9XakcOgiKwI6cUw/aa7d142707bfefd62de4029a190bc9b6/1017624.png)

*Der Reiter "Verknüpfungsregeln" im Eigenschafts-Fenster der Klasse
"Aktivität".*

 

