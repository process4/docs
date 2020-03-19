
Approval History Erweiterung ermöglicht einem Benutzer das Anzeigen und Vergleichen genehmigter Versionen von Diagrammen auf der generierten lokalen Website.

Um eine Genehmigungs-Website zu erstellen, zu aktualisieren oder zu löschen, muss der Benutzer die Approcal History Erweiterung über den Modellierer starten.
Bevor Sie das Aprroval History verwenden, müssen Sie IIS auf Ihrem Computer konfigurieren. Beim ersten Start des Genehmigungsverlaufs-Assistenten müssen Sie auf die Schaltfläche IIS konfigurieren klicken. Es wird geprüft, ob die erforderlichen Funktionen installiert und aktiviert sind. Wenn es Funktionen gibt, die heruntergeladen werden müssen, wird es automatisch gestartet.

<div class="Info">
  <h3>Info</h3>
   Sie benötigen Administratoranmeldeinformationen, um IIS für den Genehmigungsverlaufssite zu konfigurieren.
</div>

![vb 6(1)](//images.ctfassets.net/6mz8d8cle1nl/F9D4sKpOPFVgHd6TFUz6B/ccca18322fae6e651521b2b4f8ff9277/vb_6_1_.jpg)

### Publikationserstellung

Um eine neue Veröffentlichung zu erstellen, muss der Benutzer den Veröffentlichungsnamen und den Namen der Website festlegen, den Pfad, in dem die Veröffentlichung mit der DbConfig-Datei gespeichert wird, und die Adresse, die zum Öffnen der Veröffentlichung mit genehmigten Versionen verwendet wird.

![vb 2(1)](//images.ctfassets.net/6mz8d8cle1nl/2eQhpWS1qT8uJDrvufyppG/083321d09b8261e715adf0f8182e36bb/vb_2_1_.jpg)

Außerdem sollte der Typ der Website-Authentifizierung in Abhängigkeit von dem Modus ausgewählt werden, den Sie zum Protokollieren in der Datenbank verwenden. 
Wenn Sie sich im Modus [SQL-Authentifizierung](login-als-sql-server-benutzer) bei der Datenbank anmelden, wählen Sie im Dropdown-Menü als anonymen Typ für die Website-Authentifizierung aus und fahren mit dem Veröffentlichungsprozess fort.
Wenn Sie sich mit der [Windows-Authentifizierung](login-als-windows-benutzer) bei der Datenbank anmelden, wählen Sie im Dropdown-Menü die Windows-Authentifizierung aus. Wenn die Website-Authentifizierung anonym ist, ist die Veröffentlichung nicht verfügbar, und Sie werden vorgeschlagen, sie auf der geöffneten Seite zu ändern.
![vb 3](//images.ctfassets.net/6mz8d8cle1nl/2c0oFtPQorzzMtgNtts1so/199a047f8a8a4d81dee3bd0c87bb8ed5/vb_3.jpg)
 
Um die Authentifizierung der erstellten Publikation zu ändern, müssen Sie den Internetinformationsdienste-Manager (IIS) auf Ihrem Computer öffnen, den Ordner "Sites" erweitern und in der Standardwebsite die Site auswählen, die für Ihre Publikation erstellt wurde. Klicken Sie auf das Symbol für die Authentifizierung und klicken Sie in der geöffneten Liste mit der rechten Maustaste auf den Status der anonymen Authentifizierung, um sie in __deaktiviert__ und die Windows-Authentifizierung in __aktiviert__ umzuwandeln. 

![vb 10.jpg](//images.ctfassets.net/6mz8d8cle1nl/4ZyL5o3I8jJaBL5jdx5E1T/1710b328770c6158ab82db1c2c579642/vb_10.jpg.png)

<div class="warning">
  <h3>Warnung</h3> 
 Es wird empfohlen, den Chrome-Browser zu verwenden, um den Genehmigungsverlauf anzuzeigen. Wenn Sie den Firefox-Browser für den Genehmigungsverlauf verwenden, müssen Sie Ihre Windows-Benutzerdaten eingeben, um die Site anzuzeigen.
  </div>

Wenn der Genehmigungspublikation Installationsvorgang auf der angegebenen Website-Adresse erfolgreich abgeschlossen wurde, kann die veröffentlichte Datenbank gefunden werden.

### Aktualisieren einer Publikation

Um eine bereits vorhandene Publikation zu aktualisieren, müssen Sie die Approval History Erweiterung starten und eine vorhandene Veröffentlichungsoption aktualisieren auswählen. Überprüfen Sie im nächsten Bildschirm eine oder mehrere Publikationen, die von der Liste aktualisiert werden sollen.

![vb 11.jpg](//images.ctfassets.net/6mz8d8cle1nl/2nzpMiDeD63QTmOTVB7bKF/f5edb23b2cc1c0d09180b171466f2f64/vb_11.jpg.png)
Nach erfolgreichem Abschluss des Aktualisierungsvorgangs werden alle genehmigten Änderungen der aktuellen Datenbank im Genehmigungsverlauf angezeigt. Neue Versionen der genehmigten Diagramme können mit den vorherigen verglichen werden.

<div class="info">
Wenn vor dem Aktualisieren einer Veröffentlichung keine neue genehmigte Version erstellt wurde, bleibt die Anzahl der Diagrammversionen gleich.
  </div>
 
  
### Eine Publikation löschen  

Um eine bereits vorhandene Publikation zu löschen, müssen Sie die Erweiterung des Approval Hsitory starten und die Option Vorhandene Publikation löschen auswählen. Überprüfen Sie im nächsten Bildschirm eine oder mehrere Publikationen, die von der Liste aktualisiert werden sollen. Wenn der Löschvorgang erfolgreich abgeschlossen wurde, wird die ausgewählte Publikation einschließlich des Ordners auf der lokalen Festplatte gelöscht.

<div class="info">
  Die für die Veröffentlichung erstellte Seite wird ebenfalls gelöscht.
  </div>

### Approval History Seite
Auf der generierten Genehmigungsverlaufsseite kann ein Benutzer mehrere Versionen von genehmigten Diagrammen, deren Eigenschaften und Objekten in Diagrammen vergleichen. Die Seite wurde für alle Datenbanken der aktuellen DbConfig generiert, und alle diese Datenbanken sind auf der Seite verfügbar.
Die anzuzeigende Datenbank kann aus dem Dropdown-Menü ausgewählt werden.
![VB site 1](//images.ctfassets.net/6mz8d8cle1nl/2bnp9B9w1EwXWs6WOH8NIp/6c8bdf5412e401e039492a56584b95b0/VB_site_1.jpg)

Auf der linken Seite enthält der Baum alle Diagramme der ausgewählten Datenbank mit genehmigten Versionen. Durch Klicken auf den Diagrammtitel wird die Liste aller genehmigten Versionen des ausgewählten Diagramms erweitert und das Diagramm in der Diagrammansicht geöffnet. Jede Version hat Datum und Uhrzeit ihrer Erstellung. Die Liste der Diagramme kann nach dem letzten Genehmigungsdatum sortiert werden.
Gleichzeitig können zwei, drei oder vier Diagramme angezeigt werden. Wenn es nur eine genehmigte Version gibt, wird nur ein Diagramm angezeigt.

![VB site 2](//images.ctfassets.net/6mz8d8cle1nl/3Bh3yKHEN8azRqVbz8fTIX/02d6e34426741098e6bacb3d3bd5a3e9/VB_site_2.jpg)
 
Wenn mehrere Diagramme freigegebene Versionen vorhanden sind, wird nur die ausgewählte Nummer auf der Seite angezeigt. Um zu den nächsten Diagrammversionen zu gelangen, die ein Benutzer durch Klicken auf die Schaltflächen „Vorherige“ und „Nächste“ aufrufen kann. Die Reihenfolge der Diagramme ist von der neueren zur älteren Version. Diagrammversionen können fixiert oder ausgeblendet werden. Das fixierte Diagramm wird immer an der ersten Position fixiert, auch wenn es sich um eine ältere Version handelt.



Ausgeblendete Diagramme werden auf der Website nicht sichtbar. Wenn sich in der ausgewählten Datenbank mindestens ein ausgeblendetes Diagramm befindet, wird in der Symbolleiste das Häkchen „Ausgeblendet anzeigen“ angezeigt.
![VB site 3](//images.ctfassets.net/6mz8d8cle1nl/5JOAtQfSYdFxzu7Em7Cm8w/7fa72cef05f1108463c6557f6fef9ae4/VB_site_3.jpg)

Um verborgene Diagramme sichtbar zu machen, muss ein Benutzer in dieses Feld ein Häkchen setzen. Versteckte Diagramme haben die Schaltfläche "Anzeigen" anstelle von "Verbergen".

![VB site 4](//images.ctfassets.net/6mz8d8cle1nl/7mhZIW212mvJhnfhayoRxb/5547df8f71eb5bd7e0c3f10677191b13/VB_site_4.jpg)

Alle angezeigten Diagramme wurden vergrößert, verkleinert und gleichzeitig eingefügt, aber das Scrollen funktioniert für jedes angezeigte Diagramm separat.
![VB site 5](//images.ctfassets.net/6mz8d8cle1nl/2k1bl0EfVbbYguBuQxkyxs/33df7f0f12868e44520171a1c4a4d3b9/VB_site_5.jpg)

Es gibt vier Modi zum Anzeigen von Diagrammen:
• Diagrammansicht - nur Diagramm wird angezeigt;
• Diagramm mit Eigenschaften - unterhalb des Diagramms werden seine Eigenschaften mit markierten neuen und geänderten Eigenschaften und Objekten angezeigt.
• Verlaufsansicht - nur Diagrammeigenschaften mit markierten neuen und geänderten Eigenschaften und Objekten;
• Verlaufsansicht (nur Unterschied): Es werden nur geänderte oder neue Eigenschaften und Objekte des Diagramms angezeigt.

![VB site 6](//images.ctfassets.net/6mz8d8cle1nl/3S5FpZd6CTuGyDiOzkGm2n/8585e39c2282fd62eed6027f1f011b4f/VB_site_6.jpg)
 

Der Unterschied zwischen den auf der Website hervorgehobenen Diagrammen. Neue Eigenschaften und neue Objekte werden grün eingefärbt und geänderte Eigenschaften und Objekte werden in der Eigenschaftenliste gelb angezeigt und im Diagramm hervorgehoben.

![VB site 7](//images.ctfassets.net/6mz8d8cle1nl/3qtna638bua1QUuCmSf2rI/8c980f0ea2ef7d99283bbda5ff737cea/VB_site_7.jpg)

![vb 8.jpg](//images.ctfassets.net/6mz8d8cle1nl/5WTYkFHozJ08iCIHH54ecj/dc0bdf49e4acf05cad1252c078bfa4a8/vb_8.jpg.png)

Es ist möglich, die Reihenfolge der Elemente und Farben neuer und geänderter Elemente anzupassen. Klicken Sie in der rechten oberen Ecke der Seite auf die Schaltfläche Einstellungen.

![vb 12jpg](//images.ctfassets.net/6mz8d8cle1nl/6vlF5aTSkIc3Q83FVTdxJE/2ca0d13ce8c455768ba3b3686c405e59/vb_12jpg.png)

Vier Optionen können auf der Site geändert werden:
- __Neue Elementfarbe: __ Wählen Sie die Farbe aus, um neue Elemente im Diagramm oder im Eigenschaftenblatt hervorzuheben und ihre Transparenz anzupassen.
- __Geänderte Elementfarbe: __ Wählen Sie die Farbe aus, um die geänderten Elemente im Diagramm oder im Eigenschaftenblatt hervorzuheben und ihre Transparenz anzupassen.
- __Baum-Artikelreihenfolge: __ Wählen Sie die Reihenfolge aus, um die Versionen im Baum anzuzeigen.
- __Inhalt-Artikelreihenfolge:__ __ Wählen Sie die Reihenfolge, um die Versionen der Diagramme auf der Site anzuzeigen.

![vb 13 jpg](//images.ctfassets.net/6mz8d8cle1nl/4CGFcMUOKaMfvnNcP1eReY/482cf383869577d507ea456d7c62cccb/vb_13_jpg.png)



<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>