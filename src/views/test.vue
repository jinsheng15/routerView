<template>
    <div>
        <button @click="handleClick">click me</button>
        <!-- enter-active-class='animated jackInTheBox '
            leave-active-class='animated hinge '-->
        <transition
            name="fade"
            mode="in-out"
            　　　　
        >
            <h1 v-bind:key="edit">{{edit}}</h1>

        </transition>
        <input
            type="number"
            v-model="number"
            step="10"
        >
    </div>
</template>

<script>
export default {
  data() {
    return {
      edit: "jinsheng",
      number: 2
    };
  },
  methods: {
    handleClick() {
      if (this.edit == "jinsheng") {
        this.edit = "jinbaoku";
      } else {
        this.edit = "jinsheng";
      }
    }
  }
};
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0.5;
}
</style>