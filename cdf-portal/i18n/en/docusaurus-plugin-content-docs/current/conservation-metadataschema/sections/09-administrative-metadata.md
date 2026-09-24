---
title: Administrative metadata
sidebar_position: 9
---

:::caution work-in-Progress
This page has not been build completely.
:::

# Administrative metadata <span class="label label-required">Mandatory</span>

## Purpose and function of the section

The ‘Administrative Metadata’ section documents information about the conservation documentation record; in other words, not about the object or the activities carried out, but about the data collection process itself. It records when the dataset was created, who edited it, which version is current, and under what conditions the dataset is accessible. This metadata enables version control, traceability of changes and transparent access policies.

This section is mandatory for every dataset, as administrative metadata ensures accountability and the long-term usability of a documentation dataset. To facilitate the integration of conservation datasets into overarching data infrastructures, this section was developed from the outset in line with established data standards, such as the [`DataCite metadata schema`](https://datacite-metadata-schema.readthedocs.io/en/4.6/).  

---

## Overview of the metadata elements included

| Element | Level of obligation | URI |
|:--------|:-------------------|:----|
| [Record identifier]() |  <span class="label label-required">Mandatory</span> | [`https://www.w3id.org/conservation/terms/metadata/G50P34`](https://www.w3id.org/conservation/terms/metadata/G50P34)  |
| [Date of report creation]() | <span class="label label-required">Mandatory</span> | [`https://www.w3id.org/conservation/terms/metadata/D78721`](https://www.w3id.org/conservation/terms/metadata/D78721)  |
| [Creator (Data set)]()  | <span class="label label-required">Mandatory</span> | [`https://www.w3id.org/conservation/terms/metadata/F285B2`](https://www.w3id.org/conservation/terms/metadata/F285B2)  |
| [Data holding institution]() | <span class="label label-required">Mandatory</span> | [`https://www.w3id.org/conservation/terms/metadata/Q2R50D`](https://www.w3id.org/conservation/terms/metadata/Q2R50D)  |
| [Version]() | <span class="label label-recommended">Recommended</span> | [`https://www.w3id.org/conservation/terms/metadata/D1F5D3`](https://www.w3id.org/conservation/terms/metadata/D1F5D3)  |
| &nbsp; &nbsp; ↳ [Modification date (Data set)]() | <span class="label label-recommended">Recommended</span> | [`https://www.w3id.org/conservation/terms/metadata/B43DK5`](https://www.w3id.org/conservation/terms/metadata/B43DK5)  |
| &nbsp; &nbsp; ↳ [Editor]() | <span class="label label-recommended">Recommended</span> | [`https://www.w3id.org/conservation/terms/metadata/98ZG32`](https://www.w3id.org/conservation/terms/metadata/98ZG32)  |
| [Access rights]() | <span class="label label-recommended">Recommended</span> | [`https://www.w3id.org/conservation/terms/metadata/G56866`](https://www.w3id.org/conservation/terms/metadata/G56866)  |
| [Language]() | <span class="label label-recommended">Recommended</span> | [`https://www.w3id.org/conservation/terms/metadata/G50P34`](https://www.w3id.org/conservation/terms/metadata/G50P34)  |



*Further information on the individual elements can be found on the relevant subpages.*

--- 

## Implementation notes

:::tip
### Extensibility
As mentioned above, the administrative metadata elements in the Conservation Metadata Schema are based on the mandatory fields of the [DataCite Metadata Schema](https://datacite-metadata-schema.readthedocs.io/en/4.7/) (with the exception of the resource type; see Note 2) and thus represent a minimum requirement deemed fundamentally necessary for conservation documentation. As DataCite is already an established, widely applicable standard, our schema has been deliberately kept to a minimum here. When implementing this in your own recording system, it is therefore advisable, depending on your needs and the depth of information available, to add further metadata elements listed as ‘Recommended’ or ‘Optional’ by DataCite, in order to expand the administrative documentation beyond the minimum defined here.
:::

:::tip
### Resource type during data export
The metadata element *Resource Type*, as found in MDS, LIDO or DataCite MDS 4.7, has not been explicitly listed in this schema, as the use case for the Conservation Metadata Schema considered so far has consistently involved conservation reports and the data value (*Report*) is therefore constant. When exporting and exchanging data with other systems, this element should be added with the appropriate data value to ensure interoperability.
:::

--- 

## Equivalents in other schemas

| Schema | Corresponding unit | URI |
|:-------|:----------------------|:----|
|[MDS v1.1](www.minimaldatensatz.de)|  | 
|[Spektrum 5.1](https://collectionstrust.org.uk/spectrum/?tr=de)| | | 
| [LIDO v1.1](https://www.lido-schema.org/schema/v1.1/lido-v1.1.html) |  | | 
| [DataCite Metadata Schema 4.7](https://datacite-metadata-schema.readthedocs.io/en/4.7/) | DataCite Metadata Properties | [`https://datacite-metadata-schema.readthedocs.io/en/4.7/properties/`](https://datacite-metadata-schema.readthedocs.io/en/4.7/properties/) | 

*Detailed mappings at element level can be found on the pages for each individual metadata element.* 

