

Im typischen Standardeinsatz von process4.biz wird genau ein Shape aus
dem Stencil auch genau einer Klasse und allen dessen Objekten im
Repository zugewiesen.

Mit Smart Shapes können Sie aber process4.biz auch so konfigurieren,
dass mehrere Shapes aus dem Stencil genau einer Klasse zugewiesen
werden, wobei aber die Zuordnung des jeweiligen Shapes zu einem Objekt
aus dieser Klasse von einem gewählten Attributwert des Objekts abhängig
ist.  
Das jeweils auf dem Diagramm erscheinende Shape für ein Objekt einer
Klasse soll sich also bezüglich des Attributs „Ist ein Master-Shape"
ändern können. Es soll somit mehrere Shapes im Stencil geben, durch die
die Objekte einer Klasse (in unserem Beispiel: die Klasse „Aktivität")
repräsentiert werden können. Wird nun eines dieser Shapes aus dem
Stencil auf das Diagramm gezogen, wird es automatisch zur Klasse
„Aktivität" gehören.

1.  Erstellen Sie im Designer für die Klasse „Aktivität" ein neues
    Attribut (z.B. in der Attributgruppe „Definition") mit dem frei
    wählbaren Namen und DbNamen. Setzen Sie das spezielles Feld „Ist ein
    Mastershape" auf WAHR in diesem Attribut. Setzen Sie den Attributtyp
    auf „ENUM", wodurch der Reiter ***ENUM Elemente*** aktiviert wird.  
    ![](//images.ctfassets.net/utx1h0gfm1om/1p0oXLCXoYIEisGm8sCwuA/070bd9f47167bd6bc10ab62f5e10b149/1018541.png)
2.  Erstellen Sie im Designer für „ENUM" im Register ENUM Elemente
    die entsprechenden Parameter, die den Namen der jeweils zu ziehenden
    „Aktivitäten"-Shapes entsprechen sollen. Richten Sie beispielsweise
    folgende Parameter ein (z.B.= „Aktivität", „Kontrollaktivität",
    „Messpunkt", „Entscheidung"):  
    ![](//images.ctfassets.net/utx1h0gfm1om/4px520Zm5OQwESqkiA8gce/38206ae530823f9cd5cc728ec6484655/1018537.png)
3.  Wenn Sie jetzt im Modeler das Shape „Kontrollaktivität" aus dem
    Stencil auf das Diagramm ziehen, wird es automatisch der Klasse
    „Aktivität" angehören, ebenso wie die Shapes " Messpunkt",
    „Aktivität" und „Entscheidung ", wobei sich bei Änderung des
    Attributs „AktTyp" in einem Objekt der Klasse „Aktivität" das Shape
    jeweils zwischen diesen 4 Shapes optisch entsprechend verändern
    kann. 

-   Shape „Kontrollaktivität" wird auf das Diagramm gezogen und im
    Eigenschaften-Fenster des Objekts wird unter Attribut „AktTyp" der
    Wert „ Kontrollaktivität" stehen.

![](//images.ctfassets.net/utx1h0gfm1om/1jsxgFlCkOkKi2aI8wAaKK/c45d9716fb6f0597ae5fbd0af04cc53e/1018548.png)  
  

-   Für Attribut „AktTyp" wird der Attributwert von „Kontrollaktivität"
    auf „ Entscheidung" verändert, wodurch auch das Shape auf dem
    Diagramm entsprechend zu einem weißen Rhombus angepasst wird, ohne
    dafür das Shape aus dem Stencil gezogen zu haben. Dennoch bleibt die
    Klasse aber unverändert „Aktivität" und der Name des Objekts bleibt
    auch unverändert.

![](//images.ctfassets.net/utx1h0gfm1om/6s45KvMsSIUS4mG8A220wU/bbc7f00d9c6745b57458a4506fb03b0b/1018545.png)

