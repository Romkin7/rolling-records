import SibApiV3Sdk from 'sib-api-v3-sdk';

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
        name: 'Asiakaspalvelu Halkoliiteri.com',
        email: 'asiakaspalvelu@halkoliiteri.com',
    };
    sendSmtpEmail.to = [{ email: reciever.email, name: reciever.name }];
    if (recievers) {
        sendSmtpEmail.bcc = [
            { email: 'romantuomisto@gmail.com', name: 'Roman Tuomisto' },
        ].concat(recievers);
    }
    sendSmtpEmail.replyTo = {
        email: 'asiakaspalvelu@halkoliiteri.com',
        name: 'Halkoliiteri.com',
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
