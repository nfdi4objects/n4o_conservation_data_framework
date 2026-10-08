---
title: Type of alternative object number
sidebar_position: 1
---
 
# Type of alternative object number

Section: [Object identification](https://nfdi4objects.github.io/n4o_conservation_data_framework/en/conservation-metadataschema/sections/01-object-identification)

---
## Terminology 

 **URI of the Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/LGPT6AC](https://www.w3id.org/conservation/terms/metadata/LGPT6AC)

**Possible alternative field names in database systems:**
- Type of additional object number
- Alternative object number type
- Type of reverence number
- Type of other number

---

## Definition

The element specifies the type of identifier entered in the [Additional object number](https://nfdi4objects.github.io/n4o_conservation_data_framework/en/conservation-metadataschema/elements/alternative-object-number/) element (e.g. find number, old inventory number, external object number) at the time of conservation. This classification makes it possible to trace the origin and intended use of the alternative number.
 
---

:::info[Level of obligation]

<span class="label label-conditional">Conditional</span>

As soon as a alternative object number has been recorded, it is essential to specify the type. Without this classification, the semantic context is lost, and the additional number becomes a meaningless string of characters with no discernible connection to the object or its history.
:::
 
---

:::info[Field value]

<span class="label label-text">Text / URI</span>

The classification of the alternative object numbers should be based on a controlled vocabulary comprising the types of numbers typically encountered in the specific application context. In addition to the natural-language description, a machine-readable identifier (URI) should ideally also be recorded.
:::

---

:::info[Repeatable]

<span class="label label-text">No</span>

Exactly one number type must be specified for each additional object number; therefore, this element can only be repeated in combination with the [Additional object number](https://nfdi4objects.github.io/n4o_conservation_data_framework/en/conservation-metadataschema/elements/alternative-object-number/) element.
:::

---

:::tip[Example]

- Alternative object number: FD-2024-127
    - **Type of alternative object number:** Previous reference number

- Alternative object number: 2001_3223
    - **Type of alternative object number:** Old inventory number; URI:[http://terminology.lido-schema.org/lido00188](http://terminology.lido-schema.org/lido00188)
:::

---

## Equivalents in other schemas

| Schema  | Element name | Level of obligation |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | no equivalent | not applicable |   
| [Spektrum 5.1](https://collectionstrust.org.uk/spectrum/) | [Other number type](https://collectionstrust.org.uk/resource/other-number-type/) | Record once only for an Other number |
