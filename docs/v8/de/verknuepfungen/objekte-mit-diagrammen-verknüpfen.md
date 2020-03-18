-   [Ein Objekt mit einem Diagramm verknüpfen](#ein-objekt-mit-einem-diagramm-verknüpfen)
    -   [Ein Objekt mit einem neuen Diagramm verknüpfen](#ein-objekt-mit-einem-neuen-diagramm-verknüpfen)
-   [TreeLink und ReferenceLink](#treelink-und-referencelink)
    -   [TreeLink](#treelink)
    -   [ReferenceLink](#referencelink)
-   [Einschränken der Verknüpfung zwischen Objekt und Diagramm](#einschränken-der-verknüpfung-zwischen-objekt-und-diagramm)
    -   [Erlaube Verknüpfung zu Diagramm](#erlaube-verknüpfung-zu-diagramm)
    -   [Aktivierte Diagramm Klassen](#aktivierte-diagramm-klassen)

------------------------------------------------------------------------

Verknüpfungen zwischen [Objekten](Objekt) und [Diagrammen](Diagramm),
können zur Navigation zwischen Diagrammen verwendet werden und dienen
damit primär der Strukturierung des Modells. Das beeinflusst unter
anderem auch die im Navigationsfenster des [Repository](Repository)
angezeigte hierarchische Baumstruktur (= der "Baum"): dieser Baum, wird
auf den individuellen [Verknüpfungen](Verknüpfungen) zwischen Objekten
und Diagrammen basierend erstellt und verändert sich auch
dementsprechend.

Auf [Diagrammen](Diagramm) im [Graphical Visio
Modeler](Graphical_Visio_Modeler) und optional auch in der
[Web-Publikation](Arbeiten_mit_der_Web-Publikation), werden
Verknüpfungen zwischen Objekten und Diagrammen durch
[Smart-Tags](Graphical-Visio-Modeler_1015903.html#GraphicalVisioModeler-Smart-Tags)
repräsentiert. Wenn ein Objekt mit einem Diagramm verknüpft wurde, so
wird für jede grafische (= modellierte, also auf einem Diagramm
vorhandene) Instanz des Objekts ein Smart-Tag angezeigt, das jene
Diagramme auflistet, mit denen das Objekt verknüpft wurde.

### Ein Objekt mit einem Diagramm verknüpfen

Um ein bestehendes [Objekt](Objekt) mit einem bestehenden
[Diagramm](Diagramm) zu verknüpfen, gehen Sie wie folgt vor:

1.  Markieren Sie das gewünschte Objekt im [Repository](Repository).
2.  Öffnen Sie das Kontextmenü mit der rechten Maustaste.
3.  Wählen Sie die Funktion "Verknüpfen zu Diagramm".
4.  Der Reiter "Diagrammverknüpfungen" im
    [Eigenschafts-Fenster](Eigenschaften_Dialogfenster_) des gewählten
    Objekts wird geöffnet.
    1.  Im oberen Fensterteil, werden die bestehenden Verknüpfungen zu
        Diagrammen angezeigt.
    2.  Im unteren Fensterteil, werden die Diagramme angezeigt, die mit
        dem gewählten Objekt verknüpft werden können.
5.  Wählen Sie das Diagramm aus, das mit dem eingangs gewählten Objekt
    verknüpft werden soll.
6.  Klicken Sie auf den Button "Verknüpfen".
7.  Die Verknüpfung wird angelegt und im oberen Fensterteil angezeigt.  
    Die Spalte "Im Baum anzeigen", zeigt an, ob es sich bei der
    Verknüpfung um einen TreeLink oder um einen ReferenceLink handelt.
    Siehe dazu:  [TreeLink und
    ReferenceLink](#ObjektemitDiagrammenverknüpfen-TreeLinkundReferenceLink)
8.  Schließen Sie das Eigenschafts-Fenster mit einem Klick auf "OK".

Alternativ zu dieser Vorgangsweise, können Verknüpfungen zwischen
Diagrammen und Objekten auch über den Reiter "Objekt Verknüpfungen" im
Eigenschafts-Fenster eines Diagramms hergestellt werden. Hier kann ein
Objekt gewählt werden, das mit dem jeweiligen Diagramm verknüpft werden
soll. Falls das gewählte Objekt bereits mit anderen Diagrammen verknüpft
ist, werden diese Verknüpfungen auch angezeigt.

#### Ein Objekt mit einem neuen Diagramm verknüpfen

Um ein bestehendes [Objekt](Objekt) mit einem neuen [Diagramm](Diagramm)
zu verknüpfen, gehen Sie wie folgt vor:

1.  Markieren Sie das gewünschte Objekt im [Repository](Repository).
2.  Öffnen Sie das Kontextmenü mit der rechten Maustaste.
3.  Wählen Sie die Funktion "Neues verknüpftes Diagramm".
4.  Wählen Sie das [Template](Shapes_Stencils_Templates) für das neu zu
    erstellende Diagramm.
5.  Ein [Eigenschafts-Fenster](Eigenschaften_Dialogfenster_) für das
    neue Diagramm erscheint, die Diagrammattribute können editiert
    werden.
6.  Nach einem Klick auf "OK" öffnet sich das so neu erstellte Diagramm
    und steht zur Modellierung bereit.  
      

Hinweis:

Über die Funktion "Neues verknüpftes Diagramm" erstellte Verknüpfungen
zwischen Objekt und Diagramm, werden standardmäßig als TreeLink
gewertet. Falls dies nicht gewünscht ist, muss der jeweilige TreeLink
händisch aufgehoben werden.

### TreeLink und ReferenceLink


![](//images.ctfassets.net/utx1h0gfm1om/3q2bKiaWXmMCueeaIIU8ck/a5c8e45968d8faf40c039bedbef3e4c7/1018702.png)

*Anzeige der Diagrammverknüpfungen im Eigenschafts-Fenster eines
Objekts.*

 

![](//images.ctfassets.net/utx1h0gfm1om/1S3QfcD0jWSceQwsq8COyC/85a51185e9f6f32aee6e48889f3a868f/1018711.png)

*Ein neues verknüpftes Diagramm erstellen.*

Über die Checkbox in der Spalte "Im Baum anzeigen", die für
[Verknüpfungen](Verknüpfungen) zwischen Objekten und Diagrammen zur
Verfügung steht, wird gesteuert, ob es sich bei der jeweiligen
Verknüpfung um einen TreeLink, oder um einen ReferenceLink handelt.

#### TreeLink

-   TreeLinks sind Verknüpfungen zwischen Objekten und Diagrammen, die
    den Baum beeinflussen.
-   Damit eine Verknüpfung als TreeLink behandelt wird, muss die
    Checkbox "Im Baum anzeigen" angehakt werden.

Wird eine Verknüpfung zwischen einem Objekt "A" und einem Diagramm "B"
als TreeLink erstellt, bedeutet das, dass das mit dem Objekt "A"
verlinkte Diagramm "B" hierarchisch eine Ebene unter dem Diagramm "15"
angezeigt wird, auf dem das Objekt "A" verwendet wird.

Falls es mehrere Diagramme gibt, auf denen das Objekt "A" verwendet
wird, kann durch das Anhaken der Checkbox "Im Baum anzeigen" pro
Diagramm entschieden werden, ob die Verknüpfung ein TreeLink sein soll,
oder nicht.

#### ReferenceLink

-   ReferenceLinks sind Verknüpfungen zwischen Objekten und Diagrammen,
    die den Baum nicht beeinflussen.
-   Damit eine Verknüpfung als ReferenceLink behandelt wird, muss die
    Checkbox "Im Baum anzeigen" leer bleiben.

Wird eine Verknüpfung zwischen einem Objekt "A" und einem Diagramm "B"
als ReferenceLink erstellt, bedeutet das, dass die Verknüpfung zwischen
dem Objekt "A" und dem Diagramm "B" ausschließlich in den Diagramm- bzw.
Objekt-Eigenschaften angezeigt wird. Das Objekt referenziert bzw.
verlinkt also lediglich das Diagramm (oder umgekehrt) und die
Verknüpfung wird nicht für den Baum berücksichtigt.

Falls es mehrere Diagramme gibt, auf denen das Objekt "A" verwendet
wird, kann durch das Leerlassen der Checkbox "Im Baum anzeigen" pro
Diagramm entschieden werden, ob die Verknüpfung ein ReferenceLink sein
soll, oder nicht.

### Einschränken der Verknüpfung zwischen Objekt und Diagramm

![](//images.ctfassets.net/utx1h0gfm1om/7am850Tw64UoIS6gaSmeOM/6d736f314d15c2025989e561f45ad568/1018719.png)

*Beispiel TreeLink: Prozesslankarte -&gt; Kundenprüfung (hierarchisch absteigend)*

 

![](//images.ctfassets.net/utx1h0gfm1om/6cjtc3OzfyyGaqkywmGAWS/b7ad666dbece61391ee2123e60e21638/1018708.png)

*Beispiel ReferenceLink: Prozesslankarte -&gt; Service (keine hierarchische Beziehung)  
*

Über folgende Systemattribute einer [Klasse](Klasse) im [Database
Designer](Database_Designer), können Verknüpfungen zwischen Objekten und
Diagrammen eingeschränkt werden.

#### Erlaube Verknüpfung zu Diagramm

Wird dieses Attribut für eine Klasse auf "Falsch" gesetzt, können
Objekte dieser Klasse nicht (mehr) mit Diagrammen verknüpft werden.

#### Aktivierte Diagramm Klassen

Hier kann definiert werden, dass Objekte der jeweiligen Klasse
ausschließlich mit Diagrammen einer bestimmten Diagramm-Klasse verknüpft
werden dürfen (Mehrfachauswahl ist möglich).

So kann im Hinblick auf ein konsistentes Modell zum Beispiel erreicht
werden, dass Objekte der Klasse "Prozess" nur mit Diagrammen der
Diagramm-Klasse "Prozess", welche wiederum
das [Template](Shapes_Stencils_Templates) *Prozess.vstx* verwendet,
verknüpft werden dürfen.

