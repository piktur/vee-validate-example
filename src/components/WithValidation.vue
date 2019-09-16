<template>
  <ValidationProvider
    rules="required|email"
    name="email"
    mode="lazy"
    slim
    vid="email">
    <template v-slot="{ ariaInput, errors }">
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
import { extend, ValidationProvider } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

extend('required', required)
extend('email', email)

export default Vue.extend({
  name: 'WithValidation',
  components: { VTextField, ValidationProvider },
  data: () => ({
    form: {
      email: ''
    }
  }),
});
</script>
