/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
	id: string;
}


// declare module "bip39" {
// 	export = bip39;
// }

// declare namespace bip39 {
// 	class Wordlists {
// 		EN: any;
// 		JA: any;
// 		english: any;
// 		french: any;
// 		italian: any;
// 		japanese: any;
// 		spanish: any;
// 	}

// 	export function mnemonicToSeed(mnemonic: string, password?: string): Buffer;
// 	export function mnemonicToSeedHex(mnemonic: string, password?: string): any;
// 	export function mnemonicToEntropy(mnemonic: string, wordlist: any): any;
// 	export function entropyToMnemonic(entropy: any, wordlist: any): any;
// 	export function generateMnemonic(strength?: number, rng?: any, wordlist?: any): any;
// 	export function validateMnemonic(mnemonic: string, wordlist?: any): boolean;
// 	export var wordlists: Wordlists;
// }

