---
layout: default
title: Basiswissen Metadaten
parent: Hintergrund und Konzeption
nav_order: 3
---

# Basiswissen Metadaten

Diese Seite bietet eine kompakte Einführung in zentrale Begriffe der digitalen Arbeit mit Metadaten. Die Erklärungen sind dabei bewusst praxisnah und auf die Arbeit in der Restaurierung zugeschnitten. 

---

## Metadaten – was sie für die Arbeit in der Restaurierung bedeuten

**Metadaten** sind Informationen über Daten. Sie definieren und kategorisieren Daten und liefern somit zusätzliche Informationen, um was für eine "Art" von Informationen es sich handelt. Also z.B. in welchem Zusammenhang die beschriebene Information zu einer Datei oder in unserem Fall zu einem Objekt der realen Welt steht. 

> Metadaten helfen, Informationen systematisch zu erfassen, nachzuvollziehen und wiederzufinden.

### Metadatenelement und Datenwert

Ein **Metadatenelement** bezeichnet die Kategorie oder das Feld, in dem eine Information erfasst wird.  
Der **Datenwert** ist die konkrete Angabe, die in dieses Feld eingetragen wird.

**Beispiel:**
- Metadatenelement: *Erfassungsdatum (Zustandserfassung)*  
- Datenwert: *12.03.2024*

- Metadatenelement: *Zuständige Person (Untersuchung)*  
- Datenwert: *Dr. Maria Beispiel*

Diese Unterscheidung ist zentral für die Struktur des Schemas.  
Das Schema definiert die Elemente – die restauratorische Praxis liefert die Datenwerte.

Eine strukturierte Erfassung dieser Informationen erhöht die Vergleichbarkeit, Auffindbarkeit und Auswertbarkeit der Daten.

---
## Was ist ein Metadatenschema?
Ein Metadatenschema legt fest, welche Informationen erfasst werden sollen und wie diese strukturiert sind. Es bietet einen Orientierungsrahmen, zur Erstellung von  
konsistent, vergleichbaren und nachvollziehbaren Daten.

**Praxisbeispiel:**
- In der Sektion "Zustandserfassung" des KuR-Metadatenschema ist beispielsweise definiert, dass mindestens das Erfassungsdatum, die zuständige Person sowie die Zustandsbeschreibung, mit Angaben zum physischen Objektzustand und den beobachteten Schadensphänomenen, erfasst werden müssen. Es bietet Restaurator:innen damit für ihre praktische Arbeit am Objekt einen Leitfaden, an dem sie sich bei der Untersuchung des Objektes zur Feststellung des Zustandes orientieren können. Gleichzeitig legt das Schema fest, dass z.B. das Datum nach *ISO 8601* in der Form *YYYY-MM-DD* erfasst werden soll. Auf diese Weise schafft das Schema eine gemeinsame Basis für eine fach- und institutsübergreifend einheitliche Dokumentation. 

---

## Austauschformate

Ein Austauschformat beschreibt, wie strukturierte Daten technisch kodiert und zwischen Systemen übermittelt werden.

Während ein Metadatenschema festlegt, *welche* Informationen erfasst werden und wie sie logisch strukturiert sind, definiert ein Austauschformat die konkrete technische Darstellung.

Im Kulturerbe-Bereich sind XML-basierte Formate üblich, insbesondere [**LIDO (Lightweight Information Describing Objects)**](https://lido-schema.org/), das den standardisierten Austausch von Objektdaten zwischen Museen, Sammlungen und Aggregationsplattformen ermöglicht.

Das KuR-Metadatenschema bildet die konzeptionelle Grundlage für eine technische Umsetzung. Es definiert die inhaltliche Struktur, auf deren Basis sich die Daten in Austauschformate wie LIDO überführen lassen.

Durch diese Vorgehensweise wird die **Anschlussfähigkeit an bestehende Datenstandards** gewährleistet, während die Dokumentation praxisnah bleibt.

---
