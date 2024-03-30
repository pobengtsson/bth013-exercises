<template>
  <div id='app'>
    <h1>Vue & Express Demo</h1>
    <button @click='fetchMessage'>Fetch Message from Server</button>
    <p v-if='message'>Server says: "{{ message }}"</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const message = ref('');

const fetchMessage = async () => {
  try {
    const response = await axios.get('/api/message')
    message.value = response.data.message
  } catch (error) {
    console.error('There was an error fetching the message:', error)
  }
}
</script>
