function timeOfDay ()
{
    const now = new Date();
    const hours = now.getHours();
    if (hours >= 5 && hours < 12) return "Good Morning,";
    if (hours >= 12 && hours < 18) return "Good Afternoon,";
    return "Good Evening,";
}

function Greeting(name: string) {
    const div = document.createElement("div");
    div.style.marginBottom = "20px";
    const p = document.createElement("p");
    p.style.fontSize = "14px";
    p.style.color = "#555";
    p.style.margin = "0";
    p.innerText = timeOfDay();
    const h2 = document.createElement("h2");
    h2.style.fontSize = "24px";
    h2.style.fontWeight = "bold";
    h2.style.color = "#000";
    h2.style.margin = "5px 0 0 0"
    h2.innerText = name;
    div.appendChild(p);
    div.appendChild(h2);
    return div;
}

export default Greeting;

/*
    <div style="margin-bottom: 20px;">
        <p style="font-size: 14px; color: #555; margin: 0;">Good Morning,</p>
        <h2 style="font-size: 24px; font-weight: bold; color: #000; margin: 5px 0 0 0;">Fulano</h2>
    </div>
*/