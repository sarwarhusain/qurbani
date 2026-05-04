import Plan from "@/component/Plan";
import Banner from "./banner/page";
import Featured from "./featured/page";
import CattleGreat from "@/component/CattleGreat";
import AllAnimals from "./allAnimals/page";
import { data } from "@/lib/data";

const Home =  () => {
  return (
    <div>
      <Banner />
      <Plan />
      <Featured />
      <CattleGreat />
      
    </div>
  );
};

export default Home;
