---
title: Conceptual Foundations
sidebar_position: 3
---

import Link from '@docusaurus/Link';
import { CardGrid, NormList, ScopeGrid } from '@site/src/components/tiles';
 
# Conceptual Foundations
:::note
*What do the FAIR principles, metadata or controlled vocabularies mean and what do they have to do with everyday documentation practice in conservation? This section provides the essential background knowledge needed to understand the Conservation Metada schema and its key modelling decisions.*
:::
 
---
 
## What This Section Covers
 
The Conservation metadata schema draws on concepts from [digital data management](/conservation-metadataschema/background/conceptual-foundations/glossar#forschungsdatenmanagement) and principles of [Linked Open Data](/conservation-metadataschema/background/conceptual-foundations/glossar#linked-open-data) that have so far seen little widespread application in conservation. This section therefore explains the most important terms and core ideas on which the schema is built, and is aimed particularly at those who are not yet very familiar with these topics.
 
:::tip Already familiar with RDM and Linked Data?
If you already know these concepts, feel free to skip this section and go straight to [Methodology and Development Process](/conservation-metadataschema/background/development-process) to learn more about how the schema came about.
:::
 
---
 
## Topics at a Glance
 
<CardGrid items={[
  {
    icon: '🧭',
    title: 'FAIR Principles',
    text: <>The four guiding principles of good research data management: data should be findable, accessible, interoperable and reusable and what this means in concrete terms for conservation documentation.{' '}
      <Link to="/conservation-metadataschema/background/conceptual-foundations/fair_principles">Go to the FAIR principles →</Link></>,
  },
  {
    icon: '🏷️',
    title: 'Metadata and Metadata Schemas',
    text: <>What is metadata, what is a metadata schema for, and how do content standards differ from technical exchange formats?{' '}
      <Link to="/conservation-metadataschema/background/conceptual-foundations/metadata-basics">Go to the metadata basics →</Link></>,
  },
  {
    icon: '📚',
    title: 'Controlled Vocabularies',
    text: <>Why consistent terminology makes data comparable, searchable and machine-readable and how technical solutions can help preserve linguistic diversity.{' '}
      <Link to="/conservation-metadataschema/background/conceptual-foundations/vocabularies">Go to the introduction of controlled vocabularies →</Link></>,
  },
  {
    icon: '🔗',
    title: 'Unique Identifiers',
    text: <>How persistent identifiers such as URIs, DOIs or ORCIDs make objects, people and concepts permanently and unambiguously referenceable.{' '}
      <Link to="/conservation-metadataschema/background/conceptual-foundations/uris">Go to the explanation of identifiers →</Link></>,
  },
  {
    icon: '📖',
    title: 'Glossary',
    text: <>Brief explanations of the most important terms from research data management, Linked Open Data and semantic modelling for quick reference.{' '}
      <Link to="/conservation-metadataschema/background/conceptual-foundations/glossar">Go to the glossary →</Link></>,
  },
]} />
 
---
 
## Familiar Principles, New Format
 
In principle, many of the concepts presented here have long been familiar in conservation practice; in the digital realm they are simply approached from a different perspective and implemented in a machine-readable form.
 
<NormList items={[
  {badge: 'FAIR Principles', text: 'Documentation that can still be found, understood and reused decades later – an aspiration that good conservation documentation has always pursued.'},
  {badge: 'Metadata Schema', text: 'Corresponds to the fields of a documentation form or condition report: it defines which information is recorded about an object or a treatment.'},
  {badge: 'Controlled Vocabularies', text: 'Already widely implemented in the form of dictionaries, specialist glossaries and standardised word lists: consistent terms instead of individual phrasing make information comparable and searchable.'},
  {badge: 'Identifiers', text: 'Work like an inventory number; only globally unique and permanently resolvable, even across institutional boundaries.'},
]} />
 
---
 
## Aims and Limitations
 
This section by no means aims to provide an exhaustive account of the extensive fields of research data management and semantic modelling. Instead, it is intended to convey just as much fundamental understanding as is needed to follow the structure of the Conservation Metadata Schema.
 
<ScopeGrid
  inItems={[
    'Key concepts of research data management',
    'Core ideas of Linked Open Data and semantic modelling',
    'Links to documentation practice in conservation-restoration',
    'A basis for understanding the structure of the Conservation Metadata Schema',
  ]}
  outItems={[
    'An exhaustive account of research data management',
    'Technical implementation in databases or exchange formats',
    'An in-depth introduction to ontologies, RDF or query languages',
  ]}
/>
 
---
 
## Further Resources
 
For a more in-depth engagement with these topics, please refer to comprehensive resources such as:
 
- [Praxishandbuch Forschungsdatenmanagement](https://doi.org/10.1515/9783110657807) (in German)
- [Linked Data: Evolving the Web into a Global Data Space](http://linkeddatabook.com/editions/1.0/)
- topic-specific offerings from the various NFDI consortia, such as the [Handreichung für ein FAIRes Management kulturwissenschaftlicher Forschungsdaten](https://nfdi4culture.de/id/E3625) (guidelines for the FAIR management of cultural research data, in German) by [NFDI4Culture](https://nfdi4culture.de/index.html) or the [NFDI4Objects Qualification Service](https://www.nfdi4objects.net/services/nfdi4objects-qualification/)
 