---
title: Kennung der Zustandserfassung
sidebar_position: 15
---
 
:::caution work-in-Progress
Diese Seite befindet sich noch im Aufbau!
:::


# Kennung der Zustandserfassung

Sektion: [Zustandserfassung](/conservation-metadataschema/sections/condition-assessment)

---
 
## Begrifflichkeiten 

 **URI der Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/R48T23](https://www.w3id.org/conservation/terms/metadata/R48T23)

**Mögliche alternativen Feldbezeichnungen in Datenbanksystemen:**
- ID der Zustandserfassung
- Zustands ID
- Identifikator_Zustand
- Vorgangsnummer


---
## Definition

:::info
Das Element erfasst eine eindeutige Kennung für jede einzelne Zustandserfassung. Dies kann eine hausinterne Vorgangsnummer, ein datumsbasierter Code oder idealerweise ein maschinenlesbarer, persistenter Identifikator (PID) sein. 
:::
 
---

## Modellierung

### Verpflichtungsgrad

<span class="label label-required">Pflicht</span>

Das Element ist verpflichtend, da der Zustand eines Objektes im Laufe der Zeit in der Regel mehrfach untersucht wird, etwa vor und nach einer Restaurierung, im Rahmen von Leihvorgängen oder beim regelmäßigen Monitoring. Das Element wurde vor dem Hintergrund zunehmend (teil-)automatisierter Datenverarbeitung in das Schema aufgenommen. Die Kennung stellt sicher, dass jede dieser Zustandserfassungen eindeutig identifiziert und referenziert werden kann. So lassen sich darüber hinaus auch weitere Daten, z. B. Zustandsfotos oder Messergebnisse, der richtigen Zustandserfassung zuordnen. 

---

### Feldwert

<span class="label label-text"> Text / URI</span>

Im Idealfall handelt es sich bei der Kennung um einen maschinenlesbaren, persistenten Identifikator, also eine dauerhaft gültige und weltweit eindeutige Kennung wie z. B. ein DOI. In der Praxis verfügen jedoch noch nicht alle Einrichtungen über ein solches Kennzeichnungssystem. Das Schema schreibt daher in der aktuellen Version kein verpflichtendes Format vor, Einrichtungen können eigene Systematiken für ihre Kennungen festlegen. Wichtig ist, dass alle Angaben, die zu einer Zustandserfassung gehören, eindeutig dieser einen Zustandserfassung zugeordnet werden können. 

---

### Wiederholbar

<span class="label label-text">Nein</span>

Das Element ist nicht wiederholbar, da jede Zustandserfassung über genau eine feste Kennung identifizierbar sein muss.

---

:::tip[Beispiel]
-	**Kennung der Zustandserfassung:** 2024/REST/045/Condition-01 
-	**Kennung der Zustandserfassung:** www.rem.de/obj-23/ConAssessment-2024-087 (fiktiver Link)
:::

---

## Entsprechungen in anderen Schemata

| Schema  | Elementname | Verpflichtungsgrad |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | Keine Entsprechung | Nicht zutreffend | 
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/)| [Zustandsüberprüfung: Identifikationsnummer](https://collectionstrust.org.uk/resource/condition-check-assessment-reference-number/?tr=de) | Keine Angabe | 