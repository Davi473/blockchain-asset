import Register from "./ui/Pages/Register";
function Main() {
    const div = document.createElement("div");
    // const [elementNav, addItensNav] = Nav(div);
    // addItensNav("HOME", Home, "#111");
    // addItensNav("ADD", Add);
    // addItensNav("CHART", console.log);
    const app = document.getElementById('app');
    // app?.appendChild(elementNav);
    app?.appendChild(div);
    // const home = Home();
    const register = Register();
    console.log(register);
    div.appendChild(register);
}
Main();
