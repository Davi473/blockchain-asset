import { ethers } from 'ethers';
export function recoverWallet(mnemonic) {
    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    console.log(`🧠 Mnemonic:\n${wallet.mnemonic.phrase}`);
    console.log(`🔐 Private Key:\n${wallet.privateKey}`);
    console.log(`🔓 Address:\n${wallet.address}`);
}
export function createWallet() {
    const wallet = ethers.Wallet.createRandom();
    console.log(`🧠 Mnemonic:\n${wallet.mnemonic.phrase}\n\n🔐 Private Key:\n${wallet.privateKey}\n🔓 Address:\n${wallet.address}`);
}
