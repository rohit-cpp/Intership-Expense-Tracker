import React from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";
import Chart from "./components/Chart";
import "./App.css";
// import { Toaster } from "./components/ui/toaster";

export default function App() {
  return (
    <div className="min-h-screen p-4 font-sans text-zinc-900 dark:text-white">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-5xl font-bold text-center mb-6">
          💸 Expense Tracker
        </h1>

        <div className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-2xl bg-white/70 dark:bg-zinc-900/50 shadow-inner">
          <Summary />
        </div>

        <div className="grid gap-4 p-4 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-lg backdrop-blur-md bg-white/70 dark:bg-zinc-900/50">
          <TransactionForm />
        </div>

        <div className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-2xl bg-white/70 dark:bg-zinc-900/50 shadow-lg">
          <TransactionList />
        </div>

        <div className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-2xl bg-white/70 dark:bg-zinc-900/50 shadow-md">
          <Chart />
        </div>
      </div>
    </div>
  );
}
