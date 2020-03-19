

Nachdem Sie alle Zeitachsen-Attribute für Klassen und Diagramme
definiert haben, können Sie ein neues Zeitachsen-Diagramm erstellen.
Klicken Sie im Repository mit der rechten Maustaste auf Diagramm und
wählen Sie ***Neues Zeitachsen-Diagramm erstellen*** aus.

![](//images.ctfassets.net/utx1h0gfm1om/5PxpPPFxteYGoMu6SE2sm8/c51d4204effbb5ebd1e4554679028db1/1018775.png)

Das Attribut „***Aktiviere die Zeitachse***" wird automatisch auf WAHR
gesetzt, damit alle Zeitachsen Attribute in den Diagramme-Eigenschaften
angezeigt werden. 

![](//images.ctfassets.net/utx1h0gfm1om/1tDHJ5YHFKI0EYWKSuwsqW/65d217829a205f845042cc5b98086dab/1018800.png)

Füllen Sie folgende Diagramm-Attribute aus:

![](//images.ctfassets.net/utx1h0gfm1om/6EqPwTpayQ044qYcaQQ8Ca/7fb58e8af91193aac44be0550abedaee/1018738.png)

-   ***Anfangszeit*** und ***Endzeit*** der Zeitachse, die auf dem
    Diagramm angezeigt wird.  
    Die Zeit kann entweder als definiertes Datum aus dem Kalender, oder
    als relatives Datum (Zeitdauer) mit einem „-" oder einem „+" davor
    angezeigt werden, z.B.: 

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>Anfangszeit:</p></td>
<td><p>-12m</p></td>
<td><p>+1m</p></td>
<td><p>30.07.2009</p></td>
</tr>
<tr class="even">
<td><p>Endzeit:</p></td>
<td><p>-1m</p></td>
<td><p>+12m</p></td>
<td><p>28.02.2009</p></td>
</tr>
</tbody>
</table>

Beachten Sie bitte, dass Anfangs- und Endzeit unbedingt in gleichem
Format definiert werden müssen!

-   ***Zeitdauer-Einheiten***, die auf dem Diagramm dann als
    Divisions (Zeitsegmente) angezeigt werden: Jahre (y), Monate (m),
    Wochen (w), Tage (d), Minuten (M), Sekunden (s).
-   ***Zeitachsen Aufgliederung*** – jede Zeiteinheit wird zwischen den
    Divisions (Zeitsegmenten) auf die hier angegebene Zahl
    aufgegliedert: für Jahr wäre es 12 (Monate), für Monate – 4
    (Wochen), für Woche – 7 (Tage) usw. Wenn ein Objekt zwischen den
    Divisions angelegt wird, wird sein Datum entsprechend der
    Aufgliederung konfiguriert (z.B. 2m 2w). 
-   ***Zeitformat*** – in diesem Attribut bestimmen Sie, in welchem
    Format die Zeit auf den Divisions (Zeitsegmenten) angezeigt wird.
    Sie können entweder die Default Zeitformate verwenden (z.B.
    01.04.2009) oder eines selbst definieren, z.B.:  
    `MMM yyyy` – Apr 2009  
    `MMM yy` – Apr 09
-   ***Zeige die Anfangs- und Endzeit*** – setzen Sie diese Attribute
    auf WAHR, wenn Sie möchten, dass die Anfangs- und/oder Endzeit auf
    dem Diagramm angezeigt werden sollen.
-   ***Synchronisieren mit Attributen des parent Objekts***  
    Wenn Sie ein Objekt als Zeit-Intervall anlegen (z.B. von -7m bis
    -2m) und von diesem Objekt aus ein neues (verschachteltes)
    Zeitachsen-Diagramm erstellen und in den Eigenschaften des Diagramms
    das Attribut Synchronisieren mit Attributen des Parent-Objekts auf
    WAHR setzen, dann werden die Zeitangaben von diesem Objekt (gemeint
    ist hier das „Absprungs-Objekt" von dem aus Sie den Smart-Tag auf
    das neue Diagramm erstellt haben) und eben diesem verschachtelten
    Diagramm synchronisiert. Das heißt, wenn das Zeitintervall für das
    Objekt vergrößert oder verkleinert wird (z.B. auf -6m bis -3m), dann
    wird auch die Zeitachse auf dem verknüpften Diagramm entsprechend
    geändert.

Auf dem neu erstellten Zeitachsen-Diagramm können Sie jetzt Objekte
anlegen. Wenn Sie ein Zeitintervall- oder ein Zeitpunktobjekt auf das
Diagramm platzieren und in den Objektattributen eine bestimmte Zeit
definieren, dann wird das Objekt genau in diesem Zeitintervall bzw.
Zeitpunkt auf dem Diagramm angelegt. Umgekehrt, wenn Sie die Lage bzw.
die Größe des Objektes ändern, werden auch seine Zeitattribute
entsprechend geändert.

![](//images.ctfassets.net/utx1h0gfm1om/4QdDSpL21iuUOoeWm4c0kC/b7218791c689b4350bc811c372254c50/1018733.png)


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>