// (https://docs.moralis.io/streams-api/evm/response-body)

export type MoralisStreamsWebhookEvent = {
  confirmed: boolean;
  chainId: string;
  abi: any[];
  streamId: string;
  tag: string;
  retries: number;
  block: Record<string, any>;
  logs: Record<string, any>[];
  txs: MoralisStreamsNativeTransaction[];
  txsInternal: Record<string, any>[];
  erc20Transfers: MoralisStreamsERC20Transfer[];
  erc20Approvals: Record<string, any>[];
  nftApprovals: Record<string, any>;
  nftTransfers: Record<string, any>[];
};

export type MoralisStreamsNativeTransaction = {
  hash: string;
  gas: string;
  gasPrice: string;
  nonce: string;
  input: string;
  transactionIndex: string;
  fromAddress: string;
  toAddress: string;
  value: string;
  type: string;
  v: string;
  r: string;
  s: string;
  receiptCumulativeGasUsed: string;
  receiptGasUsed: string;
  receiptContractAddress: string;
  receiptRoot: string;
  receiptStatus: string;
};

export type MoralisStreamsERC20Transfer = {
  transactionHash: string;
  logIndex: string;
  contract: string;
  from: string;
  to: string;
  value: string;
  tokenName: string;
  tokenSymbol: string;
  tokenDecimals: string;
  valueWithDecimals: string;
};

// (https://docs.onramper.com/docs/api-webhooks#validating-payloads-from-onramper)

export type OnramperWebhookEvent = {
  apiKey: string;
  country: string; // ISO 2 letter country code.
  inAmount: number;
  onramp: string;
  onrampTransactionId: string;
  outAmount: number;
  partnerContext: string; // PartnerContext once JSON.parse()
  paymentMethod: string;
  sourceCurrency: string;
  status: string;
  statusDate: string;
  targetCurrency: string;
  transactionHash: string;
  transactionId: string;
  transactionType: string;
  walletAddress: string;
};

export type OnramperPartnerContext = {
  userId: string;
  fundId: string;
};
