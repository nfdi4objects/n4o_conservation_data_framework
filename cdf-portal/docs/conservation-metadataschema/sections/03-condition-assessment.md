---
title: Zustandserfassung
sidebar_position: 3
---
# Zustandserfassung <span class="label label-required">Pflicht</span>

## Zweck und Funktion der Sektion

Die Zustandserfassung dokumentiert den physischen Zustand des Objekts zu einem bestimmten Zeitpunkt. Sie bildet die Grundlage für alle konservatorisch-restauratorischen Entscheidungen. Die Sektion ist in Anlehnung an eine ereignisbasierte Modellierung mit Fokus auf die Dokumentation der praktischen Handlung sowie der dabei festgestellten Beobachtungen entwickelt worden. Dadurch kann dieselbe Struktur für verschiedene Erfassungszeitpunkte verwendet werden, d. h. für die Erfassung des Objektzustandes vor der Restaurierung (Vorzustand), während (Zwischenzustand) und nach durchgeführten Maßnahmen (Endzustand) sowie im Rahmen von routinemäßigen Monitoringaktivitäten. Die gesamte Sektion kann zu diesem Zweck wiederholt werden, wobei jeweils der konkrete Erfassungszeitpunkt (im Verhältnis zur durchgeführten Erhaltungsmaßnahme) auszuweisen ist. Diese Flexibilität spiegelt die reale restauratorische Praxis wieder, in der Zustandsbewertungen zu unterschiedlichen Zeitpunkten erfolgen und dokumentiert werden müssen. Gleichzeitig erleichtert sie eine konsistente Erfassung über diese unterschiedlichen Zeitpunkte hinweg.

Die Sektion als Ganzes ist verpflichtend, da sie die elementare Grundlage für konservatorisch-restauratorische Entscheidungen liefert. Eine strukturierte Zustandserfassung ermöglicht Langzeitstudien über Zustandsveränderungen sowie die Evaluierung des Erfolgs durchgeführter Erhaltungsmaßnahmen.

---

## Übersicht der enthaltenen Metadatenelemente

| Element | Verpflichtungsgrad | URI |
|:--------|:-------------------|:----|
| [Kennung der Zustandserfassung]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/R48T23`](https://www.w3id.org/conservation/terms/metadata/R48T23) |
| [Anlass der Zustandserfassung]() | <span class="label label-conditional">Bedingte Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/G5TA85`](https://www.w3id.org/conservation/terms/metadata/G5TA85) |
| [Erfassungszeitpunkt]() | <span class="label label-conditional">Bedingte Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/A8ABBA`](https://www.w3id.org/conservation/terms/metadata/A8ABBA) |
| [Erfassungsdatum]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/CA1BC5`](https://www.w3id.org/conservation/terms/metadata/CA1BC5) |
| [Zuständige Person (Zustandserfassung)]() | <span class="label label-required">Pflicht</span>| [`https://www.w3id.org/conservation/terms/metadata/HRO94F`](https://www.w3id.org/conservation/terms/metadata/HRO94F) |
| [Dokumentationsform]() | <span class="label label-conditional">Bedingte Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/CDD6B5`](https://www.w3id.org/conservation/terms/metadata/CDD6B5)  |
| ↳ [Verweis]() | <span class="label label-conditional">Bedingte Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/GDF23F`](https://www.w3id.org/conservation/terms/metadata/GDF23F) |
| [Zustandsbeschreibung]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/AC1786`](https://www.w3id.org/conservation/terms/metadata/AC1786) |
| ↳ [bisherige Umgebungsbedingungen]() | <span class="label label-recommended">Empfohlen</span> | [`https://www.w3id.org/conservation/terms/metadata/G79CA9`](https://www.w3id.org/conservation/terms/metadata/G79CA9) |
| ↳ [Physischer Objektzustand]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/BC5B57`](https://www.w3id.org/conservation/terms/metadata/BC5B57) |
| &nbsp; &nbsp; ↳ [aktuelle Maße]()  | <span class="label label-conditional">Bedingte Pflicht</span> |  [`https://www.w3id.org/conservation/terms/metadata/DBC278`](https://www.w3id.org/conservation/terms/metadata/DBC278) |
| &nbsp; &nbsp; ↳ [aktuelles Gewicht]() | <span class="label label-optional">Optional</span> | [`https://www.w3id.org/conservation/terms/metadata/C7C3B7`](https://www.w3id.org/conservation/terms/metadata/C7C3B7) |
| &nbsp; &nbsp; ↳ [Vollständigkeit]()  | <span class="label label-recommended">Empfohlen</span> |  [`https://www.w3id.org/conservation/terms/metadata/CA8K78`](https://www.w3id.org/conservation/terms/metadata/CA8K78) |
| &nbsp; &nbsp; ↳ [Stabilität]()  | <span class="label label-recommended">Empfohlen</span> | [`https://www.w3id.org/conservation/terms/metadata/GVB7T9`](https://www.w3id.org/conservation/terms/metadata/GVB7T9) |
| ↳ [Schadensphänomene]()  | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/AA6941`](https://www.w3id.org/conservation/terms/metadata/AA6941)  |
| [konservatorische Vorgeschichte]() | <span class="label label-recommended">Empfohlen</span> | [`https://www.w3id.org/conservation/terms/metadata/A4G52F`](https://www.w3id.org/conservation/terms/metadata/A4G52F) |

*Weiterführende Informationen zu den einzelnen Elementen finden Sie auf den jeweiligen Unterseiten.*

--- 

## Hinweise zur Implementierung

--- 

## Entsprechungen in anderen Schemata

| Schema | Entsprechende Einheit | URI |
|:-------|:----------------------|:----|
|[MDS v1.1](www.minimaldatensatz.de)|  | 
|[Spektrum 5.1](https://collectionstrust.org.uk/spectrum/?tr=de)| | | 
| [LIDO v1.1](https://www.lido-schema.org/schema/v1.1/lido-v1.1.html) |  | | 

*Detaillierte Mappings auf Elementebene finden sich jeweils auf den Seiten der einzelnen Metadatenelemente.* 
