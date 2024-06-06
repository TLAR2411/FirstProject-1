import {defineStore} from "pinia"
export const StoreList = defineStore('storelist',{
    state:()=>({
        store:[]
    })
})