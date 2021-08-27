import { ProjectBlockContainer } from "./styles";

interface ProjectBlockProps {
  appImage: string;
  functionImage: string;
  name: string;
}

export default function ProjectBlock({
  appImage,
  functionImage,
  name,
}: ProjectBlockProps) {
  return (
    <ProjectBlockContainer>
      <div>
        <img src={appImage} alt="" />
      </div>
      <div>
        <img src={functionImage} />
        <h2>{name}</h2>
      </div>
    </ProjectBlockContainer>
  );
}
