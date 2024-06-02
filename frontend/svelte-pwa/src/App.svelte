<script lang="ts">
	import { ℘page } from "./lib/state";
	import Home from "./pages/Home.svelte";
	import Login from "./pages/Login.svelte";
	import Register from "./pages/Register.svelte";
	import Welcome from "./pages/Welcome.svelte";
</script>

{#if $℘page === "welcome"}
	<Welcome />
{:else if $℘page === "login"}
	<Login />
{:else if $℘page === "register"}
	<Register />
{:else if $℘page === "home"}
	<Home />
{:else}
	{℘page.set("welcome")}
{/if}
