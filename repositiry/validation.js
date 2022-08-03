const { validate, ValidationError, Joi } = require('express-validation')

exports.schema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})