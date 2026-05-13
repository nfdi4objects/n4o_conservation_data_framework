---
layout: default
title: Objektkennzeichnung
parent: Sektionen 
grantparent: KuR-Metadatenschema 
nav_order: 1
---

# Objektkennzeichnung

## Zweck und Funktion der Sektion

Die Objektkennzeichnung dient der eindeutigen Identifikation des dokumentierten Objekts und seiner Einordnung in übergeordnete Kontexte. Sie gewährleistet, dass das Objekt vor, während und nach dem gesamten Behandlungsprozess zweifelsfrei zugeordnet werden kann.

Die in dieser Sektion erfassten Daten werden in der Regel nicht von Restaurator:innen selbst erhoben, sondern als Objektdaten von Kurator:innen bzw. Auftraggeber:innen übernommen. Die zugeordneten Metadatenelemente orientieren sich daher an bestehenden Standards zur allgemeinen Objekterfassung. Die Sektion konzentriert sich dabei auf Informationen, die für Restaurator:innen als Grundlage für Zustandsbewertungen, die Auswahl geeigneter Konservierungsmethoden und die Interpretation von Schadensphänomenen relevant sind.

---

## Übersicht der enthaltenen Metadatenelemente

| Element | Verpflichtungsgrad | URI |
|:--------|:-------------------|:----|
| [Objektbenennung](./objektbenennung) |  Pflicht | [`https://www.w3id.org/conservation/terms/metadata/B5DD1A`](https://www.w3id.org/conservation/terms/metadata/B5DD1A) |
| [Kennzeichnungsnummer](./kennzeichnungsnummer) | <span class="label label-required">Pflicht</span> | [`F7D3DB`](https://www.w3id.org/conservation/terms/metadata/F7D3DB) |
| [Art der Kennzeichnungsnummer](./art-der-kennzeichnungsnummer) | <span class="badge badge-required">Pflicht</span> | [`G59SR3`](https://www.w3id.org/conservation/terms/metadata/G59SR3) |
| [Weitere Objektnummer](./weitere-objektnummer) | <span class="badge badge-optional">Optional</span> | [`K343FVC`](https://www.w3id.org/conservation/terms/metadata/K343FVC) |
| [Art der weiteren Objektnummer](./art-der-weiteren-objektnummer) | <span class="badge badge-conditional">Bedingte Pflicht</span> | [`LGPT6AC`](https://www.w3id.org/conservation/terms/metadata/LGPT6AC) |
| [Datierung](./datierung) | <span class="badge badge-recommended">Empfohlen</span> | [`F9GB13`](https://www.w3id.org/conservation/terms/metadata/F9GB13) |
| [Herkunft](./herkunft) | <span class="badge badge-recommended">Empfohlen</span> | [`CD3341`](https://www.w3id.org/conservation/terms/metadata/CD3341) |
| [Eingangsdatum](./eingangsdatum) | <span class="badge badge-conditional">Bedingte Pflicht</span> | [`F2A45F`](https://www.w3id.org/conservation/terms/metadata/F2A45F) |
| [Standort](./standort) | <span class="badge badge-required">Pflicht</span> | [`FC3322`](https://www.w3id.org/conservation/terms/metadata/FC3322) |
| [Ansprechpartner:in](./ansprechpartnerin) | <span class="badge badge-optional">Optional</span> | [`F3G8D1`](https://www.w3id.org/conservation/terms/metadata/F3G8D1) |
| [Schöpfer:in](./schoepferin) | <span class="badge badge-optional">Optional</span> | [`G76A78`](https://www.w3id.org/conservation/terms/metadata/G76A78) |
| [Objektbeziehung](./objektbeziehung) | <span class="badge badge-conditional">Bedingte Pflicht</span> | [`GB6DF3`](https://www.w3id.org/conservation/terms/metadata/GB6DF3) |

  *Weiterführende Informationen zu den einzelnen Elementen finden Sie auf den jeweiligen Unterseiten.*

---

## Hinweise zur Implementierung

{: .note }
> Die Metadatenelemente dieser Sektion werden typischerweise aus bestehenden Sammlungsmanagementsystemen (z. B. MuseumPlus, Easydb, ImdasPro) übernommen. Eine manuelle Erfassung durch Restaurator:innen ist nur dann erforderlich, wenn keine institutionellen Objektdaten vorliegen.

{: .important }
> **Technische Umsetzung:** Die URIs dieser Sektion folgen dem Muster `https://www.w3id.org/conservation/terms/metadata/{ID}` und sind als persistente Identifikatoren konzipiert. Für die Einbindung in eigene Systeme empfiehlt sich die Nutzung dieser URIs als `skos:exactMatch` oder `owl:equivalentProperty`.



