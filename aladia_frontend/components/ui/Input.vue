<!-- InputField.vue -->
<template>
    <div class="space-y-2">
      <label :for="label" class="sr-only">
        {{ label }}
      </label>
      <input
      :id="label"
      :value="modelValue" 
      @input="$emit('update:modelValue', $event.target.value)" 
      :placeholder="placeholder"
      :type="type"
      class="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
    />
    </div>
  </template>
  
  <script setup>
  
  import { defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    modelValue: String,
    label: String,
    placeholder: String,
    type: String
  })
  
  const emit = defineEmits(['update:modelValue'])
  
  watch(
    () => props.modelValue,
    (newValue) => {
      emit('update:modelValue', newValue)
    }
  )
  </script>
  