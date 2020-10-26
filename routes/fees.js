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
  const client = Client.forTestnet();
  client.setOperator(req.body.account, req.body.pk);
  receipt = await (
    await new CryptoTransferTransaction()
      .addSender(req.body.account, 500000000)
      .addRecipient('0.0.59314', 500000000)
      .build(client)
      .execute(client)
  ).getReceipt(client);
  res.json(receipt);
});

router.route('/ten').post(async (req, res) => {
  const client = Client.forTestnet();
  client.setOperator(req.body.account, req.body.pk);
  receipt = await (
    await new CryptoTransferTransaction()
      .addSender(req.body.account, 1000000000)
      .addRecipient('0.0.59314', 1000000000)
      .build(client)
      .execute(client)
  ).getReceipt(client);
  res.json(receipt);
});

router.route('/fiveh').post(async (req, res) => {
  console.log(req.body.message);
  receipt = await (
    await new CryptoTransferTransaction()
      .addSender('0.0.59314', 50000000000)
      .addRecipient(req.body.account, 50000000000)
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
      .addSender('0.0.59314', 100000000000)
      .addRecipient(req.body.account, 100000000000)
      .build(HederaClient)
      .execute(HederaClient)
  ).getReceipt(HederaClient);
  res.json(receipt);
});

module.exports = router;

  router.route('/five').post(async (req, res) => {
    const client = Client.forTestnet();
    client.setOperator(req.body.account, req.body.pk)
    receipt =await( await new CryptoTransferTransaction()
    .addSender(req.body.account, 500000000)
    .addRecipient('0.0.49451', 500000000)
    .build(client)
    .execute(client))
    .getReceipt(client);
    res.json(receipt);
  });

  router.route('/ten').post(async (req, res) => {
    const client = Client.forTestnet();
    client.setOperator(req.body.account, req.body.pk);
    receipt =await (await new CryptoTransferTransaction()
    .addSender(req.body.account, 1000000000)
    .addRecipient('0.0.49451', 1000000000)
    .build(client)
    .execute(client))
    .getReceipt(client);
    res.json(receipt);
  });

  router.route('/fiveh').post(async (req, res) => {
    console.log(req.body.message)
    receipt =await (await new CryptoTransferTransaction()
    .addSender('0.0.49451', 50000000000)
    .addRecipient(req.body.account, 50000000000)
    .build(HederaClient)
    .execute(HederaClient))
    .getReceipt(HederaClient);
    console.log(receipt);
    res.json(receipt);
  });

  router.route('/tenh').post(async (req, res) => {
    console.log(req.body.message)
    receipt =await (await new CryptoTransferTransaction()
    .addSender('0.0.49451', 100000000000)
    .addRecipient(req.body.account, 100000000000)
    .build(HederaClient)
    .execute(HederaClient))
    .getReceipt(HederaClient);
    res.json(receipt);
  });

  
  module.exports = router;

