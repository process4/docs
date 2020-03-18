
-   [Neue Master-Shapes erstellen](#neue-master-shapes-erstellen)
-   [Master-Shapes mit Attributen ausstatten](#master-shapes-mit-attributen-ausstatten)

In process4.biz, können sämtliche vorhandenen [Stencils](Shapes_Stencils_Templates) und Master-[Shapes](Shapes_Stencils_Templates), die in Visio vorhanden sind, verwendet werden. Zudem können entsprechend Ihrer Anforderungen auch neue Master-Shapes erstellt bzw. bestehende Shapes angepasst werden.

Der Basis-Lieferumfang von process4.biz bzw. die Demo-Datenbank, beinhaltet in der Regel die [Stencils](Shapes_Stencils_Templates) für die Methoden EPK, CATALYST™, EAM, RACI und BPMN, sowie optional auch passende Stencils für die Referenzmodelle.

### Neue Master-Shapes erstellen

Um einem Stencil ein neues Master-Shape hinzuzufügen, gehen Sie wie folgt vor:

1.  Öffnen Sie in Visio eine bestehende Schablone (= Stencil), indem Sie ein [Template](Shapes_Stencils_Templates) oder ein [Diagramm](Diagramm) öffnen.
2.  Schalten Sie die Schablone in den Editiermodus um.  
    Beachten Sie bitte, dass Schablonen und Vorlagen die nicht als Visio-Dateien auf der Festplatte, sondern in der SQL-Server
    Datenbank gespeichert sind, zuerst aus der Datenbank ausgecheckt werden müssen. Siehe dazu: [Shapes, Stencils & Templates](Shapes_Stencils_Templates)
3.  Um ein neues Master-Shape zu erstellen oder ein bestehendes zu
    bearbeiten, wählen Sie die entsprechende Funktion aus dem
    Kontextmenü.
4.  Befüllen Sie die Felder im Dialogfenster (für alle Details dazu,
    siehe Visio-Dokumentation)  
    Der Haken für "Masternamen beim Ablegen vergleichen", sollte nicht
    gesetzt sein, damit der
    [Diagramm-Update-Wizard](Aktualisieren_von_Diagrammen) veränderte
    Master-Shapes auf den Diagrammen aktualisieren kann.

5.  Ein Klick auf OK, fügt dem Stencil ein neues (leeres) Shape hinzu.
6.  Öffnen Sie das so hinzugefügte Shape über dessen Kontextmenü zur
    Bearbeitung.

7.  Zeichnen Sie ein neues Shape; Sie können dazu alle Funktionen
    nutzen, die Ihnen Visio bietet.

8.  Nach Vollendung des Designs schließen Sie das Fenster und speichern
    somit das neue Master-Shape.

Alternativ dazu, können Sie das Shape auf einem [Diagramm](Diagramm)
erstellen (oder ein bereits existierendes verwenden) und es dann es zum
Stencil ziehen. Wenn die Schablone nicht im Bearbeitungsmodus ist,
werden Sie darauf hingewiesen, diesen zu aktivieren.  
Geben Sie anschließend den Namen für das neue Master-Shape ein,
speichern Sie die Schablone und deaktivieren Sie den Bearbeitungsmodus
wieder.

Wenn Sie bereits existierende Master-Shapes bearbeiten möchten, z.B. um
[Datengrafiken](Anzeigen_von_Attributen_als_Visio-Datengrafik)
hinzuzufügen oder zu ändern, sollten Sie dazu ein [Objekt](Objekt) mit
diesem Master-Shape auf das [Diagramm](Diagramm) legen, das Shape
entsprechend bearbeiten und es dann wieder zu den Schablonen ziehen. Sie
könnnen im Zuge dessen auch den Namen des künftigen Master-Shapes an
Hand der existierenden [Klassen](Klasse) auswählen. Zudem können Sie
entscheiden, ob das temporär genutzte Objekt nur vom jeweiligen
Diagramm, oder auch aus der Datenbank gelöscht werden soll. Deaktivieren
Sie abschließend den Bearbeitungsmodus.  
  
----------------------------------------------------------------------

![](//images.ctfassets.net/utx1h0gfm1om/6IpT50Bxa8CEssEeciy0QG/74da21f6195b6351b7e3a452e71fc797/1017835.png)

*Eine Schablone bearbeiten*

 

![](//images.ctfassets.net/utx1h0gfm1om/7Fxg6Wj2rC8EmoiAa42omm/1b6fa8f434b09c41f97fb6ea34f312a6/1017847.png)

*Ein Shape von einem Diagramm in den Stencil ziehen*

### Master-Shapes mit Attributen ausstatten

Es ist möglich, [Attribute](Attributgruppe_Attribut) auf den
[Shapes](Shapes_Stencils_Templates) anzuzeigen, die die
[Objekte](Objekt) einer [Klasse](Klasse) grafisch repräsentieren. Das
bedeutet z.B., dass auf den so konfigurierten Shapes der Objekte auf
einem [Diagramm](Diagramm) dann nicht mehr der Name des Objekts, sondern
eben ein Wert eines anderen Attributs angezeigt wird. Zudem kann diese
Funktion verwendet werden, um [Attribute als Visio-Datengrafik anzuzeigen](Anzeigen_von_Attributen_als_Visio-Datengrafik).

Um Master-Shapes mit Attributen auszustatten, gehen Sie wie folgt vor:

1.  Selektieren Sie das Master-Shape in der Schablone
2.  Wählen Sie die Funktion "Dieses Mastershape mit process4.biz
    Attributen ausstatten" aus dem Kontextmenü des Shapes aus.
3.  Wählen Sie das gewünschte Attribut aus.  
    Sie können in diesem Fenster auch neue Attribute anlegen, sowie
    bestehende [Attribute](Attributgruppe_Attribut)
    und [Systemattribute](Systemattribute) bearbeiten (Achtung: dazu
    sind Design-Rechte erforderlich).
4.  Öffnen Sie das Master-Shape zur Bearbeitung (siehe oben) und führen
    Sie die gewünschte Bearbeitung aus.
    
    1.  Um das ausgewählte Attribut als Textfeld auf einem Shape anzuzeigen, fügen Sie dem entsprechenden Shape ein Feld hinzu. Im darauffolgenden Fenster, wählen Sie dann aus der Kategorie "Shape-Daten" den gewünschten Eintrag (= das hinzugefügte Attribut) aus.

    2.  Falls Sie dem Master-Shape eine Datengrafik hinzufügen möchten,
        finden Sie die nötigen Informationen dazu hier: [Anzeigen von Attributen als Visio-Datengrafik](Anzeigen_von_Attributen_als_Visio-Datengrafik)

5.  Speichern Sie die Schablone mit dem modifizierten Master-Shape.

6.  Erstellen Sie jetzt ein neues Objekt auf dem Diagramm, indem Sie das
    bearbeitete Shape darauf ziehen. Geben Sie einen Wert für das
    definierte Attribut im
    [Eigenschafts-Fenster](Eigenschaften_Dialogfenster) an und klicken
    Sie auf OK. Als Ergebnis wird der Wert des Attributs auf dem Shape
    dargestellt.

Wenn Sie das Master-Shape zum Bearbeiten auf einem [Diagramm](Diagramm)
öffnen, das Shape auswählen und mit der rechten Maustaste darauf
klicken, können Sie im Kontextmenü die selbe Funktionalität verwenden,
um das Master-Shape direkt auf einem Diagramm mit einem
[Attribut](Attributgruppe_Attribut) auszustatten.

![](//images.ctfassets.net/utx1h0gfm1om/6F9Dp5RdjqG6aG0W4CE2wk/72f3d2404decd3e21157bbf09ca45722/1017839.png)

*Ein Master-Shape mit einem Attribut ausstatten*

