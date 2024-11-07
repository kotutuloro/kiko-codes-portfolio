function Experience() {
  return (
    <div className="text-center">
      <h1 className="font-mono text-3xl text-purple-400">exp&shy;erience</h1>
      <div className="md:flex md:divide-x-2 divide-dotted *:lg:px-8 *:md:px-4 *:my-4">

        <div>
          <h2 className="font-mono italic text-xl underline decoration-dotted decoration-purple-400">skills</h2>
          <ul className="leading-snug">
            <li>asdf sadfk</li>
            <li>asdf sad asdf aasdf asdf asdfadsf aslkdfjalskdfj fk</li>
            <li>asdf sadfk</li>
            <li>asdf saasdf  a dfk</li>
            <li>asdf sadfk</li>
            <li>asdf saa asdf a dfk</li>
          </ul>
        </div>

        <div className="basis-2/3 grow shrink-0">
          <h2 className="font-mono italic text-xl underline decoration-dotted decoration-purple-400">employment</h2>
          <ul className="leading-snug *:py-1 *:flex *:justify-between *:items-center *:gap-2 first:*:*:text-left last:*:*:text-right last:*:*:italic">
            <li><span>job title @ some place</span><span>dates</span></li>
            <li><span>job title @ some place</span><span>dates</span></li>
            <li><span>job title @ some place</span><span>dates</span></li>
            <li><span>job title @ some place</span><span>dates</span></li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Experience
