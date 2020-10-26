require('dotenv').config();
const { Client } = require('@hashgraph/sdk');

const myAccountId = "0.0.59314";
const myPrivateKey = "302e020100300506032b65700422042089373c17a111b76bf0c52f952cf8d1ee0b8370148f7e249eb52ba27b005fdace";

//If we weren't able to grab it, we should throw a new error
if (myAccountId == null ||
    myPrivateKey == null ) {
    throw new Error("Environment variables myAccountId and myPrivateKey must be present");
}

const HederaClient = Client.forTestnet();
HederaClient.setOperator(myAccountId, myPrivateKey);
module.exports = HederaClient;