<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  modelValue: boolean;
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'confirm'): void;
}>();

const showDialog = computed({
  get: () => props.modelValue,
  set: (value) => emits('update:modelValue', value),
});
</script>

<template>
  <q-dialog v-model="showDialog" persistent>
    <q-card>
      <q-card-section>
        <div class="text-h6">Leave Room</div>
      </q-card-section>
      <q-card-section>
        <div class="text-body1">Are you sure you want to leave this room?</div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn
          color="negative"
          label="Leave"
          @click="emits('confirm')"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
