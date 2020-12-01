<template>
  <div>
		<label for="hobby">Hobbies</label>
		<input type="text" name="hobby" v-model="hobby">

    <label for="job">Current Job</label>
		<input type="text" name="job" v-model="job">
	</div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
export default {
  name: 'ThirdStep',
  props: {
  },
  data(){
      return{

      }
  },
  methods:{
  },
  computed: {
    ...mapFields([
      'hobby',
      'job',
    ]),
  },
    watch:{
    hobby: function(){
      console.log(this.$store.state.hobby)
    }
  },
}
</script>