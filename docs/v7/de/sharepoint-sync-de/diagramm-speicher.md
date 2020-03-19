SharePoint Dokumenten Bibliothek kann als Diagramm Speicher ausgewählt werden. Um dies zu tun, muss eine SharePoint Seite in Db Einstellungen erstellt werden und dann der Befehl **Change diagram storage** aus dem Diagrammteil von Visio ausgeführt werden. In diesem Assistenten wird eine Seite um den Diagramm Speicher auszuwählen sein, wo die SharePoint Bibliothek ausgewählt werden kann.   

 ![DiagramStorage](//images.ctfassets.net/utx1h0gfm1om/c3Bwa8uGdiW3nwpYFSYnW/92bd59cdff7c9342224ecd690f56a0e7/DiagramStorage.png)


-   **Seite:** Der Benutzer sollte aus der Liste der existierenden     SharePoint     Seiten ausgewählt werden (falls alle verwendet sind ist das besonders       hervorgehoben). 
-   **•	Bibliothek:** Dokumenten Bibliothek der gewählten Seite, wo der   Benutzer seine Diagramme speichern möchte. Liste ist gefüllt mit allen Dokumenten Bibliotheken dieser Seite
-   **Sync rule:** Wählen Sie eine besehende Regel aus oder erstellen Sie eine neue für die gewählte Seite, wo die Diagramm Synchronisierung konfiguriert werden kann. Bei vorgegebener Synchronisierung für Diagramme ist der Name erlaubt (und kann nicht verhindert werden). Der Benutzer kann diesen Wert ändern ohne irgendwas anderes zu tun indem er die Diagramm Synchronisierung von einer zur anderen Regel verschoben wird.

Wenn der Assistent fertig ist, werden alle Diagramme zu ausgewählten Bibliotheken verschoben. Die ausgewählte Regel (oder eine neue erstellte Regel) ist konfiguriert um die Diagramm Synchronisierung auszuführen. Der Benutzer kann diese Regeln konfigurieren um die Diagramm Eigenschaften zu synchronisieren. 

<div class="warning">
  
Gelöschte Diagramme im SharePoint würden nicht aus dem Modeler gelöscht werden. 

Wenn Sie ein Diagramm von einer SharePoint Seite zu einer anderen verschieben möchten, seinen Sie sicher dass alle Diagramme die im SharePoint  gelöscht wurden auch im Modeler gelöscht sind.  

</div>

![DiagramStorage2](//images.ctfassets.net/utx1h0gfm1om/5fnasY0boNVS12AseP4k0e/095f843136088e366ae0e6bc68e4bceb/DiagramStorage2.png)

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>