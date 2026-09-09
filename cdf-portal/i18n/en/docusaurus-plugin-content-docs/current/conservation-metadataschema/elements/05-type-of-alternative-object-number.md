---
title: Art der weiteren Objektnummer
sidebar_position: 1
---

:::caution Translation pending
This page has not been translated into English yet. The German original is shown below.
:::

 

# Art der weiteren Objektnummer

Sektion: [Objektkennzeichnung](https://nfdi4objects.github.io/n4o_conservation_data_framework/conservation-metadataschema/sections/01-object-identification)

---
## Begrifflichkeiten 

 **URI der Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/LGPT6AC](https://www.w3id.org/conservation/terms/metadata/LGPT6AC)

**Mögliche alternativen Feldbezeichnungen in Datenbanksystemen:**
- Typ der weiteren Objektnummer
- Type of alternative object number

---

## Definition

Die Art der weiteren Objektnummer spezifiziert den Typ der im Feld „Weitere Objektnummer" erfassten Kennzeichnung (z.B. Fundnummer, alte Inventarnummer, Fremdobjektnummer). Diese Typisierung macht den Ursprung und Verwendungszweck der alternativen Nummer nachvollziehbar.
 
---

:::info
### Verpflichtungsgrad

<span class="label label-conditional">Bedingte Pflicht</span>

Sobald eine weitere Objektnummer erfasst wurde, ist die Angabe der Art verpflichtend. Ohne Typisierung geht der semantische Kontext verloren, und die zusätzliche Nummer wird zu einer bedeutungslosen Zeichenkette ohne erkennbaren Bezug zum Objekt oder seiner Geschichte.
:::
 
---

:::info
### Feldwert

<span class="label label-text">Text/URI</span>

Die Typisierung der weiteren Objektnummer sollte aus einem kontrollierten Vokabular der im eigenen Anwendungskontext typischerweise auftretenden Arten von Nummern gespeist werden. Neben der natürlichsprachlichen Bezeichnung sollte dabei im Idealfall auch ein maschinenlesbarer Identifier (URI) erfasst werden.
:::

---

:::info
### Wiederholbar

<span class="label label-text">Nein</span>

Pro weitere Objektnummer muss genau eine Nummernart angegeben werden, daher ist das Element nur in Kombination mit dem Element [Weitere Objektnummer]() wiederholbar. 
:::

---

:::tip
## Beispiel

- Weitere Objektnummer: FD-2024-127
<span class="label label-text">- Art der weiteren Objektnummer: Fundnummer</span>

- Weitere Objektnummer: 2001_3223
<span class="label label-text">- Art der weiteren Objektnummer: alte Inventarnummer; URI:[http://terminology.lido-schema.org/lido00188](http://terminology.lido-schema.org/lido00188)</span>
:::
---

## Entsprechungen in anderen Schemata

| Schema  | Elementname | Verpflichtungsgrad |
|:--------|:------------|:-------------------|
| [MDS v1.1](www.minimaldatensatz.de) | keine Entsprechung | nicht zutreffend | 
| [Spektrum 5.1](https://collectionstrust.org.uk/spectrum/) | [Andere Nummer: Art](https://collectionstrust.org.uk/resource/other-number-type/?tr=de) | keine Angabe |
