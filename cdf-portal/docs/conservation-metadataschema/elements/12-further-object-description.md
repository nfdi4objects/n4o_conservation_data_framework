---
title: Weitere Objektbeschreibung
sidebar_position: 12
---

# Weitere Objektbeschreibung

Sektion: [Objektbeschreibung](/conservation-metadataschema/sections/object-description)

---
 
## Begrifflichkeiten 

 **URI der Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/BGC9F3](https://www.w3id.org/conservation/terms/metadata/BGC9F3)

**Mögliche alternativen Feldbezeichnungen in Datenbanksystemen:**
- Beschreibung
- Kurzbeschreibung

---
## Definition

:::info
Dieses Element erfasst ergänzende Beschreibungen des Objekts in Textform, die in den anderen Metadatenelementen nicht abgedeckt sind. Dazu können z. B. Angaben zu Farbe, Form, besonderen Auffälligkeiten oder technischen Details zählen. Auch kontextuelle Ergänzungen zu anderen Feldern können hier dokumentiert werden, bspw. der Hinweis, dass bei einem Gemälde die angegebenen Maße den Rahmen einschließen oder dass eine Skulptur auf einem fest verbundenen Sockel steht. 
:::
 
---

## Modellierung

### Verpflichtungsgrad

<span class="label label-optional">Optional</span>

Das Element ist optional, da nicht jedes Objekt zusätzliche Eigenschaften aufweist, die über die definierten Metadatenelemente hinausgehen und in der Restaurierungsdokumentation relevant sind. 
 
---

### Feldwert

<span class="label label-text">Text</span>

Das Element wurde auf direkten Vorschlag aus der Community eingeführt, da sich nicht alle Merkmale komplexer Objekte in die Standardstruktur (Typ, Material, Herstellungstechnik) einordnen lassen. Als Freitextfeld bietet es Raum für die Erfassung spezifischer oder ungewöhnlicher Merkmale. Hier trifft die Realität komplexer Objektbeschreibungen auf den Anspruch strukturierter Daten und fordert einen Kom-promiss zwischen Perfektionismus und Praxistauglichkeit.

---

### Wiederholbar

<span class="label label-text">Nein</span>

---

:::tip[Beispiel]
-	**Weitere Objekteigenschaften:** Das Objekt zeigt eine hochrechteckige Form mit geschweiftem oberem Abschluss. 
-	**Weitere Objekteigenschaften:** Auf dem Gemälde befindet sich eine schwer lesbare Signatur auf der Rückseite.
-	**Weitere Objekteigenschaften:** Das Objekt befindet sich in seinem Originalrahmen. Die Maße beziehen sich auf das Gemälde inklusive Rahmen (Rahmenbreite ca. 8 cm). 
:::

---

## Entsprechungen in anderen Schemata

| Schema  | Elementname | Verpflichtungsgrad |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | [Objektbeschreibung](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48104547/Objektbeschreibung+Empfohlen) | Empfohlen | 
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/)| [Kurzbeschreibung](https://collectionstrust.org.uk/resource/brief-description/?tr=de) & [Beschreibung des Erscheinungsbildes](https://collectionstrust.org.uk/resource/physical-description/?tr=de) | Pflicht | 