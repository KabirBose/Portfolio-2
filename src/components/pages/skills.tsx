import Image from "next/image";
import SkillIcon from "../ui/skillIcon";

export default function Skills() {
  return (
    <div className="min-h-[80vh] p-4 flex justify-center items-center text-center flex-col gap-2">
      <h1 className="font-space text-2xl font-bold">SKILLS</h1>
      <p>Here's what I know so far...</p>

      <div className="flex justify-center md:justify-between items-center flex-wrap gap-5 p-5">
        <SkillIcon imageSrc="angular" title="Angular" />
        <SkillIcon imageSrc="bootstrap" title="BootStrap" />
        <SkillIcon imageSrc="bunjs" title="Bun" />
        <SkillIcon imageSrc="c" title="C" />
        <SkillIcon imageSrc="cpp" title="C++" />
        <SkillIcon imageSrc="cisco" title="Cisco IOS" />
        <SkillIcon imageSrc="css" title="CSS" />
        <SkillIcon imageSrc="ejs" title="EJS" className="invert" />
        <SkillIcon imageSrc="express" title="Express" className="invert" />
        <SkillIcon imageSrc="html" title="HTML" />
        <SkillIcon imageSrc="java" title="Java" />
        <SkillIcon imageSrc="js" title="JavaScript" />
        <SkillIcon imageSrc="kali" title="Kali Linux" />
        <SkillIcon imageSrc="mongo" title="MongoDB" />
        <SkillIcon imageSrc="next" title="Next" className="invert" />
        <SkillIcon imageSrc="node" title="Node" />
        <SkillIcon imageSrc="postgre" title="PostgreSQL" />
        <SkillIcon imageSrc="pug" title="Pug" />
        <SkillIcon imageSrc="python" title="Python" />
        <SkillIcon imageSrc="react" title="React" />
        <SkillIcon imageSrc="redux" title="Redux" />
        <SkillIcon imageSrc="tailwind" title="Tailwind" />
        <SkillIcon imageSrc="ts" title="TypeScript" />
        <SkillIcon imageSrc="ubuntu" title="Ubuntu" />
      </div>
    </div>
  );
}
