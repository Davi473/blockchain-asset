import Blockchain from "../../../domain/entity/Blockchain";
import Block from "../../../domain/entity/Block";
import UseCase from "../UseCase";

export default class GetForQuantityUseCase implements UseCase {

    constructor (
        readonly blockchain: Blockchain
    ) {}

    public async execute(input: Input): Promise<Output> {
        const { quantity } = input;
        const blocks = this.blockchain.getForQuantity(quantity);
        return blocks;
    }
}

type Input = {
    quantity: number
}

type Output = Block[];