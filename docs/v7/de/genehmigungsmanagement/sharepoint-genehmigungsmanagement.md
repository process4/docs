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

![image](//images.ctfassets.net/utx1h0gfm1om/718n5ERQs6tXHdsgtYSPb0/ae16bace79b27e0ebde2acc578e7ff2e/image.png)
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>