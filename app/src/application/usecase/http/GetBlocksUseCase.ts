import Blockchain from "../../../domain/entity/Blockchain";
import Block from "../../../domain/entity/Block";
import UseCase from "../UseCase";

export default class GetBlocksUseCase implements UseCase {

    constructor (
        readonly blockchain: Blockchain
    ) {}

    public async execute(): Promise<Output> {
        const blocks = this.blockchain.getBlocks();
        return blocks;
    }
}

type Output = Block[];