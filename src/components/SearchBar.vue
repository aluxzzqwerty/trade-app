<script setup lang="ts">
import { useGoodsStore } from '@/stores/goodsStore';
import { ref } from 'vue';


const goodsStore = useGoodsStore()

const searchTerm = ref('');

const handleSearch = (event: Event) => {
  event.preventDefault();
  goodsStore.changeSearchTermForGood(searchTerm.value)
};

</script>
<template>
  <div class="search">
    <form class="search__content-form" @submit="handleSearch">
      <input class="search__content-input" type="text" placeholder="Поиск..." v-model="searchTerm" />
      <button class="search__content-btn" type="submit">
        
      </button>
    </form>
  </div>
</template>