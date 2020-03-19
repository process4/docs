

In diesem Schritt können Sie die Sortierung und die Reihenfolge der
Diagramme im Word Dokument bestimmen und Diagramme für den Bericht
auswählen.

![WR sortdiagr](//images.ctfassets.net/utx1h0gfm1om/4B1Ph2TMUnw0X0IvYwzpcv/f536f6a4efd643d469c2a6b7c1eaa6af/WR_sortdiagr.png)

-   **Sortieren der** Diagramme nach Attribut 

Diese Option erlaubt es Ihnen, Diagramme im Word-Reporter nach einem
oder mehreren Attributen zu sortieren (z. B. Unit, Typ, Kategorie usw.).

Wählen Sie im oberen Teil des Fensters in der Spalte **Attribut** aus,
nach welchem Attribut Diagramme gruppiert werden sollen (neue
Diagrammattribute können Sie in der Systemklasse Diagramm im Designer
anlegen). Wählen Sie in der Spalte **Reihenfolge**, ob Diagramme nach
diesem Attribut absteigend oder aufsteigend sortiert werden sollen. In
der Spalte **Kapitel** bestimmen Sie, ob im Word Dokument ein Kapitel
erstellt werden soll, das dem ausgewählten Attribut entspricht. Mit der
Schaltfläche ![](//images.ctfassets.net/utx1h0gfm1om/519AeJRUGAMQWiKA2gwMoK/72846a7c918c74527260de54d4de2bb8/1018559.png){width="43"
 fügen Sie ein neues Sortierungskriterium (Attribut) hinzu,
mit der Schaltfläche ![](//images.ctfassets.net/utx1h0gfm1om/4WMCkqKKMUWemOcI8KCOqs/db821d80058a77550580428f12156185/1018585.png){width="41"
 löschen Sie ein vorhandenes Kriterium. In der Liste
unten, können Sie verfolgen, wie Ihre Diagramme ins Word exportiert
werden.

Sie können die Reihenfolge der Regeln per drag-&-drop der Zeile
verändern. Klicken Sie am besten auf die Nummer vor der Zeile und ziehen
Sie diese an den neuen Platz.

Sie definieren zum Beispiel Attribut Unit als erstes
Sortierungskriterium. In diesem Fall werden Diagramme
nach ***Units** *gruppiert (Units alphabetisch absteigend oder
aufsteigend). Als zweites Kriterium wählen Sie
Attribut ***Klassifikation** *aus. Innerhalb der Sortierung
nach ***Unit** *werden Diagramme nach der
***Klassifikation** *gruppiert. Und als letztes wählen Sie den
Diagramm ***Namen** *aus. Innerhalb der Sortierung
nach ***Klassifikation** *werden Diagramme alphabetisch sortiert. Für
Attribute ***Unit** *und ***Klassifikation** *erstellen Sie ein Kapitel
im Word, für Diagramm Name nicht.  
Im unteren Teil des Fensters können Sie jene Diagramme auswählen, die
exportiert und in den generierten Bericht aufgenommen werden sollen.   
  

 

 

 

Rechts ist ein Beispiel des Inhaltsverzeichnisses für die oben
beschriebene Gruppierung.

![](//images.ctfassets.net/utx1h0gfm1om/1KGa5vDfo8q4IUESYyAoSS/6733285d381461f787a15901e42d1117/1017936.png)  

![](//images.ctfassets.net/utx1h0gfm1om/1tKgsMFeH6YYgg2q4aWUOo/0ac5690e08db020cbcfa10a2c201d5e8/1017949.png)

-   **Diagrammbaum generieren**

Diese Option erlaubt es Ihnen, Diagramme in Form eines Hierarchiebaums
(wie im Repository) ins Word zu publizieren.

Im unteren Teil des Fensters können Sie jene Diagramme auswählen, die
exportiert und in den generierten Bericht aufgenommen werden sollen.
Units, die keine Diagramme haben die exportiert werden, werden nicht in
diesem Dialog angezeigt, außer Sie haben Objekte aus dieser Unit zum
Publizieren ausgewählt.  
In diesem Fall wird die Nummerierung der Diagramme entsprechend der
Diagrammebene im Baum vorgenommen: 1.Grand Parent Diagramm, 1.1. Parent
Diagramm, 1.1.1. Child Diagramm etc.  
  
Wenn Sie einige Diagramme abwählen, dann werden diese im Diagrammbaum
noch angezeigt mit Diagrammname und Nummer, aber keine Diagramme oder
Objekte werden publiziert. Diese "leeren" Diagramme werden auch im
Inhaltsverzeichnis angezeigt.  
Innerhalb des Diagrammbaums können Sie Diagramme via Drag-and-Drop
verschieben und in beliebige Reihenfolge innerhalb der ausgewählten Unit
bringen. Die von Ihnen definierte Reihenfolge von Diagrammen wird in den
Wo rd Bericht übernommen.

  
1) Wenn Sie ein Diagramm (*Reklamation durchführen*) parallel zu einem
anderen Diagramm (*After Sales Prozess*) publizieren möchten,
verschieben Sie das gewünschte Diagramm (*Reklamation durchführen*) so,
dass die Linie mit Pünktchen unter dem Ziel-Diagramm (*After Sales
Prozess*) liegt.  
![](//images.ctfassets.net/utx1h0gfm1om/lzgPlJAsw0gwsUmAYwO88/d7f6562f55a3e33493436bebbcc577e9/1017895.png)  
Ergebnis:  
![](//images.ctfassets.net/utx1h0gfm1om/1q1RCxR4kgYGq2UKe2eI2O/d12c8839a007deae16bab99dd32f4749/1017892.png)  
  
2) Wenn Sie ein Diagramm (*Reklamation durchführen*) unter einem anderen
Diagramm (*After Sales Prozess*) publizieren möchten (als Child-Diagramm
), verschieben Sie das gewünschte Diagramm (*Reklamation durchführen*)
so, dass die Linie mit Pünktchen das Ziel-Diagramm (*After Sales
Prozess*) kreuzt.  
![](//images.ctfassets.net/utx1h0gfm1om/66KpDS1TlmWwo6my0wm0mS/54f66a3e78b39601c2c4a46bbb2e8f3c/1017903.png)  
Ergebnis:  
![](//images.ctfassets.net/utx1h0gfm1om/1mBx6idaMoI8sQYEkOygMa/2cd066d6967531a342d32d53128f0892/1017900.png)  
3) Wenn Sie die Reihenfolge paralleler Diagramme ändern möchten
(Diagramm *Reklamation durchführen* soll vor dem Diagramm *After Sales
Prozess* publiziert werden), verschieben Sie das Diagramm *Reklamation
durchführen* so, dass die Linie mit Pünktchen über dem Ziel-Diagramm
*After Sales Prozess* liegt.  
![](//images.ctfassets.net/utx1h0gfm1om/1XpDre1rgAioE2ee6ASc2M/5c6b00a5cb83d5b1e0b26212820a8a1c/1017911.png)  
Ergebnis:  
![](//images.ctfassets.net/utx1h0gfm1om/4TczMhg9AcOiiGm4SWYQae/62e36b824b2e371542a7dff4f87ff6f1/1017858.png)  
  
Mit der Schaltfläche ![](//images.ctfassets.net/utx1h0gfm1om/7hjQfcOG3eOUeAGSQAa2Se/0f0ba41fb937fd090b130421be5fd7e3/1017854.png) können Sie den
Diagrammbaum in den Default-Zustand zurücksetzen.

![](//images.ctfassets.net/utx1h0gfm1om/23awRZv0xCQWKCyGKwoWUy/f3f7e4c9a4cff974486d39976b9e226e/1017887.png)  

![](//images.ctfassets.net/utx1h0gfm1om/6YCYAPeaLCuK8uCmKGo6Qs/68f834e13b21ff57af7f007354513b86/1017883.png)


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>