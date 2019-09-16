<template>
  <VApp>
    <VContent>
      <WithValidation />
      <WithSimpleValidation style="outline: 1px solid black; width: 100%;" />
    </VContent>
  </VApp>
</template>

<script lang="ts">
import Vue from 'vue';
import { VApp, VContent } from 'vuetify/lib'
import WithValidation from '@/components/WithValidation.vue'
import WithSimpleValidation from '@/components/WithSimpleValidation.vue'

export default Vue.extend({
  name: 'App',
  components: {
    VApp,
    VContent,
    WithValidation,
    WithSimpleValidation,
  },
  data: () => ({
    //
  }),
});
</script>
