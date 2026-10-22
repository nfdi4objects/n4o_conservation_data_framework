---
title: Objektbeziehung
sidebar_position: 10
---

# Objektbeziehung

Sektion: [Objektkennzeichnung](/conservation-metadataschema/sections/object-identification)

---
 
## Begrifflichkeiten 

 **URI der Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/GB6DF3](https://www.w3id.org/conservation/terms/metadata/GB6DF3)

**Mögliche alternativen Feldbezeichnungen in Datenbanksystemen:**
- Zugehörigkeit
- gehört zu
- Teil von 

---
## Definition

:::info
Das Element erfasst Beziehungen des dokumentierten Objekt(-teils) zu anderen Objekten. Dies kann die Zugehörigkeit zu einem mehrteiligen Objekt, zu einem Ensemble oder zu einer übergeordneten Samm-lung sein. 
:::
 
---

## Modellierung

### Verpflichtungsgrad

<span class="label label-conditional">Bedingte Pflicht</span>

Die Erfassung des Elements *Objektbeziehung* ist verpflichtend, sobald eine relevante Beziehung besteht. Wird bspw. nur ein Teil eines mehrteiligen Objekts restauriert (z. B. die Tür eines Schranks), ist die Verknüpfung zum Gesamtobjekt essenziell, um die Dokumentation korrekt einordnen zu können. Bei alleinstehenden Objekten ohne direkte Beziehungen zu anderen Objekten entfällt die Erfassungspflicht. 
 
---

### Feldwert

<span class="label label-text">Text / URI</span>

Die Beziehung kann als Freitextbeschreibung erläutert werden und sollte gegebenenfalls über einen eindeutigen Identifikator (z. B. Inventarnummer des Gesamtobjekts oder idealerweise einen PID) ergänzt werden, um eine maschinenlesbare Verknüpfung zu ermöglichen. 

---

### Wiederholbar

<span class="label label-text">Ja</span>

Das Element ist wiederholbar, um mehrere Beziehungen erfassen zu können.

---

:::tip[Beispiel]
-	**Objektbeziehung:** Teil des Triptychons „Passionsaltar“, Inv.-Nr. 2020.065
-	**Objektbeziehung:** Zugehörig zu Tafelservice „Meißner Zwiebelmuster“, Inv.-Nr. 1984.0401
-	**Objektbeziehung:** Teil einer Grabausstattung, [URI: https://rlp.museum-digital.de/object/70](https://rlp.museum-digital.de/object/70) 
:::

---

## Entsprechungen in anderen Schemata

| Schema  | Elementname | Verpflichtungsgrad |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | keine Entsprechung | nicht zutreffend | 
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/)| [Assoziiertes Objekt](https://collectionstrust.org.uk/resource/associated-object/?tr=de) & [Verwandtes Objekt:Bezug](https://collectionstrust.org.uk/resource/related-object-association/?tr=de) | Bedingte Pflicht (sofern notwenig) | 