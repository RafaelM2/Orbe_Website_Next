import { spacings } from "../../../../styles/sets";
import { ProccessBlockContainer } from "./styles";

interface blockProps {
  appName: string | string[];
  text: string;
  image: string;
}

export default function ProccessBlock({ appName, text, image }: blockProps) {
  return (
    <ProccessBlockContainer lineHeight={spacings.line_height.main}>
      <h3>{appName}</h3>
      <img src={image} alt="app image" />
      <span>{text}</span>
    </ProccessBlockContainer>
  );
}
