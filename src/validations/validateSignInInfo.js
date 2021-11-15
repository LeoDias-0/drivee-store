import joi from 'joi'


const validateSignInInfo =  joi.object({
    email: joi.string().email({tlds: {allow: false}}).max(50).required(),
    password: joi.string().min(3).max(50).required(),
}).length(2)

export { validateSignInInfo }