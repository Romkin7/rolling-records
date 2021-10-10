import SibApiV3Sdk from 'sib-api-v3-sdk';
import { log } from './log';

interface IReciever {
    email: string;
    name: string;
}

export async function sendEmail(
    subject: string,
    messageId: string,
    body: string,
    reciever: IReciever,
    recievers?: IReciever[],
) {
    const defaultClient = SibApiV3Sdk.ApiClient.instance;

    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.SIB_API_KEY;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.subject = '{{params.parameter}}, {{params.subject}}';
    sendSmtpEmail.htmlContent = body;
    sendSmtpEmail.sender = {
        name: 'Rolling Records <info@rollingrecords.fi>',
        email: 'info@rollingrecords.fi',
    };
    sendSmtpEmail.to = [{ email: reciever.email, name: reciever.name }];
    if (recievers) {
        sendSmtpEmail.bcc = [
            { email: 'romantuomisto@gmail.com', name: 'Roman Tuomisto' },
        ].concat(recievers);
    }
    sendSmtpEmail.replyTo = {
        email: 'info@rollingrecords.fi',
        name: 'Rolling Records <info@rollingrecords.fi>',
    };
    sendSmtpEmail.headers = { 'Viestin-id': messageId };
    sendSmtpEmail.params = { parameter: 'Halkoliiteri.com', subject: subject };

    apiInstance.sendTransacEmail(sendSmtpEmail).then(
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

export async function createContact(contact: { email: string }) {
    const defaultClient = SibApiV3Sdk.ApiClient.instance;

    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.SIB_API_KEY;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //partnerKey.apiKeyPrefix = 'Token';
    const apiInstance = new SibApiV3Sdk.ContactsApi();

    const createContact = new SibApiV3Sdk.CreateContact(contact); // CreateContact | Values to create a contact

    apiInstance.createContact(createContact).then(
        function (data: any) {
            console.log('API called successfully. Returned data: ' + data);
        },
        function (error: any) {
            log(error);
        },
    );
}

export async function deleteContact(id: number) {
    const defaultClient = SibApiV3Sdk.ApiClient.instance;

    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.SIB_API_KEY;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //partnerKey.apiKeyPrefix = 'Token';
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //partnerKey.apiKeyPrefix = 'Token';

    var apiInstance = new SibApiV3Sdk.ContactsApi();

    apiInstance.deleteContact(id).then(
        function () {
            console.log('API called successfully.');
        },
        function (error: any) {
            log(error);
        },
    );
}
