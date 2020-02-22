import { Document } from 'mongoose';

export interface Book extends Document {
  readonly title: String;
  readonly ISBN: Number;
  readonly Author: String;
}