import React from "react";
import useTransactionStore from "../store/useTransactionStore";

export default function Summary() {
  const { transactions } = useTransactionStore();
  const income = transactions
    .filter((tx) => tx.type === "income")
    .reduce((acc, tx) => acc + tx.amount, 0);
  const expense = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((acc, tx) => acc + tx.amount, 0);
  const balance = income - expense;

  return (
    <div className="grid grid-cols-3 gap-4 text-center">
      <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-xl">
        <h4 className="text-sm text-zinc-500">Income</h4>
        <p className="text-lg font-semibold text-green-600 dark:text-green-300">
          ₹{income.toFixed(2)}
        </p>
      </div>
      <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-xl">
        <h4 className="text-sm text-zinc-500">Expenses</h4>
        <p className="text-lg font-semibold text-red-500 dark:text-red-300">
          ₹{expense.toFixed(2)}
        </p>
      </div>
      <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
        <h4 className="text-sm text-zinc-500">Balance</h4>
        <p className="text-lg font-semibold text-blue-600 dark:text-blue-300">
          ₹{balance.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
