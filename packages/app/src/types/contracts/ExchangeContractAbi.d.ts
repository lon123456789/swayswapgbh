/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type {
  Interface,
  FunctionFragment,
  DecodedValue,
  Contract,
  Overrides,
  BigNumberish,
  BytesLike,
  CallResult,
  ScriptTransactionRequest,
  TransactionResult,
} from 'fuels';

export type ContractIdInput = { value: string };

export type ContractId = { value: string };

export type PoolInfoInput = {
  eth_reserve: BigNumberish;
  token_reserve: BigNumberish;
  lp_token_supply: BigNumberish;
};

export type PoolInfo = {
  eth_reserve: bigint;
  token_reserve: bigint;
  lp_token_supply: bigint;
};

export type RemoveLiquidityInfoInput = {
  eth_amount: BigNumberish;
  token_amount: BigNumberish;
};

export type RemoveLiquidityInfo = { eth_amount: bigint; token_amount: bigint };

export type PreviewInfoInput = { amount: BigNumberish; has_liquidity: boolean };

export type PreviewInfo = { amount: bigint; has_liquidity: boolean };

interface ExchangeContractAbiInterface extends Interface {
  submit: {
    get_balance: FunctionFragment;
    get_pool_info: FunctionFragment;
    get_add_liquidity_token_amount: FunctionFragment;
    deposit: FunctionFragment;
    withdraw: FunctionFragment;
    add_liquidity: FunctionFragment;
    remove_liquidity: FunctionFragment;
    swap_with_minimum: FunctionFragment;
    swap_with_maximum: FunctionFragment;
    get_swap_with_minimum: FunctionFragment;
    get_swap_with_maximum: FunctionFragment;
  };
  submitResult: {
    get_balance: FunctionFragment;
    get_pool_info: FunctionFragment;
    get_add_liquidity_token_amount: FunctionFragment;
    deposit: FunctionFragment;
    withdraw: FunctionFragment;
    add_liquidity: FunctionFragment;
    remove_liquidity: FunctionFragment;
    swap_with_minimum: FunctionFragment;
    swap_with_maximum: FunctionFragment;
    get_swap_with_minimum: FunctionFragment;
    get_swap_with_maximum: FunctionFragment;
  };
  dryRun: {
    get_balance: FunctionFragment;
    get_pool_info: FunctionFragment;
    get_add_liquidity_token_amount: FunctionFragment;
    deposit: FunctionFragment;
    withdraw: FunctionFragment;
    add_liquidity: FunctionFragment;
    remove_liquidity: FunctionFragment;
    swap_with_minimum: FunctionFragment;
    swap_with_maximum: FunctionFragment;
    get_swap_with_minimum: FunctionFragment;
    get_swap_with_maximum: FunctionFragment;
  };
  dryRunResult: {
    get_balance: FunctionFragment;
    get_pool_info: FunctionFragment;
    get_add_liquidity_token_amount: FunctionFragment;
    deposit: FunctionFragment;
    withdraw: FunctionFragment;
    add_liquidity: FunctionFragment;
    remove_liquidity: FunctionFragment;
    swap_with_minimum: FunctionFragment;
    swap_with_maximum: FunctionFragment;
    get_swap_with_minimum: FunctionFragment;
    get_swap_with_maximum: FunctionFragment;
  };
  simulate: {
    get_balance: FunctionFragment;
    get_pool_info: FunctionFragment;
    get_add_liquidity_token_amount: FunctionFragment;
    deposit: FunctionFragment;
    withdraw: FunctionFragment;
    add_liquidity: FunctionFragment;
    remove_liquidity: FunctionFragment;
    swap_with_minimum: FunctionFragment;
    swap_with_maximum: FunctionFragment;
    get_swap_with_minimum: FunctionFragment;
    get_swap_with_maximum: FunctionFragment;
  };
  simulateResult: {
    get_balance: FunctionFragment;
    get_pool_info: FunctionFragment;
    get_add_liquidity_token_amount: FunctionFragment;
    deposit: FunctionFragment;
    withdraw: FunctionFragment;
    add_liquidity: FunctionFragment;
    remove_liquidity: FunctionFragment;
    swap_with_minimum: FunctionFragment;
    swap_with_maximum: FunctionFragment;
    get_swap_with_minimum: FunctionFragment;
    get_swap_with_maximum: FunctionFragment;
  };
  prepareCall: {
    get_balance: FunctionFragment;
    get_pool_info: FunctionFragment;
    get_add_liquidity_token_amount: FunctionFragment;
    deposit: FunctionFragment;
    withdraw: FunctionFragment;
    add_liquidity: FunctionFragment;
    remove_liquidity: FunctionFragment;
    swap_with_minimum: FunctionFragment;
    swap_with_maximum: FunctionFragment;
    get_swap_with_minimum: FunctionFragment;
    get_swap_with_maximum: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'get_balance', values: [ContractIdInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_pool_info', values?: undefined): Uint8Array;
  encodeFunctionData(
    functionFragment: 'get_add_liquidity_token_amount',
    values: [BigNumberish]
  ): Uint8Array;
  encodeFunctionData(functionFragment: 'deposit', values?: undefined): Uint8Array;
  encodeFunctionData(
    functionFragment: 'withdraw',
    values: [BigNumberish, ContractIdInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: 'add_liquidity',
    values: [BigNumberish, BigNumberish]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: 'remove_liquidity',
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: 'swap_with_minimum',
    values: [BigNumberish, BigNumberish]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: 'swap_with_maximum',
    values: [BigNumberish, BigNumberish]
  ): Uint8Array;
  encodeFunctionData(functionFragment: 'get_swap_with_minimum', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_swap_with_maximum', values: [BigNumberish]): Uint8Array;

  decodeFunctionData(functionFragment: 'get_balance', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_pool_info', data: BytesLike): DecodedValue;
  decodeFunctionData(
    functionFragment: 'get_add_liquidity_token_amount',
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(functionFragment: 'deposit', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'withdraw', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'add_liquidity', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'remove_liquidity', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'swap_with_minimum', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'swap_with_maximum', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_swap_with_minimum', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_swap_with_maximum', data: BytesLike): DecodedValue;
}

export class ExchangeContractAbi extends Contract {
  interface: ExchangeContractAbiInterface;
  submit: {
    get_balance(
      asset_id: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    get_pool_info(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PoolInfo>;

    get_add_liquidity_token_amount(
      eth_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    deposit(overrides?: Overrides & { from?: string | Promise<string> }): Promise<void>;

    withdraw(
      amount: BigNumberish,
      asset_id: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    add_liquidity(
      min_liquidity: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    remove_liquidity(
      min_eth: BigNumberish,
      min_tokens: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<RemoveLiquidityInfo>;

    swap_with_minimum(
      min: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    swap_with_maximum(
      amount: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    get_swap_with_minimum(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PreviewInfo>;

    get_swap_with_maximum(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PreviewInfo>;
  };
  submitResult: {
    get_balance(
      asset_id: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    get_pool_info(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    get_add_liquidity_token_amount(
      eth_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    deposit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    withdraw(
      amount: BigNumberish,
      asset_id: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    add_liquidity(
      min_liquidity: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    remove_liquidity(
      min_eth: BigNumberish,
      min_tokens: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    swap_with_minimum(
      min: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    swap_with_maximum(
      amount: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    get_swap_with_minimum(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    get_swap_with_maximum(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;
  };
  dryRun: {
    get_balance(
      asset_id: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    get_pool_info(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PoolInfo>;

    get_add_liquidity_token_amount(
      eth_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    deposit(overrides?: Overrides & { from?: string | Promise<string> }): Promise<void>;

    withdraw(
      amount: BigNumberish,
      asset_id: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    add_liquidity(
      min_liquidity: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    remove_liquidity(
      min_eth: BigNumberish,
      min_tokens: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<RemoveLiquidityInfo>;

    swap_with_minimum(
      min: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    swap_with_maximum(
      amount: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    get_swap_with_minimum(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PreviewInfo>;

    get_swap_with_maximum(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PreviewInfo>;
  };
  dryRunResult: {
    get_balance(
      asset_id: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    get_pool_info(overrides?: Overrides & { from?: string | Promise<string> }): Promise<CallResult>;

    get_add_liquidity_token_amount(
      eth_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    deposit(overrides?: Overrides & { from?: string | Promise<string> }): Promise<CallResult>;

    withdraw(
      amount: BigNumberish,
      asset_id: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    add_liquidity(
      min_liquidity: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    remove_liquidity(
      min_eth: BigNumberish,
      min_tokens: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    swap_with_minimum(
      min: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    swap_with_maximum(
      amount: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    get_swap_with_minimum(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    get_swap_with_maximum(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;
  };
  prepareCall: {
    get_balance(
      asset_id: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    get_pool_info(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    get_add_liquidity_token_amount(
      eth_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    deposit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    withdraw(
      amount: BigNumberish,
      asset_id: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    add_liquidity(
      min_liquidity: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    remove_liquidity(
      min_eth: BigNumberish,
      min_tokens: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    swap_with_minimum(
      min: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    swap_with_maximum(
      amount: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    get_swap_with_minimum(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    get_swap_with_maximum(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;
  };
  simulate: {
    get_balance(
      asset_id: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    get_pool_info(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PoolInfo>;

    get_add_liquidity_token_amount(
      eth_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    deposit(overrides?: Overrides & { from?: string | Promise<string> }): Promise<void>;

    withdraw(
      amount: BigNumberish,
      asset_id: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    add_liquidity(
      min_liquidity: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    remove_liquidity(
      min_eth: BigNumberish,
      min_tokens: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<RemoveLiquidityInfo>;

    swap_with_minimum(
      min: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    swap_with_maximum(
      amount: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    get_swap_with_minimum(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PreviewInfo>;

    get_swap_with_maximum(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PreviewInfo>;
  };
  simulateResult: {
    get_balance(
      asset_id: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    get_pool_info(overrides?: Overrides & { from?: string | Promise<string> }): Promise<CallResult>;

    get_add_liquidity_token_amount(
      eth_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    deposit(overrides?: Overrides & { from?: string | Promise<string> }): Promise<CallResult>;

    withdraw(
      amount: BigNumberish,
      asset_id: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    add_liquidity(
      min_liquidity: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    remove_liquidity(
      min_eth: BigNumberish,
      min_tokens: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    swap_with_minimum(
      min: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    swap_with_maximum(
      amount: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    get_swap_with_minimum(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    get_swap_with_maximum(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;
  };

  get_balance(
    asset_id: ContractIdInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<bigint>;

  get_pool_info(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PoolInfo>;

  get_add_liquidity_token_amount(
    eth_amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<bigint>;

  deposit(overrides?: Overrides & { from?: string | Promise<string> }): Promise<void>;

  withdraw(
    amount: BigNumberish,
    asset_id: ContractIdInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  add_liquidity(
    min_liquidity: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<bigint>;

  remove_liquidity(
    min_eth: BigNumberish,
    min_tokens: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RemoveLiquidityInfo>;

  swap_with_minimum(
    min: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<bigint>;

  swap_with_maximum(
    amount: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<bigint>;

  get_swap_with_minimum(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PreviewInfo>;

  get_swap_with_maximum(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PreviewInfo>;
}
