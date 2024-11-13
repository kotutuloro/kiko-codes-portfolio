function Section({ id, ChildComponent, childProps }) {
  return (
    <section
      id={id}
      className="mx-4 my-6 overflow-hidden rounded-2xl border-b-2 border-t border-neutral-950 p-6 shadow-section sm:mx-8"
    >
      <ChildComponent {...childProps} />
    </section>
  );
}

export default Section;
