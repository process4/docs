Um SharePoint Synchronisierung zu nutzen, muss der Benutzer die bereits existierende __SharePoint Seite__ zur Liste der SharePoint Seiten hinzufügen. In den Datenbank-Einstellungen wählen Sie den Tab __SharePoint Seiten__. Hier kann der Benutzer neue Seiten hinzufügen, bestehende ändern oder löschen. Wenn die gewählte Seite für Diagramm Speicher benutzt wird, dann gibt es 2 Mitteilungen, die erscheinen für Ändern und Löschen. Diese Seite kann nicht gelöscht werden, so wird der Benutzer nur informiert, dass das Löschen abgebrochen wurde. Es ist nicht empfohlen solche Seiten zu ändern (weil es dazu führen kann, dass Sie keinen Zugriff auf die Diagramme bekommen), deshalb wird der Benutzer gefragt ob er diese Seiten wirklich ändern will. Die Änderung der Seiten wird im folgenden Dialog gezeigt. 

Um neue Seiten hinzuzufügen wählen Sie __„Neu“…__

 ![](//images.ctfassets.net/utx1h0gfm1om/2OoLQYjnRmqWA2qce0k0Kg/6300ca5f193f8d48540ed083b1742106/329161.png)

Das SharePoint Seite Fenster wird geöffnet. Der Benutzer muss folgenden Felder ausfüllen:
- __	Name:__ Symbolischer Name der Seite
- __URL:__ URL der Seite
-	__Anmeldedaten:__ Aus dem Dropdown-Menü, kann der Benutzer die Art der Anmeldedaten auswählen, die benutzt werden um sich mit der spezifizierten Seite zu authentifizieren. Es gibt 3 verschiedene Arten:
  -	__Vorgegebene Anmeldedaten:__ derzeitige Windows-Anmeldedaten werden benutzt 
  -	__Netzwerk-Anmeldedaten:__ Erlauben, dass Login und Passwort der SharePoint Seite benutzt werden (muss spezifiziert werden)
  -	__Office 365 Anmeldedaten:__ Erlauben, dass die Anmeldedaten von Office365 benutz werden 
-	__Benutzername:__ Login
-	__Passwort:__  Passwort
-	__Bestehende Anmeldedaten für die Synchronisierung verwenden:__ Diese Eigenschaft legt fest ob der Benutzer die Anmeldedaten für Synchronisierung verwenden kann. Wenn überprüft, kann der Benutzer seine eigenen Anmeldedaten auswählen oder die Anmeldedaten der Seite verwenden. Andernfalls muss er Anmeldedaten bereitstellen um die Synchronisierung zu nutzen. 
-	__Verwenden als SharePoint Seite Präfix in Hyperlink-Eigenschaften:__ Es gibt eine Option, dass Hyperlinks in SmartTag markiert werden, wenn es mit vorher definierten Pfaden startet. Nun wird statt einem Pfad eine Liste der Pfads verwendet. Um dies zu tun müssen Sie einen Haken in dieser Checkbox setzen. 

 ![](//images.ctfassets.net/utx1h0gfm1om/1bzu2DWZUu4EOcCIusq8ka/2da990920d3376b4f6db456e41240ded/329160.png)

 

Die eingegebenen Anmeldedaten werden für jede Art von Konfiguration genutzt (für das Ändern von Diagramm Speicher oder für SharePoint Synchronisierung-Konfiguration. Der Benutzer kann die Anmeldedaten für die Synchronisierung verwenden, wenn es in den Einstellungen erlaubt ist. 

Wenn der Benutzer die SharePoint Seite betritt und OK klickt, wird die Verbindung zu dieser Seite erstellt. Wenn Informationen über die Seite nicht korrekt sind (URL kann nicht geklärt werden oder es gibt keine Erlaubnis für den Zugang zu dieser Seite unter den gegebenen Anmeldedaten), wird ein Warnungs-Fenster erscheinen um den Nutzer über das zu informieren, aber mit dem Klicken auf „Ja“ werden die Informationen trotzdem gespeichert. 

 

