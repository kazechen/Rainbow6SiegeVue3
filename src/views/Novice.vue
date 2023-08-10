<script setup>
// import TheTab from "../components/TheTab.vue";
</script>
<template>
  <div class="container pt-4">
    <ul>
      <li>
        強烈不建議購買新手版，詳細版本差異請參考這篇
        <a
          href="https://forum.gamer.com.tw/C.php?bsn=1054&snA=4552&tnum=72"
          target="_blank"
          title="【心得】虹彩六號上市版本：入門版、標準版、進化版、黃金版、完全版比較"
          >文章</a
        >
      </li>
      <li>
        《虹彩六號：圍攻行動》非你所認知的第一人稱射擊遊戲，他是一款真正的恐怖遊戲。<br />
      </li>
      <li>
        這是一款講求團隊合作的遊戲，不太適合喜歡單打獨鬥的人，最好順便推身邊的朋友一起入坑來玩。
      </li>
      <li>
        新手常死得不明不白、摸索期較長，這也是為何大家說這款遊戲對新手不友善。玩起來的感覺有點類似魔物獵人，跨過了萌新的階段，你就能開始享受遊戲的樂趣。
      </li>
      <li>在尚未熟悉整個遊戲系統和操作情況下，不建議冒然挑戰「排名戰」。</li>
      <li>
        第三年第一季出現的全新「OUTBREAK」災變模式，這是限時的PVE模式(2018年3月6日至4月3日)，何時會再開放誰也說不準。
      </li>
      <li>
        季票內容包含最新年度的特勤幹員等特典，幹員是隨每個季度更新，而非購買當下就能拿到全部8位幹員。
      </li>
    </ul>
    <div class="row g-3">
      <div class="col-md">
        <div class="text-center text-muted">挑選你的第一個特勤幹員</div>
        <a
          href="https://youtu.be/cZF2m1b5qOQ"
          target="_blank"
          class="position-relative vidoe-external-link"
          title="前往youtube觀看影片"
        >
          <img class="img-fluid" src="../assets/images/maxresdefault.jpg" />
          <div class="position-absolute top-50 start-50 translate-middle">
            <SvgIcon name="externallink" class="external-link-icon" />
          </div>
        </a>
      </div>
      <div class="col-md">
        <div class="text-center text-muted">攻擊方新手教學</div>
        <a
          href="https://youtu.be/-muxn1-gubU"
          target="_blank"
          class="position-relative vidoe-external-link"
          title="前往youtube觀看影片"
        >
          <img
            class="img-fluid"
            src="../assets/images/Thumbnail_Starter_Guide_ATTACK_T.jpg"
          />
          <div class="position-absolute top-50 start-50 translate-middle">
            <SvgIcon name="externallink" class="external-link-icon" />
          </div>
        </a>
      </div>
      <div class="col-md">
        <div class="text-center text-muted">防禦方新手教學</div>
        <a
          href="https://youtu.be/r0B1qTVrFjw"
          target="_blank"
          class="position-relative vidoe-external-link"
          title="前往youtube觀看影片"
        >
          <img
            class="img-fluid"
            src="../assets/images/Thumbnail_Starter_Guide_DEFENSE.jpg"
          />
          <div class="position-absolute top-50 start-50 translate-middle">
            <SvgIcon name="externallink" class="external-link-icon" />
            <!-- <img src="../assets/images/external-link.png" /> -->
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.vidoe-external-link {
  .external-link-icon:hover {
    color: #ffd54f;
  }
}
.external-link-icon {
  color: rgba(255, 255, 255, 0.8);
  font-size: 6rem;
}
</style>
