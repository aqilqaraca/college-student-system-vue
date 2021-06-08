<template>
    <div class="form_block shadow px-4 py-4">
        <h4 v-if="showCorrect" :class="correct ? 'text-success' : 'text-danger'">{{correct ? "everything is true. you will be redirected to the home page" : "password or email is incorrect. check again"}}</h4>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" v-model="emailValue">
            </div>
            <div class="form-group py-3">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="passwordValue">
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary" @click="login">Login</button>
        </form>
        <div class="create">
            <router-link to="/createaccount" class="create">
            or Create Account
        </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            emailValue : "",
            passwordValue : "",
            var : [],
            correct : null,
            showCorrect : false
        }
    },
    methods : {
        login(e){
            e.preventDefault()
            var a = this.$store.getters.getStudents
            a.filter(n=>{
            this.var.push(n.email==this.emailValue && n.password == this.passwordValue)})
            this.showCorrect = true
            this.correct = this.var.includes(true)
            this.$store.commit("setCorrect",this.correct)
            var arr = [{id :1 ,name : 'Aqil'},{id :3,name : 'Elsen'}]
            var name = a.filter(n=>n.email == this.emailValue)
            if(this.correct){
                this.$store.commit("setCorrectUser",{email : this.emailValue,password : this.passwordValue})
                this.$store.commit("setCorrectName",{name : name[0].name})
                sessionStorage.setItem('correctName',name[0].name)
                setTimeout(()=>{
                    this.$router.push('/')
                    location.reload()
                },2000)
            }
        }
        

    },
    created(){
        sessionStorage.removeItem('correctName')
    },
    mounted(){
        this.$store.commit("getAccounts")
    }
}
</script>

<style scoped>
.form_block{
    width: 400px;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,30%);
    height: 340px;
}
.create{
    text-align: center;
}
@media (max-width : 767px) {
    .form_block {
        width: 90%;
    }
}
</style>