import { user } from "@prisma/client";
import { verify } from "doge-passwd";
import { Err, Ok, Result, omit } from "ps-std";

import { database } from "../database";

export async function login(
	username: string,
	secret: string
): Promise<Result<user, unknown | string>> {
	try {
		const user = await database.user.findFirst({
			include: { auth: true },
			where: { username },
		});

		if (!user) {
			throw "USER_NOT_FOUND";
		}

		for (const auth of user.auth) {
			if (verify(secret, auth.secret)) {
				return Ok(omit(user, ["auth"]));
			}
		}

		throw "INCORRECT_SECRET";
	} catch (error) {
		return Err(error);
	}
}
