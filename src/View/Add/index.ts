import Button from "../Components/Button";
import Input from "../Components/Input";
import List from "../Components/List";

function Add() {
    const [inputAsset, getInputAsset] = Input("Asset", "ex: VALE");
    const [inputCategory, getInputCategory] = Input("Category", "ex: STOCK");
    const [inputQuantity, getInputQuantity] = Input("Quantity", "ex: 0.12");
    const [inputOrderType, getInputOrderType] = Input("Order Type", "ex: Buy or Sell");
    const [inputPurchaseDate, getInputPurchaseDate] = Input("Purchase Date", "ex: 10/10/2023");

    const [assetList, addItensListAsset] = List("Asset list");
    addItensListAsset(["Asset", "Category", "Type", "Quantity"], false);
    addItensListAsset(["VALE", "STOCK", "BUY", "1.3"]);

    const button = Button("Sign");

    const divInputs = document.createElement("div");
    divInputs.style.display = "flex";
    divInputs.style.flexDirection = "column";
    divInputs.style.gap = "10px";
    divInputs.style.marginBottom = "20px";
    divInputs.appendChild(inputAsset);
    divInputs.appendChild(inputCategory);
    divInputs.appendChild(inputQuantity);
    divInputs.appendChild(inputOrderType);
    divInputs.appendChild(inputPurchaseDate);
    divInputs.appendChild(assetList);
    divInputs.appendChild(button);

    const divAdd = document.createElement("div");
    divAdd.style.fontFamily = "Arial, sans-serif";
    divAdd.style.width = "350px";
    divAdd.style.margin = "20px auto";
    divAdd.style.padding = "15px";
    divAdd.style.backgroundColor = "#fff";
    divAdd.appendChild(divInputs);
    return divAdd;
}

export default Add;

/*
    <div style="font-family: Arial, sans-serif; width: 350px; margin: 20px auto; padding: 15px; background-color: #fff;">
        <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;">
            // Inputs
        </div>
    </div>
*/