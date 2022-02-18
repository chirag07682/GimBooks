<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" dark fixed app class="grey darken-4">
      <div class="navhead my-6">
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="120"
          max-width="220"
          src="https://web.gimbooks.com/_nuxt/img/logo.3b66b90.svg"
        ></v-img>
      </div>
      <v-divider light></v-divider>
      <v-list>
        <v-list-item
          class="my-3"
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-divider dark></v-divider>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer> </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-file',
          title: 'Invoice',
          to: '/invoice/',
        },
        {
          icon: 'mdi-note-plus',
          title: 'Credit Note',
          to: '/creditNote/',
        },
        {
          icon: 'mdi-note-minus',
          title: 'Debit Note',
          to: '/debitNote/',
        },
        {
          icon: 'mdi-clipboard-account',
          title: 'Customers',
          to: '/customers/',
        },
        {
          icon: 'mdi-calendar-text',
          title: 'Products',
          to: '/products/',
        },
        {
          icon: 'mdi-cash-multiple',
          title: 'Purchase',
          to: '/purchase/',
        },
        {
          icon: 'mdi-receipt',
          title: 'Quotations',
          to: '/quotations/',
        },
        {
          icon: 'mdi-logout',
          title: 'LogOut',
          to: '/logout',
        },
      ],
    }
  },
}
</script>
<style scoped></style>
