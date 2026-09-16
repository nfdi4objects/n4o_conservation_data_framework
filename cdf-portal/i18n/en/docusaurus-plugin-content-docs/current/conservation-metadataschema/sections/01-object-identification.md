---
title: Objek identification
sidebar_position: 1
---

:::caution Translation pending
This page has not been translated into English yet. The German original is shown below.
:::

# Objekt identification <span class="label label-required">obligation</span>

## Purpose and function of the section

Object identification serves to uniquely identify the documented object and to place it within broader contexts. It ensures that the object can be unambiguously identified before, during and after the entire treatment process.

The data recorded in this section is not usually collected by conservators themselves, but is taken over as object data from curators or clients. The assigned metadata elements are therefore based on existing standards for general object recording. This section focuses on information that is relevant to conservators as a basis for assessing the condition of the object, selecting suitable conservation methods and interpreting signs of damage.

---

## Overview of the metadata elements included

| element | Level of commitment | URI |
|:--------|:-------------------|:----|
| [objekt title](https://nfdi4objects.github.io/n4o_conservation_data_framework/en/conservation-metadataschema/elements/01-object-title) | <span class="label label-required">obligation</span> | [`https://www.w3id.org/conservation/terms/metadata/B5DD1A`](https://www.w3id.org/conservation/terms/metadata/B5DD1A) |
| [identification number](./kennzeichnungsnummer) | <span class="label label-required">obligation</span> | [`https://www.w3id.org/conservation/terms/metadata/F7D3DB)`](https://www.w3id.org/conservation/terms/metadata/F7D3DB) |
| [type of identification number](./art-der-kennzeichnungsnummer) | <span class="label label-required">obligation</span> | [`https://www.w3id.org/conservation/terms/metadata/G59SR3`](https://www.w3id.org/conservation/terms/metadata/G59SR3) |
| [alternative object number](./weitere-objektnummer) | <span class="label label-optional">optional</span> | [`https://www.w3id.org/conservation/terms/metadata/K343FVC`](https://www.w3id.org/conservation/terms/metadata/K343FVC) |
| [type of alternative object number](./art-der-weiteren-objektnummer) | <span class="label label-conditional">conditional obligation</span> | [`https://www.w3id.org/conservation/terms/metadata/LGPT6AC`](https://www.w3id.org/conservation/terms/metadata/LGPT6AC) |
| [dating](./datierung) | <span class="label label-recommended">recommended</span> | [`https://www.w3id.org/conservation/terms/metadata/F9GB13`](https://www.w3id.org/conservation/terms/metadata/F9GB13) |
| [provenance](./herkunft) | <span class="label label-recommended">recommended</span> | [`https://www.w3id.org/conservation/terms/metadata/CD3341`](https://www.w3id.org/conservation/terms/metadata/CD3341) |
| [date of receipt](./eingangsdatum) | <span class="label label-conditional">conditional obligation</span> | [`https://www.w3id.org/conservation/terms/metadata/F2A45F`](https://www.w3id.org/conservation/terms/metadata/F2A45F) |
| [current location](./standort) | <span class="label label-required">obligation</span> | [`https://www.w3id.org/conservation/terms/metadata/FC3322`](https://www.w3id.org/conservation/terms/metadata/FC3322) |
| [contact person](./ansprechpartnerin) | <span class="label label-optional">optional</span> | [`https://www.w3id.org/conservation/terms/metadata/F3G8D1`](https://www.w3id.org/conservation/terms/metadata/F3G8D1) |
| [creator (object)](./schoepferin) | <span class="label label-optional">optional</span> | [`https://www.w3id.org/conservation/terms/metadata/G76A78`](https://www.w3id.org/conservation/terms/metadata/G76A78) |
| [object relationship](./objektbeziehung) | <span class="label label-conditional">conditional obligation</span> | [`https://www.w3id.org/conservation/terms/metadata/GB6DF3`](https://www.w3id.org/conservation/terms/metadata/GB6DF3) |

  *Further information on the individual elements can be found on the relevant subpages.*

---

## Implementation notes

:::note
Ideally, the information in this section should be transferred directly from the relevant object record into the conservation documentation, or linked to it, in order to ensure consistent data management. Manual entry by conservators is only necessary if no referenceable object record is available (for example, if no central collection management system is used or if the object is only being catalogued as part of the conservation-restoration process). 
:::

--- 

## Equivalents in other schemas

| Schema | Corresponding unit | URI |
|:-------|:----------------------|:----|
|[MDS v1.1](www.minimaldatensatz.de)| Datenfelder (Erfassung) | [`www.minimaldatensatz.de/Datenfelder+Erfassung`](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48104066/Datenfelder+Erfassung)
|[Spektrum 5.1](https://collectionstrust.org.uk/spectrum/?tr=de)| Inventarisierung| [`https://collectionstrust.org.uk/resource/cataloguing-suggested-procedure/?tr=de`](https://collectionstrust.org.uk/resource/cataloguing-suggested-procedure/?tr=de) | 
| [LIDO v1.1](https://www.lido-schema.org/schema/v1.1/lido-v1.1.html) | Object Identification Wrapper | [`https://lido-schema.org/schema/latest/lido.html#objectIdentificationWrap`](https://lido-schema.org/schema/latest/lido.html#objectIdentificationWrap) | 

*Detailed mappings at element level can be found on the pages for each individual metadata element.*



