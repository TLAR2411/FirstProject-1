<script setup>
import { computed, ref, watch } from "vue";
import barCharVue from "../components/barChar.vue";
import lineChart from "../components/lineChart.vue";
import douChart from "../components/douChart.vue";
// import schedular from "../components/schedular.vue";
import Item from "../data/data.json";
import { useI18n } from "vue-i18n";
const bookItem = ref([]);
bookItem.value = Item.filter((item) => {
  return item.rating > 4;
});
const i18n = useI18n();
const appFontStyle = computed(() => {
  return i18n.locale.value === "km" ? "customFont" : "";
});
// import calendar from "../components/calendar.vue";

// const search = ref("");
// const items = ref([
//   {
//     name: "david",
//   },
//   {
//     name: "fi",
//   },
//   {
//     name: "hi",
//   },
// ]);

// const FilterSearch = computed(() => {
//   return items.value.filter((t) => t.name.includes(search.value));
// });


</script>
<template>
  <div>
    <!-- <div class="ma-3">
    <v-text-field
      append-inner-icon="mdi-magnify"
      density="compact"
      label="Search templates"
      variant="solo"
      hide-details
      single-line
      v-model="search"
    ></v-text-field>
  </div>
  <div class="ma-3">
    <v-data-table :items="FilterSearch"></v-data-table>
  </div> -->
    <v-row>
      <v-col cols="12" md="3">
        <v-card>
          <v-card-title class="font-weight-thin text-body-2 grey" :class="appFontStyle">{{
            $t("message.BorrowedBooks")
          }}</v-card-title>
          <v-card-text>
            <div class="text-h5 d-flex align-center">
              2405
              <v-chip class="bg-success ml-2"> +24% </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card>
          <v-card-title class="font-weight-thin text-body-2 grey" :class="appFontStyle">
            {{ $t("message.ReturnBook") }}
          </v-card-title>
          <v-card-text>
            <div class="text-h5 d-flex align-center">
              246
              <v-chip class="bg-red ml-2"> -24% </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card>
          <v-card-title class="font-weight-thin text-body-2 grey" :class="appFontStyle">{{
            $t("message.OverdueBooks")
          }}</v-card-title>
          <v-card-text>
            <div class="text-h5 d-flex align-center">
              45
              <v-chip class="bg-success ml-2"> +11% </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card>
          <v-card-title class="font-weight-thin text-body-2 grey" :class="appFontStyle">{{
            $t("message.Visitors")
          }}</v-card-title>
          <v-card-text>
            <div class="text-h5 d-flex align-center">
              1509
              <v-chip class="bg-success ml-2"> +4% </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card>
          <v-card-title class="font-weight-thin text-body-2 grey" :class="appFontStyle"
            >{{ $t("message.NewBook") }}
          </v-card-title>
          <v-card-text>
            <div class="text-h5 d-flex align-center">
              34
              <v-chip class="bg-red ml-2"> -10% </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card>
          <v-card-title class="font-weight-thin text-body-2 grey" :class="appFontStyle">{{
            $t("message.MissingBooks")
          }}</v-card-title>
          <v-card-text>
            <div class="text-h5 d-flex align-center">
              12
              <v-chip class="bg-success ml-2"> +11% </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card>
          <v-card-title class="font-weight-thin text-body-2 grey" :class="appFontStyle">{{
            $t("message.PendignFees")
          }}</v-card-title>
          <v-card-text>
            <div class="text-h5 d-flex align-center">
              $765
              <v-chip class="bg-success ml-2"> +56%</v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card>
          <v-card-title class="font-weight-thin text-body-2 grey" :class="appFontStyle">{{
            $t("message.TotalBooks")
          }}</v-card-title>
          <v-card-text>
            <div class="text-h5 d-flex align-center">
              24453
              <v-chip class="bg-success ml-2"> +11% </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- chart -->
    <v-row>
      <v-col cols="12" md="6" class="mt-9">
        <lineChart />
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="12" md="6" class="mt-9">
        <douChart />
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col cols="12" md="12">
        <schedular/>
      </v-col>
    </v-row> -->

    <!-- popularbook -->
    <!-- <h2 class="my-5 text-h4 text-red" :class="appFontStyle">{{ $t("message.PopularBook") }}</h2> -->
    <!-- <v-row>
      <v-col
        cols="12"
        md="3"
        lg="3"
        v-for="item in bookItem"
        :key="bookItem.id"
      >
        <v-card flat>
          <v-img :src="item.img" height="100"> </v-img>
          <v-row>
            <v-col>
              <v-card-title>{{ item.title }}</v-card-title>
            </v-col>
            <v-col class="d-flex align-center justify-center">
              <v-rating
                :model-value="item.rating"
                color="amber"
                density="compact"
                size="small"
                half-increments
                readonly
              ></v-rating>
            </v-col>
          </v-row>
          <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
          <v-card-actions>
            <v-row>
              <v-col cols="12" md="6">
                <v-btn
                  color="success"
                  variant="outlined"
                  @click="detailFuction(item.id)"
                >
                  Detail
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row> -->
    <!-- <v-row>
    <v-col cols="12" md="12">
      <calendar/>
    </v-col>
  </v-row> -->
  </div>
</template>
