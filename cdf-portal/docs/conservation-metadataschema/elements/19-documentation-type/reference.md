---
title: Verweis
sidebar_position: 1
---
 
:::caution work-in-Progress
Diese Seite befindet sich noch im Aufbau!
:::


# Verweis

Sektion: [Zustandserfassung](/conservation-metadataschema/sections/condition-assessment)

---
 
## Begrifflichkeiten 

 **URI der Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/GDF23F](https://www.w3id.org/conservation/terms/metadata/GDF23F)

**Mögliche alternativen Feldbezeichnungen in Datenbanksystemen:**
- Link
- Referenz
- Medienverknüpfung
- Speicherort
- Aufbewahrung
- Archiv
- Kennung des Datensatzes
- zu finden in

---
## Definition

:::info
Das Element verknüpft eine angegebene Dokumentationsform mit der Stelle, an der die zugehörige Dokumentation zu finden ist. Das kann ein Datensatz in einem anderen System sein, eine Datei, ein übergeordnetes Konvolut oder bei analoger Dokumentation ein physischer Standort.
:::
 
---

## Modellierung

### Verpflichtungsgrad

<span class="label label-conditional">Bedingte Pflicht</span>
 
Das Element ist ein Unterelement von [Dokumentationsform](/conservation-metadataschema/elements/documentation-type/) und verpflichtend, sofern ein Verweis auf die zugehörige Dokumentation möglich ist. Ist kein Verweisziel vorhanden, kann der Datensatz auch ohne dieses Element gespeichert werden.

---

### Feldwert

<span class="label label-text">Text / URI</span>

Als Verweis sind alle Formen zulässig, die das Auffinden der Dokumentation ermöglichen, zum Beispiel:

- persistente Identifikatoren (PID)
- URIs oder IDs von Datensätzen in anderen Systemen, etwa einem Digital-Asset-Management-System (DAM)
- Dateinamen oder Dateipfade
- Signaturen oder Standortangaben bei analoger Dokumentation

Empfohlen werden möglichst dauerhafte Verweisformen, idealerweise persistente Identifikatoren. Da diese in der Restaurierung bisher kaum verbreitet sind, gilt jedoch: Jede Form von Verweis ist besser als keiner.

---

### Wiederholbar

<span class="label label-text">Ja</span>

Das Element ist innerhalb einer Dokumentationsform wiederholbar. So kann bei wenigen zugehörigen Medien, zum Beispiel einzelnen Fotos, direkt auf jeden Datensatz verwiesen werden. Bei umfangreichen Beständen, etwa einer Fotodokumentation mit vielen Aufnahmen, empfiehlt sich stattdessen ein einzelner Verweis auf eine übergeordnete Einheit wie ein Konvolut oder einen Ordner. Jeder Verweis gehört zu genau einer Dokumentationsform. Dadurch bleibt eindeutig, welche Medien welche Art der Dokumentation darstellen, auch wenn innerhalb einer Zustandserfassung mehrere Dokumentationsformen angegeben werden.


---

:::tip[Beispiel]
- **Dokumentationsform:** [Fotodokumentation](https://www.w3id.org/archlink/terms/conservationthesaurus/C33D85)
  - **Verweis:** https://dam.example.org/collection/4711
- **Dokumentationsform:** [Schadenskartierung](https://www.w3id.org/archlink/terms/conservationthesaurus/D9A6FA)
  - **Verweis:** Restaurierungsarchiv, Mappe R-2024-017
- **Dokumentationsform:** [Externer Zustandsbericht](https://www.w3id.org/archlink/terms/conservationthesaurus/D7D443)
  - **Verweis:** Zustandsbericht_Inv-1234_2026-03-12.pdf
:::

---

## Entsprechungen in anderen Schemata

| Schema  | Elementname | Verpflichtungsgrad |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | Keine Entsprechung | Nicht zutreffend |
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/) | Keine Entsprechung | Nicht zutreffend |