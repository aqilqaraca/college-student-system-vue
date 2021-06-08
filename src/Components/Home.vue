<template>
    <div class="row">
        <div class="col-xl-4 col-12">
					<div class="box my-4 shadow">
						<div class="box-header with-border">
							<h4 class="box-title">Home Work Todo</h4>
						</div>
						<div class="box-body">
						  <div class="media-list media-list-hover">

							<a class="media media-single" >
							  <h4 class="time text-gray font-weight-500">10 : 15</h4>
							  <div class="media-body pl-15 bl-5 rounded border-primary">
								<p :style="line ? 'text-decoration: line-through;' : null">HW U4 L3</p>
								    <span>{{nameThis}}</span>
							  </div>
                              <button @click="line = !line" class="complete btn btn-danger">{{!line ? 'Completed' : 'Uncompleted'}}</button>
							</a>
							<a v-for="(todo,index) in todos" :key="index" class="media media-single" >
							  <h4 class="time text-gray font-weight-500">{{todo.time}}</h4>
							  <div class="media-body pl-15 bl-5 rounded border-primary">
								<p :class="'todo'+index">{{todo.title}}</p>
								    <span>{{todo.name}}</span>
							  </div>
                              <button @click="todoDecaration(index)" :class="'completeBtn'+index" class="complete btn btn-danger">Completed</button>
							</a>

						  </div>
						</div>
                        <p style="color : green" class="text-center" v-if="showWork">please refresh the site</p>
                        <input type="text" class="form-group work-input" placeholder="add work..." v-model="work"/>
                        <button class="add btn btn-primary" @click="addWork">Add Work</button>
					</div>
		</div>
        <div class="col-xl-4 col-12">
					<div class="box my-4 no-shadow mb-0 bg-transparent">
						<div class="box-header no-border">
							<h4 class="box-title">Essay Reviews</h4>		
						</div>
					</div>
					<div>
						<div class="box mb-15 pull-up">
							<div class="box-body">
								<div class="d-flex align-items-center justify-content-between">
									<div class="d-flex align-items-center">
										<div class="mr-15 essay bg-warning h-50 l-h-60 rounded text-center">
											<i class="fas fa-book-reader"></i>
										</div>
										<div class="d-flex flex-column font-weight-500">
											<a href="#" class="text-dark hover-primary mb-1 font-size-16">B1 UNIT 3A</a>
											<span class="text-fade">source name</span>
										</div>
									</div>
									<a href="#">
										<i class="fas fa-arrow-right"></i>
									</a>
								</div>
							</div>
						</div>
						<div class="box mb-15 pull-up">
							<div class="box-body">
								<div class="d-flex align-items-center justify-content-between">
									<div class="d-flex align-items-center">
										<div class="mr-15 essay bg-primary h-50 l-h-60 rounded text-center">
											<i class="fas fa-book-reader"></i>
										</div>
										<div class="d-flex flex-column font-weight-500">
											<a href="#" class="text-dark hover-primary mb-1 font-size-16">B1 UNIT 1A</a>
											<span class="text-fade">source name</span>
										</div>
									</div>
									<a href="#">
										<i class="fas fa-arrow-right"></i>
									</a>
								</div>
							</div>
						</div>
						<div class="box mb-15 pull-up">
							<div class="box-body">
								<div class="d-flex align-items-center justify-content-between">
									<div class="d-flex align-items-center">
										<div class="mr-15 essay bg-danger h-50 l-h-60 rounded text-center">
											<i class="fas fa-book-reader"></i>
										</div>
										<div class="d-flex flex-column font-weight-500">
											<a href="#" class="text-dark hover-primary mb-1 font-size-16">B1 + UNIT 3A</a>
											<span class="text-fade">source name</span>
										</div>
									</div>
									<a href="#">
										<i class="fas fa-arrow-right"></i>
									</a>
								</div>
							</div>
						</div>
						<div class="text-center pull-up">
							<a href="#" class="view-all btn btn-block btn-primary-light">View all</a>
						</div>
					</div>
		</div>
        <div class="col-xl-4 col-12">
					<div class="box my-4 no-shadow mb-0 bg-transparent">
						<div class="box-header no-border">
							<h4 class="box-title">Speaking Reviews</h4>		
						</div>
					</div>
					<div>
						<div class="box mb-15 pull-up">
							<div class="box-body">
								<div class="d-flex align-items-center justify-content-between">
									<div class="d-flex align-items-center">
										<div class="mr-15 essay bg-warning h-50 l-h-60 rounded text-center">
											<i class="fas fa-microphone"></i>
										</div>
										<div class="d-flex flex-column font-weight-500">
											<a href="#" class="text-dark hover-primary mb-1 font-size-16">B2 UNIT 3A</a>
											<span class="text-fade">source name</span>
										</div>
									</div>
									<a href="#">
										<i class="fas fa-arrow-right"></i>
									</a>
								</div>
							</div>
						</div>
						<div class="box mb-15 pull-up">
							<div class="box-body">
								<div class="d-flex align-items-center justify-content-between">
									<div class="d-flex align-items-center">
										<div class="mr-15 essay bg-primary h-50 l-h-60 rounded text-center">
											<i class="fas fa-microphone"></i>
										</div>
										<div class="d-flex flex-column font-weight-500">
											<a href="#" class="text-dark hover-primary mb-1 font-size-16">B2 UNIT 1A</a>
											<span class="text-fade">source name</span>
										</div>
									</div>
									<a href="#">
										<i class="fas fa-arrow-right"></i>
									</a>
								</div>
							</div>
						</div>
						<div class="box mb-15 pull-up">
							<div class="box-body">
								<div class="d-flex align-items-center justify-content-between">
									<div class="d-flex align-items-center">
										<div class="mr-15 essay bg-danger h-50 l-h-60 rounded text-center">
											<i class="fas fa-microphone"></i>
										</div>
										<div class="d-flex flex-column font-weight-500">
											<a href="#" class="text-dark hover-primary mb-1 font-size-16">B2 + UNIT 3A</a>
											<span class="text-fade">source name</span>
										</div>
									</div>
									<a href="#">
										<i class="fas fa-arrow-right"></i>
									</a>
								</div>
							</div>
						</div>
						<div class="text-center pull-up">
							<a href="#" class="view-all btn btn-block btn-primary-light">View all</a>
						</div>
					</div>
		</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            work : "",
            showWork : false,
            line : false,
            decorate : false
        }
    },
    methods : {
        addWork(){
                this.$store.commit("createTodo",{time : this.work,time : new Date().getHours()+':'+new Date().getMinutes(),title : this.work ,
                name : this.nameThis
                })
                    this.showWork = true
                setTimeout(()=>{
                    this.showWork = false
                },2000)
                this.work = ""
                location.reload()
                //:style="line ? 'text-decoration: line-through;' : null"
            
        },
        todoDecaration(val){
            this.decorate = !this.decorate
            var pdecorate = document.querySelector(`.todo`+val)
            var btndecorate = document.querySelector(`.completeBtn`+val)
            if(this.decorate){
                pdecorate.style.textDecoration = "line-through"
                btndecorate.innerHTML = "Uncompleted"
            }
            else{
                pdecorate.style.textDecoration = ""
                btndecorate.innerHTML = "Completed"
            }
        }
    },
    computed : {
        todos(){
            return this.$store.getters.getTodos
        },
        nameThis(){
        return sessionStorage.getItem('correctName')
    }
    },created(){
        this.$store.commit("getTodo")
    },
    
}
</script>

<style scoped>
.box{
    position: relative;
    margin-bottom: 30px;
    width: 100%;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 0px;
    -webkit-transition: .5s;
    transition: .5s;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-shadow: 0 0 30px 0 rgb(82 63 105 / 5%);
    box-shadow: 0 0 30px 0 rgb(82 63 105 / 5%);
}
.box-header.with-border {
    border-bottom-width: 1px;
    border-bottom-style: solid;
}
.box-header {
    color: #1e398f;
    display: block;
    padding: 1.5rem 1.5rem;
    position: relative;
    border-bottom: 1px solid rgba(72, 94, 144, 0.16);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.box-header .box-title {
    display: inline-block;
    margin: 0;
    font-weight: 400;
}
.box.box.pull-up{
    padding: 15px 10px;
}
.box.pull-up:hover{
    transform: translateY(-4px) scale(1.02);
    -webkit-box-shadow: 0 14px 24px rgb(0 0 0 / 20%);
    box-shadow: 0 14px 24px rgb(0 0 0 / 20%);
    z-index: 999;
}
.essay{
    width: 45px;
    height: 45px!important;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color : #fff;
    margin: 0 10px;
}
.view-all{
    background: #1e398f;
    color: #fff;
    width: 100%;
    transition: 0.3s;
}
.view-all:hover{
    transform: translateY(-4px) scale(1.02);
    -webkit-box-shadow: 0 14px 24px rgb(0 0 0 / 20%);
    box-shadow: 0 14px 24px rgb(0 0 0 / 20%);
    z-index: 999;
}
.media{
    display: flex;
    align-items: center;
    margin: 20px 0;
}
.media-body p{
    margin-bottom: 0;
    color: #ee7100 ;
}
.media-body span{
    color :#7e8299;
}
.time{
    margin: 0 20px;
    color: #1e398f;
}
.work-input{
    border-radius: 0.25rem;
    border: 2px solid #1e398f;
    margin: 5px 0;
    padding: 10px 5px;
}
.complete{
    position: absolute;
    right: 15px;
    background: #ee7100;
    border: 1px solid #ee7100;
}
.add{
    background: #1e398f;
    border: 1px solid #1e398f;
}


</style>