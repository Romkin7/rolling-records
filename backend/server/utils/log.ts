const fs = require('fs');

/*
  if the message parameter is object we log error and if it's string we log info
  if you want to log a string as an error, wrap it in an object with a parameter called message
  like log({ message: "Whatever here will be logged as error" })
*/
export const log = (message: string | object) => {
    // Format the current date to use for each log
    const d = new Date();
    const dateString =
        d.getUTCFullYear() +
        '-' +
        ('0' + (d.getUTCMonth() + 1)).slice(-2) +
        '-' +
        ('0' + d.getUTCDate()).slice(-2) +
        ' ' +
        ('0' + d.getUTCHours()).slice(-2) +
        ':' +
        ('0' + d.getUTCMinutes()).slice(-2) +
        ':' +
        ('0' + d.getUTCSeconds()).slice(-2);

    // Base log directory
    let dir = './logs';
    // If we don't have logs folder, create it
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);

    // Create folders in log folder for better log organization based on each day
    dir =
        dir +
        '/' +
        d.getUTCFullYear() +
        '-' +
        ('0' + (d.getUTCMonth() + 1)).slice(-2) +
        '-' +
        ('0' + d.getUTCDate()).slice(-2);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);

    // If we either pass an object or specify the second parameter as error
    if (typeof message === 'object') {
        const errorStr = JSON.stringify(message, [
            'message',
            'arguments',
            'type',
            'name',
            'stack',
        ]);

        const errStack = JSON.parse(errorStr).stack
            ? '\n' + 'Error Stack:\n' + JSON.parse(errorStr).stack
            : '';
        const errMessage = JSON.parse(errorStr).message
            ? '\n' + 'Error Message: ' + JSON.parse(errorStr).message
            : '';
        const errArguments = JSON.parse(errorStr).arguments
            ? '\n' + 'Error Arguments: ' + JSON.parse(errorStr).arguments
            : '';
        const errType = JSON.parse(errorStr).type
            ? '\n' + 'Error Type: ' + JSON.parse(errorStr).type
            : '';
        const errName = JSON.parse(errorStr).name
            ? '\n' + 'Error Name: ' + JSON.parse(errorStr).name
            : '';

        // Prepare the message to be logged
        const msg =
            '---------------------------------------\n' +
            dateString +
            errName +
            errMessage +
            errType +
            errArguments +
            errStack +
            '\n' +
            '---------------------------------------\n';

        // Add the log message to errors.log file in the right directory
        fs.appendFileSync(dir + '/errors.log', msg);
    }

    // If we pass a string to the function
    if (typeof message === 'string') {
        // Prepare the message to be logged
        const msg = dateString + ' -- ' + message + '\n';
        // Add the message to info.log file in the right directory
        fs.appendFile(dir + '/info.log', msg, function (err: any) {
            if (err) return console.error(err);
        });
    }
};
