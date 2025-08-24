export default function Section({ title, children, id, classname}) {
  return (
    <section id={id} className={classname}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
