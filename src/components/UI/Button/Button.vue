<template>
    <v-btn class="button">{{ title }}</v-btn>
</template>

<script>
    export default {
        name: "Button",
        props: {
            title: String,
        }
    }
</script>

<style lang="scss" src="./Button.scss" scoped/>