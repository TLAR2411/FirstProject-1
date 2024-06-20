<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useTheme } from "vuetify";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const i18n = useI18n();

const drawer = ref(null);
const items = ref([
  { text: "Dashboard", icon: "mdi-monitor-dashboard", to: "/" },
  { text: "Members", icon: "mdi-account-group", to: "/member" },
  { text: "AddBooks", icon: "mdi-book-plus-multiple", to: "/addbook" },
  { text: "BorrowBook", icon: "mdi-book-plus-multiple", to: "/borrow" },
  { text: "Books", icon: " mdi-book-open-variant", to: "/book" },
]);

//change flag
const flag = ref("en");
const toggleLanguages = () => {
  flag.value = flag.value == "km" ? "en" : "km";
  i18n.locale.value = flag.value;
};

const appFontStyle = computed(() => {
  return flag.value === "km" ? "customFont" : "";
});

const themeName = ref("light");

const theme = useTheme();

const toggleTheme = () => {
  themeName.value = themeName.value == "dark" ? "light" : "dark";

  theme.global.name.value = themeName.value;

  console.log(`Current theme is dark? ${themeName.value}`);
};

//login dailog
const dailogLogin = ref(true);
const visible = ref(false);
const password = ref('');


</script>

<template>
  //login dailog
  <v-dialog v-model="dailogLogin" :width="500" persistent opacity="1">
    <v-card
      class="mx-auto pa-6 pb-8"
      elevation="8"
      rounded="lg"
    >
    <v-img
      :width="90"
      aspect-ratio="16/9"
      cover
      class="mx-auto"
      src="https://nubb.edu.kh/wp-content/uploads/2021/04/UBB-logo-small.png"
    ></v-img>
      <div class="text-h6 text-medium-emphasis">Account</div>

      <v-text-field
        density="comfortable"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Password

        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Forgot login password?</a
        >
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="comfortable"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        v-model="password"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-card class="mb-12" color="surface-variant" variant="tonal">
        <v-card-text class="text-medium-emphasis text-caption">
          Warning: After 3 consecutive failed login attempts, you account will
          be temporarily locked for three hours. If you must login now, you can
          also click "Forgot login password?" below to reset the login password.
        </v-card-text>
      </v-card>

      <v-btn
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        block
        @click="dailogLogin = false"
      >
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </v-dialog>

  <v-app>
    <!-- bar -->
    <v-app-bar style="background-color: #1b5e20; color: white">
      <v-app-bar-title class="text-p" :class="appFontStyle">
        {{ $t("message.Library") }}
        <v-icon color="grey"> mdi-library </v-icon>
      </v-app-bar-title>
      <!-- <v-text-field
        append-inner-icon="mdi-magnify"
        density="compact"
        label="Search templates"
        variant="solo"
        hide-details
        rounded="pill"
        single-line
        @click:append-inner="onClick"
      ></v-text-field> -->
      <v-spacer></v-spacer>

      <!-- <v-switch 
        inset
        hide-details
        color="black"
        v-model="darkMode"
        @change="toggleTheme()"
        :label="` ${darkMode ? 'Dark' : 'Light'}!`"
      ></v-switch> -->

      <!-- <v-btn @click.prevent="() => ($i18n.locale = 'km')" class="bg-red">
        <span> Khmer </span>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn> -->
      <v-btn variant="outlined" @click.prevent="toggleLanguages()">
        <v-avatar
          size="24"
          :image="
            flag === 'km'
              ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVQVYDdizrOHD1QZKCU4Pn810mf6NFHkqjGFNUU8M-hA&s'
              : 'https://cdn.countryflags.com/thumbs/cambodia/flag-400.png'
          "
        ></v-avatar>
        <!-- <v-menu activator="parent">
          <v-list class="align-center pa-0 ma-0">
            <v-list-item class="pa-0 ma-0">
              <v-btn
                @click.prevent="() => ($i18n.locale = 'km')"
                flat
                class="mx-auto"
              >
                <v-avatar
                  size="24"
                  image="https://cdn.countryflags.com/thumbs/cambodia/flag-400.png"
                ></v-avatar>
              </v-btn>
            </v-list-item>
            <v-list-item class="pa-0 ma-0">
              <v-btn @click.prevent="() => ($i18n.locale = 'en')" flat>
                <v-avatar
                  size="24"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVQVYDdizrOHD1QZKCU4Pn810mf6NFHkqjGFNUU8M-hA&s"
                ></v-avatar>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu> -->
      </v-btn>
      <v-btn variant="outlined" class="ml-2" @click.prevent="toggleTheme()">
        <v-icon class="text-h5">
          {{
            themeName === "dark"
              ? "mdi-white-balance-sunny"
              : "mdi-weather-night"
          }}
        </v-icon>

        <!-- <v-menu activator="parent">
          <v-list class="align-center pa-0 ma-0">
            <v-list-item class="pa-0 ma-0">
              <v-btn @click="toggleTheme()">
                <v-icon>
                  
                </v-icon>
              </v-btn>
            </v-list-item>
            <v-list-item class="ma-0 pa-0">
              <v-btn @click="toggleTheme()">
                <v-icon>
                  
                </v-icon>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu> -->
      </v-btn>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- v-navigation-drawer -->
    <v-navigation-drawer
      v-model="drawer"
      style="background-color: #1b5e20; color: white"
      :width="220"
    >
      <v-list>
        <v-list-item>
          <v-img
            :width="60"
            aspect-ratio="16/9"
            cover
            class="mx-auto"
            src="https://nubb.edu.kh/wp-content/uploads/2021/04/UBB-logo-small.png"
          >
          </v-img>
        </v-list-item>
        <v-list-item-title class="text-h5 mt-2 text-center">
          N U B B
        </v-list-item-title>
        <v-list-item-title class="text-center pa-1 text-caption"
          >National University of Battambang</v-list-item-title
        >

        <v-list class="mt-2" density="compact">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            color="#76FF03"
            :to="item.to"
            class="text-body-4 mt-1 mx-1 rounded-lg"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>
            <v-list-item-title :class="appFontStyle" class="text-body-2">
              {{ $t(`message.${item.text}`) }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block class="bg-green">
            {{ $t("message.SignOut") }}
            <v-icon>mdi-exit-to-app</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- v-main -->
    <div>
      <v-main>
        <v-container fluid>
          <RouterView></RouterView>
        </v-container>
      </v-main>
    </div>
  </v-app>
</template>

<style scoped></style>
