---
title: Object type
sidebar_position: 11
---

# Object type

Section: [Object description](/conservation-metadataschema/sections/object-description)

---
 
## Terminology 

 **URI of the Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/F1BA31](https://www.w3id.org/conservation/terms/metadata/F1BA31)

**Possible alternative field names in database systems:** 
- Object kind
- Object name
- Classification term
- Object category
- Object class

## Definition

:::info
The object type assigns the object to a formal category and describes what kind of item it is. Typing allows the object to be classified quickly and is a central element for searching, filtering and statistical analysis. The element and its obligation are based on established standards for documenting cultural heritage objects, thus ensuring compatibility with existing systems.
:::

---

## Modelling 

### Level of obligation

<span class="label label-required">Mandatory</span>

The element is mandatory, as it has become established in practice as the basis for searching and targeted analysis.
 
---

### Field value

<span class="label label-text">Text / URI</span>

A controlled vocabulary of the object types occurring in the respective context of use should be employed for recording, in order to ensure consistency and comparability.

---

### Repeatable

<span class="label label-text">No</span>

Each object must be assigned to exactly one type.

---

:::tip[Example]
-	**Object Type:** Painting [GND-URI: http://d-nb.info/gnd/4122164-3](http://d-nb.info/gnd/4122164-3) 
-	**Object Type:** [Coin](http://nomisma.org/id/coin) 
-	**Object Type:** [Chair](http://obg.vocnet.org/00001110) 
:::

---

## Equivalents in other schemas

| Schema  | Element name | Level of obligation |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | [Objekttyp oder -bezeichnung](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48104538/Objekttyp+oder+-bezeichnung+Pflicht) | Mandatory | 
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/) |[Object name](https://collectionstrust.org.uk/resource/object-name/) | Recommended |