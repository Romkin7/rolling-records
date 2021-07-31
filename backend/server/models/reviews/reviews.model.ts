import { Document, model, Schema, SchemaDefinitionProperty } from 'mongoose';
import { IReviewModel } from '../../../../@types';
// Declare model interface
export interface ReviewDoc extends IReviewModel, Document {}

const reviewSchemaDef: SchemaDefinitionProperty = {
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    reciever: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
};
// Define model schema
const reviewSchema = new Schema(reviewSchemaDef);

reviewSchema.set('timestamps', true);
//Export ReviewSchema as model

export default model<ReviewDoc>('Review', reviewSchema);
