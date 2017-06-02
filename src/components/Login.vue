<template>
	<div class="login">
		<div class="btn">
			<button v-on:click='showMaster'>show master</button>
		</div>
		<div class="master">
			<div class="container">
				<router-link class='load' to='/login/load'>Load</router-link> /
				<router-link class='register' to='/login/register'>Register</router-link>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'login',
		methods:{
			showMaster(){
				var master = document.querySelector('.master')
				master.style.display = 'block'
				setTimeout(()=>{master.style.opacity='0.6'},0)
			}
		}
	}
</script>

<style scope>
	.login{
		position: absolute;
		width: 30%;
		top: 25%;
		left: 70%;
		height: 50%;
	}
	.login .btn{
		width: 100%;
		height: 100%;
		border-radius: 8px;
		box-shadow: 1px 1px 5px grey;
		background-color:#4797B1;
		transition: all .2s ease;
	}
	.login .btn:hover{
		transform: translateY(-3px);
		cursor: pointer;
	}
	.login .master{
		display: none;
		position: fixed;
		left: 0px;
		top: 0px;
		right: 0;
		bottom: 0;
		background-color: rgba(0,0,0,0.8);
		opacity: 0;
		transition: all .6s ease;
	}
</style>