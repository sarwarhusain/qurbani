import Plan from "@/component/Plan";
import Banner from "./banner/page";
import Featured from "./featured/page";
import CattleGreat from "@/component/CattleGreat";

const Home = () => {
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
