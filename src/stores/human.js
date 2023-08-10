import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { getHumans } from "../services/humans.js";
import { matchHuman } from "../utils/matchHuman.js";

export const useHumanStore = defineStore("human", () => {
  const data = ref([]);
  const quizAns = ref([]);

  const fetchHumansData = async () => {
    const res = await getHumans();
    data.value = res.data;
    return data.value;
  };
  const setQuizAns = (arr) => {
    const delayTime = Math.random() > 0.3 ? 300 : 600;
    setTimeout(() => {
      quizAns.value = arr;
    }, delayTime);
  };
  const resetQuizAns = () => {
    quizAns.value = [];
  };
  const recommend = computed(() => {
    if (!quizAns.value.length) return [];
    else {
      return data.value.filter((obj) =>
        matchHuman(quizAns.value).includes(obj.index)
      );
    }
  });
  return { fetchHumansData, setQuizAns, resetQuizAns, recommend };
});
