<template>
    <div id="main">
        <Navbar />
<!--        <Sidebar :show="sidebar" v-model="sidebar" />-->
        <div class="white-space"></div>
        <Header  />
        <Clients />
        <Teasers  />
        <iframe src="https://yandex.ru/map-widget/v1/-/COx7YN8v" style="width: 100%; height: 500px; border: 0"></iframe>
        <Form />
        <Footer />
    </div>
</template>

<script>
    import Navbar from "@/components/Navbar/Navbar";
    import Header from "@/components/Header/Header";
    import Clients from "@/components/Clients/Clients";
    import Teasers from "@/components/Teasers/Teasers";
    import Form from "@/components/Form/Form";
    import Footer from "@/components/Footer/Footer";
    // import Sidebar from "@/components/Sidebar/Sidebar";
    export default {
        name: "Main",
        components: {Footer, Teasers, Clients, Header, Navbar, Form},
    }
</script>

<style lang="scss" src="./Main.scss" scoped/>