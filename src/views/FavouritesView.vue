<script setup lang="ts">
import FilterNavBar from '@/components/FilterNavBar.vue';
import SearchBar from '@/components/SearchBar.vue';
import GoodsList from '@/components/GoodsList.vue';
import {  onMounted, computed } from 'vue';
import { useGoodsStore } from '@/stores/goodsStore';

const goodsStore = useGoodsStore()


onMounted(() => {
    goodsStore.fetchGoods()
})


const handleClickFilterItem = () => {
  goodsStore.filterGoods()
}

const goodsList = computed(() => {
    return getFilteredGoodsList();
})

const getFilteredGoodsList = () => {
  if (goodsStore.searchTermForGood) {
    return goodsStore.searchGoodsByTerm(goodsStore.getLikedGoods);
  }
  return goodsStore.getLikedGoods;
}

</script>

<template>
<section class="filter-and-search">
    <div class="container">
      <div class="filter-and-search__inner">
        <FilterNavBar :onClickFilterItem="handleClickFilterItem" />
        <SearchBar />
      </div>
    </div>
  </section>
  <GoodsList :list="goodsList" />
</template>