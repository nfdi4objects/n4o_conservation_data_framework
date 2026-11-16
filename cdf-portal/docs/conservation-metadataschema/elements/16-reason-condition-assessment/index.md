---
title: Anlass der Zustandserfassung
sidebar_position: 16
---

# Anlass der Zustandserfassung

Sektion: [Zustandserfassung](/conservation-metadataschema/sections/condition-assessment)

---
 
## Begrifflichkeiten 

 **URI der Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/G5TA85](https://www.w3id.org/conservation/terms/metadata/G5TA85)

**Mögliche alternative Feldbezeichnungen in Datenbanksystemen:**
- Grund der Zustandserfassung
- Kontext
- Hintergrund

---
## Definition

:::info
Das Element erfasst den Grund, warum der Zustand des Objekts zu diesem Zeitpunkt dokumentiert wurde. Der Anlass gibt den Kontext für die Erfassung und ermöglicht es, die dokumentierten Zustandsinformationen besser einzuordnen und zu interpretieren. 

Die Erfassung des Hintergrundes, warum ein Zustand zu einem bestimmten Zeitpunkt erfasst wurde, ist bei der Erstellung des Schemas als impliziter Bestandteil vieler bisheriger Dokumentationstraditionen identifiziert worden. Das Element macht diesen impliziten Kontext nun eindeutig. 
:::
 
---

## Modellierung

### Verpflichtungsgrad

<span class="label label-required">Pflicht</span>

Das Element ist verpflichtend, da ohne diese Information unklar bleibt, in welchem Kontext die Zustandsbeschreibung steht und welche Relevanz sie hat. Ein Zustand vor einer Restaurierung hat eine andere Bedeutung als ein Monitoringzustand im Depot.
 
---

### Feldwert

<span class="label label-text">Text</span>

Um maximale Flexibilität zu gewährleisten, wird das Element in der aktuellen Version des Schemas als Freitext definiert. Es wird jedoch empfohlen, dass Institutionen intern eine einheitliche Terminologie für die Erfassung entwickeln, die sich an den in ihrem Kontext üblicherweise auftretenden Anlässen orientiert. 

---

### Wiederholbar

<span class="label label-text">Nein</span>

Für jede Zustandserfassung sollte genau ein expliziter Anlass erfasst werden, daher ist das Element nicht wiederholbar.

---

:::tip[Beispiel]

-	**Anlass der Zustandserfassung:** Ersterfassung bei Sammlungsaufnahme
-	**Anlass der Zustandserfassung:** Restaurierungsmaßnahme
-	**Anlass der Zustandserfassung:** Sammlungspflege / Monitoring 
-	**Anlass der Zustandserfassung:** Vorbereitung für Leihgabe
:::

---

## Entsprechungen in anderen Schemata

| Schema  | Elementname | Verpflichtungsgrad |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | Keine Entsprechung | Nicht zutreffend | 
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/)| [Zustandsüberprüfung: Grund](https://collectionstrust.org.uk/resource/condition-check-assessment-reason/?tr=de) | Keine Angabe | 