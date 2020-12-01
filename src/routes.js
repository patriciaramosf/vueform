import FirstStep from './components/firstStep.vue'
import SecondStep from './components/secondStep.vue'
import ThirdStep from './components/thirdStep.vue'
import FourthStep from './components/fourthStep.vue'
const routes = [
  { path: '/1', name:'firstStep', component: FirstStep },
  { path: '/2', name:'secondStep', component: SecondStep },
  { path: '/3', name:'thirdStep', component: ThirdStep },
  { path: '/4', name:'fourthStep', component: FourthStep },
]
export default routes;