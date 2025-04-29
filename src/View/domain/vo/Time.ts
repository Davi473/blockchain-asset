export default class Time {
    private value: Date;

    constructor (value: string) {
        if (value.includes("'")) throw new Error("Value invalid \"'\"");
        if (!value) throw new Error("Value invalid");
        const inDate = new Date(value);
        if (!inDate) throw new Error("Value invalid not time");
        this.value = inDate;
    }

    public getValueUTC(): string {
        return this.value.toUTCString();
    }

    public getValueISO(): string {
        return this.value.toISOString();
    }
}