import React from "react";
import useTransactionStore from "../store/useTransactionStore";
import { Button } from "./ui/button";

export default function TransactionList() {
  const { transactions, deleteTransaction } = useTransactionStore();

  return (
    <div className="space-y-4">
      {transactions.map((tx) => (
        <div
          key={tx.id}
          className="flex justify-between items-center bg-white/70 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-700 p-4 rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <div>
            <h3 className="font-semibold text-zinc-800 dark:text-zinc-100">
              {tx.description}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {tx.category} • {tx.date}
            </p>
          </div>
          <div className="text-right">
            <p
              className={`font-medium ${
                tx.type === "income" ? "text-green-500" : "text-red-500"
              }`}
            >
              {tx.type === "income" ? "+" : "-"}₹{tx.amount.toFixed(2)}
            </p>
            <Button
              size="sm"
              variant="outline"
              onClick={() => deleteTransaction(tx.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
