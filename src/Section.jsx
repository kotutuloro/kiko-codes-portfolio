function Section({ id, ChildComponent, childProps }) {
  return (
    <section id={id} className='shadow-section overflow-hidden border-t border-b-2 border-neutral-950 rounded-2xl sm:mx-8 mx-4 my-6 p-6'>
      <ChildComponent {...childProps} />
    </section>
  )
}

export default Section
