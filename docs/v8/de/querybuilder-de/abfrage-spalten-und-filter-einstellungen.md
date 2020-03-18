

Zusätzlich zu den links im Eigenschaften- Browser ausgewählten
Elementen, primären Abfragetypen, sowie Parametern können Sie auch oben
rechts im Fenster Abfrage-Spalten weitere Filter-Einstellungen für
ausgewählte Objekte definieren.

**Pfad**: In der ersten Spalte sind alle von Ihnen ausgewählten
Attribute und sonstigen Elemente aufgelistet. Wenn Sie mit Doppelklick
auf eine Zeile klicken, wird der Baum im Eigenschaften-Browser erweitert
und der dazugehörige Eintrag ausgewählt. Wenn eine Eigenschaft, welche
in der Spalte **Pfad** vorkommt, im Designer gelöscht wurde, wird sie
mit einem ![](//images.ctfassets.net/utx1h0gfm1om/5IPm70QdDU2kmK6GegEMY8/c73a04413e05e226d69b349a4c4da250/1018311.png)
Symbol markiert. 

![8-DE-1](//images.ctfassets.net/6mz8d8cle1nl/3TB7tblf3yWeguOk0oiScA/96cf1a77f8f86aba0e85c6fe8b793f6d/8-DE-1.png)

**Sichtbar**: Jedes Attribut können Sie in der zweiten Spalte sichtbar
oder unsichtbar machen, indem Sie den Haken aktivieren / deaktivieren. 

**Sortieren**: In der dritten Spalte „Sortieren" können Sie bestimmen,
ob die Auswertungsergebnisse nach den Werten des gewählten Kriteriums
alphabetisch sortiert werden sollen, und zwar entweder aufsteigend oder
absteigend. 

**Reihenfolge**: Nachdem Sie in der 3. Spalte die Art der alphabetischen
Sortierung ausgewählt haben, können Sie in dieser Spalte die Reihenfolge
bestimmen, nach der die einzelnen Kriterien zur Sortierung herangezogen
werden sollen. Angenommen Sie haben für die Attribute Name und
(Class)Name bestimmt, dass nach diesen Kriterien alphabetisch
aufsteigend sortiert werden soll. Wenn Sie nun in der nächsten Spalte
für Name „2" und für (Class)Name „1" als Sortier-Reihenfolge festlegen,
werden die Objekte der Abfrage im Abfrageergebnis (Report) zuerst nach
Klassennamen und dann nach Namen alphabetisch aufsteigend sortiert. 

Darüber hinaus können Sie in der Spalte „ **Bedingung**" weitere
Filter-Bedingungen für die Abfrage bestimmen. Klicken Sie in dieser
Spalte zwei Mal auf die Zeile, für die Sie den Filter noch genauer
abgrenzen möchten. Ein Fenster öffnet sich, in dem Sie eine (oder
mehrere) Bedingungen für das Element dieser Spalte definieren kö nnen: 

-   ***ist jeder Wert: ***Objekte mit beliebigen Werten werden
    aufgelistet (entspricht der Standard-Einstellung – keine
    Einschränkung). 
-   ***ist leer/ist nicht leer:*** nur Objekte mit leerem oder nicht
    leerem Werteintrag in diesem Attribut/Element werden aufgelistet. 
-   ***ist gleich/ist nicht gleich***: Sie können bei Selektion dieser
    Filter-Bedingung einen Wert angeben, dem die Elemente der Abfrage
    entweder entsprechen sollen, oder nicht. 
-   ***ist wie/ist nicht wie:*** hier können Sie zwischen Sternchen (\*
    \*), die als Platzhalter dienen, angeben, welche Symbole der Wert
    enthalten oder nicht enthalten soll. Beispielsweise liefert \* sa
    **\*** als Ergebnis alle Werte, die „sa" in der Bezeichnung
    enthalten, sa\*: alle Werte, die mit „sa" beginnen und \*sa: alle
    Werte, die mit „sa" enden. 
-   ***gehört zu/gehört nicht zu***: mit dieser Bedingung werden
    Objekte, die einem der ausgewählten Werte angehören oder diesem
    nicht zugeordnet werden können, aufgelistet.

Die Bedingung wird automatisch aktiviert, wenn Sie bestimmte Klassen
oder Units im Objektbaum mit Hilfe von „(beschränke auf)" auswählen.
Diese Einschränkung kann im Nachhinein geändert werden, indem Sie einen
anderen Wert auswählen.  
![8-DE-2](//images.ctfassets.net/6mz8d8cle1nl/6c1kdgB52oQqWk6EW8yu6i/a53c0f6811c5f40fff32c71cadb7b14e/8-DE-2.png)
  
Sie können auch gleichzeitig mehrere Bedingungen definieren.  
  
Öffnen Sie im Dialogfenster ***Bedingungen für den Spaltenwert*** (das
sich durch einen Doppelklick in der Tabellenzelle der Abfrage-Spalte
„Bedingung" öffnen lässt) das kleine Drop-Down- Menü unter dem Punkt „
Mehr…" und wählen Sie zur Kombination mehrerer Bedingungen entweder UND
oder ODER. Eine zusätzlich hinzugefügte Bedingung können Sie löschen, in
dem Sie auf „&lt;lösche letzte&gt;" klicken.

![8-DE-3](//images.ctfassets.net/6mz8d8cle1nl/T8BRViddmwwYeuoa0oaYQ/51391283442475122dcd439b55efbee6/8-DE-3.png)
In der Spalte **Bezeichner** können Sie der zugehörigen Spalte in den
Abfrageergebnissen einen selbstdefinierten Namen vergeben. Defaultmäßig
wird in dieser Spalte der Wert aus der Spalte "Pfad" übernommen. Mit
diesem Feld können Sie aber als Ersatz für die oftmals langen und
unverständlichen Pfad-Namen selber kurze Namen vergeben.  
Z.B.: Statt {Verknüpfung}.{VerknüpftesObjekt}.Name wird die Spalte von
Ihnen mit "Verknüpftes Objekt" benannt. Dieser Name wird dann auch in
der Spaltenbezeichnung in Excel verwendet, wie das folgende Bild zeigt.
Der Name in der Spalte **Bezeichner** kann darüber hinaus auch auf
andere Sprachen übersetzt werden.

![8-DE-4](//images.ctfassets.net/6mz8d8cle1nl/2QD9jHIvSMCaOMqYU0WWQY/5071483365ce801a94f1b6b305a102b2/8-DE-4.png)
In MS-Excel sieht der Bericht dann so aus:  
![8-DE-5](//images.ctfassets.net/6mz8d8cle1nl/3b3sFYGF1us8wU4EmmYymK/0c8ac047deb0183b484396822e437947/8-DE-5.png)
  
Der Vorteil bei der Verwendung der Spalte **Bezeichner** ist auch, dass
deren Werte in andere Sprachen übersetzt werden können. Das kleine Icon
![](//images.ctfassets.net/utx1h0gfm1om/6QekolvZ9mE4WasaWq2MGG/ed1a71f2ac7340a54131456fe7bd4e82/1018351.png) öffnet das
Fenster, in dem die Übersetzungen für alle Sprachen aufgenommen werden
können, die derzeit in der Datenbank verfügbar sind. So kann eine
Abfrage „international" gestaltet werden.

![8-DE-6](//images.ctfassets.net/6mz8d8cle1nl/7Bw6KVH68gwgU4iIC2iSy2/1744d2e9d6a0c96a6a8392a63f96254e/8-DE-6.png)
Jeder Pfad hat außerdem seinen eindeutigen DbName, welcher nicht
übersetzt werden kann. Die DbNames in der Datenbank dienen dazu, z.B.
bei Attributen oder Klassen, dass process4.biz den Pfad eindeutig
erkennen kann.  
Via rechtem Mausklick auf die Zeilen im Fenster „**Abfrage-Spalten**"
rechts  ben im QueryBuilder, welches die Filter-Einstellungen erfasst,
können Sie Zeilen entfernen oder nach oben bzw. nach unten verschieben.
Die Zeilenverschiebung ist auch mit Hilfe dieser Pfeile
![8-DE-7](//images.ctfassets.net/6mz8d8cle1nl/3h0E6zyl0Qe6K0SeMMyeKU/f7e3bb26140ed667df07147ab5cbeb78/8-DE-7.png) möglich und
beeinflusst die Reihenfolge, in der die Spalten mit den ausgewerteten
Attributen im Fenster darunter dann aufgelistet werden.

 

