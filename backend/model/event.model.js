import mongoose from 'mongoose';
const { Schema, model } = mongoose
const schemaObject = new Schema(
  {
    title: { type: String, required: true, lowercase: true  },
    description: { type: String, required: true },
    category: { type: String, required: true, lowercase: true  },
    date: { type: Date, required: true },
    isVirtual: { type: Boolean, default: false },
    address: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const EventModel = model('Event', schemaObject);

export default EventModel;
