Process4.biz stellt eine spezielle Funktion Diagramm importieren zur
Verfügung, mit der vorhandene Visio-Diagramme unverändert als
process4.biz-Objekte in die Datenbank mit Zuteilung in die
entsprechenden Units importiert werden können.

1.  Der Aufruf der Importieren-Funktion erfolgt entweder mithilfe des
    Kontextmenüs des Diagramm-Hierarchieastes im linken
    Navigationsfenster des Repository (s. Bild unten), oder Sie rufen
    die Funktion im process4.biz-Menü unter Wizards auf.  
    ![](//images.ctfassets.net/utx1h0gfm1om/4eXQgXQyLe8skMOqWoKgKm/adc7e24145d214c4a4e2a601c52a8057/1018748.png) oder :
    ![](//images.ctfassets.net/utx1h0gfm1om/32ffXNerryEA8KSmYuSk4o/3339ee3be88fca67ec565b13fe55e8a7/1018743.png)  
      
2.  Es erscheint eine Willkommensseite. Klicken Sie auf ***Weiter***.
3.  Wählen Sie die Unit aus, in die das Diagramm importiert werden
    soll:  
    ![](//images.ctfassets.net/utx1h0gfm1om/1VTIq8swxOwag6iWYq8MSK/74b56ac094be9a3d7cfa53c291faeaac/1018752.png)
4.  Wählen Sie die Visio-Diagramm-Datei („\*.vsd" / \*.vsdx) aus, die
    das zu importierende Diagramm enthält. Wenn ein Visio-Diagramm
    mehrere Diagrammblätter hat, werden alle diese Blätter in
    process4.biz importiert.
5.  Geben Sie dem neuen Diagramm einen (frei zu wählenden) Namen und
    wählen Sie die Diagramm [Klasse](Klasse) aus.  
    ![](//images.ctfassets.net/utx1h0gfm1om/1ZlvPgLH72cCCm04MsOiSe/f3d36d44bfd695d543da762d319291cb/1018771.png)
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

    ![](//images.ctfassets.net/utx1h0gfm1om/5jemh8ZV0WIOM64W2eOEAS/57024579135549a5fba72dd1c7a05266/1018765.png)

8.  Im nächsten Schritt werden die Import-Einstellungen definiert.  
    ![](//images.ctfassets.net/utx1h0gfm1om/1KhahFLq0A8WYGuQ6uQ4SG/26f49e782fc9969bce513b2a708b696e/1018705.png)

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

![](//images.ctfassets.net/utx1h0gfm1om/3yqC0AvFqwIQkmqoWW6Cq6/bfef4bcbee6ae0812f7539fe26edab85/1018715.png)

Beispiel 2: Zuordnungsmöglichkeiten für das Shape „Computer" vom
Importdiagramm zu Klassen im aufgeklappten Dropdown-Menü mit den
Möglichkeiten dieses Shape keiner Klasse zuzuordnen („ ignorieren"),
einen neuen Klassenamen zu definieren („Neu…"), eine neue Klasse mit
diesem Shape-Namen anzulegen bzw. das Shape einer der vorhandenen
Klassen zuzuordnen:

![](//images.ctfassets.net/utx1h0gfm1om/7AGKBNR052SaImAmCk0yQs/cb01a9f0cab1c64f19fbda5b5e9fdc70/1018729.png)

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
      
    ![](//images.ctfassets.net/utx1h0gfm1om/4SzDi1P4BWGQQe2aeyM8Ak/7951c047fe396e86605c801dcfe05835/1018725.png)

Im Bild unten sehen Sie das Dropdown-Menü in der dritten Spalte, das
die Namenswahl ermöglicht:

![](//images.ctfassets.net/utx1h0gfm1om/9QdvBI9kd2o2uM0yKsEwg/ec27f5db252e628f63ef42c5a9755e2c/1018393.png)

  10. Der Diagramm Import Wizard ist jetzt zum Importieren bereit: 

![](//images.ctfassets.net/utx1h0gfm1om/54lhS51FL2AmyeM8gQQeo6/67dd8e8a591d5ae7820b0e9807ae00fd/1018389.png)

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