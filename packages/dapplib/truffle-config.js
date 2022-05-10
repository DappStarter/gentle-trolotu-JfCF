require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan riot situate unique hunt photo equal giant'; 
let testAccounts = [
"0x36a6632b4421699585e048fb2fcc54e854f111e63e1e4d218b2b6f9f43c0c32e",
"0x9dc4b4c1e76df55f15bea353d3ee8f36df249d9a3e633c8ea7ed7649dd9c3ffb",
"0x868bf90035b951996eeb358ba74a8b9b6942f1fc699d915b8a5238cd07be8e1e",
"0xda97c7c4c1988b0087334d307d802d47ea9f8db3e5be9d84f896bb7d265dce3f",
"0xd66a714c5d6490b501d64df1ad182a8beb3c447e18d36e8164356e36f87bc542",
"0xe0d320c0bf99815be30e56922fa1b7dbeca25f5f42a884af470350cb7f845ef7",
"0x19634f004898f7e823ac69e8224c9dad159e6b62769ccaff73f92356243cf510",
"0xa881d3b1d09c58c8f950afb12f32522228a5156206f4b58d4a56cfaa743ad7f3",
"0xa3934822ba8cc76c843997d03a863cb21d9fcfdf1b1d7fd9c2e5ea027d85d421",
"0xa4cd8fd70f295c06d22701f52390f91b2ab3cbfc23cfd3052ab5a31453243339"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

