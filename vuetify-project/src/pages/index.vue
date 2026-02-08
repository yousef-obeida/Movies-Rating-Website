<template>
  <v-img
    class="fill-height"
    cover
    height="100vh"
    src="../../public/HomeWallpaper.jpg"
  >
    <div class="d-flex flex-column justify-center align-center h-100 w-100 bg-black-overlay">
      <v-container class="text-center">
        <h2 class="text-h2 font-weight-bold text-white mb-6">Welcome To Movies Rating Website</h2>
        <p class="text-h5 text-grey-lighten-1 mb-10 mx-auto" style="max-width: 800px;">
          Discover and share your favorite movies with our vibrant community. Explore reviews, ratings, and recommendations to find your next cinematic adventure
        </p>

        <v-btn
          class="mb-10 px-8 font-weight-bold"
          color="white"
          rounded="pill"
          size="large"
          to="/register"
          variant="outlined"
        >
          Login as an admin
        </v-btn>

        <v-row class="mt-10">
          <v-col
            v-for="stat in stats"
            :key="stat.name"
            class="mx-auto mb-6"
            cols="10"
            lg="2"
            sm="5"
          >
            <div class="text-subtitle-1 text-grey-lighten-3 mb-1">{{ stat.name }}</div>
            <div class="text-h3 font-weight-bold text-white">{{ stat.value }}</div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-img>
</template>

<script setup>
  const stats = [
    { name: 'Movies', value: '300+' },
    { name: 'TV shows', value: '200+' },
    { name: 'Ratings', value: 'Unlimited' },
  ]
</script>

<style scoped>
.bg-black-overlay {
  background: rgba(0, 0, 0, 0.4);
}
</style>
