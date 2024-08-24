import Joi from "joi";

export const ConfigValidator = Joi.object({
  NODE_ENV: Joi.string()
    .valid("development", "production", "test")
    .default("production"),
  // AWS S3 Configuration
  S3_ENDPOINT: Joi.string().required(),
  S3_BUCKET_NAME: Joi.string().required(),
  S3_REGION: Joi.string().required(),
  S3_ACCESS_KEY: Joi.string().required(),
  S3_SECRET_KEY: Joi.string().required(),
});
