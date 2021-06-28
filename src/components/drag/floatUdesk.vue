<template>
  <div>
    <drag-box padding="0 0 0 0" :propTop="propTop" class="icons-warp">
      <div class="float-icon-item">
        <img src="@/assets/img/customer.png" @click="handleIcons" />
      </div>
    </drag-box>
  </div>
</template>

<script>
import dragBox from "@/components/drag/dragBox.vue";
export default {
  components: {
    dragBox
  },
  props: {
    // 初始位置距离顶部的距离 rem
    propTop: {
      type: Number,
      default: 1
    }
  },
  methods: {
    // 点击按钮
    handleIcons() {
      location.href = "https://decent.udesk.cn/im_client/?web_plugin_id=86242";
    }
  }
};
</script>
<style lang="less" scoped>
// @deep: ~">>>";
.icons-warp {
  border-radius: 0.5rem;
  background: none;
  box-shadow: none;
  .float-icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 0.98rem;
    height: 0.98rem;
    img {
      width: 100%;
    }
  }
}
</style>
