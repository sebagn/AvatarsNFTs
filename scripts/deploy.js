const deploy = async () => {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with the account:", deployer.address);

  const AvataarsNFT = await ethers.getContractFactory("AvataarsNFT");
  const deployed = await AvataarsNFT.deploy(10000);

  console.log("AvataarsNFT is deployed at:", deployed.address);
};

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
