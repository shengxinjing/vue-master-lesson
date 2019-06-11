<template>
  <div id="app">


    <Cart></Cart>  
    <hr>
    <ElementForm />
  </div>
</template>

<script>
import Cart from './components/Cart'
import ElementForm from './components/ElementForm'
export default {
  name: 'app',
  components:{
    Cart,
    ElementForm
  },
  data () {
    return {

    }
  }
}
</script>


