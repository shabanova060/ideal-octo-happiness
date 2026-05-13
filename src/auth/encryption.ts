import { createCipheriv, createDecipheriv, randomBytes } from "node:crypto";
import { decodeBase64 } from "@oslojs/encoding";

const key = decodeBase64(process.env.ENCRYPTION_KEY ?? "");

export function encrypt(data: string | Uint8Array): Uint8Array {
	const bufferData =
		typeof data === "string" ? new TextEncoder().encode(data) : data;
	const iv = randomBytes(16);
	const cipher = createCipheriv("aes-128-gcm", key, iv);

	return Buffer.concat([
		iv,
		cipher.update(bufferData),
		cipher.final(),
		cipher.getAuthTag(),
	]);
}

export function decrypt(encrypted: Uint8Array, asString: true): string;
export function decrypt(encrypted: Uint8Array, asString?: false): Uint8Array;
export function decrypt(
	encrypted: Uint8Array,
	asString = false,
): string | Uint8Array {
	if (encrypted.byteLength < 33) throw new Error("Invalid data");

	const iv = encrypted.subarray(0, 16);
	const authTag = encrypted.subarray(-16);
	const ciphertext = encrypted.subarray(16, -16);

	const decipher = createDecipheriv("aes-128-gcm", key, iv).setAuthTag(authTag);
	const decrypted = Buffer.concat([
		decipher.update(ciphertext),
		decipher.final(),
	]);

	return asString ? new TextDecoder().decode(decrypted) : decrypted;
}
