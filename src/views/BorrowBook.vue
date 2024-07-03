<script setup>
import { ref, watch, computed } from "vue";
import { useI18n } from "vue-i18n";
import Item from "../data/data.json";
import Swal from "sweetalert2";

const bookItem = ref(Item);
const dialog = ref(false);
const search = ref("");
const searchBook = ref("");
const title = ref("Add");
const deleteItem = ref({});
console.log(bookItem.value);
watch(searchBook, () => {
  bookItem.value = Item.filter((item) => {
    return item.title.toLowerCase().includes(searchBook.value.toLowerCase());
  });
});


const i18n = useI18n();
const appFontStyle = computed(() => {
  return i18n.locale.value === "km" ? "customFont" : "";
});

const rules = ref({
  required: (value) => !!value || "Field is required",
});
const form = ref({
  sId: null,
  sName: null,
  sMajor: null,
  bName: null,
  date: null,
});
const addItem = () => {
  if (title.value === "Add") {
    items.value.push({
      studentID: form.value.sId,
      studentName: form.value.sName,
      major: form.value.sMajor,
      title: form.value.bName,
      sDate: form.value.date,
    });
  } else {
    const index = items.value.findIndex(
      (item) => item.studentID === form.value.sId
    );
    items.value.splice(index, 1, {
      studentID: form.value.sId,
      studentName: form.value.sName,
      major: form.value.sMajor,
      title: form.value.bName,
      sDate: form.value.date,
    });
    title.value = "Add";

    console.log(index);
  }
  form.value.sId = null;
  form.value.sName = null;
  form.value.sMajor = null;
  form.value.bName = null;
  form.value.date = null;
  title.value = "Add";
  dialog.value = false;
};
const reset = () => {
  form.value.sId = null;
  form.value.sName = null;
  form.value.sMajor = null;
  form.value.bName = null;
  form.value.date = null;
};
const edit = (item) => {
  form.value = JSON.parse(JSON.stringify(item));
  form.value.sId = item.studentID;
  form.value.sName = item.studentName;
  form.value.sMajor = item.major;
  form.value.bName = item.title;
  form.value.date = item.sDate;
  title.value = "Save";
  dialog.value = true;
  console.log(item);
};
const deleteFunction = (id) => {
  deleteItem.value = items.value.findIndex((t) => t.studentID == parseFloat(id));

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      items.value.splice(deleteItem.value, 1);
      Swal.fire({
        title: "Deleted!",
        text: "Your record has been deleted.",
        icon: "success",
      });
    }
  })
  
};
const headers = ref([
  {
    key: "studentID",
    title: "StudentID",
  },
  {
    key: "studentName",
    title: "StudentName",
  },
  {
    key: "major",
    title: "Major",
  },
  {
    key: "title",
    title: "Title",
  },
  {
    key: "sDate",
    title: "Date",
  },
  {
    key: "action",
    title: "Actions",
  },
]);
const items = ref([
  {
    studentID: "001",
    studentName: "Teang Tela",
    major: "Infomation Technology",
    bID: "001",
    title: "Javascript",
    sDate: "2020-04-20",
  },
  {
    studentID: "002",
    studentName: "Kouch David",
    major: "Infomation Technology",
    bID: "001",
    title: "Javascript",
    sDate: "2023-01-11",
  },
]);
</script>
<template>
  <div>

    <v-dialog v-model="dialog" :width="600" :class="appFontStyle" persistent>
      <v-card class="pa-3">
        <v-card-title>{{ $t('message.BorrowBook') }}</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.sId"
                density="compact"
                :label="$t('message.StudentID')"
                variant="outlined"
                persistent-hint
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.sName"
                density="compact"
                :label="$t('message.StudentName')"
                variant="outlined"
                persistent-hint
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.sMajor"
                density="compact"
                :label="$t('message.Major')"
                variant="outlined"
                persistent-hint
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                v-model="form.bName"
                variant="outlined"
                persistent-hint
                :label="$t('message.Title')"
                density="compact"
                :items="bookItem"
              >
                <template v-slot:prepend-item>
                  <v-text-field
                  :label="$t('message.Search')"
                    variant="outlined"
                    density="compact"
                    persistent-hint
                    label="search book"
                  ></v-text-field>
                </template>
              </v-select>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.date"
                density="compact"
                :label="$t('message.Date')"
                type="date"
                variant="outlined"
                persistent-hint
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="9">
              <v-btn color="success" @click="addItem">{{ title }}</v-btn>
              <v-btn color="red" class="ml-4" @click="reset"> Reset </v-btn>
              <v-btn variant="outlined" class="ml-2 text-black" @click="dialog=false">Cancel</v-btn>

            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-row class="align-center">
      <v-col cols="12" md="6">
        <v-card :variant="flat - 0">
          <v-card-title class="text-h5 d-flex align-center" :class="appFontStyle">
            {{ $t('message.BorrowBook') }}
          </v-card-title>
          <v-card-subtitle class="text-subtitle">
            Read, Imagine, Create
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" :class="appFontStyle">
        <v-text-field
          v-model="search"
          append-inner-icon="mdi-magnify"
          density="compact"
          :label="$t('message.Search')"
          variant="solo"
          hide-details
          single-line
        ></v-text-field>
      </v-col>
      <v-col cols="auto" md="2">
        <v-btn color="success" @click="dialog = true" :class="appFontStyle">
          <v-icon> mdi-book-plus-multiple </v-icon>
          {{ $t('message.BorrowBook') }}
        </v-btn>
      </v-col>
      <v-divider> </v-divider>
    </v-row>
    <div class="mt-6">
      <v-data-table :headers="headers" :items="items" :search="search" class="rounded-lg border-sm">
        <template v-slot:item.action="row">
          <v-btn
            class="text-warning"
            icon="mdi-pen"
            size="sm"
            flat
            @click="edit(row.item)"
          ></v-btn>
          <v-btn
            class="text-error ml-4"
            icon="mdi-delete"
            size="sm"
            flat
            @click="deleteFunction(row.item.id)"
          >
          </v-btn>
        </template>
      </v-data-table>
    </div>
  </div>
</template>
