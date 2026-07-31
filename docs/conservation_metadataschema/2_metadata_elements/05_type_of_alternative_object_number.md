---
layout: default
title: Art der weiteren Objektnummer
parent: Weitere Objektnummer
nav_order: 1
--- 

# Art der weiteren Objektnummer

Sektion: [Objektkennzeichnung](https://nfdi4objects.github.io/n4o_conservation_data_framework/conservation_metadataschema/1_section_overview/01_object_identification.html)

---
## Begrifflichkeiten 

 **URI der Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/LGPT6AC](https://www.w3id.org/conservation/terms/metadata/LGPT6AC)

**Mögliche alternativen Feldbezeichnungen in Datenbanksystemen:**
- Typ der weiteren Objektnummer
- Type of alternative object number

## Definition

Die Art der weiteren Objektnummer spezifiziert den Typ der im Feld „Weitere Objektnummer" erfassten Kennzeichnung (z.B. Fundnummer, alte Inventarnummer, Fremdobjektnummer). Diese Typisierung macht den Ursprung und Verwendungszweck der alternativen Nummer nachvollziehbar.
 
---

{: .highlight }
> ### Verpflichtungsgrad
> 
> Bedingte Pflicht
> {: .label .label-conditional}
> 
> Sobald eine weitere Objektnummer erfasst wurde, ist die Angabe der Art verpflichtend. Ohne Typisierung geht der semantische Kontext verloren, und die zusätzliche Nummer wird zu einer bedeutungslosen Zeichenkette ohne erkennbaren Bezug zum Objekt oder seiner Geschichte.
 
---

{: .highlight }
> ### Feldwert
> 
> Text/URI
> {: .label .label-text }
> 
> Die Typisierung der weiteren Objektnummer sollte aus einem kontrollierten Vokabular der im eigenen Anwendungskontext typischerweise auftretenden Arten von Nummern gespeist werden. Neben der natürlichsprachlichen Bezeichnung sollte dabei im Idealfall auch ein maschinenlesbarer Identifier (URI) erfasst werden.

---

{: .highlight }
> ### Wiederholbar
>
> Nein
> {: .label .label-text }
>
> Pro weitere Objektnummer muss genau eine Nummernart angegeben werden, daher ist das Element nur in Kombination mit dem Element [Weitere Objektnummer]() wiederholbar. 

---

{: .example }
> ## Beispiel
>
> - Weitere Objektnummer: FD-2024-127
>     - Art der weiteren Objektnummer: Fundnummer
> {: .label .label-text }
>
> - Weitere Objektnummer: 2001_3223
>    - Art der weiteren Objektnummer: alte Inventarnummer; URI:[http://terminology.lido-schema.org/lido00188](http://terminology.lido-schema.org/lido00188)
> {: .label .label-text }

---

## Entsprechungen in anderen Schemata

| Schema  | Elementname | Verpflichtungsgrad |
|:--------|:------------|:-------------------|
| [MDS v1.1](www.minimaldatensatz.de) | keine Entsprechung | nicht zutreffend | 
| [Spektrum 5.1](https://collectionstrust.org.uk/spectrum/) | [Andere Nummer: Art](https://collectionstrust.org.uk/resource/other-number-type/?tr=de) | keine Angabe |
