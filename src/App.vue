<template>
  <div id="app">
    <span @click="getUserRole"> 去登录 </span>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <questionOne></questionOne>
    <RouterView></RouterView>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import questionOne from "./components/questionOne.vue";
import axios from "axios";
import "./mock/index.js";
import { useRouter } from "vue-router";

export default {
  name: "App",
  components: {
    HelloWorld,
    questionOne,
  },
  setup() {
    let roouter = useRouter();
    function getUserRole() {
      axios.defaults.headers["Authorization"] = "Bearer xxxxxx";
      axios.get("https://your-api.com/user/role").then((res) => {
        console.log(res.data);
        if (res.data.data.role === "admin") {
          roouter.push({ path: "/signup" });
        } else {
          roouter.push({ path: "/NotFound" });
        }
      });
    }
    return { getUserRole };
  },
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
