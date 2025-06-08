import { create } from "zustand";

const useTransactionStore = create((set) => ({
  transactions: JSON.parse(localStorage.getItem("transactions") || "[]"),
  addTransaction: (tx) =>
    set((state) => {
      const updated = [...state.transactions, tx];
      localStorage.setItem("transactions", JSON.stringify(updated));
      return { transactions: updated };
    }),
  deleteTransaction: (id) =>
    set((state) => {
      const updated = state.transactions.filter((t) => t.id !== id);
      localStorage.setItem("transactions", JSON.stringify(updated));
      return { transactions: updated };
    }),
}));

export default useTransactionStore;
