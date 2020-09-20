<template>
    <div>
        <nav class="nav">
            <div class="nav-container">
                <div class="nav-logo-bars">
                    <!--                <Icon icon="bars" v-if="width <= 820"/>-->
                    <v-btn v-if="width <= 820"
                           class="mx-2 nav-bars"
                           large
                           icon
                           color="#B8D900"
                           @click.stop="drawer = !drawer">
                        <Icon class="nav-bars-icon"
                              icon="bars"
                              v-if="width <= 820"/>
                    </v-btn>
                    <img v-if="width > 400"
                         src="../../assets/images/logo-with-title.png"
                         alt="logo"
                         @click="redirect('/')"
                         class="nav-logo">
                    <img v-if="width <= 400"
                         src="../../assets/images/logo.png"
                         alt="logo"
                         @click="redirect('/')"
                         class="nav-logo">
                </div>
                <v-btn v-if="width > 820" class="nav-button">Заказать звонок</v-btn>
                <v-btn v-if="width <= 820" class="mx-2" fab dark small color="#FFBB00">
                    <v-icon dark>mdi-phone</v-icon>
                </v-btn>
            </div>
            <div class="nav-menu" v-if="width >= 820">
                <div class="nav-menu-container">
                    <template v-for="(point, i) in menu"
                              class="nav-menu-point">
                        <v-btn
                                color="white"
                                height="40px"
                                text
                                small
                                :key="i"
                                v-if="i !== menu.length - 1"
                                class="nav-menu-point"
                                @click.stop="redirect(point.link)"
                        >
                            {{point.title}}
                        </v-btn>
                        <v-btn
                                color="white"
                                height="40px"
                                text
                                small
                                :key="i"
                                v-else
                                class="nav-menu-point nav-menu-point-last"
                                @click.stop="redirect(point.link)"
                        >
                            {{point.title}}
                        </v-btn>
                    </template>

                </div>
            </div>
        </nav>
        <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
                style="z-index: 110; height: 100vh; position: fixed;"
        >
            <div class="sidebar">
                <div class="sidebar-logo">
                    <v-list-item-group
                            active-class="text--accent-4"
                            color="#DAEC76"
                    >
                        <v-list-item>
                            <v-list-item-title
                                    @click="redirect('/')"
                                    class="text-center">
                                <img src="../../assets/images/logo-with-title.png"
                                     alt="Logo"
                                     style="width: 90%; margin-top: 15px; margin-bottom: 15px;"
                                >
                            </v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>

                </div>
                <div class="sidebar-menu">
                    <v-list-item-group
                            active-class="text--accent-4"
                            color="#DAEC76"
                    >
                        <v-list-item v-for="(point, i) in menu"
                                     :key="i"
                                     @click.stop="redirect(point.link)">
                            <v-list-item-title class="text-center">
                                {{ point.title }}
                            </v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </div>
                <div class="sidebar-footer" style="width: 90%">
                    <div v-for="(point, i) in contacts" :key="i"
                         class="footer-content-contacts-point">
                        <Icon v-if="point.icon" :icon="point.icon"/> {{point.text}}
                    </div>
                </div>
            </div>

        </v-navigation-drawer>
    </div>

</template>

<script>
    export default {
        name: "Navbar",
        data(){
            return{
                width: Number,
                height: Number,
                drawer: null,
                items: [
                    { title: 'Home', icon: 'dashboard' },
                    { title: 'About', icon: 'question_answer' },
                ],
                menu: [
                    {
                        title: 'О компании',
                        link: '/about',
                    },
                    {
                        title: 'Для автобусов',
                        link: '/bus',
                    },
                    {
                        title: 'Для такси',
                        link: '/taxi',
                    },
                    {
                        title: 'IT-платформа',
                        link: '/it',
                    },
                    {
                        title: 'Контакты',
                        link: '/contacts',
                    },
                ],
                contacts: [
                    {
                        icon: 'map-marker-alt',
                        text: 'Ярославль, Белинского 28а, офис 306'
                    },
                    {
                        icon: 'clock',
                        text: 'Пн-Вс 10:00-20:00'
                    },
                    {
                        icon: 'envelope',
                        text: 'info@ks-yar.ru'
                    },
                    {
                        icon: 'phone',
                        text: '+7 (910) 978 95 99'
                    },
                    {
                        icon: '',
                        text: '+7 (910) 662 43 61'
                    },
                ]
            }
        },
        methods: {
            updateSize: function(){
                this.width = window.innerWidth;
                this.height = window.innerHeight;
            },
            redirect: function(path){
                window.scrollTo(0,0);
                this.$router.push(path);
            }
        },
        created(){
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            window.addEventListener('resize', this.updateSize);
        }
    }
</script>

<style lang="scss" src="./Navbar.scss" scoped/>