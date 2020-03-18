

#### Schwimmbahnen-Technologie mit Ausschluss bestimmter Klassen

Wenn Sie eine Verknüpfungs-Technologie für Objekte einer bestimmten
Klasse nicht bei allen Verknüpfungskandidaten (= Objekte weiterer
Klassen) zulassen wollen, gehen Sie wie folgt vor.   
Aktivieren Sie eine Regel, welche die Schwimmbahnen-Technologie unter
Verwendung eines bestimmten Verknüpfungstyps für beliebige Klassen
erlaubt . Definieren Sie eine weitere Regel, welche
Schwimmbahnen-Technologie mit einem ausgewählten Verknüpfungstyp für
eine bestimmte Klasse (z.B. Person4) nicht erlaubt.

![](//images.ctfassets.net/utx1h0gfm1om/5mZVqNhTLaAmWY4GGemkOA/344fb5d17103423f890dc5fbf8ad8176/1017341.png)

 ![](//images.ctfassets.net/utx1h0gfm1om/6OEWLDJlCgOciIsKgWOYM8/35a88283fb459c6162d9f47f84c97b19/1017378.png)

Das Diagramm im Beispielbild unten erzeugt eine automatische Verknüpfung
des Typs Schwimmbahnen-Technologie zwischen den Objekten
***Applikation2*** und ***Stelle1.***

![](//images.ctfassets.net/utx1h0gfm1om/1iuSXpHavsYUouas828Eiw/be463d7ac604b4b97659784e7071456d/1017380.png)  
  
  
Zum Objekt Person besteht aber aufgrund der definierten Regeln keine
Verknüpfung. Die zu verknüpfenden Objekte müssen dabei weder
übereinander liegen, noch sich komplett überlappen: schon eine
Überschneidung, bezogen auf ca. 30 Prozent des Gesamtraumes aktiviert
die Verknüpfung.

#### Schwimmbahnen für alle aufeinander liegenden Objekte bzw. nur für direkt aufeinander liegende Objekte

Sie können zwei Arten von Schwimmbahnen-Technologie verwenden: 

-   Schwimmbahnen aktivieren (alle aufeinander) 

Wenn mehrere Shapes aufeinander liegen, werden ALLE Objekte verknüpft,
auch jene, die keinen unmittelbaren Kontakt haben. Im folgenden Beispiel
liegen die Objekte A, B und C übereinander, sodass Objekt A nur das
Objekt B berührt, B berührt A und C, C berührt nur B. 

![](//images.ctfassets.net/utx1h0gfm1om/6tVTLcKvE4egwI6Ksg8Yie/dd54959f882f9eda77b5894db8ca412a/1017390.png)  
  
Aktivieren Sie für die entsprechenden Klassen zu diesen Objekten die
Schwimmbahnen-Technologie mit der Erweiterung „(ganzen Shape-Stapel)". 

![](//images.ctfassets.net/utx1h0gfm1om/W991jxdY080OMUqcSYg6m/04012b69a1adb0c231f4db016279b8f8/1017386.png)  
In der Folge werden alle Objekte unterschiedlicher Ebenen auf diesem
Diagramm miteinander verknüpft: A mit B und C, B mit A und C, C mit A
und B. 

-   Schwimmbahnen nur für direkt aufeinander liegende Objekte aktivieren

Wenn mehrere Shapes aufeinander liegen, werden nur unmittelbar
kontaktierende Objekte verknüpft.  
![](//images.ctfassets.net/utx1h0gfm1om/27CixRYBmEYoO8Isq6oOaw/d5afc39a031599c3860ade76362bff69/1017376.png)  
Wenn für alle Klassen im oben beschriebenen
Beispiel Schwimmbahnen-Technologie einfach (ohne den Zusatz
„ganzen Shape-Stapel") aktiviert wird, werden die Objekte wie folgt
verknüpft: A mit B, B mit A und C, C mit B. Die Objekte A und C werden
dabei nicht verlinkt.

 

