import { UserDoc } from '../../models/users/users.model';
import { sendEmail } from '../../utils/sendingBlueSMTP';

export function sendPasswordRecoveryPincodeMail(user: UserDoc) {
    const reciever = {
        email: user.email,
        name: `${user.name.firstname} ${user.name.lastname}`,
    }; // An array if you have multiple recipients.
    const subject = 'Käyttäjätilin palautus pinkoodi';
    const body = `
              <h1>${user.name.firstname} ${user.name.lastname}, </h1>
            <p>Ohessa on pinkoodi.</p>
            <p>Näppäilemällä alla olevan pinkoodin lomakkeeseen, voitte jatkaa salasanan palauttamiseen.</p>
            <h3>${user.resetPasswordToken}</h3>
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

export function passwordChangedMail(user: UserDoc) {
    const reciever = {
        email: user.email,
        name: `${user.name.firstname} ${user.name.lastname}`,
    }; // An array if you have multiple recipients.
    const subject = 'Salasana vaihdettu';
    const body = ` 
			<h1>${user.name.firstname} ${user.name.lastname}</h1>
			<h3>Salasananne on onnistuneesti vaihdettu.</h3>
			<p>Voitte nyt kirjautua asiakastilillenne käyttäen uutta salasanaanne ja sähköpostiosoitetta.</p>
			<p>Mikäli ette ole salasanaa vaihtaneet, pyydämme teitä olemaan välittömästi yhteydessä <a href="${protocol}://${host}/asiakaspalvelu">asiakaspalveluumme</a>.</p>
			<p>Muussa tapauksessa toivotamme teille mukavia hetkiä valikoimamme parissa.</p>
			<p>Tämä on automaattinen viesti, ethän vastaa tähän viestiin.</p>
			<p>Ystävällisin Terveisin, </p>
			<p>Rolling Records</p>
			<p>puh: +358 (0)50 344 55 39 </p>
			<p>email: rollingrecords@outlook.com</p>
			<p>www.rollingrecords.fi</p>
		`;
    sendEmail(subject, subject, body, reciever);
}
