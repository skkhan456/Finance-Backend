import Record from "../models/records.js";

export const getSummary = async (req, res) => {
  try {
    const records = await Record.find();

    let totalIncome = 0;
    let totalExpense = 0;

    records.forEach((record) => {
      if (record.type === "income") {
        totalIncome += record.amount;
      } else {
        totalExpense += record.amount;
      }
    });

    const balance = totalIncome - totalExpense;

    res.status(200).json({
      success: true,
      totalIncome,
      totalExpense,
      balance,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCategoryBreakdown = async (req, res) => {
  try {
    const result = await Record.aggregate([
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMonthlyAnalysis = async (req, res) => {
  try {
    const result = await Record.aggregate([
      {
        $group: {
          _id: {
            month: { $month: "$createdAt" },
            type: "$type",
          },
          total: { $sum: "$amount" },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ]);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
