import { IOrder, IProduct, IUser } from '../../../@types';

export const smsTemplates = {
    accountActivationPincodeSms: (user: IUser): string => {
        return `${user.name.firstname} ${user.name.lastname}, pyydämme teitä vahvistamaan tilinne syöttämällä viestissä oleva pinkoodi rekisteröinti lomakkeeseen ${user.user.verification_pincode} Ystävällisin Terveisin, Rolling Records puh: +358 (0)50 344 55 39, email: rollingrecords@outlook.com, www.rollingrecords.fi`;
    },
    accountVerificationSms: (user: IUser): string => {
        return `${user.name.firstname} ${user.name.lastname}, Rolling Records toivottaa teidät lämpimästi tervetulleeksi viihtyisään verkkokauppaamme! Voitte nyt turvallisesti selailla ja ostaa valikoimaamme, samalla kerryttää leimoja kanta-asiakas korttiinne joka 20 € ostoksesta. Lisätietoa Bonusjärjestelmästämme löydätte https://www.rollingrecords.fi/bonusjarjestelma sivulta. Ystävällisin Terveisin, Rolling Records puh: +358 (0)50 344 55 39, email: rollingrecords@outlook.com, www.rollingrecords.fi`;
    },
    passwordRecoveryPincodeSms: (user: IUser): string => {
        return `${user.name.firstname} ${user.name.lastname}, Lähetämme ohessa salasanan palautus pinkoodin. Salasanan palautus pinkoodi: ${user.resetPasswordToken}. Halutessanne voitte myös olla yhteydessä https://www.rollingrecords.fi/asiakaspalvelu asiakaspalveluumme. Ystävällisin Terveisin, Rolling Records puh: +358 (0)50 344 55 39, email: rollingrecords@outlook.com, www.rollingrecords.fi`;
    },
    passwordRecoverConfirmationSms: (user: IUser): string => {
        return `${user.name.firstname} ${user.name.lastname}, Salasananne on onnistuneesti vaihdettu. Voitte nyt kirjautua asiakastilillenne käyttäen uutta salasanaanne ja sähköpostiosoitetta. Mikäli ette ole salasanaa vaihtaneet, pyydämme teitä olemaan välittömästi yhteydessä https://www.rollingrecords.fi/asiakaspalvelu asiakaspalveluumme. Muussa tapauksessa toivotamme teille mukavia hetkiä valikoimamme parissa. Ystävällisin Terveisin, Rolling Records puh: +358 (0)50 344 55 39, email: rollingrecords@outlook.com, www.rollingrecords.fi`;
    },
    soldMarketPlaceProductToSellerSms: (
        product: IProduct,
        order: IOrder,
    ): string => {
        return `Ilmoitus tuotteenne ${product.fullname} myynnistä, Käyttäjä ${order.client.username}, on juuri ostanut ilmoittamanne ${product.fullname} tuotteen, ${product.unit_price}€ hintaan. Teillä on 7 vuorokautta aikaa toimittaa levy Sörnäisten tai keskustan liikkeeseen, jotta levy voidaan toimittaa ostajalle. Kun levy on toimitettu ja noudettu siirrämme rahat myynnistä pankkitilillenne, jonka ilmoititte kauppapaikkaan. Ystävällisin Terveisin, Rolling Records, puh: +358 (0)50 344 55 39, email: rollingrecords@outlook.com, rolling.tilaukset@gmail.com, www.rollingrecords.fi`;
    },
    notificationOnFeedbackToSellerSms: (
        reciever: IUser,
        author: IUser,
    ): string => {
        return `${reciever.name.firstname} ${reciever.name.lastname}, ${author.username} on juuri antanut teille palautetta kauppojen sujuvuuteen liittyen. Voitte käydä lukemassa sen https://www.rollingrecords.fi/profiili/${reciever._id} profiilisivuiltanne kauppapaikka -> palautteeni välilehden alta. Käyttäjän antama palaute vaikuttaa kokonais myyjän arvosanaanne. Ystävällisin Terveisin, Rolling Records, puh: +358 (0)50 344 55 39, email: rollingrecords@outlook.com, rolling.tilaukset@gmail.com, www.rollingrecords.fi`;
    },
    notificationOnFeedbackToBuyerSms: (
        reciever: IUser,
        author: IUser,
    ): string => {
        return `${reciever.name.firstname} ${reciever.name.lastname}, ${author.username} on juuri antanut teille palautetta kauppojen sujuvuuteen liittyen. Voitte käydä lukemassa sen https://www.rollingrecords.fi/profiili/${reciever._id} profiilisivuiltanne kauppapaikka -> palautteeni välilehden alta. Käyttäjän antama palaute vaikuttaa kokonais ostaja arvosanaanne. Ystävällisin Terveisin, Rolling Records, puh: +358 (0)50 344 55 39, email: rollingrecords@outlook.com, rolling.tilaukset@gmail.com, www.rollingrecords.fi`;
    },
};
