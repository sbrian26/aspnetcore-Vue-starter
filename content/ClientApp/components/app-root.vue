<template>
  <div>
     <!--class="container-fluid"-->
    <nav-layout params="route: route"></nav-layout>

    <!--<div class="row">
      <div class="col-md-3">
          <nav-menu params="route: route"></nav-menu>
      </div>
      <div class="col-sm-9">
          <router-view></router-view>
      </div>
  </div>-->
  </div>
</template>

<script>
  import DashboardLayout from '@/layout/dashboard/DashboardLayout.vue'
  export default {
    components: {
      'nav-layout': DashboardLayout
    },
    data () {
       return {}
    }
  }


   //import NavMenu from './nav-menu'

   // export default {
   //   components: {
   //    'nav-menu': NavMenu
   //   },

    //  data () {
    //    return {}
    //  }
    //}
</script>

<style>
</style>
