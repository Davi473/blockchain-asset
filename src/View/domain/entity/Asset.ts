import Quantity from "../vo/Quantity";
import Time from "../vo/Time";
import ValueString from "../vo/ValueString";

export default class Asset {
    private asset: ValueString;
    private category: ValueString;
    private quantity: Quantity;
    private buy: boolean;
    private time: Time;

    constructor(
        asset: string, category: string, quantity: string,
        type: string, time: string
    ) {
        this.asset = new ValueString(asset);
        this.category = new ValueString(category);
        this.quantity = new Quantity(quantity);
        this.buy = type.toLocaleLowerCase() === "buy" ? true : false;
        this.time = new Time(time);
    }

    public getAsset(): string {
        return this.asset.getValue();
    }

    public getCategory(): string {
        return this.category.getValue();
    }

    public getQuantity(): number {
        return this.quantity.getValue();
    }

    public getBuy(): boolean {
        return this.buy;
    }

    public getTime(type: "ISO" | "UTC"): string | void {
        if (type === "ISO") return this.time.getValueISO();
        if (type === "UTC") return this.time.getValueUTC();
    }
}