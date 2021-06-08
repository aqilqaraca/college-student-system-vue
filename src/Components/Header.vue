<template>
    <div>
            <div v-if="showNav" class="content">
                <header class="header" id="header">
                
                <span>{{correctUser}}</span>
                <a class="d-md-none d-flex align-items-center"> 
                            <i @click="showMenu" :class="hide ? 'bx bx-menu' : 'bx bx-x'" class='nav_logo-icon' style="color : #212529; font-size : 30px"></i> 
                            <span class="nav_logo-name" style="color : #212529"><span style="font-size:25px">CELT</span>English</span> 
                        </a>
            </header>
            <div :style="hide ? {width : menuWidth + '%'} : null" class="l-navbar d-none d-md-block" id="nav-bar">
                <nav class="nav">
                    <div> 
                        <a class="nav_logo"> 
                            <i @click="showMenu" :class="hide ? 'bx bx-arrow-back' : 'bx bx-layer'" class='nav_logo-icon'></i> 
                            <span class="nav_logo-name"><span style="font-size:25px">CELT</span>English</span> 
                        </a>
                        <div class="nav_list" > 
                            <router-link to="/" exact class="nav_link" active-class="active">
                                <i  class='bx bx-grid-alt nav_icon'></i> 
                                <span class="nav_name">Dashboard</span> 
                            </router-link>
                            <router-link to="/dashboard2" exact class="nav_link" active-class="active">
                                <i  class='bx bx-grid-alt nav_icon'></i> 
                                <span class="nav_name">Dashboard 2</span> 
                            </router-link>
                            <router-link to="/result" class="nav_link" active-class="active">
                                <i class='bx bx-bar-chart-alt-2 nav_icon'></i> 
                                <span class="nav_name">Results</span> 
                            </router-link>
                            <router-link to="/speaking" class="nav_link" active-class="active">
                            <i class='bx bxs-microphone nav_icon'></i> 
                                <span class="nav_name">Speaking</span> 
                            </router-link>
                        </div>
                    </div> 
                    <router-link to="/login" class="nav_link">
                    <i class='bx bx-log-out nav_icon'>
                    </i> <span class="nav_name">SignOut</span> 
                    </router-link>
                </nav>
            </div>
            
            <div :style="hide ? {right : rihgtM + '%'} : null" class="l-navbar d-md-none" id="nav-bar" style="right : 0;">
                <nav class="nav">
                    <div> 
                        <div class="nav_list" > 
                            <router-link to="/" exact class="nav_link" active-class="active">
                                <i  class='bx bx-grid-alt nav_icon'></i> 
                                <span class="nav_name">Dashboard</span> 
                            </router-link>
                            <router-link to="/dashboard2" exact class="nav_link" active-class="active">
                                <i  class='bx bx-grid-alt nav_icon'></i> 
                                <span class="nav_name">Dashboard 2</span> 
                            </router-link>
                            <router-link to="/result" class="nav_link" active-class="active">
                                <i class='bx bx-bar-chart-alt-2 nav_icon'></i> 
                                <span class="nav_name">Results</span> 
                            </router-link>
                            <router-link to="/speaking" class="nav_link" active-class="active">
                            <i class='bx bxs-microphone nav_icon'></i> 
                                <span class="nav_name">Speaking</span> 
                            </router-link>
                        </div>
                    </div> 
                    <router-link to="/login" class="nav_link">
                    <i class='bx bx-log-out nav_icon'>
                    </i> <span class="nav_name">SignOut</span> 
                    </router-link>
                </nav>
            </div>
            </div>
            <!--Container Main start-->
    </div>
</template>

<script>
export default {
    data(){
        return{
            hide : false,
            menuWidth : 25,
            rihgtM : -25,
            showNavigation : false
        }
    },
    methods : {
        showMenu(){
            this.hide = !this.hide
        }
    },
    computed : {
        showNav(){
            if(this.$route.path === '/login' || this.$route.path === '/createaccount'){
                return false
            }
            else{
                return true
            }
        },
        correctUser(){
            if(sessionStorage.getItem('correctName')){
                return sessionStorage.getItem('correctName')
            }
            
        }
    },
    created(){
        if(!sessionStorage.getItem('correctName')){
            this.$router.push('/login')
        }
    },
}
</script>

<style scoped>
    .side__menu{
        min-height: 100vh;
        width: 65px;
        background: #fff;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        transition: 0.4s;
    }
    ul{
        padding-left:0;
    }
    .list__item{
        padding-top: 30px;
        padding-left: 20px;
        font-size: 22px;
        line-height: 22px;
        color: #1e398f;
        cursor: pointer;
        display: flex;
    }
    li span{
    padding-left: 10px;
    font-weight: 400;
    color: #ee7100;
    font-size: 20px;
    position: relative;
    white-space: nowrap;
    }
</style>