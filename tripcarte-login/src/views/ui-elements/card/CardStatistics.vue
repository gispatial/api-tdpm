<!-- =========================================================================================
    File Name: CardStatistics.vue
    Description: Statistics Card
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
      Developers: TripcarteDev
    API Pricing URL: https://partners.tripcarte.asia/api-pricing-table/
========================================================================================== -->


<template>
    <div>

        <!-- ROW 3 -->
        <div class="vx-row">
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
            <vs-button icon-pack="feather" icon="icon-chevrons-right" icon-after class="shadow-md w-full lg:mt-0 mt-4" href="/apps/todo/all">View Details</vs-button>
                <statistics-card-line
                  class="mb-base"
                  v-if="subscribersGained.analyticsData"
                  icon="UsersIcon"
                  :statistic="subscribersGained.analyticsData.subscribers | k_formatter"
                  statisticTitle="Total Reviews Collected"
                  :chartData="subscribersGained.series"
                  type='area' />
            </div>

            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
            <vs-button icon-pack="feather" icon="icon-chevrons-right" icon-after class="shadow-md w-full lg:mt-0 mt-4" href="/ui-elements/ag-grid-table">View Details</vs-button>
                <statistics-card-line
                  class="mb-base"
                  v-if="revenueGenerated.analyticsData"
                  icon="DollarSignIcon"
                  :statistic="revenueGenerated.analyticsData.revenue | k_formatter"
                  statisticTitle="Total Redemption This Week"
                  :chartData="revenueGenerated.series"
                  color='success'
                  type='area' />
            </div>

            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                <statistics-card-line
                  class="mb-base"
                  v-if="quarterlySales.analyticsData"
                  icon="ShoppingCartIcon"
                  :statistic="quarterlySales.analyticsData.sales"
                  statisticTitle="Total Redemption This Year"
                  :chartData="quarterlySales.series"
                  color='danger'
                  type='area' />
            </div>
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                <statistics-card-line
                  class="mb-base"
                  v-if="ordersRecevied.analyticsData"
                  icon="ShoppingBagIcon"
                  :statistic="ordersRecevied.analyticsData.orders | k_formatter"
                  statisticTitle="Total Pending Payout"
                  :chartData="ordersRecevied.series"
                  color='warning'
                  type='area' />
            </div>
        </div>

    </div>
</template>

<script>
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'

export default{
    components: {
        StatisticsCardLine
    },
    data() {
        return {
            // Area charts
            subscribersGained: {},
            revenueGenerated: {},
            quarterlySales: {},
            ordersRecevied: {},

            // Line Charts
            siteTraffic: {},
            activeUsers: {},
            newsletter: {},
        }
    },
    created() {
      // Subscribers gained
      this.$http.get("/api/card/card-statistics/subscribers")
        .then((response) => { this.subscribersGained = response.data })
        .catch((error) => { console.log(error) })

      // Revenue Generated
      this.$http.get("/api/card/card-statistics/revenue")
        .then((response) => { this.revenueGenerated = response.data })
        .catch((error) => { console.log(error) })

      // Sales
      this.$http.get("/api/card/card-statistics/sales")
        .then((response) => { this.quarterlySales = response.data })
        .catch((error) => { console.log(error) })

      // Orders
      this.$http.get("/api/card/card-statistics/orders")
        .then((response) => { this.ordersRecevied = response.data })
        .catch((error) => { console.log(error) })

      // Site Traffic gained
      this.$http.get("/api/card/card-statistics/site-traffic")
        .then((response) => { this.siteTraffic = response.data })
        .catch((error) => { console.log(error) })

      // Active Users
      this.$http.get("/api/card/card-statistics/active-users")
        .then((response) => { this.activeUsers = response.data })
        .catch((error) => { console.log(error) })

      // Site Traffic gained
      this.$http.get("/api/card/card-statistics/newsletter")
        .then((response) => { this.newsletter = response.data })
        .catch((error) => { console.log(error) })
    }
}
</script>
