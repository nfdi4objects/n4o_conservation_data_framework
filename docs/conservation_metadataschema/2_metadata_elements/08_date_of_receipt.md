---
layout: default
title: Eingangsdatum
parent: Metadatenelemente
nav_order: 6
--- 

# Eingangsdatum

Sektion: [Objektkennzeichnung](https://nfdi4objects.github.io/n4o_conservation_data_framework/conservation_metadataschema/1_section_overview/01_object_identification.html)

---
 
## Begrifflichkeiten 

 **URI der Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/F2A45F](https://www.w3id.org/conservation/terms/metadata/F2A45F)

**Mögliche alternativen Feldbezeichnungen in Datenbanksystemen:** 
- Inventarisierungsdatum
- Sammlungsaufnahme:
- Eingang
- eingegangen am
- Date of receipt

## Definition

Das Eingangsdatum erfasst das Datum, an dem das Objekt in die aktuell zuständige Sammlung aufgenommen wurde. Es dokumentiert den Zeitpunkt der institutionellen Übernahme, etwa durch Ankauf, Schenkung, Fund oder Übereignung. Das Element bezieht sich ausschließlich auf die Sammlungsaufnahme, nicht auf den Zeitpunkt der Einlieferung in die Restaurierungswerkstatt.
 
---

{: .highlight }
> ### Verpflichtungsgrad
> 
> Bedingte Pflicht
> {: .label .label-conditional }
> 
> Das Eingangsdatum sollte - sofern bekannt - immer erfasst werden, da es für spätere Recherchen und die Rekonstruktion der Objektbiografie relevant ist. In der Praxis ist das Eingangsdatum jedoch, insbesondere bei Altbeständen, Dauerleihgaben oder Objekten mit unklarer Erwerbshistorie, nicht immer dokumentiert, wesswegen das Element als bedingt verpflichtend definiert wurde. 
 
---

{: .highlight }
> ### Feldwert
> 
> Date (nach ISO 8601) oder Text
> {: .label .label-text }
> 
> Im Idealfall sollte ein konkretes Datum erfasst werden. Ist dieses nicht eindeutig bekannt, können alternativ auch Jahreszahlen oder ungefähre Zeiträume als Freitext dokumentiert werden. Lässt sich der Zeitpunkt, zu dem das Objekt Teil der betreffenden Sammlung wurde, nicht rekonstruieren, sollte als Datenwert die Angabe „unbekannt“ eingetragen werden, anstatt das Feld leer zu lassen. Auf diese Weise wird eindeutig dokumentiert, dass das Eingangsdatum zum Zeitpunkt der Restaurierungsdokumentation nicht bekannt war. Gleichzeitig wird vermieden, dass ein leeres Feld bei der Nachnutzung der Daten fälschlicherweise als versehentlich ausgelassen oder als nicht relevant interpretiert wird.

---

{: .highlight }
> ### Wiederholbar
>
> Nein
> {: .label .label-text }

---

{: .example }
> ## Beispiel
>
> - Eingangsdatum: 2025-03-25
> {: .label .label-text }
>
> - Eingangsdatum: 1865 
> {: .label .label-text }

---

## Entsprechungen in anderen Schemata

| Schema  | Elementname | Verpflichtungsgrad |
|:--------|:------------|:-------------------|
| [MDS v1.1](www.minimaldatensatz.de) | [Datierung](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48104553/Datierung+Bedingt+Pflicht) | Bedingte Pflicht | 
| [Spektrum 5.1](https://collectionstrust.org.uk/spectrum/) |[Angaben zur Erwerbung: Datum](https://collectionstrust.org.uk/resource/acquisition-information/?tr=de) & [Angaben zum Datum](https://collectionstrust.org.uk/resource/date-information/?tr=de)| keine Angabe |