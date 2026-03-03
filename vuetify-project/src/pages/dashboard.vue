<template>
  <Header />

  <v-container class="mt-10">
    <!-- Header Section -->
    <div class="d-flex justify-space-between align-center mb-6">
      <div>
        <h2 class="text-h4 font-weight-bold mb-2">Manage Users</h2>
        <p class="text-medium-emphasis">
          A list of all the users in your account including their name, title, email and role.
        </p>
      </div>
      <v-btn
        class="text-capitalize"
        color="red-accent-4"
        flat
      >
        Add user
      </v-btn>
    </div>

    <!-- Users Table -->
    <v-card
      border
      class="rounded-lg"
      flat
    >
      <v-data-table
        :headers="headers"
        :items="people"
        hide-default-footer
        item-value="email"
      >
        <!-- Name Column -->
        <template #item.name="{ item }">
          <div class="d-flex align-center py-3">
            <v-avatar
              class="mr-3"
              size="40"
            >
              <v-img
                :src="item.picture"
                alt="Avatar"
              />
            </v-avatar>
            <span class="font-weight-bold text-body-2">{{ item.name }}</span>
          </div>
        </template>

        <!-- Actions Column -->
        <template #item.actions>
          <a
            class="text-decoration-none"
            href="#"
          >
            <v-icon
              class="me-2"
              color="blue-accent-4"
              size="small"
            >
              mdi-pencil
            </v-icon>
          </a>
          <a
            class="text-decoration-none"
            href="#"
          >
            <v-icon
              color="red-accent-4"
              size="small"
            >
              mdi-delete
            </v-icon>
          </a>
        </template>

        <!-- Bottom slot to hide default pagination if needed, or customize -->
        <template #bottom />
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script setup>
  import Header from '@/layouts/Header.vue'
  import { getStats, getUsers } from '@/services/Adminapi'
  import { onMounted, ref } from 'vue'

  const headers = [
    { title: 'Name', key: 'name', align: 'start', sortable: false },
    { title: 'Email', key: 'email', align: 'middle', sortable: false },
    { title: 'Phone', key: 'phone', align: 'middle', sortable: false },
    { title: 'Website', key: 'website', align: 'middle', sortable: false },
    { title: 'Actions', key: 'actions', align: 'middle', sortable: false },
  ]

  const people = ref([])
  const stats = ref({})
  onMounted(async () => {
    try {
      const [statsData, usersData] = await Promise.all([
        getStats(),
        getUsers(),
      ])
      stats.value = statsData
      people.value = usersData
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  })
</script>
