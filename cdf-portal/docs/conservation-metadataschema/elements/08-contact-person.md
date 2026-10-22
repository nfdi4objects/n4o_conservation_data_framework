---
title: Ansprechpartner:in
sidebar_position: 8
---
 
# Ansprechpartner:in

Sektion: [Objektkennzeichnung](/conservation-metadataschema/sections/object-identification)

---
 
## Begrifflichkeiten 

 **URI der Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/F3G8D1](https://www.w3id.org/conservation/terms/metadata/F3G8D1)

**Mögliche alternativen Feldbezeichnungen in Datenbanksystemen:**
- Ansprechperson
- Eigentümer:in
- Zuständige(r) Kurator:in
- Sammlungsleitung
- Zuständigkeit
- autorisiert durch

## Definition

:::info
Das Element erfasst die Person, die für das Objekt verantwortlich ist und als Kontakt für Rückfragen zur Verfügung steht. Dies kann die Person sein, die die Restaurierung in Auftrag gegeben hat, die/der zuständige Kurator:in, die Sammlungsleitung oder bei Objekten aus Privatbesitz die/der Eigentümer:in. Die Ansprechperson dient als zentrale Kontaktstelle für alle objektbezogenen Fragen, Entscheidungen und Abstimmungen während des Restaurierungsprozesses. 
:::
 
---

## Modellierung

### Verpflichtungsgrad

<span class="label label-optional">Optional</span>

Die Erfassung des Elements „Ansprechpartner:in“ ist optional, da die Angabe der für das Objekt zuständigen Kontaktperson für eventuell auftretenden Absprachebedarf relevant sein kann, jedoch nicht zwingend für die fachliche Nachvollziehbarkeit der Restaurierungsmaßnahme erforderlich ist. 
 
---

### Feldwert

<span class="label label-text">Text/URI</span>

Der Datenwert dieses Elementes sollte strukturiert bzw. maschinenlesbar erfasst werden. Dabei können *Vor- und Nachnamen* in einem Freitextfeld oder idealerweise aus einer festen Liste zuständiger Kolleg:innen erfasst werde und zusätzlich ein *maschinenlesbarer Identifier* (z. B. [![ORCID](https://orcid.org/sites/default/files/images/orcid_16x16.png)](https://orcid.org/), [![ROR](/img/ror-icon-bw-16.png)](https://ror.org/), [ISNI](https://isni.org/)) hinterlegt sein.

:::note
Gerade bei der Restaurierung von Fremdobjekten oder bei größeren Einrichtungen mit unterschiedlichen Zuständigkeiten innerhalb der Sammlung sollte auch die jeweilige Einrichtung, die für das Objekt zuständig ist, miterfasst werden. Bei der Freigabe der Daten nach außen kann dann statt der individuellen Person die zuständige Einrichtung oder Abteilung genannt werden. Diese Differenzierung stellt sicher, dass intern die Verantwortlichkeit klar dokumentiert ist, während nach außen die Privatsphäre der Beteiligten geschützt bleibt.
:::


---

### Wiederholbar

<span class="label label-text">Nein</span>

Jedem Objekt sollte genau eine Ansprechperson zugewiesen sein, um Zuständigkeiten und Entscheidungshoheit klar zu regeln. 

---

:::tip[Beispiel]

- **Ansprechpartner:in:** Dr. Anna Müller; [ORCID: 0152-5478-00]() (fiktiv)
- **Ansprechpartner:in:** LEIZA, Arbeitsbereich Sammlung; [![ROR](/img/ror-icon-bw-16.png)](https://ror.org/0483qx226)

:::

---

## Entsprechungen in anderen Schemata

| Schema  | Elementname | Verpflichtungsgrad |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | [Person/Körperschaft](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48103965/Person+K+rperschaft+Bedingt+Pflicht) | Bedingte Pflicht | 
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/)| [Konservierung/Restaurierung: autorisiert von](https://collectionstrust.org.uk/resource/conservation-authoriser/?tr=de) & [Angaben zur Person](https://collectionstrust.org.uk/resource/person-information/?tr=de) | Keine Angabe | 