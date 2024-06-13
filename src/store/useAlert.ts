import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAlert = defineStore('Alert', () => {
  const message = ref('This is Message');
  const type = ref<AlertType>('Danger');
  const isAlertVisible = ref(false);
  const showAlert = (msg: string, ty: AlertType) => {
    message.value = msg;
    type.value = ty;
    isAlertVisible.value = true;
    setTimeout(() => {
      isAlertVisible.value = false;
    }, 5 * 1000);
  };
  return { isAlertVisible, message, type, showAlert };
});
