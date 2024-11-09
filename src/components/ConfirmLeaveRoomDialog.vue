<script setup lang="ts">
import { ref } from 'vue';

const showDialog = ref(false);
</script>

<template>
  <q-dialog v-model="showDialog">
    <q-card>
      <q-card-section>
        <div class="text-h6">Leave Room</div>
      </q-card-section>
      <q-card-section>
        <div class="text-body1">Are you sure you want to leave this room?</div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn color="primary" label="Leave" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
