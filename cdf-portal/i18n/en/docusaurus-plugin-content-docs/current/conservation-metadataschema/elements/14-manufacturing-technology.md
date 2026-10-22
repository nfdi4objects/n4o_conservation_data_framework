---
title: Manufacturing technology
sidebar_position: 14
---

# Manufacturing technology

Section: [Object description](/conservation-metadataschema/sections/object-description)

---
 
## Terminology 

 **URI of the Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/C4BCF8](https://www.w3id.org/conservation/terms/metadata/C4BCF8)

**Possible alternative field names in database systems:** 
- Technique
- Production

## Definition

:::info
The production technique describes the processes and methods used to make the object. These include craft techniques, artistic processes or surface treatments. When the schema was developed, this element was identified as a common component of the existing documentation traditions of all conservation disciplines. 
:::

---

## Modelling 

### Level of obligation

<span class="label label-recommended">Recommended</span>

The element is recommended, as information on the production technique can be valuable for assessing material behaviour, damage patterns and conservation approaches. Recording it also enables comparisons between objects of similar manufacture and supports art-historical or craft-related classification. The element is not marked as mandatory because in some cases, particularly with heavily degraded artefacts, the original technique can no longer be clearly reconstructed. 
---

### Field value

<span class="label label-text">Text / URI</span>

A suitable controlled vocabulary should be used for recording, in order to ensure consistency and comparability. In some cases, it may be useful to allow additional explanations in a free-text field so that more complex techniques can be described in greater detail where necessary.

---

### Repeatable

<span class="label label-text">Yes</span>

As many objects combine several techniques (e.g. a wooden sculpture that has been carved, polychromed and partially gilded), the field can be repeated.

---

### Notes
:::note
The object description is usually taken over from the existing object documentation when the object is received by the conservation studio, ideally by importing it directly from the collection management system into the conservation record. With archaeological objects in particular, insights into how an object was made often only become apparent during conservation treatment. With other objects, too, the close proximity to the object during conservation-restoration work may yield new findings about its production technique. If new insights are gained during treatment, the imported entry should therefore not be overwritten. Instead, the element should be repeated with the new data value, and it should be indicated which entry reflects the current state of knowledge. This keeps the development of knowledge about the object traceable.

Furthermore, it is desirable that such updates also flow back into the object record in the collection management system once the conservation treatment has been completed. 
:::

::: note
In addition to naming a specific technique, the identification of which is often partly interpretative in nature, it may in some cases be useful to also record the purely objectively observed technological traces on which the assumed technique is based.
::: 

---

:::tip[Example]
˗	**Production Technique:** Oil painting [URI: http://vocab.getty.edu/aat/300178684](http://vocab.getty.edu/aat/300178684)
˗	**Production**
    ˗	**Technological traces:** Hammer marks [URI: https://www.w3id.org/archlink/terms/conservationthesaurus/CGCD82](https://www.w3id.org/archlink/terms/conservationthesaurus/CGCD82) 
    ˗	**Technique:** [Forged](https://www.w3id.org/archlink/terms/conservationthesaurus/B64825) 
:::

---

## Equivalents in other schemas

| Schema  | Element name | Level of obligation |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | [Technique](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48104540/Technik+Empfohlen) | Recommended | 
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/)| [Technique](https://collectionstrust.org.uk/resource/technique/) | Not specified (as often as necessary) |