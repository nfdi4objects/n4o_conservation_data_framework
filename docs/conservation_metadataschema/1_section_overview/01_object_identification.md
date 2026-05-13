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
| [Objektbenennung](./objektbenennung) | <span class="label label-required">Pflicht</span> | [`https://www.w3id.org/conservation/terms/metadata/B5DD1A`](https://www.w3id.org/conservation/terms/metadata/B5DD1A) |
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
> Die Metadatenelemente dieser Sektion werden typischerweise aus bestehenden Sammlungsmanagementsystemen (z. B. MuseumPlus, Easydb, ImdasPro) übernommen. Eine manuelle Erfassung durch Restaurator:innen ist nur dann erforderlich, wenn keine institutionellen Objektdaten vorliegen.

{: .important }
> Die URIs dieser Sektion folgen dem Muster `https://www.w3id.org/conservation/terms/metadata/{ID}` und sind als persistente Identifikatoren konzipiert. Für die Einbindung in eigene Systeme empfiehlt sich die Nutzung dieser URIs als `skos:exactMatch` oder `owl:equivalentProperty`.



