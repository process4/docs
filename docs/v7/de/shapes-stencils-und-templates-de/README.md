-   [Shape](#shape)
-   [Stencil](#stencil)
-   [Template](#template)
    -   [Individueller Templatepfad pro Unit](#individueller-templatepfad-pro-unit)
    -   [Funktionen zur Verwaltung der Templates](#funktionen-zur-verwaltung-der-templates)

------------------------------------------------------------------------

### Shape

Ein Shape (auf deutsch eine "Form"), ist die grafische Repräsentation
eines [Objekts](Objekt) auf einem [Diagramm](Diagramm).

Shapes können über den Stencil verwaltet werden und passen immer zum
Namen einer [Klasse](Klasse). Somit werden neue Shapes, so bald sie auf
einem Diagramm abgelegt werden, zu einem (neuen oder bestehenden) Objekt
der entsprechenden Klasse.

Siehe dazu auch: 

-   [Erstellen eines neuen
    Master-Shapes](Erstellen_eines_neuen_Master-Shapes)
-   [Master-Shapes mit Attributen
    ausstatten](http://help.process4.biz/confluence/display/DOC/Neue+Master-Shapes+erstellen#NeueMaster-Shapeserstellen-Master-ShapesmitAttributenausstatten)
-   [Zuweisen von mehreren Shapes zur selben
    Klasse](Zuweisen_von_mehreren_Shapes_zur_selben_Klasse)
-   [Zuweisen von anderem Namen für Master-Shape der
    Klasse](Zuweisen_von_anderem_Namen_für_Master-Shape_der_Klasse)
-   [Gruppieren von Master-Shapes](Gruppieren_von_Master-Shapes)
-   [Verwenden von Organigrammen](Verwenden_von_Organigrammen)

### Stencil

Als Stencil (auf deutsch "Schablone"), wird eine thematisch oder
sonstwie zusammengefasste Sammlung von Shapes bezeichnet, die dann im
[Graphical Visio Modeler](Graphical_Visio_Modeler) zur Modellierung
verwendet werden können.

Stencils sind separate Dateien (\*.vss oder \*.vssx), können mit
Templates verbunden werden und stehen dann immer dann zur Verfügung,
wenn ein [Diagramm](Diagramm) mit diesem Template erstellt wird.

### Template

Ein Template (auf deutsch eine "Vorlage"), ist die kundenindividuell
anpassbare Basis neuer [Diagramme](Diagramm). Templates beinhalten die
gewünschten Shapes als Stencil, werden aber als separate Dateien (\*.vst
oder \*.vstx) angelegt und verwaltet. Sie bieten zudem die Möglichkeit,
Diagramme im Hintergrund mit der kundenindividuellen Corporate Identity
(Logo udgl.), mit [Diagrammattributen](Attributgruppe_Attribut) (z.B.
Name, Genehmigungsstatus, etc.), sowie mit benötigten Strukturen der
gewählten Methode (z.B. RACI) zu versehen, bevor dann im Vordergrund
modelliert wird.

Der Standard-Schablonenpfad für neue Diagramme, wird separat für jede
Datenbank in [DbConfig](DbConfig_Verwalten_von_Datenbanken) festgelegt.

Für die Einrichtung der Windows-Verzeichnisse zur Ablage der Stencils
und Templates, ist es sinnvoll, eine Struktur zu verwenden, die der
[Unit](Unit)-Hierarchie im [Repository](Repository) entspricht.
Parallele Ordner dienen der Abgrenzung unterschiedlicher Sprachen oder
Methoden voneinander, Hierarchien ermöglichen die Vererbung der Stencils
und Templates nach unten.

Siehe dazu auch: [Erstellen und anpassen von
Templates](Erstellen_und_anpassen_von_Templates)

Achtung:

Bitte stellen Sie sicher, dass die Templates und Stencils einer
Datenbank im jeweils zur verwendeten Visio-Version passenden Format
gespeichert werden.

#### Individueller Templatepfad pro Unit

Von der Angabe des Standard-Schablonenpfads in DbConfig abweichend,
können Sie im [Database Designer](Database_Designer) auch pro
[Unit](Unit) einen separaten Schablonenpfad definieren, der für die
Diagramme der jeweiligen Unit gelten soll. Beim Anlegen neuer Diagramme
in der entsprechenden Unit, werden dann nur mehr diese Stencils und
Templates verwendet. Durch die Verwendung unterschiedlicher Templates
(inkl. Stencils) pro Unit, ist es so z.B. möglich, verschiedene
Notationen und Modellierungsmethoden in einer gemeinsamen Datenbank auf
Unit-Ebene einzurichten.

![](//images.ctfassets.net/utx1h0gfm1om/6q73eLP21OA8SsEYqaimQy/fd159939c4402c8d4e7e4ff24d2d6f6f/1017800.png)

*Die Shapes im Stencil "RACIVS (DE)"*

*![](//images.ctfassets.net/utx1h0gfm1om/DD3Y5JAlm84AEIm6qmMqm/c93c56a0dab25493df9319df3dd4e360/1017806.png)*

*Ein generisches RACI-Template aus der Demo-Datenbank  
*

Um einen individuellen Templatepfad für eine Unit einzurichten, gehen
Sie wie folgt vor:

1.  Öffnen Sie im Designer das
    [Eigenschafts-Fenster](Eigenschaften_Dialogfenster_) der Unit, bei
    der Sie die Änderung vornehmen wollen
2.  Geben Sie in der [Attributgruppe](Attributgruppe_Attribut)
    "Administration" im [Attribut](Attributgruppe_Attribut)
    "Schablonenpfad" den Pfad ein, der zu den gewünschten Templates und
    Stencils für diese Unit verweist. Dieser Pfad sollte oder relativ
    (".\\Organisation\\") zum Standard-Schablonenpfad, der
    in [DbConfig](DbConfig_Verwalten_von_Datenbanken) definiert wurde,
    angegeben werden. 

    Hinweis:

    Bei der Angabe von Pfaden, die Unterverzeichnisse enthalten, werden
    auch die Stencils und Templates in diesen Unterverzeichnissen zur
    Modellierung in der ausgewählten Unit zur Verfügung stehen. 

3.  Nach einem Logout und erneutem Login in die Datenbank, wird der Pfad
    übernommen und Sie können neue [Diagramm](Diagramm) in dieser Unit
    nun von den gewählten Templates ausgehend erstellen.

#### Funktionen zur Verwaltung der Templates

Im Kontextmenü einer [Unit](Unit) im [Database
Designer](Database_Designer), können Sie unter dem Punkt "Diagramme
Vorlagen" folgende Optionen auswählen:

-   Check-out von der DB (als gesperrte lokale Arbeitsdatei) und
    Check-in in die DB (als entsperrte zentrale Datei in der DB)  
    Diese Optionen sind notwendig, um die in der Datenbank gespeicherten
    Stencils und Templates bearbeiten zu können und werden aktiv, wenn
    Stencils und Templates im der SQL-Server gespeichert werden (siehe
    dazu: [Datenbank-Einstellungen](Datenbank-Einstellungen)). Wählen
    Sie "Check-out von der DB" aus, um Stencils und Templates aus der
    Datenbank auszuchecken, vor anderen Benutzerzugriffen zu sperren und
    zum Bearbeiten freizuschalten. Ein entsprechendes Auswahlfenster
    wird geöffnet, um die Stencils und Templates zur Bearbeitung
    auszuwählen. Nachdem die Bearbeitung abgeschlossen ist, klicken Sie
    auf "Check-in in die DB", um die Stencils und Templates zurück in
    die Datenbank einzuchecken und für andere Benutzer wieder
    freizuschalten.
-   Verwalten lokaler Vorlagen (hinzufügen oder ändern)  
    Diese Option erlaubt es, alle für die Unit definierten Stencils und
    Templates zur Bearbeitung zu öffnen. Ein Auswahlfenster mit allen
    für die Unit definierten Stencils und Templates, bietet weitere
    Optionen zur Bearbeitung:
    -   Ändern des ausgewählten Elements  
        Diese Option erlaubt es, die ausgewählte Schablone oder Vorlage
        in Visio zur Bearbeitung zu öffnen.
    -   Ändern des Duplikats des gewählten Elements  
        Diese Option erlaubt es, eine neue Schablone bzw. Vorlage auf
        der Basis der vorhandenen zu öffnen. Bearbeiten Sie diese
        Schablone oder Vorlage und speichern Sie sie unter einem anderem
        Namen ab, wir ein neues Template erstellt.
-   Wählen des Ordners für die Vorlagen  
    Ermöglicht es, einen anderen Schablonenordner für die ausgewählte
    Unit zu definieren.
-   Öffnen des Ordners für die Vorlagen im Datei-Explorer  
    Öffnet den Standard-Schablonenpfad, der
    in [DbConfig](DbConfig_Verwalten_von_Datenbanken) definiert wurde,
    im Windows Explorer.


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>