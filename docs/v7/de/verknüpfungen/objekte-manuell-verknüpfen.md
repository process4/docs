-   [Neue manuelle Verknüpfung erstellen](#neue-manuelle-verknüpfung-erstellen)
-   [Bestehende Verknüpfungen
    aufheben](#bestehende-verknüpfungen-aufheben)
-   [Objekte mit Shift + Drag & Drop verknüpfen](#objekte-mit-shift--drag--drop-verknüpfen)
    

In der Regel werden die [Objekte](objekt) automatisch, also durch die
Modellierung direkt auf [Diagrammen](diagramm) im [Graphical Visio
Modeler](graphical-visio-modeler), verknüpft.

### Neue manuelle Verknüpfung erstellen

Falls Sie Objekte manuell (z.B. im [Repository](repository-de)) verknüpfen
wollen, ohne dass es dazu eine grafische Darstellung der beiden
verknüpften Objekte geben soll, gehen Sie wie folgt vor:

1.  Markieren Sie das gewünschte Objekt.
2.  Öffnen Sie das Kontextmenü mit der rechten Maustaste.
3.  Wählen Sie die Funktion "Verknüpfen zu Objekt".
4.  Der Reiter "Objekt Verknüpfungen" im
    [Eigenschafts-Fenster](eigenschaften-dialogfenster) des gewählten
    Objekts wird geöffnet.
    1.  Im oberen Fensterteil, werden die bestehenden Verknüpfungen,
        sortiert nach [Verknüpfungstypen](verknüpfungstypen), angezeigt.
    2.  Im unteren Fensterteil, werden die Objekte angezeigt, die mit
        dem gewählten Objekt verknüpft werden können.  
        Falls für die [Klasse](klasse), zu der das gewählte Objekt
        gehört, keine entsprechende
        [Verknüpfungsregel](verknüpfungsregeln) (= zumindest eine
        Verknüpfungsregel mit [manueller
        Verknüpfungstechnologie](verknüpfungstechnologien))
        vorhanden ist, bleibt dieser Fensterteil leer.
5.  Wählen Sie das Objekt aus, das mit dem eingangs gewählten Objekt
    verknüpft werden soll.
6.  Klicken Sie auf den Button "Verknüpfen".
7.  Wählen Sie den gewünschten [Verknüpfungstyp](verknüpfungstypen) für
    die Verknüpfung aus.  
    Ggf. muss auch ein Assoziationsobjekt gewählt werden; wenn das der
    Fall ist, erweitert sich das Dialogfeld und bietet entsprechende
    Optionen an.
8.  Nach der Bestätigung mit "OK", wird die Verknüpfung angelegt und in
    Folge dessen auch im oberen Fensterteil des Reiters "Objekt
    Verknüpfungen" angezeigt.
9.  Schließen Sie das Eigenschafts-Fenster mit einem Klick auf "OK".

### Bestehende Verknüpfungen aufheben

Um bestehende manuelle angelegte Verknüpfungen aufzuheben, gehen Sie wie
folgt vor:

1.  Öffnen Sie das [Eigenschafts-Fenster](eigenschaften-dialogfenster)
    des gewünschten Objekts.
2.  Wählen Sie den Reiter "Objekt Verknüpfungen".
3.  Selektieren Sie die gewünschte Verknüpfung im oberen Fensterteil.  
    Der eingetragene, veränderbare Wert in der Spalte "Löschverhalten",
    gibt Aufschluss darüber, ob eine Verknüpfung derzeit manuell
    gelöscht werden kann, oder nicht:
    1.  Ist für die gewünschte Verknüpfung kein Eintrag vorhanden, kann
        Sie manuell aufgehoben werden. Der Button "Verknüpfung trennen"
        ist aktiv.
    2.  Ist für die gewünschte Verknüpfung "Automatisch" eingetragen,
        kann sie nicht manuell gelöscht werden. Der Button "Verknüpfung
        trennen" ist in diesem Fall nicht aktiv.
4.  Mit einem Klick auf den Button "Verknüpfung trennen" wird die
    gewählte Verknüpfung entfernt.

### Objekte mit Shift + Drag & Drop verknüpfen


![](//images.ctfassets.net/utx1h0gfm1om/1JHMDR1WGoEaCM8yeQiWMM/91f339197fb441517f7fa9b6e0e85387/1018635.png)

*Der Reiter "Objekt Verknüpfungen" im Eigenschafts-Fenster eines
Objekts.*

Objekte können (auf einem [Diagramm](diagramm) im [Graphical Visio
Modeler](graphical-visio-modeler-de)) auch durch drücken der Shift-Taste
und herausziehen aus dem [Little
Repository](graphical-visio-modeler-de)
verknüpft werden.

Wählen Sie dazu ein existierendes [Objekt](objekt) aus dem Little
Repository und ziehen Sie es bei gedrückter Shift-Taste auf ein anderes
Objekt auf dem Diagramm. Dadurch erscheint ein Fenster, in dem Sie den
[Verknüpfungstyp](verknüpfungstypen) und optional das Assoziationsobjekt
auswählen können.

Zusätzlich dazu, stehen folgende Optionen zur Verfügung:

-   Nur die Verknüpfung selbst, aber kein neues Shape erstellen  
    Siehe dazu: [Nur Verknüpfung](verknüpfungstechnologien)
-   Regel dafür erstellen und nächstes Mal nicht mehr nachfragen  
    Aktiviert man diese Option, wird mit der
    [Verknüpfungstechnologie](verknüpfungstechnologien) "Drag & drop" im
    [Database Designer](database-designer-de) eine entsprechende Regel für
    die verwendeten Klassen erstellt. Wenn man Objekte dieser Klassen
    wieder mit Shift + Drag & Drop verknüpft, erscheint kein Dialog und
    die Verknüpfung wird automatisch erstellt. Sofern diese Option nicht
    aktiviert wurde, erstellt process4.biz zwar eine Verknüpfung
    zwischen den beiden Objekten, aber keine entsprechende Regel im
    Designer. Das Dialogfenster wird auch bei der nächsten Drag &
    Drop-Verknüpfung aufgerufen.  
      


<div class="warning">
  <h3>Achtung:</h3>

Wenn die Schwimlane-Technologie für die beteiligten Klassen bereits
aktiviert ist, werden Objekte darduch automatisch verknüpft. Trotz der
Verwendung von Shift + Drag & Drop, erscheint kein Dialog zur manuellen
Verknüpfung.

</div>

![](//images.ctfassets.net/utx1h0gfm1om/2zfKSHTcIQ4CCGAWSICYeG/945fb8d60bf863f1e2aaef2c6f323a98/1018631.png)

*Dialogfenster einer Drag & Drop Verknüpfung.*

