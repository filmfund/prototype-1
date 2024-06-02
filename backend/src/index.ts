import { defineGlobalProperty } from "ps-std";

import { loadAll } from "./modules/loader";

export async function main() {
	defineGlobalProperty("toJSON", function toJSON(this: any) {
		try {
			return String(this);
		} catch {
			return "<SerializationError>";
		}
	});

	await loadAll();
}
