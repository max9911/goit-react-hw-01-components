import Element from './element';
import css from './statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.section}>
      {title.length > 0 && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stats}>
        {stats.map(item => (
          <Element
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          ></Element>
        ))}
      </ul>
    </section>
  );
}
