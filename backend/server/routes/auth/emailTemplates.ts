import { NextFunction, Request } from 'express';
import { setProtocol, setHost, isNotFinland } from '../../utils';
import { sendEmail } from '../../utils/sendingBlueSMTP';
import { UserDoc } from '../../models/users/users.model';

export async function sendNotificationOnUnsubscribe(
    user: UserDoc,
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

export async function sendActivationEmail(request: Request, user: UserDoc) {
    const reciever = {
        email: user.email, // An array if you have multiple recipients.
        name: user.fullname,
    };
    const subject =
        user.completeAddress.country !== 'Finland'
            ? 'Confirm email'
            : 'Vahvista sähköpostiosoite';
    const body =
        user.completeAddress.country !== 'Finland'
            ? `
  				<h1>${user.name.firstname} ${user.name.lastname}, </h1>
				<p>We ask you to verify your email, by entering following pincode in sign up form.</p>
				<p>Only after your email has been verified, you can proceed to purchase our products and get to use our Bonus system.</p>
				<p>Complete sig up process by entering following Pincode to sign up form:</p>
				<h3>${user.user.verification_pincode}</h3>
				<p>If you didn't sign up using this email, please be sure to contact our <a href="${setProtocol(
                    request,
                )}://${setHost(
                  request,
              )}/asiakaspalvelu">Customer service</a>!</p>
				<p>This is auto generated email, please do not respond to it.</p>
				<p>Sincerely, </p>
				<p>Rolling Records</p>
				<p>puh: +358 (0)50 344 55 39 </p>
				<p>email: rollingrecords@outlook.com</p>
				<p>www.rollingrecords.fi</p>
			`
            : `
  				<h1>${user.name.firstname} ${user.name.lastname}, </h1>
				<p>pyydämme teitä vahvistamaan sähköpostiosoitteenne syöttämällä viestissä oleva pinkoodi rekisteröinti lomakkeeseen.</p>
				<p>Vasta sähköpostin vahvistuksen jälkeen käyttäjätilinne aktivoidaan ja voitte siirtyä asioimaan verkkokauppaamme.</p>
				<p>Suorittaaksenne käyttäjätilin aktivoinnin loppuun, syöttäkää ohessa oleva pinkoodi rekisteröinti lomakkeeseen.</p>
				<h3>${user.user.verification_pincode}</h3>
				<p>Jos ette ole rekisteröineet tätä sähköposti osoitetta, olkaa hyvä ja ottakaa yhteyttä <a href="${setProtocol(
                    request,
                )}://${setHost(
                  request,
              )}/asiakaspalvelu">asiakaspalveluumme</a>!</p>
				<p>Tämä on automaattinen viesti, ethän vastaa tähän viestiin.</p>
				<p>Ystävällisin Terveisin, </p>
				<p>Rolling Records</p>
				<p>puh: +358 (0)50 344 55 39 </p>
				<p>email: rollingrecords@outlook.com</p>
				<p>www.rollingrecords.fi</p>
			`;
    sendEmail(subject, subject, body, reciever);
}

export async function activationConfirmation(
    request: Request,
    _: Response,
    user: UserDoc,
    next: NextFunction,
) {
    const reciever = { email: user.email, name: user.fullname };
    const subject = isNotFinland(user.completeAddress.country)
        ? 'Welcome to Rolling Records Store'
        : 'Tervetuloa Rolling Records Storeen';
    const body = isNotFinland(user.completeAddress.country)
        ? `
  			<h1>${user.name.firstname} ${user.name.lastname}</h1>
  			<h3>Congratulations for joining us and warm welcome to Rolling Records store!</h3>
  			<p>You can now safely look through our range of different products, and grow your stamps into your Bonus system, from every 20 € purchase you get one stamp.</p>
  			<p>More information about our Bonus System you can find <a href="${setProtocol(
                request,
            )}://${setHost(request)}/bonusjarjestelma">from here</a>.</p>
  			<a href="${setProtocol(request)}://${setHost(
              request,
          )}">To Rolling Records store</a>
  			<p>This is auto generated email, please do not respond to it.</p>
  			<p>Sincerely, </p>
			<p>Rolling Records</p>
			<p>puh: +358 (0)50 344 55 39 </p>
			<p>email: rollingrecords@outlook.com</p>
			<p>www.rollingrecords.fi</p>
  		`
        : `
  			<h1>${user.name.firstname} ${user.name.lastname}</h1>
  			<h3>Rolling Records toivottaa teidät lämpimästi tervetulleeksi viihtyisään verkkokauppaamme!</h3>
  			<p>Voitte nyt turvallisesti selailla ja ostaa valikoimaamme, samalla kerryttää leimoja kanta-asiakas korttiinne joka 20 € ostoksesta.</p>
  			<p>Lisätietoa Bonusjärjestelmästämme löydätte <a href="${setProtocol(
                request,
            )}://${setHost(request)}/bonusjarjestelma">täältä</a>.</p>
  			<a href="${setProtocol(request)}://${setHost(request)}">Verkkokauppaan</a>
  			<p>Tämä on automaattinen viesti, ethän vastaa tähän viestiin.</p>
  			<p>Ystävällisin Terveisin, </p>
			<p>Rolling Records</p>
			<p>puh: +358 (0)50 344 55 39 </p>
			<p>email: rollingrecords@outlook.com</p>
			<p>www.rollingrecords.fi</p>
  		`;
    sendEmail(subject, subject, body, reciever);
}
