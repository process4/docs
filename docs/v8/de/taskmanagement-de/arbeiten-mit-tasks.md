## Objekt Kontextmenü

Wählen Sie irgendein Data-Objekt im Repository oder ein Diagramm und klicken Sie die rechte Maustaste. Es gibt da eine „Synchronisiere mit dem Exchange-Server“ Option im Kontextmenü. (Funktioniert auch für mehrere Objekte/Vorlagen) 

![](//images.ctfassets.net/utx1h0gfm1om/27op81FPDW0aM2Qw2iKoEY/db240a94bc7a6b86ab0000eb5b7f7043/328851.png)


Hier können Funktionen um mit den Tasks der ausgewählten Objekte zu arbeiten, gefunden werden. Tasks können erstellt werden, Task Daten können aus dem Exchange geladen werden oder zu Exchange gesendet werden, und bereits verknüpfte Tasks können aus dem Exchange gelöscht werden. 

### Daten zu Exchange senden

Damit die Tasks in Exchange erscheinen, sollten sie dorthin gesendet werden indem entsprechende Befehle aus dem Kontextmenü gewählt werden.
Für jedes nicht verknüpfte Task aus dem p4b, wird ein entsprechendes Task im Exchange erstellt und mit Daten aus dem p4b Task gefüllt und das p4b Task wird mit dem Exchange verknüpft. Der Ausführer wird eine E-Mail auf seine Exchange E-Mail-Adresse bekommen, wo ihm mitgeteilt wird, dass ein Task für ihn im p4b erstellt wurde. 
Daten für jeden verknüpften Task werden von p4b zum Exchange gesendet. Befehlsausführung wird alle Tasks des ausgewählten Objekts beeinflussen. 


![](//images.ctfassets.net/utx1h0gfm1om/6hi7g5rfa0Y4iguYIE6woo/82292ae0dd494bd2df873845f24b63d9/328865.png)


### Daten aus dem Exchange bekommen

Um Daten aus dem Exchange für verknüpfte Tasks zu bekommen nutzen Sie den Befehl „Aktualisiere alle Tasks“. Es werden alle Daten für alle verknüpften Tasks aus dem Exchange aktualisiert. 

![](//images.ctfassets.net/utx1h0gfm1om/5gPSmHxXkIIOQw4WowSuwW/16f7fa90c623fa2e2c85cb537990ee14/328855.png)

### Tasks aus dem Exchange löschen

Um alle verknüpften Tasks der ausgewählten Objekte zu löschen nutzen Sie den Befehl „Alle Tasks aus dem Exchange-Server löschen“. Alle Task-Besitzer werden eine E-Mail empfangen, dass das Task gelöscht wurde. 

## Task Erstellung

![workingwtaskM](//images.ctfassets.net/6mz8d8cle1nl/5QfCZwhyB1iXr4k5gHmNgC/c5caea6393c697d94034f65acd53ee9c/workingwtaskM.png)

Verschiedene Eigenschaften sollten ausgefüllt werden, wenn ein Task in p4b erstellt wird. Zum Beispiel Ausführer (für Integration mit Exchange sollte die E-Mail im Exchange-Server benutzt werden), Subjekt, Task Beschreibung und viele andere mit dem Task verbundene Eigenschaften (direkt analog mit Task Eigenschaften im Exchange oder Outlook). 
Jedes p4b Task hat eine Eigenschaft Synch status, wo Status der letzten Synchronisierung gespeichert wird. Es kann zeigen, dass das Task überhaupt nicht verknüpft mit Exchange ist, erfolgreich synchronisiert oder die Synchronisierung gescheitert ist. Der Ausführer kann manuell ausgefüllt werden (nicht nur die E-Mail sondern auch der Name – benutzen Sie NAME <E-MAIL> Format). Der Ausführer kann auch aus der Liste der der Exchange Kontakte ausgewählt werden. Um dies zu tun, nutzen Sie den Knopf „...“.

![workingwtaskM2](//images.ctfassets.net/6mz8d8cle1nl/4zg42pS62akEMLVqW2rBrr/689bfb98a5ed26e4c06477abc21f2d34/workingwtaskM2.png)

In diesem Dialog kann jedes vorher geladene Kontakt ausgewählt werden und wird aus Ausführer des Tasks ausgefüllt. 
 
## Tasks Anschauung

In der Abhängigkeits-Ansicht oder im Attribut-Explorer im Modeler gibt es einen Tab „Tasks“. Wechseln Sie zu diesem Tab um eine Liste aller Tasks der ausgewählten Objekte zu finden und um mit jedem einzelnen Task arbeiten zu können.  

![workingwtaskM3 en](//images.ctfassets.net/6mz8d8cle1nl/3LZexPgcD9ugAHCVqf5tso/f56d87c8a508f026cba4281d33974d66/workingwtaskM3_en.png)

Hier erscheint eine Liste aller Tasks der derzeit ausgewählten Objekte mit manchen ihrer Eigenschaften. Mit Doppelklick auf irgendeinem Task, wird die Aktualisierung dieses Tasks ausgeführt (Daten werden aus dem Exchange-Server geladen). Mit Rechtsklick auf einen Task (oder irgendein leeren Platz in dieser Ansicht) erscheint das Kontextmenü, wo Befehle für das Taskmanagement gefunden werden können. Es existieren 2 Arten von Befehlen – Befehle die nur ausgewählte Tasks beeinflussen und Befehle die alle Tasks beeinflussen. 

 
![](//images.ctfassets.net/utx1h0gfm1om/55f7HVyH6oEuwkQQeSoCGW/27df4fce7a03ac8c51f90f7f8510bcb8/328853.png)

 

### Eigenschaften

Mit dem Befehl „Eigenschaften“ wird ein ähnliches Fenster wie bei Task-Erstellung geöffnet. Alle Eigenschaften der gewählten Tasks werden ausgefüllt. Abhängig von Einstellungen und Task Status (ob es verknüpft mit Exchange ist oder nicht) können diese Daten modifiziert werden oder werden nur in der Leseansicht gezeigt

### Löschen von Tasks aus p4b

Mit dem Befehl „Löschen“ werden ausgewählte Tasks aus dem p4b gelöscht. Abhängig von den Einstellungen kann die Ausführung dieses Befehls auch versuchen, es aus dem Exchange zu löschen (verknüpft mit dem Task, das gerade gelöscht wird). In diesem Fall bekommt der Ausführer des Exchange-Tasks eine E-Mail über die Löschung. 

### Daten der ausgewählten Tasks zu Exchange senden
Es funktioniert ähnlich wie das Senden der Daten aller Tasks, aber es werden Daten nur der ausgewählten Tasks gesendet, währen alle anderen Tasks unberührt bleiben. 


### Löschen der ausgewählten Tasks aus Exchange

Wie alle anderen Befehle auf ausgewählten Tasks – funktioniert ähnlich wie für alle Tasks, nur auf ausgewählten Tasks. 

### Kontextmenü-Befehle mit Objekten

Alle anderen Befehle sind exakt die gleichen wie Kontextmenü-Befehle im Repository oder Vorlagen im Modeler. 
