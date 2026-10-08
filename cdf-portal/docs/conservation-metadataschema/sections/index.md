---
title: Sektionen
sidebar_position: 2
---

import {StatGrid, CardGrid, LevelGrid} from '@site/src/components/tiles';

# Die thematischen Sektionen des KuR-Metadatenschemas

Das KuR-Metadatenschema gliedert sich in **zehn thematische Sektionen**, die verschiedene Prozesse im Umgang mit Kunst- und Kulturgut im Kontext konservatorisch-restauratorischer Arbeiten widerspiegeln. Innerhalb der Sektionen werden Informationen stellenweise hierarchisch strukturiert, wobei diese Struktur nicht nur eine visuelle Gliederung abbildet, sondern inhaltliche Beziehungen zwischen den erfassten Informationen herstellt. Übergeordnete Elemente können dabei entweder ausschließlich der inhaltlichen Gruppierung untergeordneter Informationen dienen oder selbst einen Datenwert erfassen, der durch weitere untergeordnete Elemente näher beschrieben wird. 

Ein weiteres zentrales Gestaltungsprinzip des KuR-MDS ist seine modulare Struktur. Nicht jede Restaurierungsdokumentation erfordert immer alle Sektionen, da nicht alle konservatorisch-restauratorischen Arbeiten dieselben Handlungen umfassen. 

Diesem Gedanken folgend sind die Sektionen in unterschiedliche **Verpflichtungsgrade** unterteilt:

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

Dasselbe Prinzip wiederholt sich auf der Ebene der [Metadatenelemente](/conservation-metadataschema/elements/). Jede Sektion bündelt ein Set zusammengehöriger Elemente, die ihrerseits in verpflichtend, bedingt verpflichtend, empfohlen und optional gestaffelt sind. Pflichtelemente sichern die Mindestinformationen, während optionale Elemente erste Beispiele für eine fachspezifische Erweiterung aufzeigen. Das Schema versteht sich nicht als abgeschlossenes, starres System, sondern als erweiterbarer Rahmen. Institutionen und Fachbereiche *können* und *sollen* das Schema um zusätzliche, für ihre spezifischen Bedürfnisse relevante Elemente ergänzen, solange die durch die Pflichtelemente definierten Minimalangaben enthalten bleiben. 

:::caution Sonderfall der Bedingten Pflicht
Der zweite Anwendungsfall der *bedingten Pflicht* betrifft Informationen, die grundsätzlich für eine qualitätvolle Dokumentation erwartet werden (die also über eine bloße Empfehlung hinausgehen), in der realen Praxis jedoch zum Zeitpunkt der Erfassung häufig nicht (mehr) verfügbar sind (z.B. bei der Retrodigitalisierung analoger Berichte). Die Kategorie schafft damit eine Balance zwischen dem inhaltlichen Anspruch an eine vollständige, digitale Dokumentation und den aktuellen realen Gegebenheiten bisheriger Dokumentationspraktiken.
:::

Auf diese Weise lässt sich das Schema wie ein Baukasten je nach Anwendungsfall zusammenstellen und erweitern. Diese Flexibilität erlaubt es, sowohl den gemeinsamen Nenner für übergreifende Vergleichbarkeit und Nachnutzbarkeit zu sichern, als auch die notwendige fachliche Spezifikation und Differenzierung zu ermöglichen. Das KuR-MDS bietet somit einen Orientierungsrahmen für eine strukturierte Erfassung und Beschreibung der unterschiedlichen Arbeitsprozesse und Ergebnisse.

