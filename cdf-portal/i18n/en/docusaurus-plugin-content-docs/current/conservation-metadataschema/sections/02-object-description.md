---
title: Object description
sidebar_position: 2
---

# Object description <span class="label label-required">Mandatory</span>

## Purpose and function of the section

The object description captures the material and physical characteristics of the object. Unlike the object identification, which serves to identify the object, this section describes the object in terms of its specific material appearance. The section focuses on information that is relevant to conservators as a basis for assessing the condition of the object, selecting appropriate conservation methods and interpreting signs of damage.

---

## Overview of the metadata elements included

| Element | Level of obligation | URI |
|:--------|:-------------------|:----|
| [Object typ]() | <span class="label label-required">Mandatory</span> | [`https://www.w3id.org/conservation/terms/metadata/F1BA31 `](https://www.w3id.org/conservation/terms/metadata/F1BA31) |
| [Further object properties]() | <span class="label label-recommended">Recommended</span> | [`https://www.w3id.org/conservation/terms/metadata/BGC9F3`](https://www.w3id.org/conservation/terms/metadata/BGC9F3) | 
| [Object material]() | <span class="label label-required">Mandatory</span> | [`https://www.w3id.org/conservation/terms/metadata/D866AD`](https://www.w3id.org/conservation/terms/metadata/D866AD) | 
| [Manufacturing technology]() | <span class="label label-recommended">Recommended</span> | [https://www.w3id.org/conservation/terms/metadata/C4BCF8](https://www.w3id.org/conservation/terms/metadata/C4BCF8) | 

*Further information on the individual elements can be found on the relevant subpages.*

--- 

## Implementation notes

:::tip
Ideally, the information in this section should be transferred directly from the relevant object record into the conservation documentation, or linked to it, in order to ensure consistent data management. Manual entry by conservators is only necessary if no referenceable object record is available (for example, if no central collection management system is used or if the object is only being catalogued as part of the conservation-restoration process).  

If specific investigations carried out in the context of the conservation process yields new insights into the object’s description (e.g. more precise details regarding materials or manufacturing techniques), these should be recorded in the conservation documentation as a supplementary entry (a repetition of the relevant metadata element), without overwriting existing details. The updated details should then also be incorporated back into the object record, so that the findings obtained during the conservation are permanently accessible in a central location within the object’s information.
:::

--- 

## Equivalents in other schemas

| Schema | Corresponding unit | URI |
|:-------|:----------------------|:----|
|[MDS v1.1](www.minimaldatensatz.de)| Datenfelder (Erfassung) | [`www.minimaldatensatz.de/Datenfelder+Erfassung`](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48104066/Datenfelder+Erfassung)
|[Spektrum 5.1](https://collectionstrust.org.uk/spectrum/?tr=de)| Inventarisierung | [`https://collectionstrust.org.uk/resource/cataloguing-suggested-procedure/?tr=de`](https://collectionstrust.org.uk/resource/cataloguing-suggested-procedure/?tr=de) | 
| [LIDO v1.1](https://www.lido-schema.org/schema/v1.1/lido-v1.1.html) | Object Identification Wrapper | [`https://lido-schema.org/schema/latest/lido.html#objectIdentificationWrap`](https://lido-schema.org/schema/latest/lido.html#objectIdentificationWrap) | 

*Detailed mappings at element level can be found on the pages for each individual metadata element.* 
