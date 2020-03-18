
Um eine RACI-Verbindungstechnologie zu ermöglichen, aktivieren Sie
diese Technologie im Designer für die ausgewählten Klassen
folgendermaßen.

1.  Erstellen Sie einen Verknüpfungstyp beispielsweise mit dem Namen
    „RACI" im Designer. Als Assoziationsklasse definieren Sie z. B. die
    Klasse RACI. Objekte dieser Klasse werden dann als
    Assoziationsobjekte in den Eigenschaften verknüpfter Objekte
    angezeigt.   
    ![](//images.ctfassets.net/utx1h0gfm1om/6jf9xdQcTe6AGGoeIeKse6/2d25a5af030bf22cb9c9c5b73aa84d1c/1017363.png)
2.  Wählen Sie die erste Klasse (in unserem Beispiel: ***Aktivität***),
    öffnen Sie deren Eigenschaften- Dialogfenster und wechseln Sie zum
    Reiter Verknüpfungsregeln.
3.  Markieren Sie die zweite Klasse (hier: ***Rolle***) mit der Sie den
    Verknüpfungstyp „RACI" verwenden möchten in der Kandidatenliste. Mit
    dem Button „Regel hinzufügen…" wählen Sie den Verknüpfungs-Typ und
    der Verknüpfungstechnologie aus, aktivieren ihn für die Zielklasse
    und bestätigen anschließend mit „OK". Über den Button „Regel
    bearbeiten…" lässt sich diese später ändern.  
     ![](//images.ctfassets.net/utx1h0gfm1om/3xolqLwYaISkUY8CoG8sOc/3777aa3246aaded61935b2857ac029cc/1017364.png)
4.  Im Repository sind in der Assoziationsklasse RACI z. B. die
    folgenden Objekte „A", „C", „CUS", „I", „R", „S" usw. vorhanden. Sie
    können beliebig viele zusätzliche Objekte in dieser Klasse anlegen,
    die dann als Assoziationsobjekte bei Verknüpfungen zwischen
    Aktivitäten und Rollen herangezogen werden. 

 ![](//images.ctfassets.net/utx1h0gfm1om/1ppj90GJc8CoyKSSEqwYwA/feb71d000280d1283edc87b01edd4d19/1017361.png)  
Auf den folgenden Beispiel-Diagrammen werden die Vorteile der soeben
beschriebenen RACI-Verknüpfungstechnologie rasch ersichtlich.   
Die Erzeugung automatischer Verknüpfungen zwischen der Aktivität
„Kundendaten erfassen" und den Rollen „VKF", „VKFADM", „VKF LT"
bezüglich der Objekte „R", „A", „C" und „I", die als
90°Grad-Schwimmbahnen am Template liegen, kann durch simples Ablegen der
Objekte per „Drag-&-Drop" mit der richtigen Lage am Diagramm hergestellt
werden. Dadurch wird jeder Rolle die entsprechende Verantwortlichkeit
für die verknüpfte Aktivität über das verwendete Assoziationsobjekt „
R", „A", „C" oder „I" der Klasse RACI zugeordnet.   
  
 ![](//images.ctfassets.net/utx1h0gfm1om/jomSEsukdqu4YIiYyYSmy/db4ceb7778595d280539d7686505ced6/1017362.png)

Hier folgt ein Beispiel, bei dem die RACI-Technologie mit dem selben
Verknüpfungstyp für andere Klassen, nämlich ***Input-Output*** und
***Kunde*** definiert wurde. 

![](//images.ctfassets.net/utx1h0gfm1om/FOYoJXwjO8EmA6Qc0SS6M/fbcf7521e1d679b926fef55823698b06/1017366.png)

 

