<script setup lang="ts">
import type { Good } from '@/types';
import { useGoodsStore } from '../stores/goodsStore'
import { ref } from 'vue'

type PropsType = {
    good: Good
}

const goodsStore = useGoodsStore()


const { good } = defineProps<PropsType>();

const isLiked = ref(good.isLiked)



const handleLikeClick = () => {
    isLiked.value = !isLiked.value
    goodsStore.updateLikedGood(good, isLiked.value)
}

</script>

<template>
    <div class="product__item">
        <div class="product-description">
            <img src="../images/product.png" alt="">
            <div class="product-description__text">
                <p class="tag">{{ good.offerType }}</p>
                <p class="title">{{ good.title }}</p>
                <p class="location">{{ good.location }}</p>
                <div class="seller">
                    <span>Продавец</span>
                    <span>{{ good.seller }}</span>
                </div>
                <div class="product-type">
                    <p>Вид товара</p>
                    <p>{{ good.goodType }}</p>
                </div>
                <p class="description">{{ good.description }}</p>


            </div>

        </div>
        <div class="product-info">
            <p class="price">{{ `${good.overallSum} ${good.currency}` }}</p>
            <div class="quantity">
                <span>Количество</span>
                <span>{{ `${good.quantity} шт` }}</span>
            </div>
            <div class="product-price">
                <span>Стоимость за штуку</span>
                <span>{{ `${good.cost} ${good.currency}` }}</span>
            </div>
            <div class="product-btns">
                <button :class="{ 'add-btn': true, 'green-btn': good.status === 'Оплатить' }" @click="goodsStore.updateGoodStatus(good)">{{ good.status }}</button>
                <button :class="{ 'like-btn': true, 'active': isLiked }" @click="handleLikeClick"></button>
            </div>

        </div>

    </div>
</template>