import Asset from "../../../domain/entity/Asset";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import List from "../../Components/List";
import useState from "../../Components/useState";
function Add() {
    const [inputAsset, getInputAsset] = Input("Asset", "ex: VALE");
    const [inputCategory, getInputCategory] = Input("Category", "ex: STOCK");
    const [inputQuantity, getInputQuantity] = Input("Quantity", "ex: 0.12");
    const [inputOrderType, getInputOrderType] = Input("Order Type", "ex: Buy or Sell");
    const [inputPurchaseDate, getInputPurchaseDate] = Input("Purchase Date", "ex: 10/10/2023");
    const [assetList, addItensListAsset, removeItensListAsset] = List("Asset list");
    addItensListAsset(0, ["Asset", "Category", "Type", "Quantity", "Date", "Status"], false);
    const [listAssetObject, setListAssetObject] = useState([]);
    function validData() {
        if (getInputAsset() && getInputCategory() && getInputQuantity() && getInputOrderType() && getInputPurchaseDate()) {
            const id = crypto.randomUUID();
            const object = new Asset(getInputAsset(), getInputCategory(), getInputQuantity(), getInputOrderType(), getInputPurchaseDate());
            const list = listAssetObject;
            list.push({ object: object, id: id });
            setListAssetObject(list);
            console.log(listAssetObject);
            const buttonRemove = Button("Remove", () => removeItensListAsset(id));
            buttonRemove.style.margin = "0px";
            addItensListAsset(id, [getInputAsset(), getInputCategory(), getInputOrderType(), getInputQuantity(), getInputPurchaseDate(), buttonRemove]);
            return;
        }
        alert("Insufficient data");
    }
    const button = Button("Sign", validData);
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
    divAdd.style.width = "550px";
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
