export default class Time {
    value;
    constructor(value) {
        if (value.includes("'"))
            throw new Error("Value invalid \"'\"");
        if (!value)
            throw new Error("Value invalid");
        const inDate = new Date(value);
        if (!inDate)
            throw new Error("Value invalid not time");
        this.value = inDate;
    }
    getValueUTC() {
        return this.value.toUTCString();
    }
    getValueISO() {
        return this.value.toISOString();
    }
}
