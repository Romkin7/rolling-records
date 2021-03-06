import { connect, connection } from 'mongoose';
import models from '../models';

export function createConnection() {
    const dburl: string = process.env.DATABASE as string;

    //establish Connection
    connect(dburl, {
        keepAlive: true,
    });

    /* Mongoose events */
    //Successfull Connection
    connection.on('connected', function () {
        console.log('Mongoose Connected to ' + dburl);
    });

    // If the connection throws an error
    connection.on('error', function (err) {
        console.log('Mongoose default connection error: ' + err);
    });

    // When the connection is disconnected
    connection.on('disconnected', function () {
        console.log('Mongoose default connection disconnected');
    });

    /* Node app statuses */
    // Localhost
    process.on('SIGINT', function () {
        connection.close(function () {
            console.log(
                'Mongoose default connection disconnected through app termination',
            );
            process.exit(0);
        });
    });

    // Heroku
    process.on('SIGTERM', function () {
        connection.close(function () {
            console.log(
                'Mongoose default connection disconnected through app termination (SIGTERM)',
            );
            process.exit(0);
        });
    });

    // Nodemon
    process.once('SIGUSR2', function () {
        connection.close(function () {
            console.log(
                'Mongoose default connection disconnected through app termination (SIGUSR2)',
            );
            process.kill(process.pid, 'SIGUSR2');
        });
    });
}

models;
