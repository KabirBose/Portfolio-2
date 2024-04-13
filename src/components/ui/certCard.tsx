import Link from "next/link";

interface Props {
  title: string;
  author: string;
  desc: string;
  cred?: string;
}

export default function CertCard({ title, author, desc, cred }: Props) {
  return (
    <div className="flex justify-start items-start flex-col bg-zinc-900 w-full min-h-[20rem] mt-2 rounded-md p-7">
      <h3 className="text-xl font-semibold text-green-500">{title}</h3>
      <h3>{author.toUpperCase()}</h3>
      <p className="text-start mt-5">{desc}</p>

      <br />
      <div
        className={`bg-zinc-800 p-2 rounded-md ${
          cred === "" || !cred ? "hidden" : "visible"
        }`}
      >
        <Link target="_blank" href={cred || ""}>
          View Credential
        </Link>
      </div>
    </div>
  );
}
