export default function Nav(app: HTMLElement): [HTMLElement, Function] {
    const elementNav = document.createElement("nav");
    elementNav.style.border = "5px solid #ccc";
    elementNav.style.borderRadius = "10px";
    elementNav.style.padding = "8px 12px";
    elementNav.style.marginBottom = "20px";
    elementNav.style.display = "flex";
    elementNav.style.alignItems = "center";

    const smallElements: { element: HTMLElement; name: string }[] = [];

    function addItensNav(name: string, callback: Function, color: string = "#888") {
        const small = document.createElement("small");
        small.style.fontSize = "14px";
        small.style.color = color;
        small.style.marginRight = "15px";
        small.innerHTML = name;
        small.onclick = () => {
            changeColors(name);
            app.innerHTML = "";
            app.appendChild(callback());
        }
        elementNav.appendChild(small);
        smallElements.push({ element: small, name });
    }

    function changeColors(name: string) { 
        const targetSmall = smallElements.find((item) => item.name === name);
        if (targetSmall) {
            targetSmall.element.style.color = "#111";
        }
        smallElements.forEach((item) => {
            if (item.name !== name) item.element.style.color = "#888";
        });
    }

    const div = document.createElement("div");
    div.style.fontFamily = "Arial";
    div.style.width = "350px";
    div.style.margin = "20px auto";
    div.style.backgroundColor = "#fff";
    div.appendChild(elementNav);

    return [div, addItensNav];
}
/*
    <div style="font-family: Ariel; width: 350px; margin: 20px auto; backgroud-color: #fff;">
        <nav style="border: 5px solid #ccc; border-radius: 10px; padding: 8px 12px; margin-bottom: 20px; display: flex; align-items: center;">
            <small style="font-size: 14px; color: #111; margin-right: 15px;">Home</small>
            <small style="font-size: 14px; color: #888; margin-right: 15px;">Add</small>
            <small style="font-size: 14px; color: #888;">Chart</small>
        </nav>
    </div>
*/