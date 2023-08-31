import { SupportedNetworks } from './networks';

export const enum FundIds {
  NORMAL_CRYPTO_INDEX = 'NCI',
  NORMAL_CRYPTO_INDEX_V2 = 'NCI-V2',
  NORMAL_DEFI_INDEX = 'NDI',
}

export const enum FundENS {
  NORMAL_CRYPTO_INDEX = 'crypto-index.funds.normalfinance.eth',
  NORMAL_CRYPTO_INDEX_V2 = 'crypto-index-v2.funds.normalfinance.eth',
  NORMAL_DEFI_INDEX = 'defi.funds.normalfinance.eth',
}

export type PlatformConfig = {
  funds: Record<FundIds, FundConfig>;
  supportedNetworks: Record<SupportedNetworks, boolean>;
};

export type FundConfig = {
  name: string;
  description: string;
  logoUrl?: string;
  bannerUrl?: string;
  annualFee: number;
  ens: string;
  launchDate: number;
  weightsLastUpdated: number;
  token: IToken;
  vaultByNetwork: Record<SupportedNetworks, string>;
  assetsByNetwork:
    | Record<SupportedNetworks, Record<string, IAsset>>
    | undefined;
};

export type IToken = {
  name: string;
  symbol: string;
  decimals: number;
  network: SupportedNetworks;
  address: string;
};

export type IAsset = {
  name: string;
  native: boolean;
  evm: boolean;
  address: string;
  weight: number;
};
