-   [Suche](#suche)
-   [Filter](#filter)
-   [Unit Filter](#unit-filter)
    -   [Vererbung](#vererbung)
    -   [Diagrammverwendung](#diagrammverwendung)
    -   [Genehmigungsmanagement](#genehmigungsmanagement)
    -   [Sichtbarkeit](#sichtbarkeit)

### Suche

Sie können die Suchfunktion für Objekte und Diagramme im
[Repository](repository-de) und im [Little
Repository](graphical-visio-modeler-de),
sowie im [Database Designer](database-designer-de) verwenden. Wenn Sie
einen Text im Suchfeld eintragen, werden Elemente nach diesem Text
gefiltert und Ergebnisse werden gelb markiert.

Sie können ein neues oder bereits existierendes
[Attribut](attributgruppe-und-attribut) jeder Zeit für die Suche hinzufügen
oder die Suchfunktion dafür ausschalten. Diese Funktionalität, wird über
das System-Attribut "Inkludiere in Textsuche" gesteuert; Standardwert
des Attributs ist "Wahr".

### Filter

Inhalte können im Repository/Designer nach verschiedenen Parametern
gefiltert werden. Klicken Sie dazu auf das Symbol "Filter". So können
Sie nach entsprechenden Kriterien (z.B. Klasse, Unit, etc.) und/oder
selbst gewählten Zeichenketten filtern.

-   Sie können auch die vom System definierten Felder &lt;nicht leer&gt;
    und &lt;leer&gt; verwenden, um nach allen passenden Attributfeldern
    zu suchen.
-   Jede Spalte der Tabelle (= Attribut eines Objekts), kann separat
    gefiltert werden.
-   Es können auch verschiedene Spaltenfilter gleichzeitig gesetzt
    werden.
-   Große und kleine Buchstaben, gelten als ein und das selbe Symbol.

<div class="success">

Jedes Objekt hat auch ein Attribut namens "[Unit](unit-de)", damit Sie
Objekte auf den jeweiligen Ebenen auch rasch nach ihrer Ursprungs-Unit
sortieren können. Zur Sortierung klicken Sie auf den Spaltenkopf und ein
kleines Symboldreieck informiert über die Sortierreihenfolge der
jeweiligen Spalte.
</div>

### Unit Filter

Der Unit Filter, bietet die Filter für die folgenden Kategorien an:

#### Vererbung

-   Ausblenden der Elemente der Parent Units  
    Alle aus höheren Hierarchieebenen geerbten Elemente (Objekte und
    Diagramme), werden ausgeblendet. Das ist nützlich, wenn Sie sich in
    einer tieferen Hierarchieebene befinden, in der es sehr viele
    "geerbte" Objekte gibt.
-   Ausblenden der Elemente der Child Units  
    Alle Elemente (Objekte und Diagramme) mit Ursprung in den Units aus
    tieferen Hierarchieebenen, werden ausgeblendet. Das ist nützlich,
    wenn Sie sich aktuell in einer höheren Hierarchieebene befinden und
    dort nicht alle aus tieferen Units vererbten Objekte sehen wollen.
-   Ausblenden der Diagramme aus Parent-Units im Baum  
    Alle aus höheren Hierarchieebenen geerbten Diagramme werden im
    Diagramm-Baum ausgeblendet.
-   Ausblenden der Diagramme aus Child-Units im Baum  
    Alle Diagramme mit Ursprung in den Units aus tieferen
    Hierarchieebenen werden im Diagramm-Baum ausgeblendet.

------------------------------------------------------------------------

![](//images.ctfassets.net/utx1h0gfm1om/2TikPtbWc0eO2uMMcgwY6m/f1d7461314f18e3097f24aeebacd9640/1018015.png)

*Filter*

![](//images.ctfassets.net/utx1h0gfm1om/2u3h02cAGwQ4wc08comYe0/65b98d931e0d7de6eee49c09d3f78126/1018013.png)

*Der Unit Filter im [Repository](repository-de)  
*

#### Diagrammverwendung

-   Ausblenden der Objekte, die auf Diagrammen verwendet werden  
    Blendet alle Objekte aus, die auf Diagrammen verwendet werden. Diese
    Funktion ist nützlich, wenn Sie z.B. alle Objekte ändern/löschen
    wollen, die nicht auf Diagrammen in Verwendung sind.
-   Ausblenden der Objekte, die nicht auf Diagrammen verwendet werden  
    Blendet alle Objekte aus, die nicht auf Diagrammen verwendet werden.

#### Genehmigungsmanagement

-   Ausblenden aller genehmigten Objekte und Diagramme  
    Diese Funktion kann zum schnellen Auffinden aller Objekte und
    Diagramme eingesetzt werden, die bisher noch nicht durch eine dazu
    berechtige Person genehmigt wurden.
-   Ausblenden aller nicht genehmigten Objekte und Diagramme  
    Diese Option ermöglicht es, alle Objekte und Diagramme anzuzeigen,
    die ereits genehmigt wurden und damit freigegeben sind.
-   Ausblenden bestimmter nicht genehmigter Objekte und Diagramme  
    Mit Hilfe dieser Funktion, können nicht genehmigte Objekte und
    Diagramme einer bestimmten Kategorie ausgeblendet werden.

Siehe dazu: [Genehmigungsmanagement](genehmigungsmanagement)

#### Sichtbarkeit

-   Beide Optionen ("Zeige ausgeblendete Elemente" und "Zeige nur
    ausgeblendete Elemente") sind deaktiviert  
    Es werden ausschließlich sichtbare Elemente im
    [Repository](repository-de) und im [Database
    Designer](database-designer-de) angezeigt.
-   Zeige ausgeblendete Elemente  
    Alle ausgeblendeten Elemente werden (ausgegraut) zusammen mit den
    sichtbaren Elementen angezeigt.
-   Zeige nur ausgeblendete Elemente  
    Nur ausgeblendete Elemente werden angezeigt.

Siehe auch: [Verwalten der Sichtbarkeit](verwalten-der-sichtbarkeit)


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>