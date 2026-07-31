---
layout: default
title: Art der Kennzeichnungsnummer
parent: Kennzeichnungsnummer
nav_order: 1
--- 

# Art der Kennzeichnungsnummer

Sektion: [Objektkennzeichnung](https://nfdi4objects.github.io/n4o_conservation_data_framework/conservation_metadataschema/1_section_overview/01_object_identification.html)

---
 
## Begrifflichkeiten 

 **URI der Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/G59SR3](https://www.w3id.org/conservation/terms/metadata/G59SR3)

**Mögliche alternativen Feldbezeichnungen in Datenbanksystemen:**
- Art der Kennzeichnungsnummer
- Kennzeichnungsnummerntyp
- type of identification number

---

## Definition
 
Die Art der Kennzeichnungsnummer dokumentiert den Status der Kennzeichnungsnummer zum Zeitpunkt der Restaurierung und macht transparent, ob das Objekt bereits eine feste institutionelle Identifikation besitzt (z.B. Inventarnummer) oder mit einer vorläufigen Nummer bearbeitet wurde. Dieses Element stellt sicher, dass die eindeutige Kennzeichnungsnummer korrekt interpretiert wird und der Kontext der Nummer nachvollziehbar ist.

---

{: .highlight }
> ### Verpflichtungsgrad
> 
> Pflicht
> {: .label .label-required }
> 
> Ohne die Angabe, ob die Nummer dauerhaft oder temporär ist, bleibt unklar, ob die während der Restaurierung dokumentierte Kennzeichnung auch zukünftig gültig ist. Bei temporären Nummern ist zu erwarten, dass das Objekt später eine neue, dauerhafte Nummer erhält. Fehlt diese Information, können spätere Nutzende der Dokumentation nicht einschätzen, ob die Kennzeichnungsnummer für das Objekt noch aktuell ist oder ob nach einer aktualisierten Nummer recherchiert werden muss. 

---

{: .highlight }
> ### Feldwert
> 
> Text/URI 
> {: .label .label-text }
>
> Die Einordnung der Kennzeichnungsnummer sollte aus einem kontrollierten Vokabular der im eigenen Anwendungskontext typischerweise auftretenden Arten von Nummern gespeist werden. Neben der natürlichsprachlichen Bezeichnung sollte dabei im Idealfall auch ein maschinenlesbarer Identifier (URI) erfasst werden.

---

{: .highlight }
> ### Wiederholbar
>
> Nein
> {: .label .label-text }
>
> Die Kennzeichnungsnummer muss mit genau einem definierenden Nummerntyp beschrieben sein.

---

{: .example }
> ## Beispiel
>
> - Art der Kennzeichnungsnummer: Inventarnummer; URI:[http://terminology.lido-schema.org/lido00113](http://terminology.lido-schema.org/lido00113)
> {: .label .label-text }
>
> - Art der Kennzeichnungsnummer: Temporäre Fundnummer 
> {: .label .label-text }

---

## Entsprechungen in anderen Schemata

| Schema  | Elementname | Verpflichtungsgrad |
|:--------|:------------|:-------------------|
| [MDS v1.1](www.minimaldatensatz.de) | keine Entsprechung | nicht zutreffend | 
| [Spektrum 5.1](https://collectionstrust.org.uk/spectrum/) | keine Entsprechung | nicht zutreffend | 
