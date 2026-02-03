import locked from "../assets/locked.PNG";

export default function About() {
  return (
    <div>
      <section className=" flex flex-col justify-center items-center border-2 border-purple-500">
        {/* top div */}
        <div className="container flex items-start gap-6 p-[20px]  border-2 border-orange-500">
          {/* top left image div */}
          <div className=" flex-1 p-1  border-2 border-red-500 flex justify-center ">
            <img
              className="max-w-[400px] max-h-[400px] object-contain"
              src={locked}
              alt=""
            />
          </div>

          {/* top right div */}
          <div className=" flex-1 border-2 border-red-500 p-1 flex flex-col gap-4 ">
            <h1 className="text-4xl font-medium font-serif italic">
              Our Mission
            </h1>
            <p className="text-wrap text-lg text-gray-600">
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
            <h2 className="text-wrap text-lg font-bold text-gray-600">
              Curious students who aspire to positively impact the world belong
              at Loudoun School for Advanced Studies.
            </h2>
            <ul className="text-wrap text-lg text-gray-600">
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
        {/* bottom div */}
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
