import ErrorType from "../../Utils/ErrorTypes.js";

export default function validateSchema(schema) {
    return (req, res, next) => {
      const validation = schema.validate(req.body, { abortEarly: false });
      if (validation.error) {
        const errors = validation.error.details.map((detail) => detail.message);
        throw {type: ErrorType.UNPROCESSABLE, message:errors};
      }
      next();
    };
  }