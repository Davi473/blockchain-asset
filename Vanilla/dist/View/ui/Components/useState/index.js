export default function useState(value) {
    let currentValue = value;
    function setValue(value) {
        currentValue = value;
    }
    return [currentValue, setValue];
}
