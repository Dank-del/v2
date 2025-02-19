/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category TipProject
 * @category generated
 */
export type TipProjectInstructionArgs = {
  amount: beet.bignum
}
/**
 * @category Instructions
 * @category TipProject
 * @category generated
 */
export const tipProjectStruct = new beet.BeetArgsStruct<
  TipProjectInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['amount', beet.u64],
  ],
  'TipProjectInstructionArgs'
)
/**
 * Accounts required by the _tipProject_ instruction
 *
 * @property [_writable_, **signer**] authority
 * @property [_writable_] projectAccount
 * @property [_writable_] tokenMint
 * @property [_writable_] tokenAtaSender
 * @property [_writable_] tokenAtaReceiver
 * @category Instructions
 * @category TipProject
 * @category generated
 */
export type TipProjectInstructionAccounts = {
  authority: web3.PublicKey
  projectAccount: web3.PublicKey
  tokenMint: web3.PublicKey
  tokenAtaSender: web3.PublicKey
  tokenAtaReceiver: web3.PublicKey
  systemProgram?: web3.PublicKey
  tokenProgram?: web3.PublicKey
  rent?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const tipProjectInstructionDiscriminator = [
  43, 16, 112, 197, 53, 202, 2, 116,
]

/**
 * Creates a _TipProject_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category TipProject
 * @category generated
 */
export function createTipProjectInstruction(
  accounts: TipProjectInstructionAccounts,
  args: TipProjectInstructionArgs,
  programId = new web3.PublicKey('3o5FHxJVuU39wv7VSaYdewPosHLQzZGvPtdwnU4qYBiS')
) {
  const [data] = tipProjectStruct.serialize({
    instructionDiscriminator: tipProjectInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.authority,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.projectAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenAtaSender,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenAtaReceiver,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
