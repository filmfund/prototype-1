import fs from "fs";
import path from "path";
import { FutureResult, cacheFn, noop, onceAsync } from "ps-std";

export const load = cacheFn((name: string) => {
	return new FutureResult(() => require(`../${name}`)).map_err_async(
		(err) => {
			console.error("Module import error:", err);
		}
	);
});

export const initialize = cacheFn(({ init }: { init?: () => any }) => {
	return new FutureResult(init || noop).map_err_async((err) => {
		console.error("Module initialization error:", err);
	});
});

export const loadAll = onceAsync(async () => {
	for (const name of await fs.promises.readdir(
		path.resolve(__dirname, "..")
	)) {
		await load(name).map_async(initialize);
	}
});
