Process4.biz stellt eine spezielle Funktion Diagramm importieren zur
Verfügung, mit der vorhandene Visio-Diagramme unverändert als
process4.biz-Objekte in die Datenbank mit Zuteilung in die
entsprechenden Units importiert werden können.

1.  Der Aufruf der Importieren-Funktion erfolgt entweder mithilfe des
    Kontextmenüs des Diagramm-Hierarchieastes im linken
    Navigationsfenster des Repository (s. Bild unten), oder Sie rufen
    die Funktion im process4.biz-Menü unter Wizards auf.  
    ![25-DE-1](//images.ctfassets.net/6mz8d8cle1nl/5lYy31cgW4MSgMGEy88GoS/58202016c6a7fbf1129d2d16d71b701e/25-DE-1.png) oder :
    ![25-DE-2](//images.ctfassets.net/6mz8d8cle1nl/1ZHQRgiGRyu46o20w4IU4Y/54aa081c8f64ca44c6ef689ace480647/25-DE-2.png)
      
2.  Es erscheint eine Willkommensseite. Klicken Sie auf ***Weiter***.
3.  Wählen Sie die Unit aus, in die das Diagramm importiert werden
    soll:  
    ![25-DE-3](//images.ctfassets.net/6mz8d8cle1nl/1K65FQVV4c0MGmeogWmCOe/d2a5b041c4882f8534004834a77c1bbc/25-DE-3.png)
4.  Wählen Sie die Visio-Diagramm-Datei („\*.vsd" / \*.vsdx) aus, die
    das zu importierende Diagramm enthält. Wenn ein Visio-Diagramm
    mehrere Diagrammblätter hat, werden alle diese Blätter in
    process4.biz importiert.
5.  Geben Sie dem neuen Diagramm einen (frei zu wählenden) Namen und
    wählen Sie die Diagramm [Klasse](Klasse) aus.  
    ![25-DE-4](//images.ctfassets.net/6mz8d8cle1nl/42y71ClhgQqiWQCqoiqeoU/f8cdceab5947fa8647906b1dfce055bf/25-DE-4.png)
6.  Aktivieren Sie die Checkbox „***Verwende das vorher gespeicherte
    Schema***", wenn Sie Diagramm-Import-Einstellungen verwenden
    möchten, die Sie vorher bereits in Form einer „\*.settings"-Datei
    gespeichert hatten (siehe Punkt 11).
7.  Wählen Sie die Schablone (= Stencil) aus, die Sie auf Ihrem Diagramm
    verwenden möchten. Sie können die originale Schablone des zu
    importierenden Visio-Diagramms behalten oder dem Diagramm eine in
    process4.biz verwendete Schablone hinzufügen. Die Schablonen von
    Visio und von process4.biz können auch beide gleichzeitig
    beibehalten werden, wenn Sie die Funktion ***Zusätzlich zu den
    process4.biz auch die Original Schablonen (Stencils) beibehalten***
    auswählen. 

    Es wird nicht auch das Template (Vorlage = „\*.vst" / \*.vstx) beim
    Import mit übernommen.

    ![25-DE-5](//images.ctfassets.net/6mz8d8cle1nl/14Q1wY5hJiEMUagcyYAkgK/58b0411decd3273a278d4214d7ab1f46/25-DE-5.png)

8.  Im nächsten Schritt werden die Import-Einstellungen definiert.  
    ![25-DE-6](//images.ctfassets.net/6mz8d8cle1nl/7ifeurJcxGYGo2yuu0W68w/b6ebe24ba7d907bde144dc109281c5ae/25-DE-6.png)

    Sie können wählen, ob neue Klassen für jene Importobjekte erstellt
    werden sollen, für die keine passenden Klassen in der Datenbank
    gefunden werden, oder ob solche Objekte ignoriert werden sollen. Die
    erste Option ist nur dann verfügbar, wenn die Ziel-Unit im Designer
    gesperrt ist und der Benutzer, der den Import durchführt,
    Design-Berechtigungen hat. Wählen Sie bitte auch aus, ob Attribute
    von Shapes ohne Wert ignoriert werden sollen. Diese Option bezieht
    sich auf den Import von benutzerdefinierten Eigenschaften der
    Visio-Shapes auf dem Importdiagramm, die dann als Attribute in die
    process4.biz-Datenbank aufgenommen werden. Visio Shapes können
    manchmal auch unsichtbare Attribute enthalten. Wählen Sie die Option
    "***Ignorieren unsichtbarer Attribute***" aus, wenn solche Attribute
    in die p4b-Datenbank nicht importiert werden sollen. Aktivieren Sie
    "***Immer nur ein Objekt für mehrfach vorhandene selbe Shapes
    erstellen***", wenn Sie wollen, dass für mehrere Shapes mit dem
    gleichen Namen nur ein Objekt in der Datenbank erstellt wird.

9.  Bestimmen Sie nun die verschiedenen Klassen im Repository, denen die
    einzelnen Shapes des Importdiagramms (für die zuvor unter Punkt 7
    definierte Schablone) zugeordnet werden sollen. Wählen Sie dabei
    eine bereits existierende process4.biz-Klasse aus oder lassen Sie
    von process4.biz auch eine neue Klasse anlegen, die dann mit der
    Schablone assoziiert wird.

Beispiel1: Anlegen der neuen Klasse „PC" im Repository:

![25-DE-7](//images.ctfassets.net/6mz8d8cle1nl/3sa2VvL7kQ0YaciY44kCew/5ba9ba916ca90f8fc1d32b24c224108a/25-DE-7.png)

Beispiel 2: Zuordnungsmöglichkeiten für das Shape „Computer" vom
Importdiagramm zu Klassen im aufgeklappten Dropdown-Menü mit den
Möglichkeiten dieses Shape keiner Klasse zuzuordnen („ ignorieren"),
einen neuen Klassenamen zu definieren („Neu…"), eine neue Klasse mit
diesem Shape-Namen anzulegen bzw. das Shape einer der vorhandenen
Klassen zuzuordnen:

![25-DE-8](//images.ctfassets.net/6mz8d8cle1nl/T7n3eFHgoUiE0se2K4eiu/d6c7b6dd1b37a6c581246733f25d8d6c/25-DE-8.png)

Im nächsten Schritt können Sie auch die benutzerdefinierten
Eigenschaften (Properties) von den Visio-Shapes (Objekten) des
Importdiagramms in die process4.biz-Datenbank importieren.

-   In der ersten Spalte sehen Sie die Visio Shapedaten und beim Öffnen
    einer Eigenschaft das dazugehörige Import-Objekt.
-   In der zweiten Spalte können Sie per Klick auf eine
    Attributgruppe entscheiden, in welche von ihnen das
    Shapedaten-Attribut importiert werden soll.
-   In der dritten Spalte können Sie den Namen des neuen Attributs in
    der process4.biz-Datenbank auswählen, oder auch einen neuen Namen
    angeben (und damit ein neues Attribut anlegen).  
      
    ![25-DE-9](//images.ctfassets.net/6mz8d8cle1nl/7IOUnKGu3Yee0mOIEUeCuc/6bf99d463ca62a9ecec6fae541f17ec2/25-DE-9.png)

Im Bild unten sehen Sie das Dropdown-Menü in der dritten Spalte, das
die Namenswahl ermöglicht:

![](//images.ctfassets.net/utx1h0gfm1om/9QdvBI9kd2o2uM0yKsEwg/ec27f5db252e628f63ef42c5a9755e2c/1018393.png)

  10. Der Diagramm Import Wizard ist jetzt zum Importieren bereit: 

![25-DE-10](//images.ctfassets.net/6mz8d8cle1nl/1oMnXlq7a4mqmGaY2UUOkE/ecb510b8c1ea48f681056941b57abf5f/25-DE-10.png)

Klicken Sie auf „***Schema speichern als …***" wenn
Sie Diagramm-Import-Einstellungen speichern wollen, um diese dann beim
nächsten Importvorgang verwenden zu können. Das Schema wird in Form
einer „\*.settings"-Datei erstellt und es werden darin folgende
Einstellungen gespeichert: 

-   Ziel-Unit (siehe Punkt 6),
-   Vorlagen-Einstellungen (siehe Punkt 7),
-   Import Einstellungen, die unter dem Punkt 8 beschrieben wurden,
-   die Zuordnung von Diagramm-Master Shapes zu process4.biz-Klassen
    (Punkt 9),
-   die Zuordnung benutzerdefinierter Eigenschaften von Visio-Shapes zu
    process4.biz-Attributgruppen und -Attributen (Punkt 10). 

Klicken Sie auf ***Fertigstellen***. Das importierte Diagramm wird nach
Beendigung des Import-Prozesses geöffnet.


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>