<template>
	<div class="load">
		<form action="/login/load">
			<input type="text" name='user' placeholder="用户名">
			<input type="passwd" name='passwd' placeholder="密码">
			<button type='submit'>登录</button>
		</form>
	</div>
</template>
<script>
	export default{
		name:'load'
	}
</script>