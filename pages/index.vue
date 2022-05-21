<template>
<div>
  <h1 align="center">Materi Vue</h1>
    <v-text-field
    v-model="search"
    label="Search Materi.."
    solo
    primary
    class="mt-5">
    </v-text-field>
    <br/>
  <v-row justify="center" align="center">
    <v-col v-for="articles in filteredList" :key="articles.id" cols="12" sm="8" md="6" >
      <v-card class="mx-auto" max-width="1200">
          <v-img class="white--text align-end" width="800px" height="400px" :src="articles.icon">
          </v-img>
          <v-card-title class="headlines text--light">{{ articles.id }}. {{ articles.title }}</v-card-title>
          <v-card-text>
            {{ articles.content }}
        </v-card-text>  
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="clickDetail(articles)"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</div>  
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return {
      search: "",
    }
  },
  computed: {
    listWeekly2(){
      return this.$store.state.weekly2;
  },
  filteredList(){
          return this.listWeekly2.filter(articles => {
            return articles.title.toLowerCase().includes(this.search.toLowerCase(
            ))
          })
        }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.$store.dispatch("callApollo");
    },
    clickDetail(param) {
      this.$store.commit('updateWeekly2', param)
      this.$router.replace({'path': '/'+param.title})
    },
  }
}
</script>

