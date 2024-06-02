import { store } from "@prokopschield/localstorage-state";
import { filterUsername } from "ps-std";

export const ℘username = store<string>("username");
export const ℘secret = store<string>("secret");

export const ℘page = store<string>("page");

if (!℘page.value) {
	℘page.set("welcome");
}

function redirect_from_login() {
	if (
		℘username.value &&
		℘secret.value &&
		(℘page.value === "register" || ℘page.value === "login")
	) {
		℘page.set("home");
	}
}

℘username.subscribe(redirect_from_login);
℘secret.subscribe(redirect_from_login);
℘page.subscribe(redirect_from_login);

{
	const url = new URL(location.href);

	const url_page = url.searchParams.get("page");

	if (url_page) {
		℘page.set(filterUsername(url_page));
		url.searchParams.delete("page");
		history.pushState(undefined, "", url.href);
	}
}
