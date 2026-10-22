---
title: Schöpfer:in
sidebar_position: 9
---

# Schöpfer:in

Sektion: [Objektkennzeichnung](/conservation-metadataschema/sections/object-identification)

---
 
## Begrifflichkeiten 

 **URI der Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/G76A78](https://www.w3id.org/conservation/terms/metadata/G76A78)

**Mögliche alternativen Feldbezeichnungen in Datenbanksystemen:**
- Schöpfende Person
- Urheber
- Künstler:in
- Artist
- hergestellt von
- Zuschreibung

---
## Definition

:::info
Das Element erfasst die Person oder Personengruppe, die das Objekt geschaffen hat, den/die Künstler:in, Handwerker:in oder die Werkstatt.
:::
 
---

## Modellierung

### Verpflichtungsgrad

<span class="label label-optional">Optional</span>

Die Erfassung des Elements „Schöpfer:in“ ist optional, da die Relevanz dieses Elementes stark von der Fachdisziplin abhängt. In der Kunstgeschichte ist die Angabe des/der Schöpfer:in gängige Praxis und oft zentral für die Objektidentifikation. In der Archäologie hingegen ist diese Information häufig nicht bekannt. Bei einem römischen Gebrauchsgegenstand oder einem neolithischen Werkzeug lässt sich der/die Schöpfer:in in der Regel nicht eindeutig benennen.
 
---

### Feldwert

<span class="label label-text">Text/ URI</span>

Der/Die Schöper:in sollte nach Möglichkeit mit Vor- und Nachname und/oder Künstler:innenname erfasst sowie mit einem entsprechenden Eintrag aus einer Normdatei (z.B. GND) verknüpft sein. 
---

### Wiederholbar

<span class="label label-text"> Ja </span>

Das Feld ist wiederholbar, um gerade bei unklaren Zuschreibungen mehrere Möglichkeiten (inklusive Kenntlichmachung der Unsicherheit) zu erfassen. 

---

:::tip[Beispiel]

-	**Schöpfer:in:** Leonardo da Vinci [GND-ID: 118640445](http://d-nb.info/gnd/118640445)
-	**Schöpfer:in:** Werkstatt Albrecht Dürer [ISNI: 0000000120961368](https://isni.org/isni/0000000120961368)
-	**Schöpfer:in:** Mittelalterliche Goldschmiedewerkstatt Hildesheim 
:::

---

### Hinweise

:::note
Dieses Element ist ein ideales Beispiel für die Anpassbarkeit des KuR-MDS an fachdisziplinäre Gepflogenheiten. Während das Schema das Feld als optional definiert, können Institutionen es intern als Pflichtfeld deklarieren, wenn dies ihrer Erfassungspraxis entspricht.
:::

:::caution
In LIDO wäre dies kein eigenständiges Element, sondern würde als Akteur:in im Ereignis „Herstellung“ modelliert. Das Element ist ein Kompromiss der aktuellen Version des Metadatenschemas, der Restaurator:innen den Übergang vom Freitext zur strukturierten Erfassung erleichtern soll. Bei der Weiterentwicklung des Metadatenschemas wird es in die Event-Struktur überführt.
:::

## Entsprechungen in anderen Schemata

| Schema  | Elementname | Verpflichtungsgrad |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | [Person/Körperschaft](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48103965/Person+K+rperschaft+Bedingt+Pflicht) | Bedingte Pflicht | 
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/)| [Objekt : Herstellung : Person](https://collectionstrust.org.uk/resource/object-production-person/?tr=de) & [Angaben zur Person](https://collectionstrust.org.uk/resource/person-information/?tr=de) | Keine Angabe | 