<script setup lang="ts">
import { useGoodsStore } from '@/stores/goodsStore';
import { ref } from 'vue';


const goodsStore = useGoodsStore()

const searchTerm = ref(localStorage.getItem('searchTermForGood') || '');

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

<style>
.search__content-input {
  border-radius: 8px;
  width: 275px;
  padding: 5px 20px;
  border: none;
  line-height: 19px;
  border: 1px solid #e0e3ee;
}

.search__content-input:focus {
  outline: none;
}

.search__content-form {
  position: relative;
}

.search__content-btn {
  font-size: 14px;
  line-height: 17px;
  background: #2d3b87;
  background-image: url("../images/search_20.png");
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 6px;
  padding: 13px 13px;
  border: none;
  position: absolute;
  top: 2px;
  right: 4px;
}

</style>