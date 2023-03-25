<script setup lang="ts">
import { ref } from 'vue';

const navList = ref([
    {
        id: 'Избранное',
        name: 'favorite',
        path: '/favourites',
    },
    {
        id: 'Склад',
        name: 'stock',
        path: '/',
    },
    {
        id: 'Сделки',
        name: 'deals',
        path: '/deals',
    },
])

</script>

<template>
    <!-- <header class="header">
        <div class="container">
          <div class="header-menu">
            <ul class="header-menu__list">
              <li class="header-menu__item favorite">
                <a class="header-menu__link" href="#">Избранное</a>
              </li>
              <li class="header-menu__item stock header-menu__item--active">
                <a class="header-menu__link" href="#">Склад</a>
              </li>
              <li class="header-menu__item deals">
                <a class="header-menu__link" href="#">Сделки</a>
              </li>
            </ul>
          </div>
        </div>
      </header> -->
    <header class="header">
        <div class="container">
            <div class="header-menu">
                <ul class="header-menu__list">
                    <li v-for="item in navList" class="header-menu__item" :class="item.name">
                        <RouterLink :to="item.path">{{ item.id }}</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style scoped>

</style>
