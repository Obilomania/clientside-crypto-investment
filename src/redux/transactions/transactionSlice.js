import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userAccountBalance: 0,
  userTotalDepositAmount: 0,
  pendingDepositAmount: 0,
  userLastDepositAmount: 0,
  theUserLastDeposit: null,
  userTotalWithdrawalAmount: 0,
  userPendingWithdrawalAmount: 0,
  userLastWithdrawalAmount: 0,
  withdrawals: [],
  deposits: [],
  topUpTime: ''

}

const trnsactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    user_account_balance_amount: (state, action) => {
      state.userAccountBalance = action.payload
    },
    user_total_deposit_amount: (state, action) => {
      state.userTotalDepositAmount = action.payload
    },
    user_pending_deposit_amount: (state, action) => {
      state.pendingDepositAmount = action.payload
    },
    user_last_deposit_amount: (state, action) => {
      state.userLastDepositAmount = action.payload
    },
    user_last_deposit: (state, action) => {
      state.theUserLastDeposit = action.payload
    },
    user_total_withdrawal_amount: (state, action) => {
      state.userTotalWithdrawalAmount = action.payload
    },
    user_pending_withdrwawal_amount: (state, action) => {
      state.userPendingWithdrawalAmount = action.payload
    },
    user_last_withdrawal_amount: (state, action) => {
      state.userLastWithdrawalAmount = action.payload
    },
    all_user_transactions: (state, action) => {
      const transactions = action.payload
      state.withdrawals = transactions.withdraw
      state.deposits = transactions.deposits
    },
    top_up_time: (state, action) => {
      state.topUpTime = action.payload
    }
  },
});

export const { user_account_balance_amount, user_total_deposit_amount, user_pending_deposit_amount, user_last_deposit_amount,user_last_deposit, user_total_withdrawal_amount, user_pending_withdrwawal_amount, user_last_withdrawal_amount, all_user_transactions, top_up_time } = trnsactionSlice.actions;

export default trnsactionSlice.reducer