import Link from "next/link";

interface Props {
  title: string;
  author: string;
  desc: string;
  cred?: string;
  className?: string;
}

export default function CertCard({
  title,
  author,
  desc,
  cred,
  className,
}: Props) {
  return (
    <div
      className={`flex justify-start items-start flex-col bg-zinc-900 w-full md:w-[20rem] min-h-[21rem] mt-2 rounded-md p-7 border-2 border-zinc-800 ${className}`}
    >
      <h3 className="text-xl md:text-xl font-semibold text-green-500">
        {title}
      </h3>
      <h3>{author.toUpperCase()}</h3>
      <p className="text-start mt-5 md:text-lg">{desc}</p>

      <br />
      <div
        className={`bg-zinc-800 p-2 rounded-md ${
          cred === "" || !cred ? "hidden" : "visible"
        }`}
      >
        <Link className="md:text-lg" target="_blank" href={cred || ""}>
          View Credential
        </Link>
      </div>
    </div>
  );
}
