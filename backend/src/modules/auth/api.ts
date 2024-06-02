import { server } from "../server";
import { login } from "./login";
import { register } from "./register";

export function initApi() {
	server.addHandlers({
		async register(_socket, state, username, secret) {
			const result = await register(username, secret);

			return result.map(
				(user) => {
					state.set("username", user.username);

					return user;
				},
				(error) => {
					state.delete("username");

					return { error: String(error) };
				}
			);
		},
		async login(_socket, state, username, secret) {
			const result = await login(username, secret);

			return result.map(
				(user) => {
					state.set("username", user.username);

					return user;
				},
				(error) => {
					state.delete("username");

					return { error: String(error) };
				}
			);
		},
	});
}
