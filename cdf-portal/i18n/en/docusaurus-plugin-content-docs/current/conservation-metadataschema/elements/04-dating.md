---
title: Dating
sidebar_position: 4
---

# Dating

Section: [Objekt identification](https://nfdi4objects.github.io/n4o_conservation_data_framework/en/conservation-metadataschema/sections/01-object-identification)

---
 
## Terminology 

 **URI of the Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/F9GB13](https://www.w3id.org/conservation/terms/metadata/F9GB13)

**Possible alternative field names in database systems:**
- Dating of the object
- Period of manufacture
- Date of manufacture
- Chronological classification
- Date of creation

---
## Definition

Dating refers to the chronological classification of when an object was created. Depending on the object and the discipline, this may be a specific date, a year, an approximate time span or a period/era.
 
---

:::info[Level of obligation]

<span class="label label-recommended">Recommended</span>

It is recommended that the chronological context be recorded, as this can be helpful in interpreting the condition and material behaviour, and thus also in planning conservation measures. Furthermore, this information provides a useful basis for comparison when analysing the data (e.g. a comparison of stabilising treatments applied to low-fired ceramics from the Late Bronze Age).
:::
 
---

:::info[Field value]

<span class="label label-text">Date (according to ISO 8601), Text/URI</span>

The level of detail in the dating is based on the conventions established within the relevant academic discipline or on the level of detail available for the specific object. When specifying an epoch or period, a controlled vocabulary should be used where possible, and a machine-readable identifier (URI) should be recorded alongside the natural-language designation. This enables consistent naming and facilitates subsequent analysis and comparisons across institutional boundaries.
:::

---

:::info[Repeatable]

<span class="label label-text">Yes</span>

This element can be repeated in order to record both the year and the era/period where necessary, or to specify both possible dates in cases where the classification is uncertain (with a corresponding note stating that the classification is uncertain).
:::

---

:::tip[Example]

- **Dating:** 1697

- **Chronological context:** Urnfield period; URI: [http://chronontology.dainst.org/period/xsq5dzQ1iPLL](http://chronontology.dainst.org/period/xsq5dzQ1iPLL)

- **Date of manufacture:** 1854-02-14
:::

---

## Equivalents in other schemas

| Schema  | Element name | Level of obligation |
|:--------|:------------|:-------------------|
| [MDS v1.1](www.minimaldatensatz.de) | [Datierung](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48104553/Datierung+Bedingt+Pflicht) | Conditional obligation | 
| [Spektrum 5.1](https://collectionstrust.org.uk/spectrum/) | [Object production date](https://collectionstrust.org.uk/resource/object-production-date/) and [Date information](https://collectionstrust.org.uk/resource/date-information/)| Recommended |