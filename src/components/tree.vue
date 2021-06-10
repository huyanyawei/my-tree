<template>
  <!-- <a-button>ss</a-button> -->
  <a-tree
    v-model="checkedKeys"
    checkable
    :expanded-keys="expandedKeys"
    :auto-expand-parent="autoExpandParent"
    :selected-keys="selectedKeys"
    :tree-data="treeData"
    :replaceFields="replaceFileds"
    @expand="onExpand"
    @check="onCheck"
  />
</template>

<script>
export default {
  props: {
    //渲染树类型，area | BCD | DCD
    treeType: {
      type: String,
      default: ""
    },
    // 源数据
    treeData: {
      type: Array,
      default() {
        return [];
      }
    },
    // 默认渲染字段
    replaceFileds: {
      type: Object,
      default() {
        return { children: "child", title: "name", key: "id" };
      }
    },
    // 展开keys
    defalutExpandedKeys: {
      type: Array,
      default() {
        return [];
      }
    },
    // 已选keys
    defalutCheckedKeys: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      autoExpandParent: true,
      selectedKeys: [],
      checkedKeys: [],
      expandedKeys: []
    };
  },
  watch: {
    // checkedKeys(val) {
    //   console.log("onCheck", val);
    // }
  },
  created() {
    this.checkedKeys = this.defalutCheckedKeys;
    this.expandedKeys = this.defalutCheckedKeys;
  },
  methods: {
    onExpand(expandedKeys) {
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onCheck(checkedKeys) {
      this.checkedKeys = checkedKeys;
      this.$emit("seledtedKeysHandle", checkedKeys, this.treeType);
    }
  },
  mounted() {}
};
</script>
