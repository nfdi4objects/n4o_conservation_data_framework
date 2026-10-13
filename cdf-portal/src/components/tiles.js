import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './tiles.module.css';

/* ---------------------------------------------------------------
 * Kennzahlen-Kacheln (z. B. Umfrageergebnisse)
 *
 * <StatGrid items={[
 *   {value: '240', label: 'Teilnehmende'},
 *   {value: '48,8 %', label: 'dokumentieren hybrid'},
 * ]} />
 * ------------------------------------------------------------- */
export function StatGrid({items}) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <div key={item.label} className={styles.stat}>
          <span className={styles.statValue}>{item.value}</span>
          <span className={styles.statLabel}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------
 * Inhalts-Kacheln mit Icon, Titel und Text (z. B. Zielgruppe)
 *
 * <CardGrid items={[
 *   {icon: '🖌️', title: 'Restaurator:innen', text: '…'},
 * ]} />
 * ------------------------------------------------------------- */
export function CardGrid({items}) {
  return (
    <div className={`${styles.grid} ${styles.gridWide}`}>
      {items.map((item) => (
        <div key={item.title} className={styles.card}>
          {item.icon && <div className={styles.cardIcon}>{item.icon}</div>}
          <h4 className={styles.cardTitle}>{item.title}</h4>
          {item.text && <p className={styles.cardText}>{item.text}</p>}
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------
 * Verpflichtungsgrade
 * ------------------------------------------------------------- */
const LEVELS = {
  required: {
    cls: 'label-required',
    color: 'var(--level-required)',
    label: {de: 'Pflicht', en: 'Mandatory'},
  },
  conditional: {
    cls: 'label-conditional',
    color: 'var(--level-conditional)',
    label: {de: 'Bedingte Pflicht', en: 'Conditional'},
  },
  recommended: {
    cls: 'label-recommended',
    color: 'var(--level-recommended)',
    label: {de: 'Empfohlen', en: 'Recommended'},
  },
  optional: {
    cls: 'label-optional',
    color: 'var(--level-optional)',
    label: {de: 'Optional', en: 'Optional'},
  },
};

export function LevelBadge({level}) {
  const {i18n} = useDocusaurusContext();
  const l = LEVELS[level];
  if (!l) return null;
  const text = l.label[i18n.currentLocale] ?? l.label.de;
  return <span className={`label ${l.cls}`}>{text}</span>;
}

export function LevelGrid({items}) {
  return (
    <div className={styles.grid}>
      {items.map(({level, text, highlight}) => (
        <div
          key={level}
          className={`${styles.level} ${highlight ? styles.levelHighlight : ''}`}
          style={{'--level-accent': LEVELS[level]?.color}}
        >
          <LevelBadge level={level} />
          {text && <p className={styles.levelText}>{text}</p>}
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------
 * NEU: Norm-Liste (Badge + Beschreibungstext)
 *
 * <NormList items={[
 *   {badge: 'DIN EN 16095', text: 'Terminologische Grundlage…'},
 *   {badge: 'ISO 8601',     text: 'Datumsformat YYYY-MM-DD'},
 * ]} />
 * ------------------------------------------------------------- */
export function NormList({items}) {
  return (
    <div className={styles.normList}>
      {items.map((item) => (
        <div key={item.badge} className={styles.normItem}>
          <span className={styles.normBadge}>{item.badge}</span>
          <span className={styles.normText}>{item.text}</span>
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------
 * NEU: Phasen-Streifen (Phase 1 → Phase 2 → …)
 *
 * <PhaseStrip phases={[
 *   {num: 'Phase 1 — abgeschlossen', name: 'Inhaltlicher Standard', desc: '…'},
 *   {num: 'Phase 2 — geplant',       name: 'Austauschformat',       desc: '…'},
 * ]} />
 * ------------------------------------------------------------- */
export function PhaseStrip({phases}) {
  return (
    <div className={styles.phaseStrip}>
      {phases.map((phase, i) => (
        <React.Fragment key={phase.name}>
          <div className={styles.phaseBlock}>
            <div className={styles.phaseNum}>{phase.num}</div>
            <div className={styles.phaseName}>{phase.name}</div>
            {phase.desc && <div className={styles.phaseDesc}>{phase.desc}</div>}
          </div>
          {i < phases.length - 1 && (
            <div className={styles.phaseArrow}>→</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------
 * NEU: Timeline
 *
 * <Timeline items={[
 *   {date: 'Dez. 2024', title: 'Gründung TWG', text: '…', milestone: false},
 *   {date: 'Mai 2025',  title: 'Erste Vorstellung', text: '…', milestone: true},
 * ]} />
 * ------------------------------------------------------------- */
export function Timeline({items}) {
  return (
    <div className={styles.timeline}>
      {items.map((item) => (
        <div key={item.title} className={styles.timelineItem}>
          <div
            className={`${styles.timelineDot} ${item.milestone ? styles.timelineDotMilestone : ''}`}
          />
          <div className={styles.timelineContent}>
            <div className={styles.timelineDate}>{item.date}</div>
            <div className={styles.timelineTitle}>{item.title}</div>
            {item.text && <p className={styles.timelineBody}>{item.text}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------
 * NEU: Scope-Grid (Im Fokus / Ausgeklammert)
 *
 * <ScopeGrid
 *   inItems={['Konservatorische Prozesse', 'Zustandserfassung']}
 *   outItems={['Museale Verwaltungsdaten', 'Kunsthistorische Primärdaten']}
 * />
 * ------------------------------------------------------------- */
export function ScopeGrid({inLabel = 'Im Fokus', outLabel = 'Bewusst ausgeklammert', inItems, outItems}) {
  return (
    <div className={styles.scopeGrid}>
      <div className={`${styles.scopeCol} ${styles.scopeColIn}`}>
        <div className={styles.scopeColHeading}>{inLabel}</div>
        <ul className={styles.scopeList}>
          {inItems.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
      <div className={`${styles.scopeCol} ${styles.scopeColOut}`}>
        <div className={styles.scopeColHeading}>{outLabel}</div>
        <ul className={styles.scopeList}>
          {outItems.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}