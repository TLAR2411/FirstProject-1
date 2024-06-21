<script setup>
import { ref, watch, computed } from "vue";
import Item from "../data/data.json";
const dialog = ref(false);
const bookItem = ref(Item);
const search = ref("");

const items = ref([
  { title: "All" },
  { title: "PopularBook" },
  { title: "IT" },
  { title: "Law" },
  { title: "English" },
  { title: "General" },
]);
const selectBook = (t) => {
  console.log(t);
  bookItem.value = Item.filter((item) => {
    return item.type.toLowerCase() == t.toLowerCase();
  });
  if (t == "All") {
    bookItem.value = Item;
  } else if (t == "PopularBook") {
    bookItem.value = Item.filter((item) => {
      return item.rating > 4;
    });
  }
};
watch(search, () => {
  bookItem.value = Item.filter((item) => {
    return item.title.toLowerCase().includes(search.value.toLowerCase());
  });
});
// const bookItem = ref([
//   {
//     id: 1,
//     img: "https://www.syndetics.com/index.aspx?isbn=9781443467810&issn=/LC.JPG&client=pickp&type=xw12",
//     title: "Trust Telling",
//     subtitle: "A bold, provocative examination of Canadian Indigenous issues from advocate, activist and award-winning novelist Michelle Good. Truth Telling is a collection of essays about the contemporary Indigenous experience in Canada. Seven Conversations About Indigenous Life in Canada",
//     author: "Good, Michelle",
//     rating: 4,
//     publish_date: "2010",
//     publisher: "NUBB",
//     language: "English",
//   },
//   {
//     id: 2,
//     img: "https://cdn.hackr.io/uploads/posts/attachments/1674217391vZHygNFlAc.png",
//     title: "Javascript",
//     subtitle:
//       "JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user. This is the best book for learning Javascript.",
//     publish_date: "2004",
//     publisher: "NUBB",
//     language: "English",
//     author: "Teang Tela",
//     rating: 3,
//   },
//   {
//     id: 3,
//     img: "https://tse4.mm.bing.net/th?id=OIP.Z2kVxqDKIiipvscSF8xveAHaMH&pid=Api&P=0&h=220",
//     title: "C++",
//     subtitle:
//       "C++ is an object-oriented programming (OOP) language that is viewed by many as the best language for creating large-scale applications. C++ is a superset of the C language. This is the best book for learning C++ ",
//     rating: 4.5,
//     publish_date: "2021",
//     publisher: "NUBB",
//     language: "English",
//     author: "Kouch David",
//   },
//   {
//     id: 4,
//     img: "https://1.bp.blogspot.com/-6fJuKSTUXXg/Xz6EmUefXNI/AAAAAAAAIf8/UMx_9A5zfvA2OCS2LtcJXszgV7eR-PcugCLcBGAsYHQ/s1600/touchmaster_1597932460033.jpeg",
//     title: "Python",
//     subtitle:
//       "Python is an open-source programming language, having features like object-oriented, interpreted and high-level too. It is a dynamically typed programming language, which is easy to use with redable and user-friendly syntax. It has huge libraries, frameworks and large community support. This is the best book for learning Python",
//     rating: 5,
//     publish_date: "2011",
//     publisher: "NUBB",
//     language: "English",
//     author: "Tep Reaksmey",
//   },
//   {
//     id: 5,
//     img: "https://m.media-amazon.com/images/I/71ZN3CI-esL.jpg",
//     title: "HTML & CSS",
//     subtitle:
//       "HTML is a markup language used to create static web pages and web applications. CSS is a style sheet language responsible for the presentation of documents written in a markup language. This is the best book for begginer to learn.",
//     rating: 4,
//     publish_date: "24 November 2021",
//     publisher: "NUBB",
//     language: "English",
//     author: "Sorm Rafat",
//   },
//   {
//     id: 6,
//     img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/d/h/g/php-programming-the-complete-guide-2022-original-imagh4wmmbxh8fpy.jpeg?q=90&crop=false ",
//     title: "PHP",
//     subtitle: "This is the best book for learning PHP",
//     rating: 4.5,
//   },
//   {
//     id: 7,
//     img: "https://sanet.pics/storage-5/1019/Ricn0momb33y0H5oUtsWonsKKQba3ciU.jpg",
//     title: "C#",
//     subtitle: "This is the best book for learning C#",
//     rating: 4,
//   },
//   {
//     id: 8,
//     img: "https://www.flutterengineering.io/bookcover_isbn.png",
//     title: "Flutter",
//     subtitle: "This is the best book for learning Flutter",
//     rating: 3,
//   },
//   {
//     id: 9,
//     img: "https://www.english-efl.com/wp-content/uploads/2019/02/intermediate-english-grammar.png",
//     title: "Grammar",
//     subtitle: "This is the best book for learning Grammar",
//     rating: 2,
//   },
//   {
//     id: 10,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyRwXp8dnJ9FD9or-VXGIwz0-Hnv-sgQUfxgyqKJiRY_CtlC5ZebqLaVsUktXjrCCfxbw&usqp=CAU",
//     title: "Mindset",
//     subtitle: "This is the best book for learning Grammar",
//     rating: 4,
//   },
//   {
//     id: 11,
//     img: "https://rukminim2.flixcart.com/image/750/900/l51d30w0/book/c/z/q/c-programming-language-comprehensive-book-2022-original-imagfsqwmhyepk7n.jpeg?q=20&crop=false",
//     title: "C pro",
//     subtitle: "This is the best book for learning C programming language",
//     rating: 3,
//   },
//   {
//     id: 12,
//     img: "https://learnenglishwithcamille.com/wp-content/uploads/2022/08/101-real-life-english-conversations-cover-1.png",
//     title: "Coversation",
//     subtitle: "This is the best book for learning conversation",
//     rating: 4.5,
//   },
//   {
//     id: 13,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQltH0uttmTnsPFOb91S41rn-ZdehvVY-77BeJshQYkyQ&s",
//     title: "Law",
//     subtitle: "This is the best book for learning conversation",
//     rating: 4.5,
//   },
// ]);
const findId = ref({});
const detailFuction = (id) => {
  dialog.value = true;
  (findId.value = bookItem.value.find((b) => b.id == id)),
    console.log(findId.value);
};
console.log(search.value);
</script>
<template>
  <div>
    <div>
      <v-row class="align-center">
        <v-col cols="12" md="6">
          <v-card :variant="flat - 0">
            <v-card-title class="text-h5 d-flex align-center">
              {{ $t("message.AllBook") }}
            </v-card-title>
            <v-card-subtitle class="text-subtitle">
              U can read our book right here. Learn Earn Fuck
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model.trim="search"
            append-inner-icon="mdi-magnify"
            density="compact"
            :label="$t('message.Search')"
            variant="solo"
            hide-details
            single-line
          ></v-text-field>
        </v-col>

        <!-- choose type of book -->
        <v-col cols="auto" md="2">
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn color="primary" v-bind="props">{{
                $t("message.SelectType")
              }}</v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                :value="index"
                @click="selectBook(item.title)"
              >
                <v-list-item-title>{{
                  $t(`message.${item.title}`)
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <!-- <v-col cols="auto" md="2">
          <v-btn flat color="success">
            <v-icon>mdi-book</v-icon>
            AddBook
          </v-btn>
        </v-col> -->
        <v-divider> </v-divider>
      </v-row>

      <v-dialog v-model="dialog" max-width="980" class="pa-6" scroll-strategy="block">
        <div class="scrollable-content " >
          <v-row class="bg-white rounded-lg">
          <v-col cols="12" md="5">
            <v-card flat>
              <v-img :src="findId.img" height="350"></v-img>
            </v-card>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols="12" md="7">
            <v-card flat>
              <v-card-title>
                <p
                  style="font-family: Noto Serif; font-weight: bold"
                  class="text-h4"
                >
                  {{ findId.title }}
                </p>
              </v-card-title>
              <!-- <v-card-subtitle>
                {{ findId.subtitle }}
              </v-card-subtitle> -->
              <v-card-text>
                <p class="text-h6 text-primary">{{ findId.author }}</p>
                <v-rating
                  :model-value="findId.rating"
                  color="amber"
                  density="compact"
                  size="small"
                  half-increments
                  readonly
                ></v-rating>
                <v-row class="text-center mt-2">
                  <v-col cols="6" md="6">
                    <v-card variant="outlined">
                      <v-card-text class="text-body-1">
                        Publisher Date <br />
                        <span class="text-primary font-weight-bold">{{
                          findId.publish_date
                        }}</span>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="6" md="6">
                    <v-card variant="outlined">
                      <v-card-text class="text-body-1">
                        Publisher<br />
                        <span class="text-primary font-weight-bold">{{
                          findId.publisher
                        }}</span>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="6" md="6">
                    <v-card variant="outlined">
                      <v-card-text class="text-body-1">
                        Language <br />
                        <span class="text-primary font-weight-bold">{{
                          findId.language
                        }}</span>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="6" md="6">
                    <v-card variant="outlined">
                      <v-card-text class="text-body-1">
                        Author <br />
                        <span class="text-primary font-weight-bold">{{
                          findId.author
                        }}</span>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-text class="text-body-2 text-grey">
                {{ findId.subtitle }}
              </v-card-text>
              <template v-slot:actions>
                <a :href="findId.link" target="_blank">
                  <v-btn class="mt-5 bg-green"> {{$t('message.ReadMore')}} </v-btn>
                </a>

                <v-btn
                  class="ms-auto mt-5 bg-red"
                  @click="dialog = false"
                >{{$t('message.Exit')}}</v-btn>
              </template>
            </v-card>
          </v-col>
        </v-row>
        </div>
       
      </v-dialog>

      <v-row>
        <v-col
          cols="12"
          md="4"
          lg="3"
          v-for="item in bookItem"
          :key="bookItem.id"
        >
          <v-card flat>
            <v-img :src="item.img" height="300"> </v-img>
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
                    {{$t('message.Detail')}}
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style>
.scrollable-content {
  max-height: 90vh; /* Adjust the max-height to fit your needs */
  overflow-y: auto;
}
</style>
