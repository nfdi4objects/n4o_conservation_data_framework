---
title: Alternative object number
sidebar_position: 3
---


# Alternative object number

Section: [Object identification](https://nfdi4objects.github.io/n4o_conservation_data_framework/en/conservation-metadataschema/sections/01-object-identification)

---
 
## Terminology 

 **URI of the Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/K343FVC](https://www.w3id.org/conservation/terms/metadata/K343FVC)

**Possible alternative field names in database systems:**
- Alternative number
- Old inventory number
- Other object number
- external reference number

---

## Definition

This element records an additional number that is or was assigned to the object but is not (or is no longer) used as its primary identifier. This may be a previous number that was replaced as a result of inventorying or a change of collection, or it may be external reference numbers from other contexts (e.g. numbers from previous owners).
 
---

:::info[Level of obligation]

<span class="label label-optional">Optional</span>

This element is optional, as not every object has multiple numbers, and recording this information falls outside the main focus of the conservation documentation.
:::

---

:::info[Field value]

<span class="label label-text">Text / URI</span>

The field value for this element is defined as a free-text field so that as wide a variety of number types as possible can be entered. Where available, former identifiers (URI/PID) may also be entered.
:::

---

:::info[Repeatable]

<span class="label label-text">Yes</span>

The element can be repeated to allow multiple alternative numbers to be entered.
:::

---

:::tip[Example]

- **Alternative object number:** FN_2349

- **Alternative object number:** 2024/03
:::

---

## Equivalents in other schemas

| Schema  | Element name | Level of obligation |
|:--------|:------------|:-------------------|
| [MDS v1.1](www.minimaldatensatz.de) | no equivalent | not applicable |  
| [Spektrum 5.1](https://collectionstrust.org.uk/spectrum/) | [Other number](https://collectionstrust.org.uk/resource/other-number/) | Where necessary | 