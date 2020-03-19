Ergänzt die Liste der [Systemattribute](systemattribute).

Es gibt folgende Systemattribute für [Diagramme](diagramm), hier nach
[Attributgruppe](attributgruppe-und-attribut) gegliedert:

### Definition

#### Klasse

Hier können Sie angeben, zu welcher
[Diagrammklasse](klasse) ein Diagramm gehören soll.

#### Vorlagename

Dieses Systemattribut ziegt den Namen der
[Vorlage](shapes-stencils-und-templates-de) an, die für das Diagramm verwendet
wird. Das Attribut ist nur lesbar und wird automatisch beim Speichern
eines Diagramms aktualisiert.

Im [Diagramme Aktualisierungs-Wizard](aktualisieren-von-diagrammen),
können Sie dadurch einen Filter nach diesem Attribut nutzen und alle
Diagramme auswählen, die die jeweils ausgewählte Vorlage nutzen.

### Genehmigungsmanagement

Optional vorhanden, wenn das
[Genehmigungsmanagement](genehmigungsmanagement) aktiviert wurde.

#### Genehmigungsstatus

Gibt den Genehmigungsstatus des jeweiligen Diagramms an.

#### Änderungsdatum des Genehmigungsstatus

Zeigt das Datum der letzten Änderung des Genehmigungsstatus an.

#### Genehmigungs- oder Löschdatum

Optional vorhanden; zeigt das Datum des letzten Genehmigens oder
Löschens an.

#### Verfallsdatum der Genehmigung

Optional vorhanden; gibt das Verfallsdatum des Genehmigungsstatus an.

#### Genehmigungs-Kommentar

Optional vorhanden; ermöglicht es, Kommentare im Zuge des
Genehmigungsverfahrens zu hinterlegen.

#### Alte bewahren wenn nicht genehmigt

Optional vorhanden; erlaubt es, bereits genehmigte Objekte bzw.
Diagramme in der [Web-Publikation](webpublisher-de) zu behalten, falls sich
deren Status seit der letzten Publikation auf einen nicht genehmigten
Entwurfsstatus geändert hat.

### Administration

#### Automatische Verknüpfung

Dieses Systemattribut regelt die Erstellung von automatischen
[Verknüpfungen](verknuepfungen) auf Diagrammen. Der Wert "Wahr" bzw.
"Falsch" erlaubt bzw. unterbindet dies.

Im Regelfall, sollte der Wert für Diagramme "Wahr" sein, um automatische
Verknüpfungen zuzulassen.

<div class="warning">
<h3> Achtung: </h3> 
  
bei der [Erstellung eines Abhängigkeitsdiagramms](erstellen-eines-abhaengigkeitsdiagramms) stellt
das System diesen Wert auf "Falsch".
</div>

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>