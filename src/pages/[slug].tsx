import { useRouter } from "next/dist/client/router";
import { Info } from "../../info";
import IntroductionFunctionPage from "../components/introductionFunctionPage";
import Proccess from "../components/proccess";

export default function Function() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <IntroductionFunctionPage
        title={Info.desenvolvimento.intro.title}
        text={Info.desenvolvimento.intro.text}
      ></IntroductionFunctionPage>
      <Proccess page={slug} />
    </>
  );
}
