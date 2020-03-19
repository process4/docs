

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
![](//images.ctfassets.net/utx1h0gfm1om/3oUJvuOprqGo0QAqWsaqWK/b329ff38973df50e370379fa0127abfe/1017418.png)

 ![](//images.ctfassets.net/utx1h0gfm1om/6jRhDpbmEgy0cGC0k0AWuE/d909aab400cb7ad5c0ceb1536422f827/1017433.png)  
  
In der Liste der Abfragen wird die Basisabfrage als übergeordnet zur
nachfolgenden Abfrage dargestellt.  
![](//images.ctfassets.net/utx1h0gfm1om/5aFIcW1llu2SmQ0uQ6S0im/00ecfe5e48df35a8dba08290f0dd4a46/1017427.png)   
Nur Abfragen der gleichen Klasse können als Basisabfragen verwendet
werden. Wenn man die Klasse der Basisabfrage ändert, wird auch die
Klasse der Nachfolger-Abfrage geändert. Wenn man die Basisabfrage
löscht, werden auch alle Nachfolger-Abfragen gelöscht. Funktionen wie
***Kopieren/Kopieren speziell*** und ***Einfügen/Einfügen speziell***
sind für die Abfragen erlaubt. Wenn man ***Kopieren speziell*** für die
Basisabfrage auswählt, können auch Nachfolger-Abfragen mitkopiert
werden.   
![](//images.ctfassets.net/utx1h0gfm1om/2ubVPc7eiIig20gMC4KAmY/6934d5c5f3d77c4d5176feda6cf1af31/1017663.png)   
  
Sie können das Vorgehen noch besser verstehen, wenn Sie dem folgenden
Beispiel folgen.  
In der Demodatenbank wird eine neue Abfrage *Abfrage1* erstellt, die
alle Objekte aus der *Unit 2.1. Enterprise Architecture* der Klassen
*Prozess* und *Applikation* anzeigen soll, und die mit diesen Objekten
über den Verknüpfungs-Typ "*verlinkt mit den folgenden Prozessen"*
verbunden sind.

![](//images.ctfassets.net/utx1h0gfm1om/54k6XrFQ5yqYKMiIUcS00S/95232b11e7cb20ad4ebc4e41948eebfb/1017656.png)  
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

![](//images.ctfassets.net/utx1h0gfm1om/1ONbQz4HlaUuEIA0SIaMmM/66fa4c9b83cb7158dbc7070c03eb8464/1017673.png)  
  
  


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>