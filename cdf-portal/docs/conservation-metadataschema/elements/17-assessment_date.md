---
title: Erfassungsdatum (Zustandserfassung)
sidebar_position: 17
---

# Erfassungsdatum

Sektion: [Zustandserfassung](/conservation-metadataschema/sections/condition-assessment)

---
 
## Begrifflichkeiten 

 **URI der Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/CA1BC5](https://www.w3id.org/conservation/terms/metadata/CA1BC5)

**Mögliche alternativen Feldbezeichnungen in Datenbanksystemen:**
- Datum der Erfassung (Zustandserfassung)
- Datum der Zustandserfassung
- Zustandserfassung_Datum

---
## Definition

:::info
Das Erfassungsdatum dokumentiert den Zeitpunkt, an dem die Zustandserfassung am Objekt durchgeführt wurde. Gemeint ist das Datum der Untersuchung, nicht das Datum, an dem die Angaben in ein Datenbanksystem eingetragen wurden. 
:::
 
---

## Modellierung

### Verpflichtungsgrad

<span class="label label-required">Pflicht</span>

Das Element ist verpflichtend, um die chronologische Abfolge verschiedener Zustände und ihre Veränderung über die Zeit nachvollziehen zu können. Das Datum kann zudem für rechtliche und versicherungstechnische Fragen essenziell sein, um nachweisen zu können, dass ein Schaden zu einem bestimmten Zeitpunkt bereits bestand, z. B. bei Leihvorgängen oder Transporten.
 
---

### Feldwert

<span class="label label-text">Date/Text</span>

Die Angabe sollte nach ISO 8601 in der Form YYYY-MM-DD erfolgen, um eine einheitliche, maschinenlesbare Formatierung zu gewährleisten und chronologische Sortierung und Auswertung zu erleichtern. Ist das genaue Datum nicht bekannt, kann die Genauigkeit reduziert werden (YYYY-MM oder YYYY). Erstreckt sich eine Zustandserfassung über mehrere Tage, kann ein Zeitraum angegeben werden (z. B. 2026-03-15/2026-03-18).

Bei der Nacherfassung früherer Zustandserfassungen ist das genaue Datum häufig nicht bekannt. Es sollte dann so genau wie möglich rekonstruiert werden, z. B. anhand von Fotometadaten, Korrespondenz oder Leihunterlagen. Ist das Datum nicht rekonstruierbar, sollte dies explizit vermerkt werden (z. B. „unbekannt“), damit erkennbar ist, dass die Angabe nicht lediglich vergessen wurde. 

---

### Wiederholbar

<span class="label label-text">Nein</span>

Das Element ist nicht wiederholbar, da sich jede Zustandserfassung auf einen bestimmten Zeitpunkt bzw. Zeitraum bezieht. Wird der Zustand eines Objektes zu einem späteren Zeitpunkt erneut erfasst, handelt es sich um eine neue Zustandserfassung mit eigener [Kennung](/conservation-metadataschema/elements/ID-condition-assessment) und eigenem Erfassungsdatum.

---

:::tip[Beispiel]
- **Erfassungsdatum:** 2026-03-15
- **Erfassungsdatum:** 2026-03-15/2026-03-18 
- **Erfassungsdatum:** 1971 (Nacherfassung, erschlossen aus Fotodokumentation)
:::

---

## Entsprechungen in anderen Schemata

| Schema  | Elementname | Verpflichtungsgrad |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | [Datierung](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48104553/Datierung+Bedingt+Pflicht) | Bedingte Pflicht | 
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/)| [Zustandsüberprüfung: Datum](https://collectionstrust.org.uk/resource/condition-check-assessment-date/?tr=de) | Keine Angabe | 