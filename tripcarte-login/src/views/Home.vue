<template>
  <div id="dashboard-analytics">
    <div class="vx-row">
    <!-- CARD 9: DISPATCHED ORDERS -->
<div>
</div>
      <!-- CARD 1: CONGRATS -->


      <!-- CARD 2: SUBSCRIBERS GAINED -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
			<img src="@/assets/images/pages/gap.png" alt="ui-div" class="mx-auto" width="30%">
      <vs-button icon-pack="feather" icon="icon-chevrons-right" icon-after class="shadow-md w-full lg:mt-0 mt-4" href="https://tripcarte-asia.gispatial.vercel.app/pages/login">Login To View</vs-button>
        <statistics-card-line icon="UsersIcon" statisticTitle="Total Reviews Collected - not logged-in" type='area'></statistics-card-line>
      </div>

      <!-- CARD 3: ORDER RECIEVED -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
			<img src="@/assets/images/pages/gap.png" alt="ui-div" class="mx-auto" width="30%">
      <vs-button icon-pack="feather" icon="icon-chevrons-right" icon-after class="shadow-md w-full lg:mt-0 mt-4" href="https://tripcarte.asia/registration/" target="_blank">Register?</vs-button>
        <statistics-card-line icon="ShoppingBagIcon" statisticTitle="Total Redemption this Week - not logged-in" color='warning' type='area'></statistics-card-line>
      </div>

      <!-- CARD 2: SUBSCRIBERS GAINED -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
			<img src="@/assets/images/pages/gap.png" alt="ui-div" class="mx-auto" width="30%">
      <div>
      <vx-card>
      <statistics-card-line icon="UsersIcon" statisticTitle="Total Redemption this Year - not logged-in" type='area'></statistics-card-line>
      </vx-card>
      </div>
      </div>

      <!-- CARD 3: ORDER RECIEVED -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
			<img src="@/assets/images/pages/gap.png" alt="ui-div" class="mx-auto" width="30%">
      <div>
      <vx-card>
      <statistics-card-line icon="UsersIcon" statisticTitle="Total Pending Payout - not logged-in" type='area'></statistics-card-line>
      </vx-card>
      </div>
      </div>
    </div>

    <div class="vx-row">

    </div>
    <div>
    <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/1 xl:w-1/1 mb-base">
      <vx-card title="LOGIN / REGISTER TO TRIPCARTE ASIA">
			<img src="@/assets/images/pages/notices.png" alt="terms" class="mx-auto" width="50%">
        <div slot="no-body" class="mt-4">
        </div>

      </vx-card>
    </div></div>

  </div>

</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import analyticsData from './ui-elements/card/analyticsData.js'
import ChangeTimeDurationDropdown from '@/components/ChangeTimeDurationDropdown.vue'
import VxTimeline from "@/components/timeline/VxTimeline"

export default {
    data() {
        return {
            checkpointReward: {},
            subscribersGained: {},
            ordersRecevied: {},
            salesBarSession: {},
            supportTracker: {},
            productsOrder: {},
            salesRadar: {},

            timelineData: [
              {
                color: "primary",
                icon: "PlusIcon",
                title: "Client Meeting",
                desc: "Bonbon macaroon jelly beans gummi bears jelly lollipop apple",
                time: "25 mins Ago"
              },
              {
                color: "warning",
                icon: "MailIcon",
                title: "Email Newsletter",
                desc: "Cupcake gummi bears soufflé caramels candy",
                time: "15 Days Ago"
              },
              {
                color: "danger",
                icon: "UsersIcon",
                title: "Plan Webinar",
                desc: "Candy ice cream cake. Halvah gummi bears",
                time: "20 days ago"
              },
              {
                color: "success",
                icon: "LayoutIcon",
                title: "Launch Website",
                desc: "Candy ice cream cake. Halvah gummi bears Cupcake gummi bears soufflé caramels candy.",
                time: "25 days ago"
              },
              {
                color: "primary",
                icon: "TvIcon",
                title: "Marketing",
                desc: "Candy ice cream cake. Halvah gummi bears Cupcake gummi bears.",
                time: "28 days ago"
              }
            ],


            analyticsData: analyticsData,
            dispatchedOrders: [],
        }
    },
    components: {
        VueApexCharts,
        StatisticsCardLine,
        ChangeTimeDurationDropdown,
        VxTimeline
    },
    created() {
      //  User Reward Card
      this.$http.get("/api/user/checkpoint-reward")
        .then((response) => { this.checkpointReward = response.data })
        .catch((error)   => { console.log(error) })

      // Subscribers gained - Statistics
      this.$http.get("/api/card/card-statistics/subscribers")
        .then((response) => { this.subscribersGained = response.data })
        .catch((error)   => { console.log(error) })

      // Orders - Statistics
      this.$http.get("/api/card/card-statistics/orders")
        .then((response) => { this.ordersRecevied = response.data })
        .catch((error)   => { console.log(error) })

      // Sales bar - Analytics
      this.$http.get("/api/card/card-analytics/sales/bar")
        .then((response) => { this.salesBarSession = response.data })
        .catch((error)   => { console.log(error) })

      // Support Tracker
      this.$http.get("/api/card/card-analytics/support-tracker")
        .then((response) => { this.supportTracker = response.data })
        .catch((error)   => { console.log(error) })

      // Products Order
      this.$http.get("/api/card/card-analytics/products-orders")
        .then((response) => { this.productsOrder = response.data })
        .catch((error)   => { console.log(error) })

      // Sales Radar
      this.$http.get("/api/card/card-analytics/sales/radar")
        .then((response) => { this.salesRadar = response.data })
        .catch((error)   => { console.log(error) })

      // Dispatched Orders
      this.$http.get("/api/table/dispatched-orders")
        .then((response) => { this.dispatchedOrders = response.data })
        .catch((error)   => { console.log(error) })
    }
}
</script>

<style lang="scss">
/*! rtl:begin:ignore */
#dashboard-analytics {
  .greet-user{
    position: relative;

    .decore-left{
      position: absolute;
      left:0;
      top: 0;
    }
    .decore-right{
      position: absolute;
      right:0;
      top: 0;
    }
  }

}
/*! rtl:end:ignore */
</style>
