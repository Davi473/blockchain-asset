
export default function Button(name: string, callback: Function) {
    const button = document.createElement("input");
    button.style.backgroundColor = "#000";
    button.style.color = "#fff";
    button.style.border = "none";
    button.style.borderRadius = "10px";
    button.style.padding = "10px 0";
    button.style.width = "100%";
    button.style.fontSize = "16px";
    button.style.cursor = "pointer";
    button.type = "button"
    button.value = name;
    console.log(callback)
    button.onclick = () => callback();
    const divButton = document.createElement("div");
    divButton.style.marginTop = "20px";
    divButton.style.textAlign = "center";
    divButton.appendChild(button);
    return divButton;
}

/*
    <div style="margin-top: 20px; text-align: center;">
        <button style="background-color: #000; color: #fff; border: none; border-radius: 10px; padding: 10px 0; width: 100%; font-size: 16px; cursor: pointer;">Sign</button>
    </div>
*/