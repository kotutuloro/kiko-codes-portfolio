function Section({ id, ChildComponent }) {
  return (
    <section id={id} className='border-2 border-rose-500 m-1 p-1'>
      <ChildComponent />
    </section>
  )
}

export default Section
