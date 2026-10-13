---
title: Methodik und Entwicklungsprozess
sidebar_position: 2
---
import { StatGrid, CardGrid, NormList, PhaseStrip, Timeline, ScopeGrid } from '@site/src/components/tiles';

# Methodik und Entwicklungsprozess
:::note
*Das KuR-MDS entstand in einem iterativen, community-getriebenen Prozess — empirisch fundiert, normativ verankert und konsequent auf Interoperabilität ausgerichtet.*
:::

---

## Grundlagen und Bezugssysteme

Das Metadatenschema basiert auf einer systematischen Analyse und Synthese bestehender Dokumentationspraktiken, etablierter Normen sowie den Erkenntnissen einer vorgeschalteten [Online-Umfrage](https://doi.org/10.5281/zenodo.17475354) unter Fachpersonen aus unterschiedlichen institutionellen und disziplinären Kontexten der Konservierung-Restaurierung.

### Umfrageergebnisse als empirische Grundlage

Die hohe Übereinstimmung der Teilnehmenden bei zentralen Dokumentationsinhalten bildete den Ausgangspunkt für die Pflichtfelder des Schemas, während die Unterschiede die Notwendigkeit flexibler optionaler Erweiterungen verdeutlichten.

<StatGrid items={[
  {value: '95,6 %', label: 'Beschreibung durchgeführter Methoden'},
  {value: '92,9 %', label: 'Erfassung von Schadensphänomenen'},
  {value: '92,4 %', label: 'Verwendete Materialien'},
]} />

Als weitere empirische Grundlage dienten die Dokumentationssysteme der in der TWG vertretenen Einrichtungen sowie publizierte Vorgaben unterschiedlicher Landesdenkmalämter. Der Vergleich dieser Systeme bestätigte den Ansatz, gemeinsame Kernelemente als Pflichtfelder zu definieren und spezifische Schwerpunkte über optionale Felder zu ermöglichen.

---

### Normative Bezugssysteme

<NormList items={[
  {badge: 'DIN EN 16095', text: 'Terminologische Grundlage für zentrale Begriffe wie ‘Kennzeichnungsnummer’, ‘Umgebungsbedingungen’ und ‘Behandlung/Eingriff’'},
  {badge: 'ISO 8601',     text: 'Empfohlener Standard für alle zeitbezogenen Angaben im Format YYYY-MM-DD'},
  {badge: 'MDS v1.1',    text: 'Minimaldatensatz-Empfehlung der AG Minimaldatensatz (Deutscher Museumsbund) als Referenz für Objektinformationen'},
  {badge: 'LIDO und CIDOC CRM', text: 'Maßgebliche Datenstandards des Kulturerbebereichs für die langfristige Anschlussfähigkeit und Interoperabilität'},
  {badge: 'DataCite Metadataschema', text: 'Übergeordneter NFDI-Metadatenstandard für die einheitliche Beschreibung von Forschungsdaten'},
]} />
 
Das Schema entstand im Rahmen von **NFDI4Objects** mit dem übergeordneten Ziel, Forschungsdaten zu materiellen Kulturerbeobjekten auffindbar, zugänglich und nachnutzbar zu machen. Die Anschlussfähigkeit an [LIDO](https://lido-schema.org) und [CIDOC CRM](https://cidoc-crm.org/) war daher von Beginn an ein zentrales Entwicklungsziel.

Auch die in der NFDI disziplinübergreifende als Standard festgelegten Metadatenschemata wie [DataCite](https://doi.org/10.14454/mzv1-5b55) oder [schema.org](https://schema.org/) wurden von Beginn an miteinbezogen. 

---

## Entwicklungsprozess

Der iterative, kollaborative Prozess zur Entwicklung des KuR-MDS in der Temporary Working Group (TWG) erfolgte von **Dezember 2024 bis Januar 2026** im kontinuierlichen Austausch mit der Fachcommunity. Die Entwicklung wurde bewusst zweistufig angelegt:

<PhaseStrip phases={[
  {
    num: 'Phase 1 — abgeschlossen',
    name: 'Inhaltlicher Dokumentationsstandard',
    desc: 'Definition der Metadatenelemente, Sektionen und Verpflichtungsgrade — unabhängig von der technischen Umsetzung',
  },
  {
    num: 'Phase 2 — geplant',
    name: 'Interoperables Austauschformat',
    desc: 'Erarbeitung eines community-getragenen Austauschformats, z. B. eines LIDO-Anwendungsprofils',
  },
]} />

### Chronologie


<Timeline items={[
  {
    date: 'Dezember 2024',
    title: 'Gründung der Temporary Working Group',
    text: 'Zusammentragen der Ausgangselemente in einem gemeinsamen Arbeitsdokument auf Basis der Umfrageergebnisse und des Normenvergleichs. Systematische Kategorisierung in thematische Sektionen.',
    milestone: true,
  },
  {
    date: 'Mai 2025',
    title: 'Erste Vorstellung im NFDI4Objects Community Cluster',
    text: 'Die erste Präsentation im CC Conservation Science brachte zwei wesentliche Erkenntnisse: das Google-Sheet-Arbeitsdokument war für die Community schwer zugänglich, und die inhaltliche Diskussion führte zu zentralen konzeptionellen Weichenstellungen, u. a. zur ereignisbasierten Modellierung der Zustandserfassung sowie zur Ergänzung von "Gefährdungsbewertung" und "Monitoring".',
    milestone: true,
  },
  {
    date: 'Juni 2025',
    title: 'Entwicklung der Vermittlungswerkzeuge',
    text: 'Als direkte Reaktion auf das Community-Feedback entstanden die Conservation Metadata Terminology (SKOS-Vokabular mit URIs) und die Conservation Documentation Mockup-Page als interaktive Eingabeoberfläche.',
    milestone: true,
  },
  {
    date: '2025–2026',
    title: 'Fortlaufende Community-Einbindung und Weiterentwicklung',
    text: 'Weitere Vorstellungen des bisherigen Entwurfs auf verschiedenen Veranstaltungen, darunter unter anderem dem NFDI4Objects Community Meeting 2025, der Herbsttagung der FG Dokumentation des Deutschen Museumsbundes, dem SODa-Forum 2025, dem SODa BarCamp 2026 und der HMC Conference 2026. Sowie bilaterale Gespräche und direktes Feedback per Mail. Fortlaufende Arbeitstreffen der TWG zur Weiterentwicklung und Einarbeitung des Feedbacks',
    milestone: true,
  },
  {
    date: 'Februar 2026',
    title: 'Abschluss Phase 1 & Start Schreibprozess der Dokumentation',
    text: 'Finalisierung der Version 1.0 des inhaltlichen Dokumentationsstandards als community-getragenes Ergebnis. Beginn des Schreibprozesses, um den bisherigen Prozess und die Ergebnisse als NFDI4Objects Common (schriftliche Dokumentation) zu publizieren',
    milestone: true,
  },
  {
    date: 'September 2026',
    title: 'Publikation der Dokumentation in Kommentierungsphase',
    text: 'Veröffentlichung der umfassenden Dokumentation im NFDI4Objects Community Hub und Start der vierwöchigen Kommentierungsphase als "offenes Community-Review". Parallel Vorstellung des Schemas auf weiteren Veranstaltungen.',
    milestone: true,
  },
  {
    date: 'Oktober 2026',
    title: 'Ende der Kommentierungsphase und Überarbeitung als "Final Draft"',
    text: 'Einarbeitung der eingegangen Kommentare und Rückmeldung in bisherigen Entwurf der Dokumentation. Einreichung der finalen Version in Stufe 2 des NFDI4Objects Commons-Prozess als "Konsolidierter Beitrag zur Empfehlung".',
    milestone: false,
  },
  {
    date: 'Ende 2026',
    title: 'Beschluss des Metadatenschemas als offizieller NFDI4Objects Standard',
    text: 'Nach erfolgreicher Bewertung im NFDI4Objects Commons Prozess übergang in Status als offizieller Standard. Publikation der finalen Version auf Zenodo. Grundlage für die folgende Entwicklung eines interoperablen Austauschformats.',
    milestone: false,
  },
  {
    date: 'Januar 2027',
    title: 'Start Phase 2 - Weiterentwicklung zum Austauschformat',
    text: 'Tba',
    milestone: false,
  },
]} />
 
---

## Konzeptionelle Meilensteine

### Ereignisbasierte Modellierung

:::note
Ein wesentlicher Meilenstein war die Entscheidung, die ereignisbasierte Modellierung von LIDO und CIDOC CRM bereits in der inhaltlichen Strukturierungsphase zu übernehmen. Informationen werden nicht als statische Objekteigenschaften erfasst, sondern als Ereignisse mit Zeitpunkt, Akteur und Ort, etwa eine Ausgrabung, eine Untersuchung oder eine Erhaltungsmaßnahme.
 
Dieser Ansatz ist für die Konservierung-Restaurierung besonders geeignet, da Restaurator:innen biespielsweise Objektzustände nicht nur vor einer Restaurierung, sondern auch währenddessen, danach oder im Rahmen von Monitoring-Aktivitäten dokumentieren. Die TWG entschied sich daher für ein einheitliches Grundschema für die Zustandserfassung, das den Zeitpunkt und den Hintergrund der Erfassung jeweils explizit ausweist und damit separate Schemata für jeden Erfassungszeitpunkt überflüssig macht.
:::

### Vermittlungswerkzeuge

<CardGrid items={[
  {
    icon: '🗂️',
    title: 'Conservation Metadata Terminology',
    text: <>SKOS-basiertes Vokabular mit eindeutigen URI-Identifikatoren je Element. Nutzende können Datenbankfelder intern beliebig benennen, solange sie eine URI-Referenz hinterlegen — Interoperabilität bleibt beim Export erhalten.{' '}
      <a href="https://www.w3id.org/conservation/terms/metadata">Zur Terminology →</a></>,
  },
  {
    icon: '🖥️',
    title: 'Conservation Documentation Mockup-Page',
    text: <>Simulierte Eingabeoberfläche mit beispielhaften Datenwerten. Elementbezeichnungen verlinken direkt auf die Conservation Metadata Terminology. Diente als Diskussionsgrundlage in der TWG und als Vermittlungsinstrument in die Community.{' '}
      <a href="https://conservationdata.github.io/docu/#/">Zur MockupPage →</a></>,
  },
]} />
 
---

## Inhaltliche Abgrenzung

Das KuR-MDS konzentriert sich auf die Dokumentation von Prozessen im Umfeld konservatorisch-restauratorischer Maßnahmen, einschließlich solcher, die über reine Objekteingriffe hinausgehen, in der Praxis jedoch häufig von Restaurator:innen durchgeführt werden (z. B. Untersuchungen).
 
<ScopeGrid
  inItems={[
    'Konservatorisch-restauratorische Prozesse und Maßnahmen',
    'Zustandserfassung zu verschiedenen Zeitpunkten',
    'Untersuchungen und Analysen',
    'Monitoring und Gefährdungsbewertung',
    'Relevante Objektdaten als Sekundärinformation',
  ]}
  outItems={[
    'Museale Verwaltungsdaten (Erwerbsgeschichte, Versicherung, Ausstellungslogistik)',
    'Archäologische oder kunsthistorische Primärdaten',
    'Daten, für die bereits eigenständige Standards existieren (MDS, ADeX, SPECTRUM)',
  ]}
/>
 
Bestimmte Objektdaten, z.B. zur Objektansprache, Herkunft oder Datierung werden von Restaurator:innen als essenziell für eine qualitätvolle Dokumentation wahrgenommen, stammen jedoch aus anderen Fachdisziplinen. Das KuR-MDS benennt daher, welche dieser Sekundärdaten relevant sind und mit welcher Priorität sie erfasst werden sollten.
 