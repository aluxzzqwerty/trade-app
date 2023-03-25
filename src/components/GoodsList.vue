<script setup lang="ts">
import type { Good } from '@/types';
import GoodItem from './GoodItem.vue';


type PropsType = {
    list: Good[]
}
const props = defineProps<PropsType>()

</script>

<template>
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