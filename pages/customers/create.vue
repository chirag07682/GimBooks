<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4">
        <v-subheader>Customer Name</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field label="Customer Name"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>Mobile No.</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field label="Mobile No."></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>VAT Registration No.</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field label="VAT Registration No."></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>Address</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field label="Address"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>City</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field label="City"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>Action</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field label="Action"></v-text-field>
      </v-col>
    </v-row>
    <v-row class="justify-center"
      ><v-btn class="mr-4" @click="submit"> submit </v-btn>
      <v-btn :to="{ name: 'customers' }">Cancel</v-btn>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      InvoiceNumber: '',
      CustomerName: '',
      InvoiceDate: '',
      Amount: '',
      Action: '',
    }
  },
}
</script>

<style scoped>
.v-subheader {
  color: black;
  font-size: 20px;
}
</style>
