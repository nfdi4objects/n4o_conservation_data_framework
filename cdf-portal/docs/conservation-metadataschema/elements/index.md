---
title: Metadatenelemente
sidebar_position: 3
---

import {StatGrid, CardGrid, LevelGrid} from '@site/src/components/tiles';

# Metadatenelemente

Das KuR-Metadatenschema definiert eine Reihe von Elementen, mit denen sämtliche relevanten Informationen aus dem Konservierungs- und Restaurierungsprozess strukturiert erfasst werden können. Wie bei den [Sektionen](/conservation-metadataschema/sections/) wurde jedem Element ein Verpflichtungsgrad zugewiesen, der angibt, ob seine Erfassung verpflichtend, bedingt verpflichtend, empfohlen oder optional ist.

<LevelGrid items={[
  {level: 'required', 
   text: 'Umfasst jene Informationen, ohne die eine vollständige und für Dritte nachvollziehbare Dokumentation nicht möglich ist. Diese Elemente bilden den eigentlichen Minimaldatensatz im engeren Sinne.'},
  {level: 'conditional',
   text: 'Bezeichnet Elemente, die nur unter bestimmten Umständen verpflichtend auszufüllen sind, z.b. nur wenn eine bestimmte Tätigkeit durchgeführt wurde.'},
  {level: 'recommended',
   text: 'Bezieht sich auf Informationen, die aus fachlicher Sicht als wünschenswert deklariert werden. Ihre Erfassung verbessert die Qualität und Nachnutzbarkeit der Dokumentation erheblich, ohne dass ihr Fehlen das grundlegende Verständnis der konservatorisch-restauratorischen Dokumentation beeinträchtigt.'},
  {level: 'optional',
   text: 'Dient der Erweiterung des Schemas für spezifische Fachdisziplinen oder besondere Arbeitskontexte. Diese Elemente zeigen exemplarisch auf, wie das Schema kontextspezifisch ausgebaut werden kann und speisen sich hauptsächlich aus den Antworten der durchgeführten Community-Umfrage.'},
]} />

:::caution Sonderfall der Bedingten Pflicht
Der zweite Anwendungsfall der *bedingten Pflicht* betrifft Informationen, die grundsätzlich für eine qualitätvolle Dokumentation erwartet werden (die also über eine bloße Empfehlung hinausgehen), in der realen Praxis jedoch zum Zeitpunkt der Erfassung häufig nicht (mehr) verfügbar sind (z.B. bei der Retrodigitalisierung analoger Berichte). Die Kategorie schafft damit eine Balance zwischen dem inhaltlichen Anspruch an eine vollständige, digitale Dokumentation und den aktuellen realen Gegebenheiten bisheriger Dokumentationspraktiken.
:::

Pflichtelemente sichern die Mindestinformationen, während optionale Elemente erste Beispiele für eine fachspezifische Erweiterung aufzeigen. Das Schema versteht sich nicht als abgeschlossenes, starres System, sondern als erweiterbarer Rahmen. Institutionen und Fachbereiche *können* und *sollen* das Schema um zusätzliche, für ihre spezifischen Bedürfnisse relevante Elemente ergänzen, solange die durch die Pflichtelemente definierten Minimalangaben enthalten bleiben. 

Die folgenden Seiten erläutern die einzelnen Elemente mit ihren Definition, die ihnen zugrunde liegende Modellierungslogik, Hinweise zur praktischen Erfassung sowie Entsprechungen in anderen Schemata.

Neben der inhaltlichen Beschreibung ist jedem Element eine URI zugeordnet, die auf einen Eintrag in der **Conservation Metadata Terminology** verweist. Dabei handelt es sich um ein kontrolliertes Vokabular, das die Bezeichnungen der Elemente selbst — und damit perspektivisch die Feldbezeichnungen in Datenbanksystemen — standardisiert und eindeutig referenzierbar macht. Die URI dient also nicht der Erläuterung des Elements, sondern seiner maschinenlesbaren Identifikation als Begriff. Was es mit der Conservation Metadata Terminology genauer auf sich hat, wird im Abschnitt [Methodik und Entwicklungsprozess](/conservation-metadataschema/background/development-process) erklärt.

## Modellierungshinweis: Bewusste Abweichungen von der Event-Struktur

Wie im Abschnitt [Konzeptionelle Meilensteine](/conservation-metadataschema/background/development-process#konzeptionelle-meilensteine) dargestellt, folgt die Modellierung der Elemente in einigen Bereichen bereits der ereignisbasierten Logik von LIDO und CIDOC CRM. In der aktuellen 1.0 Version ist diese Modellierung jedoch noch nicht überall konsequent umgesetzt. 

Dieser Bruch ist uns bewusst, und wir haben ihn in Kauf genommen. Restaurierungsberichte entstehen bislang überwiegend als Freitexte, häufig in gängigen Textprogrammen wie Microsoft Word. Ein direkter Sprung von dort in eine vollständig event-basierte XML-Modellierung wäre für viele Restaurator:innen ein großer Schritt und könnte die Akzeptanz des Schemas gefährden. Elemente wie [Schöpfer:in](/conservation-metadataschema/elements/creator-object), [Zuständige Person](/conservation-metadataschema/elements/responsible-person) oder [Herstellungstechnik](/conservation-metadataschema/elements/manufacturing-technology) greifen deshalb etablierte Dokumentationspraktiken auf. Sie geben diesen Informationen eine strukturierte, maschinenlesbare Form, ohne bereits das vollständige Ereignismodell vorauszusetzen.

Wir verstehen diese Elemente als Kompromiss der aktuellen Version und als Zwischenschritt. Bei der Weiterentwicklung in Richtung LIDO können sie dann in die Event-Struktur überführt werden. Weil die Inhalte schon jetzt strukturiert erfasst werden, sind sie für diese Überführung gut vorbereitet.

