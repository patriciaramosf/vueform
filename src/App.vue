<template>
  <div id="app" class="bg-purple-100 grid-cols-3 p-20">
    <FirstStep/>
    <SecondStep/>
    <ThirdStep/>
    <FourthStep/>
  </div>
</template>

<script>
import { store } from './store/store'
import FirstStep from './components/firstStep.vue'
import SecondStep from './components/secondStep.vue'
import ThirdStep from './components/thirdStep.vue'
import FourthStep from './components/fourthStep.vue'
export default {
  name: 'App',
  store,
  components: {
    FirstStep,
    SecondStep,
    ThirdStep,
    FourthStep,
  },
  data(){
    return{
    }
  },
  methods:{
  },
}
</script>

<style>
#app{
  height:100vh;
}
</style>
