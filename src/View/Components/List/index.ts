function List(nameList: string): [HTMLElement, Function] {
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
    div.appendChild(divList)

    function addItensList(list: string[], border: boolean = true) {
        const divItem = document.createElement("div");
        divItem.style.display = "flex";
        if (border) {
            divItem.style.border = "5px solid #ccc";
            divItem.style.borderRadius = "10px";
            divItem.style.padding = "8px 12px";
            divItem.style.fontSize = "14px";
            divItem.style.color = "#000";
        }
        divItem.style.justifyContent = "space-between";
        for (const item of list) {
            const span = document.createElement("span");
            span.style.flex = "1";
            span.style.textAlign = "center";
            span.innerText = item;
            divItem.appendChild(span);
        }
        divList.appendChild(divItem);
    }

    return [div, addItensList];
}

export default List;

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