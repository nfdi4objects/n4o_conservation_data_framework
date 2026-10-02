---
title: Objectives and Motivation
sidebar_position: 1
---

import {StatGrid, CardGrid, LevelGrid} from '@site/src/components/tiles';

# Objectives and Motivation

:::tip At a glance
Conservators are increasingly using digital methods to document their work, but in a wide variety of formats and structures. In terms of content, they are largely in agreement as to what should be documented. The metadata schema translates this consensus into a common, machine-readable structure.
:::

## Conservation documentation as important research data

Documentation of conservation and restoration measures forms an important basis for the long-term preservation and scholarly study of art and cultural heritage. It not only ensures the traceability of interventions carried out, but also informs conservation decisions and future research. Conservation data provide valuable information for related, object-specific disciplines such as archaeology, art history and provenance research. Furthermore, they offer a fundamental source of knowledge for the correct interpretation of subsequent scientific analyses of treated objects, support preventive collection management and, last but not least, promote the development of new conservation science methodologies.

Although documentation has been an integral part of conservation work since the introduction of the Venice Charter[^1], there is as yet no uniform and overarching framework specifying which information should be mandatorily included in comprehensive, high-quality documentation. This situation is particularly problematic against the backdrop of advancing digitalisation and the rapidly evolving technical capabilities of automated data processing. Whilst structured, machine-readable data could open up new potential for technical and interdisciplinary scientific interoperability, these opportunities remain largely untapped in the absence of overarching standards.

### Empirical basis provided by a community survey
An online survey conducted in spring 2025, involving 240 participants from the field of conservation and restoration, confirmed the impression that the current documentation landscape is characterised by considerable heterogeneity in practice. However, the results also show that the digitisation of documentation practice is, in principle, already well advanced:

![Umfrageergebnisse zur fachlichen Dokumentation](/img/Umfrage_Grafik_Dokumentation.png)

*Survey results on conservation documentation (Kristina Fischer/ LEIZA, CC-BY 4.0)*

#### Key results of the survey

<StatGrid items={[
  {value: '240',    label: 'Participants'},
  {value: '48,8 %', label: 'document hybrid'},
  {value: '39,2 %', label: 'work entirely digitally'},
  {value: '30,8 %', label: 'Use documentation templates'},
]} />

Of the 240 participants, 48.8% document their work in a hybrid way (both analogue and digital), and 39.17% already work exclusively digitally. Despite this high rate of digitisation, however, the survey revealed considerable heterogeneity in how documentation is actually carried out. The systems, formats and structuring approaches in use vary widely between institutions and even within them. While 30.8% of participants stated that they use pre-designed report templates and 25.8% work with established filing conventions, these are predominantly in-house solutions that are often not applied consistently or are frequently modified. Principles of the [Semantic Web](/en/conservation-metadataschema/background/conceptual-foundations/glossar#semantic-web) and [Linked Open Data](/en/conservation-metadataschema/background/conceptual-foundations/glossar#linked-open-data) for structured, semantically modelled and machine-readable data have so far found little application in conservation documentation practice.[^2]

This heterogeneity makes it considerably harder to compare information and to reuse conservation data in the long term. The widespread but semantically rather closed formats of free-text reports in Word or PDF[^2] are increasingly reaching their limits when documentation needs to be transferred to other systems or analysed computationally. Without shared structural and semantic standards, significant potential for systematic analysis, comparative studies and the integration of conservation data into broader research infrastructures remains untapped.

The survey also yielded another crucial and, at the same time, encouraging finding. Despite the formal heterogeneity, there is broad agreement on which information is considered essential for documenting conservation and restoration measures. This holds true across both disciplines and institutions[^2]. As expected, the various specialist fields (archaeology, architectural conservation, paintings conservation, textile conservation, etc.) each place a slightly different emphasis on the specific contextual information arising from the different types of objects. Apart from that, however, conservators largely agree on which information about the actual conservation process should be documented. This consensus shows that the core information is already being recorded in similar ways across disciplinary boundaries. What is missing is a shared frame of reference that translates this existing agreement into a structured, interoperable form, while also taking into account the rapidly evolving requirements of machine-readable research data.

## The Metadata Schema as a Frame of Reference

:::info 
This situation provided the motivation for developing the metadata schema presented here as a shared documentation standard in conservation-restoration. The metadata schema is intended as guidance for a consistent documentation practice, without restricting the flexibility needed to meet discipline-specific requirements.
:::

**The information recorded is divided into different levels of obligation:**

<LevelGrid items={[
  {level: 'required', highlight: true,
   text: 'Together, these form the minimum dataset of a complete documentation.'},
  {level: 'conditional',
   text: 'Mandatory as soon as the relevant information is available.'},
  {level: 'recommended',
   text: 'Contribute to high-quality, readily reusable documentation.'},
  {level: 'optional',
   text: 'Discipline- and context-specific additions.'},
]} />


### Target Audience

This schema is aimed primarily at professionals in the field of conservation-restoration, regardless of their institutional affiliation or specialisation. It is intended to provide guidance for the systematic documentation of their work to conservators in museums, heritage authorities, universities, universities of applied sciences and non-university (research) institutions, as well as to those working freelance. The metadata schema has been deliberately designed so that it can be applied in different recording systems. It is not meant as a rigid set of rules, but as a framework that leaves room for discipline- and context-specific adaptations while defining a binding core of essential information.

The schema may also be relevant to those involved in developing or adapting documentation systems, for example when implementing new database solutions or revising existing templates. In conservation-restoration education, too, the metadata schema offers a structured basis for teaching good documentation practice in line with high-quality research data management.

<CardGrid items={[
  {icon: '🖌️', title: 'Conservators',
   text: 'In museums, heritage authorities, universities, or self-employed.'},
  {icon: '🗄️', title: 'System Development',
   text: 'For new database solutions or revised templates.'},
  {icon: '🎓', title: 'Teaching',
   text: 'For teaching good documentation practice.'},
]} />

 
---
[^1]: See, for example, ICOMOS Deutschland, ICOMOS Luxemburg, ICOMOS Österreich, & ICOMOS Schweiz. (2012). MONUMENTA I: Internationale Grundsätze und Richtlinien der Denkmalpflege. Stuttgart.
[^2]: The primary survey data are available at:   
Fischer, Kristina (2025). N4O Community Survey Conservation - Data (v1.0). GitHub/Zenodo. [DOI](https://doi.org/10.5281/zenodo.17047278).   
The written analysis of the survey can be found in Fischer, K., & Witt, N. (2025). Zusammenfassung des Status Quo im Forschungsdatenmanagement für den Bereich der Konservierung-Restaurierung (Version v1). Zenodo. [DOI](https://doi.org/10.5281/zenodo.17475354)
