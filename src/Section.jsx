function Section({ id, ChildComponent }) {
  return (
    <section id={id} className='shadow-section overflow-hidden border-t border-b-2 border-neutral-950 rounded-2xl mx-8 my-6 p-6'>
      <ChildComponent />
    </section>
  )
}

export default Section
