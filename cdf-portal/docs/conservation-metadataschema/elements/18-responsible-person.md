---
title: Zuständige Person
sidebar_position: 18
---
 
:::caution work-in-Progress
Diese Seite befindet sich noch im Aufbau!
:::


# Zuständige Person

:::caution Ereignis-Pflichtelement
Das Element *Zuständige Person* ist eines der Elemente, das bei sämtlichen Handlungserfassungen verpflichtend dokumentiert werden muss. Aus diesem Grund ist das Element in mehreren Sektionen enthalten.
:::

Sektion: [Zustandserfassung](/conservation-metadataschema/sections/condition-assessment)

Sektion: [Untersuchung](/conservation-metadataschema/sections/analysis/)

Sektion: [Probennahme](/conservation-metadataschema/sections/sampling)

Sektion: [Erhaltungskonzept](/conservation-metadataschema/sections/conservation-plan)

Sektion: [Gefährdungsbewertung](/conservation-metadataschema/sections/risk-assessment)

---
 
## Begrifflichkeiten 

 :::info
 Um den unterschiedlichen Fachkontext bereits in den Bezeichnungen der Metadatenelemente explizit zu machen, ordnet das Schema jeder handelnden Person in den verschiedenen Rollen jeweils einen individuellen, eindeutigen Identifier zu.
 ::: 

 **URIs der Conservation Metadata Terminology:** 

 *Zuständige Person (Zustandserfassung)*: [https://www.w3id.org/conservation/terms/metadata/HRO94F](https://www.w3id.org/conservation/terms/metadata/HRO94F)

*Zuständige Person (Untersuchung)*: [https://www.w3id.org/conservation/terms/metadata/G7F25F](https://www.w3id.org/conservation/terms/metadata/G7F25F)

*Zuständige Person (Probennahme)*: [https://www.w3id.org/conservation/terms/metadata/C8CG15](https://www.w3id.org/conservation/terms/metadata/C8CG15)

*Zuständige Person (Erhaltungsmaßnahme)*: [https://www.w3id.org/conservation/terms/metadata/C79561](https://www.w3id.org/conservation/terms/metadata/C79561)

*Zuständige Person (Gefährdungsbewertung)*: [https://www.w3id.org/conservation/terms/metadata/CCCC7G](https://www.w3id.org/conservation/terms/metadata/CCCC7G)


**Mögliche alternativen Feldbezeichnungen in Datenbanksystemen:**
- Zuständige Restaurator:in
- Ausführende Person
- Verantwortung
- ausgeführt von 
- Zuständigkeit

## Definition
 
Benennung der Person, die die jweilige Handlung durchgeführt hat bzw. für diese verantwortlich ist. 
 
---

:::info[Verpflichtungsgrad]

<span class="label label-required">Pflicht</span>
 
Das Element *Zuständige Person* ist verpflichtend, da ohne diese Information die Nachvollziehbarkeit und Verantwortlichkeit der jeweiligen Handlung nicht gewährleistet ist. Die Qualität der Ergebnisse sowie deren Dokumentation hängt in den meisten Fällen direkt von der Expertise und Erfahrung der durchführenden Person ab. Die Angabe ermöglicht es, bei Rückfragen oder Unklarheiten Kontakt aufzunehmen und die Einschätzung zu validieren. 
---

:::info[Feldwert]

<span class="label label-text">Text / URI</span>

Der Datenwert dieses Elementes sollte strukturiert bzw. maschinenlesbar erfasst werden. Dabei können *Vor- und Nachnamen* in einem Freitextfeld oder idealerweise aus einer festen Liste zuständiger Kolleg:innen erfasst werde und zusätzlich ein *maschinenlesbarer Identifier* (z. B. [![ORCID](https://orcid.org/sites/default/files/images/orcid_16x16.png)](https://orcid.org/), [![ROR](/img/ror-icon-bw-16.png)](https://ror.org/), [ISNI](https://isni.org/)) hinterlegt sein. Dies ermöglicht eine eindeutige Zuordnung und verbessert die Interoperabilität über verschiedene Datenbanken und Systeme hinweg.

---

:::info[Wiederholbar]

<span class="label label-text">Nein</span>

Für jedes Ereignis muss genau eine hauptverantwortliche Person benannt werden, daher ist dieses Element nicht wiederholbar. Zusätzliche Beteiligte könnten durch ein optionales Feld ergänzt werden. 

---

:::caution Unterscheidung interne Erfassung vs. öffentliche Bereitstellung
Für die interne Dokumentation sollte für die klare Regelung von Verantwortlichkeiten die zuständige Person mit vollem Namen erfasst werden, insbesondere bei größeren Einrichtungen mit vielen Restaurator:innen. Bei der Veröffentlichung der Daten in übergeordneten Portalen und Infrastrukturen muss individuell entschieden werden, ob die Person im Sinne einer wissenschaftlichen Autorenschaft mit Namen genannt werden kann bzw. möchte. Sollen vor dem Hintergrund des Schutzes persönlicher Daten keine Klarnamen veröffentlicht werden, kann an dieser Stelle auch die übergeordnete Einrichtung als *Zuständige Person* genannt werden. Für die Dokumentation bietet es sich daher an, standardmäßig beide Informationen zu erfassen. Diese Differenzierung stellt sicher, dass intern die Verantwortlichkeit klar dokumentiert ist, während nach außen die Privatsphäre der Beteiligten geschützt bleibt.
:::

:::tip[Beispiel]

- **Zuständige Person (intern):** Kristina Fischer [![ORCID 0009-0005-3991-1025](https://orcid.org/sites/default/files/images/orcid_16x16.png)](https://orcid.org/0009-0005-3991-1025)

- **Zuständige Person (extern):** LEIZA, AB Restaurierung [![ROR](/img/ror-icon-bw-16.png)](https://ror.org/0483qx226)

:::

---

## Entsprechungen in anderen Schemata

| Schema  | Elementname | Verpflichtungsgrad |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | [Person/Körperschaft](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48103965/Person+K+rperschaft+Bedingt+Pflicht) | Bedingte Pflicht | 
| [Spektrum 5.1](https://collectionstrust.org.uk/spectrum/)| [Verantwortlicher](https://collectionstrust.org.uk/resource/procedure-manager/?tr=de) & [Zustandsüberprüfung: Prüfer](https://collectionstrust.org.uk/resource/condition-check-technical-assessment-information/?tr=de) & [Konservierung/Restaurierung: Restaurator](https://collectionstrust.org.uk/resource/conservation-and-treatment-information/?tr=de) & [Angaben zur Person](https://collectionstrust.org.uk/resource/person-information/?tr=de)  | Keine Angabe | 