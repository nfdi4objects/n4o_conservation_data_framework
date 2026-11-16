---
title: Documentation type
sidebar_position: 19
---

# Documentation type

Section: [Condition assessment](/conservation-metadataschema/sections/condition-assessment)

---
 
## Terminology 

**URI of the Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/CDD6B5](https://www.w3id.org/conservation/terms/metadata/CDD6B5)

**Possible alternative field names in database systems:**
- Type of documentation
- Documentation category
- Documentation medium
- Documented as

## Definition

:::info
This element records which types of documentation were produced in addition to this condition assessment record, for example photographic documentation, damage mapping or a detailed external condition report. It makes clear which data were collected during this condition assessment and, together with the sub-element [Reference](/conservation-metadataschema/elements/documentation-type/reference), provides a central overview of the associated media.
:::

---

## Modelling 

### Level of obligation

<span class="label label-conditional">Conditional</span>

The element is mandatory as soon as further types of documentation have been produced in addition to the mandatory element [Condition Description](/conservation-metadataschema/elements/condition-description/). If the condition description is the only type of documentation, the element does not have to be completed. It is, however, recommended that the condition description always be listed (see Notes).
 
---

### Field value

<span class="label label-text">Text / URI</span>

The specific implementation, for example as a checkbox system or drop-down menu, is left to the individual institution. This allows institution-specific documentation practices to be represented. It is, however, recommended that standardised terms from a controlled vocabulary be provided for the common types of documentation (written condition description, photographic documentation, damage mapping, etc.).

---

### Repeatable

<span class="label label-text">Yes</span>

The element is repeatable, as several types of documentation are often used in parallel to record a condition. Each repetition forms a unit together with its sub-element **Reference**, so that it remains clear which reference belongs to which type of documentation.

---

### Notes

:::note
Every condition assessment must contain a [Condition Description](/conservation-metadataschema/elements/condition-description/), i.e. a written, structured description of the object's condition directly within this record. It is recommended that this condition description always be listed here as a type of documentation as well, even if no other types of documentation exist.

This may at first seem redundant, but it serves a practical purpose: it makes it immediately clear, both to people and to databases and other digital systems, that a condition description exists and which other types of documentation supplement it. No reference is required for the condition description, as it is contained in the record itself.

Listing it is not mandatory. If it is omitted, the condition description is nevertheless deemed to exist.

**Distinction from a more detailed written condition report**

If, in the case of very complex object conditions, a more detailed written report has also been produced, it can be explicitly listed here with the value **External condition report** and referenced via the sub-element **Reference**.

**Relation to practice**

The element reflects the common practice in everyday conservation work of recording an object's condition using various complementary types of documentation, and implements this in a structured way. Via the sub-element **Reference**, each external type of documentation can be linked directly to the associated documentation, for instance to a record in another system, to a file or, in the case of analogue documentation, to a shelfmark or location.
:::

---

:::tip[Example]

- **Documentation Type:** [Condition photograph](https://www.w3id.org/archlink/terms/conservationthesaurus/C33D85)
- **Documentation Type:** [External condition report](https://www.w3id.org/archlink/terms/conservationthesaurus/D7D443)
- **Documentation Type:** [X-ray image](https://www.w3id.org/archlink/terms/conservationthesaurus/FD2B2B)
- **Documentation Type:** [Condition mapping](https://www.w3id.org/archlink/terms/conservationthesaurus/D9A6FA)
:::

---

## Equivalents in other schemas

| Schema  | Element name | Level of obligation |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | No equivalent | Not applicable | 
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/)| No equivalent | Not applicable |