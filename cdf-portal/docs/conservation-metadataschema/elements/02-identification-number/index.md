---
title: Kennzeichnungsnummer
sidebar_position: 2
---
 

# Kennzeichnungsnummer

Sektion: [Objektkennzeichnung](https://nfdi4objects.github.io/n4o_conservation_data_framework/conservation-metadataschema/sections/01-object-identification)

---
 
## Begrifflichkeiten 

 **URI der Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/F7D3DB)](https://www.w3id.org/conservation/terms/metadata/F7D3DB)

**Mögliche alternativen Feldbezeichnungen in Datenbanksystemen:**
- Intenvarnummer
- Objektnummer
- Signatur
- Katalognummer
- Objekt_ID

---

## Definition

Das Element erfasst eine eindeutige alphanumerische Kennung, die das Objekt im Restaurierungsprozess identifizierbar macht.  

---

:::info[Verpflichtungsgrad]

<span class="label label-required">Pflicht</span>

Die Kennzeichnungsnummer gewährleistet die eindeutige Identifikation, insbesondere bei Objekten mit ähnlichen oder identischen Benennungen und ist somit unverzichtbar für die systematische Objektverwaltung.
:::

---

:::info[Feldwert]

<span class="label label-text">Text/URI</span>

Im Idealfall handelt es sich bei der Kennung um einen maschinenlesbaren, persistenten Identifier (PID). In der Praxis verfügen jedoch noch nicht alle Einrichtungen über solch ein strukturiertes Kennzeichnungssystem, daher schreibt das Schema an dieser Stelle kein verpflichtendes Format der Kennung vor. 
:::

---

:::info[Wiederholbar]

<span class="label label-text">Nein</span>

Das Element ist nicht wiederholbar, da jedem Objekt genau eine eindeutige Kennung zugeordnet sein muss. Weitere bzw. ehemalige Objektnummern (z.B. alte Inventarnummern, temporäre Fundnummern oder sonstige Fremdnummern) können stattdessen im optionalen Element [Weitere Objektnummer](https://nfdi4objects.github.io/n4o_conservation_data_framework/conservation-metadataschema/elements/alternative-object-number/) erfasst werden.
:::

---

:::tip[Beispiel]

<span class="label label-text">- Kennzeichnungsnummer: O.2023_3245</span>
<span class="label label-text">- Kennzeichnungsnummer: FD_2024-127</span>
:::

---

## Entsprechungen in anderen Schemata

| Schema | Elementname | Verpflichtungsgrad |
|:--------|:-------------------|:----|
| [MDS v1.1](www.minimaldatensatz.de) | [Inventarnummer](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48104544/Inventarnummer+Pflicht) | Pflicht |
| [Spektrum 5.1](https://collectionstrust.org.uk/spectrum/) | [Objektnummer](https://collectionstrust.org.uk/resource/object-number/?tr=de) | Pflicht |