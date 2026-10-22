---
title: Objektmaterial
sidebar_position: 13
---

# Objektmaterial

Sektion: [Objektbeschreibung](/conservation-metadataschema/sections/object-description)

---
 
## Begrifflichkeiten 

 **URI der Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/D866AD](https://www.w3id.org/conservation/terms/metadata/D866AD)

**Mögliche alternativen Feldbezeichnungen in Datenbanksystemen:**
- Material
- Objektwerkstoff
- besteht aus 
- Materialangabe


---
## Definition

:::info
Das Element erfasst die Materialien, aus denen das Objekt besteht. Dies können sowohl Hauptmaterialien als auch untergeordnete oder sekundäre Materialien sein. Das Element und sein Verpflichtungsgrad orientieren sich an etablierten Standards der allgemeinen Objekterfassung. Gerade für die Konservierung-Restaurierung ist das Objektmaterial von zentraler Bedeutung, da Materialeigenschaften das Verhalten, die Schadensmuster und die geeigneten Behandlungsmethoden maßgeblich bestimmen. 
:::
 
---

## Modellierung

### Verpflichtungsgrad

<span class="label label-required">Pflicht</span>

Das Element ist verpflichtend, da ohne Kenntnis der Materialbeschaffenheit keine fachgerechte Konservierung-Restaurierung möglich ist. Zudem ist die Materialangabe essenziell für Risikoabschätzungen, präventive Konservierung und die Auswahl geeigneter Restaurierungsmaterialien. Fehlt diese Information, ist eine verantwortungsvolle Behandlung nicht gewährleistet.
 
---

### Feldwert

<span class="label label-text">Text / URI</span>

Für die Erfassung sollte ein passendes kontrolliertes Vokabular verwendet werden, um Konsistenz und Vergleichbarkeit zu gewährleisten

---

### Wiederholbar

<span class="label label-text">Ja</span>

Das Element ist wiederholbar, da viele Objekte aus mehreren Materialien bestehen. Im Idealfall sollte dabei kenntlich gemacht werden, welches das Hauptmaterial ist. 

---

### Hinweise

:::note
Die Angaben zur Objektbeschreibung werden in der Regel bei Eingang des Objektes in die Restaurierungswerkstatt aus der bestehenden Objektdokumentation übernommen, im Idealfall direkt aus dem Sammlungsmanagementsystem in den Restaurierungsdatensatz. Werden während der konservatorischen Untersuchung neue Erkenntnisse zur Materialität des Objektes gewonnen, sollte der übernommene Eintrag jedoch nicht einfach überschrieben werden. Stattdessen sollte das Element mit dem neuen Datenwert wiederholt und kenntlich gemacht werden, welche Angabe den aktuellen Kenntnisstand wiedergibt. So bleibt die Entwicklung des Wissens über das Objekt nachvollziehbar.

Darüber hinaus ist es wünschenswert, dass solche Aktualisierungen nach Abschluss der Restaurierung auch in den Objektdatensatz im Sammlungsmanagementsystem zurückfließen. 
:::

:::note
Idealerweise sollte auch die Grundlage der Materialbestimmung dokumentiert werden. D.h. ob die Angabe auf rein visueller Begutachtung oder naturwissenschaftlichen Analysen (z. B. Röntgenfluoreszenz) oder anderen Untersuchungsmethoden beruht. Diese Information gibt Aufschluss über die Belastbarkeit der Materialangabe und ist für spätere Nutzer:innen hilfreich, um die Verlässlichkeit der Daten einzuschätzen. Liegen die Untersuchungsergebnisse in digitaler und zugänglicher Form vor, bietet sich eine direkte Verlinkung zu den entsprechenden Datensätzen an.
:::

---

:::tip[Beispiel]
-	**Objektmaterial:** Papier; [GND-URI: http://d-nb.info/gnd/4044522-7](http://d-nb.info/gnd/4044522-7) [visuelle Begutachtung]

-	**Objektmaterial:** Hauptbestandteil: [Tannenholz](https://www.w3id.org/archlink/terms/conservationthesaurus/FCA7DA); Weiteres: [Eisen](https://www.w3id.org/archlink/terms/conservationthesaurus/F71C6B)

-	**Objektmaterial:** Buntmetall
    - **Objektmaterial:** [Bronze](http://vocab.getty.edu/aat/300010957); ermittelt durch: [RFA-Analyse vom 12.05.2024](/conservation-metadataschema/sections/analysis) 
:::

---

## Entsprechungen in anderen Schemata

| Schema  | Elementname | Verpflichtungsgrad |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | [Material](https://deutsche-digitale-bibliothek.atlassian.net/wiki/spaces/DFD/pages/48104549/Material+Empfohlen) | Empfohlen | 
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/)| [Material](https://collectionstrust.org.uk/resource/material/?tr=de) | Keine Angabe | 