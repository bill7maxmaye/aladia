<!-- LoginButton.vue -->
<template>
  <button
    :class="computedClass"
    @click="handleClick"
    class="transition duration-200"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default', // options: destructive, default, outline, ghost
    validator: (value) => ['destructive', 'default', 'outline', 'ghost', "secondary"].includes(value)
  },
  size: {
    type: String,
    default: 'default', // options: default, sm, xs, lg, icon
    validator: (value) => ['default', 'sm', 'xs', 'lg', 'icon'].includes(value)
  },
  className: {
    type: String,
    default: ''
  },
  handleClick: {
    type: Function,
    default: () => {}
  }
})

// Compute the button class based on props
const computedClass = computed(() => {
  const baseClass = 'w-full py-2 px-4 text-white font-semibold rounded-md flex items-center justify-center'
  
  // Define variant classes
  const variantClasses = {
    secondary:" bg-gradient-to-r from-amber-600 to-amber-600 hover:from-amber-600 hover:to-amberth-700 text-white",
    destructive: 'bg-red-500 hover:bg-red-600',
    default: 'bg-zinc-800 hover:bg-zinc-700 transition duration-200',
    outline: 'border border-white text-white bg-transparent hover:bg-white hover:text-zinc-900',
    ghost: 'bg-transparent text-white hover:bg-zinc-700'
  }
  
  // Define size classes
  const sizeClasses = {
    default: 'text-base',
    sm: 'text-sm',
    xs: 'text-xs',
    lg: 'text-lg',
    icon: 'p-2'
  }

  return [
    baseClass,
    variantClasses[props.variant],
    sizeClasses[props.size],
    props.className // Include any additional classes
  ].join(' ')
})
</script>
