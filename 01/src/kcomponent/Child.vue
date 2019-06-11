<template>
    <div>
      <h2>Child</h2>
      <div>
        <GrandChild />
      </div>
    </div>
</template>

<script>
import GrandChild from './GrandChild' 
export default {
  components:{GrandChild}
}
</script>

<style>

</style>
