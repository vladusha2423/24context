<template>
    <div id="banner" :style="backgroundStyle">
        <div class="banner-content simple" v-onscroll>
            <div class="banner-content-title">{{title}}</div>
            <div class="banner-content-text">{{text}}</div>
            <Button v-if="button"
                    class="banner-content-button"
                    title="Подробнее"
            />
        </div>
    </div>
</template>

<script>
    import Button from "@/components/UI/Button/Button";
    export default {
        name: "Banner",
        components: {Button},
        props: {
            title: String,
            text: String,
            button: Boolean,
            photo: String,
        },
        data(){
            return {

            }
        },
        computed: {
            backgroundStyle(){
                if(this.photo)
                    return 'background: linear-gradient(rgba(184,217,0,0.6) 0%, rgba(184,217,0,0.6) 100%), url(' +
                        this.photo + ') center center;' +
                        'background-size: cover;';
                else
                    return 'background: rgba(184,217,0,0.6);';

            }
        }
    }
</script>

<style lang="scss" src="./Banner.scss" scoped/>