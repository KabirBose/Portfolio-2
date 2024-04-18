import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className="min-h-[80vh] p-4 flex justify-center items-center text-center flex-col gap-2 md:gap-6">
      <h1 className="text-green-500 font-space text-2xl md:text-3xl font-bold">
        CONTACT
      </h1>
      <div>
        <p className="md:text-lg">
          You can check out my projects or contact me if you'd like!
        </p>

        <div className="mt-5 md:mt-8 flex justify-center items-center gap-12">
          <Link href={"mailto:kabirbose04@gmail.com"} target="_blank">
            <FontAwesomeIcon
              color="#22C55E"
              className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]"
              icon={faEnvelope}
            />
          </Link>

          <Link href={"https://github.com/KabirBose"} target="_blank">
            <FontAwesomeIcon
              color="#22C55E"
              className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]"
              icon={faGithub}
            />
          </Link>

          <Link href={"https://www.linkedin.com/in/kabirbose/"} target="_blank">
            <FontAwesomeIcon
              color="#22C55E"
              className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]"
              icon={faLinkedin}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
