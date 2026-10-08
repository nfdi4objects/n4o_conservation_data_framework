---
title: Type of identification number
sidebar_position: 1
---

# Type of identification number

Section: [Object identification](https://nfdi4objects.github.io/n4o_conservation_data_framework/en/conservation-metadataschema/sections/01-object-identification)

---
 
## Terminology 

 **URI of the Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/G59SR3](https://www.w3id.org/conservation/terms/metadata/G59SR3)

**Possible alternative field names in database systems:**
- Identification number type

---

## Definition
 
The type of identification number records the status of the [Identification number](https://nfdi4objects.github.io/n4o_conservation_data_framework/en/conservation-metadataschema/elements/identification-number/) at the time of conservation and makes it clear whether the object already has a permanent institutional identifier (e.g. an inventory number) or has been processed using a provisional number. This element ensures that the unique identification number is interpreted correctly and that the context of the number is clear.

---

:::info[Level of obligation]

<span class="label label-required">Mandatory</span>

Without specifying whether the number is permanent or temporary, it remains unclear whether the identification documented during conservation will remain valid in future. In the case of temporary numbers, it is to be expected that the object will later be assigned a new, permanent number. If this information is missing, future users of the documentation will be unable to assess whether the identification number for the object is still current or whether they need to search for an updated number.
:::

---

:::info[Field value]

<span class="label label-text">Text/URI</span>

The classification of the identification number should be based on a controlled vocabulary of the types of numbers typically encountered in the specific application context. In addition to the natural-language description, a machine-readable identifier (URI) should ideally also be recorded.
:::

---

:::info[Repeatable]

<span class="label label-text">No</span>

The identification number must be described using exactly one defining number type.
:::

---

:::tip[Example]

- **Type of identification number:** Inventory number; URI:[http://terminology.lido-schema.org/lido00113](http://terminology.lido-schema.org/lido00113)

- **Type of identification number:** Temporary reference number
:::
---

## Equivalents in other schemas

| Schema  | Element name | Level of obligation |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | no equivalent | not applicable | 
| [Spektrum 5.1](https://collectionstrust.org.uk/spectrum/) | no equivalent | not applicable | 
