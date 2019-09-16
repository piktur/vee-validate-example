<template>
  <ValidationProvider
    rules="required|email"
    name="email"
    mode="lazy"
    slim
    vid="email">
    <template v-slot="{ ariaInput, errors }">
      <div>
        <input
          v-bind="ariaInput"
          v-model.lazy="form.email"
          label="Email"
          name="emailSimple" />
        <span class="errors" style="color: red;">{{ errors.join(', ') }}</span>
      </div>
    </template>
  </ValidationProvider>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'WithValidation',
  data: () => ({
    form: {
      email: ''
    }
  }),
});
</script>
