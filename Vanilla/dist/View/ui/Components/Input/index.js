function Input(name, example) {
    const p = document.createElement("p");
    p.style.fontSize = "14px";
    p.style.color = "#000";
    p.style.margin = "0";
    p.innerText = name;
    const input = document.createElement("input");
    input.type = "text";
    input.style.fontSize = "14px";
    input.style.color = "#888";
    input.style.border = "none";
    input.style.outline = "none";
    input.style.width = "100%";
    input.style.background = "transparent";
    input.placeholder = example;
    function getValue() {
        const value = input.value;
        return value;
    }
    const divInput = document.createElement("div");
    divInput.style.border = "5px solid #ccc";
    divInput.style.borderRadius = "10px";
    divInput.style.padding = "8px 12px";
    divInput.appendChild(input);
    const div = document.createElement("div");
    div.appendChild(p);
    div.appendChild(divInput);
    return [div, getValue];
}
export default Input;
/*
    <p style="font-size: 14px; color: #000; margin: 0;">Asset</p>
    <div style="border: 5px solid #ccc; border-radius: 10px; padding: 8px 12px;">
        <input type="text" style="font-size: 14px; color: #888; border: none; outline: none; width: 100%; background: transparent;" placeholder="ex: VALE">
    </div>
*/ 
