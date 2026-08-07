---
layout: default
title: Herkunft
parent: Metadatenelemente
nav_order: 5
--- 

# Herkunft

Sektion: [Objektkennzeichnung](https://nfdi4objects.github.io/n4o_conservation_data_framework/conservation_metadataschema/1_section_overview/01_object_identification.html)

---
 
## Begrifflichkeiten 

 **URI der Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/CD3341](https://www.w3id.org/conservation/terms/metadata/CD3341)

**Mögliche alternativen Feldbezeichnungen in Datenbanksystemen:**
- Fundort
- Herstellungsort
- kulturelle Verortung
- Provenienz
- Cultural context
- Origin
- Provenance
- Location
- Place of manufacture

---

## Definition

Die Herkunft erfasst Informationen zur geografischen, kulturellen oder kontextuellen Provenienz des Objektes. Je nach Fachdisziplin können hier unterschiedliche Aspekte, wie Fundort, kulturelle Zuordnung, Werkstattzugehörigkeit oder Erwerbsinformationen, dokumentiert werden. 
 
---

{: .highlight }
> ### Verpflichtungsgrad
> 
> Empfohlen
> {: .label .label-recommended }
> 
> Die Herkunft ist empfohlen, da sie Kontextinformationen liefert, die für die Interpretation von Materialeigenschaften, Herstellungstechniken und Erhaltungszustand relevant sein können. Regionalspezifische Traditionen, klimatische Bedingungen am Herkunftsort oder kulturelle Praktiken beeinflussen sowohl die ursprüngliche Beschaffenheit als auch das Alterungsverhalten von Objekten.
 
---

{: .highlight }
> ### Feldwert
> 
> Text/URI
> {: .label .label-text }
> 
> Für das zugehörige Datenfeld dieses Elementes sollten entsprechende kontrollierte Vokabulare verwendet werden, um eine einheitliche Begrifflichkeit sicherzustellen. Dabei sollte im Idealfall neben der natürlichsprachlichen Bezeichnung auch ein zugehöriger eindeutiger Identifikator (URI) erfasst werden, um die Maschinenlesbarkeit zu verbessern.

---

{: .highlight }
> ### Wiederholbar
>
> Ja
> {: .label .label-text }
>
> Das Element ist wiederholbar, da verschiedene Aspekte der Provenienz relevant sein können.

---

{: .example }
> ## Beispiel
>
> - Herkunft - Fundort: Italien; URI: [http://vocab.getty.edu/tgn/1000080](http://vocab.getty.edu/tgn/1000080) 
> {: .label .label-text }
>
> - Herkunft - Kulturelle Zuordnung: Etrusker; URI [http://d-nb.info/gnd/4015627-8](http://d-nb.info/gnd/4015627-8)  
> {: .label .label-text }
>
> - Herkunft - Erwerb: Schenkung 1976 aus Sammlung Müller
> {: .label .label-text }

---

## Hinweise zur Implementierung

{: .note }
> Das Element „Herkunft" wurde bewusst als generischer, fachübergreifender Oberbegriff gewählt und orientiert sich an der [DIN EN 16095:2012-10](https://dx.doi.org/10.31030/1872916). Diese Entscheidung folgt der übergeordneten Zielsetzung des Schemas, für unterschiedliche restauratorische Fachbereiche gleichermaßen anwendbar zu sein. Im archäologischen Kontext sind Angaben zu „Fundort" oder „kulturelle Zuordnung" zentral, während bei kulturhistorischen Objekten ein Element „Fundort" wenig sinnvoll ist, hier sind eher Werkstatt oder Stilkreis relevant. In der vorliegenden ersten Version des KuR-Schemas wird dieser Bereich daher bewusst offengehalten. Institutionen können für ihren jeweiligen Anwendungskontext selbst festlegen, welche spezifischen Herkunftsinformationen erfasst werden sollen, idealerweise unter Einbezug bereits bestehender fachlicher Konventionen/Standards zur Objekterfassung. Diese fachlichen Spezifizierungen können über eine „weite Entsprechung"-Relation (broad match) auf den generischen Begriff „Herkunft" der Conservation Metadata Terminology gemappt werden. Auf diese Weise bleiben die jeweiligen disziplinären Unterschiede in der Erfassungstiefe und -spezifik bewahrt, während das KuR-Schema als gemeinsamer Referenzpunkt fungiert.  

---

## Entsprechungen in anderen Schemata

| Schema  | Elementname | Verpflichtungsgrad |
|:--------|:------------|:-------------------|
| [MDS v1.1](www.minimaldatensatz.de) | [Ort](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48105080/Ort+Bedingt+Pflicht) | Bedingte Pflicht | 
| [Spektrum 5.1](https://collectionstrust.org.uk/spectrum/) | [Angaben zum Ort](https://collectionstrust.org.uk/resource/place-information/?tr=de)| keine Angabe |
