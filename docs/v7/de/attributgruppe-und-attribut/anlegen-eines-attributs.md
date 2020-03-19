-   [Attribute eines Attributs](#attribute-eines-attributs)
    -   [Name](#name)
    -   [DbName](#dbname)
    -   [Attributtyp](#attributtyp)
    -   [Default Wert](#default-wert)
    -   [Priorität](#priorität)
    -   [Mussfeld](#mussfeld)
    -   [Bedingung](#bedingung)
    -   [Hervorhebungsregel](#hervorhebungsregel)
-   [Systemattribute](#systemattribute)


Um ein [Attribut](attributgruppe-und-attribut) zu erstellen, selektieren Sie
im [Database Designer](database-designer-de) in einer [Klasse](klasse) die
gewünschte [Attributgruppe](attributgruppe-und-attribut) (oder legen eine
neue an) und klicken dann auf den Button "Neu". Alternativ dazu, können
Sie auch mit der rechten Maustaste auf eine Attributgruppe oder in das
Anzeigefenster der bestehenden Attribute klicken, um dann im Kontextmenü
"Neu..." zu wählen.

### Attribute eines Attributs

#### Name

Process4.biz vergibt automatisch einen Namen an neue Attribute (z.B.
"Attribut1") den Sie entsprechend ändern können.

#### DbName

Für Designelemente wird automatisch auch ein DbName (= einmaliger
Datenbank-Name, der nur ANSI-Zeichen enthält) angelegt. Wenn der DbName
mit dem Symbol "\_" beginnt, wird dies automatisch in das Symbol "a"
umgewandelt.

#### Attributtyp

Hier können Sie den Attributtyp für das Attribut wählen.

Siehe dazu: [Attributgruppe & Attribut](attributgruppe-und-attribut)

#### Default Wert

Mit dem Attribut "Default Wert" (in der Attributgruppe Definition), ist
es möglich, für alle Attributtypen einen Standard-Wert zu definieren,
der bei der Erstellung eines neuen Objektes dieser Klasse (nicht aber
für schon vorhandene Objekte) automatisch angegeben wird.

Sie können Default Werte mit Hilfe der Mehrfachselektion gleichzeitig
für mehrere Attribute setzen. Beachten Sie dabei aber, dass es nicht
möglich ist, Default Werte so für

-   Attribute mit unterschiedlichen Attributtypen (Attribute sollen
    entweder String, Text oder Integer sein) und
-   Attribute vom Enum-Typ (Enum-Elemente von unterschiedlichen
    Enum-Attributen sind unterschiedlich)

zu definieren.

#### Priorität

Mit dem Attribut "Priorität" (in der Attributgruppe Definition), können
Sie die Reihenfolge der Auflistung von Klassen, Attributgruppen und
Attributen in den [Eigenschaften](eigenschaften-dialogfenster) eines
Objekts, im [Repository](repository-de) oder [Database Designer](database-designer-de), sowie in
den [Erweiterungsmodulen](process4.biz_Erweiterungsmodule) bestimmen. Je
niedriger dieser Wert ist, desto weiter Oben wird das jeweilige Attribut
aufgelistet.

#### Mussfeld

Steuert, ob das jeweilige Attribut ein Pflichtfeld für [Objekte](objekt)
der jeweiligen Klasse sein soll, oder nicht. Pflichtfelder werden in den
Eigenschaften eines Objekts oder Attributs durch ihre blaue Schriftfarbe
gekennzeichnet. Wird einem Pflichtfeld keine Wert zugewiesen, ändert
sich die Textfarbe in Rot und ein entsprechender Hinweis erscheint beim
Versuch, das Objekt zu speichern.

#### Bedingung

Siehe dazu: [Bedingungen](bedingungen)

#### Hervorhebungsregel

Siehe dazu: [Einfärben von Datenfeldern](einfärben-von-datenfeldern)

### Systemattribute

Über die [Systemattribute](systemattribute), kann gesteuert werden, wie
sich die Attribute der Objekte der jeweiligen Klasse in spezifischen
Situationen verhalten.

------------------------------------------------------------------------

 

![](//images.ctfassets.net/utx1h0gfm1om/5sdA3bGdEsSs8MGAII4QmQ/8dec95a0d4b03ab23fc05314bf1884ea/1017759.png)

*Eigenschafts-Fenster für ein neues Attribut*


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>