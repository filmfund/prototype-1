import { Err, Lock, Ok, Result } from "ps-std";
import { database } from "../database";
import { hash } from "doge-passwd";
import { user } from "@prisma/client";

const lock = new Lock();

export async function register(
	username: string,
	secret: string
): Promise<Result<user, unknown | string>> {
	const guard = await lock.wait_and_lock();

	try {
		username = String(username);

		if (!(await database.user.findFirst({ where: { username } }))) {
			const user = await database.user.create({
				data: {
					username,
					auth: { create: { secret: hash(secret) } },
				},
			});

			guard.release_async();

			return Ok(user);
		} else {
			throw "USERNAME_TAKEN";
		}
	} catch (error) {
		guard.release_async();

		return Err(error);
	}
}
