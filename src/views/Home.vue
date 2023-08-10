<script setup>
import { computed, ref, watch } from "vue";
import ListHuman from "../components/ListHuman.vue";
import BeginnerTool from "../components/BeginnerTool.vue";
import TheSelect from "../components/TheSelect.vue";
import TheModal from "../components/TheModal.vue";
import { useHumanStore } from "../stores/human.js";
import { getImageUrl } from "../utils/getImageUrl.js";
import { specialtyZhTwName, specialtyIntro } from "../utils/specialtyIntro.js";

const data = ref([]);
const store = useHumanStore();
(async function () {
  data.value = await store.fetchHumansData();
})();

const isShowModal = ref(false);
const modalContentIndex = ref("");
const modalData = computed(() => {
  return modalContentIndex.value !== ""
    ? data.value[modalContentIndex.value]
    : {};
});

const filterPosition = computed(() => {
  return data.value
    ? data.value.filter((item) => {
        const isFilterSpecialty = specialtyType.value !== "all";
        const isFilterAttacker = viewType.value === "attacker";
        const isFilterDefender = viewType.value === "defender";

        if (viewType.value === "all") {
          return isFilterSpecialty
            ? item.Specialty.includes(specialtyType.value)
            : data.value;
        } else if (isFilterAttacker || isFilterDefender) {
          return isFilterSpecialty
            ? item.Position === viewType.value &&
                item.Specialty.includes(specialtyType.value)
            : item.Position === viewType.value;
        }
      })
    : "";
});

const handleModal = (index) => {
  isShowModal.value = true;
  modalContentIndex.value = index;
  document.body.classList.toggle("modal-open");
  document.body.style.overflow = "hidden";
};
const closeModal = () => {
  modalContentIndex.value = "";
  isShowModal.value = false;
  document.body.classList.toggle("modal-open");
  document.body.style.overflow = "";
};
const viewType = ref("all");
const viewOptions = [
  { name: "全部", value: "all" },
  { name: "攻擊方", value: "attacker" },
  { name: "防守方", value: "defender" },
];

const specialtyType = ref("all");
const specialtyOptionData = {
  common: [
    { name: "全部", value: "all" },
    { name: "情資", value: "intel" },
    { name: "反裝備", value: "anti-gadget" },
    { name: "支援", value: "support" },
  ],
  attacker: [
    { name: "前線 (攻擊方)", value: "front line" },
    { name: "地圖控制 (攻擊方)", value: "map control" },
    { name: "突破 (攻擊方)", value: "breach" },
  ],
  defender: [
    { name: "陷捕手 (防守方)", value: "trapper" },
    { name: "反衝鋒 (防守方)", value: "anti-entry" },
    { name: "群體控制 (防守方)", value: "crowd control" },
  ],
};

const specialtyOptions = computed(() => {
  return () => {
    switch (true) {
      case viewType.value === "attacker":
        return specialtyOptionData.common.concat(specialtyOptionData.attacker);
      case viewType.value === "defender":
        return specialtyOptionData.common.concat(specialtyOptionData.defender);
      default:
        return specialtyOptionData.common.concat(
          specialtyOptionData.attacker,
          specialtyOptionData.defender
        );
    }
  };
});

watch(viewType, () => {
  const isMatch = specialtyOptions
    .value()
    .some((item) => specialtyType.value === item.value);
  if (!isMatch) specialtyType.value = "all";
});

const specialtyInfo = computed(() => {
  return specialtyType.value === "all"
    ? "選擇一種專長，以查看歸類在該專長之下的特勤幹員。"
    : specialtyIntro[specialtyType.value];
});
</script>

<template>
  <div class="container pt-4">
    <BeginnerTool @showModal="handleModal" />

    <div class="row g-3 mt-3">
      <div class="col-md">
        <TheSelect
          defaultText="請選擇攻守方"
          :options="viewOptions"
          @change="
            (val) => {
              viewType = val;
            }
          "
        ></TheSelect>
      </div>
      <div class="col-md">
        <TheSelect
          defaultText="請選擇專長"
          :options="specialtyOptions()"
          @change="
            (val) => {
              specialtyType = val;
            }
          "
        ></TheSelect>
      </div>
    </div>
    <div class="text-center mt-4">
      <template v-if="viewType === 'all'">特勤幹員人數</template>
      <template v-else>
        <SvgIcon :name="viewType === 'attacker' ? 'sword' : 'castle'" />
        {{ viewType === "attacker" ? "攻擊方" : "防守方" }}
      </template>
      {{ filterPosition.length }} 人
      <div class="my-2">
        {{ specialtyInfo }}
      </div>
    </div>
    <div id="operators">
      <ListHuman :data="filterPosition" @showModal="handleModal" />
    </div>
  </div>

  <TheModal v-model="isShowModal" @close="closeModal">
    <template v-slot:header>
      <span :title="modalData?.Position === 'attacker' ? '攻擊方' : '防守方'">
        <SvgIcon
          :name="modalData?.Position === 'attacker' ? 'sword' : 'castle'"
        ></SvgIcon>
      </span>
      <img
        :src="
          modalData?.img_url
            ? getImageUrl(`${modalData?.img_url}_icon.png`)
            : ''
        "
      />
      {{ modalData?.Nickname }}
      <span class="name_zh small">{{ modalData?.Nickname_zh }}</span>
    </template>
    <template v-slot:body>
      <div class="row g-3">
        <div class="col-auto">
          <img
            class="mx-auto d-block avatar"
            :src="
              modalData?.img_url
                ? getImageUrl(`${modalData?.img_url}_avatar.png`)
                : ''
            "
          />
        </div>
        <div class="col">
          <p>所屬單位：{{ modalData?.Org }}</p>
          <div class="d-flex mb-2">
            <div class="text-nowrap">真實姓名：</div>
            {{ modalData?.Realname }}
          </div>
          <p>出生日期：{{ modalData?.Birthday }}</p>
          <p>專　　長：{{ specialtyZhTwName(modalData?.Specialty) }}</p>
        </div>
      </div>
      <hr />
      <div class="row mb-1">
        <div class="col">護　　甲：{{ modalData?.Armor }}</div>
        <div class="col">速　　度：{{ modalData?.Speed }}</div>
      </div>
      <div class="bg-dark rounded-1 p-2 mb-2">
        <div class="text-warning">特殊技能：{{ modalData?.Device }}</div>
        <p class="text-white">{{ modalData?.Device_Description }}</p>
      </div>
      <!-- <hr /> -->
      <p>主武器：{{ modalData?.Primary?.join("、") }}</p>
      <p>次要武器：{{ modalData?.Secondary?.join("、") }}</p>
      <p>裝　備：{{ modalData?.Gadget?.join("、") }}</p>
    </template>
  </TheModal>
</template>
<style scoped>
.avatar {
  height: 160px;
}
</style>
