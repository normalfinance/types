import { AbstractAsset } from './assets';
import { AbstractNetwork } from './networks';
import { OffRampChannels, OnRampChannels } from './random';

export type Deposit = {
  userId: string; // Primary Key - address
  trxHash: string; // Sort Key
  fundId: string;
  from: string;
  channel: OnRampChannels;
  asset: AbstractAsset;
  quantity: string;
  usdValue: string;
  tokensToMint: string;
  mintTrxHash: string;
  createdAt: number;
  updatedAt: number;
};

export type Price = {
  memo: string; // Primary Key
  createdAt: number;
  prices: Record<string, unknown>;
  updatedAt: number | null;
};

export type Wallet = {
  userId: string; // Primary Key
  address: string; // Sory Key & InvertedIndex Primary Key
  network: AbstractNetwork;
  createdAt: number;
  updatedAt?: number | null;
};

export type Withdrawal = {
  userId: string; // Primary Key
  signature: string; // Sort Key
  fundId: string;
  to: string;
  channel: OffRampChannels;
  asset: AbstractAsset;
  quantity: string;
  usdValue: string;
  hash: string;
  tokensToBurn: string;
  burnTrxHash: string;
  withdrawTrxHash: string;
  trxStatus: WithdrawalStatus;
  createdAt: number;
  updatedAt: number;
};

export const enum WithdrawalStatus {
  NEW = 'NEW',
  FAILED = 'FAILED',
  COMPLETED = 'COMPLETED',
}
