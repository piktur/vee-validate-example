<template>
  <VApp>
    <VContent>
      <WithValidation style="margin: 25vw;"/>
    </VContent>
  </VApp>
</template>

<script lang="ts">
import Vue from 'vue';
import WithValidation from '@/components/WithValidation.vue'

export default Vue.extend({
  name: 'App',
  components: {
    WithValidation,
  },
  data: () => ({
    //
  }),
});
</script>
