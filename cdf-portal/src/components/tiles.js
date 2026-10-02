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
 * icon und text sind optional.
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
 * Nutzt die globalen Klassen .label / .label-* und die Variablen
 * --level-* aus src/css/custom.css.
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

/* Einzelnes Label, z. B. auf Element-Seiten:
 * <LevelBadge level="required" />
 * Der Text richtet sich automatisch nach der aktuellen Sprache. */
export function LevelBadge({level}) {
  const {i18n} = useDocusaurusContext();
  const l = LEVELS[level];
  if (!l) return null;
  const text = l.label[i18n.currentLocale] ?? l.label.de;
  return <span className={`label ${l.cls}`}>{text}</span>;
}

/* Übersicht aller Grade als Kacheln:
 * <LevelGrid items={[
 *   {level: 'required', highlight: true, text: '…'},
 *   {level: 'conditional', text: '…'},
 * ]} /> */
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