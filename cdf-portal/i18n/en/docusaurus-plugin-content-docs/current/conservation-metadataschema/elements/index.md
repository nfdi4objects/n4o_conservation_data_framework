---
title: Metadata elementes
sidebar_position: 3
---

import {StatGrid, CardGrid, LevelGrid} from '@site/src/components/tiles';

# Metadata Elements

The KuR metadata schema defines a set of elements that can be used to record, in a structured manner, all relevant information from the conservation and restoration process. As with the [sections](/en/conservation-metadataschema/sections/), each element has been assigned a level of obligation, which indicates whether its recording is mandatory, conditionally mandatory, recommended or optional.

<LevelGrid items={[
  {level: 'required', 
   text: 'This comprises the information without which it would not be possible to produce documentation that is complete and comprehensible to third parties. These elements constitute the actual minimum data set in the strict sense.'},
  {level: 'conditional',
   text: 'Refers to fields that must be completed only under certain circumstances, e.g. only if a specific activity has been carried out.'},
  {level: 'recommended',
   text: 'Refers to information that is deemed desirable from a professional perspective. Recording this information significantly improves the quality and reusability of the documentation, whilst its absence does not impair the fundamental understanding of the conservation documentation.'},
  {level: 'optional',
   text: 'These elements serve to extend the framework for specific academic disciplines or particular work contexts. They provide examples of how the framework can be adapted to specific contexts and are drawn primarily from the responses to the community survey that was conducted.'},
]} />

Mandatory elements ensure that the minimum information is provided, whilst optional elements offer initial examples of subject-specific extensions. The schema is not intended to be a closed, rigid system, but rather an expandable framework. Institutions and academic departments *can* and *should* supplement the schema with additional elements relevant to their specific needs, provided that the minimum information defined by the mandatory elements is retained.

:::caution Special Case of Conditional Elements
The second use case for *Conditional* concerns information that is generally expected to be included in high-quality documentation (and which therefore goes beyond a mere recommendation), but which, in practice, is often not (or no longer) available at the time of recording (e.g. when digitising analogue reports retrospectively). This category thus strikes a balance between the substantive requirement for comprehensive digital documentation and the current realities of existing documentation practices.
:::

The following pages explain the individual elements, including their definitions, the underlying modelling logic, guidance on practical data entry, and equivalents in other schemas.

In addition to the descriptive content, each element is assigned a URI that links to an entry in the **Conservation Metadata Terminology**. This is a controlled vocabulary that standardises the names of the elements themselves — and thus, in the long term, the field names in database systems — and makes them uniquely referenceable. The URI therefore does not serve to explain the element, but rather to identify it as a concept in a machine-readable form. What exactly the Conservation Metadata Terminology entails is explained in the section [Methodology and Development Process](/conservation-metadataschema/background/development-process).

## Modelling note: Deliberate deviations from the event structure

As outlined in the section [Conceptual Milestones](/conservation-metadataschema/background/development-process#conceptual-milestones), the modelling of elements in some areas already follows the event-based logic of LIDO and CIDOC CRM. However, in the current 1.0 version, this modelling has not yet been consistently implemented across the board. 

We are aware of this discrepancy and have accepted it. To date, conservation reports have predominantly been produced as free-text documents, often in common word processing programmes such as Microsoft Word. A direct transition from there to a fully event-based XML model would be a major step for many conservators and could jeopardise the scheme’s acceptance. Elements such as [Creator (object)](/conservation-metadataschema/elements/creator-object), [Responsible Person](/conservation-metadataschema/elements/responsible-person) or [Manufacturing Technology](/conservation-metadataschema/elements/manufacturing-technology) therefore draw on established documentation practices. They provide this information in a structured, machine-readable form without requiring the complete event model to be in place.

We regard these elements as a compromise in the current version and as an interim step. As we move towards LIDO, they can then be transferred into the event structure. Because the content is already being recorded in a structured manner, it is well prepared for this transition.