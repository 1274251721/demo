<template>
  <header>
    <div class="left">
      <div>一体化平台</div>
      <ul>
        <li>总览</li>
        <li class="li-right-border">
          云产品
          <font-awesome-icon icon="fa-solid fa-angle-down" />
        </li>
      </ul>
      <ul>
        <li v-for="i in leftLiList">{{ i }}</li>
        <font-awesome-icon icon="fa-solid fa-ellipsis" />
        <font-awesome-icon icon="fa-solid fa-plus" />
      </ul>
    </div>
    <div class="right">
      <font-awesome-icon icon="fa-solid fa-qrcode" />
      <div class="email">
        <font-awesome-icon icon="fa-solid fa-qrcode" />
        <div class="square">16</div>
      </div>
      <ul>
        <li v-for="(i, index) in rightLiList">
          {{ i }}
          <font-awesome-icon icon="fa-solid fa-angle-down" v-if="index !== 0" />
        </li>
      </ul>
      <div class="flex">
        <font-awesome-icon icon="fa-solid fa-user-tie" />
        <span class="ellipsis">123123112312312312312323</span>
        <font-awesome-icon icon="fa-solid fa-angle-down" />
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";
export default {
  name: "qusetionOne",
  props: {
    msg: String,
  },
  setup() {
    const leftLiList = ref(["云服务器", "域名服务", "网站备案"]);
    const rightLiList = ref(["帮助", "工单", "费用"]);
    return {
      leftLiList,
      rightLiList,
    };
  },
};
</script>

<style scoped>
header {
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 1280px;
  background-color: #262f3e;
  color: #c1c6c8;
  padding: 0px 30px;
}
.left,
.right {
  display: flex;
  align-items: center;
}
.flex {
  display: flex;
  align-items: center;
}
ul {
  list-style: none;
  display: flex;
  align-items: center;
}
ul li {
  margin-right: 30px;
}
.fa-angle-down {
  font-size: 12px;
  margin-left: 5px;
}
ul .fa-ellipsis {
  margin-right: 30px;
}
.li-right-border {
  border-right: 1px solid #aaaaaa;
  margin: 0px;
  padding-right: 30px;
}
.email {
  position: relative;
  margin-left: 30px;
}
.email .square {
  border-radius: 30px;
  color: #c1c6c8;
  background-color: rgb(0, 110, 255);
  position: absolute;
  padding: 2px 8px;
  font-size: 12px;
  right: -25px;
  top: -10px;
}
.fa-user-tie {
  margin-right: 5px;
}
.ellipsis {
  display: inline-block;
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
