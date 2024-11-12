function Experience() {
  return (
    <div className="text-center">
      <h1 className="font-mono text-3xl text-purple-400">exp&shy;erience</h1>
      <div className="md:flex md:divide-x-2 divide-dotted *:lg:px-8 *:md:px-4 *:my-4">

        <div>
          <h2 className="font-mono italic text-xl underline decoration-dotted decoration-purple-400">skills</h2>
          <ul className="leading-snug">
            <li>Python</li>
            <li>Ruby</li>
            <li>Go</li>
            <li>PostgreSQL</li>
            <li>Redis</li>
            <li>Web Development</li>
            <li>Scripting</li>
            <li>Distributed systems</li>
          </ul>
        </div>

        <div className="basis-2/3 grow shrink-0">
          <h2 className="font-mono italic text-xl underline decoration-dotted decoration-purple-400">employment</h2>
          <ul className="leading-snug *:py-1 *:flex *:justify-between *:items-center *:gap-2 first:*:*:text-left last:*:*:text-right last:*:*:italic">
            <li>
              <span>Senior Software Engineer @ Flexport</span>
              <span>(Sep 2023 - Mar 2024)</span>
            </li>
            <li>
              <span>Senior Software Engineer @ Heroku</span>
              <span>(Feb 2021 - Mar 2023)</span>
            </li>
            <li>
              <span>Software Engineer @ Heroku</span>
              <span>(Dec 2017 - Feb 2021)</span>
            </li>
            <li>
              <span>Teaching Assistant @ Hackbright Academy</span>
              <span>(Mar 2017 - Nov 2017)</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Experience
