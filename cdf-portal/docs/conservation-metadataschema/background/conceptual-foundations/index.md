---
title: Konzeptionelle Grundlagen
sidebar_position: 1
---

import Link from '@docusaurus/Link';
import { CardGrid, NormList, ScopeGrid } from '@site/src/components/tiles';

# Konzeptionelle Grundlagen
:::note
*Was bedeuten FAIR-Prinzipien, Metadaten oder kontrollierte Vokabulare und was haben sie mit der täglichen Dokumentationspraxis in der Konservierung-Restaurierung zu tun? Dieser Bereich vermittelt das nötige Grundwissen, um das KuR-Metadatenschema und seine zentralen Modellierungsentscheidungen nachvollziehen zu können.*
:::

---

## Worum es in diesem Bereich geht

Das KuR-Metadatenschema greift Konzepte des [digitalen Datenmanagements](/conservation-metadataschema/background/conceptual-foundations/glossar#forschungsdatenmanagement) und Prinzipien von [Linked Open Data](/conservation-metadataschema/background/conceptual-foundations/glossar#linked-open-data) auf, die in der Konservierung-Restaurierung bisher kaum breite Anwendung gefunden haben. Dieser Bereich erläutert daher die wichtigsten Begriffe und Grundgedanken, auf denen das Schema aufbaut, und richtet sich insbesondere an Personen, die mit diesen Themen bisher noch wenig vertraut sind.

:::tip Bereits vertraut mit FDM und Linked Data?
Wer sich mit diesen Konzepten bereits auskennt, kann diesen Bereich überspringen und unter [Methodik und Entwicklungsprozess](/conservation-metadataschema/background/development-process) direkt mehr über die Genese des Schemas erfahren.
:::

---

## Themen im Überblick

<CardGrid items={[
  {
    icon: '🧭',
    title: 'FAIR-Prinzipien',
    text: <>Die vier Leitprinzipien für gutes Forschungsdatenmanagement: Daten sollen auffindbar, zugänglich, interoperabel und nachnutzbar sein und was das konkret für eine Restaurierungsdokumentation bedeutet.{' '}
      <Link to="/conservation-metadataschema/background/conceptual-foundations/fair_principles">Zu den FAIR-Prinzipien →</Link></>,
  },
  {
    icon: '🏷️',
    title: 'Metadaten und Metadatenschema',
    text: <>Was sind Metadaten, wozu dient ein Metadatenschema und wie unterscheiden sich inhaltliche Standards von technischen Austauschformaten?{' '}
      <Link to="/conservation-metadataschema/background/conceptual-foundations/metadata-basics">Zum Basiswissen Metadaten und Metadatenschema →</Link></>,
  },
  {
    icon: '📚',
    title: 'Kontrollierte Vokabulare',
    text: <>Warum einheitliche Begriffe Daten vergleichbar, durchsuchbar und maschinenlesbar machen und wie technische Möglichkeiten bei der Erhaltung sprachlicher Vielfalt helfen.{' '}
      <Link to="/conservation-metadataschema/background/conceptual-foundations/vocabularies">Zur Einführung in kontrollierte Vokabulare →</Link></>,
  },
  {
    icon: '🔗',
    title: 'Eindeutige Identifikatoren',
    text: <>Wie persistente Identifikatoren wie URIs, DOIs oder ORCIDs Objekte, Personen und Begriffe dauerhaft und eindeutig referenzierbar machen.{' '}
      <Link to="/conservation-metadataschema/background/conceptual-foundations/uris">Zur Erklärung von Identifikatoren →</Link></>,
  },
  {
    icon: '📖',
    title: 'Glossar',
    text: <>Kurze Erläuterungen zu den wichtigsten Fachbegriffen aus Forschungsdatenmanagement, Linked Open Data und semantischer Modellierung zum schnellen Nachschlagen.{' '}
      <Link to="/conservation-metadataschema/background/conceptual-foundations/glossar">Zum Glossar →</Link></>,
  },
]} />

---

## Bekannte Prinzipien, neues Format

Viele der hier vorgestellten Konzepte sind vom Grundsatz her in der Restaurierungspraxis längst vertraut; sie werden im digitalen Raum lediglich mit anderem Blickwinkel und maschinenlesbar umgesetzt.

<NormList items={[
  {badge: 'FAIR-Prinzipien', text: 'Eine Dokumentation, die auch Jahrzehnte später noch gefunden, verstanden und weiterverwendet werden kann – ein Anspruch, den gute Restaurierungsdokumentation seit jeher verfolgt.'},
  {badge: 'Metadatenschema', text: 'Entspricht den Feldern eines Dokumentationsformulars oder Zustandsprotokolls: Es legt fest, welche Angaben zu einem Objekt oder einer Maßnahme erfasst werden.'},
  {badge: 'Kontrollierte Vokabulare', text: 'Bereits weitreichend in Form von Wörterbüchern, Fachglossaren und einheitlichen Wortlisten umgesetzt: Einheitliche Begriffe statt individueller Formulierungen machen Angaben vergleichbar und durchsuchbar.'},
  {badge: 'Identifikatoren', text: 'Funktionieren wie eine Inventarnummer; nur weltweit eindeutig und dauerhaft auflösbar, auch über Institutionsgrenzen hinweg.'},
]} />

---

## Anspruch und Grenzen

Der Anspruch dieses Bereichs ist keinesfalls eine erschöpfende Darstellung der umfangreichen Themengebiete des Forschungsdatenmanagements und der semantischen Modellierung. Er soll stattdessen gezielt so viel Grundverständnis vermitteln, wie zur Nachvollziehbarkeit der Struktur des KuR-MDS erforderlich ist.

<ScopeGrid
  inItems={[
    'Zentrale Begriffe des Forschungsdatenmanagements',
    'Grundgedanken von Linked Open Data und semantischer Modellierung',
    'Bezüge zur Dokumentationspraxis in der Konservierung-Restaurierung',
    'Verständnisgrundlage für den Aufbau des KuR-MDS',
  ]}
  outItems={[
    'Erschöpfende Darstellung des Forschungsdatenmanagements',
    'Technische Implementierung in Datenbanken oder Austauschformaten',
    'Vertiefte Einführung in Ontologien, RDF oder Abfragesprachen',
  ]}
/>

---

## Weiterführende Ressourcen

Für eine vertiefende Auseinandersetzung mit den Themen sei auf ausführliche Ressourcen verwiesen:

- [Praxishandbuch Forschungsdatenmanagement](https://doi.org/10.1515/9783110657807)
- [Linked Data: Evolving the Web into a Global Data Space](http://linkeddatabook.com/editions/1.0/)
- themenspezifische Angebote der unterschiedlichen NFDI-Konsortien, wie beispielsweise die [Handreichung für ein FAIRes Management kulturwissenschaftlicher Forschungsdaten](https://nfdi4culture.de/id/E3625) von [NFDI4Culture](https://nfdi4culture.de/index.html) oder der [NFDI4Objects Qualification Service](https://www.nfdi4objects.net/services/nfdi4objects-qualification/)