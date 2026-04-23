import 'dotenv/config';

export const env = {
	STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY!,
	STRIPE_PRICE_ID: process.env.STRIPE_PRICE_ID!,
	STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET ?? '',
	RESEND_API_KEY: process.env.RESEND_API_KEY!,
	GOOGLE_SHEET_COPY_URL: process.env.GOOGLE_SHEET_COPY_URL!,
};

// Validate at startup — fail fast if something's missing
const required = [
	'STRIPE_SECRET_KEY',
	'STRIPE_PRICE_ID',
	'RESEND_API_KEY',
	// 'GOOGLE_SHEET_COPY_URL',
] as const;

for (const key of required) {
	if (!env[key]) {
		throw new Error(`Missing required environment variable: ${key}`);
	}
}
