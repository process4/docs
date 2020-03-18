Definieren Sie zunächst einen Verknüpfungstyp, welcher im Rahmen der
Indirekten Technologie zwei bestimmten Klassen zugewiesen werden soll.
Legen Sie dazu im Designer unter dem Punkt Verknüpfungstypen
einen neuen Typ an oder bearbeiten Sie einen bestehenden Eintrag.  
 

Achten Sie bitte darauf, beim Erstellen des Verknüpfungstyps eine
Assoziationsklasse zu definieren. Ziel der Indirekten Technologie ist
es, Objekte mittels Verbinder zu verknüpfen und das Logische Element (z.
B. UND, ODER, XODER), das zwischen diesen Objekten auf einem Diagramm
liegt, als Assoziationsobjekt dieser Relation zu interpretieren. Wenn
Sie beim Erstellen des Verknüpfungstyps das Feld zur Auswahl der
Assoziationsklasse leer lassen, wird jedes Objekt einer beliebigen
Klasse, welches zwischen verknüpften Objekten liegt, als
Assoziationsobjekt betrachtet. Sofern Sie aber eine bestimmte
Assoziationsklasse für den gewählten Verknüpfungstyp definieren, wird
die Indirekte Verknüpfung erst dann erstellt, wenn sich ein Objekt
dieser Assoziationsklasse zwischen zwei verknüpften Objekten befindet
und mittels Konnektoren verbunden ist. 

Hier folgt ein Beispiel zur Illustration.  
Erstellen Sie bitte einen speziellen Verknüpfungstyp (hier indirekt
verknüpft) für die Verwendung mit der Indirekten
Verknüpfungstechnologie. Als Assoziationsklasse wurde in diesem Fall
Gateway gewählt.   
![](//images.ctfassets.net/utx1h0gfm1om/1z75tKBify6a0wwcOsi6w6/0a54511afcb8bc65b4384df08c18d2d7/1017992.png)  
  
Definieren Sie eine Regel für den soeben angelegten Verknüpfungstyp
(indirekt verknüpft) und weisen sie diesen der Verbindung zweier Klassen
zu (in diesem Fall zwischen Hauptprozess und Hauptprozess). Aktivieren
Sie die Indirekte Verknüpfungstechnologie unter Verwendung des bereits
definierten Verknüpfungstyps für Verbindungen von Objekten der Klasse
Hauptprozess.   
![](//images.ctfassets.net/utx1h0gfm1om/42x0tAXGCQQ0iMK84OoWiG/1ddb18bf4c00ec93665055b660a0648a/1017991.png)  
Wenn Sie anschließend mehrere Objekte der oben definierten
Klassen mittels Konnektoren und eines Logischen Elements (hier XOR) auf
dem Diagramm verknüpfen, wird diese Relation automatisch erkannt und in
der Datenbank gespeichert. 

 ![](//images.ctfassets.net/utx1h0gfm1om/52A2CSoiV2SugM8oM0Em8C/7730be6c7959df1f12508006b869c145/1018185.png)  
![](//images.ctfassets.net/utx1h0gfm1om/2XLmp8kteMc0wOgwAAmkQ6/b3be302f91dd2b221ec0ad43bb1a87e1/1018182.png)  
   
  
Das Objekt XOR1, der Klasse Gateway, das zwischen den verknüpften
Objekten der Klasse Hauptprozess liegt, wird als Assoziationsobjekt
identifiziert. 

