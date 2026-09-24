---
title: Examination
sidebar_position: 4
---

:::caution work-in-Progress
This page has not been build completely.
:::

# Examination <span class="label label-conditional">Conditional</span>

## Purpose and function of the section

The ‘Examination’ section documents the systematic examination procedures carried out as part of the conservation-restoration process. These may include visual assessments (e.g. under a microscope) as part of the condition assessment, or more complex scientific analyses (e.g. X-ray fluorescence analysis, Raman spectroscopy, pigment analyses). This section is modelled on an **event-based** approach, i.e. it records each examination carried out as a separate event with associated contextual information (Who? When? How? With what result?). Multiple examinations can be documented chronologically by repeating the entire section.

This section is conditionally mandatory: it forms part of the documentation only if examinations were actually carried out as part of the conservation and restoration work.

---

## Overview of the metadata elements included

| Element | Level of obligation | URI |
|:--------|:-------------------|:----|
| [Examination identifier]() | <span class="label label-required">Mandatory</span> | [`https://www.w3id.org/conservation/terms/metadata/A2AG55`](https://www.w3id.org/conservation/terms/metadata/A2AG55) |
| [Reason for examination]() | <span class="label label-required">Mandatory</span> | [`https://www.w3id.org/conservation/terms/metadata/CF3C22`](https://www.w3id.org/conservation/terms/metadata/CF3C22) | 
| [Examining person]() | <span class="label label-required">Mandatory</span> | [`https://www.w3id.org/conservation/terms/metadata/G7F25F`](https://www.w3id.org/conservation/terms/metadata/G7F25F) | 
| [Examining institution]() | <span class="label label-recommended">Recommended</span> | [`https://www.w3id.org/conservation/terms/metadata/G76B7G`](https://www.w3id.org/conservation/terms/metadata/G76B7G ) |
| [Type of examination]() | <span class="label label-optional">Optional</span> | [`https://www.w3id.org/conservation/terms/metadata/F8F594`](https://www.w3id.org/conservation/terms/metadata/F8F594) |
| [Place of examination]() | <span class="label label-conditional">Conditional</span> | [`https://www.w3id.org/conservation/terms/metadata/A15F83`](https://www.w3id.org/conservation/terms/metadata/A15F83) |
| [Examination procedure]() | <span class="label label-required">Mandatory</span> | [`https://www.w3id.org/conservation/terms/metadata/DAB4B7`](https://www.w3id.org/conservation/terms/metadata/DAB4B7) |
| &nbsp; &nbsp; ↳ [Material(s) used (examination)]() | <span class="label label-recommended">Recommended</span> | [`https://www.w3id.org/conservation/terms/metadata/D1CFD5`](https://www.w3id.org/conservation/terms/metadata/D1CFD5) |
| &nbsp; &nbsp; ↳ [Examination instrument]() | <span class="label label-recommended">Recommended</span> | [`https://www.w3id.org/conservation/terms/metadata/D949G6`](https://www.w3id.org/conservation/terms/metadata/D949G6) |
| &nbsp; &nbsp; ↳ [Instrument settings (examination instrument)]() | <span class="label label-recommended">Recommended</span> | [`https://www.w3id.org/conservation/terms/metadata/D6A11G`](https://www.w3id.org/conservation/terms/metadata/D6A11G) |
| [Examination results]() | <span class="label label-required">Mandatory</span> | [`https://www.w3id.org/conservation/terms/metadata/BGG5A6`](https://www.w3id.org/conservation/terms/metadata/BGG5A6)  |


*Further information on the individual elements can be found on the relevant subpages.*

--- 

## Implementation notes

:::tip
The findings documented in this section may be relevant to other sections in terms of content (e.g. more detailed information on materiality). Such findings should be recorded in the relevant section as a supplementary entry (a repetition of the corresponding element) and linked to the underlying test result in order to ensure the evidence base is traceable (for example, the difference between a scientifically verified material identification and one assessed visually and subjectively).

Not every examination is carried out by the conservator who creates the documentation record. If more complex analyses (e.g. X-ray fluorescence analysis) are commissioned from other departments or external institutions, the key details of the event – who carried out the analysis, when, where, and why it was necessary as part of the conservation work – should nevertheless be recorded in the conservation documentation. In such cases, the ‘Examining institution’ field can be used to indicate that the examination was carried out externally. The results of the examinations can then be referenced via the corresponding examination record. To ensure that the key findings of the examination can be viewed at a glance within the conservation documentation, it is advisable to also provide a brief textual summary.
:::

--- 

## Equivalents in other schemas

| Schema | Corresponding unit | URI |
|:-------|:----------------------|:----|
|[MDS v1.1](www.minimaldatensatz.de)|  | 
|[Spektrum 5.1](https://collectionstrust.org.uk/spectrum/?tr=de)| | | 
| [LIDO v1.1](https://www.lido-schema.org/schema/v1.1/lido-v1.1.html) |  | | 

*Detailed mappings at element level can be found on the pages for each individual metadata element.* 
