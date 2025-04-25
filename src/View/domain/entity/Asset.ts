import Quantity from "../vo/Quantity";
import ValueString from "../vo/ValueString";

export default class Asset {
    private asset: ValueString;
    private category: ValueString;
    private quantity: Quantity;
    private buy: boolean;
    private time: string;

    constructor(
        asset: string, category: string, quantity: string,
        type: string, time: string
    ) {
        
    }
}