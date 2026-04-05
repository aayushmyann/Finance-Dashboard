export function categorizeTransaction(t) {
  if (t.type === "income") return "income";

  if (["Netflix", "Amazon Prime", "Spotify"].includes(t.category))
    return "entertainment";

  if (["Bike EMI", "Home Loan EMI"].includes(t.category))
    return "emis";

  if (["SIP Investment", "Stock Investment (Upstox)"].includes(t.category))
    return "investments";

  if (["Groceries", "Dining"].includes(t.category))
    return "lifestyle";

  return "misc";
}