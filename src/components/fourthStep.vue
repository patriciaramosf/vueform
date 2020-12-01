<template>
  <div>
		<label for="mood">Current mood</label>
		<input type="text" name="mood" v-model="mood">

    <label for="wishes">Wishes for this new year</label>
		<input type="text" name="wishes" v-model="wishes">
	</div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
export default {
  name: 'FourthStep',
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
      'mood',
      'wishes',
    ]),
  },
  watch:{
    mood: function(){
      console.log(this.$store.state.mood)
    }
  },
}
</script>