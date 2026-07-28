---
layout: default
title: Untersuchung
parent: Sektionen 
grantparent: KuR-Metadatenschema 
nav_order: 4
---

# Untersuchungen <span class="label label-conditional">Bedingte Pflicht</span>

## Zweck und Funktion der Sektion

Die Sektion Untersuchung dokumentiert systematische Untersuchungsverfahren, die im Zuge der Konservierung-Restaurierung durchgeführt wurden. Dies können optische Begutachtungen (z. B. unter dem Mikroskop) im Rahmen der Zustandserfassung oder komplexere naturwissenschaftliche Analysen (z. B. Röntgenfluoreszenzanalyse, Raman-Spektroskopie, Pigmentanalysen) sein. Die Sektion ist **ereignisbasiert** modelliert, d.h. sie erfasst jede durchgeführte Untersuchung als eigenständiges Event mit zugehörigen Kontextinformationen (Wer? Wann? Wie? Mit welchem Ergebnis?). Mehrere durchgeführte Untersuchungen können durch die Wiederholung der gesamten Sektion chronologisch dokumentiert werden. 

Die Sektion ist bedingt verpflichtend: Sie ist nur Teil der Dokumentation, wenn im Rahmen der konservatorisch-restauratorischen Bearbeitung tatsächlich Untersuchungen durchgeführt wurden. 

---

## Übersicht der enthaltenen Metadatenelemente

| Element | Verpflichtungsgrad | URI |
|:--------|:-------------------|:----|
| [Untersuchungskennung]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/A2AG55`](https://www.w3id.org/conservation/terms/metadata/A2AG55) |
| [Untersuchungsanlass]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/CF3C22`](https://www.w3id.org/conservation/terms/metadata/CF3C22) | 
| [Zuständige Person (Untersuchung)]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/G7F25F`](https://www.w3id.org/conservation/terms/metadata/G7F25F) | 
| [Durchführende Einrichtung (Untersuchung)]() | <span class="label label-recommended">Empfohlen</span> | [`https://www.w3id.org/conservation/terms/metadata/G76B7G`](https://www.w3id.org/conservation/terms/metadata/G76B7G ) |
| [Untersuchungsart]() | <span class="label label-optional">Optional</span> | [`https://www.w3id.org/conservation/terms/metadata/F8F594`](https://www.w3id.org/conservation/terms/metadata/F8F594) |
| [Lokalisation]() | <span class="label label-conditional">Bedingte Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/A15F83`](https://www.w3id.org/conservation/terms/metadata/A15F83) |
| [Untersuchungsverfahren]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/DAB4B7`](https://www.w3id.org/conservation/terms/metadata/DAB4B7) |
| <table><tr><td> [verwendetes Material (Untersuchung)]() </tr></table>| <span class="label label-recommended">Empfohlen</span> | [`https://www.w3id.org/conservation/terms/metadata/D1CFD5`](https://www.w3id.org/conservation/terms/metadata/D1CFD5) |
| <table><tr><td> [Untersuchungsgerät]() </tr></table> | <span class="label label-recommended">Empfohlen</span> | [`https://www.w3id.org/conservation/terms/metadata/D949G6`](https://www.w3id.org/conservation/terms/metadata/D949G6) |
| [Untersuchungsergebnis]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/BGG5A6`](https://www.w3id.org/conservation/terms/metadata/BGG5A6)  |


*Weiterführende Informationen zu den einzelnen Elementen finden Sie auf den jeweiligen Unterseiten.*

--- 

## Hinweise zur Implementierung

{: .note }
> Die in dieser Sektion dokumentierten Untersuchungsergebnisse können inhaltliche Relevanz für andere Sektionen haben (z. B. genauere Angaben zur Materialität). Solche Erkenntnisse sollten in der jeweiligen Sektion als ergänzender Eintrag (Wiederholung des entpsrechenden Elements) festgehalten und mit dem zugrunde liegenden Untersuchungsergebnis verknüpft werden, um die Evidenzgrundlage nachvollziehbar zu machen (beispielsweise den Unterschied zwischen einer naturwissenschaftlich belegten und einer visuell-subjektiv eingeschätzten Materialbestimmung).
>
> Nicht jede Untersuchung wird von der Restaurator:in, die den Dokumentationsdatensatz anlegt, selbst durchgeführt. Werden komplexere Untersuchungen (z.B. Röntgenfluoreszenzanalyse) in anderen Abteilungen oder externe Institutionen beauftragt, sollten die zentralen Ereignisinformationen, wer, wann, wo die Untersuchung durchgeführt hat und warum sie im Rahmen der konservatorischen Maßnahme erforderlich war, dennoch in der Restaurierungsdokumentation erfasst werden. Über das Element "durchführende Einrichtung" kann in einem solchen Anwendungsfall die externe Durchführung kenntlich gemacht werden. Für die Ergebnisse der Untersuchungen kann dann auf den zugehörigen Untersuchungsdatensatz referenziert werden. Um die zentralen Erkenntnisse der Untersuchung auch auf einen Blick in der Restaurierungsdokumentation einsehen zu können, bietet es sich an zusätzlich eine kurze textliche Zusammenfassung zu formulieren. 

--- 

## Entsprechungen in anderen Schemata
| Schema | Entsprechende Einheit | URI |
|:-------|:----------------------|:----|
|[MDS v1.1](www.minimaldatensatz.de)|  | 
|[Spektrum 5.1](https://collectionstrust.org.uk/spectrum/?tr=de)| | | 
| [LIDO v1.1](https://www.lido-schema.org/schema/v1.1/lido-v1.1.html) |  | | 

*Detaillierte Mappings auf Elementebene finden sich jeweils auf den Seiten der einzelnen Metadatenelemente.* 
