# Hardhat Chai Matcher Decoding Error

This is a minimum viable reproduction of an error when decoding the revert message of a contract method being called indirectly.

```bash
npm install
npx hardhat test
```

```
Compiled 2 Solidity files successfully (evm target: paris).


  Callee
    ✔ parses revertedWith reason when calling directly
    1) parses revertedWith reason when calling indirectly


  1 passing (832ms)
  1 failing

  1) Callee
       parses revertedWith reason when calling indirectly:
     HardhatChaiMatchersDecodingError: There was an error decoding '0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000006408c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000014726561736f6e20666f7220726576657274696e6700000000000000000000000000000000000000000000000000000000000000000000000000000000' as a string
```