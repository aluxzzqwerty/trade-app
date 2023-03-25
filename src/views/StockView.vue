<script setup lang="ts">
import FilterNavBar from '@/components/FilterNavBar.vue';
import GoodsList from '@/components/GoodsList.vue';
import SearchBar from '@/components/SearchBar.vue';
import { useGoodsStore } from '@/stores/goodsStore';
import { onMounted, computed } from 'vue';

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
    return goodsStore.searchGoodsByTerm(goodsStore.getGoods);
  }
  return goodsStore.getGoods;
}
</script>

<template>
<section class="filter-and-search">
    <div class="container">
      <div class="filter-and-search__inner">
        <FilterNavBar :onClickFilterItem="handleClickFilterItem"/>
        <SearchBar />
      </div>
    </div>
  </section>
  <GoodsList :list="goodsList" />
</template>

