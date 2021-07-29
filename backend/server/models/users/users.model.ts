import { Document, model, Schema, SchemaDefinitionProperty } from 'mongoose';
import { genSalt, hash, compare } from 'bcrypt';
import { IUserModel } from '../../types';
// Declare model interface
export interface UserDoc extends IUserModel, Document {
    setPassword(password: string): void;
    comparePasswords(password: string): boolean;
}

const userSchemaDef: SchemaDefinitionProperty = {
    email: { trim: true, type: String, required: true, unique: true, lowercaase: true },
    username: { trim: true, type: String, required: true, unique: true },
    password: { trim: true, type: String, required: true, select: false },
    admin: {
        isAdmin: { type: Boolean, default: false },
        premission_level: { type: String, default: 'basic' },
    },
    bank_account_number: { type: String, default: '' },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review',
        },
    ],
    buyer_reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review',
        },
    ],
    marketplace_terms_verified: { type: Boolean, default: false },
    marketplace_products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product',
        },
    ],
    completeAddress: {
        zipcode: { type: String, default: '' },
        address: { type: String, default: '' },
        city: { type: String, default: '' },
        country: { type: String, default: 'Finland', required: true },
    },
    mobileNumber: { type: String, default: '' },
    can_recieve_emails: { type: Boolean, default: false },
    name: {
        firstname: String,
        lastname: String,
    },
    fullname: { type: String },
    user: {
        isVerified: { type: Boolean, default: false },
        verification_pincode: String,
        expires: { type: Date },
    },
    sendGridId: { type: String },
    resetPasswordToken: {type: String },
    resetPasswordExpires: { type: Date },
    created: { type: Date, default: Date.now },
    avatar: { type: String },
    bonus_system: {
        coupons: [
            {
                createdAt: { type: Date, default: Date.now },
                value: { type: Number, default: 20 },
                valid: { type: Boolean, default: false },
            },
        ],
        total_price: { type: Number, default: 0 },
        stamps: { type: Number, default: 0 },
        upcoming_stamps: { type: Number, default: 0 },
    },
    history: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Order',
        },
    ],
};
// Define model schema
const userSchema = new Schema(userSchemaDef);
userSchema.index({ username: 1 }, { unique: true });
userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ created: 1 });
userSchema.index({ email: 'text', username: 'text', fullname: 'text' });
userSchema.set('timestamps', true);

userSchema.methods.setPassword = function (this: any, next: any) {
    if (!this.isModified('password')) return next();
    genSalt(10, function (err: any, salt: string) {
        if (err) return next(err);
        hash(this.password, salt, function (err: any, hash: string) {
            if (err) return next(err);
            this.password = hash;
            next();
        });
    });
};

userSchema.methods.comparePasswords = async function(this: any, password: string) {
    return await compare(password, this.password);
}

export default model<UserDoc>('User', userSchema);
