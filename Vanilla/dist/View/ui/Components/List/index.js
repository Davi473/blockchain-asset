export default function List(nameList) {
    const h3 = document.createElement("h3");
    h3.style.fontSize = "16px";
    h3.style.fontWeight = "bold";
    h3.style.color = "#000";
    h3.style.margin = "0 0 10px 0";
    h3.innerText = nameList;
    const divList = document.createElement("div");
    divList.style.display = "flex";
    divList.style.flexDirection = "column";
    divList.style.gap = "8px";
    const div = document.createElement("div");
    div.appendChild(h3);
    div.appendChild(divList);
    const listElements = [];
    function addItensList(key, list, border = true) {
        const divItem = document.createElement("div");
        divItem.style.display = "flex";
        divItem.id = key.toString();
        if (border) {
            divItem.style.border = "5px solid #ccc";
            divItem.style.borderRadius = "10px";
            divItem.style.padding = "8px 12px";
            divItem.style.fontSize = "14px";
            divItem.style.color = "#000";
        }
        divItem.style.justifyContent = "space-between";
        for (const item of list) {
            if (typeof item === "string") {
                const span = document.createElement("span");
                span.style.flex = "1";
                span.style.textAlign = "center";
                span.innerText = item;
                span.style.justifyContent = "center";
                span.style.alignContent = "center";
                divItem.appendChild(span);
                continue;
            }
            divItem.appendChild(item);
            listElements.push({ element: divItem, id: key.toString() });
        }
        divList.appendChild(divItem);
    }
    function removeItensList(id) {
        const div = listElements.find((item) => item.id === id);
        div?.element.remove();
    }
    return [div, addItensList, removeItensList];
}
/*
    <div>
        <h3 style="font-size: 16px; font-weight: bold; color: #000; margin: 0 0 10px 0;">Asset list</h3>
        <div style="display: flex; flex-direction: column; gap: 8px;">
            <div style="display: flex; justify-content: space-between;">
                <span style="flex: 1; text-align: center;">Asset</span>
                <span style="flex: 1; text-align: center;">Category</span>
                <span style="flex: 1; text-align: center;">Type</span>
                <span style="flex: 1; text-align: right;">Quantity</span>
            </div>
            <div style="display: flex; justify-content: space-between; border: 5px solid #ccc; border-radius: 10px; padding: 8px 12px; font-size: 14px; color: #000;">
                <span style="flex: 1; text-align: center;">VALE</span>
                <span style="flex: 1; text-align: center;">Stock</span>
                <span style="flex: 1; text-align: center;">Buy</span>
                <span style="flex: 1; text-align: right;">0.0034</span>
            </div>
            <div style="display: flex; justify-content: space-between; border: 5px solid #ccc; border-radius: 10px; padding: 8px 12px; font-size: 14px; color: #000;">
                <span style="flex: 1; text-align: center;">VOO</span>
                <span style="flex: 1; text-align: center;">ETF</span>
                <span style="flex: 1; text-align: center;">Buy</span>
                <span style="flex: 1; text-align: right;">0.034</span>
            </div>
            <div style="display: flex; justify-content: space-between; border: 5px solid #ccc; border-radius: 10px; padding: 8px 12px; font-size: 14px; color: #000;">
                <span style="flex: 1; text-align: center;">VOO</span>
                <span style="flex: 1; text-align: center;">ETF</span>
                <span style="flex: 1; text-align: center;">Sell</span>
                <span style="flex: 1; text-align: right;">0.034</span>
            </div>
        </div>
    </div>
*/ 
