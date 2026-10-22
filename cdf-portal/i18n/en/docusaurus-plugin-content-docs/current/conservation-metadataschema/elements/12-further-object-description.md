---
title: Further object description
sidebar_position: 12
---

# Further object description

Section: [Object description](/conservation-metadataschema/sections/object-description)

---
 
## Terminology 

 **URI of the Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/BGC9F3](https://www.w3id.org/conservation/terms/metadata/BGC9F3)

**Possible alternative field names in database systems:** 
- Description
- Brief description

## Definition

:::info
This element records additional textual descriptions of the object that are not covered by the other metadata elements. These may include, for example, details of colour, shape, notable features or technical details. Contextual additions to other fields can also be documented here, for instance a note that the dimensions given for a painting include the frame, or that a sculpture stands on a permanently attached base. 
:::

---

## Modelling 

### Level of obligation

<span class="label label-optional">Optional</span>

The element is optional, as not every object has additional characteristics that go beyond the defined metadata elements and are relevant to the conservation documentation. 
 
---

### Field value

<span class="label label-text">Text</span>

The element was introduced at the direct suggestion of the community, as not all features of complex objects can be fitted into the standard structure (type, material, production technique). As a free-text field, it provides space for recording specific or unusual features. Here, the reality of complex object descriptions meets the demand for structured data, calling for a compromise between perfectionism and practicality.

---

### Repeatable

<span class="label label-text">No</span>

---

:::tip[Example]
-	**Further Object Properties:** The object is upright rectangular in format with a shaped top. 
-	**Further Object Properties:** There is a barely legible signature on the reverse of the painting.
-	**Further Object Properties:** The object is in its original frame. The dimensions refer to the painting including the frame (frame width approx. 8 cm). 
:::

---

## Equivalents in other schemas

| Schema  | Element name | Level of obligation |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | [Object description](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48104547/Objektbeschreibung+Empfohlen) | Recommended | 
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/)| [Brief description](https://collectionstrust.org.uk/resource/brief-description/ & [Physical description](https://collectionstrust.org.uk/resource/physical-description/) | Mandatory |