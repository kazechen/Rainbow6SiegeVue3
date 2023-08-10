<!-- 
復刻官方頁面上的開始推薦工具 ( https://www.ubisoft.com/zh-tw/game/rainbow-six/siege/game-info/operators )
功能說明：回答四道問題，並推薦你一開始可以嘗試的角色
修正：
- 沒有答題也能點擊「下一道問題」並且送出。
- 最後一道題目的送出按鈕依然顯示「下一道問題」
改善：
- 增加問題之間的返回按鈕
-->
<script setup>
import { ref, computed } from "vue";
import { useHumanStore } from "../stores/human.js";
import TheButton from "../components/TheButton.vue";
import TheRadio from "../components/TheRadio.vue";
import ListHuman from "../components/ListHuman.vue";
import { getImageUrl } from "../utils/getImageUrl.js";

const emit = defineEmits(["showModal"]);
const handleModal = (index) => {
  emit("showModal", index);
};

const isShowQuiz = ref(false);
const isShowQuizResult = ref(false);
const ans = ref([]);
const step = ref(0);
const data = [
  {
    question: "在《虹彩六號：圍攻行動》中，你偏好什麼樣的策略？",
    options: [
      "技術就是一切！",
      "知識就是力量，我知道敵人在什麼位置，而他們不知道我在哪裡。",
      "良好的規劃，精巧設置的陷阱或是恰當的牆面破口能夠扭轉戰局。",
    ],
  },
  {
    question: "你比較喜歡持續移動你的位置，或是慢慢來守住一個點？",
    options: [
      "我喜歡持續移動。",
      "我兩種都行。",
      "我喜歡在全面分析完情勢之後再移動，或守著同一個位置。",
    ],
  },
  {
    question: "你在玩連線上時會跟隊友溝通討論嗎？",
    options: ["會，一直都是。", "只有在跟朋友一起玩的時候。", "從來不會。"],
  },
  {
    question: "你很輕易就能理解地圖跟遊戲模式嗎？",
    options: [
      "是，對我來說非常簡單。",
      "會花點時間，但不是什麼大問題。",
      "不，我通常要耗費心力才能熟練一款遊戲。",
    ],
  },
];
const quizProgress = computed(() => {
  return `<span class="text-white">${
    step.value + 1
  }</span><span class="text-white-50">/${data.length}</span>`;
});

const store = useHumanStore();

const submit = () => {
  store.setQuizAns(ans.value);
  isShowQuiz.value = false;
  isShowQuizResult.value = true;
};

const reStart = () => {
  ans.value = [];
  step.value = 0;
  store.resetQuizAns();

  isShowQuiz.value = true;
  isShowQuizResult.value = false;
};
</script>
<template>
  <div v-show="!isShowQuiz && !isShowQuizResult" class="promote text-center">
    <div class="body">
      <p class="small">只要回答簡單的問題，我們就會推薦適合你的特勤幹員</p>
      <div class="">
        <TheButton @click="isShowQuiz = true" class="btn-warning btn-lg">
          <SvgIcon class="fs-1" name="figures"></SvgIcon>開始推薦工具
        </TheButton>
      </div>
    </div>
  </div>

  <div v-if="isShowQuiz" class="quiz border border-warning px-2 py-4">
    <legend class="title mb-3">
      <span
        class="small bg-secondary bg-gradient rounded-pill px-3"
        v-html="quizProgress"
      ></span>
      {{ data[step].question }}
    </legend>
    <fieldset class="mx-md-4">
      <template
        v-for="(item, index) in data[step].options"
        :key="`opt-${index}`"
      >
        <div class="form-check mb-2">
          <TheRadio
            :id="`quiz-${index + 1}`"
            v-model="ans[step]"
            :value="index + 1"
          />
          <label
            class="form-check-label d-block"
            :class="{ active: ans[step] == index + 1 }"
            :for="`quiz-${index + 1}`"
          >
            {{ item }}
          </label>
        </div>
      </template>
    </fieldset>
    <div class="text-center mt-3">
      <TheButton class="btn-warning" @click="step--" v-show="step > 0"
        >上一題</TheButton
      >
      <TheButton
        class="btn-warning ms-2"
        @click="step++"
        v-show="step < 3"
        :disabled="!ans[step]"
      >
        下一題
      </TheButton>
      <TheButton
        class="btn-danger ms-2"
        @click="submit"
        v-show="step === 3"
        :disabled="!ans[step]"
      >
        送出答案
      </TheButton>
    </div>
  </div>
  <div
    class="quiz-result border border-warning px-2 py-4"
    v-show="isShowQuizResult"
  >
    <div class="title mb-4">
      根據你的回答，我們建議你使用下列的特勤幹員開始遊戲：
    </div>
    <div class="row list px-1">
      <div class="text-center">
        <ListHuman
          v-if="store.recommend.length"
          :data="store.recommend"
          titleName=""
          justifyContent="center"
          @showModal="handleModal"
        />
        <div v-else class="py-4">
          <div class="spinner-border text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <TheButton class="btn-warning" @click="reStart">再試一次</TheButton>
    </div>
  </div>
</template>
<style scoped lang="scss">
.promote {
  .body {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .small {
    font-size: 16px;
    text-shadow: 0 1px 1px #fff;
  }
  .btn {
    opacity: 0.85;
    &:hover {
      opacity: 1;
    }
  }
  background-image: url("../assets/images/Recruit.png");
  height: 200px;
  background-size: auto 150%;
  background-repeat: no-repeat;
  background-position: top center;
}
.form-check-label {
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
}
.quiz {
  background: #fff8e6;
  .title {
    font-size: 33px;
    font-weight: 400;
  }
  .form-check-label {
    cursor: pointer;
  }
  .active {
    color: #664d02;
  }
}

.quiz-result {
  background: #fff8e6;
  .title {
    font-size: 25px;
    font-weight: 400;
  }
}
</style>
