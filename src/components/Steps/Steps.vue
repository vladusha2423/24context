<template>
    <div id="steps">
        <Title text="Как это работает" />
        <div class="steps">
            <div class="steps-point"
                 v-for="(item, i) in steps"
                 :key="i"
                 v-onscroll
            >
                <img :src="item.icon"
                     :alt="'step' + i"
                     class="steps-point-icon"/>
                <div class="steps-point-text">
                    <div class="steps-point-text-title">
                        {{ item.title }}
                    </div>
                    <div class="steps-point-text-paragraph">
                        {{ item.text }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Title from "../UI/Title/Title";
    export default {
        name: "Steps",
        components: {Title},
        data(){
            return {
                steps: [
                    {
                        icon: require('../../assets/images/how-1.svg'),
                        title: 'Сбор данных',
                        text: 'Сейчас сбор данных реализован с помощью водителей через мобильное приложение. Каждый день заполнятся отчеты о поездках и возможных неисправностях в работе машины. ',
                    },
                    {
                        icon: require('../../assets/images/how-2.svg'),
                        title: 'Анализ данных',
                        text: 'Данные по текущему техническому состоянию парка обрабатываются, выявляются наиболее критичные проблемы, которым необходимо немедленное обслуживание и ремонт. ',
                    },
                    {
                        icon: require('../../assets/images/how-3.svg'),
                        title: 'Ремонт проблемных участков',
                        text: 'Выполняется ремонт неисправностей в порядке приоритета для следующего выхода на линию. Решение прнимается не по наитию, а на основе данных, чтобы общие затраты по парку были минимальными.',
                    },
                    {
                        icon: require('../../assets/images/how-4.svg'),
                        title: 'Экономия на обслуживании',
                        text: 'После внедрения системы в ее конечной версии (сейчас в разработке) снижение расходов на техническое обслуживание парка составит до 20% от текущих показателей бизнеса.',
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" src="./Steps.scss" scoped/>