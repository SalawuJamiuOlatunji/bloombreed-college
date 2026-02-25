import bbc from "../assets/BBC.jpg";

export default function About() {
  return (
    <div className="w-full">
      <section className=" flex flex-col justify-center items-center">
        {/* top div */}
        <div className="container  md:flex flex-row items-start  gap-6 p-[20px]">
          {/* top left image div */}
          <div className=" flex-1 p-1 ">
            <img
              className=" w-full m-0 p-0 max-h-[400px]  rounded object-cover"
              src={bbc}
              alt=""
            />
          </div>

          {/* top right div */}
          <div className=" flex-1  p-1 flex flex-col gap-4 ">
            <h1 className="text-4xl font-medium font-serif italic">
              Our Mission
            </h1>
            <p className="text-wrap text-lg text-gray-600">
              Bloombreed College offers a dynamic academic program designed to
              inspire excellence, creativity, and critical thinking in every
              student. We provide a learning environment that challenges
              students with real-world knowledge while nurturing curiosity,
              discipline, and collaboration. At Bloombreed College, our
              educators are committed to empowering students with confidence,
              strong academic foundations, and essential life skills that
              prepare them for higher education and future leadership. We
              believe learning should be engaging and motivating — not stressful
              or overwhelming. We value every student’s voice and encourage
              innovation, self-expression, and personal growth. Together, our
              teachers and students have built a supportive community where
              everyone feels respected, inspired, and driven to succeed. At
              Bloombreed College, we are not just educating students — we are
              shaping future leaders.
            </p>
            <h2 className="text-wrap text-lg font-bold text-gray-600">
              Ambitious learners who are eager to grow, lead, and create
              meaningful change find their home at Bloombreed College.
            </h2>
            <ul className="text-wrap text-lg text-gray-600">
              <li>
                We create flexible classrooms where students grow academically
                at the right level while thriving socially.
              </li>
              <li>
                At Bloombreed College, community is at the heart of everything
                we do. We foster an environment where students, teachers, and
                families grow together in support and collaboration.
              </li>
              <li>
                We value innovation, creativity, and flexibility, so we are
                always learning together.
              </li>
            </ul>
          </div>
        </div>
        {/* bottom div */}
        <div className="text-wrap text-lg text-gray-600 p-4">
          <p className="font-sans">
            Bloombreed College is committed to providing equal opportunities in
            employment and education. We do not discriminate on the basis of
            race, color, religion, age, gender, national origin, disability,
            citizenship status, veteran status, or any other characteristic
            protected by applicable law.
          </p>
        </div>
      </section>
    </div>
  );
}
