<template>
	<div class="reg">
		<form action="/register">
			<input type="text" name='user'>
			<input type="passwd" name='passwd'>
			<button type='submit'>注册</button>
		</form>
	</div>
</template>

<script>
	export default{
		name:'reg'
	}
</script>