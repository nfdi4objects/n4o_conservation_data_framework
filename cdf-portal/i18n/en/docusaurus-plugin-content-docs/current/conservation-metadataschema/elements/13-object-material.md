---
title: Object material
sidebar_position: 13
---

# Object material

Section: [Object description](/conservation-metadataschema/sections/object-description)

---
 
## Terminology 

 **URI of the Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/D866AD](https://www.w3id.org/conservation/terms/metadata/D866AD)

**Possible alternative field names in database systems:** 
- Material
- Object material
- Consists of 
- Material details

## Definition

:::info
This element records the materials of which the object is made. These may be main materials as well as subordinate or secondary materials. The element and its obligation are based on established standards for general object documentation. Object material is of central importance for conservation in particular, as material properties largely determine an object's behaviour, its damage patterns and the appropriate treatment methods. 
:::

---

## Modelling 

### Level of obligation

<span class="label label-required">Mandatory</span>  

The element is mandatory, as professional conservation is not possible without knowledge of the material composition. Furthermore, information on materials is essential for risk assessment, preventive conservation and the selection of suitable conservation materials. Without this information, responsible treatment cannot be guaranteed.
 
---

### Field value

<span class="label label-text">Text / URI</span>  

A suitable controlled vocabulary should be used for recording, in order to ensure consistency and comparability.

---

### Repeatable

<span class="label label-text">Yes</span>  

The element is repeatable, as many objects consist of several materials. Ideally, the main material should be indicated. 

---

### Notes
:::note
Ideally, the basis on which the material was identified should also be documented, i.e. whether the information is based purely on visual examination, on scientific analysis (e.g. X-ray fluorescence) or on other examination methods. This information indicates how reliable the material identification is and helps later users to assess the reliability of the data. If the examination results are available in digital and accessible form, a direct link to the corresponding datasets is recommended.
:::

:::note
If a new material is identified during the conservation examination, or if the material information documented when the object was received by the conservation studio is refined in the course of treatment, this should be recorded additionally in the conservation documentation by repeating the element, rather than overwriting the previous entry.
:::

---

::tip[Example]
-	**Object Material:** Paper; [GND-URI: http://d-nb.info/gnd/4044522-7](http://d-nb.info/gnd/4044522-7) [visual examination]

-	**Object Material:** Main component: [Fir wood](https://www.w3id.org/archlink/terms/conservationthesaurus/FCA7DA); Other: [Iron](https://www.w3id.org/archlink/terms/conservationthesaurus/F71C6B)

-	**Object Material:** Non-ferrous metal
    - **Object Material:** [Bronze](http://vocab.getty.edu/aat/300010957); determined by: [XRF analysis of 12 May 2024](/conservation-metadataschema/sections/analysis) 
:::

---

## Equivalents in other schemas

| Schema  | Element name | Level of obligation |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | [Material](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48104549/Material+Empfohlen) | Recommended | 
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/)| [Material](https://collectionstrust.org.uk/resource/material/) | Not specified |