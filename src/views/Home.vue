<template>
<div>
  <v-container>
    <div>
      <Header />
    </div>
    <div class="pt-4">  
      <Content/>
    </div>
  </v-container>
</div>
</template>

<script>
import Header from "../components/Header";
import Content from "../components/Content";
export default {
  name: "Home",
  components: {
    Header,Content
  },
};
</script>
