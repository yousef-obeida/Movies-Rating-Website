<script setup>
  defineProps(['modelValue'])
  defineEmits(['update:modelValue'])
</script>

<template>
  <!-- Search Bar (Hidden on small screens) -->
  <div class="d-none d-md-flex align-center" style="width: 400px;">
    <v-text-field
      append-inner-icon="mdi-magnify"
      bg-color="grey-darken-3"
      density="compact"
      hide-details
      label="Search movies..."
      :model-value="modelValue"
      rounded="lg"
      single-line
      theme="dark"
      variant="solo"
      @update:model-value="$emit('update:modelValue', $event)"
    />
  </div>
</template>
