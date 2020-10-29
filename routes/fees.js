const router = require('express').Router();

const HederaClient = require('./hedera-client');
const {
  Client,
  AccountBalanceQuery,
  CryptoTransferTransaction,
} = require('@hashgraph/sdk');

router.route('/test').get(async (req, res) => {
  res.json({ status: 'online' });
});

router.route('/test').get(async (req, res) => {
  
  res.json({status:"online"});
});

router.route('/bal').post(async (req, res) => {
  // console.log(req.body);
  // const client = Client.forTestnet();
  // client.setOperator(req.body.account, req.body.pk);
  const balance = await new AccountBalanceQuery()
    .setAccountId(req.body.account)
    .execute(HederaClient)
    .catch((err) => {
      console.log(err);
    });
  res.json(balance.value());
});
router.route('/five').post(async (req, res) => {
  console.log(req.body);
  const client = Client.forMainnet();
  client.setOperator(req.body.account, req.body.pk);
  receipt = await (
    await new CryptoTransferTransaction()
      .addSender(req.body.account, 500000000)
      .addRecipient('0.0.56800', 500000000)
      .build(client)
      .execute(client)
  ).getReceipt(client);
  res.json(receipt);
});

router.route('/ten').post(async (req, res) => {
  const client = Client.forMainnet();
  client.setOperator(req.body.account, req.body.pk);
  receipt = await (
    await new CryptoTransferTransaction()
      .addSender(req.body.account, 1000000000)
      .addRecipient('0.0.56800', 1000000000)
      .build(client)
      .execute(client)
  ).getReceipt(client);
  res.json(receipt);
});

router.route('/fiveh').post(async (req, res) => {
  console.log(req.body.message);
  receipt = await (
    await new CryptoTransferTransaction()
      .addSender('0.0.56800', 10000000000)
      .addRecipient(req.body.account, 10000000000)
      .build(HederaClient)
      .execute(HederaClient)
  ).getReceipt(HederaClient);
  console.log(receipt);
  res.json(receipt);
});

router.route('/tenh').post(async (req, res) => {
  console.log(req.body.message);
  receipt = await (
    await new CryptoTransferTransaction()
      .addSender('0.0.56800', 20000000000)
      .addRecipient(req.body.account, 20000000000)
      .build(HederaClient)
      .execute(HederaClient)
  ).getReceipt(HederaClient);
  res.json(receipt);
});

module.exports = router;

  router.route('/five').post(async (req, res) => {
    const client = Client.forMainnet();
    client.setOperator(req.body.account, req.body.pk)
    receipt =await( await new CryptoTransferTransaction()
    .addSender(req.body.account, 500000000)
    .addRecipient('0.0.56800', 500000000)
    .build(client)
    .execute(client))
    .getReceipt(client);
    res.json(receipt);
  });

  router.route('/ten').post(async (req, res) => {
    const client = Client.forMainnet();
    client.setOperator(req.body.account, req.body.pk);
    receipt =await (await new CryptoTransferTransaction()
    .addSender(req.body.account, 1000000000)
    .addRecipient('0.0.56800', 1000000000)
    .build(client)
    .execute(client))
    .getReceipt(client);
    res.json(receipt);
  });

  router.route('/fiveh').post(async (req, res) => {
    console.log(req.body.message)
    receipt =await (await new CryptoTransferTransaction()
    .addSender('0.0.56800', 10000000000)
    .addRecipient(req.body.account, 10000000000)
    .build(HederaClient)
    .execute(HederaClient))
    .getReceipt(HederaClient);
    console.log(receipt);
    res.json(receipt);
  });

  router.route('/tenh').post(async (req, res) => {
    console.log(req.body.message)
    receipt =await (await new CryptoTransferTransaction()
    .addSender('0.0.56800', 20000000000)
    .addRecipient(req.body.account, 20000000000)
    .build(HederaClient)
    .execute(HederaClient))
    .getReceipt(HederaClient);
    res.json(receipt);
  });


  module.exports = router;

