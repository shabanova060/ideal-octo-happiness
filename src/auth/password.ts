export async function hashPassword(password: string): Promise<string> {
	return await Bun.password.hash(password, {
		algorithm: "argon2id",
		memoryCost: 65536,
		timeCost: 3,
	});
}

export async function verifyPassword(
	password: string,
	hash: string,
): Promise<boolean> {
	return await Bun.password.verify(password, hash);
}

interface AdminResult {
	id: string;
	password_hash: string;
}

export async function getAdminByEmail(
	email: string,
): Promise<AdminResult | null> {
	const results = await Bun.sql<AdminResult[]>`
    SELECT id, password_hash 
    FROM admins 
    WHERE email = ${email} 
    LIMIT 1
  `;

	return results[0] ?? null;
}
