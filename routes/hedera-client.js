require('dotenv').config();
const { Client } = require('@hashgraph/sdk');

const myAccountId = "0.0.56800";
const myPrivateKey = "302e020100300506032b657004220420262a025f1e24de37e89813db197cb19be49382b13fa3d75d97b021ca48a2acd6";

//If we weren't able to grab it, we should throw a new error
if (myAccountId == null ||
    myPrivateKey == null ) {
    throw new Error("Environment variables myAccountId and myPrivateKey must be present");
}

const HederaClient = Client.forMainnet();
HederaClient.setOperator(myAccountId, myPrivateKey);
module.exports = HederaClient;