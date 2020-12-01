<template>
    <div>
		<label for="birthDate">Birthdate</label>
		<input type="text" name="birthDate" v-model="birthDate">

    <label for="country">Country</label>
		<input type="text" name="country" v-model="country">
	</div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
export default {
  name: 'SecondStep',
  props: {
  },
  computed: {
    ...mapFields([
      'birthDate',
      'country',
    ]),
  },
  watch:{
    country: function(){
      console.log(this.$store.state.country)
    }
  },
}
</script>