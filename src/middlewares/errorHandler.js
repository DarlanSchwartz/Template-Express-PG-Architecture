import httpStatus from "http-status";
import ErrorType from "../../Utils/ErrorTypes.js";

export default function errorHandler(error, req, res, next) {
    switch (error.type) {
        case ErrorType.CONFLICT:
            return res.status(httpStatus.CONFLICT).send("Conflict: " + error.message);
        case ErrorType.NOT_FOUND:
            return res.status(httpStatus.NOT_FOUND).send("Not found: " + error.message);
        case ErrorType.UNPROCESSABLE:
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send("Unprocessable entity: " + error.message);
        case ErrorType.BAD_REQUEST:
            return res.status(httpStatus.BAD_REQUEST).send("Bad Request: " + error.message);
        case ErrorType.INTERNAL:
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong 😢");
        default:
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong 😢");
    }
}