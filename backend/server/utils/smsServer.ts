import SibApiV3Sdk from 'sib-api-v3-sdk';
import { ISms } from '../../../@types';
import { log } from './log';
const defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SIB_API_KEY;

let apiInstance = new SibApiV3Sdk.TransactionalSMSApi();

let sendTransacSms = new SibApiV3Sdk.SendTransacSms();

function createSmsContent(sms: ISms): ISms {
    return {
        sender: 'Rolling',
        recipient: sms.recipient,
        content: sms.content,
    };
}

export function sendSms(sms: ISms) {
    const newSms = createSmsContent(sms);
    apiInstance.sendTransacSms(newSms).then(
        function (data: any) {
            log(data);
        },
        function (error: any) {
            log(error);
        },
    );
}
