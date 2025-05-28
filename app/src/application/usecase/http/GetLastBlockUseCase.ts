import Blockchain from "../../../domain/entity/Blockchain";
import Block from "../../../domain/entity/Block";
import UseCase from "../UseCase";

export default class GetLastBlockUseCase implements UseCase {
    
    constructor (
        readonly blockchain: Blockchain
    ) {}

    public async execute(): Promise<Output> {
        const lastBlock = this.blockchain.getLastBlock();
        return lastBlock;
    }
}

type Output = Block;