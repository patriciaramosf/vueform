<template>
    <div>
		<label for="first-name">First Name</label>
		<input type="text" name="firstName" v-model="firstName">

    <label for="surname">Surname</label>
		<input type="text" name="surName" v-model="surName">
	</div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
export default {
  name: 'FirstStep',
  props: {
  },
  data(){
      return{

      }
  },
  methods:{
  },
  update(){
  },
  computed: {
    ...mapFields([
      'firstName',
      'surName',
    ]),
  },
  watch:{
    firstName: function(){
      console.log(this.$store.state.firstName)
    }
  },
}
</script>