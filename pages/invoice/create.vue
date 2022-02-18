<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4">
        <v-subheader>Invoice Number</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field label="Invoice Number"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>Invoice Date</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field label="Invoice Date"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>Invoice Type</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field label="Invoice Type"></v-text-field>
      </v-col>
    </v-row>

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
        <v-subheader>Amount</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field label="Amount"></v-text-field>
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
      <v-btn
        :to="{ name: 'invoice' }"
        @click="
          {
            {
              postSomething()
            }
          }
        "
        >Cancel</v-btn
      >
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      InvoiceNumber: '',
      InvoiceDate: '',
      InvoiceType: '',
      CustomerName: '',
      Amount: '',
      Action: '',
    }
  },
  methods: {
    postSomething() {
      const data = {
        InvoiceNumber: '',
        InvoiceDate: '',
        InvoiceType: '',
        CustomerName: '',
        Amount: '',
        Action: '',
      }

      this.$axios.post('/my-api/', data, {
        headers: {
          'Content-Type': 'application/json',
          'access-token': 'myTokenXYZ123',
        },
      })
    },
  },
}
</script>

<style scoped>
.v-subheader {
  color: black;
  font-size: 20px;
}
</style>
