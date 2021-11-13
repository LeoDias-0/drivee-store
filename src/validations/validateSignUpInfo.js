import joi from 'joi'


const validateSignUpInfo =  joi.object({
    name: joi.string().min(3).max(50).required(),
    email: joi.string().email({tlds: {allow: false}}).max(50).required(),
    password: joi.string().min(3).max(50).required(),
}).length(3)

export { validateSignUpInfo }