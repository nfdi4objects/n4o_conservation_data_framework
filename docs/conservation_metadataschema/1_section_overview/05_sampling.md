---
layout: default
title: Probenahme
parent: Sektionen 
grantparent: KuR-Metadatenschema 
nav_order: 5
---

# Probenahme <span class="label label-conditional">Bedingte Pflicht</span>

## Zweck und Funktion der Sektion

Die Sektion Probenahme dokumentiert die Entnahme von Proben aus dem Objekt oder dessen Umfeld. Proben können für geplante (naturwissenschaftliche) Untersuchung (z. B. Materialbestimmung, Altersdatierung) oder auch präventiv, um Material vor irreversiblen Behandlungsmaßnahmen zu sichern, entnommen werden. Die Sektion ist ereignisbasiert modelliert, d.h. sie erfasst jede Probennahme als eigenständiges Event mit zugehörigen Kontextinformationen (Wer? Wann? Wo? Wie?). Mehrere durchgeführte Probennahmen können durch die Wiederholung der gesamten Sektion chronologisch dokumentiert werden.

Die Sektion ist bedingt verpflichtend: Sie ist nur Teil der Dokumentation, wenn im Rahmen der konservatorisch-restauratorischen Bearbeitung tatsächlich Proben entnommen wurden. Die Dokumentation von Probennahmen ist wichtig zur Einordnung von Spuren oder Veränderungen am Objekt, die durch die Probenentnahme entstanden sind, sowie für die Nachvollziehbarkeit von Untersuchungsergebnissen. 

---

## Übersicht der enthaltenen Metadatenelemente

| Element | Verpflichtungsgrad | URI |
|:--------|:-------------------|:----|
| [Probenkennung]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/CB7747`](https://www.w3id.org/conservation/terms/metadata/CB7747)  |
| [Anlass der Probennahme]() | <span class="label label-conditional">Bedingte Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/C33D85`](https://www.w3id.org/conservation/terms/metadata/C33D85)  |
| [Datum der Probennahme]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/D3AF3A`](https://www.w3id.org/conservation/terms/metadata/D3AF3A)  |
| [Zuständige Person (Probennahme)]() | <span class="label label-conditional">Bedingte Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/C8CG15`](https://www.w3id.org/conservation/terms/metadata/C8CG15)  |
| [Durchführende Einrichtung (Probennahme)]() | <span class="label label-conditional">Bedingte Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/F72743`](https://www.w3id.org/conservation/terms/metadata/F72743)  |
| [Probenbeschreibung]() | <span class="label label-recommended">Empfohlen</span> | [`https://www.w3id.org/conservation/terms/metadata/FD2B2B`](https://www.w3id.org/conservation/terms/metadata/FD2B2B)  |
| [Stelle der Probennahme]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/F58F6D`](https://www.w3id.org/conservation/terms/metadata/F58F6D)  |
| [Entnahmemethode]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/D9A6FA`](https://www.w3id.org/conservation/terms/metadata/D9A6FA)  |

*Weiterführende Informationen zu den einzelnen Elementen finden Sie auf den jeweiligen Unterseiten.*

--- 

## Hinweise zur Implementierung

--- 

## Entsprechungen in anderen Schemata

| Schema | Entsprechende Einheit | URI |
|:-------|:----------------------|:----|
|[MDS v1.1](www.minimaldatensatz.de)|  | 
|[Spektrum 5.1](https://collectionstrust.org.uk/spectrum/?tr=de)| | | 
|[LIDO v1.1](https://www.lido-schema.org/schema/v1.1/lido-v1.1.html) |  | | 
|[DataCite Metadata Schema](https://support.datacite.org/docs/datacite-metadata-schema) | IGSN ID Metadata Recommendations | [`https://support.datacite.org/docs/igsn-id-metadata-recommendations`](https://support.datacite.org/docs/igsn-id-metadata-recommendations) | 

*Detaillierte Mappings auf Elementebene finden sich jeweils auf den Seiten der einzelnen Metadatenelemente.* 

