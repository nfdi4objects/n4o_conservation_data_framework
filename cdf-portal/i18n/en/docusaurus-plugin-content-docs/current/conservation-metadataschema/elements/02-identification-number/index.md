---
title: Identification number
sidebar_position: 2
---

:::caution Translation pending
This page has not been translated into English yet. The German original is shown below.
:::

 

# Identification number

Section: [Objekt identification](https://nfdi4objects.github.io/n4o_conservation_data_framework/en/conservation-metadataschema/sections/01-object-identification)

---
 
## Terminology 

 **URI of the Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/F7D3DB)](https://www.w3id.org/conservation/terms/metadata/F7D3DB)

**Possible alternative field names in database systems:**
- Intenvar number
- Object number
- Reference number
- Catalogue number
- Object ID
- Signature
- Identifier

---

## Definition

This element records a unique alphanumeric identifier that enables the object to be identified during the conservation process.  

---

:::info[Level of obligation]

<span class="label label-required">Mandatory</span>

The identification number ensures unambiguous identification, particularly in the case of items with similar or identical names, and is therefore essential for systematic object management.
:::

---

:::info[Field value]

<span class="label label-text">Text / URI</span>

Ideally, the identifier should be a machine-readable, persistent identifier (PID). In practice, however, not all organisations have such a structured identification system in place yet; therefore, the schema does not specify a mandatory format for the identifier at this stage.
:::

---

:::info[Repeatable]

<span class="label label-text">Nein</span>

This element cannot be repeated, as each object must be assigned exactly one unique identifier. Additional or previous object numbers (e.g. old inventory numbers, temporary find numbers or other external numbers) can instead be recorded in the optional element [Alternative object number](https://nfdi4objects.github.io/n4o_conservation_data_framework/en/conservation-metadataschema/elements/alternative-object-number).
:::
---

:::tip[Example]

- **Kennzeichnungsnummer:** O.2023_3245

- **Kennzeichnungsnummer:** FD_2024-127
:::

---

## Equivalents in other schemas

| Schema | Element name | Level of obligation |
|:--------|:-------------------|:----|
| [MDS v1.1](www.minimaldatensatz.de) | [Inventarnummer](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48104544/Inventarnummer+Pflicht) | Mandatory |
| [Spektrum 5.1](https://collectionstrust.org.uk/spectrum/) | [Object number](https://collectionstrust.org.uk/resource/object-number/) | Mandatory | 