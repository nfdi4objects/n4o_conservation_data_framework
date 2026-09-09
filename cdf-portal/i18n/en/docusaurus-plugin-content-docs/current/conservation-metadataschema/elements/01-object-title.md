---
title: Objektbenennung
sidebar_position: 1
---

:::caution Translation pending
This page has not been translated into English yet. The German original is shown below.
:::

 

# Objektbenennung

Sektion: [Objektkennzeichnung](https://nfdi4objects.github.io/n4o_conservation_data_framework/conservation-metadataschema/sections/01-object-identification)

---
## Begrifflichkeiten 

 **URI der Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/B5DD1A](https://www.w3id.org/conservation/terms/metadata/B5DD1A)

**Mögliche alternativen Feldbezeichnungen in Datenbanksystemen:**
- Objekttitel
- Objektname
- Objektansprache
- Motiv

---

## Definition
 
Die Objektbenennung erfasst die gebräuchliche Bezeichnung des konkreten Objekts, auf das sich die Restaurierungsdokumentation bezieht, in natürlicher Sprache. Sie dient dazu, das Objekt schnell identifizierbar und ansprechbar zu machen, sowohl in der internen Kommunikation als auch in der Dokumentation.
 
Die Benennung kann aus einem offiziellen Titel oder aus einer Kombination von Objekttyp und beschreibenden Attributen bestehen. Entscheidend ist, dass die Benennung das Objekt für Menschen eindeutig wiedererkennbar macht.
 
---

:::info
### Verpflichtungsgrad

<span class="label label-required">Pflicht</span>

Die Objektbenennung ist für die fachliche Verständlichkeit der Dokumentation erforderlich und schafft den notwendigen Kontext für alle Beteiligten. Ohne sie bleibt das behandelte Objekt selbst bei vorhandener Inventarnummer für die menschliche Kommunikation inhaltlich schwer einzuordnen.
:::
 
---

:::info
### Feldwert

<span class="label label-text">Text</span>

Das Element sollte als Freitext-Feld angelegt werden, um ausreichend Flexibilität für die fachspezifische Beschreibung des jeweiligen Objektes zu ermöglichen.
:::

---

:::info
### Wiederholbar

<span class="label label-text">Ja</span>
:::
---

:::tip
## Beispiel

<span class="label label-text">- Objektbenennung: Der Schrei</span>
 
<span class="label label-text">- Objektbenennung: Porträtgemälde Herzog Johann III.</span>
:::
---

## Entsprechungen in anderen Schemata

| Schema        | Elementname | Verpflichtungsgrad |
|:--------------|:------------|:-------------------|
| [MDS v1.1](www.minimaldatensatz.de)| [Objektitel oder - benennung](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48103813/Objekttitel+oder+-benennung+Pflicht)|Pflicht
| [Spektrum 5.1](https://collectionstrust.org.uk/spectrum/)| [Titel](https://collectionstrust.org.uk/resource/title/?tr=de)| keine Angabe| 
