<template>
	<div class="signin">
		<div class="btn">
			
		</div>
	</div>
</template>

<script>
	export default{
		name:'signin'
	}
</script>

<style scope>
	.signin{
		width: 30%;
		height: 50%;
		top: 25%;
		left:0px;
		position: absolute;
	}
	.signin .btn{
		width: 100%;
		height: 100%;
		border-radius: 8px;
		box-shadow: 1px 1px 5px grey;
		background-color:#C5ECBE;
		transition: all .2s ease;
	}
	.signin .btn:hover{
		transform: translateY(-10px);
		cursor: pointer;
	}
</style>