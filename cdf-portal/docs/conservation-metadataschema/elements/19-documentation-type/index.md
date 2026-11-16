---
title: Dokumentationsform
sidebar_position: 19
---

# Dokumentationsform

Sektion: [Zustandserfassung](/conservation-metadataschema/sections/condition-assessment)

---
 
## Begrifflichkeiten 

 **URI der Conservation Metadata Terminology:** [https://www.w3id.org/conservation/terms/metadata/CDD6B5](https://www.w3id.org/conservation/terms/metadata/CDD6B5)

**Mögliche alternativen Feldbezeichnungen in Datenbanksystemen:**
- Art der Dokumentation
- Dokumentationsart
- Dokumentationsmedium
- dokumentiert als

---
## Definition

:::info
Das Element erfasst, welche Dokumentationsformen ergänzend zu diesem Datensatz der Zustandserfassung entstanden sind, zum Beispiel Fotodokumentation, Schadenskartierung oder ein ausführlicher schriftlicher Zustandsbericht. Es macht transparent, welche Daten bei dieser Zustandserfassung erhoben wurden, und bildet zusammen mit dem Unterelement [Verweis](/conservation-metadataschema/elements/documentation-type/reference) eine zentrale Übersicht über die zugehörigen Medien.
:::
 
---

## Modellierung

### Verpflichtungsgrad

<span class="label label-conditional">Bedingte Pflicht</span>

Das Element ist verpflichtend, sobald zusätzlich zum verpflichtenden Element [Zustandsbeschreibung](/conservation-metadataschema/elements/condition-description/) weitere Dokumentationsformen erstellt wurden. Ist die Zustandsbeschreibung die einzige Dokumentationsform, muss das Element nicht verpflichtend ausgefüllt werden. Es wird jedoch empfohlen, die Zustandsbeschreibung immer anzugeben (siehe Hinweise).

---

### Feldwert

<span class="label label-text">Text / URI</span>

Die konkrete Umsetzung, zum Beispiel als Checkbox-System oder Dropdown-Menü, bleibt den Institutionen überlassen. So lassen sich institutionsspezifische Dokumentationspraktiken abbilden. Empfohlen wird jedoch, für die gängigen Dokumentationsarten (textliche Zustandsbeschreibung, Fotodokumentation, Schadenskartierung, etc.) einheitliche Begriffe aus einem kontrollierten Vokabular vorzugeben.

---

### Wiederholbar

<span class="label label-text">Ja</span>

Das Element ist wiederholbar, da zur Erfassung eines Zustands häufig mehrere Dokumentationsformen parallel eingesetzt werden. Jede Wiederholung bildet zusammen mit ihrem Unterelement **Verweis** eine Einheit, sodass eindeutig bleibt, welcher Verweis zu welcher Dokumentationsform gehört.

---

### Hinweise

:::note
Jede Zustandserfassung enthält verpflichtend eine [Zustandsbeschreibung](/conservation-metadataschema/elements/condition-description/), also eine textliche und strukturierte Beschreibung des Objektzustands direkt in diesem Datensatz. Es wird empfohlen, diese Zustandsbeschreibung immer auch hier als Dokumentationsform anzugeben, auch wenn keine weiteren Dokumentationsformen vorliegen.

Das wirkt zunächst doppelt, hat aber einen praktischen Nutzen: Auf einen Blick und auch für Datenbanken und andere digitale Systeme ist dann eindeutig erkennbar, dass eine Zustandsbeschreibung vorliegt und welche weiteren Dokumentationsformen sie ergänzen. Ein Verweis ist für die Zustandsbeschreibung nicht nötig, da sie sich im Datensatz selbst befindet.

Die Angabe ist keine Pflicht. Fehlt sie, gilt die Zustandsbeschreibung trotzdem als vorhanden.

**Abgrenzung zu einem ausführlicheren textlichen Zustandsbericht**

Wurde bei sehr komplexen Objektzuständen zusätzlich ein ausführlicher schriftlicher Bericht angelegt, kann dieser hier mit dem Wert **Externer Zustandsbericht** explizit erwähnt und über das Unterelement **Verweis** referenziert werden.

**Bezug zur Praxis**

Das Element greift die gängige Praxis des restauratorischen Alltags auf, den Zustand eines Objekts mit verschiedenen, sich ergänzenden Dokumentationsformen festzuhalten, und setzt sie strukturiert um. Über das Unterelement **Verweis** kann jede externe Dokumentationsform direkt mit der zugehörigen Dokumentation verknüpft werden, etwa mit einem Datensatz in einem anderen System, einer Datei oder bei analoger Dokumentation mit einer Signatur oder dem Standort.
:::

---

:::tip[Beispiel]

- **Dokumentationsform:** [Zustandsfoto](https://www.w3id.org/archlink/terms/conservationthesaurus/C33D85)
- **Dokumentationsform:** [Externer Zustandsbericht](https://www.w3id.org/archlink/terms/conservationthesaurus/D7D443)
- **Dokumentationsform:** [Röntgenaufnahme](https://www.w3id.org/archlink/terms/conservationthesaurus/FD2B2B)
- **Dokumentationsform:** [Zustandskartierung](https://www.w3id.org/archlink/terms/conservationthesaurus/D9A6FA)
:::

---

## Entsprechungen in anderen Schemata

| Schema  | Elementname | Verpflichtungsgrad |
|:--------|:------------|:-------------------|
| [MDS v1.1](http://www.minimaldatensatz.de) | Keine Entsprechung | Nicht zutreffend | 
| [Spectrum 5.1](https://collectionstrust.org.uk/spectrum/)| Keine Entsprechung | Nicht zutreffend | 