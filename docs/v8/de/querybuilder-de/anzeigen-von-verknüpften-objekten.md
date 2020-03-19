-   [Objektverknüpfungen mit einem Verknüpfungstyp anzeigen](#objektverknüpfungen-mit-einem-verknüpfungstyp-anzeigen)
-   [Option *Folge \[1,2,3..\] Knoten weiterer Verknüpfungen*](#option-folge-123-knoten-weiterer-verkn%c3%bcpfungen)
-   [Option *Folge allen Verknüpfungen im Modell rekursiv*](#option-folge-allen-verkn%c3%bcpfungen-im-modell-rekursiv)
-   [Option *Hinzufügen  \[1,2,3..\] weiterer Spalten für verknüpfte Objekte*](#option-hinzuf%c3%bcgen-123-weiterer-spalten-f%c3%bcr-verkn%c3%bcpfte-objekte)

In diesem Kapitel werden einige spezielle Funktionen zum Anzeigen verknüpfter Objekte im QueryBuilder beschrieben.

### Objektverknüpfungen mit einem Verknüpfungstyp anzeigen

In process4.biz ein Objekt wird über einen Verknüpfungstyp mit einem anderen Objekt verknüpft. Verbindungstypen können eine bestimmte Richtung haben oder bidirektional sein.

Wenn ein Verbindungstyp bidirektional ist, gibt es einen direkt vektorisierten Namen und ein entgegengesetzter Name des Verbindungstyps.

![9-DE-1](//images.ctfassets.net/6mz8d8cle1nl/5G0k2uNzfqQakcGSu8sGO2/037c24e10c57d3e2ee35bb42b96b5851/9-DE-1.png)

In QueryBuilder kann die Richtung des Verknüpfungstyps über die Eigenschaft 
`{Link}` __IsForward__ angezeigt werden. Wenn Sie diese in der Baumstruktur des 
Eigenschaften-Browsers auswählen, wird eine neue Spalte mit den Werten *Wahr* 
oder *Falsch* angezeigt:

![9-DE-2](//images.ctfassets.net/6mz8d8cle1nl/2mxzUSKy6QYc0W2oyCm42K/474dd9e196e0a85df70a73d6e52980e1/9-DE-2.png)

Wenn ein Objekt aus der ersten Spalte über einen direkten Verknüpfungstyp mit dem Objekt aus der zweiten Spalte verknüpft ist, wird in der Spalte __IsForward__ der Wert *Wahr* angezeigt. Wenn der Link entgegengesetzt ist, wird der Wert *Falsch* angezeigt. Darüber hinaus können Sie die Verknüpfungen im QueryBuilder auf ausgewählte Verknüpfungstypen einschränken, damit nicht alle verknüpften Objekte angezeigt werden, sondern nur die Objekte, die über den ausgewählten Verknüpfungstyp verknüpft sind.

In der Demo-Datenbank wird als Beispiel der Link-Typ "On Server" mit dem gerichteten vektornamen "Zur Verfügung gestellt von" und dem entgegengesetzten Namen "Host für" verwendet.

Mit diesem Verknüpfungstyp werden Objekte der Klasse *Server* mit Objekten der Klassen *Application* und *System* in *Unit 2.1. IT-Systeme* verknüpft. Objekte der Klasse *Server* werden mit Objekten der Klasse *Application* (oder *System*) über den entgegengesetzten Link "On Server" (wird als "Host für" angezeigt, da es in der Eigenschaft "Entgegengesetzter Name" des angegebenen Verknüpfungstyps festgelegt ist)

![9-DE-3](//images.ctfassets.net/6mz8d8cle1nl/3dz9U0lQR2WKgGSkoYOSYW/62f3efc782a7236a58b59a7dfb9f1677/9-DE-3.png)

Objekte der Klasse *Application* (sowie *System*) werden mit Objekten der Klasse *Server* mit dem Direktlink-Typ "On Server" verknüpft (wird als "Zur Verfügung gestellt von" angezeigt, da es in der Eigenschaft "Direkt gerichteter Name" des angegebenen Verknüpfungstyps festgelegt ist):

![9-DE-4](//images.ctfassets.net/6mz8d8cle1nl/3gLhvtJe3KmWekAUUkciqU/21dfe11bcdce0fe556e3b5f5d2773cea/9-DE-4.png)

Um die Verknüpfungen zwischen Objekten der Klasse *Server* und *Application* (Verknüpfungen zwischen *Server* und *System* werden __nicht__ angezeigt) im QueryBuilder anzuzeigen, sind folgende Felder in der Baumstruktur des Eigenschaften-Browsers ausgewählt:

 - Name
 - Im Knoten __Unit__ auf __Unit 2.1. IT-Systeme__ einschränken
 
![9-DE-6](//images.ctfassets.net/6mz8d8cle1nl/2OERUFXuRGCkoKkGUeqAOA/22b7d9c754fbd0420b47adcae3b13c5d/9-DE-6.png)

 - Im Knoten **ObjektClass** einschränken Sie auf die Klassen *Application* und *Server* (beschränken Sie sich auch auf *System*, wenn Sie es in den Ergebnissen sehen möchten):
 
![9-DE-7](//images.ctfassets.net/6mz8d8cle1nl/1M4ZBNOofGky8kc4SyIm86/831095924422515675920a858c82d7b9/9-DE-7.png)

 - Wählen Sie im Knoten __Link__ die Eigenschaft *IsForward* und den Namen für das verknüpfte Objekt aus:
 
![9-DE-8](//images.ctfassets.net/6mz8d8cle1nl/2eGKhwa2sYUccOSimG8iK6/1fc2fa13cae58c95b3395d16171f262c/9-DE-8.png)

 - Wählen Sie im Knoten __LinkType__ den Namen des Verknüpfungstyps aus:

![9-DE-9](//images.ctfassets.net/6mz8d8cle1nl/1zV3kSvIYA8qoUmE0EG4aA/81b7b8ab618509aeb6f3fb50ed986cad/9-DE-9.png)

Klicken Sie nun auf __Abfrage ausführen__ und Sie erhalten die Ergebnisse wie im nächsten Bild angezeigt. Die erste Spalte zeigt den Namen des Objekts, von dem eine Verknüpfung stammt (Hinweis *Mailbox-Datenbank* Objekt, das im obigen Beispiel verwendet wurde), die zweite Spalte zeigt den Typ des Objekts, die dritte Spalte zeigt den Namen des verknüpften Objekts (Hinweis VM. 001 Exchange-Objekt, das im obigen Beispiel verwendet wurde). In der vierten Spalte wird angezeigt, welcher Verknüpfungstyp zum Verbinden von zwei Objekten verwendet wurde (beachten Sie, dass es neben *Auf Server* noch weitere Verknüpfungstypen gibt, da es mehrere Verknüpfungen gibt, die *Anwendungs-* und *Server* -Objekte verbinden können). Die fünfte Spalte zeigt die Richtung der Verknüpfung (*IsForward* -Eigenschaft):

![9-DE-10](//images.ctfassets.net/6mz8d8cle1nl/3159tSLO5GyWYAWoKoouce/ea4a96f3518166fc9ba72a1019d4748a/9-DE-10.png)

Jetzt können Sie das Ergebnis auch nach der Eigenschaft *IsForward* filtern. Wenn Sie nur die Objekte mit dem direkten Verknüpfungstyp anzeigen möchten, öffnen Sie mit einem Doppelklick die Dialogbedingung für den Spaltenwert und wählen Sie *Wahr*. Wenn Sie nur Objekte sehen möchten, die durch den entgegengesetzten Verknüpfungstyp verbunden sind, wählen Sie einfach *Falsch*.

img

### Option *Folge \[1,2,3..\] Knoten weiterer Verknüpfungen*

Eine weitere Besonderheit von Links im QueryBuilder kann im nächsten Beispiel gezeigt werden.

Die Datenbank enthält bestimmte (organisatorische) Stellen mit damit verbundenen Personen. Andererseits gibt es Anwendungen, die von bestimmten Personen verwaltet werden. Wir möchten herausfinden, welche Anwendung(-en) von einer bestimmten Stelle verwaltet werden. Die Beziehung Stelle-Person wird über die Verbindungsart "Stelle Mitarbeiter" (nicht gerichtet) und die entsprechende Verbindungsregel dargestellt. Beziehung *Person* - *Anwendung* wird über den Linktyp "Administration" (mit direktem Vektornamen "Admin für") mit entsprechender Linkregel dargestellt.

![9-DE-11](//images.ctfassets.net/6mz8d8cle1nl/5m2FWJcR1YSKGoocQoMQgY/3c33472237792fd453079e445b2284c4/9-DE-11.png) 

Das obige Bild zeigt verschiedene Rekursionsebenen für Links: Grün - nullte Rekursionsebene (Objekt selbst), Rot - erste Rekursionsebene (eine Verbindung zu *Outlook* über Link *Admin für*), Blau - dritte Rekursionsebene (Verbindungen) von Verbindungen des ursprünglichen Objekts.

Wir möchten die erste Rekursionsstufe (rot auf dem Bild oben) in QueryBuilder modellieren. Wir erstellen eine neue Abfrage, markieren *Name* und beschränken *ObjectKlasse* auf den Objekttyp *Stelle*. In __Link - &gt; LinkedObject__ markiere *Name* und in __Link - &gt; LinkedObject - &gt; ObjectClass__ markieren Sie auch *Name* (wie in der Abbildung unten gezeigt). Es ist wichtig, *Trace* auf 1 zu setzen, um die Knoten weiterer Links zu verfolgen:

![9-DE-12](//images.ctfassets.net/6mz8d8cle1nl/60gT6FTSmIimumYsCysOmy/d7cd65d522d214f6a7d1e9278feac497/9-DE-12.png)

"Abfrage ausführen" liefert folgendes Ergebnis: Zwei Abfrageergebnisse, wobei eines die nullte Rekursionsebene (*Gerald Mustermann*) und das andere ist die erste Rekursionsebene (*Outlook*). Weitere Knoten und ihre Verbindungen können untersucht werden, indem der Wert der Anzahl der nachfolgenden Links im Eigenschaftenfenster links geändert wird.

### Option *Folge allen Verknüpfungen im Modell rekursiv*

Sie können auch die Option *Alle Verknüpfungen im Modell rekursiv verfolgen* auswählen. Diese Option ermöglicht es dem Benutzer, __alle__ Objekte mit direkter oder indirekter Verknüpfung zum ausgewählten (startenden) Objekt anzuzeigen. Wenn wir diese Option auf unser Beispiel anwenden, erhalten wir alle Verbindungen zum aktuellen Objekt (*Stelle*), aber auch zu den verknüpften Objekten, usw.

![9-DE-13](//images.ctfassets.net/6mz8d8cle1nl/6MhlvioQ3CKgCq4AGaUuom/115ad564e144dcd87482fa3b2be2008a/9-DE-13.png)

Diese Abfrage kann zu einer großen Anzahl von Objekten führen. Ausgehend von nur einem Objekt konnten 276 weitere Objekte erreicht werden. Dies liegt daran, dass die maximale Suchtiefe unbegrenzt ist und nur dann beendet wird, wenn keine neuen (weiteren) Objekte gefunden werden können. In unserem Beispiel hat QueryBuilder 9 weitere Ebenen der Objektsuche durchgeführt, um das Ende einer Suche zu erreichen. Dies bedeutet, dass in diesem Fall die Auswahl der Option *Folge __9__ Knoten weiterer Verknüpfungen* identisch mit der Option *Folge allen Verknüpfungen im Modell rekursiv* ist.


### Option *Hinzufügen  \[1,2,3..\] weiterer Spalten für verknüpfte Objekte*

Mit dieser Option ist es möglich, die Verknüpfungen auf der ersten Ebene eines Objekts in mehreren Spalten anzuzeigen (anstatt in nur einer Spalte - Default). Wenn wir zum Beispiel die *Objektklasse* Spalte im QueryBuilder-Ergebnis anzeigen möchten, fügen wir eine weitere Spalte für verknüpfte Objekte hinzu und wählen den ObjectKlasse-Namen der neu aufgetretenen {Verknüpfung1} Verbindung. Dies ist auf dem Bild unten dargestellt:

![9-DE-14](//images.ctfassets.net/6mz8d8cle1nl/uODithwkRE8ESKEAMiAyu/3786d1363ae3ac2c54e8457424fc3d72/9-DE-14.png) 

Die Anzahl der anzuzeigenden Spalten hängt von der in der Option festgelegten Anzahl ab. Für jede Spalte wird ein neues __{VerknüpfungX}__ erstellt, das geändert werden kann, um die gewünschten Spalten anzuzeigen.

![9-DE-15](//images.ctfassets.net/6mz8d8cle1nl/403QcPrP1mSOEC08i4QEIE/c3f60109493f6ed8ed47f20de784c9fb/9-DE-15.png)

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>