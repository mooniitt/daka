<template>
  <div id="app">
    <Signin></Signin>
    <Signout></Signout>
    <Login></Login>
  </div>
</template>

<script>
import Signin from './components/Signin'
import Signout from './components/Signout'
import Login from './components/Login'
export default {
  name: 'app',
  components: {
    Signin,Signout,Login
  }
}
</script>

<style>
html,body{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100%;
    position: relative;
}
#app {
  position: absolute;
  top: 10%;
  left: 20%;
  width: 60%;
  height: 60%;
}
</style>
