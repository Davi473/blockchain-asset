import Greeting from "../../Components/Greeting";
import List from "../../Components/List";
function Home() {
    const home = document.createElement("div");
    home.style.fontFamily = "Arial";
    home.style.width = "350px";
    home.style.margin = "20px auto";
    home.style.padding = "15px";
    home.style.backgroundColor = "#fff";
    const greeting = Greeting("Fulano");
    const [assetList, addItensListAsset] = List("Asset list");
    addItensListAsset(0, ["Asset", "Category", "Type", "Quantity"], false);
    addItensListAsset(1, ["VALE", "STOCK", "BUY", "1.3"]);
    home.appendChild(greeting);
    home.appendChild(assetList);
    return home;
}
export default Home;
