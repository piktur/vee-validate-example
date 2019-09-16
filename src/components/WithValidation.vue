<template>
  <ValidationProvider
    rules="required|email"
    name="email"
    mode="lazy"
    :slim="false"
    vid="email">
    <template v-slot:default="{ ariaInput, errors }">
      <VTextField
        v-bind="ariaInput"
        v-model.lazy="form.email"
        :error-messages="errors"
        label="Email"
        hint="required|email"
        name="email" />
    </template>
  </ValidationProvider>
</template>

<script lang="ts">
import Vue from 'vue';
import { VTextField } from 'vuetify/lib'

export default Vue.extend({
  name: 'WithValidation',
  components: { VTextField },
  data: () => ({
    form: {
      email: ''
    }
  }),
});
</script>
