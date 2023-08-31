export type SupportedNetworks = EVMNetworks | NonEVMNetworks;

export enum AbstractNetwork {
  EVM = 'EVM',
  SOLANA = 'SOLANA',
  TRON = 'TRON',
  FILECOIN = 'FILECOIN',
  TON = 'TON',
  POLKADOT = 'POLKADOT',
}

export const enum EVMNetworks {
  ETHEREUM = 'ETHEREUM',
  POLYGON = 'POLYGON',
  POLYGONMUMBAI = 'POLYGONMUMBAI',
  AVAXC = 'AVAXC',
  BSC = 'BSC',
  OPTIMISM = 'OPTIMISM',
  ARBITRUM = 'ARBITRUM',
  HEDERA = 'HEDERA',
  FILECOIN = 'FILECOIN',
}

export const enum NonEVMNetworks {
  SOLANA = 'SOLANA',
  TRON = 'TRON',
  TON = 'TON',
  POLKADOT = 'POLKADOT',
}

export type ChainInfo = {
  network: SupportedNetworks;
  evm: boolean;
  nativeAsset: string;
  decimals: number;
  blocksUntilConfirmed: number;
};
