

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

![12-DE-1](//images.ctfassets.net/6mz8d8cle1nl/5SBsNnmaFGQwCoiwaYY2WE/d325df767e0978c6a38f5f554cac619f/12-DE-1.png)
  
Wenn Sie dann den definierten Parameter für eine Abfrage verwenden
möchten, müssen Sie für die ausgewählte Abfrage-Zeile folgende Bedingung
definieren: "ist gleich "@DBName" ", wobei DBName - hier der DBName des
Parameters ist.  
![12-DE-2](//images.ctfassets.net/6mz8d8cle1nl/2TiHCQsZZKkSwCe6woGMMs/313c977422763784f8beee22a32ee1d3/12-DE-2.png)
  
Hierzu ein Beispiel, wie die Parameter für eine Abfrage verwendet werden
können.  
1.) In der ersten Abfrage "*Prozess Gruppe Diagramme*" werden alle
Diagramme aufgelistet, die eine Prozessgruppe und die darauf liegenden
Prozesse beinhaltet. Auch die ID-Nummer von diesen Diagrammen wird
aufgelistet.

 ![12-DE-3](//images.ctfassets.net/6mz8d8cle1nl/5Z8lpwFEhGWa0I6CqcA0MK/3cde40efa8e5254b32d225ab10c70bf9/12-DE-3.png)
  
2.) In der zweiten Abfrage "*Prozesse von einer Prozessgruppe*" sollen
nun alle Prozesse einer Prozessgruppe aufgelistet werden, die auf einem
von diesen Prozess- Gruppe-Diagrammen verwendet werden. Dazu wird in der
Abfrage eine Zeile "VerwendetInDiagramm" eingebaut und ein Parameter
erstellt, in den die ID-Nummer des Diagramms aus der ersten Abfrage als
Wert eingegeben wird. In der Zeile "VerwendetInDiagramm" wird außerdem
eine Bedingung "ist gleich @ID" definiert. Im Beispiel werden in dieser
Abfrage dann alle Prozesse aufgelistet, die auf dem Diagramm mit der
ID=3531, also auf dem Diagramm "Vertrieb" verwendet werden.  
![12-DE-4](//images.ctfassets.net/6mz8d8cle1nl/3U69ySjWCcusI2MIuwEKG0/bb9200c34662bdc4bf4735284a7d94b2/12-DE-4.png)
Wenn der Wert des Parameters auf einen anderen Diagramm-ID aus der
ersten Abfrage "*Prozess Gruppe Diagramme*" geändert wird, dann werden
alle Prozesse aufgelistet, die auf dem Diagramm mit dem in dem Parameter
eingegebenen ID verwendet werden.  
Die Möglichkeit zur Nutzung von Parametern in Abfragen ist besonders
sinnvoll in der Kombination mit der Verwendung der Erweiterung
[DocumentComposer](DocumentComposer).

