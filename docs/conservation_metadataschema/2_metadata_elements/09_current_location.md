---
layout: default
title: Standort
parent: Metadatenelemente
nav_order: 7
--- 

# Standort

Sektion: [Objektkennzeichnung](https://nfdi4objects.github.io/n4o_conservation_data_framework/conservation_metadataschema/1_section_overview/01_object_identification.html)

---
 
## Begrifflichkeiten 

 **URI der Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/FC3322](https://www.w3id.org/conservation/terms/metadata/FC3322)

**Mögliche alternativen Feldbezeichnungen in Datenbanksystemen:**
- Lokation
- Objektstandort
- Verwahrende Einrichtung
- Sammlung
- Museum

## Definition
 
Das Element Standort erfasst den regelhaften Aufbewahrungsort des Objektes, außerhalb der Restaurierungseinrichtung. Die Erfassung bezieht sich dabei auf relevante Standortinformationen für die Planung, Durchführung und Rückführung von bzw. nach konservatorisch-restauratorischen Maßnahmen. Die laufende Objektverwaltung, mit detaillierter Nachverfolgung der Bewegungen des Objektes, liegt außerhalb des primären Fokus dieses Schemas.  
 
---

{: .highlight }
> ### Verpflichtungsgrad
> 
> Pflicht
> {: .label .label-required }
> 
> Der Standort ist verpflichtend, da ohne diese Information nach der Restaurierung unklar ist, wohin das Objekt zurückgebracht werden soll. Bei einem Standortwechsel nach erfolgter Restaurierung sollte sowohl der bisherige als auch der künftige Standort differenziert erfasst werden. Der bisherige Standort kann Rückschlüsse auf entstandene Schäden liefern, während der künftige Standort die Wahl der Restaurierungsmethoden und -materialien beeinflusst haben kann.  

---

{: .highlight }
> ### Feldwert
> 
> Text/URI
> {: .label .label-text }
> 
> Bei diesem Element ist zwischen interner und öffentlicher Darstellung zu differenzieren. Intern empfiehlt sich eine präzise Standorterfassung, insbesondere dann, wenn der Standort mit klimatischen Besonderheiten verbunden ist. Bei öffentlicher Bereitstellung des Datensatzes sollte hingegen aus Sicherheitsgründen auf die Angabe des genauen Standorts innerhalb der Einrichtung verzichtet werden. Stattdessen empfiehlt sich die Ausgabe des Namens der Sammlung bzw. der verwahrenden Institution sowie eines eindeutigen Identifikators (z.B. [ISIL](https://isil.staatsbibliothek-berlin.de/suche), [ROR](https://ror.org/), [ISNI](https://isni.oclc.org/cbs/DB=1.2/SET=1/TTL=1/) oder [GND-ID](https://explore.gnd.network/)). Auf diese Weise bleibt beim Datenaustausch die Information zum Verbleib des restaurierten Objekts erhalten, ohne dass dieses einem erhöhten Diebstahlrisiko ausgesetzt wird.

---

{: .highlight }
> ### Wiederholbar
>
> Ja
> {: .label .label-text }
>
> Das Element ist wiederholbar, um insbesondere Standortwechsel vor und nach der Restaurierungsbehandlung erfassen zu können. Dabei muss jedoch eindeutig gekennzeichnet sein, welcher der aktuelle Standort ist, an den das Objekt nach der Restaurierung verbracht wird/wurde. 

---

{: .example }
> ## Beispiel
>
> intern:
> - Ehemaliger Standort: Objektdepot Nr. 3 (unklimatisiert), Regal 12, Fach C
> {: .label .label-text }
>
> - Aktueller Standort: Dauerausstellung A, Raum 102, klimatisierte Eckvitrine Nr. 5
> {: .label .label-text }  
>
> öffentlich: 
> - Standort: LEIZA, [ROR-ID: ror.org/0483qx226](https://ror.org/0483qx226), Dauerausstellung A, klimatisierte Vitrine 

---

## Entsprechungen in anderen Schemata

| Schema  | Elementname | Verpflichtungsgrad |
|:--------|:------------|:-------------------|
| [MDS v1.1](www.minimaldatensatz.de) | [Verwahrende Einrichtung](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48104568/Verwahrende+Einrichtung+Pflicht) | Pflicht | 
| [Spektrum 5.1](https://collectionstrust.org.uk/spectrum/) | [Angaben zum Objektstandort](https://collectionstrust.org.uk/resource/object-location-information/?tr=de) | keine Angabe |
