<script setup lang="ts">
import { goodOfferType } from '@/constants';
import { useGoodsStore } from '@/stores/goodsStore';
import type { OfferType } from '@/types';
import { ref } from 'vue';

type PropsType = {
  onClickFilterItem: () => void
}

const props = defineProps<PropsType>()

const activeItem = ref(localStorage.getItem('activeGoodOfferType') || 'Все типы');

const goodsStore = useGoodsStore();

const handleClickFilterItem = () => {
  goodsStore.changeOfferType(activeItem.value as OfferType)
}

</script>

<template>
  <div class="filter">
    <ul class="filter__list">
      <li v-for="item in goodOfferType" :key="item"
        :class="{ 'filter__item': true, 'filter__item--active': item === activeItem }"
        @click="activeItem = item; handleClickFilterItem(); props.onClickFilterItem()">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style>
.filter__list {
  display: flex;
  justify-content: space-between;
  width: 225px;
}

.filter-and-search__inner {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}

.filter {
  background-color: #f4f5f9;
  border: 1px solid #e0e3ee;
  border-radius: 8px;
  padding: 5px 10px;
  color: #969dc3;
  cursor: pointer;
}

.filter__item.filter__item--active {
  color: #2d3b87;
}
</style>