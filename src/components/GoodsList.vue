<script setup lang="ts">
import type { Good } from '@/types';
import GoodItem from './GoodItem.vue';


type PropsType = {
    list: Good[]
}
const props = defineProps<PropsType>()

</script>

<template>
    <div class="text-message" v-if="!list.length">У вас пока нет избранных</div>
    <section class="products">
        <div class="container">
            <div class="product_list">
                <GoodItem
                    v-for="goodItem in props.list"
                    :good="goodItem" :key="goodItem.id" />
            </div>
        </div>
    </section>
</template>

<style>
.text-message {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    align-items: center;
    font-size: 200%;
    color: #2d3b87;
    padding: 80px 20px;
}
</style>