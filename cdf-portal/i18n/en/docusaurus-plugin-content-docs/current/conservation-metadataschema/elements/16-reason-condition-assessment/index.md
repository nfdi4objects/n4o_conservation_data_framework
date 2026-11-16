---
title: Reason of the condition assessment
sidebar_position: 16
---
 
:::caution work-in-Progress
This page has not been build completely.
:::


# Reason of the condition assessment

Section: [Condition assessment](/conservation-metadataschema/sections/condition-assessment)

---
 
## Terminology 

 **URI of the Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/G5TA85](https://www.w3id.org/conservation/terms/metadata/G5TA85)

**Possible alternative field names in database systems:** 
- Purpose of condition assessment
- Context
- Background

## Definition

:::info
This element records the reason why the condition of the object was documented at that particular point in time. The reason provides the context for the assessment and makes it easier to classify and interpret the documented condition information.

During the development of the schema, recording why a condition was assessed at a particular time was identified as an implicit component of many existing documentation traditions. This element now makes that implicit context explicit.
:::

---

## Modelling 

### Level of obligation

<span class="label label-required">Mandatory</span>

This element is mandatory because, without this information, it remains unclear in what context the condition description was made and what relevance it has. A condition recorded prior to conservation treatment has a different significance from one recorded during routine monitoring in storage.
 
---

### Field value

<span class="label label-text">Text / URI</span>

To ensure maximum flexibility, the element is defined as free text in the current version of the schema. However, institutions are recommended to develop a consistent internal terminology for recording this element, based on the reasons that typically arise in their own context.

---

### Repeatable

<span class="label label-text">No</span>

Exactly one reason should be recorded for each condition assessment; the element is therefore not repeatable.

---

:::tip[Example]

-	**Reason for condition assessment:** Initial documentation on accession
-	**Reason for condition assessment:** Conservation treatment
-	**Reason for condition assessment:** Collections care / monitoring
-	**Reason for condition assessment:** Preparation for loan
:::

---

## Equivalents in other schemas

| Schema  | Element name | Level of obligation |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | No equivalent | Not applicable |
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/)| [Condition check/assessment reason](https://collectionstrust.org.uk/resource/condition-check-assessment-reason/) | Not specified |