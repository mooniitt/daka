<template>
	<div class="signout">
		<div class="btn"></div>
	</div>
</template>

<script>
	export default{
		name:'signout'
	}
</script>

<style scope>
	.signout{
		position: absolute;
		width: 30%;
		height: 50%;
		left: 35%;
		top: 25%;
		border-radius: 8px;
	}
	.signout .btn{
		width: 100%;
		height: 100%;
		border-radius: 8px;
		box-shadow: 1px 1px 5px grey;
		background-color:#FF8D68;
		transition: all .2s ease;
	}
	.signout .btn:hover{
		transform: translateY(-10px);
		cursor: pointer;
	}
</style>