<script>
	import { register } from "../lib/auth";

	let username = "";
	let password = "";

	let message = "Sign Up";

	const register_button = () => {
		register(username, password).then(
			(error) => error && (message = error),
		);
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
			<button on:click={register_button}> Sign Up </button>
		</td>
	</tr>
	<tr>
		<td></td>
		<td>
			<a href="?page=login"> Log In instead </a>
		</td>
	</tr>
</table>
