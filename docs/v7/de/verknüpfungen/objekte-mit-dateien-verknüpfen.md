-   [Dateien in die Datenbank hochladen](#dateien-in-die-datenbank-hochladen)
    -   [Kontextmenü von Dateien](#kontextmenü-von-dateien)
-   [Dateien verknüpfen](#dateien-verknüpfen)
    -   [Bestehende Datei-Verknüpfungen aufheben](#bestehende-datei-verknüpfungen-aufheben)

------------------------------------------------------------------------

Im process4.biz ist es möglich, Dateien mit [Objekten](Objekt) und
[Diagrammen](Diagramm) zu verknüpfen.

Dateien können einerseits durch [Attribute](Attributgruppe_Attribut) vom
Typ "Hyperlink" oder "Pfad" referenziert werden, andererseits aber auch
direkt in die Datenbank hochgeladen und dann verknüpft werden. Beide
dieser Varianten, resultieren in einem
[Smart-Tag](Graphical-Visio-Modeler_1015903.html#GraphicalVisioModeler-Smart-Tags)
am jeweiligen Objekt.

### Dateien in die Datenbank hochladen

Um Dateien in die Datenbank hochzuladen, gehen Sie wie folgt vor:

1.  Wählen Sie im [Repository](Repository) die
    [Datei-Klasse](Klasse_1015849.html#Klasse-Datei-Klassen) aus, in der
    die Datei verfügbar gemacht werden soll.  
    Falls Sie keine individuellen Datei-Klassen angelegt haben, steht
    systemseitig die generische [Klasse](Klasse) "File" zur Verfügung.  
    **Achtung**: Falls keine einzige Datei-Klasse vorhanden ist, können
    auch keine Dateien in die Datenbank hochgeladen werden!
2.  Rufen Sie das Kontextmenü (rechte Maustaste), auf und wählen Sie die
    Funktion "Neu".

    1.  Alternative: klicken Sie in der Menüleiste
        im [Repository](Repository) auf die Schlatfläche "Neu".

3.  Der Dialog zur Auswahl der Datei erscheint.  
    Optional können Sie hier mit einer Checkbox entscheiden, dass die
    Datei, ohne wirklich hochgeladen zu werden, in der Datenbank
    referenziert sein soll.  
    ![](//images.ctfassets.net/utx1h0gfm1om/l5DTFX6CqsEgEUU2O6w0q/4e2301c8d9589419a5fc1e2a45a89124/1018337.png)
4.  Das [Eigenschafts-Fenster](Eigenschaften_Dialogfenster_) der
    hochgeladenen bzw. referenzierten Datei erscheint.  
    Folgende [Attribute](Attributgruppe_Attribut) stehen speziell für
    Dateien zur Verfügung:
    1.  Name  
        Hier kann ein (neuer) Name für die Datei vergeben werden;
        standardmäßig wird der Name der in Schritt 3 gewählten Datei
        übernommen.
    2. 	Unit
        Gibt an wo die Datei kreiert wurde in der Unit Hierarchie

    3.  Is Link  
        Gibt gemäß der auswahl in Schritt 3 an, ob die Datei
        hochgeladen, oder referenziert wurde.
    4.  Klasse  
        Hier kann die gewünschte
        [Datei-Klasse](Klasse_1015849.html#Klasse-Datei-Klassen) gewählt
        werden.
    5.  Dateigröße  
        Gibt die Größe der Datei in Byte an.
    6.  Originaler Pfad  
        Gibt jenen Pfad an, von dem aus die Datei hochgeladen wurde.
5.  Mit einem Klick auf "OK", wird die Bearbeitung abgeschlossen. Die
    Datei ist nun direkt in der Datenbank verfügbar.  
      

Hinweis:

Alternativ zu diesem Vorgehen, kann auch die Funktion "Hochladen einer
Datei (und verknüpfen)" aus dem Kontextmenü von Objekten und Diagrammen
gewählt werden. Falls Sie diese Funktion verwenden, wird die
hochgeladene bzw. referenzierte Datei direkt zum gewählten Objekt oder
Diagramm verknüpft.

#### Kontextmenü von Dateien

Im Kontextmenü für die hochgeladenen Dateien, gibt es folgende
datei-spezifische Funktionen:

-   Wiederhochladen einer Datei  
    Falls eine bestehende Datei geändert wurde, kann Sie mit dieser
    Option erneut hochgeladen (und ersetzt) werden.
-   Speichern der Datei(en) auf einem Laufwerk  
    Lädt die gewählte/n Datei/en aus der Datenbank herunter.


![](//images.ctfassets.net/utx1h0gfm1om/5uGd5rRMNGmkyEMsui6sCc/43f1f1a3af83cefe511dd9cd4316d383/1018333.png)

*Das Eigenschafts-Fenster einer hochgeladenen Datei.*

![](//images.ctfassets.net/utx1h0gfm1om/1TTMAhK5rGe8AEG0Wckiko/f3ea097ede8eaefb214e2fd163912f1b/1018345.png)

*Datei-Verknüpfungen des Objekts "start".*

### Dateien verknüpfen

Um Dateien mit [Objekten](Objekt) oder [Diagrammen](Diagramm) zu
verknüpfen, gehen Sie (analog zum nötigen Vorgehen, um [Objekte manuell
zu verknüpfen](Objekte_manuell_verknüpfen)) wie folgt vor:

1.  Markieren Sie das gewünschte Objekt bzw. Diagramm.
2.  Öffnen Sie das Kontextmenü mit der rechten Maustaste, wählen Sie
    "Eigenschaften".
3.  Der Reiter "Dateien", listet im oberen Fensterteil alle bestehenden
    Verknüpfungen zu Dateien, sowie im unteren Fensterteil all jene
    Dateien, die noch verknüpft werden können, auf.
4.  Wählen Sie die Datei aus, die mit dem eingangs gewählten Objekt bzw.
    Diagramm verknüpft werden soll.
5.  Klicken Sie auf den Button "Verknüpfen".
6.  Schließen Sie das Eigenschafts-Fenster mit einem Klick auf "OK".

Es können beliebig viele Dateien zu einem Objekt bzw. Diagramm verknüpft
werden; wiederholen Sie dazu Schritt 4 & 5 für sämtliche weiteren
Dateien.

#### Bestehende Datei-Verknüpfungen aufheben

1.  Öffnen Sie das [Eigenschafts-Fenster](Eigenschaften_Dialogfenster_)
    des gewünschten Objekts.
2.  Wählen Sie den Reiter "Dateien".
3.  Selektieren Sie die gewünschte Verknüpfung im oberen Fensterteil.
4.  Mit einem Klick auf den Button "Verknüpfung trennen" wird die
    gewählte Verknüpfung entfernt.

![image](//images.ctfassets.net/utx1h0gfm1om/5UpHkDcw26CRioIxuS5VOQ/7cc654709881607d72a35113b8ad855d/image.png)


![image](//images.ctfassets.net/utx1h0gfm1om/4sIThQfTwd171W5aZ8ENxy/a8e015d47211000943e9ede28cbcf30b/image.png)

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>