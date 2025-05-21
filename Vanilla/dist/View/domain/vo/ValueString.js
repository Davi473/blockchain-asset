export default class ValueString {
    value;
    constructor(value) {
        if (value.includes("'"))
            throw new Error("Value invalid \"'\"");
        if (!value)
            throw new Error("Value invalid");
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
