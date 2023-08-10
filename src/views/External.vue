<script setup>
const eSports = {
  title: "電競相關",
  links: [
    { name: "官方中文轉播", url: "https://www.twitch.tv/rainbow6tw" },
    {
      name: "職業電競賽程",
      url: "https://www.ubisoft.com/en-us/esports/rainbow-six/siege",
    },
  ],
};

const social = {
  title: "遊戲社群",
  links: [
    {
      name: "Discord",
      url: "https://discord.com/invite/ubisoftofficial",
    },
    {
      name: "巴哈姆特討論區",
      url: "https://forum.gamer.com.tw/A.php?bsn=1054",
    },
    {
      name: "Facebook社團",
      url: "https://www.facebook.com/groups/778765848917490/",
    },
    {
      name: "百度貼吧",
      url: "https://tieba.baidu.com/f?kw=%B2%CA%BA%E7%C1%F9%BA%C5",
    },
    { name: "Reddit 論壇", url: "https://www.reddit.com/r/Rainbow6/" },
  ],
};

var official = {
  title: "官方網站",
  links: [
    { name: "遊戲官網", url: "https://rainbow6.ubisoft.com/siege/en-us/home/" },
    { name: "Ubisoft 官方網站", url: "https://www.ubisoft.com/zh-tw/" },
    { name: "Ubisoft 客戶服務", url: "https://support.ubi.com/zh-TW/" },
    { name: "Facebook 粉絲頁", url: "https://zh-tw.facebook.com/Ubisoft.TWN/" },
    {
      name: "Youtube 頻道",
      url: "https://www.youtube.com/channel/UCxXbnxNte0RkAbAVceWgwNA",
    },
  ],
};

var relevant = {
  title: "相關遊戲",
  links: [
    {
      name: "虹彩六號：撤離禁區-官網",
      url: "https://www.ubisoft.com/zh-tw/game/rainbow-six/extraction",
    },
    {
      name: "虹彩六號M-官網",
      url: "https://www.ubisoft.com/zh-tw/game/rainbow-six/mobile",
    },
  ],
};
</script>
<template>
  <div class="container pt-4">
    <ol class="list-group">
      <li
        class="list-group-item d-flex justify-content-between align-items-start"
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{ eSports.title }}</div>

          <div v-for="item in eSports.links" class="mt-2">
            <a :href="item.url" class="no-underline" target="_blank">{{
              item.name
            }}</a>
          </div>
        </div>
        <span class="badge bg-primary rounded-pill">{{
          eSports.links.length
        }}</span>
      </li>

      <li
        class="list-group-item d-flex justify-content-between align-items-start"
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{ social.title }}</div>

          <div v-for="item in social.links" class="mt-2">
            <a :href="item.url" class="no-underline" target="_blank">{{
              item.name
            }}</a>
          </div>
        </div>
        <span class="badge bg-primary rounded-pill">{{
          social.links.length
        }}</span>
      </li>

      <li
        class="list-group-item d-flex justify-content-between align-items-start"
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{ official.title }}</div>

          <div v-for="item in official.links" class="mt-2">
            <a :href="item.url" class="no-underline" target="_blank">{{
              item.name
            }}</a>
          </div>
        </div>
        <span class="badge bg-primary rounded-pill">{{
          official.links.length
        }}</span>
      </li>

      <li
        class="list-group-item d-flex justify-content-between align-items-start"
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{ relevant.title }}</div>

          <div v-for="item in relevant.links" class="mt-2">
            <a :href="item.url" class="no-underline" target="_blank">{{
              item.name
            }}</a>
          </div>
        </div>
        <span class="badge bg-primary rounded-pill">{{
          relevant.links.length
        }}</span>
      </li>
    </ol>
  </div>
</template>
<style scoped>
.no-underline {
  text-decoration-line: none;
}
</style>
