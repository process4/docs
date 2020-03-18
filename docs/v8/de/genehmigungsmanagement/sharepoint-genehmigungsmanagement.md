Im SharePoint Genehmigungsmanagement können Statuse im SharePoint festgelegt werden und dann im Modeler importiert werden. 

Zuerst muss ein SharePoint Genehmigungsmanager den Diagram Speicher zu SharePoint verschieben. Danach in den Datenbank-Einstellungen am Approvals Tab wird SharePoint Genehmigungsmanagement erscheinen in einer Art DropDown Liste. 

Wenn SharePoint Genehmigungsmanagement die Einstellungen verfügbar macht:
- *Geben Sie das Kommentarfeld im Dialog frei*

Wenn die Checkbox dieser Optionen markiert ist, ein zusätzliches Feld für Kommentare wird hinzugefügt. Dieses Feld kann leer gelassen werden.
-	*Geben sie die Erstellung einer neuen Version Snapshots nur wenn alle Genehmigungsmanagement Statuse genehmigt wurden.*

Wenn die Checkbox dieser Option markiert ist, ist die Erstellung neuer Datenbank-Versionen verboten wenn es nicht genehmigte Diagramme gibt.
- *Erlauben Sie mit Diagrammselektion das Behalten von einmal genehmigten Diagrammen im WebPublisher.*

Wenn die Checkbox dieser Option markiert ist, neues Attribut „Behalte altes wenn nicht genehmigt“  wird dem Diagramm Attributen hinzugefügt für die Genehmigungsmanagement erlaubt ist. Beim Aktivieren dieses Attributs, werden vorher genehmige Diagramm in der Web Publikation gespeichert, wenn sich der Status seit der letzten Publikation zu nicht genehmigt geändert hat. 



Nach dem Einschalten des SharePoint Genehmigungsmanagements werden alle Diagramme die im SharePoint gespeichert wurden, genehmigt.

<div class="info">
Um den Genehmigungsstatus und geänderte Attribute der Diagramme zu aktualisieren, muss der Benutzer die Checkbox „Update the SharePoint data as well when the refresh button has been clicked“ in den Client-Einstellungen anhaken. 
</div>

Es  gibt 4 Genehmigungsstatuse die im SharePoint Genehmigungsmanagement verfügbar sind:

-  *Genehmigt.* Dieser Status bedeutet, das Diagramm ist akzeptiert und genehmigt (Wenn das Diagramm genehmigt ist im SharePoint, gibt es kein Markup auf dem Icon des Diagramms im Modeler).
-  *Schwebend.* Dieser Status bedeutet, das Diagramm wartet auf die Genehmigung. 
-  *Entwurf.* Dieser Status ist gedacht für Diagramme die in Arbeit sind. 
-  *Abgelehnt.* Dieser Status bedeutet, das Diagramm ist nicht akzeptiert und nicht genehmigt.

![SPapproval2](//images.ctfassets.net/6mz8d8cle1nl/7nLtboNYZMRQ4Udo7AI6HU/6313efbc5f3d9ec2afbce7de282956b3/SPapproval2.png)