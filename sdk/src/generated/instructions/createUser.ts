/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category CreateUser
 * @category generated
 */
export type CreateUserInstructionArgs = {
  username: string
  metadata: string
}
/**
 * @category Instructions
 * @category CreateUser
 * @category generated
 */
export const createUserStruct = new beet.FixableBeetArgsStruct<
  CreateUserInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['username', beet.utf8String],
    ['metadata', beet.utf8String],
  ],
  'CreateUserInstructionArgs'
)
/**
 * Accounts required by the _createUser_ instruction
 *
 * @property [_writable_, **signer**] authority
 * @property [_writable_] userAccount
 * @category Instructions
 * @category CreateUser
 * @category generated
 */
export type CreateUserInstructionAccounts = {
  authority: web3.PublicKey
  userAccount: web3.PublicKey
  systemProgram?: web3.PublicKey
  rent?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const createUserInstructionDiscriminator = [
  108, 227, 130, 130, 252, 109, 75, 218,
]

/**
 * Creates a _CreateUser_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category CreateUser
 * @category generated
 */
export function createCreateUserInstruction(
  accounts: CreateUserInstructionAccounts,
  args: CreateUserInstructionArgs,
  programId = new web3.PublicKey('3o5FHxJVuU39wv7VSaYdewPosHLQzZGvPtdwnU4qYBiS')
) {
  const [data] = createUserStruct.serialize({
    instructionDiscriminator: createUserInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.authority,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.userAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
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
