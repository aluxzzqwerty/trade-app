import type { Good, OfferType } from '@/types'
import { defineStore } from 'pinia'
import 'firebase/firestore';
import { collection, onSnapshot, updateDoc, doc, writeBatch, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase/firestore'
import { useDealsGoodsStore } from './dealsStore';


type StateShape = {
    list: Good[]
    filteredList: Good[]
    searchTermForGood: string
    activeGoodOfferType: string
}


export const useGoodsStore = defineStore("goodsStore", {
    state: (): StateShape => ({
        list: [],
        filteredList: [],
        searchTermForGood: localStorage.getItem('searchTermForGood') || '',
        activeGoodOfferType: localStorage.getItem('activeGoodOfferType') || ''
    }),
    getters: {
        getGoods(): Good[] {
            if (this.activeGoodOfferType === 'Все типы') {
                return this.list
            }
            return this.filteredList
        },
        getLikedGoods(): Good[] {
            return this.getGoods.filter(good => {
                return good.isLiked === true
            })
        },
        searchGoodsByTerm: (state) => (activeGoodsList: Good[]) => {
            return activeGoodsList.filter(good => {
                return good.title.toLowerCase().includes(state.searchTermForGood.toLowerCase())
            })
        },
    },
    actions: {
        fetchGoods() {
            onSnapshot(collection(db, "goods"), (querySnapshot) => {
                let goods: any = []
                querySnapshot.forEach((doc) => {
                    goods.push(doc.data());
                })
                this.list = goods
                this.filterGoods()
            })
        },
        changeOfferType(offerType: OfferType) {
            this.activeGoodOfferType = offerType
            localStorage.setItem('activeGoodOfferType', offerType)
        },
        filterGoods() {
            if (this.activeGoodOfferType === 'Все типы') {
                this.filteredList = []
                return;
            }
            this.filteredList = this.list.filter((good) => {
                return good.offerType === this.activeGoodOfferType
            })
        },
        changeSearchTermForGood(term: string) {
            this.searchTermForGood = term
            localStorage.setItem('searchTermForGood', term)
        },
        async updateGoodStatus(good: Good) {
            try {
                const dealsGoodsStore = useDealsGoodsStore()
                if (good.status === 'Добавить в сделки') {
                    dealsGoodsStore.addGoodToDeals(good)
                } else if (good.status === 'Оплатить') {
                    if (good.dealId) {
                        await updateDoc(doc(db, "deals", good.dealId), {
                            status: 'Оплачено'
                        });
                    }
                }
            } catch (error) {
                console.error(error)
            }
        },
        async updateLikedGood(good: Good, isLiked: boolean) {
            try {
                await updateDoc(doc(db, "goods", good.id), {
                    isLiked: isLiked
                });
                const dealsRef = query(collection(db, 'deals'), where('id', '==', good.id));
                const querySnapshot = await getDocs(dealsRef);

                const batch = writeBatch(db);
                querySnapshot.forEach((doc) => {
                    batch.update(doc.ref, { isLiked });
                });
                await batch.commit();
            } catch (error) {
                console.error(error)
            }
        }
    }
})