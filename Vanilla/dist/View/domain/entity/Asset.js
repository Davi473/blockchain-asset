import Quantity from "../vo/Quantity";
import Time from "../vo/Time";
import ValueString from "../vo/ValueString";
export default class Asset {
    asset;
    category;
    quantity;
    buy;
    time;
    constructor(asset, category, quantity, type, time) {
        this.asset = new ValueString(asset);
        this.category = new ValueString(category);
        this.quantity = new Quantity(quantity);
        this.buy = type.toLocaleLowerCase() === "buy" ? true : false;
        this.time = new Time(time);
    }
    getAsset() {
        return this.asset.getValue();
    }
    getCategory() {
        return this.category.getValue();
    }
    getQuantity() {
        return this.quantity.getValue();
    }
    getBuy() {
        return this.buy;
    }
    getTime(type) {
        if (type === "ISO")
            return this.time.getValueISO();
        if (type === "UTC")
            return this.time.getValueUTC();
    }
}
