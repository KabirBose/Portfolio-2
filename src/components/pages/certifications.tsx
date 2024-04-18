import CertCard from "../ui/certCard";

export default function Certifications() {
  return (
    <div className="min-h-[80vh] p-8 flex justify-center items-center flex-col gap-3">
      <h1 className="font-space text-2xl md:text-3xl font-bold text-green-500">
        CERTIFICATIONS
      </h1>
      <p className="text-center md:text-lg">
        Here are my certifications! Note: some of them don't have credentials.
      </p>
      <div className="md:mt-4 flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4 md:gap-8">
        <CertCard
          title="CS50P: Introduction to Programming with Python"
          author="David Malan & Harvard University"
          desc="Python, Data Structures, Algorithms, Object-Oriented Programming, Functional Programming, File I/0, Regex"
        />
        <CertCard
          title="The Complete Web Development Bootcamp"
          author="Dr. Angela Yu"
          desc="HTML, CSS, JavaScript, JQuery, React, Node, Express, EJS, Git, MySQL, Postgres SQL, BlockChain"
          cred="https://www.udemy.com/certificate/UC-e7c5126b-9b43-4365-802e-d7513971d2ca/"
        />
        <CertCard
          title="React - The Complete Guide"
          author="Maximillian Schwarzmüller"
          desc="React, Redux, Next, TypeScript, Authentication, MongoDB, React Dev Tools, Framer Motion"
          cred="https://www.udemy.com/certificate/UC-c7721371-a8a6-403f-91a2-2d35635f48b9/"
        />
        <CertCard
          title="The Complete JavaScript Course"
          author="Jonas Schmedtmann"
          desc="JavaScript, Data Structures, Object-Oriented Programming, Document Object Model, Git"
          cred="https://www.udemy.com/certificate/UC-298b12ee-2888-4dc7-b5a7-b098426c5605/"
        />
        <CertCard
          title="The Complete NodeJS Bootcamp"
          author="Jonas Schmedtmann"
          desc="NodeJS, Express, Pug, MongoDB, Mongoose, Model View Controller, APls, Authentication"
          cred="https://www.udemy.com/certificate/UC-7b23cc76-0f9d-40fb-a1ab-328153f66426/"
        />
        <CertCard
          title="Learn Python 3 (Legacy)"
          author="FreeCodeCamp"
          desc="Python, Data Structures, Algorithms, Object-Oriented Programming, Functional Programming, Git"
        />
        <CertCard
          title="CCNAv7: Introduction to Networks"
          author="Cisco Networking Academy"
          desc="Cisco Packet Tracer, Wireshark, LAN Switching, WAN Routing, TCP/IP, DHCP, IPV4 & IPV6 Addressing"
          className="md:w-[42rem] lg:w-[52rem]"
        />
      </div>
    </div>
  );
}
