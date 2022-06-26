const instance = await NftMarket.deployed();

instance.mintToken("https://gateway.pinata.cloud/ipfs/QmdLzpuhKz9NDq9BNUxva2SyhQvT197942gMxYPc1hLPy6", "500000000000000000", { value: "25000000000000000", from: accounts[0] })
instance.mintToken("https://gateway.pinata.cloud/ipfs/QmUq9q3REHtB5eG1qRAgCGEQbeUDN95pknSBCBDQuYe6k8", "300000000000000000", { value: "25000000000000000", from: accounts[0] }) 
