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

<style scoped>
.product__item {
  border: 1px solid #e0e3ee;
  border-radius: 10px;
}

.product-description {
  display: flex;
  justify-content: start;
  width: 820px;
  padding: 15px;
}

.product-description img {
  width: 250px;
  height: 250px;
  border-radius: 8px;
}

.product-description__text {
  padding: 0 15px;
}

.product-description__text p,
.product-description__text div {
  margin-bottom: 15px;
}

.product__item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.product-info {
  width: 250px;
  padding: 15px;
  border-left: 1px solid #e0e3ee;
  border-radius: 10px;
}

.tag {
  color: #969dc3;
}

.title {
  font-weight: bold;
  font-size: 15px;
}

.location {
  color: #616ca5;
  background-color: #f4f5f9;
  padding: 5px 8px 5px 27px;
  width: 200px;
  border-radius: 3px;
  position: relative;
}

.location::before {
  content: "";
  position: absolute;
  background-repeat: no-repeat;
  width: 15px;
  height: 15px;
  top: 6px;
  left: 5px;
  background-image: url("../images/geo_15.svg");
}

.seller span:nth-child(1) {
  color: #969dc3;
}

.seller span:nth-child(2) {
  color: #2d3b87;
  font-weight: bold;
  margin-left: 5px;
}

.product-type {
  background-color: #f4f5f9;
  padding: 8px;
  width: 110px;
  border-radius: 8px;
}

.product-type p {
  margin-bottom: 5px;
}

.product-type p:nth-child(1) {
  color: #969dc3;
}

.product-type p:nth-child(2) {
  color: #616ca5;
}

.price {
  font-weight: bold;
  font-size: 18px;
  color: #2d3b87;
}

.product-info {
  position: relative;
}

.product-info p,
.product-info div {
  margin-bottom: 15px;
}

.quantity,
.product-price {
  display: flex;
  justify-content: space-between;
}

.quantity span:nth-child(1),
.product-price span:nth-child(1) {
  color: #969dc3;
}

.product-btns {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
}

.add-btn {
  font-size: 14px;
  line-height: 15px;
  background: #f4f5f9;
  width: 170px;
  border-radius: 6px;
  padding: 13px 13px;
  border: none;
  bottom: 0;
  color: #2d3b87;
  font-weight: bold;
  cursor: pointer;
}

.like-btn {
  cursor: pointer;

  background: #f4f5f9;
  width: 40px;
  background-image: url("../images/favourite_20.png");
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 6px;
  padding: 13px 13px;
  border: none;
  bottom: 0;
  margin-left: 10px;
}

.like-btn.active{
  background: #2D3B87;
  width: 40px;
  background-image: url("../images/liked.png");
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 6px;
  padding: 13px 13px;
  border: none;
  bottom: 0;
  margin-left: 10px;
}

.add-btn.green-btn {
  background: #69c57f;
  color: #fff;
}
</style>