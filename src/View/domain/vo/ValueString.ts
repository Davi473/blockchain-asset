export default class ValueString {
    private value: string;

    constructor (value: string) {
        if (value.includes("'")) throw new Error("Value invalid \"'\"");
        if (!value) throw new Error("Value invalid");
        this.value = value;
    }

    public getValue(): string {
        return this.value;
    }
}