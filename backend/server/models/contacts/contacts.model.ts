import { Document, model, Schema, SchemaDefinitionProperty } from 'mongoose';
import { IContactModel } from '../../types';
// Declare model interface
export interface ContactDoc extends IContactModel, Document {}

const contactSchemaDef: SchemaDefinitionProperty = {
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: null,
    },
    fullname: { type: String },
    email: { type: String },
    phone: { type: String },
    subject: { type: String },
    messages: [
        {
            text: String,
            author: String,
            createdAt: { type: Date, default: Date.now },
        },
    ],
    status: { type: String, default: 'pending' }, //also "recived", "done"
    handler: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
};
// Define model schema
const contactSchema = new Schema(contactSchemaDef);

contactSchema.set('timestamps', true);
//Export ContactSchema as model

export default model<ContactDoc>('Contact', contactSchema);
