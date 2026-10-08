---
title: Provenance
sidebar_position: 5
---
 

# Provenance

Section: [Object identification](https://nfdi4objects.github.io/n4o_conservation_data_framework/en/conservation-metadataschema/sections/01-object-identification)

---
 
## Terminology 

 **URI of the Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/CD3341](https://www.w3id.org/conservation/terms/metadata/CD3341)

**Possible alternative field names in database systems:**
- Place of discovery
- Place of manufacture
- Cultural context
- Provenance
- Cultural context
- Origin
- Provenance
- Location
- Place of manufacture

---

## Definition

The ‘Provenance’ element refers to information regarding the geographical, cultural or contextual origin of the object. Depending on the discipline, various aspects - such as the site of discovery, cultural classification, workshop affiliation or details of acquisition – may be documented here. Even information stating that an object comes from the art trade and that, in some cases, no documented provenance details are available may also be noted here.
 
---

:::info[Level of obligation]

<span class="label label-recommended">Recommended</span>

It is recommended that the provenance be recorded, as it provides contextual information that may be relevant to the interpretation of material properties, manufacturing techniques and the state of preservation. Region-specific traditions, climatic conditions at the place of origin and cultural practices influence both the original condition and the ageing behaviour of objects.
:::
 
---

:::info[Field value]

<span class="label label-text">Text / URI</span>

Appropriate controlled vocabularies should be used for the associated data field of this element in order to ensure consistent terminology. Ideally, in addition to the natural language description, a corresponding unique identifier (URI) should also be recorded to improve machine readability.
:::

---

:::info[Repeatable]

<span class="label label-text">Yes</span>

This element is repeatable, as various aspects of provenance may be relevant.
:::

---

:::tip[Example]

- **Provenance - Place of discovery** Italy; URI: [https://www.geonames.org/3175395/italian-republic.html](https://www.geonames.org/3175395/italian-republic.html)

- **Origin – Cultural classification:** Etruscan; URI [http://d-nb.info/gnd/4015627-8](http://d-nb.info/gnd/4015627-8)

- **Provenance – Acquisition:** Donated in 1976 from the Müller Collection
:::

---

## Implementation note

:::note
The element ‘Provenance’ was deliberately chosen as a generic, interdisciplinary umbrella term and is based on [DIN EN 16095:2012-10](https://dx.doi.org/10.31030/1872916). This decision is in line with the scheme’s overarching objective of being equally applicable to different specialist areas of conservation-restoration. In an archaeological context, details regarding ‘site of discovery’ or ‘cultural classification’ are central, whilst for art-historical objects, an ‘site of discovery’ element is of little use; in such cases, the workshop or stylistic group is more relevant.

In this first version of the Conservation Metadata Schema, this area is therefore deliberately left open. Institutions can determine for themselves, according to their respective context of use, which specific provenance information should be recorded, ideally taking into account existing professional conventions and standards for object recording. These specialist specifications can be mapped to the generic term ‘Provenance’ in the Conservation Metadata Terminology via a ‘broad match’ relationship. In this way, the respective disciplinary differences in the depth and specificity of recording are preserved, whilst the Conservation Metadata Schema serves as a common point of reference. 
:::

---

## Equivalents in other schemas

| Schema  | Elementname | Verpflichtungsgrad |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de)| [Ort](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48105080/Ort+Bedingt+Pflicht) | Conditional obligation | 
| [Spektrum 5.1](https://collectionstrust.org.uk/spectrum/) | [Object production information](https://collectionstrust.org.uk/resource/object-production-information/) and [Place information](https://collectionstrust.org.uk/resource/place-information/)| not specified |
