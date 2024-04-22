import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  accountBalance: 0,
  totalDeposit: 0,
  pendingDeposit: 0,
  lastDeposit: 0,
  totalWithdrawal: 0,
  pendingWithdrawal: 0,
  lastWithdrawal: 0,
  withdrawals: [],
  deposits: [],
  topUpTime: null

}

const trnsactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    user_account_balance: (state, action) => {
      state.accountBalance = action.payload;
    },
    user_last_deposit: (state, action) => {
      state.lastDeposit = action.payload;
    },
    user_pending_deposit: (state, action) => {
      const allUserDeposit = action.payload;
      if (!allUserDeposit) {
        state.pendingDeposit = 0
      } else {
        const depositProcessing = allUserDeposit?.filter(
          (obj) => !obj.isProcessing
        );
        //Total amount of processing Deposit transactions
        const pendingDepositTotal = depositProcessing?.reduce((acc, object) => {
          return acc + object.amount;
        }, 0);
        state.pendingDeposit = pendingDepositTotal;
      }
    },
    user_total_deposit: (state, action) => {
      const deposits = action.payload;
      if (!deposits) {
        state.totalDeposit = 0
      } else {
        const theTotalDeposit = deposits?.reduce((acc, object) => {
          return acc + object.amount;
        }, 0);
        state.totalDeposit = theTotalDeposit;
      }
    },
    user_last_withdrawal: (state, action) => {
      const theLastWith = action.payload
      if (!theLastWith) {
        state.lastWithdrawal = 0
      }
      else {
        state.lastWithdrawal = theLastWith;
      }

    },
    user_pending_withdrawal: (state, action) => {
      const pWithdrawal = action.payload;
      if (!pWithdrawal) {
        state.pendingWithdrawal = 0
      } else {
        //FIlter Deposit still processing
        const withdrawalProcessing = pWithdrawal?.filter(
          (obj) => !obj.isProcessing
        );
        //Total amount of processing Deposit transactions
        const pendngWithdrawTotal = withdrawalProcessing?.reduce(
          (acc, object) => {
            return acc + object.amount;
          },
          0
        );
        state.pendingWithdrawal = pendngWithdrawTotal;
      }

    },
    user_total_withdrawal: (state, action) => {
      const withdrawals = action.payload;
      if (!withdrawals) {
        state.totalWithdrawal = 0
      } else {
        const theTotalWithdrawal = withdrawals?.reduce((acc, object) => {
          return acc + object.amount;
        }, 0);
        state.totalWithdrawal = theTotalWithdrawal;
      }
    },
    all_transactions: (state, action) => {
      const allTransactions = action.payload;
      if (!allTransactions) {
        state.deposits = []
        state.withdraw = []
      } else {
        const deposits = allTransactions.deposits
        const withdrawals = allTransactions.withdraw
        state.deposits = deposits
        state.withdrawals = withdrawals
      }
    }
  },
});

export const {
  user_account_balance,
  user_last_deposit,
  user_pending_deposit,
  user_total_deposit,
  user_last_withdrawal,
  user_pending_withdrawal,
  user_total_withdrawal,
  all_transactions
} = trnsactionSlice.actions;

export default trnsactionSlice.reducer