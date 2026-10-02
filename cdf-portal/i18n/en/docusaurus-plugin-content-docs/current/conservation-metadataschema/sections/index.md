---
title: Sections
sidebar_position: 2
---

import {StatGrid, CardGrid, LevelGrid} from '@site/src/components/tiles';

# The thematic sections of the Conservation Metadata Schema

The Conservation Metadata Schema (Conservation MDS) is divided into **ten thematic sections**, which reflect various processes involved in handling art and cultural heritage in the context of conservation and restoration work. Within the sections, information is sometimes structured hierarchically; this structure not only reflects a visual organisation but also establishes contextual relationships between the information recorded. Parent elements may either serve solely to group subordinate information by content, or they may themselves represent a data value that is described in more detail by further subordinate elements.

Another key design principle of the  Conservation MDS is its **modular structure**. Not every conservation record requires all sections, as not all conservation and restoration work involves the same procedures. 

In line with this principle, the sections are divided into different **levels of obligation**:

<LevelGrid items={[
  {level: 'required', 
   text: 'This comprises the information without which it would not be possible to produce documentation that is complete and comprehensible to third parties. These elements constitute the actual **minimum data set** in the strict sense.'},
  {level: 'conditional',
   text: 'Refers to fields that must be completed only under certain circumstances[^1], e.g. only if a specific activity has been carried out.'},
  {level: 'recommended',
   text: 'Refers to information that is deemed desirable from a professional perspective. Recording this information significantly improves the quality and reusability of the documentation, whilst its absence does not impair the fundamental understanding of the conservation documentation.'},
  {level: 'optional',
   text: 'These elements serve to extend the framework for specific academic disciplines or particular work contexts. They provide examples of how the framework can be adapted to specific contexts and are drawn primarily from the responses to the community survey that was conducted.'},
]} />

 The same principle applies at the level of [metadata elements](/en/conservation-metadataschema/elements/). Each section groups together a set of related elements, which are in turn categorised as mandatory, conditional, recommended and optional. Mandatory elements ensure the minimum information is provided, whilst optional elements provide initial examples of subject-specific extensions. The schema is not intended to be a closed, rigid system, but rather an expandable framework. Institutions and academic departments *can* and *should* supplement the schema with additional elements relevant to their specific needs, provided that the minimum information defined by the mandatory elements is retained.

In this way, the schema can be assembled and expanded like a modular system, depending on the specific application. This flexibility makes it possible both to ensure a common basis for cross-cutting comparability and reusability, and to allow for the necessary subject-specific specification and differentiation. The Conservation MDS thus provides a guiding framework for the structured recording and description of the various work processes and outcomes.

[^1]: The second use case for *Conditional* concerns information that is generally expected to be included in high-quality documentation (and which therefore goes beyond a mere recommendation), but which, in practice, is often not (or no longer) available at the time of recording (e.g. when digitising analogue reports retrospectively). This category thus strikes a balance between the substantive requirement for comprehensive digital documentation and the current realities of existing documentation practices.