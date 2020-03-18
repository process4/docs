

Im QueryBuilder ist es auch möglich schon existierende Abfragen zu
verwenden, um darauf aufbauend neue Abfragen zu erstellen.

Die existierende Abfrage wird Basisabfrage genannt, die neue Abfrage
wird Nachfolger-Abfrage genannt. Die Idee ist, dass das Ausgabeergebnis
von der Basisabfrage, als Eingabe einer nachfolgenden Abfrage verwendet
wird.  
Um diese Funktionalität zu nutzen, muss zunächst eine Abfrage aus der
Auswahlbox Basisabfrage gewählt werden. Danach wählen Sie für die
ausgewählte Abfrage eine Spalte in der Auswahlbox ***Spalte für die
Basisabfrage***, die dann als Input für die Nachfolger-Abfrage verwendet
wird.  
![7-DE-1](//images.ctfassets.net/6mz8d8cle1nl/74r3Nhjl7iqKkIMYMq8AeK/931f889e644e2716771b12028a74c931/7-DE-1.png)

![7-DE-2](//images.ctfassets.net/6mz8d8cle1nl/74r3Nhjl7iqKkIMYMq8AeK/a76104047fa86f60d9ed5395984fdfb2/7-DE-2.png) 
  
In der Liste der Abfragen wird die Basisabfrage als übergeordnet zur
nachfolgenden Abfrage dargestellt.  
![7-DE-3](//images.ctfassets.net/6mz8d8cle1nl/5JcGmF6TDi84s6eEuksaG8/29a97ccf3dffff20a20116e6adfae05f/7-DE-3.png)
Nur Abfragen der gleichen Klasse können als Basisabfragen verwendet
werden. Wenn man die Klasse der Basisabfrage ändert, wird auch die
Klasse der Nachfolger-Abfrage geändert. Wenn man die Basisabfrage
löscht, werden auch alle Nachfolger-Abfragen gelöscht. Funktionen wie
***Kopieren/Kopieren speziell*** und ***Einfügen/Einfügen speziell***
sind für die Abfragen erlaubt. Wenn man ***Kopieren speziell*** für die
Basisabfrage auswählt, können auch Nachfolger-Abfragen mitkopiert
werden.   
![7-DE-4](//images.ctfassets.net/6mz8d8cle1nl/1hnQQQidP686sKEQgS2aKq/305423c709388c4a5b88a83fbf9c60dc/7-DE-4.png)
  
Sie können das Vorgehen noch besser verstehen, wenn Sie dem folgenden
Beispiel folgen.  
In der Demodatenbank wird eine neue Abfrage *Abfrage1* erstellt, die
alle Objekte aus der *Unit 2.1. Enterprise Architecture* der Klassen
*Prozess* und *Applikation* anzeigen soll, und die mit diesen Objekten
über den Verknüpfungs-Typ "*verlinkt mit den folgenden Prozessen"*
verbunden sind.

![7-DE-5](//images.ctfassets.net/6mz8d8cle1nl/4P9DTOuxgc0GAumAS2Moyi/18a497ef24743bb87abee324fbd3f2ff/7-DE-5.png)
Diese soeben erstellte Abfrage wird als Basisabfrage für die neue
Abfrage *Abfrage2* genommen. In *Abfrage2* wird in der Auswahlbox
Basisabfrage *Abfrage1* und in der Auswahlbox ***Spalte für die
Basisabfrage*** der Eintrag *Name* gewählt.  
Nach dieser Auswahl wird im Eigenschaften-Browser der Eintrag *Name* und
z.B. Name der Diagramme gewählt, welche das Objekt verwenden. Wenn Sie
jetzt Abfrage ausführen klicken, dann werden in der ersten Spalte die
Objekte aus der *Unit 2.1. Enterprise Architecture* und von den Klassen
*Prozess* und *Applikation* mit dem Verlinkungs-Typ "*verlinkt mit den
folgenden Prozessen*" (diese Information ist der *Abfrage1* entnommen)
angezeigt. In der zweiten Spalte werden die Namen der Diagramme, auf
denen die Objekte verwendet, werden angezeigt.

![7-DE-6](//images.ctfassets.net/6mz8d8cle1nl/1FgMrBwL9ySeqMuccim8Cc/3c7d938b1545b0d3be697d286fbbfcca/7-DE-6.png)
  
  

