<script setup>
import { ref, watch, computed } from "vue";
// import Form from "../components/Form.vue";
import { StoreList } from "../store/store";
import { useI18n } from "vue-i18n";
import Toast from "@/helpers/toast";
import ToastDelete from "@/helpers/deleteToast";
import Swal from "sweetalert2";
const search = ref("");
const errorMessage = ref("");
const rules = ref({
  required: (value) => !!value || "Field is required",
});

const i18n = useI18n();
const appFontStyle = computed(() => {
  return i18n.locale.value === "km" ? "customFont" : "";
});

// const storearr = StoreList();

const headers = ref([
  {
    key: "id",
    title: "No",
  },
  {
    key: "name",
    title: "Name",
  },
  {
    key: "email",
    title: "Email",
  },
  {
    key: "role",
    title: "Role",
  },
  {
    key: "action",
    title: "Actions",
  },
]);

// const roles = ref(["Cleaner", "Manager", "Employee"]);
const roles = ref([
  {
    nameen: "Cleaner",
    nameId: "1",
  },
  {
    nameen: "Manager",
    nameId: "2",
  },
  {
    nameen: "Security",
    nameId: "3",
  },
  {
    nameen: "Employee",
    nameId: "4",
  },
]);

const dialog = ref(false);
const deleteItem = ref({});
const ViewItem = ref({});
const title = ref("Add");

const form = ref({
  name: "",
  email: "",
  id: null,
  role: "",
});
// const addName = ref("");
// const addEmail = ref("");
// const addId = ref(null);
// const addRole = ref("");
const items = ref([
  {
    name: "Teang Tela",
    email: "telateang@gmail.com",
    id: "001",
    role: "Cleaner",
  },
  {
    name: "Tep Reaksmey",
    email: "tepreaksmey@gmail.com",
    id: "002",
    role: "Manager",
  },
  {
    name: "Kouch David",
    email: "kouchdavidg@gmail.com",
    id: "003",
    role: "Cleaner",
  },
  {
    name: "Sorm Rafat",
    email: "rafat77@gmail.com",
    id: "004",
    role: "Manager",
  },
  {
    name: "Cristian Ronaldo",
    email: "ronaldo7@gmail.com",
    id: "006",
    role: "Cleaner",
  },
  {
    name: "Neymar.JR",
    email: "ouknhaneyma@gmail.com",
    id: "007",
    role: "Cleaner",
  },
  {
    name: "Leonal Messi",
    email: "messi10@gmail.com",
    id: "008",
    role: "Cleaner",
  },
]);
const addItems = () => {
  if (
    form.value.name == null ||
    form.value.email == null ||
    form.value.id == null ||
    form.value.role == null ||
    form.value.role.length < 0 ||
    form.value.role == ""
  ) {
    errorMessage.value = "Please input all the field";
    dialog.value = true;
  } else {
    if (title.value == "Add") {
      items.value.push({
        name: form.value.name,
        email: form.value.email,
        id: form.value.id,
        role: form.value.role,
      });

      title.value = "Add";

      Toast.fire({
        text: "Member Add successfully",
        icon: "success",
      });


    } else {
      
      //edit button
      const index = items.value.findIndex((item) => item.id == form.value.id);
      items.value.splice(index, 1, {
        name: form.value.name,
        email: form.value.email,
        id: form.value.id,
        role: form.value.role,
      });

      Toast.fire({
        text: "Member Edit successfully",
        icon: "success",
      });

      title.value = "Add";
    }
    errorMessage.value = "";
    dialog.value = false;
    //clear
    form.value.name = null;
    form.value.email = null;
    form.value.id = null;
    form.value.role = null;
  }
};

const reset = () => {
  form.value.name = null;
  form.value.email = null;
  form.value.id = null;
  form.value.role = null;
};
const deleteFunction = (id) => {
  deleteItem.value = items.value.findIndex((t) => t.id == parseFloat(id));
  
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
const detailView = (id) => {
  ViewItem.value = items.value.findIndex((t) => t.id == parseFloat(id));
  console.log(ViewItem.value);
};

const edit = (item) => {
  form.value = JSON.parse(JSON.stringify(item));
  title.value = "Save";


  dialog.value = true;
};
const swalert = () => {
  Toast.fire({
    text: "success",
    icon: "success",
  });
};
</script>
<template>
  <v-container>
    <!-- dailog -->
    <v-dialog v-model="dialog" width="600" persistent>
      <v-card class="pa-6">
        <v-card-tittle :class="appFontStyle">
          <!-- <h2>{{ $t("message.AddMembers") }}</h2> -->
          <h2>{{ $t("message.AddMembers") }}</h2>
        </v-card-tittle>
        <v-card-text>
          <v-form :class="appFontStyle">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.name"
                  density="compact"
                  :label="$t('message.Name')"
                  variant="outlined"
                  persistent-hint
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.email"
                  density="compact"
                  :label="$t('message.Email')"
                  placeholder="telateang@gmail.com"
                  variant="outlined"
                  persistent-hint
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.id"
                  density="compact"
                  :label="$t('message.MemberID')"
                  variant="outlined"
                  persistent-hint
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" class="mt-0">
                <v-select
                  v-model="form.role"
                  :rules="[rules.required]"
                  variant="outlined"
                  persistent-hint
                  :label="$t('message.Role')"
                  density="compact"
                  :items="roles"
                  item-title="nameen"
                  item-value="nameen"
                >
                </v-select>
              </v-col>
            </v-row>
            <p class="text-red mb-3">{{ errorMessage }}</p>
            <v-row>
              <v-col cols="12" md="9">
                <v-btn color="success" @click="addItems">{{
                  $t(`message.${title}`)
                }}</v-btn>
                <v-btn color="red" class="ml-4" @click="reset">
                  {{ $t("message.Reset") }}
                </v-btn>
                <v-btn variant="outlined" class="ml-2 text-black" @click="dialog=false">Cancel</v-btn>

              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <div class="mb-" :class="appFontStyle">
      <v-row class="align-center">
        <v-col cols="12" md="6">
          <v-card :variant="flat - 0">
            <v-card-title
              class="text-h5 d-flex align-center"
              :class="appFontStyle"
            >
              {{ $t("message.Members") }}
            </v-card-title>
            <v-card-subtitle class="text-subtitle">
              To create a member and view the members reports
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="12" md="6">
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
            <v-col cols="12" md="6" class="d-flex align-center">
              <v-btn
                :variant="tonal"
                :rounded="50"
                color="success"
                @click="dialog = true"
              >
                <v-icon>mdi-account</v-icon>
                {{ $t("message.AddMembers") }}
              </v-btn>
              <v-chip class="ml-4">
                <v-icon>mdi-tray-arrow-up</v-icon>
                Import
              </v-chip>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <v-divider></v-divider>

    <div class="mt-9">
      <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
        class="rounded-lg border-sm"
      >
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
          ></v-btn>
        </template>
      </v-data-table>
    </div>
  </v-container>
</template>
