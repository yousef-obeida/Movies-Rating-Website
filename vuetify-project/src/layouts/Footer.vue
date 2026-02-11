<template>
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet">

  <v-footer class="bg-black d-flex flex-column">
    <div class="bg-black d-flex w-100 align-center px-4">
      <strong class="text-h6">Get connected with us on social networks!</strong>

      <v-spacer />

      <v-btn
        v-for="icon in ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']"
        :key="icon"
        class="mx-4"
        :icon="icon"
        size="small"
        variant="plain"
      />
    </div>

    <div class="pa-4 bg-black w-100">
      <v-row justify="center">
        <v-col class="text-center text-md-left" cols="12" md="4">
          <div class="text-h5 font-weight-bold mb-4 text-red-accent-4" style="font-family: 'Bebas Neue', cursive; letter-spacing: 1px;">MOVIES RATING</div>
          <p class="text-grey">
            Your destination for the best movie reviews, ratings, and cinematic discoveries. Join our community of film lovers today.
          </p>
        </v-col>

        <v-col class="text-center text-md-left" cols="12" md="4">
          <div class="text-h6 font-weight-bold mb-4 text-white">Contact Us</div>
          <div class="d-flex align-center justify-center justify-md-start mb-2 text-grey">
            <v-icon class="mr-2" color="red-accent-4" icon="mdi-email" />
            support@moviesrating.com
          </div>
          <div class="d-flex align-center justify-center justify-md-start mb-2 text-grey">
            <v-icon class="mr-2" color="red-accent-4" icon="mdi-phone" />
            +1 (555) 123-4567
          </div>
          <div class="d-flex align-center justify-center justify-md-start text-grey">
            <v-icon class="mr-2" color="red-accent-4" icon="mdi-map-marker" />
            123 Cinema Street, Hollywood, CA
          </div>
        </v-col>

        <v-col class="text-center text-md-left" cols="12" md="4">
          <div class="text-h6 font-weight-bold mb-4 text-white">Our Location</div>
          <v-card border class="rounded-lg overflow-hidden" elevation="4">
            <iframe
              height="150"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26456.14816921352!2d-118.34259846673413!3d34.09800311531235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf07045279bf%3A0xf67a9a6797bdfae4!2sHollywood%2C%20Los%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1707246000000!5m2!1sen!2sus"
              style="border:0;"
              width="100%"
            />
          </v-card>
        </v-col>
      </v-row>
    </div>

    <div class="px-4 py-2 bg-black text-center w-100">
      <v-divider class="mb-4" />
      <div class="text-grey">
        &copy; 2026 - <strong>Movies Rating Website</strong>. All Rights Reserved.
      </div>
    </div>
  </v-footer>
</template>
