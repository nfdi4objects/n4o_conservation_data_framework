---
layout: default
title: Erhaltungskonzept
parent: Sektionen 
grantparent: KuR-Metadatenschema 
nav_order: 6
---


# Erhaltungskonzept <span class="label label-required">Pflicht</span>

## Zweck und Funktion der Sektion

Die Sektion Erhaltungskonzept bildet das Kernstück der Restaurierungsdokumentation. Sie erfasst die konservatorisch-restauratorischen Überlegungen, Ziele und durchgeführten Maßnahmen zur Erhaltung oder Rekonstruktion eines Objektes. Der Begriff “Erhaltungskonzept” fasst dabei sowohl rein **konservatorische Eingriffe** (Sicherung, Stabilisierung, etc.) als auch **restauratorische Maßnahmen** (Wiederherstellung/ Rekonstruktion) unter einem neutralen Oberbegriff zusammen.

Die Sektion spiegelt dabei zwei Phasen der realen Arbeit wieder: die **Planungsphase**, mit Anlass und Ziel (die auch dokumentiert werden können, wenn noch keine konkrete Maßnahme durchgeführt worden ist) sowie die Durchführungsphase, die als ereignisbasierte Modellierung Details zur Ausführung (Wer?, Wo?, Wann?, Welche Methodik, Material und Werkzeuge?) der Maßnahme(n) enthält. Auf diese Weise entsteht eine vollständige Dokumentation des gesamten Erhaltungsprozesses, von der Entscheidungsfindung bis zur praktischen Umsetzung. 

---

## Übersicht der enthaltenen Metadatenelemente

| Element | Verpflichtungsgrad | URI |
|:--------|:-------------------|:----|
| [Anlass der Erhaltungsmaßnahme]() | <span class="label label-recommended">Empfohlen</span> | [`https://www.w3id.org/conservation/terms/metadata/C6A532`](https://www.w3id.org/conservation/terms/metadata/C6A532)  |
| [konservatorische Zielsetzung]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/FGF575`](https://www.w3id.org/conservation/terms/metadata/FGF575)  |
| [Erhaltungsmaßnahme]() | <span class="label label-conditional">Bedingte Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/DA9CGG`](https://www.w3id.org/conservation/terms/metadata/DA9CGG)  |
| ↳ [Zuständige Restaurierungseinrichtung]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/GF41DG`](https://www.w3id.org/conservation/terms/metadata/GF41DG)  |
| ↳ [Maßnahmenkennung]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/AF1F5C`](https://www.w3id.org/conservation/terms/metadata/AF1F5C)  |
| ↳ [Zuständige Person (Erhaltungsmaßnahme)]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/C79561`](https://www.w3id.org/conservation/terms/metadata/C79561)  |
| ↳ [Beginn der Maßnahme]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/CDD613`](https://www.w3id.org/conservation/terms/metadata/CDD613)  |
| ↳ [Ende der Maßnahme]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/CDF685`](https://www.w3id.org/conservation/terms/metadata/CDF685)  |
| ↳ [Zeitaufwand]() | <span class="label label-optional">Optional</span> | [`https://www.w3id.org/conservation/terms/metadata/G814D2`](https://www.w3id.org/conservation/terms/metadata/G814D2)  |
| ↳ [Eingriff]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/A13CD1`](https://www.w3id.org/conservation/terms/metadata/A13CD1)  |
| &nbsp; &nbsp; ↳ [Verwendetes Material (Eingriff)]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/CGC619`](https://www.w3id.org/conservation/terms/metadata/CGC619)  |
| &nbsp; &nbsp; ↳ [Werkzeug]() | <span class="label label-recommended">Empfohlen</span> | [`https://www.w3id.org/conservation/terms/metadata/F87124`](https://www.w3id.org/conservation/terms/metadata/F87124)  |

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

*Detaillierte Mappings auf Elementebene finden sich jeweils auf den Seiten der einzelnen Metadatenelemente.* 
