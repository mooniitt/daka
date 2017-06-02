<template>
	<div class="login">
		<div class="btn" v-on:click='showMaster'>
			<!-- <button v-on:click='showMaster'>show master</button> -->
			<p>登录/注册</p>
		</div>
		<div class="master">
			<div class="container">
				<router-link  to='/login/load'>Load</router-link> /
				<router-link  to='/login/register'>Register</router-link>
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
				setTimeout(()=>{
					master.style.backgroundColor='rgba(0,0,0,0.6)'
					document.querySelector('.container').style.top = '10%'
				},0)
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
	.login .btn p {
		text-align: center;
		padding: 0px;
		margin: 0px;
		height: 100%;
		line-height: 280px;
		color: #234;
		font-size: 32px;
	}
	.login .master{
		display: none;
		position: fixed;
		left: 0px;
		top: 0px;
		right: 0;
		bottom: 0;
		transition: all .6s ease;
	}
	.master .container{
		margin: 0 auto;
		left: 50%;
		margin-left: -225px;
		min-width: 450px;
		height: 60%;
		position: fixed;
		top: 200%;
		background-color: #eee;
		box-shadow: 0 0px 10px #eee;
		transition: all .2s .2s ease;
		border-radius: 5px;
	}
</style>