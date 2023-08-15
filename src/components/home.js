function HomePage() {
  return (
    <section
      className="homeDiv"
      style={{
        width: '70%',
        margin: '1.5rem',
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
        border: '1px solid black',
        height: 'auto',
        padding: '2rem',
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        color: 'white',
        fontWeight: 'bolder',
        fontSize: '1.5rem',
        textShadow: '4px 2px 2px black',
        boxShadow: '1px 1px 20px black',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
        }}
      >
        Welcome to our page!
      </h2>
      <p>
        Success is a journey woven from dedication, much like our website&apos;s
        unfolding pages. The
        {' '}
        <span>Calculator</span>
        {' '}
        page highlights math&apos;s
        prowess in problem-solving. Each equation conquered is a stride toward
        potential. The
        {' '}
        <span>Quotes</span>
        {' '}
        page features success quotes
        reiterating the value of resilience, reminding us that victory is
        accessible through relentless effort.
      </p>
      <p>
        Our website echoes the harmony of math and logic. It teaches that
        numbers illuminate the path forward. The success quotes affirm that
        commitment underpins achievement. Just as a webpage weaves elements, our
        site illuminates the journey with every click, calculation, and quote.
      </p>
      <p>
        Did you know that mathematics has played an integral role in shaping
        some of the most remarkable achievements in human history? From the
        intricate calculations that propelled humans into space to the
        algorithms that power today&apos;s advanced technology, math has been
        the silent force driving progress. It was the mathematical genius of
        Alan Turing that cracked the Enigma code during World War II, altering
        the course of the war. Similarly, the field of cryptography, deeply
        rooted in mathematical principles, safeguards our digital communication
        and financial transactions. Moreover, advancements in medical imaging
        and diagnosis owe their accuracy to complex mathematical algorithms.
        These accomplishments underscore the profound impact that math has on
        our world, showcasing its ability to transform the way we live,
        communicate, and explore the universe.
      </p>
    </section>
  );
}

export default HomePage;
