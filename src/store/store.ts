
import { ref,type Ref, computed } from 'vue'
import { createGlobalState } from '@vueuse/core'

interface Iuser{
    email:string
    password:string
    id?:string
    token?:string
}

export const useGlobalState = createGlobalState(
  () => {
    //state
    const User:Iuser = {
        email:'',
        password:''
    }
    return { User }

    // getters
    const getUsers = computed(() => { User }) 

    let Users= ref([])
    // actions
     function addUsers() {Users.value.push()} 

     return { User, getUsers, addUsers }
  }
)
