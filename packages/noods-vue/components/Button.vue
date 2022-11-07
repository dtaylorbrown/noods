<template>
  <button type="button" @click="onClick">{{ label }}</button>
</template>

<script lang="ts">
  import { reactive } from 'vue';
  export default {
    name: 'Button',
    props: {
      label: {
        type: String,
        required: true,
      },
      primary: {
        type: Boolean,
        default: false,
      },
      size: {
        type: String,
        validator: function (value: string) {
          return ['small', 'medium', 'large'].indexOf(value) !== -1;
        },
      },
      backgroundColor: {
        type: String,
      },
    },
    emits: ['click'],
    setup(props, { emit }) {
      props = reactive(props);
      return {
        onClick() {
          emit('click');
        }
      }
    },
  };
</script>