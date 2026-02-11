<template>
  <Header></Header>
  <v-container
    class="bg-blue-grey-darken-4 fill-height py-16"
    fluid
  >
    <v-responsive
      class="mx-auto"
      max-width="1200"
    >

      <!-- Filter Bar -->
      <div class="d-flex justify-space-between align-center mb-6 pt-4 pb-4 border-b border-grey-darken-3">
        <!-- Sort (Left) -->
        <v-menu>
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              class="text-none font-weight-regular px-2"
              color="grey-lighten-1"
              variant="text"
            >
              Sort
              <v-icon end size="small">mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="item in sortOptions" :key="item" link :value="item" @click="sortBy = item">
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <search-bar v-model="searchQuery" />

        <!-- Filters (Right) -->
        <div class="d-flex align-center">
          <v-menu>
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                class="text-none font-weight-regular ml-2 px-2"
                color="grey-lighten-1"
                variant="text"
              >
                {{ selectedGenreName || 'Category' }}
                <v-icon end size="small">mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                link
                title="All Categories"
                @click="selectedGenreId = null"
              />
              <v-list-item
                v-for="genre in genres"
                :key="genre.id"
                link
                :title="genre.name"
                @click="selectedGenreId = genre.id"
              />
            </v-list>
          </v-menu>
        </div>
      </div>

      <!-- Movies Grid -->
      <v-row>
        <v-col
          v-for="movie in displayMovies"
          :key="movie.id"
          cols="12"
          md="4"
        >
          <v-card
            class="rounded-xl overflow-hidden position-relative"
            elevation="10"
            height="400"
          >
            <!-- Image with Gradient Overlay -->
            <v-img
              class="align-end"
              cover
              gradient="to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.9) 100%"
              height="100%"
              :src="movie.image"
            >
              <!-- Card Content Overlay -->
              <div class="pa-6 text-white text-left">
                <!-- Meta Info Row -->
                <div class="d-flex align-center mb-3 text-caption font-weight-medium text-grey-lighten-2">
                  <span class="mr-4">{{ movie.date }}</span>

                  <div class="d-flex align-center">
                    <v-icon
                      class="mr-1"
                      color="yellow-darken-2"
                      size="small"
                    >
                      mdi-star
                    </v-icon>
                    <span>{{ movie.score }}</span>
                  </div>
                </div>

                <!-- Blog Title -->
                <h3 class="text-h5 font-weight-bold leading-tight">
                  {{ movie.title }}
                </h3>
              </div>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
  <Footer></Footer>
</template>

<script setup>
  import { computed, onMounted, ref, watch } from 'vue'
  import SearchBar from '@/components/searchBar.vue'
  import { getGenres, getPopularMovies, searchMovies } from '@/services/api'

import Footer from '@/layouts/Footer.vue'
import Header from '@/layouts/Header.vue'

  const movies = ref([])
  const genres = ref([])
  const searchQuery = ref('')
  const sortBy = ref('Most Popular')
  const selectedGenreId = ref(null)

  const sortOptions = ['Most Popular', 'Best Rating', 'Newest']

  // Computed property for the filter/sort logic
  const displayMovies = computed(() => {
    let result = [...movies.value]

    // Filter by Genre
    if (selectedGenreId.value) {
      result = result.filter(m => m.genreIds.includes(selectedGenreId.value))
    }

    // Sort
    if (sortBy.value === 'Best Rating') {
      result.sort((a, b) => b.score - a.score)
    } else if (sortBy.value === 'Newest') {
      result.sort((a, b) => new Date(b.date) - new Date(a.date))
    }
    // 'Most Popular' is the API default, so no extra sort needed unless we want to manually sort by popularity score from API if we had it.

    return result
  })

  const selectedGenreName = computed(() => {
    if (!selectedGenreId.value) return null
    return genres.value.find(g => g.id === selectedGenreId.value)?.name
  })

  const fetchMovies = async () => {
    try {
      if (searchQuery.value.trim()) {
        movies.value = await searchMovies(searchQuery.value)
      } else {
        movies.value = await getPopularMovies()
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  // Watch search query to trigger API search (debounced slightly by behavior or user typing speed, typically)
  let timeout
  watch(searchQuery, () => {
    clearTimeout(timeout)
    timeout = setTimeout(fetchMovies, 500)
  })

  onMounted(async () => {
    await fetchMovies()
    try {
      genres.value = await getGenres()
    } catch (error) {
      console.warn('Failed to load genres', error)
    }
  })
</script>

<style scoped>
/* Optional: slightly adjust the container background to match the screenshot better if needed */
.bg-blue-grey-darken-4 {
  background-color: black !important; /* Tailwind's slate-900 match */
}
</style>
