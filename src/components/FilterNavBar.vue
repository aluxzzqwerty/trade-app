<script setup lang="ts">
import { goodOfferType } from '@/constants';
import { useGoodsStore } from '@/stores/goodsStore';
import type { OfferType } from '@/types';
import { ref } from 'vue';

type PropsType = {
  onClickFilterItem: () => void
}

const props = defineProps<PropsType>()

const activeItem = ref<OfferType>('Все типы');

const goodsStore = useGoodsStore();

const handleClickFilterItem = () => {
  goodsStore.changeOfferType(activeItem.value)
}

</script>

<template>
    <div class="filter">
      <ul class="filter__list">
        <li
          v-for="item in goodOfferType"
          :key="item"
          :class="{ 'filter__item': true, 'filter__item--active': item === activeItem }"
          @click="activeItem = item; handleClickFilterItem(); props.onClickFilterItem()"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </template>