<script setup>
import { ref,computed } from "vue";
import { useI18n } from "vue-i18n";
const deleteBook = ref({});
const search = ref("");
const dialog = ref(false);
const title = ref("Add");
const types = ref(["Information Technology", "Marketing", "Bank", "English"]);
const errorMessage = ref("")
const rules = ref({
  required: (value) => !!value || "Field is required",
});

const i18n = useI18n();
const appFontStyle = computed(() => {
  return i18n.locale.value === "km" ? "customFont" : "";
});

const form = ref({
  b_name: "",
  b_id: null,
  b_type: "",
  author_name: "",
  public_year: "",
});
const addBook = () => {
  if(form.value.b_name=="" || form.value.b_id=="" || form.value.b_type=="" || form.value.author_name=="" || form.value.public_year==""){
    errorMessage.value = "Please input all the field"
  }else{
    if  (title.value == "Add") {
      items.value.push({
        b_name: form.value.b_name,
        b_id: form.value.b_id,
        b_type: form.value.b_type,
        public_year: form.value.public_year,
        author_name: form.value.author_name,
      });
    }else if(title.value=="បញ្ចូល"){
      items.value.push({
        b_name: form.value.b_name,
        b_id: form.value.b_id,
        b_type: form.value.b_type,
        public_year: form.value.public_year,
        author_name: form.value.author_name,
      });
    }else {
      const index = items.value.findIndex((item) => item.b_id == form.value.b_id );
      items.value.splice(index, 1, {
        b_name: form.value.b_name,
        b_id: form.value.b_id,
        b_type: form.value.b_type,
        public_year: form.value.public_year,
        author_name: form.value.author_name,
      });
    }
    title.value = "Add";
    errorMessage.value==""
    form.value.author_name = null;
    (form.value.b_id = null),
      (form.value.b_name = null),
      (form.value.public_year = null),
      (form.value.b_type = null),
      (dialog.value = false);
  }
};
const reset = () => {
  (form.value.author_name = null),
    (form.value.b_id = null),
    (form.value.b_name = null),
    (form.value.public_year = null),
    (form.value.b_type = null);
};
const deleteFunction = (id) => {
  deleteBook.value = items.value.findIndex((t) => t.b_id == id);
  items.value.splice(deleteBook.value, 1);
};

const edit = (item) => {
  form.value = JSON.parse(JSON.stringify(item));
  console.log(item);
  dialog.value = true;
  title.value = "Edit";
};

const headers = ref([
  {
    key: "b_id",
    title: "BookID",
  },
  {
    key: "b_name",
    title: "Tittle",
  },
  {
    key: "b_type",
    title: "BookType",
  },
  {
    key: "public_year",
    title: "PublicationYear",
  },
  {
    key: "author_name",
    title: "Author",
  },
  {
    key: "action",
    title: "Actions",
  },
]);
const items = ref([
  {
    b_id: "001",
    b_name: "Javascript",
    b_type: "Infomation Technology",
    public_year: "2003",
    author_name: "Teang Tela",
  },
  {
    b_id: "002",
    b_name: "Java",
    b_type: "Infomation Technology",
    public_year: "2000",
    author_name: "Kouch David",
  },
  {
    b_id: "003",
    b_name: "Data Communication",
    b_type: "Infomation Technology",
    public_year: "2019",
    author_name: "Tep Reaksmey",
  },
  {
    b_id: "004",
    b_name: "Grammar",
    b_type: "English",
    public_year: "2019",
    author_name: "Sem Visal",
  },
  {
    b_id: "005",
    b_name: "Python",
    b_type: "Infomation Technology",
    public_year: "2019",
    author_name: "Sorm Rafat",
  },
  {
    b_id: "006",
    b_name: "Javascript",
    b_type: "Infomation Technology",
    public_year: "2019",
    author_name: "Cristion Ronaldo",
  },
  {
    b_id: "007",
    b_name: "Data Communication",
    b_type: "Infomation Technology",
    public_year: "2019",
    author_name: "Tep Reaksmey",
  },
]);
</script>
<template>
  <v-container>
    <v-row class="align-center" :class="appFontStyle">
      <v-col cols="12" md="6">
        <v-card :variant="flat - 0">
          <v-card-title class="text-h5 d-flex align-center" :class="appFontStyle">
            {{ $t('message.AddBooks') }}
          </v-card-title>
          <v-card-subtitle class="text-subtitle">
            To create a books and view the books reports
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          append-inner-icon="mdi-magnify"
          density="compact"
          :label="$t('message.Search')"
          variant="solo"
          hide-details
          single-line
          v-model="search"
        ></v-text-field>
      </v-col>
      <v-col cols="auto" md="2">
        <v-btn flat color="success" @click="dialog = true">
          <v-icon>mdi-book</v-icon>
          {{ $t('message.AddBooks') }}
        </v-btn>
      </v-col>
    </v-row>

    <!-- dailog field -->
    <v-dialog :width="600" v-model="dialog" :class="appFontStyle">
      <v-card class="pa-3">
        <v-card-title> {{ $t('message.AddBooks') }}</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.b_id"
                density="compact"
                :label="$t('message.BookID')"
                variant="outlined"
                persistent-hint
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.b_name"
                density="compact"
                :label="$t('message.Title')"
                variant="outlined"
                persistent-hint
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                v-model="form.b_type"
                :rules="[rules.required]"
                variant="outlined"
                persistent-hint
                :label="$t('message.BookType')"
                density="compact"
                :items="types"
              >
              </v-select>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.public_year"
                density="compact"
                :label="$t('message.PublicationYear')"
                variant="outlined"
                type="date"
                persistent-hint
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.author_name"
                density="compact"
                :label="$t('message.Author')"
                variant="outlined"
                persistent-hint
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
          </v-row>
          <p class="text-red">{{ errorMessage }}</p>
          <v-row>
            <v-col cols="12" md="6">
              <v-btn color="success" @click="addBook"> {{ $t(`message.${title}`) }} </v-btn>
              <v-btn color="red" class="ml-4" @click="reset"> {{ $t('message.Reset') }} </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
       
      </v-card>
    </v-dialog>

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
            @click="deleteFunction(row.item.b_id)"
          >
          </v-btn>
        </template>
      </v-data-table>
    </div>
  </v-container>
</template>
