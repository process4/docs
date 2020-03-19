

Im QueryBuilder ist es möglich, einen oder mehrere Parameter für eine
Abfrage zu definieren. Parameter können Sie in einem speziellen
Parameter-Fenster eintragen. Geben Sie hierbei zuerst den DBName des
Parameters ein.

Definieren Sie dann einen ***Wert*** und einen ***DefaultWert*** für den
Parameter. Der ***Wert*** ist ein Parameterwert, der sich vom
***DefaultWert*** unterscheiden kann und der nach dem Logout aus der
Datenbank wieder auf den ***DefaultWert*** zurückgesetzt wird. Der
***Wert*** wird im Gegenssatz zum ***DefaultWert*** NICHT in der
Datenbank gespeichert. Der ***DefaultWert*** wird hingegen verwendet,
wenn das Feld ***Wert*** leer ist. Der ***DefaultWert*** wird in der
Datenbank gespeichert und ist nach dem Logout/Login wieder verfügbar.

![](//images.ctfassets.net/utx1h0gfm1om/CC16TTUUNMCoY0G4A2cGk/9938044d245620165ea004f582acff22/1018655.png)   
  
Wenn Sie dann den definierten Parameter für eine Abfrage verwenden
möchten, müssen Sie für die ausgewählte Abfrage-Zeile folgende Bedingung
definieren: "ist gleich "@DBName" ", wobei DBName - hier der DBName des
Parameters ist.  
![](//images.ctfassets.net/utx1h0gfm1om/7eILaghmKcSqQ06KmkOqKS/cf3319f73d146eea58a307818c20f316/1018650.png)   
  
Hierzu ein Beispiel, wie die Parameter für eine Abfrage verwendet werden
können.  
1.) In der ersten Abfrage "*Prozess Gruppe Diagramme*" werden alle
Diagramme aufgelistet, die eine Prozessgruppe und die darauf liegenden
Prozesse beinhaltet. Auch die ID-Nummer von diesen Diagrammen wird
aufgelistet.

 ![](//images.ctfassets.net/utx1h0gfm1om/2TmqL8BdpmAY6esAeoywW8/4ba8269387b070cd2e3da56df9b8c1e8/1018666.png)  
  
2.) In der zweiten Abfrage "*Prozesse von einer Prozessgruppe*" sollen
nun alle Prozesse einer Prozessgruppe aufgelistet werden, die auf einem
von diesen Prozess- Gruppe-Diagrammen verwendet werden. Dazu wird in der
Abfrage eine Zeile "VerwendetInDiagramm" eingebaut und ein Parameter
erstellt, in den die ID-Nummer des Diagramms aus der ersten Abfrage als
Wert eingegeben wird. In der Zeile "VerwendetInDiagramm" wird außerdem
eine Bedingung "ist gleich @ID" definiert. Im Beispiel werden in dieser
Abfrage dann alle Prozesse aufgelistet, die auf dem Diagramm mit der
ID=3531, also auf dem Diagramm "Vertrieb" verwendet werden.  
![](//images.ctfassets.net/utx1h0gfm1om/1EWc5KgISoU0ceqQc2sQk/5478d40f33c4015410f43385aa403d39/1018660.png)   
Wenn der Wert des Parameters auf einen anderen Diagramm-ID aus der
ersten Abfrage "*Prozess Gruppe Diagramme*" geändert wird, dann werden
alle Prozesse aufgelistet, die auf dem Diagramm mit dem in dem Parameter
eingegebenen ID verwendet werden.  
Die Möglichkeit zur Nutzung von Parametern in Abfragen ist besonders
sinnvoll in der Kombination mit der Verwendung der Erweiterung
[DocumentComposer](DocumentComposer).


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>