async function main() {
    const AINFT = await ethers.getContractFactory("AINFT");
  
    // Start deployment, returning a promise that resolves to a contract object
    const aiNFT = await AINFT.deploy();
    console.log("Contract deployed to address:", aiNFT.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

    //0x767D2436e6137711d6D771eBcaDeB769eec246a2