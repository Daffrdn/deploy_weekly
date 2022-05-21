<template>
  <v-row justify="center" align="center">
    <v-card>
        <v-img
                class="white--text align-end"
                height="400px"
                :src="weekly2.icon"
                gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
                    <div class="fill-height bottom-gradient"></div>
                <v-card-title>
                    <h2>{{ weekly2.id }}. {{ weekly2.title }}</h2>
                </v-card-title>
                </v-img>
    <div class="d-flex justify-content-between">
        <v-card-title>
        <v-list-item-avatar color="grey darken-3">
            <v-img
                class="elevation-6"
                alt=""
            ></v-img>
            </v-list-item-avatar>
        <v-list-item-content>
            <v-list-item-title class="white--text" > Author: Daffa Erdian Fahrezy </v-list-item-title>
            </v-list-item-content>
        </v-card-title>
        <v-spacer> </v-spacer>
        </div>
        <v-card-text class="text-h5 font-weight white--text">
        {{ weekly2.deskription }}
        </v-card-text>
        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="White" to="/"  >
              Kembali 
          </v-btn>
        </v-card-actions>
    </v-card>
</v-row>
</template>

<script>
export default {
  name: 'InspirePage',
  computed: {
    weekly2(){
      return this.$store.state.weekly2;
    }
  },
}
</script>
