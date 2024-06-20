import "./assets/main.css";
import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
import { createPinia } from "pinia";
import { createI18n, useI18n } from "vue-i18n";
// import EN from "./locales/en.json";
// import KH from "./locales/kh.json";
// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { Title } from "chart.js";

import "../src/assets/font.css";

const vuetify = createVuetify({
  components,
  directives,
});

const messages = {
  en: {
    message: {
      Library:"Library",
      ReadMore:"Read More",
      Exit:"Exit",
      Detail : "Detail",
      // Dashboard
      Dashboard: "Dashboard",
      BorrowedBooks: "Borrowed Books",
      ReturnBook: "Returned Books",
      OverdueBooks: "Overdue Books",
      Visitors: "Visitors",
      NewBook: "New Books",
      MissingBooks: "Missing Books",
      PendignFees: "Pendign Fees",
      TotalBooks: "Total Books",
      PopularBook: "PopularBooks",
      Add: "Add",
      Save: "Save",
      Reset: "Reset",
      Book: "Book",
      Search: "Search",
      // Member
      Members: "Members",
      AddMembers: "AddMembers",
      Name: "Name",
      Email: "Email",
      Role: "Role",
      MemberID: "Member ID",
      Cleaner: "Cleaner",
      Manager: "Manager",
      Employee: "Employee",
      SignOut: "Sign Out",
      LANGUAGE: "Language",
      // Book
      AddBooks: "AddBooks",
      Books: "Books",
      BorrowBook: "BorrowBook",
      Title: "Title",
      BookType: "Book Type",
      PublicationYear: "Publication Year",
      Author: "Author Name",
      BookID: "Book ID",
      Actions: "Actions",
      //BorrowBook
      BorrowBook: "Borrow Book",
      StudentID:"Student ID",
      StudentName: "Student Name",
      Major : "Major",
      Title: "Title",
      Date: "Date",
      //Library Book
      AllBook: "All Book",
      SelectType: "Select Type",
      All: "All",
      IT: "Information Technology",
      Law: "Law",
      English: "English",
      General: "General",
    },
  },
  km: {
    message: {
      Library: "បណ្ណាល័យ",
      ReadMore: "អានបន្ថែម",
      Exit :"ចាកចេញ",
      Detail : "លម្អិត",
      // Dashboard
      Dashboard: "ផ្ទាំងគ្រប់គ្រង",
      BorrowedBooks: "ខ្ចីសៀវភៅ",
      ReturnBook: "សៀវភៅសង",
      OverdueBooks: "សៀវភៅហួសកំណត់",
      Visitors: "អ្នកទស្សនា",
      NewBook: "សៀវភៅថ្មី",
      MissingBooks: "សៀវភៅបាត់",
      PendignFees: "ថ្លៃសេវារងចាំ",
      TotalBooks: "សៀវភៅសរុប",
      PopularBook: "សៀវភៅពេញនិយម",
      Add: "បញ្ចូល",
      Save: "រក្សាទុក",
      Reset: "សម្អាត",
      Book: "សៀវភៅ",
      Search: "ស្វែងរក",
      // Member
      Members: "សមាជិក",
      AddMembers: "បញ្ចូលសមាជិកថ្មី",
      Name: "ឈ្មោះ",
      Email: "អុីមែល",
      Role: "តួរនាទី",
      MemberID: "លេខសម្គាល់",
      Cleaner: "អ្នកសម្អាត",
      Manager: "អ្នកគ្រប់គ្រង",
      Employee: "បុគ្គលិក",
      SignOut: "ចាកចេញ",
      LANGUAGE: "ភាសា",
      // Book
      AddBooks: "បញ្ចូលសៀវភៅ",
      Books: "សៀវភៅ",
      BorrowBook: "ខ្ចីសៀវភៅ",
      Title: "ចំណងជើង",
      BookType: "ប្រភេទសៀវភៅ",
      PublicationYear: "ឆ្នាំបោះពុម្ភផ្សាយ",
      Author: "ឈ្មោះអ្នកនិពន្ធ",
      BookID: "លេខសម្គាល់សៀវភៅ",
      Actions: "សកម្មភាព",
      //BorrowBook
      BorrowBook:"ខ្ចីសៀវភៅ",
      StudentID:"លេខសម្គាល់សិស្ស",
      StudentName: "ឈ្មោះសិស្ស",
      Major : "ជំនាញ",
      Title: "ចំណងជើង",
      Date: "កាលបរិច្ឆេទ",
      //Library Book
      AllBook: "សៀវភៅទាំងអស់",
      SelectType: "ជ្រើសរើសប្រភេទសៀវភៅ",
      All: "ទាំងអស់",
      IT: "បច្ចេកវិទ្យាព័ត៌មាន",
      Law: "ច្បាប់",
      English: "អង់គ្លេស",
      General: "ទូទៅ",
    },
  },
};

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
});

//Theme
const customDarkTheme = {
  dark: true,
  colors: {
    background: "#15202b",
    surface: "#15202b",
    primary: "#3f51b5",
    secondary: "#03dac6",
    error: "#f44336",
    info: "#2196F3",
    success: "#4caf50",
    warning: "#fb8c00",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "customDarkTheme",
    themes: {
      customDarkTheme,
    },
  },
});

app.use(i18n);
app.use(router);
app.use(vuetify);
app.use(createPinia());

app.mount("#app");
