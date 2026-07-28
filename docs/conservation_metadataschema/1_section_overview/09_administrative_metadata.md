---
layout: default
title: Administrative Metadaten
parent: Sektionen 
grantparent: KuR-Metadatenschema 
nav_order: 9
---

# Administrative Metadaten <span class="label label-required">Pflicht</span>

## Zweck und Funktion der Sektion

Die Sektion Administrative Metadaten dokumentiert Informationen über den Restaurierungsdokumentationsdatensatz selbst, d.h. nicht über das Objekt oder die durchgeführten Aktivitäten, sondern über die Datenerhebung. Sie erfasst, wann der Datensatz erstellt wurde, wer ihn bearbeitet hat, welche Version aktuell ist, und unter welchen Bedingungen der Datensatz zugänglich ist. Diese Metadaten ermöglichen Versionskontrolle, Nachvollziehbarkeit von Änderungen und transparente Zugangsregelungen. 

Die Sektion ist für jeden Datensatz verpflichtend, da administrative Metadaten die Nachvollziehbarkeit, Verantwortlichkeit und langfristige Nutzbarkeit eines Dokumentationsdatensatzes sicherstellen. Um den Anschluss restauratorischer Datensätze an übergreifende Dateninfrastrukturen zu erleichtern, wurde diese Sektion bereits von Beginn an in Anlehnung an etablierte Datenstandards, wie das DataCite Metadatenschema, entwickelt.  

---

## Übersicht der enthaltenen Metadatenelemente

| Element | Verpflichtungsgrad | URI |
|:--------|:-------------------|:----|
| [Datensatzkennung]() |  <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/G50P34`](https://www.w3id.org/conservation/terms/metadata/G50P34)  |
| [Erstellungsdatum des Datensatzes]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/D78721`](https://www.w3id.org/conservation/terms/metadata/D78721)  |
| [Bearbeiter:in]()  | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/F285B2`](https://www.w3id.org/conservation/terms/metadata/F285B2)  |
| [Datenhaltende Einrichtung]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/Q2R50D`](https://www.w3id.org/conservation/terms/metadata/Q2R50D)  |
| [Version]() | <span class="label label-recommended">Empfohlen</span> | [`https://www.w3id.org/conservation/terms/metadata/D1F5D3`](https://www.w3id.org/conservation/terms/metadata/D1F5D3)  |
| &nbsp; &nbsp; ↳ [Änderungsdatum]() | <span class="label label-recommended">Empfohlen</span> | [`https://www.w3id.org/conservation/terms/metadata/B43DK5`](https://www.w3id.org/conservation/terms/metadata/B43DK5)  |
| &nbsp; &nbsp; ↳ [Bearbeiter:in der Änderung]() | <span class="label label-recommended">Empfohlen</span> | [`https://www.w3id.org/conservation/terms/metadata/98ZG32`](https://www.w3id.org/conservation/terms/metadata/98ZG32)  |
| [Zugangsrecht]() | <span class="label label-recommended">Empfohlen</span> | [`https://www.w3id.org/conservation/terms/metadata/G56866`](https://www.w3id.org/conservation/terms/metadata/G56866)  |
| [Sprache]() | <span class="label label-recommended">Empfohlen</span> | [`https://www.w3id.org/conservation/terms/metadata/G50P34`](https://www.w3id.org/conservation/terms/metadata/G50P34)  |



*Weiterführende Informationen zu den einzelnen Elementen finden Sie auf den jeweiligen Unterseiten.*

--- 

## Hinweise zur Implementierung

{: .note }
> ### 1 Erweiterbarkeit 
> Die im vorgestellten KuR-Schema definierten administrativen Metadatenelemente orientieren sich an den Mandatory-Feldern des DataCite Metadata Schema (mit Ausnahme des Ressourcentyps, siehe Hinweis 2) und stellen damit eine Minimalanforderung dar, die für die Restaurierungsdokumentation als grundlegend sinnvoll erachtet wird. Da mit DataCite bereits ein etablierter, breit einsetzbarer Standard existiert, wurde das Schema an dieser Stelle bewusst reduziert gehalten. Bei der Implementierung im eigenen Erfassungssystem bietet es sich daher an, je nach Bedarf und vorliegender Informationstiefe weitere, bei DataCite als Recommended oder Optional geführte Metadatenelemente zu ergänzen, um die administrative Dokumentation über das hier definierte Minimum hinaus zu vertiefen.
>
> ### 2 Ressourcentyp beim Datenexport
> Das Metadatenelement *Ressourcentyp*, wie es beim MDS, LIDO oder auch DataCite MDS 4.7 enthalten ist, wurde im vorliegenden Schema nicht explizit aufgeführt, da es sich bei dem bisher betrachteten Anwendungsfall des KuR-Schemas stets um Restaurierungsberichte handelt und der Datenwert (*Report*) somit konstant ist. Beim Export und Austausch der Daten in andere Systeme sollte dieses Element mit dem entsprechenden Datenwert ergänzt werden, um die Interoperabilität sicherzustellen.

--- 

## Entsprechungen in anderen Schemata

| Schema | Entsprechende Einheit | URI |
|:-------|:----------------------|:----|
|[MDS v1.1](www.minimaldatensatz.de)|  | 
|[Spektrum 5.1](https://collectionstrust.org.uk/spectrum/?tr=de)| | | 
| [LIDO v1.1](https://www.lido-schema.org/schema/v1.1/lido-v1.1.html) |  | | 
| [DataCite Metadata Schema 4.7](https://datacite-metadata-schema.readthedocs.io/en/4.7/) | DataCite Metadata Properties | [`https://datacite-metadata-schema.readthedocs.io/en/4.7/properties/`](https://datacite-metadata-schema.readthedocs.io/en/4.7/properties/) | 

*Detaillierte Mappings auf Elementebene finden sich jeweils auf den Seiten der einzelnen Metadatenelemente.* 

