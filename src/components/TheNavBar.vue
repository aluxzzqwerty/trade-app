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

<style>
.header-menu {
  display: flex;
  justify-content: end;
}

.header-menu__list {
  width: 270px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}

.header-menu__item {
  padding: 28px 20px 8px 20px;
  margin-top: 20px;
  cursor: pointer;
}

.header-menu__item:last-child {
  padding-right: px;
}

.header-menu__item.favorite {
  position: relative;
}

.header-menu__item.favorite::before {
  content: "";
  position: absolute;
  background-repeat: no-repeat;
  width: 16px;
  height: 14px;
  top: 9px;
  left: 40px;
  background-image: url("../images/favorites.svg");
}

.header-menu__item.stock {
  position: relative;
}

.header-menu__item.stock::before {
  content: "";
  position: absolute;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  top: 7px;
  left: 25px;
  background-image: url("../images/stock.svg");
}

.header-menu__item.deals {
  position: relative;
}

.header-menu__item.deals::before {
  content: "";
  position: absolute;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  top: 7px;
  left: 27px;
  background-image: url("../images/bag.svg");
}

li:has(> .header-menu__link--active) {
  background-color: #f4f5f9;
  border-radius: 10px;
}

header {
  margin-bottom: 80px;
}
</style>
