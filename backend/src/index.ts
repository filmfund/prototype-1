import { defineGlobalProperty } from "ps-std";

import { loadAll } from "./modules/loader";

export async function main() {
	Object.assign(BigInt.prototype, {
		toJSON() {
			try {
				return String(this);
			} catch {
				return "<SerializationError>";
			}
		},
	});

	await loadAll();
}
