

Shapes zu gruppieren optimiert den Diagramm-Modellierungsprozess, wenn
man z.B. Objekte mehrerer gleicher Klassen (in unserem Beispiel:
„Ereignis" und „Start-End") immer wieder in gleicher Anordnung auf
Diagramme legen muss. Durch die Verwendung eines Gruppen-Master-Shapes
können mit einem einzigen Drag-&- Drop-Vorgang mehrere Shapes (Objekte)
gleichzeitig in vordefinierter und vorformatierter Kombination auf das
Diagramm gelegt werden.

Um Shapes im Master-Shape zu gruppieren, gehen Sie wie folgt vor:

1.  Legen Sie in Ihrem Stencil (Schablone) ein neues Master-Shape mit
    einem frei wählbaren Namen an, der jedoch keinem der Klassen-Namen
    in Ihrer Datenbank entsprechen darf.
2.  Wählen Sie für das neue Master-Shape im Kontextmenü die Funktion „
    Master-Shape bearbeiten " aus und ziehen Sie zwei oder mehrere Ihrer
    im Stencil schon vorhandenen Shapes (verschiedener Klassen) darauf,
    die sie gruppieren möchten. 

    Bitte beachten Sie, dass das Shape, das in der Gruppe verwendet
    wird, nicht mit p4b Attributen oder Shape Datengrafik ausgestattet
    werden soll, die das Aussehen vom Shape verändern. Klassen mit dem
    Attribut " Ist Mastershape" gesetzt auf Wahr, können auch nicht für
    die Gruppierung verwendet werden. 

3.  Markieren Sie auf dem Zeichenblatt des Gruppen-Master-Shapes jedes
    einzelne Shape und wählen Sie die Option Shape-Sheet anzeigen im
    Visio-Menü Fenster aus. Fügen Sie über das Kontextmenü im
    Shape-Sheet einen neuen Abschnitt unter User-defined cells mit dem
    Namen „P4BClass" ein, und tragen Sie bei Value nur den
    DBKlassen-Namen des soeben in Bearbeitung befindlichen Shapes ein
    (z.B.: „Ereignis" für das Shape „Ereignis" und „Start\_End" für
    Shape "Start-End").  
4.  Markieren Sie nun alle Shapes und gruppieren Sie diese (z.B.:
    mit „Shift+Ctrl+G") und speichern Sie die Änderungen am
    neuen Gruppen-Master-Shape und Stencil. 
5.  Wenn Sie jetzt das neu angelegte Gruppen-Master-Shape (im Beispiel
    heißt es „Kombishape" auf ein Diagramm ziehen, öffnen sich
    2 Eigenschaften-Dialogfenster hintereinander und jedes einzelne
    Shape wird der ausgewählten Klasse (bzw. den ausgewählten Klassen)
    entsprechen und sich als process4.biz-Objekt verhalten: es kann, wie
    jedes andere Objekt, bearbeitet, kopiert, entfernt, und auch mit
    anderen Objekten und Diagrammen verknüpft werden.


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>