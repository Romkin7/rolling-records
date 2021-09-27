import { IUser } from '../../../../@types';
import sgMail from '@sendgrid/mail';
import { Request, Response } from 'express';
//Initialize sgMail
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendNotificationOnUnsubscribe(
    request: Request,
    response: Response,
    user: IUser,
): Promise<void> {
    const email = {
        from: `Rolling Records <info@rollingrecords.fi>`,
        to: 'rollingrecords@outlook.com',
        subject: `Ilmoitus mainoskirjeen tilaamisen keskeyttämisestä`,
        html: `
			<h1>Asiakas ${user.fullname}, on päättänyt poistua uutiskirjeen tilaus listalta,</h1>
			<p>Teidän tulee Välittömästi poistaa asiakkaan sähköposti Rolling Records uutiskirje listalta.</p>
			<p>Asiakkaan sähköposti on: ${user.email}.</p>
			<p>Tämä on automaattinen viesti, ethän vastaa tähän viestiin.</p>
			<p>Ystävällisin Terveisin, </p>
			<p>Rolling Records</p>
			<p>puh: +358 (0)50 344 55 39 </p>
			<p>email: rollingrecords@outlook.com</p>
			<p>rolling.tilaukset@gmail.com</p>
			<p>www.rollingrecords.fi</p>
		`,
    };
    await sgMail.send(email);
}
