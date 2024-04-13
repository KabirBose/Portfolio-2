import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="min-h-[80vh] p-4 flex justify-center items-center text-center flex-col gap-2">
      <h1 className="text-green-500 font-space text-2xl font-bold">CONTACT</h1>
      <div>
        <p>You can check out my projects here or contact me if you'd like!</p>
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
    </div>
  );
}
