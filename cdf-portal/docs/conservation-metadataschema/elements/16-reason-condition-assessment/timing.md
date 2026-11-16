---
title: Erfassungszeitpunkt (Zustandserfassung)
sidebar_position: 1
---

# Erfassungszeitpunkt (Zustandserfassung)

Sektion: [Zustandserfassung](/conservation-metadataschema/sections/condition-assessment)

---
 
## Begrifflichkeiten 

 **URI der Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/A8ABBA](https://www.w3id.org/conservation/terms/metadata/A8ABBA)

**Mögliche alternative Feldbezeichnungen in Datenbanksystemen:**
- Zeitpunkt der Zustandserfassung
- Zeitlicher Bezug
- Zustandsart 
- Bezug zur Maßnahme

---
## Definition

:::info
Das Element erfasst den zeitlichen Bezug einer Zustandserfassung zu einer konservatorisch-restauratorischen Maßnahme. Es gibt kein Datum an, sondern ordnet den dokumentierten Zustand relativ zum Verlauf der Maßnahme ein, d. h. vor ihrem Beginn (Vorzustand), während ihrer Durchführung (Zwischenzustand) oder nach ihrem Abschluss (Endzustand).

So lässt sich die Zustandsinformation eindeutig dem Behandlungsprozess zuordnen. Außerdem wird erkennbar, ob sie den Ausgangszustand des Objekts oder das Ergebnis der Maßnahme beschreibt.
:::
 
---

## Modellierung

### Verpflichtungsgrad

<span class="label label-conditional">Bedingte Pflicht</span>
 
Das Element ist ein Unterelement von [Anlass der Zustandserfassung](/conservation-metadataschema/elements/reason-condition-assessment/) und wird nur dann verpflichtend, wenn der Anlass der Zustandserfassung eine Erhaltungsmaßnahme ist. 

---

### Feldwert

<span class="label label-text">Text / URI</span>

Um die Verortung des Zeitpunktes relativ zur Erhaltungsmaßnahme eindeutig und vergleichbar zu machen, sollte das Feld aus einem kontrollierten Vokabular mit einheitlichen Benennungswerten erfasst werden.

---

### Wiederholbar

<span class="label label-text">Nein</span>

Eine Zustandserfassung beschreibt den Zustand eines Objekts zu genau einem Zeitpunkt. Innerhalb einer Sektion [Zustandserfassung](/conservation-metadataschema/sections/condition-assessment) ist das Element **Erfassungszeitpunkt** daher nicht wiederholbar. Andernfalls bliebe unklar, ob sich die übrigen Angaben auf den Vor-, Zwischen- oder Endzustand beziehen. Für jeden weiteren Zeitpunkt, etwa den Endzustand nach Abschluss der Maßnahme, wird eine eigene Sektion Zustandserfassung angelegt.

---

### Hinweise

:::note
Das Element greift die bisher übliche Praxis der Erfassung des Vor- und Endzustands innerhalb der Restaurierungsdokumentation auf und bildet die Brücke zu einer einheitlichen, ereignisbasierten Modellierung. Statt zwei separate Schemata oder doppelte Elementgruppen vorzusehen, verwendet das Schema für jede Zustandserfassung dieselbe Struktur. Das Element **Erfassungszeitpunkt** setzt dabei die übrigen Angaben in einen zeitlichen Bezug zur durchgeführten Maßnahme.

Wie in der bisherigen Dokumentationspraxis sollten dabei mindestens Vorzustand und Endzustand standardmäßig erfasst werden. Für wichtige Zwischenzustände kann die Sektion **Zustandserfassung** darüber hinaus bei Bedarf beliebig oft wiederholt werden. Alle Zustandserfassungen einer Maßnahme lassen sich über den Erfassungszeitpunkt eindeutig unterscheiden und miteinander vergleichen.
:::

:::tip[Beispiel]

- **Erfassungszeitpunkt:** [Vorzustand](https://www.w3id.org/archlink/terms/conservationthesaurus/A4G52F) 
- **Erfassungszeitpunkt:** [Endzustand](https://www.w3id.org/archlink/terms/conservationthesaurus/C2488A)
:::

---

## Entsprechungen in anderen Schemata

| Schema  | Elementname | Verpflichtungsgrad |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | Keine Entsprechung | Nicht zutreffend | 
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/)| Keine Entsprechung | Nicht zutreffend | 