<template>
    <div class="form_block shadow px-4 py-4">
        <h4 v-if="complete" style="color : green">Registration completed. You will be redirected to the login page</h4>
        <h4 v-if="emailVar" style="color : red">There is this email in the database</h4>
        <form>
            <div class="form-group ">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" @blur="$v.createNameValue.$touch()" :class="{'is-invalid' : $v.createNameValue.$error}" class="form-control " id="exampleInputName1" placeholder="Enter name" v-model="createNameValue">
                <p>email length must be greater than 4</p>
            </div>
            <div class="form-group ">
                <label for="exampleInputEmail1">Email address</label>
                <input type="text" @blur="$v.createEmailValue.$touch()" :class="{'is-invalid' : $v.createEmailValue.$error}" class="form-control " id="exampleInputEmail1" placeholder="Enter email" v-model="createEmailValue">
                <p>email length must be greater than 10</p>
            </div>
            <div class="form-group form-group--error">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" @blur="$v.createPasswordValue.$touch()" :class="{'is-invalid' : $v.createPasswordValue.$error}" class="form-control form-group--error" id="exampleInputPassword1" placeholder="Password" v-model="createPasswordValue">
                <p>password length must be greater than 6</p>
            </div>
            <button :disabled="$v.createEmailValue.$error || !disabledButton"  type="submit" class="btn btn-primary" @click="createAccount">Create</button>
        </form>
    </div>
</template>

<script>
import { required, minLength, between,email } from 'vuelidate/lib/validators'
export default {
    data(){
        return{
            createEmailValue : "",
            createPasswordValue : "",
            createNameValue : "",
            complete : false,
            var : [],
            emailVar : null
        }
    },
    methods : {
        createAccount(e){
            e.preventDefault()
            var email = this.createEmailValue
            var password = this.createPasswordValue
            var name = this.createNameValue
            var a = this.$store.getters.getStudents
            a.filter(n=>this.var.push(n.email == this.createEmailValue))
            if(this.var.includes(true)){
                this.emailVar = true
                this.var = []
                setTimeout(()=>{
                    this.emailVar = false
                },2000)
                
                return
            }
            this.$store.commit("createAccount",{email,password,name})
            this.complete = true
            setTimeout(()=>{
                this.$router.push('/login')
            },2000)
        }
    },
    computed : {
        disabledButton(){
            if(this.createEmailValue.length <=10 || this.createPasswordValue.length <= 6 || this.createNameValue <=4){
                return false
            }
            else{
                return true
            }
        },
    },
    created(){
        this.$store.commit("getAccounts")
    },
    
    validations: {
        createEmailValue : {
            required,
            email
        },
    createPasswordValue: {
      required,
      minLength: minLength(6)
    },
    createNameValue : {
        required,
        minLength : minLength(4)
    }
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
    transform: translate(-50%,15%);
    height: auto;
}
.create{
    cursor: pointer;
}
@media (max-width : 767px) {
    .form_block {
        width: 90%;
    }
    
}
</style>