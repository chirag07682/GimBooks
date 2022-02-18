<template>
  <div class="Table">
    <v-banner elevation="1" outlined rounded sticky>
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            prepend-inner-icon="mdi-magnify"
            label="Search"
            hide-details
            solo
            class="searchBar"
          ></v-text-field>

          <v-spacer></v-spacer>
          <v-col cols="10">
            <v-btn flat>Sort & Filter</v-btn>
            <v-btn
              style="background-color: rgba(0, 0, 0, 0.87)"
              class="white--text"
              :to="{ name: 'invoice-create' }"
              >Create Invoice</v-btn
            >
          </v-col>
        </v-card-title>

        <v-data-table
          :items="desserts"
          item-key="name"
          class="elevation-1"
          :headers="headers"
          :hide-default-footer="true"
        ></v-data-table>
        <div class="d-flex justify-end">
          <v-pagination v-model="page" :length="1"></v-pagination>
        </div>
      </v-card>
    </v-banner>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: '',
      headers: [
        { text: 'Invoice', value: 'invoice' },
        { text: 'Invoice Date', value: 'invoiceData' },
        { text: 'Invoice Type', value: 'invoiceType' },
        { text: 'Customer Name', value: 'customerName' },
        { text: 'Amount', value: 'amount' },
        { text: 'Action', value: 'action' },
      ],
      desserts: [
        {
          invoice: 'Frozen Yogurt',
          invoiceData: 159,
          invoiceType: 6.0,
          customerName: 24,
          amount: 4.0,
          action: '1%',
        },
      ],
      page: 10,
    }
  },
  methods: {
    async getSomething() {
      let requested = await this.$axios.get('/my-api/', {
        headers: this.headers,
      })
      return requested.data
    },
  },
}
</script>

<style scoped>
.Table {
  margin-top: 3%;
}
.searchBar {
  color: rgb(102, 102, 102);
  border-radius: 20px;
  max-width: 250px;
  border-block: 2px bold;
}
.v-data-table::v-deep th {
  font-size: 18px !important;
}
</style>
