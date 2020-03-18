-   [Verknüpfungstechnologien](#verknüpfungstechnologien)
-   [Verknüpfungstypen](#verknüpfungstypen)
-   [Automatische Verknüpfungen](#automatische-verknüpfungen)
    -   [Automatische Verknüpfungen löschen](#automatische-verknüpfungen-löschen)
    -   [Automatische Verknüpfungen unterbinden](#automatische-verknüpfungen-unterbinden)
-   [Manuelle Verknüpfungen](#manuelle-verknüpfungen)


[Objekte](objekt) können mit anderen Objekten mehrfach und über
verschiedene Verknüpfungstypen verknüpft werden. Diese Verknüpfungen
werden im [Repository](repository-de) verwaltet und können
[Attribute](attributgruppe-und-attribut) (und entsprechende Werte) haben.
Sie sind also sinnvolle Bestandteile von Modellen und eine wertvolle
Grundlage für Auswertungen.

### Verknüpfungstechnologien

In process4.biz, gibt es verschiedene Arten von
Verknüpfungstechnologien, mit denen Objekte miteinander in Relation
gesetzt werden können. In einigen Verknüpfungstechnologien, können
können sog. "Assoziationsobjekte" verwendet werden - das sind Objekte,
die zu einer dritten (unbeteiligten) [Klasse](klasse) gehören und durch
deren Einbeziehung die Verknüpfung mit zusätzlichen Informationen
beschrieben werden kann.

Siehe dazu im Detail:
[Verknüpfungstechnologien](Verknüpfungstechnologien)

### Verknüpfungstypen

Verknüpfungstypen sind die verschiedenen Beziehungen (= Relationen)
zwischen zwei [Objekten](objekt), die frei definiert werden können (z.B.
"verlinkt mit", "verlinkt von", "verlinkt zu", "verwendet in", etc.) und
legen somit die Relationen zwischen Objekten zweier [Klassen](klasse)
fest. Sie werden im [Database Designer](database-designer-de) angelegt und
finden - nach entsprechender Konfiguration - bei automatischen
Verlinkungen von Objekten auf [Diagrammen](diagramm) oder manuell im
[Repository](repository-de) Verwendung. Für jedes Paar von
[Klassen](klasse), können ein oder mehrere Verknüpfungstypen definiert
werden.

Siehe dazu im Detail: [Verknüpfungstypen](verknüpfungstypen)

### Automatische Verknüpfungen

Automatische Verknüpfungen
durch [Verknüpfungsregeln](verknüpfungsregeln) dienen dazu,
[Objekte](objekt) (auf Diagrammen, also im Zuge der Modellierung)
automatisch mit anderen Objekten in der Datenbank zu verbinden.

Derartige Verknüpfungen werden gemäß der Position von Objekten auf
Diagrammen automatisch erstellt und können im [Database
Designer](database-designer-de) für und zwischen den einzelnen Klassen
zugelassen werden, die dann für deren Objekte gelten. Die Anordnung der
einzelnen [Shapes](shapes-stencils-und-templates-de) (= Objektinstanzen) und
deren Position(en) zueinander auf dem jeweiligen Diagramm, werden von
process4.biz ausgelesen (interpretiert). Entsprechend der für die
jeweiligen Klassen hinterlegten
[Verknüpfungstechnologien](verknüpfungstechnologien), werden dann
Verknüpfungen zwischen den jeweiligen Objekten in der Datenbank
abgespeichert. Diese Verknüpfungen können dann für entsprechende
Auswertungen in den
[Erweiterungsmodulen](process4.biz_Erweiterungsmodule) herangezogen
werden.

<div class="info">
<h3> Hinweis:</h3>

Wenn eine [Verknüpfungsregel](verknüpfungsregeln) zur automatischen
Verknüpfung zwischen Objekten verwenden möchte, muss zuerst ein
[Verknüpfungstyp](verknüpfungstypen) dafür definiert werden.
</div>


![](//images.ctfassets.net/utx1h0gfm1om/1DWYUuZvlm2mGM0mYykOEQ/06cbb52aab0d2beab8a724ae519175cf/1017826.png)

*Eigenschaften einer [Verknüpfungsregel](verknüpfungsregeln), zeigt
Verknüpfungstyp und Verknüpfungstechnologie*

#### Automatische Verknüpfungen löschen

Automatische Verknüpfungen können nicht manuell gelöscht werden. Sie
werden automatisch (bei Diagrammspeicherung) gelöscht, wenn z.B. die
Lage der Objekte auf dem Diagramm geändert wird. Wenn zwei Objekte
automatisch verknüpft sind, kann man in den
[Objekteigenschaften](eigenschaften-dialogfenster) das Löschverhalten
der Verknüpfung definieren. Standardmäßig ist es auf "Automatisch"
gesetzt, was bedeutet, dass die jeweilige Verknüpfung automatisch
gelöscht wird, wenn die Bedingungen für diese automatische Verknüpfung
nicht mehr gelten (z.B.: das Objekt wurde vom Diagramm entfernt, die
Lage des Objekts wurde geändert, oder die Regel für die automatische
[Verknüpfungstechnologie](verknüpfungstechnologien) im Designer wurde
geändert).

Wenn das Löschverhalten auf "Manuell" gesetzt wird, bedeutet dies, dass
die Verknüpfung immer vorhanden bleibt, auch wenn die
Verknüpfungstechnologie selbst nicht mehr gültig ist, auf deren Basis
die Verknüpfung in der DB angelegt wurde. Es lassen sich dadurch die
automatischen Verknüpfungen die beim Auslesen der Diagramme entstehen
selektiv "overrulen".

Bedenken Sie, dass automatische Verknüpfungen nur bei der grafischen
Modellierung in das Repository geschrieben werden, dass Sie aber im
Repository selbst Objekte auch nach Belieben manuell miteinander
verknüpfen können. Dies wird z.B. dann verwendet, wenn Objekte keine
grafische Repräsentanz auf einem Diagramm haben, aber dennoch im
Repository geführt werden und auch verknüpft sein sollen.

<div class="warning">

Durch das Umstellen des Löschverhaltens von "Automatisch" auf "Manuell"
für eine Verknüpfung entsteht damit also ein Sonderfall:

Erstens existiert weiterhin eine grafische Repräsentanz der Objekte und
zweitens existiert - unabhängig von einer Änderung dieser grafischen
Repräsentanz - die Objektverknüpfung weiter.
</div>

#### Automatische Verknüpfungen unterbinden

Das vom System im [Repository](repository-de) angelegte
Diagramm-[Attribut](attributgruppe-und-attribut) "Automatische Verknüpfung",
erlaubt (oder verbietet) die automatischen Verknüpfungen für ein
ausgewähltes [Diagramm](diagramm).

Pro Diagramm und auch separat pro Zeichenblatt dieses Diagramms, können
Sie somit individuell auswählen, ob die automatischen
[Verknüpfungstechnologien](verknüpfungstechnologien) darauf gelten
sollen oder nicht.

Setzen Sie den Wert für diesen Parameter im
[Eigenschafts-Fenster](eigenschaften-dialogfenster) des Diagramms dazu
entweder auf "Wahr", oder auf "Falsch".

### Manuelle Verknüpfungen

Abgesehen von automatischen Verknüpfungen, gibt es auch die Möglichkeit,
Objekte mit anderen Objekten und/oder Diagrammen bzw. Dateien manuell zu
verknüpfen.

Siehe dazu:

-   [Objekte manuell verknüpfen](objekte-manuell-verknüpfen)
-   [Objekte mit Diagrammen verknüpfen](objekte-mit-diagrammen-verknüpfen)
-   [Objekte mit Dateien verknüpfen](objekte-mit-dateien-verknüpfen)

![image](//images.ctfassets.net/utx1h0gfm1om/62NWprm33dopqmBixwBOwu/e7d81ac421b5ea931e13924cfb0b8276/image.png)