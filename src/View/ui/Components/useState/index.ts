export default function useState<T>(value: T): [T, Function] {
    let currentValue: T = value;

    function setValue(value: T) {
        currentValue = value;
    }

    return [currentValue, setValue];
}