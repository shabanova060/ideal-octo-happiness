import {
	createJWTSignatureMessage,
	encodeJWT,
	joseAlgorithmHS256,
} from "@oslojs/jwt";

// 1. Explicitly type the header and payload using interfaces
interface TokenHeader {
	alg: typeof joseAlgorithmHS256;
	typ: "JWT";
}

interface TokenPayload {
	sub: string;
	exp: number;
	iat: number;
}

async function createMyToken(): Promise<string> {
	const header: TokenHeader = {
		alg: joseAlgorithmHS256,
		typ: "JWT",
	};

	const payload: TokenPayload = {
		sub: "user_123",
		exp: Math.floor(Date.now() / 1000) + 3600,
		iat: Math.floor(Date.now() / 1000),
	};

	const signatureMessage = createJWTSignatureMessage(header, payload);

	const secret = "your-super-secret-256-bit-key-here";
	const encoder = new TextEncoder();
	const cryptoKey = await crypto.subtle.importKey(
		"raw",
		encoder.encode(secret),
		{ name: "HMAC", hash: "SHA-256" },
		false,
		["sign"],
	);

	// 2. Convert the string message into a Uint8Array
	const signatureMessageBytes = encoder.encode(signatureMessage);

	// 3. Pass the byte array to the Web Crypto API, not the string
	const signatureBuffer = await crypto.subtle.sign(
		"HMAC",
		cryptoKey,
		signatureMessageBytes,
	);

	const signature = new Uint8Array(signatureBuffer);

	const token = encodeJWT(header, payload, signature);

	return token;
}

createMyToken().then((token) => console.log(token));
