import { v2 as cloudinary } from 'cloudinary';
import { NextFunction, Response, Request } from 'express';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: process.env.NODE_ENV === 'production' ? true : false,
});

module.exports.uploadImage = async (
    request: Request,
    _response: Response,
    next: NextFunction,
) => {
    try {
        if (request.files) {
            const stream = cloudinary.uploader.upload_stream(function (
                _error,
                result,
            ) {
                request.session.publicId = result.public_id;
                request.session.secureUrl = result.secure_url;
                next();
            });
            stream.write(request.files.image.data);
            stream.end();
        } else {
            return next();
        }
    } catch (error) {
        return next(error);
    }
};

module.exports.deleteImage = async (
    request: Request,
    _response: Response,
    next: NextFunction,
) => {
    try {
        await cloudinary.uploader.destroy(request.body.publicId);
        next();
    } catch (error) {
        return next(error);
    }
};
