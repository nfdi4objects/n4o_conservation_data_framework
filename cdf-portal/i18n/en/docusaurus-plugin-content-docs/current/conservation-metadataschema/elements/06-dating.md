---
title: Datierung
sidebar_position: 4
---

:::caution Translation pending
This page has not been translated into English yet. The German original is shown below.
:::

 

# Datierung

Sektion: [Objektkennzeichnung](https://nfdi4objects.github.io/n4o_conservation_data_framework/conservation-metadataschema/sections/01-object-identification)

---
 
## Begrifflichkeiten 

 **URI der Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/F9GB13](https://www.w3id.org/conservation/terms/metadata/F9GB13)

**Mögliche alternativen Feldbezeichnungen in Datenbank:**
- Objektdatierung
- Herstellungszeitraum
- Herstellungsdatum
- zeitliche Einordnung
- Entstehungszeit
- Dating

---
## Definition
 
Die Datierung erfasst die zeitliche Einordnung der Entstehung des Objekts. Je nach Objekt kann dies ein konkretes Datum, eine Jahreszahl, eine ungefähre Zeitspanne oder eine Periode/Epoche sein.
 
---

:::info
### Verpflichtungsgrad

<span class="label label-recommended">Empfohlen</span>

Die Erfassung der zeitlichen Einordnung ist empfohlen, da sie für die Interpretation von Zustand und Materialverhalten und somit auch für die Planung konservatorischer Maßnahmen hilfreich sein kann. Darüber hinaus bietet diese Informationen bei der Datenauswertung eine gute Vergleichskategorie (z.B. Vergleich von stabilisierenden Festigungen an niedrig gebrannten Keramiken aus der späten Bronzezeit)
:::
 
---

:::info
### Feldwert

<span class="label label-text">Datum (nach ISO 8601), Text/URI</span>

Die Granularität der Datierung orientiert sich an den in der jeweiligen Fachdisziplin etablierten Konventionen bzw. der für das konkrete Objekt vorliegenden Informationstiefe. Bei der epochalen oder periodischen Angabe sollte nach Möglichkeit ein kontrolliertes Vokabular verwendet werden und neben der natürlichsprachlichen Bezeichnung auch ein maschinenlesbarer Identifikator (URI) erfasst werden. Dies ermöglicht eine einheitliche Benennung und erleichtert spätere Auswertungen sowie Vergleiche über Institutionsgrenzen hinweg.
:::

---

:::info
### Wiederholbar

<span class="label label-text">Ja</span>

Das Element ist wiederholbar, um bei Bedarf sowohl Jahreszahl als auch Epoche/Periode zu erfassen oder bei unsicheren Einordnungen beide möglichen Datierungen anzugeben (mit entsprechendem Hinweis, dass Zuordnung unsicher). 
:::

---

:::tip
## Beispiel

<span class="label label-text">- Datierung: 1697</span>

<span class="label label-text">- zeitliche Einordnung: Urnenfelderzeit; URI: [http://chronontology.dainst.org/period/xsq5dzQ1iPLL](http://chronontology.dainst.org/period/xsq5dzQ1iPLL)</span>

<span class="label label-text">- Herstellungsdatum: 1854-02-14</span>
:::
---

## Entsprechungen in anderen Schemata

| Schema  | Elementname | Verpflichtungsgrad |
|:--------|:------------|:-------------------|
| [MDS v1.1](www.minimaldatensatz.de) | [Datierung](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48104553/Datierung+Bedingt+Pflicht) | Bedingte Pflicht | 
| [Spektrum 5.1](https://collectionstrust.org.uk/spectrum/) | [Objekt: Herstellung: Datum](https://collectionstrust.org.uk/resource/object-production-information/?tr=de) & [Angaben zum Datum](https://collectionstrust.org.uk/resource/date-information/?tr=de)| keine Angabe |