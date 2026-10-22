---
title: Contact Person
sidebar_position: 8
---

:::caution work-in-Progress
This page has not been build completely.
:::

# Contact Person

Section: [Object identification](/conservation-metadataschema/sections/object-identification)

---
 
## Terminology 

 **URI of the Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/F3G8D1](https://www.w3id.org/conservation/terms/metadata/F3G8D1)

**Possible alternative field names in database systems:** 
- Contact
- Owner
- Responsible curator
- Head of collection
- Responsibility
- 

## Definition

:::info
This element records the person who is responsible for the object and is available as a contact for enquiries. This may be the person who commissioned the conservation treatment, the responsible curator, the head of collection or, in the case of privately owned objects, the owner. The contact person serves as the central point of contact for all object-related questions, decisions and consultations during the conservation process. 
:::
 
---

## Modelling

### Obligation

<span class="label label-optional">Optional</span>

Recording the element "Contact Person" is optional, as stating the person responsible for the object may be relevant for any consultation that becomes necessary, but is not essential for the professional traceability of the conservation treatment. 
 
---

### Field value

<span class="label label-text">Text/URI</span>

The data value of this element should be recorded in a structured or machine-readable form. *First names and surnames* may be entered in a free-text field or, ideally, selected from a fixed list of responsible colleagues, and a *machine-readable identifier* (e.g. [![ORCID](https://orcid.org/sites/default/files/images/orcid_16x16.png)](https://orcid.org/), [![ROR](/img/ror-icon-bw-16.png)](https://ror.org/), [ISNI](https://isni.org/)) should also be recorded.

:::note
Particularly when treating objects from external owners, or in larger institutions with different areas of responsibility within the collection, the institution responsible for the object should also be recorded. When the data are released externally, the responsible institution or department can then be named instead of the individual person. This distinction ensures that responsibility is clearly documented internally, while the privacy of those involved is protected externally.
:::


---

### Repeatable

<span class="label label-text">No</span>

Each object should be assigned exactly one contact person in order to clearly define responsibilities and decision-making authority. 

---

:::tip[Example]

- **Contact Person:** Dr Anna Müller; [ORCID: 0152-5478-00]() (fictitious)
- **Contact Person:** LEIZA, Collection Department; [![ROR](/img/ror-icon-bw-16.png)](https://ror.org/0483qx226)

:::

---

## Equivalents in other schemas

| Schema  | Element name | Obligation |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | [Person/Körperschaft](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48103965/Person+K+rperschaft+Bedingt+Pflicht) | Conditionally mandatory | 
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/)| [Conservation authoriser](https://collectionstrust.org.uk/resource/conservation-authoriser/) & [Person information](https://collectionstrust.org.uk/resource/person-information/) | Not specified |