---
layout: default
title: Zustandserfassung
parent: Sektionen 
grantparent: KuR-Metadatenschema 
nav_order: 3
---

# Zustandserfassung <span class="label label-required">Pflicht</span>

## Zweck und Funktion der Sektion

Die Zustandserfassung dokumentiert den physischen Zustands des Objekts zu einem bestimmten Zeitpunkt. Sie bildet die Grundlage für alle konservatorischen und restauratorischen Entscheidungen. Die Sektion ist in Anlehnung einer ereignisbasierten Modellierung mit Fokus auf die Dokumentation der praktischen Handlung (Wer? Wann? Wie? Warum?) sowie der dabei festgestellten Beobachtungen entwickelt. Dadurch kann dieselbe Struktur für verschiedene Erfassungszeitpunkte verwendet werden, d.h. für die Erfassung des Objektzustandes vor der Restaurierung (Vorzustand), während (Zwischenzustand) und nach durchgeführten Maßnahmen (Endzustand), sowie auch im Rahmen von routinemäßigen Monitoringaktivitäten. Diese Flexibilität soll die reale restauratorische Praxis, in der Zustandsbewertungen zu unterschiedlichen Zeitpunkten erfolgen und dokumentiert werden müssen, widerspiegeln und erleichtern. Eine strukturierte Zustandserfassung erleichtert es, die Entwicklung des Objektzustands über die Zeit nachzuvollziehen und verschiedene Zustände miteinander vergleichen zu können. 

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
|  <table><tr><td> [Verweis]() </tr></table> | <span class="label label-conditional">Bedingte Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/GDF23F`](https://www.w3id.org/conservation/terms/metadata/GDF23F) |
|  [Zustandsbeschreibung]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/AC1786`](https://www.w3id.org/conservation/terms/metadata/AC1786) |
| <table><tr><td> [bisherige Umgebungsbedingungen]() </tr></table> | <span class="label label-recommended">Empfohlen</span> | [`https://www.w3id.org/conservation/terms/metadata/G79CA9`](https://www.w3id.org/conservation/terms/metadata/G79CA9) |
| <table><tr><td> [Physischer Objektzustand]() </tr></table> | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/BC5B57`](https://www.w3id.org/conservation/terms/metadata/BC5B57) |
| <table><tr><td> <table><tr><td> [aktuelle Maße]() </tr></table></tr></table> | <span class="label label-conditional">Bedingte Pflicht</span> |  [`https://www.w3id.org/conservation/terms/metadata/DBC278`](https://www.w3id.org/conservation/terms/metadata/DBC278) |
| <table><tr><td> <table><tr><td> [aktuelles Gewicht]() </tr></table></tr></table> | <span class="label label-optional">Optional</span> | [`https://www.w3id.org/conservation/terms/metadata/C7C3B7`](https://www.w3id.org/conservation/terms/metadata/C7C3B7) |
| <table><tr><td> <table><tr><td> [Vollständigkeit]() </tr></table></tr></table> | <span class="label label-recommended">Empfohlen</span> |  [`https://www.w3id.org/conservation/terms/metadata/CA8K78`](https://www.w3id.org/conservation/terms/metadata/CA8K78) |
| <table><tr><td> <table><tr><td> [Stabilität]() </tr></table></tr></table> | <span class="label label-recommended">Empfohlen</span> | [`https://www.w3id.org/conservation/terms/metadata/GVB7T9`](https://www.w3id.org/conservation/terms/metadata/GVB7T9) |
| <table><tr><td> [Schadensphänomene]() </tr></table> | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/AA6941`](https://www.w3id.org/conservation/terms/metadata/AA6941)  |
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