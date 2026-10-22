---
title: Herstellungstechnik
sidebar_position: 14
---

# Herstellungstechnik

Sektion: [Objektbeschreibung](/conservation-metadataschema/sections/object-description)

---
 
## Begrifflichkeiten 

 **URI der Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/C4BCF8](https://www.w3id.org/conservation/terms/metadata/C4BCF8)

**Mögliche alternativen Feldbezeichnungen in Datenbanksystemen:**
- Technik
- Herstellung

---
## Definition

:::info
Die Herstellungstechnik beschreibt die Verfahren und Methoden, mit denen das Objekt gefertigt wurde. Dazu gehören handwerkliche Techniken, künstlerische Verfahren oder Oberflächenbehandlungen. Das Element wurde bei der Erstellung des Schemas als ein gemeinsamer Bestandteil bisheriger Dokumentationstraditionen aller restauratorischen Fachdisziplinen identifiziert. 
:::
 
---

## Modellierung

### Verpflichtungsgrad

<span class="label label-recommended">Recommended</span>

Das Element ist empfohlen, da Informationen zur Herstellungstechnik für die Einschätzung von Materialverhalten, Schadensmustern und Restaurierungsansätzen wertvoll sein kann. Zudem ermöglicht die Erfassung Vergleiche zwischen Objekten ähnlicher Machart und unterstützt kunsthistorische oder handwerkliche Einordnungen. Das Element ist nicht als Pflicht gekennzeichnet, da in manchen Fällen, insbesondere bei stark degradierten Artefakten, die ursprüngliche Technik nicht mehr eindeutig rekonstruierbar ist. 

---

### Feldwert

<span class="label label-text">Text / URI</span>

Für die Erfassung sollte ein passendes kontrolliertes Vokabular verwendet werden, um Konsistenz und Vergleichbarkeit zu gewährleisten. Unter Umständen kann es sinnvoll sein zusätzliche Erläuterungen als Freitextfeld zu ermöglichen, um im Bedarfsfall komplexerer Techniken genauer zu beschreiben.

---

### Wiederholbar

<span class="label label-text">Ja</span>

Da bei vielen Objekten mehrere Techniken kombiniert wurden (z. B. eine Holzskulptur, die geschnitzt, polychrom gefasst und teilweise vergoldet wurde) kann das Feld wiederholt werden.

---

### Hinweise
:::note
Die Angaben zur Objektbeschreibung werden häufig bereits bei Eingang des Objektes in die Restaurierungswerkstatt aus der bestehenden Objektdokumentation übernommen, im Idealfall direkt aus dem Sammlungsmanagementsystem in den Restaurierungsdatensatz. Gerade bei archäologischen Objekten werden Spuren der Herstellungstechnik jedoch meist erst während der Restaurierung sichtbar. Auch bei anderen Objekten ergeben sich durch die unmittelbare Nähe zum Objekt während der konservatorisch-restauratorischen Arbeit unter Umständen neue Erkentnisse zur Herstellungstechnik. In einem solchen Fall sollter der übernommene Eintrag nicht einfach überschrieben werden. Stattdessen kann das Element wiederholt und dabei kenntlich gemacht werden, welche Angabe den aktuellen Kenntnisstand wiedergibt. So bleibt die Entwicklung des Wissens über das Objekt nachvollziehbar.

Darüber hinaus ist es wünschenswert, dass solche Aktualisierungen nach Abschluss der Restaurierung auch in den Objektdatensatz im Sammlungsmanagementsystem zurückfließen. 
:::

::: note
Neben der Nennung einer konkreten Technik, deren Bestimmung häufig in gewissen Teilen bereits einen interpretativen Charakter hat, kann es unter Umständen sinnvoll sein, auch die rein objektiv beobachteten technologischen Spuren zu erfassen, auf denen die Annahme der Technik beruht.
::: 

---

:::tip[Beispiel]
˗	**Herstellungstechnik:** Ölmalerei [URI: http://vocab.getty.edu/aat/300178684](http://vocab.getty.edu/aat/300178684)
˗	**Herstellung**
    ˗	**Technologische Spuren:** Hammerschlagstruktur [URI: https://www.w3id.org/archlink/terms/conservationthesaurus/CGCD82](https://www.w3id.org/archlink/terms/conservationthesaurus/CGCD82) 
    ˗	**Technik:** [Geschmiedet](https://www.w3id.org/archlink/terms/conservationthesaurus/B64825) 
:::

---

## Entsprechungen in anderen Schemata

| Schema  | Elementname | Verpflichtungsgrad |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | [Technik](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48104540/Technik+Empfohlen) | Empfohlen | 
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/)| [Technik](https://collectionstrust.org.uk/resource/technique/?tr=de) | Keine Angabe (so oft wie nötig) | 