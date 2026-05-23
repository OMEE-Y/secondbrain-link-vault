const { z } = require('zod');

const authSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters').max(30).trim(),
  password: z.string().min(6, 'Password must be at least 6 characters').max(100)
});

const linkSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200).trim(),
  url: z.string().url('Invalid URL'),
});

module.exports = {
  authSchema,
  linkSchema
};