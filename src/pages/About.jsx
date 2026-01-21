import locked from "../assets/locked.PNG";

export default function About() {
  return (
    <div>
      <section>
        <div className="container flex">
          {/* left image div */}
          <div className="p-5">
            <img className="w-48 h-48" src={locked} alt="" />
          </div>

          {/* right div */}
          <div className="p-5 flex flex-col justify-center item-center">
            <h1>Our Mission</h1>
            <p>
              Loudoun School for Advanced Studies offers an academic program
              that engages and challenges students with real-world problems in a
              learning environment that promotes curiosity, self-reliance, and
              collaboration. Our teachers empower students to gain confidence,
              build knowledge, discover new interests, and develop into lifelong
              learners and leaders. We want our students to be happy and
              optimistic, not overwhelmed and anxious. At LSAS, our students’
              voices are heard and their ideas are valued. Together, the faculty
              and students have built a place where we all feel a deep sense of
              belonging.
            </p>
            <h2>
              Curious students who aspire to positively impact the world belong
              at Loudoun School for Advanced Studies.
            </h2>
            <ul>
              <li>
                Our mixed-grade classrooms allow students to rise to their
                appropriate academic level without the social complications of
                skipping grades.
              </li>
              <li>
                A strong sense of community is deeply embedded and celebrated
                throughout our school’s culture.
              </li>
              <li>
                We value innovation, creativity, and flexibility, so we are
                always learning together.
              </li>
            </ul>
          </div>
        </div>

        <div className="container p-20 text-center">
          <p className="font-sans">
            Our schools do not discriminate in employment or the provision of
            educational services on the basis of race, color, religion, age,
            gender, national origin, disability, citizenship status, veteran
            status, or any other characteristic protected by federal, state, or
            local law.
          </p>
        </div>
      </section>
    </div>
  );
}
