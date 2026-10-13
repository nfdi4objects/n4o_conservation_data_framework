---
title: Methodology and Development Process
sidebar_position: 2
---

import { StatGrid, CardGrid, NormList, PhaseStrip, Timeline, ScopeGrid } from '@site/src/components/tiles';

# Methodology and Development Process
:::note
*The KuR-MDS was developed in an iterative, community-driven process — empirically grounded, normatively anchored and consistently geared towards interoperability.*
:::

---

## Foundations and Frames of Reference

The metadata schema is based on a systematic analysis and synthesis of existing documentation practices, established standards and the findings of a preceding [online survey](https://doi.org/10.5281/zenodo.17475354) among professionals from a range of institutional and disciplinary contexts within conservation-restoration.

### Survey Results as an Empirical Basis

The high level of agreement among participants on core documentation content formed the starting point for the schema's mandatory fields, while the differences highlighted the need for flexible optional extensions.

<StatGrid items={[
  {value: '95.6%', label: 'Description of methods applied'},
  {value: '92.9%', label: 'Recording of damage phenomena'},
  {value: '92.4%', label: 'Materials used'},
]} />

The documentation systems of the institutions represented in the TWG, together with published requirements from various state heritage offices (Landesdenkmalämter), served as a further empirical basis. Comparing these systems confirmed the approach of defining shared core elements as mandatory fields while accommodating specific areas of focus through optional fields.

---

### Normative Frames of Reference

<NormList items={[
  {badge: 'DIN EN 16095', text: 'Terminological basis for key terms such as ‘identification number’, ‘environmental conditions’ and ‘treatment/intervention’'},
  {badge: 'ISO 8601',     text: 'Recommended standard for all date and time information in the format YYYY-MM-DD'},
  {badge: 'MDS v1.1',    text: 'Minimum dataset recommendation of the AG Minimaldatensatz (German Museums Association) as a reference for object information'},
  {badge: 'LIDO and CIDOC CRM', text: 'Key data standards in the cultural heritage sector for long-term compatibility and interoperability'},
  {badge: 'DataCite Metadata Schema', text: 'Overarching NFDI metadata standard for the consistent description of research data'},
]} />
 
The schema was developed within **NFDI4Objects** with the overarching aim of making research data on tangible cultural heritage objects findable, accessible and reusable. Compatibility with [LIDO](https://lido-schema.org) and [CIDOC CRM](https://cidoc-crm.org/) was therefore a central development goal from the outset.

Metadata schemas established as cross-disciplinary standards within the NFDI, such as [DataCite](https://doi.org/10.14454/mzv1-5b55) and [schema.org](https://schema.org/), were likewise taken into account from the outset. 

---

## Development Process

The iterative, collaborative process of developing the Conservation Metadata Schema in the Temporary Working Group (TWG) took place from **December 2024 to January 2026** in continuous exchange with the professional community. Development was deliberately designed in two stages:

<PhaseStrip phases={[
  {
    num: 'Phase 1 — completed',
    name: 'Content-related documentation standard',
    desc: 'Definition of metadata elements, sections and obligation levels — independent of technical implementation',
  },
  {
    num: 'Phase 2 — planned',
    name: 'Interoperable exchange format',
    desc: 'Development of a community-supported exchange format, e.g. a LIDO application profile',
  },
]} />

### Chronology


<Timeline items={[
  {
    date: 'December 2024',
    title: 'Founding of the Temporary Working Group',
    text: 'Compilation of the initial elements in a shared working document based on the survey results and the comparison of standards. Systematic categorisation into thematic sections.',
    milestone: true,
  },
  {
    date: 'May 2025',
    title: 'First presentation in the NFDI4Objects Community Cluster',
    text: 'The first presentation in the CC Conservation Science yielded two key insights: the Google Sheet working document was difficult for the community to access, and the discussion of content led to central conceptual decisions, including the event-based modelling of condition recording and the addition of "risk assessment" and "monitoring".',
    milestone: true,
  },
  {
    date: 'June 2025',
    title: 'Development of communication tools',
    text: 'As a direct response to community feedback, the Conservation Metadata Terminology (SKOS vocabulary with URIs) and the Conservation Documentation Mockup-Page, an interactive input interface, were created.',
    milestone: true,
  },
  {
    date: '2025–2026',
    title: 'Ongoing community engagement and further development',
    text: 'Further presentations of the draft at various events, including the NFDI4Objects Community Meeting 2025, the autumn conference of the Documentation Section (FG Dokumentation) of the German Museums Association, the SODa Forum 2025, the SODa BarCamp 2026 and the HMC Conference 2026, as well as bilateral discussions and direct feedback by email. Ongoing TWG working meetings to develop the schema further and incorporate the feedback.',
    milestone: true,
  },
  {
    date: 'February 2026',
    title: 'Completion of Phase 1 & start of the documentation writing process',
    text: 'Finalisation of version 1.0 of the content-related documentation standard as a community-supported outcome. Start of the writing process to publish the process and results to date as an NFDI4Objects Common (written documentation).',
    milestone: true,
  },
  {
    date: 'September 2026',
    title: 'Publication of the documentation for commenting',
    text: 'Publication of the comprehensive documentation in the NFDI4Objects Community Hub and start of the four-week commenting phase as an "open community review". In parallel, presentation of the schema at further events.',
    milestone: true,
  },
  {
    date: 'October 2026',
    title: 'End of the commenting phase and revision as "Final Draft"',
    text: 'Incorporation of the comments and feedback received into the current draft of the documentation. Submission of the final version to stage 2 of the NFDI4Objects Commons process as a "Consolidated contribution to the recommendation".',
    milestone: false,
  },
  {
    date: 'End of 2026',
    title: 'Adoption of the metadata schema as an official NFDI4Objects standard',
    text: 'Following successful evaluation in the NFDI4Objects Commons process, transition to the status of an official standard. Publication of the final version on Zenodo. Basis for the subsequent development of an interoperable exchange format.',
    milestone: false,
  },
  {
    date: 'January 2027',
    title: 'Start of Phase 2 – further development into an exchange format',
    text: 'TBA',
    milestone: false,
  },
]} />
 
---

## Conceptual Milestones

### Event-Based Modelling

:::note
A key milestone was the decision to adopt the event-based modelling of LIDO and CIDOC CRM as early as the content structuring phase. Information is recorded not as static object properties but as events with a date, actor and place, such as an excavation, an examination or a conservation measure.
 
This approach is particularly well suited to conservation-restoration, since conservators document the condition of objects not only before a treatment, for example, but also during and after it, or as part of monitoring activities. The TWG therefore opted for a single basic schema for condition recording that explicitly states the time and context of each recording, making separate schemas for each recording point unnecessary.
:::

### Communication Tools

<CardGrid items={[
  {
    icon: '🗂️',
    title: 'Conservation Metadata Terminology',
    text: <>SKOS-based vocabulary with a unique URI identifier for each element. Users can name database fields internally as they wish, provided they store a URI reference — interoperability is preserved on export.{' '}
      <a href="https://www.w3id.org/conservation/terms/metadata">Go to the Terminology →</a></>,
  },
  {
    icon: '🖥️',
    title: 'Conservation Documentation Mockup-Page',
    text: <>Simulated input interface with sample data values. Element labels link directly to the Conservation Metadata Terminology. Served as a basis for discussion within the TWG and as a tool for communicating with the community.{' '}
      <a href="https://conservationdata.github.io/docu/#/">Go to the Mockup-Page →</a></>,
  },
]} />
 
---

## Scope

The KuR-MDS focuses on documenting processes in the context of conservation-restoration measures, including those that go beyond direct interventions on objects but are frequently carried out by conservators in practice (e.g. examinations).
 
<ScopeGrid
  inItems={[
    'Conservation-restoration processes and measures',
    'Condition recording at different points in time',
    'Examinations and analyses',
    'Monitoring and risk assessment',
    'Relevant object data as secondary information',
  ]}
  outItems={[
    'Museum administrative data (acquisition history, insurance, exhibition logistics)',
    'Archaeological or art-historical primary data',
    'Data for which dedicated standards already exist (MDS, ADeX, SPECTRUM)',
  ]}
/>
 
Certain object data, e.g. on object identification, provenance or dating, are regarded by conservator-restorers as essential for high-quality documentation, but originate from other disciplines. The KuR-MDS therefore specifies which of these secondary data are relevant and with what priority they should be recorded.