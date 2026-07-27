---
layout: default
title: Kennzeichnungsnummer
parent: Metadatenelemente
nav_order: 2
--- 

# Kennzeichnungsnummer

Sektion: [Objektkennzeichnung](https://nfdi4objects.github.io/n4o_conservation_data_framework/conservation_metadataschema/1_section_overview/01_object_identification.html)

---
 
## Begrifflichkeiten 

 **URI der Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/F7D3DB)](https://www.w3id.org/conservation/terms/metadata/F7D3DB)

**Mögliche Feldbezeichnungen in Datenbank:**
- Intenvarnummer
- Objektnummer
- Signatur
- Katalognummer
- Objekt_ID

## Definition

Das Element erfasst eine eindeutige alphanumerische Kennung, die das Objekt im Restaurierungsprozess identifizierbar macht.  

---

{: .highlight }
> ### Verpflichtungsgrad
> 
> Pflicht
> {: .label .label-required }
> 
> Die Kennzeichnungsnummer gewährleistet die eindeutige Identifikation, insbesondere bei Objekten mit ähnlichen oder identischen Benennungen und ist somit unverzichtbar für die systematische Objektverwaltung.

---

{: .highlight }
> ### Feldwert
> 
> Text/URI
> {: .label .label-text }
>
> Im Idealfall handelt es sich bei der Kennung um einen maschinenlesbaren, persistenten Identifier (PID). In der Praxis verfügen jedoch noch nicht alle Einrichtungen über solch ein strukturiertes Kennzeichnungssystem, daher schreibt das Schema an dieser Stelle kein verpflichtendes Format der Kennung vor. 

---

{: .highlight }
> ### Wiederholbar
>
> Nein
> {: .label .label-text }

---

{: .example }
> ## Beispiel
>
> - Kennzeichnungsnummer:  

> O.2023_3245 
> {: .label .label-text }
>
> - Kennzeichnungsnummer:  

> FD_2024-127 
> {: .label .label-text }

---

## Entsprechungen in anderen Schemata

| Schema | Elementname | Verpflichtungsgrad |
|:--------|:-------------------|:----|
| [Minimaldatensatzempfehlung für Museen und Sammlungen](www.minimaldatensatz.de) | [Inventarnummer](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48104544/Inventarnummer+Pflicht) | Pflicht |
| [Spektrum 5.1](https://collectionstrust.org.uk/spectrum/) | [Objektnummer](https://collectionstrust.org.uk/resource/object-number/?tr=de) |