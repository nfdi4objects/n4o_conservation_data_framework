---
title: Object relationship
sidebar_position: 10
---

# Object relationship

Section: [Object identification](/conservation-metadataschema/sections/object-identification)

---
 
## Terminology 

 **URI of the Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/GB6DF3](https://www.w3id.org/conservation/terms/metadata/GB6DF3)

**Possible alternative field names in database systems:**
- Affiliation
- Belongs to
- Part of  

## Definition

:::info
This element records relationships between the documented object (or object part) and other objects. This may be its membership of a multi-part object, an ensemble or a larger collection. 
:::

---

## Modelling 

### Level of obligation

<span class="label label-conditional">Conditional</span>

Recording the element *Object Relationship* is mandatory as soon as a relevant relationship exists. If, for example, only one part of a multi-part object is treated (e.g. the door of a cabinet), the link to the object as a whole is essential in order to place the documentation correctly in context. For stand-alone objects without direct relationships to other objects, there is no obligation to record this element. 
 
---

### Field value

<span class="label label-text">Text / URI</span>

The relationship can be explained as a free-text description and should, where applicable, be supplemented with a unique identifier (e.g. the inventory number of the object as a whole or, ideally, a PID) to enable a machine-readable link. 

---

### Repeatable

<span class="label label-text">Yes</span>

The element is repeatable so that several relationships can be recorded.

---

:::tip[Example]
-	**Object Relationship:** Part of the triptych "Passion Altarpiece", Inv. no. 2020.065
-	**Object Relationship:** Belongs to the dinner service "Meissen Blue Onion", Inv. no. 1984.0401
-	**Object Relationship:** Part of a set of grave goods, [URI: https://rlp.museum-digital.de/object/70](https://rlp.museum-digital.de/object/70) 
:::

---

## Equivalents in other schemas

| Schema  | Element name | Level of obligation |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | No equivalent | Not applicable 
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/) |[Associated object](https://collectionstrust.org.uk/resource/associated-object/) & [Related object association](https://collectionstrust.org.uk/resource/related-object-association/) | Conditionally mandatory (where necessary) |