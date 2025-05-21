import Input from "../../Components/Input";
import List from "../../Components/List";
function Register() {
    const listWords = [];
    const [wordList, addItensListWord] = List("");
    for (let i = 0; i < 12; i++) {
        const [inputWord, getInputWord] = Input("Quantity", "ex: 0.12");
        const [inputWordTwo, getInputWordTwo] = Input("Quantity", "ex: 0.12");
        addItensListWord(i, [inputWord, inputWordTwo], false);
        addItensListWord(i, [inputWord, inputWordTwo], false);
    }
    const div = document.createElement("div");
    div.appendChild(wordList);
    return div;
}
export default Register;
