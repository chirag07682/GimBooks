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
          <v-btn flat>Sort & Filter</v-btn>
          <v-btn
            style="background-color: rgba(0, 0, 0, 0.87)"
            class="white--text"
            >Create Purchase Invoice</v-btn
          >
        </v-card-title>
        <v-data-table
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
        { text: 'Purchase' },
        { text: 'Purchase Date' },
        { text: 'Purchase Type' },
        { text: 'Seller Name' },
        { text: 'Amount' },
        { text: 'Action' },
      ],
      desserts: [],
      page: 1,
    }
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
