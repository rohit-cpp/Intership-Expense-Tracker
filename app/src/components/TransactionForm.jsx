import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "./ui/select";
// import { toast } from "./ui/use-toast";
import useTransactionStore from "../store/useTransactionStore";

const categories = [
  "Food",
  "Transportation",
  "Entertainment",
  "Utilities",
  "Other",
];

export default function TransactionForm() {
  const [type, setType] = useState("income");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Other");
  const [date, setDate] = useState("");
  const addTransaction = useTransactionStore((state) => state.addTransaction);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || isNaN(amount) || !date) {
      toast({
        title: "Invalid input",
        description: "Please fill all fields correctly.",
        variant: "destructive",
      });
      return;
    }
    const newTx = {
      id: Date.now(),
      type,
      description,
      amount: parseFloat(amount),
      category,
      date,
    };
    addTransaction(newTx);
    setDescription("");
    setAmount("");
    setDate("");
    setCategory("Other");
    toast({
      title: "Transaction added",
      description: `${type} - ${description}`,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-2">
        <Button
          type="button"
          variant={type === "income" ? "default" : "outline"}
          onClick={() => setType("income")}
        >
          Income
        </Button>
        <Button
          type="button"
          variant={type === "expense" ? "default" : "outline"}
          onClick={() => setType("expense")}
        >
          Expense
        </Button>
      </div>
      <div className="grid gap-2">
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full">
        Add Transaction
      </Button>
    </form>
  );
}
