---
title: Assessment Date (Condition Assessment)
sidebar_position: 17
---

# Date of entry (condition assessment)

Section: [Condition assessment](/conservation-metadataschema/sections/03-condition-assessment)

---
 
## Terminology 

 **URI of the Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/CA1BC5](https://www.w3id.org/conservation/terms/metadata/CA1BC5)

**Possible alternative field names in database systems:**
- Date of assessment (condition assessment)
- Condition assessment date

## Definition

:::info
The assessment date records when the condition assessment of the object was carried out. This refers to the date of the examination, not the date on which the information was entered into a database system. 
:::
 
---

## Modelling

### Level of obligation

<span class="label label-required">Mandatory</span>

The element is mandatory so that the chronological sequence of different conditions and their changes over time can be traced. The date may also be essential for legal and insurance purposes, as it can provide evidence that damage already existed at a particular point in time, for example in connection with loans or transport.
 
---

### Field value

<span class="label label-text">Date/Text</span>

The date should be given in accordance with ISO 8601 in the format YYYY-MM-DD to ensure consistent, machine-readable formatting and to facilitate chronological sorting and analysis. If the exact date is not known, the precision can be reduced (YYYY-MM or YYYY). If a condition assessment extends over several days, a date range can be given (e.g. 2026-03-15/2026-03-18).

When retrospectively recording earlier condition assessments, the exact date is often unknown. In such cases, it should be reconstructed as accurately as possible, for example from photo metadata, correspondence or loan documents. If the date cannot be reconstructed, this should be stated explicitly (e.g. "unknown") to make clear that the information was not simply forgotten. 

---

### Repeatable

<span class="label label-text">No</span>

The element is not repeatable, as each condition assessment refers to a specific point in time or period. If the condition of an object is assessed again at a later date, this constitutes a new condition assessment with its own [identifier](/conservation-metadataschema/elements/ID-condition-assessment) and its own assessment date.

---

:::tip[Example]
- **Assessment Date:** 2026-03-15
- **Assessment Date:** 2026-03-15/2026-03-18 
- **Assessment Date:** 1971 (retrospective record, inferred from photographic documentation)
:::

---

## Equivalents in other schemas

| Schema  | Element name | Obligation |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | [Datierung](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48104553/Datierung+Bedingt+Pflicht) | Conditionally mandatory | 
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/)| [Condition check/assessment date](https://collectionstrust.org.uk/resource/condition-check-assessment-date/) | Not specified |