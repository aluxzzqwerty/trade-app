import { defineStore } from "pinia";
import { collection, onSnapshot, deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from '../js/firebase'
import type { Good } from '@/types'
import { useGoodsStore } from "./goodsStore";

type StateShape = {
    dealGoods: Good[],
    filteredDealGoods: Good[]
}

const dealsCollectionRef = collection(db, "deals")

export const useDealsGoodsStore = defineStore('DealsGoodsStore', {
    state: (): StateShape => ({
        dealGoods: [],
        filteredDealGoods: []
    }),
    getters: {
        getDealsGoods: (state) => {
            if (useGoodsStore().activeGoodOfferType === 'Все типы') {
                return state.dealGoods
            }
            return state.filteredDealGoods
        },
        searchGoodsByTerm: () => (activeGoodsList: Good[]) => {
            return activeGoodsList.filter(good => {
                return good.title.toLowerCase().includes(useGoodsStore().searchTermForGood.toLowerCase())
            })
        },
    },
    actions: {
        fetchGoods() {
            onSnapshot(dealsCollectionRef, (querySnapshot) => {
                let goods: any = []
                querySnapshot.forEach((doc) => {
                    goods.push(doc.data());
                })
                this.dealGoods = goods
            })
        },
        async addGoodToDeals(good: Good) {
            const newGoodRef = doc(dealsCollectionRef);
            await setDoc(newGoodRef, {
                dealId: newGoodRef.id,
                id: good.id,
                title: good.title,
                description: good.description,
                location: good.location,
                goodType: good.goodType,
                seller: good.seller,
                offerType: good.offerType,
                cost: good.cost,
                currency: good.currency,
                isLiked: good.isLiked,
                status: 'Оплатить',
                quantity: good.quantity,
                overallSum: good.overallSum,
            });
            
        },
        async removeGoodFromFavourites(id: string) {
            await deleteDoc(doc(dealsCollectionRef, id));
        },
        filterGoods() {
            const goodsStore = useGoodsStore()
            if (goodsStore.activeGoodOfferType === 'Все типы') {
                this.filteredDealGoods = []
                return;
            }
            this.filteredDealGoods = this.dealGoods.filter((good) => {
                return good.offerType === goodsStore.activeGoodOfferType
            })
        }
    }
})
