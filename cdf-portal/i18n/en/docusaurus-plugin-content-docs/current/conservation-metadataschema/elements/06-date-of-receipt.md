---
title: Date of receipt
sidebar_position: 6
---


# Date of receipt

Section: [Object identification](https://nfdi4objects.github.io/n4o_conservation_data_framework/en/conservation-metadataschema/sections/01-object-identification)

---
 
## Terminology 

 **URI of the Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/F2A45F](https://www.w3id.org/conservation/terms/metadata/F2A45F)

**Possible alternative field names in database systems:** 
- Inventory date
- Collection entry
- Receipt
- Received on
- Accession date

## Definition

The date of entry records the date on which the object was added to the collection currently under the institution’s care. It documents the date of the institution’s acquisition, whether through purchase, donation, discovery or transfer of ownership. This field refers exclusively to the object’s inclusion in the collection, not to the date on which it was delivered to the conservation labratory.
 
---

:::info[Level of obligation]

<span class="label label-conditional">Conditional</span>

The date of acquisition should always be recorded, where known, as it is relevant for subsequent research and for reconstructing the object’s history. In practice, however, the date of acquisition is not always documented, particularly in the case of older collections, permanent loans or objects with an unclear acquisition history; for this reason, this field has been defined as conditionally mandatory.
:::
 
---

:::info[Field value]

<span class="label label-text">Date (according to ISO 8601) or Text</span>

Ideally, a specific date should be recorded. If this is not known with certainty, years or approximate time periods may alternatively be documented as free text. If the date on which the object became part of the collection in question cannot be determined, the data value ‘unknown’ should be entered rather than leaving the field blank. This clearly documents that the date of acquisition was not known at the time the conservation documentation was drawn up. At the same time, it prevents an empty field from being mistakenly interpreted as having been omitted by accident when the data is re-used at a later time.
:::

---

:::info[Repeatable]

<span class="label label-text">No</span>
:::
---

:::tip[Example]

- **Date of receipt:** 2025-03-25

- **Date of receipt:** 1865
:::

---

## Equivalents in other schemas

| Schema  | Element name | Level of obligation |
|:--------|:------------|:-------------------|
| [MDS v1.1](www.minimaldatensatz.de) | [Datierung](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48104553/Datierung+Bedingt+Pflicht) | Conditional mandatory | 
| [Spektrum 5.1](https://collectionstrust.org.uk/spectrum/) |[Accession date](https://collectionstrust.org.uk/resource/accession-date/) & [Date information](https://collectionstrust.org.uk/resource/date-information/)| Record once only for an object or group of objects |