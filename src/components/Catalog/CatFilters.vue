<template>
  <div>

    <!-- PLATFORM -->

    <div class="filter">
      <div @click="show3 = !show3" class="sidebar__collapse btn">
        <div
          :class="{
            'sidebar__collapse-icon unrotated': show3,
            'sidebar__collapse-icon rotated': !show3,
          }"
        >
          <span class="icon-caret-down px20"></span>
        </div>
        <div class="sidebar__collapse-header">
          <h6 class="font-regular">Платформа</h6>
        </div>
      </div>
      <Transition name="slide-fade">
        <div v-if="show3" class="sidebar__variants">
          <div v-for="(platform, index) in platforms">
            <input
              type="checkbox"
              :value="platform.id"
              :id="'platform' + index"
              v-model="selected.platforms"
            />
            <label :for="'platform' + index">{{ platform.name }}</label>
          </div>
        </div>
      </Transition>
    </div>

    <!-- CERTIFICATES -->

    <div class="filter">
      <div @click="show2 = !show2" class="sidebar__collapse btn">
        <div
          :class="{
            'sidebar__collapse-icon unrotated': show2,
            'sidebar__collapse-icon rotated': !show2,
          }"
        >
          <span class="icon-caret-down px20"></span>
        </div>
        <div class="sidebar__collapse-header">
          <h6 class="font-regular">Сертификация</h6>
        </div>
      </div>
      <Transition name="slide-fade">
        <div v-if="show2" class="sidebar__variants">
          <div v-for="(certificate, index) in certificates">
            <input
              type="checkbox"
              :value="certificate.id"
              :id="'certificate' + index"
              v-model="selected.certificates"
            />
            <label :for="'certificate' + index">{{ certificate.name }}</label>
          </div>
        </div>
      </Transition>
    </div>

    <div class="filter">
      <div @click="show = !show" class="sidebar__collapse btn">
        <div
          :class="{
            'sidebar__collapse-icon unrotated': show,
            'sidebar__collapse-icon rotated': !show,
          }"
        >
          <span class="icon-caret-down px20"></span>
        </div>
        <div class="sidebar__collapse-header">
          <h6 class="font-regular">Аналоги</h6>
        </div>
      </div>
      <Transition name="slide-fade">
        <div v-if="show" class="sidebar__variants">
          <div v-for="(analog, index) in analogs">
            <input
              type="checkbox"
              :value="analog.id"
              :id="'analog' + index"
              v-model="selected.analogs"
            />
            <label :for="'analog' + index">{{ analog.name }}</label>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Languages -->

    <div class="filter">
      <div @click="show1 = !show1" class="sidebar__collapse btn">
        <div
          :class="{
            'sidebar__collapse-icon unrotated': show1,
            'sidebar__collapse-icon rotated': !show1,
          }"
        >
          <span class="icon-caret-down px20"></span>
        </div>
        <div class="sidebar__collapse-header">
          <h6 class="font-regular">Язык интерфейса</h6>
        </div>
      </div>
      <Transition name="slide-fade">
        <div v-if="show1" class="sidebar__variants">
          <div v-for="(language, index) in languages">
            <input
              type="checkbox"
              :value="language.id"
              :id="'language' + index"
              v-model="selected.languages"
            />
            <label :for="'language' + index">{{ language.name }}</label>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selected: Object,
  },
  data() {
    return {
      analogs: [],
      show: false,
      show1: false,
      show2: true,
      show3: true,
      languages: [],
      platforms: [],
      certificates: [],
    };
  },

  mounted() {
    this.getAnalogs();
    this.getLanguages();
    this.getPlatforms();
    this.getCertificates();
  },

  methods: {
    async getAnalogs() {
      const resp = await this.$axios.get("/analogs");
      this.analogs = resp.data;
    },
    async getPlatforms() {
      const resp = await this.$axios.get("/platforms");
      this.platforms = resp.data;
    },
    async getLanguages() {
      const resp = await this.$axios.get("/languages");
      this.languages = resp.data;
    },
    async getCertificates() {
      const resp = await this.$axios.get("/certificates");
      this.certificates = resp.data;
    },
  },

  watch: {
    selected: {
      handler() {
        this.getAnalogs();
        this.getLanguages();
        this.getPlatforms();
        this.getCertificates();
        this.$emit("filter-change", this.selected);
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
