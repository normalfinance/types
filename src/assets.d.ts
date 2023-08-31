export type AbstractAsset = EVMAsset | NonEVMAsset;

export type EVMAsset =
  | EthereumAssets
  | PolygonAssets
  | BscAssets
  | AvalancheAssets
  | OptimismAssets
  | ArbitrumAssets
  | HederaAssets;

export type NonEVMAsset =
  | TronAssets
  | FilecoinAssets
  | TonAssets
  | SolanaAssets
  | PolkadotAssets;

export const enum EthereumAssets {
  WRAPPED_BITCOIN = 'WBTC_ETHEREUM',
  ETHEREUM = 'ETH_ETHEREUM',
  SHIBA_INU = 'SHIB_ETHEREUM',
  CHAINLINK = 'LINK_ETHEREUM',
  UNISWAP = 'UNI_ETHEREUM',
  LIDO_DAO = 'LDO_ETHEREUM',
  AAVE = 'AAVE_ETHEREUM',
}

export const enum PolygonAssets {
  POLYGON = 'MATIC_POLYGON',
}

export const enum BscAssets {
  BNB = 'BNB_BSC',
}

export const enum AvalancheAssets {
  AVAX = 'AVAX_AVAXC',
}

export const enum OptimismAssets {
  OPTIMISM = 'OP_OPTIMISM',
}

export const enum ArbitrumAssets {
  ARBITRUM = 'ARB_ARBITRUM',
}

export const enum TronAssets {
  TRON = 'TRX_TRON',
}

export const enum FilecoinAssets {
  FILECOIN = 'FIL_FILECOIN',
}

export const enum TonAssets {
  TON = 'TON_TON',
}

export const enum HederaAssets {
  HEDERA = 'HBAR_HEDERA',
}

export const enum SolanaAssets {
  SOLANA = 'SOL_SOLANA',
}

export const enum PolkadotAssets {
  POLKADOT = 'DOT_POLKADOT',
}
