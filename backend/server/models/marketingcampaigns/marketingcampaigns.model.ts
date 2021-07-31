import { Document, model, Schema, SchemaDefinitionProperty } from 'mongoose';
import { IMarketingCampaignModel } from '../../../../@types';
// Declare model interface
export interface MarketingCampaignDoc
    extends IMarketingCampaignModel,
        Document {}

const marketingCampaignSchemaDef: SchemaDefinitionProperty = {
    priceLimit: { type: Number, required: true },
    active: { type: Boolean, default: false },
    name: { type: String, required: true },
    category: { type: String, required: true }, //freeShipment, doubleBonusPoints, twentyPercentDiscount
};
// Define model schema
const marketingCampaignSchema = new Schema(marketingCampaignSchemaDef);

marketingCampaignSchema.set('timestamps', true);
//Export ContactSchema as model

export default model<MarketingCampaignDoc>(
    'MarketingCampaign',
    marketingCampaignSchema,
);
