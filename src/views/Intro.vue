<script setup>
import TheTab from "../components/TheTab.vue";
</script>
<template>
  <div class="container pt-4">
    <TheTab :tabTitle="['遊戲簡介', '遊戲特色']">
      <template v-slot:tab-content-0>
        <div>發行日期：2015 年 12 月 2 日</div>
        《湯姆克蘭西之虹彩六號：圍攻行動》是第一人稱射擊遊戲，琢磨破壞與裝置使用的藝術。時時刻刻面對激烈的近距離對戰、高致死率、戰略決策、團隊合作及爆破動作。體驗從過去《湯姆克蘭西之虹彩六號》系列遊戲一脈相承的傳統中，誕生的全新激烈槍戰和專家策略世代。
      </template>
      <template v-slot:tab-content-1>
        <ul class="ps-4">
          <li>
            遊戲主打 5 對 5 攻防體驗，以及在可破壞環境中的激烈近距離戰鬥。
          </li>
          <li>
            玩家可以利用無人機、攝像頭取得戰局中的情報，且不同的人物有各自不同的特殊能力。
          </li>
          <li>
            遊戲中武器取材於現實，各國特種部隊中常用武器都能在遊戲中找到。
          </li>
        </ul>
      </template>
    </TheTab>

    <hr />
    <h4>遊戲平台</h4>
    PC / PS5 / PS4 / XBOX One & Xbox Series X|S
    <hr />
    <div class="row">
      <div class="col-md">
        <h4>PC最低配備</h4>
        作業系統: Windows 7, Windows 8.1, Windows 10 (64bit versions
        required)<br />
        處理器: Intel Core i3 560 @ 3.3 GHz or AMD Phenom II X4 945 @ 3.0 GHz<br />
        記憶體: 6 GB 記憶體<br />
        顯示卡: NVIDIA GeForce GTX 460 or AMD Radeon HD 5870 (DirectX-11
        compliant with 1GB of VRAM)
        <hr class="d-md-none" />
      </div>

      <div class="col-md">
        <h4>PC建議配備</h4>
        作業系統: Windows 7 SP1, Windows 8.1, Windows 10 (64bit versions
        required)<br />
        處理器: Intel Core i5-2500K @ 3.3 GHz or better or AMD FX-8120 @ 3.1 Ghz
        or better<br />
        記憶體: 8 GB 記憶體<br />
        顯示卡: NVIDIA GeForce GTX 670 (or GTX 760 / GTX 960) or AMD Radeon HD
        7970 (or R9 280x [2GB VRAM] / R9 380 / Fury X)
      </div>
    </div>

    VIA:
    <a
      href="http://store.steampowered.com/app/359550/Tom_Clancys_Rainbow_Six_Siege/"
      target="_blank"
      >STEAM</a
    >
  </div>
</template>
