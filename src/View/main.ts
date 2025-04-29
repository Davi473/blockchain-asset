import Add from "./ui/Pages/Add";
import Nav from "./ui/Components/Nav";
import Home from "./ui/Pages/Home";

function Main() {
    const div = document.createElement("div");

    const [elementNav, addItensNav] = Nav(div);
    addItensNav("HOME", Home, "#111");
    addItensNav("ADD", Add);
    addItensNav("CHART", console.log);

    const app = document.getElementById('app');
    app?.appendChild(elementNav);
    app?.appendChild(div);
    
    const home = Home();
    div.appendChild(home);
}
Main();

