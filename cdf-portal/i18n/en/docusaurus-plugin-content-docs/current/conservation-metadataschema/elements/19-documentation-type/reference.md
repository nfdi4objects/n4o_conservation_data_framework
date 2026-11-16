---
title: Reference
sidebar_position: 1
---

# Reference

Section: [Condition assessment](/conservation-metadataschema/sections/condition-assessment)

---
 
## Terminology 

 **URI of the Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/GDF23F](https://www.w3id.org/conservation/terms/metadata/GDF23F)

**Possible alternative field names in database systems:** 
- Link
- Reference
- Media link
- Storage location
- Repository
- Archive
- Record identifier
- Found in

## Definition

:::info
This element links a specified type of documentation to the place where the associated documentation can be found. This may be a record in another system, a file, a higher-level bundle or, in the case of analogue documentation, a physical location.
:::

---

## Modelling 

### Level of obligation

<span class="label label-conditional">Conditional</span>

The element is a sub-element of [Documentation Type](/conservation-metadataschema/elements/documentation-type/) and is mandatory wherever a reference to the associated documentation is possible. If there is no reference target, the record may also be saved without this element.
 
---

### Field value

<span class="label label-text">Text / URI</span>

Any form of reference that enables the documentation to be located is permitted, for example:

- persistent identifiers (PIDs)
- URIs or IDs of records in other systems, such as a digital asset management system (DAM)
- file names or file paths
- shelfmarks or location details for analogue documentation

The most durable forms of reference possible are recommended, ideally persistent identifiers. However, as these are not yet widely used in conservation, the following applies: any form of reference is better than none.

---

### Repeatable

<span class="label label-text">Yes</span>

The element is repeatable within a documentation type. Where there are only a few associated media, for example individual photographs, each record can be referenced directly. For larger holdings, such as a photographic documentation comprising many images, a single reference to a higher-level unit such as a bundle or folder is recommended instead. 

Each reference belongs to exactly one documentation type. This ensures it remains clear which media represent which type of documentation, even when several documentation types are specified within a single condition assessment.

---

:::tip[Example]
- **Documentation Type:** [Photographic documentation](https://www.w3id.org/archlink/terms/conservationthesaurus/C33D85)
  - **Reference:** https://dam.example.org/collection/4711
- **Documentation Type:** [Damage mapping](https://www.w3id.org/archlink/terms/conservationthesaurus/D9A6FA)
  - **Reference:** Conservation archive, folder R-2024-017
- **Documentation Type:** [External condition report](https://www.w3id.org/archlink/terms/conservationthesaurus/D7D443)
  - **Reference:** Condition_report_Inv-1234_2026-03-12.pdf
:::

---

## Equivalents in other schemas

| Schema  | Element name | Level of obligation |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | No equivalent | Not applicable |
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/) | No equivalent | Not applicable |