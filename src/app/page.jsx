import Plan from "@/component/Plan";
import Banner from "./banner/page";
import Featured from "./featured/page";
import CattleGreat from "@/component/CattleGreat";
import AllAnimals from "./allAnimals/page";
import { data } from "@/lib/data";
import Tips from "@/component/Tips";

const Home =  () => {
  return (
    <div>
      <Banner />
      <Plan />
      <Featured />
      <CattleGreat />
      <Tips/>
      
    </div>
  );
};

export default Home;
