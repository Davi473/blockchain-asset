import Greeting from "../Components/Greeting/index.js";
import List from "../Components/List/index.js";

function Home()
{
    const home = document.createElement("div");
    home.style.fontFamily = "Arial";
    home.style.width = "350px";
    home.style.margin = "20px auto";
    home.style.padding = "15px";
    home.style.backgroundColor = "#fff";
    const greeting = Greeting("Fulano");
    const [assetList, addItensListAsset] = List("Asset list");
    addItensListAsset(["Asset", "Category", "Type", "Quantity"], false);
    addItensListAsset(["VALE", "STOCK", "BUY", "1.3"]);
    home.appendChild(greeting);
    home.appendChild(assetList);
    return home;
}

export default Home;

/*
    <div style="font-family: Arial, sans-serif; width: 350px; margin: 20px auto; padding: 15px; background-color: #fff;">
*/