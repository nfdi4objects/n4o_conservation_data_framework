---
title: Basic Knowledge of Metadata
sidebar_position: 3
---

# Basic Knowledge of Metadata

This page provides a concise introduction to key concepts in digital metadata work. The explanations are deliberately practical in nature and tailored to conservation work.

---

## Metadata – what it means for conservation practice

**Metadata** is information about data. It defines and categorises data, thereby providing additional information about the ‘type’ of information in question. For example, it explains the context in which the information described relates to a file or, in our case, to a real-world object or actions.

> Metadata helps to systematically record, track and retrieve information.

### Metadata element and data value

A **metadata element** refers to the category or field in which a piece of information is recorded.
The **data value** is the specific detail entered into that field.

**example:**
- metadataelement: *Date of recording (condition assessment)*  
- data value: *12.03.2024*

- metadataelement: *Person responsible (investigation)*  
- data value: *Dr. Maria Beispiel*

This distinction is central to the structure of the schema.
The schema defines the elements – the conservation practice provides the data values.

A structured recording of this information improves the comparability, retrievability and analysability of the data.

---
## What is a metadata schema?
A metadata schema specifies what information is to be recorded and how it is structured. It provides a framework for creating
consistent, comparable and traceable data.

**Practical example:**
- For example, the ‘Condition Assessment’ section of the Conservation metadata schema specifies that, as a minimum, the date of assessment, the person responsible and a description of the condition – including details of the physical condition of the object and any damage observed – must be recorded. It thus provides conservators with a guideline for their practical work on the object, which they can use as a reference when examining the object to determine its condition. At the same time, the schema specifies that, for example, the date should be recorded in accordance with *ISO 8601* in the format *YYYY-MM-DD*. In this way, the schema establishes a common basis for consistent documentation across disciplines and institutions.

---

## Exchange formats

If a metadata schema also defines the exact markup language (e.g. XML) and structure of the data record, it serves not only as a guide for consistent data capture but also as an exchange format. In this capacity, the schema describes how structured data is technically encoded and transmitted between systems.

Whilst a metadata schema, in its simplest form, specifies *what* information is recorded and how it is logically structured, as an exchange format it defines the specific technical representation, too.

In the cultural heritage sector, XML-based formats are common, in particular [**LIDO (Lightweight Information Describing Objects)**](https://lido-schema.org/), which enables the standardised exchange of object data between museums, collections and aggregation platforms.

The Conservation metadata schema forms the conceptual basis for technical implementation. It defines the content structure on the basis of which the data can be converted into exchange formats such as LIDO.

This approach ensures **interoperability with existing data standards**, whilst the documentation remains practical.

---
