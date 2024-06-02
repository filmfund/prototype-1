<script>
	import { login } from "../lib/auth";

	let username = "";
	let password = "";

	let message = "Welcome back.";

	const login_button = () => {
		login(username, password).then((error) => error && (message = error));
	};
</script>

<h1>{message}</h1>

<table>
	<tr>
		<td> <label for="username">Username</label> </td>
		<td>
			<input type="text" name="username" bind:value={username} />
		</td>
	</tr>
	<tr>
		<td> <label for="password">Password</label> </td>
		<td>
			<input type="password" name="password" bind:value={password} />
		</td>
	</tr>
	<tr>
		<td></td>
		<td>
			<button on:click={login_button}> Log In </button>
		</td>
	</tr>

	<tr>
		<td></td>
		<td>
			<a href="?page=register"> Sign Up instead </a>
		</td>
	</tr>
</table>
