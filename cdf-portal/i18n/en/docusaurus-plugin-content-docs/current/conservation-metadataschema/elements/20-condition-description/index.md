---
title: Condition Description
sidebar_position: 20
---

# Condition Description

Section: [Condition Assessment](/conservation-metadataschema/sections/condition-assessment)

---

## Terminology

**URI in the Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/AC1786](https://www.w3id.org/conservation/terms/metadata/AC1786)

**Possible alternative field names in database systems:**
- Condition report
- Condition summary
- Condition documentation
- Object condition
- Condition findings

---
## Definition

:::info
This element is a parent element that groups together several related sub-elements. It does not record a data value itself. Together, the sub-elements form the textual and structured condition documentation, including the key findings. These comprise observed condition characteristics and types of damage as well as relevant environmental conditions that may have affected the condition.
:::

---

## Modelling

### Obligation

<span class="label label-required">Mandatory</span>

This element is mandatory, as every condition assessment must include a description of the object's condition. Which sub-elements are mandatory is specified for each individual sub-element.

---
### Field Value

<span class="label label-text">No data value</span>

This element serves solely to group its sub-elements and does not contain any data values of its own. It has its own URI so that it can be referenced unambiguously.

---

### Repeatable

<span class="label label-text">No</span>

Each [Condition Assessment](/conservation-metadataschema/sections/condition-assessment) section contains exactly one condition description. It describes the condition of the object at the point in time to which the condition assessment refers. For each additional point in time, a separate Condition Assessment section is created.

---

### Sub-elements

| Element | Obligation |
|:--------|:-----------|
| [Physical Condition](/conservation-metadataschema/elements/condition-description/physical-condition/) | Mandatory |
| [Damage Phenomena](/conservation-metadataschema/elements/condition-description/damage/) | Mandatory |
| [Previous Environmental Conditions](/conservation-metadataschema/elements/condition-description/environmental-conditions) | Recommended |
| [Conservation History](/conservation-metadataschema/elements/conservation-history) | Recommended |

---

### Notes

:::note
The condition description brings together all information on the condition of an object that is established during a condition assessment. It always refers to the point in time of that condition assessment, which is clearly identified by the element [Assessment Date](/conservation-metadataschema/elements/date-of-entry).

Grouping the information in this way keeps the condition information together and allows it to be assigned unambiguously to a point in time. This makes the documentation consistent and traceable, and allows it to be compared directly across repeated condition assessments.

The sub-elements combine a detailed free-text description with recommended structured information. This keeps the documentation comprehensible and sufficiently detailed for human readers, while also making it machine-readable for digital systems. Depending on the discipline, the condition description *can* and *should* be extended with further elements of specific relevance.
:::

---

## Equivalents in Other Schemas

| Schema  | Element name | Obligation |
|:--------|:-------------|:-----------|
| [MDS v1.1](http://www.minimaldatensatz.de) | No equivalent | Not applicable |
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/) | [Outcome of condition check/technical assessment](https://collectionstrust.org.uk/resource/condition-checking-and-technical-assessment-suggested-procedure/) | Not applicable |