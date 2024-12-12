/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.35.3.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

export interface InstantiateMsg {
  hooks: string[];
  owner: string;
}
export type ExecuteMsg =
  | {
      ownable: OwnableMsg;
    }
  | {
      post_dispatch: PostDispatchMsg;
    }
  | {
      set_hooks: {
        hooks: string[];
      };
    };
export type OwnableMsg =
  | {
      init_ownership_transfer: {
        next_owner: string;
      };
    }
  | {
      revoke_ownership_transfer: {};
    }
  | {
      claim_ownership: {};
    };
export type HexBinary = string;
export interface PostDispatchMsg {
  message: HexBinary;
  metadata: HexBinary;
}
export type QueryMsg =
  | {
      ownable: OwnableQueryMsg;
    }
  | {
      hook: HookQueryMsg;
    }
  | {
      aggregate_hook: AggregateHookQueryMsg;
    };
export type OwnableQueryMsg =
  | {
      get_owner: {};
    }
  | {
      get_pending_owner: {};
    };
export type HookQueryMsg =
  | {
      quote_dispatch: QuoteDispatchMsg;
    }
  | {
      mailbox: {};
    };
export type AggregateHookQueryMsg = {
  hooks: {};
};
export interface QuoteDispatchMsg {
  message: HexBinary;
  metadata: HexBinary;
}
export type Addr = string;
export interface OwnerResponse {
  owner: Addr;
}
export interface PendingOwnerResponse {
  pending_owner?: Addr | null;
}
export interface HooksResponse {
  hooks: string[];
}
export interface MailboxResponse {
  mailbox: string;
}
export type Uint128 = string;
export interface QuoteDispatchResponse {
  gas_amount?: Coin | null;
}
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
