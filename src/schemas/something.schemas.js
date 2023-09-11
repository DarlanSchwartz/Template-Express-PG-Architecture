import joi from 'joi';

export const SomethingSchema = joi.object({
    someField: joi.string().required(),
    anotherField: joi.number().integer().required()
});