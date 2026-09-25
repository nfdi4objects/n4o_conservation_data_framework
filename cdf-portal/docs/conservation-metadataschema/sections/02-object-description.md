---
title: Objektbeschreibung
sidebar_position: 2
---
# Objektbeschreibung <span class="label label-required">Pflicht</span>

## Zweck und Funktion der Sektion

Die Objektbeschreibung erfasst die materiellen und physischen Eigenschaften des Objekts. Ebenso wie bei der Sektion [Objektkennzeichnung](https://nfdi4objects.github.io/n4o_conservation_data_framework/conservation-metadataschema/sections/object-identification) wurde bei der Zusammenstellung der Metadatenelementen dieser Sektion der Fokus auf jene Informationen zur materiellen Erscheinungsform des Objektes gelegt, die für Restaurator:innen relevante für die Zustandsbewertung, die Auswahl geeigneter Konservierungsmethoden und die Interpretation von Schadensphänomenen sein können. In der Regel werden diese Informationen bereits während der Aufnahme des Objektes in die Sammlung bzw. bei archäologischen Objekten auch häufig bereits während oder unmittelbar nach der Ausgrabung erfasst und dem/der Restaurator:in bei Übergabe des Objektes mitgeteilt. Gleichzeitig werden sie jedoch häufig durch vertiefende Beobachtungen, die erst während oder durch den Restaurierungsprozess festgestellt werden können, ergänzt oder spezifiziert (z.B. die Herstellungstechnik, durch die Entdeckung und Interpretation von eindeutigen Herstellungsspuren). 

---

## Übersicht der enthaltenen Metadatenelemente

| Element | Verpflichtungsgrad | URI |
|:--------|:-------------------|:----|
| [Objekttyp]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/F1BA31 `](https://www.w3id.org/conservation/terms/metadata/F1BA31) |
| [Weitere Objekteigenschaften]() | <span class="label label-recommended">Empfohlen</span> | [`https://www.w3id.org/conservation/terms/metadata/BGC9F3`](https://www.w3id.org/conservation/terms/metadata/BGC9F3) | 
| [Objektmaterial]() | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/D866AD`](https://www.w3id.org/conservation/terms/metadata/D866AD) | 
| [Herstellungstechnik]() | <span class="label label-recommended">Empfohlen</span> | [https://www.w3id.org/conservation/terms/metadata/C4BCF8](https://www.w3id.org/conservation/terms/metadata/C4BCF8) | 

*Weiterführende Informationen zu den einzelnen Elementen finden Sie auf den jeweiligen Unterseiten.*

--- 

## Hinweise zur Implementierung

:::note
Die Angaben dieser Sektion sollten idealerweise direkt aus dem entsprechenden Objektdatensatz in die Restaurierungsdokumentation übernommen bzw. mit diesem verknüpft sein, um eine kohärente Datenverwaltung zu gewährleisten. Eine manuelle Erfassung durch Restaurator:innen ist nur dann erforderlich, wenn kein referenzierbarer Objektdatensatz zur Verfügung steht (beispielsweise wenn kein zentrales Sammlungsmanagementsystem verwendet wird oder wenn das Objekt erst im Rahmen der Konservierung-Restaurierung inventarisiert wird). 
::: 

:::note
Werden durch die Restaurierung neue Erkenntnisse zur Objektbeschreibung gewonnen (z.B. präzisere Angaben zu Material oder Herstellungstechnik), sollen diese in der Restaurierungsdokumentation als ergänzender Eintrag (Wiederholung des entsprechenden Metadatenelements) in dieser Sektion festgehalten werden, ohne bestehende Angaben zu überschreiben. Die aktualisierten Angaben sollten anschließend auch in den Objektdatensatz zurückgespielt werden, sodass die im Rahmen der Restaurierung gewonnenen Erkenntnisse dauerhaft an zentraler Stelle der Objektinformationen einsehbar sind. 
:::

--- 

## Entsprechungen in anderen Schemata

| Schema | Entsprechende Einheit | URI |
|:-------|:----------------------|:----|
|[MDS v1.1](www.minimaldatensatz.de)| Datenfelder (Erfassung) | [`www.minimaldatensatz.de/Datenfelder+Erfassung`](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48104066/Datenfelder+Erfassung)
|[Spektrum 5.1](https://collectionstrust.org.uk/spectrum/?tr=de)| Inventarisierung | [`https://collectionstrust.org.uk/resource/cataloguing-suggested-procedure/?tr=de`](https://collectionstrust.org.uk/resource/cataloguing-suggested-procedure/?tr=de) | 
| [LIDO v1.1](https://www.lido-schema.org/schema/v1.1/lido-v1.1.html) | Object Identification Wrapper | [`https://lido-schema.org/schema/latest/lido.html#objectIdentificationWrap`](https://lido-schema.org/schema/latest/lido.html#objectIdentificationWrap) | 

*Detaillierte Mappings auf Elementebene finden sich jeweils auf den Seiten der einzelnen Metadatenelemente.* 
