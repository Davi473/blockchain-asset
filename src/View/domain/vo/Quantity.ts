export default class Quantity {
    private value: number;

    constructor (value: string) {
        if (value.includes("'")) throw new Error("Value invalid \"'\"");
        if (!value) throw new Error("Value invalid");
        const inNumber = /^[0-9]+$/.test(value);
        if (!inNumber) throw new Error("Value invalid not number");
        if (Number(value) < 0) throw new Error("Cannot be 0 or less than 0");
        this.value = Number(value);
    }

    public getValue(): number {
        return this.value;
    }
}