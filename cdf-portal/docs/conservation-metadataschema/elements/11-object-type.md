---
title: Objekttyp
sidebar_position: 11
---

# Objekttyp

Sektion: [Objektbeschreibung](/conservation-metadataschema/sections/object-description)

---
 
## Begrifflichkeiten 

 **URI der Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/F1BA31](https://www.w3id.org/conservation/terms/metadata/F1BA31)

**Mögliche alternativen Feldbezeichnungen in Datenbanksystemen:**
- Objektart
- Objektbezeichnung
- Sachbegriff
- Objektkategorie
- Objektgattung

---
## Definition

:::info
Der Objekttyp ordnet das Objekt einer formalen Kategorie zu und beschreibt, um welche Art von Gegenstand es sich handelt. Die Typisierung dient der schnellen Einordnung des Objekts und ist ein zentrales Element für Recherche, Filterung und statistische Auswertungen. Das Element und sein Verpflichtungsgrad orientieren sich an etablierten Standards der kulturhistorischen Objektdokumentation und gewährleistet damit die Anschlussfähigkeit an bestehende Systeme. 
:::
 
---

## Modellierung

### Verpflichtungsgrad

<span class="label label-required">Pflicht</span>

Das Element ist verpflichtend, da es sich in der Praxis als Grundlage für Recherche und gezielte Auswertung etabliert hat
 
---

### Feldwert

<span class="label label-text">Text / URI</span>

Für die Erfassung sollte ein kontrolliertes Vokabular der für den jeweiligen Anwendungskontext auftretenden Objektarten verwendet werden, um Konsistenz und Vergleichbarkeit zu gewährleisten.

---

### Wiederholbar

<span class="label label-text">Nein</span>

Jedes Objekt muss genau einem Typ zugeordnet sein. 

---

:::tip[Beispiel]
-	**Objekttyp:** Gemälde [GND-URI: http://d-nb.info/gnd/4122164-3](http://d-nb.info/gnd/4122164-3) 
-	**Objekttyp:** [Münze](http://nomisma.org/id/coin) 
-	**Objekttyp:** [Stuhl](http://obg.vocnet.org/00001110) 
:::

---

## Entsprechungen in anderen Schemata

| Schema  | Elementname | Verpflichtungsgrad |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | [Objekttyp oder -bezeichnung](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48104538/Objekttyp+oder+-bezeichnung+Pflicht) | Pflicht | 
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/)| [Objektbezeichnung](https://collectionstrust.org.uk/resource/object-name/?tr=de) | Empfohlen | 