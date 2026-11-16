---
title: Assessment Timing (condition assessment)
sidebar_position: 1
---

# Time of entry (condition assessment)

Section: [Condition assessment](/conservation-metadataschema/sections/condition-assessment)

---
 
## Terminology 

 **URI of the Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/A8ABBA](https://www.w3id.org/conservation/terms/metadata/A8ABBA)

**Possible alternative field names in database systems:** 
- Timing of condition assessment
- Time of recording (condition assessment)
- Temporal reference
- Condition type
- Relation to conservation measure

## Definition

:::info
This element records the temporal relationship between a condition assessment and a conservation measure. It does not specify a date; instead, it places the documented condition in relation to the course of the measure, i.e. before it begins (initial condition), while it is being carried out (intermediate condition) or after its completion (final condition).

This allows the condition information to be clearly assigned to the course of the measure. It also makes it apparent whether the information describes the object's condition prior to any work or the result of the measure.
:::

---

## Modelling 

### Level of obligation

<span class="label label-conditional">Conditional</span>

This element is a sub-element of [Reason for Condition Assessment](/conservation-metadataschema/elements/reason-condition-assessment/) and only becomes mandatory if the reason for the condition assessment is a conservation measure.
 
---

### Field value

<span class="label label-text">Text / URI</span>

To ensure that the position of the assessment relative to the conservation measure is unambiguous and comparable, the field should be populated from a controlled vocabulary with standardised terms.

---

### Repeatable

<span class="label label-text">No</span>

A condition assessment describes the condition of an object at exactly one point in time. The element **Assessment Timing** is therefore not repeatable within a [Condition Assessment](/conservation-metadataschema/sections/condition-assessment) section. Otherwise, it would remain unclear whether the remaining information refers to the initial, intermediate or final condition. For each additional point in time, such as the final condition after completion of the measure, a separate Condition Assessment section is created.

---

### Notes

:::note
This element takes up the established practice of recording the initial and final condition in conservation documentation and bridges the gap to a consistent, event-based model. Rather than providing two separate schemas or duplicate groups of elements, the schema uses the same structure for every condition assessment. The element **Assessment Timing** places the remaining information in a temporal relationship to the conservation measure carried out.

As in previous documentation practice, at least the initial and final condition should be recorded as standard. In addition, the **Condition Assessment** section may be repeated as often as required to record significant intermediate conditions. All condition assessments relating to a measure can be clearly distinguished and compared with one another by means of their assessment timing.
:::

:::tip[Example]

- **Assessment timing:** [Pre-treatment condition](https://www.w3id.org/archlink/terms/conservationthesaurus/A4G52F)
- **Assessment timing:** [Post-treatment condition](https://www.w3id.org/archlink/terms/conservationthesaurus/C2488A)
:::


---

## Equivalents in other schemas

| Schema  | Element name | Level of obligation |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | No equivalent | Not applicable |
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/)| No equivalent | Not applicable |