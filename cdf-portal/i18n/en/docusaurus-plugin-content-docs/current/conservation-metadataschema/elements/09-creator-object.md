---
title: Creator (object)
sidebar_position: 9
---

:::caution work-in-Progress
This page has not been build completely.
:::

# Creator (object)

Section: [Object identification](/conservation-metadataschema/sections/object-identification)

---
 
## Terminology 

 **URI of the Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/G76A78](https://www.w3id.org/conservation/terms/metadata/G76A78)

**Possible alternative field names in database systems:** 
- Creating person
- Author
- Artist
- Maker
- Made by
- Attribution

## Definition

:::info
This element records the person or group of people who created the object: the artist, craftsperson or workshop.
:::

---

## Modelling 

### Level of obligation

<span class="label label-optional">Optional</span>

Recording the element "Creator" is optional, as the relevance of this element depends heavily on the discipline. In art history, naming the creator is common practice and often central to identifying the object. In archaeology, by contrast, this information is frequently unknown. For a Roman utilitarian object or a Neolithic tool, the creator usually cannot be clearly identified.

---

### Field value

<span class="label label-text">Text / URI</span>

Wherever possible, the creator should be recorded with first name and surname and/or artist's name, and linked to a corresponding entry in an authority file (e.g. GND). 

---

### Repeatable

<span class="label label-text">Yes</span>

The field is repeatable so that, particularly in cases of uncertain attribution, several possibilities (including an indication of the uncertainty) can be recorded. 

---

:::tip[Example]


:::

### Notes

:::note
This element is an ideal example of how the Conservation Metadataschema can be adapted to the conventions of individual disciplines. While the schema defines the field as optional, institutions may declare it mandatory internally if this reflects their documentation practice.
:::

:::caution
In LIDO, this would not be a separate element but would be modelled as an actor in the "Production" event. The element is a compromise in the current version of the metadata schema, intended to make it easier for conservators to move from free text to structured documentation. As the metadata schema is developed further, it will be transferred into the event structure.
:::
---

## Equivalents in other schemas

| Schema  | Element name | Level of obligation |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | [Person/Körperschaft](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48103965/Person+K+rperschaft+Bedingt+Pflicht) | Conditional mandatory | 
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/)| [Object production person](https://collectionstrust.org.uk/resource/object-production-person/) & [Person information](https://collectionstrust.org.uk/resource/person-information/) | Not specified |