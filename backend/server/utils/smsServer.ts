import SibApiV3Sdk from 'sib-api-v3-sdk';
import { ISms } from '../../../@types';
const defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SIB_API_KEY;

let apiInstance = new SibApiV3Sdk.TransactionalSMSApi();

let sendTransacSms = new SibApiV3Sdk.SendTransacSms();

function createSmsContent(sms: ISms): ISms {
    return {
        sender: 'Rolling',
        recipient: sms.recipient || '0504919485',
        content: sms.content || 'test sms rolling records',
    };
}

export function sendSms(sms: ISms) {
    const newSms = createSmsContent(sms);
    apiInstance.sendTransacSms(newSms).then(
        function (data: any) {
            console.log(
                'API called successfully. Returned data: ' +
                    JSON.stringify(data),
            );
        },
        function (error: any) {
            console.error(error);
        },
    );
}
