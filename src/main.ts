import { createApp } from "vue";
import Varlet from "@varlet/ui";
import App from "./App.vue";
import router from "./router";
import "@varlet/ui/es/style";

const app = createApp(App);

app.use(router);
app.use(Varlet);
app.mount("#app");
