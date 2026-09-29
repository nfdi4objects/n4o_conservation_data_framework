---
title: Location
sidebar_position: 7
---


# Location

Section: [Object identification](https://nfdi4objects.github.io/n4o_conservation_data_framework/en/conservation-metadataschema/sections/01-object-identification)

---
 
## Terminology 

 **URI of the Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/FC3322](https://www.w3id.org/conservation/terms/metadata/FC3322)

**Possible alternative field names in database systems:**
- Current Location
- Normal Location
- Object location
- Holding institution
- Collection
- Museum

## Definition
 
The ‘Location’ element records the usual storage location of the object, outside the conservation facility. This recording relates to location information relevant to the planning, execution and return of the object following conservation and restoration work. Day-to-day object management, including detailed tracking of the object’s movements, falls outside the primary scope of this schema.
 
---

:::info[Level of obligation]

<span class="label label-required">Mandatory</span>

The location is mandatory, as without this information it will be unclear where the object should be returned to following conservation. In the event of a change of location after conservation has been completed, both the previous and future locations should be recorded separately. The previous location may provide insights into the damage sustained, whilst the future location may have influenced the choice of conservation methods and materials.
:::

---

:::info[Field value]

<span class="label label-text">Text / URI</span>

With regard to this element, a distinction must be made between internal and public presentation. For internal use, it is advisable to record the location precisely, particularly where the location is associated with specific climatic conditions. When making the dataset publicly available, however, for security reasons, the exact location within the institution should not be specified. Instead, it is recommended to provide the name of the collection or the holding institution, together with a unique identifier (e.g. [ISIL](https://isil.staatsbibliothek-berlin.de/suche), [ROR](https://ror.org/), [ISNI](https://isni.oclc.org/cbs/DB=1.2/SET=1/TTL=1/) or [GND-ID](https://explore.gnd.network/)). In this way, information regarding the whereabouts of the restored object is retained during data exchange without exposing it to an increased risk of theft.
:::

---

:::info[Repeatable]

<span class="label label-text">Yes</span>

This element is repeatable, specifically to enable the recording of changes in location before and after conservation. However, it must be clearly indicated which is the current location to which the object will be/has been moved following conservation.
:::

---

:::tip[Example]

internal:
- **Previous location:** Storage area No. 3 (no air-condition), shelf 12, compartment C

- **Current location:** Permanent Exhibition A, Room 102, air-conditioned display case No. 5

public: 
- **Current Location:** LEIZA, [ROR-ID: ror.org/0483qx226](https://ror.org/0483qx226), air-conditioned display case 
:::

---

## Equivalents in other schemas

| Schema  | Element name | Level of obligation |
|:--------|:------------|:-------------------|
| [MDS v1.1](www.minimaldatensatz.de) | [Verwahrende Einrichtung](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48104568/Verwahrende+Einrichtung+Pflicht) | Mandatory | 
| [Spektrum 5.1](https://collectionstrust.org.uk/spectrum/) | [Object location information](https://collectionstrust.org.uk/resource/object-location-information/) | not specified |
