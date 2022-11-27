<template>
  <Transition :name="direction" mode="in-out">
    <div
      v-show="visibleSlide === index"
      class="partnersblocks-partners-banner-logo"
    >
      <slot></slot>
    </div>
  </Transition>
</template>

<script>
export default {
  props: ["visibleSlide", "index", "direction"],
};
</script>

<style lang="scss" scoped>
// LEFT SWIPE
.left-enter-active {
  animation: leftInAnimation 0.4s ease-in-out;
}

.left-leave-active {
  animation: leftOutAnimation 0.4s ease-in-out;
}

@keyframes leftInAnimation {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes leftOutAnimation {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
// END LEFT SWIPE
// RIGHT SWIPE
.right-enter-active {
  animation: rightInAnimation 0.4s ease-in-out;
}

.right-leave-active {
  animation: rightOutAnimation 0.4s ease-in-out;
}

@keyframes rightInAnimation {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes rightOutAnimation {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(+100%);
  }
}
// END RIGHT SWIPE
// TOP SWIPE
.top-enter-active {
  animation: topInAnimation 0.4s ease-in-out;
}

.top-leave-active {
  animation: topOutAnimation 0.4s ease-in-out;
}

@keyframes topInAnimation {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes topOutAnimation {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}
// END TOP SWIPE
// DOWN SWIPE
.down-enter-active {
  animation: downInAnimation 0.4s ease-in-out;
}

.down-leave-active {
  animation: downOutAnimation 0.4s ease-in-out;
}

@keyframes downInAnimation {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes downOutAnimation {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(+100%);
  }
}
// END DOWN SWIPE
</style>
