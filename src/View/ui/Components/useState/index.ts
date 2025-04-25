export default function useState<T>(value: T): [T, Function] {
    let currentValue = value;

    function setValue(value: T) {
        currentValue = value;
    }

    return [currentValue, setValue];
}