
import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  title: String,
  ISBN: Number,
  Author: String,
});