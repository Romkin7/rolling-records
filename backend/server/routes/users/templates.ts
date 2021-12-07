import { UserDoc } from '../../models/users/users.model';
import { sendEmail } from '../../utils/sendingBlueSMTP';

export function sendPasswordRecoveryPincodeMail(user: UserDoc) {
    const reciever = {
        email: user.email,
        name: user.companyName || user.fullName,
    }; // An array if you have multiple recipients.
    const subject = 'Käyttäjätilin palautus pinkoodi';
    const body = `
              <h1>${user.contactInformation.firstname} ${user.contactInformation.lastname}, </h1>
            <p>Ohessa on pinkoodi.</p>
            <p>Näppäilemällä alla olevan pinkoodin lomakkeeseen, voitte jatkaa salasanan palauttamiseen.</p>
            <h3>${user.verificationPincode}</h3>
            <p><strong>Pinkoodi on voimassa 10 minuuttia.</strong></p>
            <p>Tämä on automaattinen viesti, ethän vastaa tähän viestiin.</p>
			<p>Ystävällisin Terveisin, </p>
			<p>Rolling Records</p>
			<p>puh: +358 (0)50 344 55 39 </p>
			<p>email: rollingrecords@outlook.com</p>
			<p>www.rollingrecords.fi</p>
        `;
    sendEmail(subject, subject, body, reciever);
}
