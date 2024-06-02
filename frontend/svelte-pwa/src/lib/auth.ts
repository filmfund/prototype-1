import { client } from "./api";
import { ℘secret, ℘username } from "./state";

export async function login(username: string, secret: string) {
	const response = await client.login(username, secret);

	if ("error" in response) {
		return response.error;
	} else {
		℘username.set(username);
		℘secret.set(secret);
	}
}

export async function register(username: string, secret: string) {
	const response = await client.register(username, secret);

	if ("error" in response) {
		return response.error;
	} else {
		℘username.set(username);
		℘secret.set(secret);
	}
}
