-   [Objektverknüpfungen mit einem Verknüpfungstyp anzeigen](#objektverknüpfungen-mit-einem-verknüpfungstyp-anzeigen)
-   [Rekursive Verknüpfungen anzeigen](#rekursive-verknüpfungen-anzeigen)
-   [Verknüpfte Objekte in einer Spalte anzeigen](#verknüpfte-objekte-in-einer-spalte-anzeigen)
-   [Verknüpfte Objekte in mehreren Spalten anzeigen](#verknüpfte-objekte-in-mehreren-spalten-anzeigen)

Dieses Kpaitel beschreibt einige Besonderheiten der Anzeige von
verknüpften Objekten im QueryBuilder.


### Objektverknüpfungen mit einem Verknüpfungstyp anzeigen

In process4.biz ist ein Objekt mit einem anderen Objekt über einen
Verknüpfungstyp verbunden. Verknüpfungstypen können eine bestimmte
Richtung haben oder aber bidirektional sein
(siehe [Verknüpfungstypen](Verknüpfungstypen)[).](http://www.process4.biz/HelpContent/540/mod-hand/de/)

Wenn ein Verknüpfungstyp zwei Richtungen hat, dann gibt es einen direkt
gerichteten und einen entgegengesetzten Namen des Verknüpfungstyps. 

![](//images.ctfassets.net/utx1h0gfm1om/1kUm56UTXeGwi2soUi4eYo/0be48267b95cff32a54bcfa8753b8f17/1017639.png)   
  
Im QueryBuilder kann die Richtung des Verbindungstyps über
das Verknüpfungsattribut ***IsForward*** dargestellt werden. Wenn Sie es
im Baum des Eigenschaften-Browsers auswählen, dann wird eine neue Spalte
mit den Werten *Wahr* oder *Falsch* angezeigt.

Wenn ein Objekt aus der ersten Spalte durch einen direkten
Verknüpfungstyp mit dem Objekt aus der zweiten Spalte verbunden ist,
dann wird in der Spalte ***IsForward*** der Wert *Wahr* angezeigt. Wenn
es ein entgegengesetzter Verknüpfungstyp ist, dann wird der Wert
*Falsch* angezeigt. Darüber hinaus können Sie im QueryBuilder die
Verknüpfungen auch auf ausgewählte Verknüpfungstypen einschränken, um
nicht alle verknüpften Objekte darzustellen, sondern nur jene Objekte,
die über den ausgewählten Verknüpfungstyp verknüpft sind.

Aus der Demodatenbank kann der Verknüpfungs-Typ "verlinkt mit folgenden
Prozessen" mit dem entgegengesetzten Namen "verlinkt mit folgenden
Applikationen" als Beispiel herangezogen werden. 

Dieser Verknüpfungstyp wird verwendet, um Objekte der Klasse *Prozess*
mit Objekten der Klasse *Applikation* in der *Unit 2.1. Enterprise
Architecture* miteinander zu verbinden. Objekte der Klasse *Applikation*
sind direkt verbunden mit den Objekten der Klasse *Prozess* mit Hilfe
vom Verknüpfung "verlinkt mit den folgenden Prozessen":  
![](//images.ctfassets.net/utx1h0gfm1om/tgTksaPQ7QEsAEAAg8uGq/55d7f56cd4cf39bd5507f20bef0ede0d/1017633.png)   
  
Objekte der Klasse *Prozess* sind verbunden mit Objekten der Klasse
*Applikation* mit dem entgegengesetzten Verknüpfungstyp "verlinkt mit
folgenden Applikationen":  
![](//images.ctfassets.net/utx1h0gfm1om/Ogj9pHRM8E8AuuiuQS02a/82ee2fc003965d358deecc33a279e06e/1017649.png)   
Um die Verknüpfungen zwischen Objekten der Klasse *Prozess* und
*Applikation* im QueryBuilder darzustellen, werden die folgenden
Kästchen im Baum des Eigenschaften-Browsers ausgewählt:

-   Name
-   Im Knoten **Unit** beschränken Sie auf U*nit 2.1. Enterprise
    Architecture  
    ![](//images.ctfassets.net/utx1h0gfm1om/1EVsijWs3W8KqqiQ4QUs4/d8f028829b9f4266b818bd36fca85867/1017644.png)  
    *

<!-- -->

-   Im Knoten **ObjektKlasse** beschränken Sie auf die Klassen
    *Applikation* und *Prozess:*  
    ![](//images.ctfassets.net/utx1h0gfm1om/3qYOZgdafKCe8KSe24AwMM/6bd9f5561aa9b426c76ea5887d2cbd9d/1017579.png)

<!-- -->

-   Im Knoten **Verknüpfung** wählen Sie das Attribut ***IsForward***
    und Name für das verknüpfte Objektes

    ![](//images.ctfassets.net/utx1h0gfm1om/oMfrJKN1SKuuK6giu2g62/d4f54aa034f7223378592b8424d2e004/1017575.png)  
      

-   Im Knoten **Verknüpfungstyp** wählen Sie den Namen des
    Verknüpfungstyps aus:   
    ![](//images.ctfassets.net/utx1h0gfm1om/43abnK5qgUMA48KSsMmYuA/feaf4f90fef3207448704fc6f65d953e/1017595.png)  
      

Jetzt klicken Sie auf ***Abfrage ausführen*** und Sie werden die
Ergebnisse wie im nächsten Bild erhalten. In der ersten Spalte sehen Sie
die Objekte der Klassen *Prozess,* in der zweiten Spalte - die mit denen
verknüpften Objekte der Klasse *Applikation. *Die dritte Spalte steht
den Namen des Verknüpfungstyps "verlinkt mit folgenden Prozessen" und in
den vierten Spalte die Richtung des Verknüpfungstyps "Ist vorwärts".  
![](//images.ctfassets.net/utx1h0gfm1om/2zzK9I3hLukCikKkGOSYYa/ee21da5dc036f12ffe568b9ec03cc51f/1017599.png)

Sie können die Ergebnisausgabe jetzt auch nach dem Attribut "IsForward"
filtern. Wenn Sie nur die Objekte mit dem direkten Verknüpfungstyp (in
unserem Beispiel ist das "verlinkt mit dem folgenden Prozess") anzeigen
wollen, dann öffnen Sie per Doppelklick den Dialog Bedingung für den
Spaltenwert und wählen Sie den Wert *Wahr*.  
Wenn Sie nur Objekte verbunden durch den entgegengesetzten
Verknüpfungstyp (in unserem Beispiel "verlinkt mit der folgenden
Applikation") sehen wollen, dann wählen Sie einfach *Falsch*.

![](//images.ctfassets.net/utx1h0gfm1om/3AshumDaD6kcYU4cU8YuGu/2d2a5e80ff842760b4eb06dbc6a83486/1017603.png)

### Rekursive Verknüpfungen anzeigen

Eine weitere Besonderheit von Verknüpfungen im QueryBuilder kann im
nächsten Beispiel dargestellt werden.

In der Datenbank gibt es 3 Klassen: *Produkt*, *Material* und
*Funktion*, sowie den direkten Verknüpfungstyp "Link" mit dem direkt
gerichteten Namen "Forward" und dem entgegengesetzten Namen "Backward".
 Zwischen den Klassen *Produkt* und *Funktion*, *Produkt* und
*Material*, *Funktion* und *Funktion*, *Funktion* und *Material* ist
folgende Verknüpfungsregel definiert: direkten
Verknüpfungstechnologie mit dem Verknüpfungstyp "Link" ("Forward" und
"Backward").  
Das Ziel ist jetzt, alle Materialien und alle Funktionen zu finden, die
direkt mit Produkten verknüpft sind, oder die über andere Objekte
verknüpft sind.  
![](//images.ctfassets.net/utx1h0gfm1om/6MezbW5zFuC4csGwo4ssk/0818a6e2801564b12527e401a6cdeee0/1018399.png)  
  
Im QueryBuilder werden folgende Einträge ausgewählt:

-   Eintrag ***Name***
-   Beschränken auf die Unit ***Beispiel***
-   Beschränken auf die Klasse ***Produkt***
-   Im Eintrag Verknüpfung den Eintrag ***Name*** von
    ***VerknüpftesObjekt***
-   Im Eintrag Verknüpfung das Attribut ***IsForward ***
-   Wählen Sie die Auswahl ***Folge allen Verknüpfungen im Modell
    rekursiv*** aus 

  
Jetzt kann ***Abfrage ausführen*** gewählt werden. In der zweiten Spalte
werden dann alle Objekte angezeigt, die mit dem Objekt "Neues Produkt"
verbunden sind. Probieren Sie das mit dem Beispiel-Diagramm von oben
selbst aus.  
Wenn das Objekt *Neues Produkt* direkt mit dem direkten Verknüpfungstyp
(der Pfeil beginnt bei dem Objekt und endet bei einem anderen) verbunden
ist, dann steht in der Spalte {Link}.IsForward der Wert *Wahr*.
Beispiele für diese Verknüpfungen sind die Objekte *Funktion1*,
*Funktion2*, *Funktion3*, *Material1* und *Material2*.  
Die leeren Felder in der Spalte {Link}.IsForward zeigen an, dass die
Objekte sowohl direkt als auch entgegengesetzt verbunden sind.  
In diesem Beispiel trifft das auf das Objekt *Neues Produkt* zu, welches
mit der *Funktion3* über *Material1* (direkter Verknüpfungstyp)
verbunden ist, aber auch über den entgegengesetzten Verknüpfungstyp. Und
es ist verbunden mit *Material2* über *Material1* (direkter
Verknüpfungstyp), zu *Funktion3* (entgegengesetzter Verknüpfungstyp),
aber auch wieder über den direkten Verknüpfungstyp. Die Objekte
*Funktion3* und *Material2* werden zweimal in den Abfrageergebnissen
angezeigt, weil es 2 Wege gibt um vom Objekt *Neues Produkt* zu
*Funktion3* und zu *Material2* zu kommen.  
![](//images.ctfassets.net/utx1h0gfm1om/4FinuVq4WIgcCCggeyW4aO/50febe8315ae6a5a370c7a25f6ec5b64/1018403.png)  
  
Wenn Sie nur die direkten Verknüpfungstypen angezeigt haben wollen, dann
wählen Sie den Wert *Wahr* für das Attribut ***IsForward***.

![](//images.ctfassets.net/utx1h0gfm1om/3AshumDaD6kcYU4cU8YuGu/2d2a5e80ff842760b4eb06dbc6a83486/1017603.png)

### Verknüpfte Objekte in einer Spalte anzeigen

Mit Hilfe der Option "Folge \[1, 2, 3…\] Knoten weiterer Verknüpfungen "
ist es möglich, eine Abfrage zu erstellen, die ALLE mit dem Objekt
verknüpften Objekte in einer Spalte anzeigt.   
Dadurch können nicht mehr nur die direkt mit dem Objekt verknüpften
Objekte, sondern auch jene Objekte angezeigt werden, die mit dem
verknüpften Objekt in der 2ten, 3ten, 4ten, etc. Ebene verknüpft
sind.   
Hier ist ein Beispiel: In der Datenbank gibt es einen Prozess "
Reklamation durchführen", der mit der Rolle „RA" verknüpft ist. Diese
Rolle ist im weiteren Verlauf mit 3 folgenden Prozessen verknüpft:   
![](//images.ctfassets.net/utx1h0gfm1om/1PV0T0cwN6aqOaaKuWEUMK/1a849edff2f1ccabaa7ec0b7fa3f550a/1017549.png)   
Jetzt wollen wir eine Abfrage erstellen, die alle Objekte mit direkter
oder indirekter Verknüpfung zum Objekt "Reklamation durchführen"
auflistet. Dafür erstellen wir eine Abfrage, die alle Objekte der Klasse
*Prozess* zeigt und definieren gleichzeitig für die Spalte *Name* die
Bedingung "ist wie Reklamation durchführen". So sehen wir in der ersten
Spalte das gewünschte Objekt.   
![](//images.ctfassets.net/utx1h0gfm1om/59uFlvqEV2ys4si82g4qyK/41d9eaa84c168ef3ef2d02fdbb9ef19c/1017545.png)   
Dann aktivieren Sie im Reiter **Verknüpfung** den Namen des verknüpften
Objekten anzuzeigen und definieren mit der Option "Folge \[1\] Knoten
weiterer Verknüpfungen" die Anzahl der Knoten denen über die Verknüpfung
gefolgt werden soll und klicken auf ***Abfrage ausführen***. Alle 4
verknüpften Objekte werden in der Spalte rechts im Ergebnisfenster
angezeigt.  
![](//images.ctfassets.net/utx1h0gfm1om/1sADrtMQY4oOs2owKUQG2m/4b7fe071dad5a357666afb96c3110441/1017557.png)   
Um den verschachtelten Verknüpfungen in eine beliebige Tiefe zu folgen,
wählen Sie die Option "Folge allen Verknüpfungen im Modell rekursiv".
Diese Option gibt an, dass alle Objekte, welche mit diesem direkt oder
indirekt (über andere Objekte) verbunden sind, angezeigt werden.   
Darüber hinaus können Sie mit der Option "Folge \[1,2,3,…\] Knoten
weiterer Verknüpfungen" die maximale Tiefe (in diesem Beispiel 1, Sie
können aber auch 2, 3 oder mehr) der Knotenverfolgung angeben. Das
Ergebnis wird hier ident sein zu der Liste die angezeigt wird, wenn Sie
die Option "Folge allen Verknüpfungen im Modell rekursiv" wählen.   
Das Objekt "Reklamation prüfen" von derselben Unit und derselben Klasse
wie im vorherigen Fall kann als Beispiel genommen werden.

![](//images.ctfassets.net/utx1h0gfm1om/ToZuxvIwSWeMKKOkussO2/d1d2f9b797c3b6a8e265a3e7755928d3/1017553.png)  
Wenn Sie „10" als Tiefe auswählen und auf Abfrage ausführen klicken,
werden 164 verknüpfte Objekte angezeigt.   
![](//images.ctfassets.net/utx1h0gfm1om/6nhgpj926IKOYa8OSS4G84/793129eaebb74b607e1a41b2e0a9b700/1017568.png)   
Wenn Sie „11" als Tiefe auswählen und auf Abfrage ausführen klicken,
werden 173 verknüpfte Objekte angezeigt.  
![](//images.ctfassets.net/utx1h0gfm1om/7wLsUP2F7GMukGAAgYGSOu/2bc4d3c6b314e6363e46ba6fe6187c67/1018676.png)   
Wenn Sie die Option "Folge allen Verknüpfungen im Modell rekursiv"
auswählen und dann die ***Abfrage ausführen***, werden wieder auch 173
Objekte gefunden.

![](//images.ctfassets.net/utx1h0gfm1om/3pTt5QWnRmIyIQIYSI0Wm2/acdcec8bbe3926e45a64f80a03cfd440/1017572.png)

### Verknüpfte Objekte in mehreren Spalten anzeigen

Mit Hilfe der Option "Weitere \[1, 2, 3 etc…\] Spalten für verknüpfte
Objekte" ist es möglich, die Verknüpfungen auf der ersten Ebene eines
Objektes in mehreren Spalten (statt nur in einer Spalte) anzuzeigen. Zum
Beispiel, gibt es ein Objekt *Aktivität 2*, das mit Objekten dreier
verschiedener  
Klassen verknüpft ist: *Rolle*, *Aktivität* und *Input-Output*.   
Wir wollen nun die Verknüpfungen von diesem Objekt in 3 Spalten
anzeigen.

![](//images.ctfassets.net/utx1h0gfm1om/24iwgM2sBG0cyeQ02moyI2/8e42291932d1f0cf7d4feb011288c9b8/1018672.png)

Zuerst definieren wir eine Abfrage, die in der ersten Spalte das Objekt
*Aktivität 2* anzeigt.

![](//images.ctfassets.net/utx1h0gfm1om/3fFMbjeKDS4eagcewGu68a/0ea3a5f39a5c0850aea6d440bdb9b8f8/1018685.png)

Dann aktivieren wir im Eigenschaften-Browser eine Verknüpfung zu den
Objekten der Klasse *Rolle*, die in einer separaten Spalte angezeigt
werden. Um verknüpfte Objekte in weiteren Spalten anzuzeigen aktivieren
wir „ Weitere \[2\] Spalten für verknüpfte Objekte". Zwei neue Äste
*Verknüpfung 1* und *Verknüpfung 2* erscheinen im Eigenschaften-Browser,
wo man dann die Verknüpfung zu Objekten der Klasse *Aktivität* und
*Input-Output* auswählen kann. Die verknüpften Objekte aus diesen beiden
Klassen werden in 2 separaten Spalten angezeigt.  
![](//images.ctfassets.net/utx1h0gfm1om/2e6a558eTa84KI6iCG0c6a/8aaf7bd03c4a9504fc311f5a2af8950a/1018681.png)

