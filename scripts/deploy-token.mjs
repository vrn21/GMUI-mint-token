import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
import { config } from "dotenv";
config();

const sdk = ThirdwebSDK.fromPrivateKey("mainnet-beta",process.env.PRIVATE_KEY);

const metadata = {
    symbol: "GMUI",
    name: "GTECH-MuiLearn-Token",
    description:"GTECH μ Learn's UnOffocial crypto token on solana ",
    initialSupply: 69,
    image: "https://github.com/vrn21/GMUI-token/blob/main/GMUI-token.png?raw=true",
    
};

const address = await sdk.deployer.createToken(metadata); 

console.log("Successfully deployed token: ",address);

const token = sdk.getToken(address);
const totalSupply = await token.totalSupply();

console.log("Total Supply: ",totalSupply);