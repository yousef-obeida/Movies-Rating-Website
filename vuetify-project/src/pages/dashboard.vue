
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
            <div class="d-flex flex-column">
              <span class="font-weight-bold text-body-2">{{ item.name }}</span>
              <span class="text-caption text-medium-emphasis">{{ item.email }}</span>
            </div>
          </div>
        </template>

        <!-- Title Column -->
        <template #item.title="{ item }">
          <div class="d-flex flex-column">
            <span class="text-body-2">{{ item.title }}</span>
            <span class="text-caption text-medium-emphasis">{{ item.department }}</span>
          </div>
        </template>

        <!-- Status Column -->
        <template #item.status="{ item }">
          <v-chip
            class="font-weight-medium"
            color="success"
            size="small"
            variant="tonal"
          >
            {{ item.status }}
          </v-chip>
        </template>

        <!-- Role Column -->
        <template #item.role="{ item }">
          <span class="text-body-2 text-medium-emphasis">{{ item.role }}</span>
        </template>

        <!-- Actions Column -->
        <template #item.actions>
          <a
            class="text-decoration-none text-primary font-weight-bold text-body-2"
            href="#"
          >Edit</a>
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
    { title: 'Title', key: 'title', align: 'start', sortable: false },
    { title: 'Status', key: 'status', align: 'start', sortable: false },
    { title: 'Role', key: 'role', align: 'start', sortable: false },
    { title: '', key: 'actions', align: 'end', sortable: false },
  ]

  const stats = ref([
    { title: 'Total Visitors', value: '-' },
    { title: 'Avg. Open Rate', value: '-' },
    { title: 'Avg. Click Rate', value: '-' },
  ])

  const people = ref([])

  onMounted(async () => {
    try {
      const [statsData, usersData] = await Promise.all([
        getStats(),
        getUsers(),
      ])
      stats.value = statsData

      // Transform API users to match the UI requirements
      // Assuming usersData comes from JSONPlaceholder via Adminapi.js
      // We add mock Title, Status, and Role fields
      const roles = ['Member', 'Admin', 'Owner']
      const departments = ['Engineering', 'Design', 'Product', 'Marketing']

      people.value = usersData.map(user => ({
        ...user,
        // Mock data for missing fields
        title: 'Front-end Developer', // Placeholder, ideally from API
        department: departments[Math.floor(Math.random() * departments.length)],
        status: 'Active',
        role: roles[Math.floor(Math.random() * roles.length)],
      }))

    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    }
  })
</script>
