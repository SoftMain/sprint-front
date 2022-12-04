<template>
  <div class="sidebar__variants-item">
    <div class="sidebar__variants-item-icon">
      <!-- <span class="icon-checkbox-fill px20"></span> -->
      <input @input="(event) => $emit('update:checked', event.target.checked)" :checked="checked" type="checkbox"
        :id="item.name" />
      <label :for="item.name" class="sidebar__variants-item-text">
        <span></span>
        {{ item.name }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    checked: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
input[type='checkbox'] {
  height: 0;
  width: 0;
  display: none;
}

input[type='checkbox']+label {
  position: relative;
  display: flex;
  // margin: .6em 0;
  align-items: center;
}

input[type='checkbox']+label>span {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  width: 15px;
  height: 15px;
  background: transparent;
  border: 2px solid #222;
  border-radius: 2px;
  cursor: pointer;
}


input[type='checkbox']:checked+label>span {
  animation: checkbox-box 125ms 250ms cubic-bezier(.4, .0, .6, 1) forwards;
}

input[type='checkbox']:checked+label>span:before {
  content: "";
  position: absolute;
  top: 8px;
  left: 2px;
  border-right: 2px solid transparent;
  border-bottom: 2px solid transparent;
  transform: rotate(45deg);
  transform-origin: 0% 100%;
  animation: checkbox-arrow 125ms 250ms cubic-bezier(.4, .0, .6, 1) forwards;
}


@keyframes checkbox-arrow {
  0% {
    width: 0;
    height: 0;
    border-color: #222;
    transform: translate3d(0, 0, 0) rotate(45deg);
  }

  33% {
    width: .2em;
    height: 0;
    transform: translate3d(0, 0, 0) rotate(45deg);
  }

  100% {
    width: .2em;
    height: .5em;
    border-color: #2755A1;
    transform: translate3d(0, -.5em, 0) rotate(45deg);
  }
}

@keyframes checkbox-box {
  0% {
    border: 2px solid #222;
  }

  100% {
    border: 2px solid #2755A1;

  }
}
</style>
