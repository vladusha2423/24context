<template>
    <div id="teasers">
        <div class="teasers">
            <div v-for="(teaser, i) in teasers"
                 :key="i"
                 :style="teaser.animation"
                 v-onscroll
                 class="teasers-point">
                <img class="teasers-point-icon" :src="teaser.icon" :alt="teaser.title">
                <div class="teasers-point-title">{{ teaser.title }}</div>
                <div class="teasers-point-text">{{ teaser.text }}</div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Teasers",
        props: {
            show: Boolean,
        },
        data(){
            return {
                teasers: [
                    {
                        title: 'Гарантия качества',
                        text: 'У нас работают только квалифицированные специалисты',
                        icon: require('../../assets/images/teaser1.svg'),
                        animation: 'left: -50px; opacity: 0;'
                    },
                    {
                        title: 'Широкий профиль',
                        text: 'Выбирайте самые разные услуги - от ремонта двигателя до замены стекол',
                        icon: require('../../assets/images/teaser2.svg'),
                        animation: 'left: -50px; opacity: 0;'
                    },
                    {
                        title: 'Оперативность',
                        text: 'Придем на помощь в кратчайшие сроки',
                        icon: require('../../assets/images/teaser3.svg'),
                        animation: 'left: -50px; opacity: 0;'
                    },
                    {
                        title: 'Честность',
                        text: 'Рассчитываем цену в соответствии с запросом, делая ваш счет таким, какой он должен быть на самом деле',
                        icon: require('../../assets/images/teaser4.svg'),
                        animation: 'left: -50px; opacity: 0;'
                    },
                ]
            }
        },
        watch: {
            show: function(){
                this.showAnimation(0, this.teasers);
            }
        },
        methods: {
            showAnimation: function(i, arr){
                console.log(i);
                if(i < arr.length) {
                    arr[i].animation = 'left: 0; opacity: 1;';
                    i++;
                    console.log(this);
                    let f = this.showAnimation;
                    setTimeout(function(){f(i, arr)}, 300);
                }
            }
        }
    }
</script>

<style lang="scss" src="./Teasers.scss" scoped/>