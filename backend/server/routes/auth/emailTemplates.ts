import { IUser } from '../../../../@types';
import { sendEmail } from '../../utils/sendingBlueSMTP';

export async function sendNotificationOnUnsubscribe(
    user: IUser,
): Promise<void> {
    const reciever = {
        email: 'rollingrecords@outlook.com',
        name: 'Tuomo Konu',
    };
    const subject = `Ilmoitus mainoskirjeen tilaamisen keskeyttämisestä`;
    const body = `
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
		`;
    sendEmail(subject, subject, body, reciever);
}
