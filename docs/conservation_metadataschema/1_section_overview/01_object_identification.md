---
layout: default
title: Objektkennzeichnung
parent: Sektionen 
grantparent: KuR-Metadatenschema 
nav_order: 1
---

# Objektkennzeichnung <span class="label label-required">Pflicht</span>

## Zweck und Funktion der Sektion

Die Objektkennzeichnung dient der eindeutigen Identifikation des dokumentierten Objekts und seiner Einordnung in übergeordnete Kontexte. Sie gewährleistet, dass das Objekt vor, während und nach dem gesamten Behandlungsprozess zweifelsfrei zugeordnet werden kann.

Die in dieser Sektion erfassten Daten werden in der Regel nicht von Restaurator:innen selbst erhoben, sondern als Objektdaten von Kurator:innen bzw. Auftraggeber:innen übernommen. Die zugeordneten Metadatenelemente orientieren sich daher an bestehenden Standards zur allgemeinen Objekterfassung. Die Sektion konzentriert sich dabei auf Informationen, die für Restaurator:innen als Grundlage für Zustandsbewertungen, die Auswahl geeigneter Konservierungsmethoden und die Interpretation von Schadensphänomenen relevant sind.

---

## Übersicht der enthaltenen Metadatenelemente

| Element | Verpflichtungsgrad | URI |
|:--------|:-------------------|:----|
| [Objektbenennung](https://nfdi4objects.github.io/n4o_conservation_data_framework/conservation_metadataschema/2_metadata_elements/01_object_title.html) | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/B5DD1A`](https://www.w3id.org/conservation/terms/metadata/B5DD1A) |
| [Kennzeichnungsnummer](./kennzeichnungsnummer) | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/F7D3DB)`](https://www.w3id.org/conservation/terms/metadata/F7D3DB) |
| [Art der Kennzeichnungsnummer](./art-der-kennzeichnungsnummer) | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/G59SR3`](https://www.w3id.org/conservation/terms/metadata/G59SR3) |
| [Weitere Objektnummer](./weitere-objektnummer) | <span class="label label-optional">Optional</span> | [`https://www.w3id.org/conservation/terms/metadata/K343FVC`](https://www.w3id.org/conservation/terms/metadata/K343FVC) |
| [Art der weiteren Objektnummer](./art-der-weiteren-objektnummer) | <span class="label label-conditional">Bedingte Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/LGPT6AC`](https://www.w3id.org/conservation/terms/metadata/LGPT6AC) |
| [Datierung](./datierung) | <span class="label label-recommended">Empfohlen</span> | [`https://www.w3id.org/conservation/terms/metadata/F9GB13`](https://www.w3id.org/conservation/terms/metadata/F9GB13) |
| [Herkunft](./herkunft) | <span class="label label-recommended">Empfohlen</span> | [`https://www.w3id.org/conservation/terms/metadata/CD3341`](https://www.w3id.org/conservation/terms/metadata/CD3341) |
| [Eingangsdatum](./eingangsdatum) | <span class="label label-conditional">Bedingte Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/F2A45F`](https://www.w3id.org/conservation/terms/metadata/F2A45F) |
| [Standort](./standort) | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/FC3322`](https://www.w3id.org/conservation/terms/metadata/FC3322) |
| [Ansprechpartner:in](./ansprechpartnerin) | <span class="label label-optional">Optional</span> | [`https://www.w3id.org/conservation/terms/metadata/F3G8D1`](https://www.w3id.org/conservation/terms/metadata/F3G8D1) |
| [Schöpfer:in](./schoepferin) | <span class="label label-optional">Optional</span> | [`https://www.w3id.org/conservation/terms/metadata/G76A78`](https://www.w3id.org/conservation/terms/metadata/G76A78) |
| [Objektbeziehung](./objektbeziehung) | <span class="label label-conditional">Bedingte Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/GB6DF3`](https://www.w3id.org/conservation/terms/metadata/GB6DF3) |

  *Weiterführende Informationen zu den einzelnen Elementen finden Sie auf den jeweiligen Unterseiten.*

---

## Hinweise zur Implementierung

{: .note }
> Die Angaben dieser Sektion sollten idealerweise direkt aus dem entsprechenden Objektdatensatz in die Restaurierungsdokumentation übernommen bzw. mit diesem verknüpft sein, um eine kohärente Datenverwaltung zu gewährleisten. Eine manuelle Erfassung durch Restaurator:innen ist nur dann erforderlich, wenn kein referenzierbarer Objektdatensatz zur Verfügung steht (beispielsweise wenn kein zentrales Sammlungsmanagementsystem verwendet wird oder wenn das Objekt erst im Rahmen der Konservierung-Restaurierung inventarisiert wird).  

--- 

## Entsprechungen in anderen Schemata

| Schema | Entsprechende Einheit | URI |
|:-------|:----------------------|:----|
|[MDS v1.1](www.minimaldatensatz.de)| Datenfelder (Erfassung) | [`www.minimaldatensatz.de/Datenfelder+Erfassung`](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48104066/Datenfelder+Erfassung)
|[Spektrum 5.1](https://collectionstrust.org.uk/spectrum/?tr=de)| Inventarisierung| [`https://collectionstrust.org.uk/resource/cataloguing-suggested-procedure/?tr=de`](https://collectionstrust.org.uk/resource/cataloguing-suggested-procedure/?tr=de) | 
| [LIDO v1.1](https://www.lido-schema.org/schema/v1.1/lido-v1.1.html) | Object Identification Wrapper | [`https://lido-schema.org/schema/latest/lido.html#objectIdentificationWrap`](https://lido-schema.org/schema/latest/lido.html#objectIdentificationWrap) | 

*Detaillierte Mappings auf Elementebene finden sich jeweils auf den Seiten der einzelnen Metadatenelemente.* 



