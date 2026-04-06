import Record from "../models/records.js";

export const createRecord = async (req, res) => {
  try {
    const { amount, type, category } = req.body;

    if (!amount || !type) {
      return res.status(400).json({ message: "Invalid data" });
    }

    const record = await Record.create({
      ...req.body,
      createdBy: req.user.id
    });

    res.status(201).json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getRecords = async (req, res) => {
  try {
    const { type, category, startDate, endDate } = req.query;

    let filter = {
      user: req.user.id   
    };

    if (type) {
      filter.type = type;
    }

    if (category) {
      filter.category = category;
    }

    // Filter by date range
    if (startDate || endDate) {
      filter.createdAt = {};

      if (startDate) {
        filter.createdAt.$gte = new Date(startDate);
      }

      if (endDate) {
        filter.createdAt.$lte = new Date(endDate);
      }
    }

    const records = await Record.find(filter)
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: records.length,
      records
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRecordById = async (req, res) => {
  try {
    const record = await Record.findById(req.params.id)
      .populate("createdBy", "name email");

    if (!record) {
      return res.status(404).json({
        message: "Record not found"
      });
    }

    res.status(200).json({
      success: true,
      record
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateRecord = async (req, res) => {
  try {
    const record = await Record.findById(req.params.id);

    if (!record) {
      return res.status(404).json({
        message: "Record not found"
      });
    }

    const { title, amount, type, category } = req.body;

    record.title = title || record.title;
    record.amount = amount || record.amount;
    record.type = type || record.type;
    record.category = category || record.category;

    await record.save();

    res.status(200).json({
      success: true,
      record
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteRecord = async (req, res) => {
  try {
    await Record.findByIdAndUpdate(req.params.id, {
      isDeleted: true
    });

    res.json({ message: "Record deleted (soft)" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};