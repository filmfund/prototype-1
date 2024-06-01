import { Server } from "@prokopschield/simple-socket-server";
import { noop, once } from "ps-std";

export const server = new Server({});

export const init = once(() => {
	const FRONTEND_URL = process.env.FRONTEND_URL || "http://frontend:24062";
	const PORT = Number(process.env.PORT || 24061);

	server.forward("/", FRONTEND_URL, noop);
	server.setPort(PORT);
});
