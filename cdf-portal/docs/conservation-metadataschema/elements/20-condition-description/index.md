---
title: Zustandsbeschreibung
sidebar_position: 20
---

# Zustandsbeschreibung

Sektion: [Zustandserfassung](/conservation-metadataschema/sections/condition-assessment)

---
 
## Begrifflichkeiten 

 **URI der Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/AC1786](https://www.w3id.org/conservation/terms/metadata/AC1786)

**Mögliche alternative Feldbezeichnungen in Datenbanksystemen:**
- Zustandsbericht
- Zusammenfassung Zustand
- Zustandsdokumentation
- Objektzustand
- Zustandsbefund

---

## Definition

:::info
Das Element ist ein übergeordnetes Element, das mehrere inhaltlich zusammengehörige Unterelemente bündelt. Es erfasst selbst keinen Datenwert. Zusammen bilden die Unterelemente die textliche und strukturierte Zustandsdokumentation mit den zentralen Befunden. Dazu zählen festgestellte Zustandsmerkmale und Schadensbilder ebenso wie relevante Umgebungsbedingungen, die den Zustand beeinflusst haben könnten.
::: 
 
---

## Modellierung

### Verpflichtungsgrad

<span class="label label-required">Pflicht</span>

Das Element ist verpflichtend, da jede Zustandserfassung eine Beschreibung des Objektzustands enthalten muss. Welche Unterelemente im Einzelnen verpflichtend sind, ist bei den jeweiligen Unterelementen angegeben.

---
### Feldwert

<span class="label label-text">Kein Datenwert</span>

Das Element dient ausschließlich der Gruppierung seiner Unterelemente, ohne eigene Datenwerte zu enthalten. Es hat eine eigene URI, damit es eindeutig referenziert werden kann.

---

### Wiederholbar

<span class="label label-text">Nein</span>

Jede Sektion [Zustandserfassung](/conservation-metadataschema/sections/condition-assessment) enthält genau eine Zustandsbeschreibung. Sie beschreibt den Zustand des Objekts zu dem Zeitpunkt, auf den sich die Zustandserfassung bezieht. Für jeden weiteren Zeitpunkt wird eine eigene Sektion Zustandserfassung angelegt.

---

### Unterelemente

| Element | Verpflichtungsgrad |
|:--------|:-------------------|
| [Physischer Objektzustand](/conservation-metadataschema/elements/condition-description/physical-condition/) | Pflicht |
| [Schadensphänomene](/conservation-metadataschema/elements/condition-description/damage/) | Pflicht | 
| [Bisherige Umgebungsbedingungen](/conservation-metadataschema/elements/condition-description/environmental-conditions) | Empfohlen | 
| [Konservatorische Vorgeschichte](/conservation-metadataschema/elements/conservation-history)| Empfohlen |

---

### Hinweise

:::note
Die Zustandsbeschreibung bündelt alle Angaben zum Zustand eines Objekts, die bei einer Zustandserfassung festgestellt werden. Sie bezieht sich immer auf den Zeitpunkt dieser Zustandserfassung, der über das Element [Erfassungsdatum](/conservation-metadataschema/elements/assessment_date) eindeutig ausgewiesen wird.

Durch diese Bündelung bleiben die Zustandsinformationen zusammengehörig und zeitlich eindeutig zuordenbar. Die Dokumentation wird so konsistent und nachvollziehbar und lässt sich bei wiederholten Zustandserfassungen direkt vergleichen. 

Die Unterelemente kombinieren eine ausführliche Freitextbeschreibung mit empfohlenen strukturierten Angaben. So bleibt die Dokumentation für Leser:innen verständlich und detailliert genug und ist zugleich für digitale Systeme auswertbar. Je nach Fachdisziplin *kann* und *soll* die Zustandsbeschreibung um spezifisch relevante Elemente erweitert werden.
:::

---

## Entsprechungen in anderen Schemata

| Schema  | Elementname | Verpflichtungsgrad |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | Keine Entsprechung | Nicht zutreffend |
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/) | [Ergebnis der Zustandsbegutachtung](https://collectionstrust.org.uk/resource/condition-checking-and-technical-assessment-suggested-procedure/?tr=de) | Nicht zutreffend |