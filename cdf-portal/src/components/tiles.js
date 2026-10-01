import React from 'react';
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
  required:    {label: 'Pflicht',         cls: 'label-required',    color: 'var(--level-required)'},
  conditional: {label: 'Bedingte Pflicht', cls: 'label-conditional', color: 'var(--level-conditional)'},
  recommended: {label: 'Empfohlen',             cls: 'label-recommended', color: 'var(--level-recommended)'},
  optional:    {label: 'Optional',              cls: 'label-optional',    color: 'var(--level-optional)'},
};

/* Einzelnes Label, z. B. auf Element-Seiten:
 * <LevelBadge level="required" /> */
export function LevelBadge({level}) {
  const l = LEVELS[level];
  if (!l) return null;
  return <span className={`label ${l.cls}`}>{l.label}</span>;
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