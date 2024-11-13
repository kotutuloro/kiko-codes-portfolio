// import resume from "/docs/Kiko Otutuloro Resume Fall 2024.pdf";

function Experience() {
  return (
    <div className="text-center">
      <h1 className="font-mono text-3xl text-purple-400">exp&shy;erience</h1>
      <div className="divide-dotted *:my-4 md:flex md:divide-x-2 *:md:px-4 *:lg:px-8">
        <div>
          <h2 className="font-mono text-2xl italic underline decoration-purple-400 decoration-dotted">
            skills
          </h2>
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

        <div className="shrink-0 grow basis-2/3">
          <h2 className="font-mono text-2xl italic underline decoration-purple-400 decoration-dotted">
            employment
          </h2>
          <ul className="grid gap-2 leading-snug *:col-span-2 *:grid *:grid-cols-subgrid *:items-center first:*:*:text-left last:*:*:text-right last:*:*:italic">
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
  );
}

export default Experience;
