---
title: Condition Assessment Identifier
sidebar_position: 15
--- 

# 

Section: [Condition Assessment](/conservation-metadataschema/sections/condition-assessment)

---
 
## Terminology 

 **URI of the Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/R48T23](https://www.w3id.org/conservation/terms/metadata/R48T23)

**Possible alternative field names in database systems:**
- Condition assessment ID
- Condition ID
- Identifier_condition
- Reference number
- ID of the condition assessment
- record_ID (condition assessment)


---
## Definition

:::info
This element records a unique identifier for each individual condition assessment. This may be an internal reference number, a date-based code or, ideally, a machine-readable persistent identifier (PID). 
:::
 
---

## Modelling

### Level of obligation

<span class="label label-required">Mandatory</span>

The element is mandatory because an object is usually examined several times over the course of its history, for example before and after conservation treatment, in connection with loans or during regular monitoring. The element was included in the schema in view of the increasing use of (semi-)automated data processing. The identifier ensures that each of these condition assessments can be uniquely identified and referenced. This allows associated data, such as condition photographs or measurement results, to be linked to the correct condition assessment.

---

### Field value

<span class="label label-text"> Text / URI</span>

Ideally, the identifier is a machine-readable persistent identifier (PID), i.e. a permanently valid and globally unique identifier such as a DOI. In practice, however, not all institutions have such an identification system yet. The schema therefore does not prescribe a mandatory format yet, and institutions may define their own systems for their identifiers. What matters is that all information belonging to a condition assessment can be unambiguously assigned to that specific condition assessment. 

---

### Repeatable

<span class="label label-text">No</span>

The element is not repeatable, as each condition assessment must be identifiable by exactly one fixed identifier.

---

:::tip[Example]
-	**Condition Assessment Identifier:** 2024/REST/045/Condition-01 
-	**Condition Assessment Identifier:** https://www.rem.de/obj-23/ConAssessment-2024-087 (fictitious link)
:::

---

## Equivalents in other schemas

| Schema  | Element name | Obligation |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | No equivalent | Not applicable | 
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/)| [Condition check/assessment reference number](https://collectionstrust.org.uk/resource/condition-check-assessment-reference-number/) | Not specified |