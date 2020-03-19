-   [Aktivieren des Genehmigungsmanagements](#aktivieren-des-genehmigungsmanagements)
    -   [Gültigkeitsbereich](#gültigkeitsbereich)
    -   [Entwurfsstatus](#entwurfsstatus)
    -   [Weitere Optionen](#weitere-optionen)
-   [Vergabe eines Genehmigungsstatus](#vergabe-eines-genehmigungsstatus)

------------------------------------------------------------------------

Das native Genehmigungsmanagement ermöglicht es Ihnen, ein effektives
Freigabekonzept in Ihrem Modellierungsprozess zu nutzen. Sie können
dadurch festlegen, welche Änderungen am Modell einer Genehmigung
bedürfen und wer für die Genehmigung dieser Änderungen zuständig ist.

### Aktivieren des Genehmigungsmanagements

Aktiviert (bzw. deaktiviert) und verwaltet wird das Genehmigungsmanagement über die [Datenbank-Einstellungen](Datenbank-Einstellungen). Um eine derartige Änderung vornehmen zu können, muss der entsprechende Benutzer Mitglied der Benutzergruppe "Administrators" (siehe [Berechtigungen](Berechtigungen)) sein. In den Datenbank-Einstellungen kann die Art des Genehmigungsmanagements geändert werden in der Drop-Down Liste. Mitglieder der Benutzergruppe „Administrators“ können Genehmigungsmanagement aktivieren oder deaktivieren (siehe Berechtigungen). Wenn das Genehmigungsmanagement aktiv ist, ist der Button Approve gefärbt.  

Um das Genehmigungsmanagement zu konfigurieren, stehen folgende Optionen
zur Verfügung:

#### Gültigkeitsbereich

Im Fensterteil "Aktivieren des Genehmigungsmanagements für:", werden
jene Elemente der Datenbank ([Diagramme](Diagramm), [Objekte,](Objekt)
[Klassen,](Klasse) [Attributgruppen &
Attribute](Attributgruppe_Attribut)) ausgewählt, für die das
Genehmigungsmanagement aktiviert werden soll.

Falls das Genehmigungsmanagement generell für alle Objekte und/oder
Diagramme aktiviert werden soll, kann dies auch zeitsparend über die
entsprechenden System-Klassen "Allgemeines Objekt" und/oder "Allgemeines
Diagramm" erledigt werden.

#### Entwurfsstatus

Im Fensterteil "Entwurfsstatus:", können bis zu 6 Entwurfsstatus frei
definiert werden. Die Auswahl der maximal möglichen Entwurfsstatus,
erfolgt dafür im oberen Fensterteil, unter dem Punkt "Anzahl
Entwurfsstatus:".

Sämtliche für das Genehmigungsmanagement zu verwendenden Genehmigungs-,
Entwurfs- bzw. Löschstatus, können frei benannt, sowie mit individuell
anpassbarer Farbe versehen werden.

Für jeden Entwurfsstatus bzw. für den Status "Gelöscht", wird im
[Repository](Repository) ein der gewählten Farbe entsprechendes
Mini-Icon an den Objekt- bzw. Diagramm-Icons angezeigt. Genehmigte
Objekte und/oder Diagramme, sowie Elemente ohne jeglichen
Genehmigungsstatus, werden ohne Mini-Icon dargestellt.

<div class="error">
 Achtung:

Eventuell vorhandene Objekte bzw. Diagramme, die vor dem Aktivieren des
Genehmigungsmanagements erstellt wurden, haben danach bis zum erneuten
Speichern dieser Elemente keinen Genehmigungsstatus und werden ohne
Mini-Icon, wie genehmigte Objekte bzw. Diagramme angezeigt.
</div>

#### Weitere Optionen

![](//images.ctfassets.net/utx1h0gfm1om/dzBOEHSgbm0ioW20easom/31d362595b60b54c234af76c55c3f4d0/1018445.png)

*Verwaltung des Genehmigungsmanagements in den Datenbank-Einstellungen*

-   Das Änderungsdatum des Genehmigungsstatus wird festgelegt:  
    Nach der Aktivierung von dieser Option wird ein neues Attribut
    Änderungsdatum des Genehmigungsstatus in die Attributgruppe
    Genehmigungsmanagement hinzugefügt.  
    Diese Option kann entweder auf Automatisch oder auf Manuell gestellt
    werden:

    -   Durch "Automatisch", wird das Datum auf das Datum der letzten
        Änderung des Genehmigungsstatus gesetzt.

    -   Durch "Manuell", kann der Benutzer das Datum der letzten
        Änderung des Genehmigungsstatus selbst bestimmen.

    Im [Eigenschafts-Fenster](Eigenschaften_Dialogfenster_), wird dieses
    Attribut als nur lesbar dargestellt, da es nur beim Ändern des
    Genehmigungsstatus verändert kann.

-   Hinzufügen des Attributs "Genehmigungs- oder Löschdatum"  
    Diese Option steuert das Attributs "Genehmigungs- oder Löschdatum"
    in der Attributgruppe Genehmigungsmanagement. Der Wert dieses
    Attributs, ist das Datum des letzten Genehmigen oder Löschen des
    entsprechenden Objekts und wird automatisch bei beiden Aktionen
    gesetzt.
-   Aktiviere den Ablauf von Genehmigungen  
    Diese Option steuert das Hinzufügen des
    [Attributs](Attributgruppe_Attribut) "Verfallsdatum der
    Genehmigung". Dieses Attribut erlaubt es, ein Verfallsdatum für den
    vergebenen Genehmigungsstatus von [Objekten](Objekt) und/oder
    [Diagrammen](Diagramm) manuell zu definieren. Das heißt, Objekte und
    Diagramme können nur bis zu einem definierten Datum genehmigt
    bleiben, danach läuft die Genehmigung ab und der Status wird auf
    "Genehmigung abgelaufen" gesetzt. Benutzer mit der
    Genehmigungs-[Berechtigung](Berechtigungen), können das
    Verfallsdatum für jedes Objekt bzw. Diagramm separat definieren. Es
    ist auch möglich, das Verfallsdatum einer Genehmigung zu entfernen:
    Wenn Sie die Option "Keines" (= Genehmigung verfällt nicht)
    aktivieren, wird die Genehmigung für ein Objekt bzw. Diagramm nicht
    verfallen.
-   Aktiviere das Kommentarfeld im Genehmigungsdialog  
    Diese Option ermöglicht ein Feld für einen Genehmigungs-Kommentar.
    Dieses Kommentarfeld ist optional vorhanden, muss also nicht
    verpflichtend befüllt werden.
-   Aktiviere, dass das Erstellen neuer Version nur möglich ist, wenn
    alle Status des Genehmigungsmanagement auf "genehmigt" stehen  
    Mit dieser Option kann verboten werden, dass neue
    [Datenbankversionen](Versionsmanagement) erzeugt werden, wenn nicht
    genehmigte Objekte oder Diagramme vorhanden sind.
-   Erlaube per Objekt/Diagramm Auswahl früher bereits genehmigte
    Objekte/Diagramme im WebPublisher zu behalten  
    Wenn Sie diese Option aktivieren, wird das Attribut "Alte bewahren
    wenn nicht genehmigt" für alle Objekte und/oder Diagramme, für die
    das Genehmigungsmanagement aktiviert ist, hinzugefügt. Wenn das
    Attribut auf "Wahr" steht, erlaubt es, bereits genehmigte Objekte
    bzw. Diagramme in der Web-Publikation zu behalten, falls sich deren
    Status seit der letzten Publikation auf einen nicht genehmigten
    (Entwurfs-) Status geändert hat. Andernfalls werden die
    entsprechenden Objekte und/oder Diagramme durch noch nicht
    genehmigte Elemente überschrieben, bzw. sind nicht vorhanden
    (abhängig von den Publikationseinstellungen im WebPublisher).

### Vergabe eines Genehmigungsstatus

Der Genehmigungsstatus für ein Objekt bzw. Diagramm, kann in folgenden
Fällen vergeben bzw. geändert werden:

-   Ein neues bzw. bestehendes aber geändertes [Diagramm](Diagramm) wird
    abgespeichert
-   Manuelle Änderung eines oder mehrerer Objekte bzw. Diagramme über
    das Kontextmenü (Eintrag "Ändern des Genehmigungsstatus") des/der
    jeweiligen Elemente im [Repository](Repository)

![](//images.ctfassets.net/utx1h0gfm1om/5IeDJ9xzDUagEqWwyua8ag/7cf32822bf83de33b19286e76ab9b0ba/1017997.png)

*Dialogfenster zur Vergabe bzw. Änderung des Genehmigungsstatus*


#### Diagramme genehmigen

Um den Genehmigungsprozess zu starten, muss der Genehmigungsassistent gestartet werden indem man auf „Genehmigen“ oder mit Rechtsklick auf das Diagramm im Repository klickt und „Genehmigen“ auswählt aus dem Kontextmenü. Bevor der Genehmigungsassistent startet werden alle Diagramme im Modeler geschlossen. 

![image](//images.ctfassets.net/utx1h0gfm1om/2xACRZYHASiDI2qvv5PlJX/3595375814ab78132b3349adac7184c8/image.png)

Im ersten Fall ist dem Benutzer erlaubt auszuwählen welches Diagramm genehmigt werden soll. Spezielle Attribute erlauben die Sortierung der Diagramme nach Klasse, oder nur das Zeigen von Diagrammen die basieren auf einer Vorlage sind, oder mit spezifiziertem Genehmigungsstatus. 
Icon



Wenn alle Diagramme bereits genehmigt sind, werden keine Diagramme in der Liste sein. 

Wenn das Diagramm von einem anderen Benutzer geöffnet ist, wird es gesperrt für die Genehmigung und wird ein graues Icon mit einem kleinen Schlüssel haben. 

Danach  muss der Benutzer Optionen für die Genehmigung indem er die entsprechenden Boxen anhakt:
  -	Datenbank aktualisieren vor der Genehmigung
  -	Erstellen der Genehmigungsgeschichte
  -	Diagram für EPS erstellen. Diese option muss aktiviert sein in den Datenbankeinstellungen im EPS Tab neben der Box „Aktivieren der Nutzung von EPS“. EPS ist unser dynamisches Webportal, welches die SharePoint Bibliotheken nutzt. Anderenfalls ist diese Option deaktiviert.
  -	Speichern eines Kommentars. Diese Option erlaubt dem Benutzer ein Kommentar im Genehmigungsdialog zu erstellen. Es ist möglich ein Kommentar in Deutsch, Englisch  oder Französisch zu machen indem Sie den „T“ Knopf drücken. Diese Option muss aktiviert sein in den Datenbankeinstellungen im Genehmigungstab. 
  -	Datum einstellen. Diese Option zeigt die Modifizierung des Datums und der Zeit. Wenn in den Genehmigungseinstellungen „Änderungsdatum für den Genehmigungsstatus“ definiert als automatisch ist, ist diese Option deaktiviert. Wenn diese Einstellung als manuell definiert ist, muss der Benutzer das Datum der letzten Modifizierung eingeben. 
  -	Ablaufdatum. Diese Option erlaubt dem Benutzer das Datum einzugeben, wann der Genehigungsstatus abläuft. Diese Option muss aktiviert werden in den Datenbankeinstellungen im Genehmigungstab. 

![image](//images.ctfassets.net/utx1h0gfm1om/2O6Hb00yKy6vOn1vULcQK2/a3074f2e1644c4a5c1a34f604db76a3b/image.png)

Icon
Wenn der Benutzer Dateien mit Diagrammen verknüpft nach der Genehmigung des Diagramms, muss der Genehmigungsstatus eingestellt werden und das Diagramm muss nochmal genehmigt werden. 

Icon
Wenn der Benutzer Änderungen im genehmigten Diagramm  (z.B. Objekte verknüpfen) macht, wird der Genehmigungsstatus sich zu „Work in progress“ automatisch ändern. 

Icon
Wenn der Benutzer eine früher erstellte Version wiederherstellt nachdem das Diagramm genehmigt wurde, ändert sich der Name des Diagramm und es wird nicht genehmigt.
Es ist wichtig zu merken, um genehmigte Diagramme die gelöscht wurden zu ändern, muss die Löschung abbgebrochen werden oder der Genehmigungsstatus muss eingestellt werden. Andernfalls werden keine Änderungen gespeichert und das Diagramm bleibt gelöscht.

Wenn der Benutzer ein gelöschtes Diagramm genehmigt, wird es aus dem Modeler und der Datenbank gelöscht und alle zusätzlichen Objekte wie Diagrammverknüpfungen werden auch gelöscht. 

Wenn der Benutzer Daten eines genehmigten Diagramms zu Excel exportiert, Attribute ändert in der Excel-Dateien und es wieder in den Modeler mit dem ImportExportManager einfügt, wird dieses Diagramm nicht genehmigt






<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>