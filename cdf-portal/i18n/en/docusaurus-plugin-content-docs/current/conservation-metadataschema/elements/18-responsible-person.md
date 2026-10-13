---
title: Responsible person
sidebar_position: 18
---

# Responsible person

:::caution Mandatory event element
The *Responsible person* element is one of the elements that must be documented for all event records. For this reason, the field appears in several sections.
:::

Section: [Condition assessment](/en/conservation-metadataschema/sections/condition-assessment)

Section: [Examination](/en/conservation-metadataschema/sections/analysis/)

Section: [Sampling](/en/conservation-metadataschema/sections/sampling)

Section: [Conservation concept](/en/conservation-metadataschema/sections/conservation-plan)

Section: [Risk assessment](/en/conservation-metadataschema/sections/risk-assessment)

---
 
## Terminology

 :::info
 In order to make the different subject contexts explicit in the names of the metadata elements, the schema assigns a unique identifier to each person involved in their respective roles.
 ::: 

 **URIs of the Conservation Metadata Terminology:** 

*Responsible person (condition assessment)*: [https://www.w3id.org/conservation/terms/metadata/HRO94F](https://www.w3id.org/conservation/terms/metadata/HRO94F)

*Examining person*: [https://www.w3id.org/conservation/terms/metadata/G7F25F](https://www.w3id.org/conservation/terms/metadata/G7F25F)

*Sampling person*: [https://www.w3id.org/conservation/terms/metadata/C8CG15](https://www.w3id.org/conservation/terms/metadata/C8CG15)

*Responsible person (conservation intervention)*: [https://www.w3id.org/conservation/terms/metadata/C79561](https://www.w3id.org/conservation/terms/metadata/C79561)

*Responsible person (risk assessment)*: [https://www.w3id.org/conservation/terms/metadata/CCCC7G](https://www.w3id.org/conservation/terms/metadata/CCCC7G)


**Possible alternative field names in database systems:**
- Responsible conservator
- Person responsible for implementation
- Responsibility
- Carried out by 

## Definition
 
:::info
Identification of the person who carried out the relevant action or who is responsible for it. 
:::
 
---

## Modelling

### Level of obligation

<span class="label label-required">Mandatory</span>
 
The *Responsible Person* element is mandatory, as without this information, the traceability and accountability of the relevant action cannot be guaranteed. In most cases, the quality of the results and their documentation depends directly on the expertise and experience of the person carrying out the work. Providing this information makes it possible to get in touch in the event of queries or ambiguities and to validate the assessment. 

---

### Field value

<span class="label label-text">Text / URI</span>  

The data value for this element should be recorded in a structured and machine-readable format. *First names and surnames* can be entered in a free-text field or, ideally, selected from a controlled list of relevant colleagues; in addition, a *machine-readable identifier* (e.g. [![ORCID](https://orcid.org/sites/default/files/images/orcid_16x16.png)](https://orcid.org/), [![ROR](/img/ror-icon-bw-16.png)](https://ror.org/), [ISNI](https://isni.org/)) can also be stored. This enables unambiguous identification and improves interoperability across different databases and systems.

---

### Repeatable

<span class="label label-text">Nein</span>  

For each event, exactly one person must be named as the person primarily responsible; therefore, this element cannot be repeated. Additional participants could be added via an optional field. 

---

:::caution Distinguishing between internal recording and public dissemination
For the purposes of internal documentation, the person responsible should be recorded by their full name to ensure that responsibilities are clearly defined, particularly in larger organisations with many conservators. When publishing data on online portals and infrastructures, a decision must be made on a case-by-case basis as to whether the person can or wishes to be named in the context of academic authorship. If, for reasons of data protection, real names are not to be published, the parent organisation may be listed as *responsible* in this instance. For documentation purposes, it is therefore advisable to record both pieces of information as standard. This distinction ensures that responsibility is clearly documented internally, whilst the privacy of those involved remains protected externally.
:::

:::tip[Example]

- **Responsible person (internally):** Kristina Fischer [![ORCID 0009-0005-3991-1025](https://orcid.org/sites/default/files/images/orcid_16x16.png)](https://orcid.org/0009-0005-3991-1025)

- **Responsible person (externally):** LEIZA, Conservation Lab [![ROR](/img/ror-icon-bw-16.png)](https://ror.org/0483qx226)

:::

---

## Equivalents in other schemas

| Schema  | Element name | Level of obligation |
|:--------|:-------------|:--------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | [Person/Körperschaft](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48103965/Person+K+rperschaft+Bedingt+Pflicht) | Conditional mandatory | 
| [Spektrum 5.1](https://collectionstrust.org.uk/spectrum/)| [Procedure manager](https://collectionstrust.org.uk/resource/procedure-manager/) & [Condition check/assessor](https://collectionstrust.org.uk/resource/condition-check-technical-assessment-information/) & [Conservation authoriser](https://collectionstrust.org.uk/resource/conservation-and-treatment-information/) & [Person information](https://collectionstrust.org.uk/resource/person-information/)  | not specified | 