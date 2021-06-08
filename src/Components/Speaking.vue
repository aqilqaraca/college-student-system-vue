<template>
  <div class="content">
    <div class="row">
      <div @click="speaking" class="col-xl-4 col-12">
        <div class="box pull-up my-4">
          <div class="box-body text-center">
            <div class="icon"><i class="dashIcon fas fa-microphone"></i></div>
            <h4>CELT ENGLISH 1A</h4>
          </div>
          <div class="middle">
            <div class="text">Start recording</div>
          </div>
        </div>

      </div>
      <div @click="speaking" class="col-xl-4 col-12">
        <div class="box pull-up my-4">
          <div class="box-body text-center">
            <div class="icon"><i class="dashIcon fas fa-microphone"></i></div>
            <h4>CELT ENGLISH 2A</h4>
          </div>
          <div class="middle">
            <div class="text">Start recording</div>
          </div>
        </div>
      </div>
      <div @click="speaking" class="col-xl-4 col-12">
        <div class="box pull-up my-4">
          <div class="box-body text-center">
            <div class="icon"><i class="dashIcon fas fa-microphone"></i></div>
            <h4>CELT ENGLISH 3A</h4>
          </div>
          <div class="middle">
            <div class="text">Start recording</div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div @click="speaking" class="col-xl-4 col-12">
        <div class="box pull-up my-4">
          <div class="box-body text-center">
            <div class="icon"><i class="dashIcon fas fa-microphone"></i></div>
            <h4>CELT ENGLISH 1B</h4>
          </div>
          <div class="middle">
            <div class="text">Start recording</div>
          </div>
        </div>
      </div>
      <div @click="speaking" class="col-xl-4 col-12">
        <div class="box pull-up my-4">
          <div class="box-body text-center">
            <div class="icon"><i class="dashIcon fas fa-microphone"></i></div>
            <h4>CELT ENGLISH 2B</h4>
          </div>
          <div class="middle">
            <div class="text">Start recording</div>
          </div>
        </div>
      </div>
      <div @click="speaking" class="col-xl-4 col-12">
        <div class="box pull-up my-4">
          <div class="box-body text-center">
            <div class="icon"><i class="dashIcon fas fa-microphone"></i></div>
            <h4>CELT ENGLISH 3B</h4>
          </div>
          <div class="middle">
            <div class="text">Start recording</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="speakTopic" class="topic">
      <div class="topic_box shadow px-3 py-3">
        <i @click="speakTopic = false" style="float : right; font-size : 24px; cursor:pointer;"
          class="fas fa-times mx-4 my-4"></i>
        <div class="block-1 d-flex">
          <span>Title  </span>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div class="block-1 d-flex">
          <span>Question  </span>
          <dl>
            <dt>Lorem ipsum dolor sit amet</dt>
            <dd>Lorem ipsum dolor</dd>
            <dd>Lorem ipsum dolor</dd>
            <dd>Lorem ipsum dolor</dd>
          </dl>
        </div>
        <div class="button_block">
          <button class="btn btn-danger">Delete recording</button>
          <button class="btn btn-primary">Save</button>
        </div>
        <div class="recording_list d-flex">
          <details>
          <summary>Record</summary>
          <ul>
            <li>Record 1</li>
            <li>Record 2</li>
            <li>Record 3</li>
            <li>Record 4</li>
            <li>Record 5</li>
            <li>Record 1</li>
            <li>Record 2</li>
            <li>Record 3</li>
            <li>Record 4</li>
            <li>Record 5</li>
          </ul>
        </details>
        <div class="icon d-none d-md-flex" style="width: 55px; height: 55px;"><i class="dashIcon fas fa-microphone"></i></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        speakTopic: false
      }
    },
    methods: {
      speaking() {
        this.speakTopic = !this.speakTopic
      }
    }
  }

</script>

<style scoped>
  .box {
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

  .box-body {
    padding: 1.5rem 1.5rem;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box.pull-up {
    cursor: pointer;
    position: relative;
  }

  .box.pull-up:hover {
    transform: translateY(-4px) scale(1.02);
    -webkit-box-shadow: 0 14px 24px rgb(0 0 0 / 20%);
    box-shadow: 0 14px 24px rgb(0 0 0 / 20%);
    z-index: 999;
  }

  .dash {
    background: #1e398f;
    color: #fff;
    width: 100%;
  }

  h4 {
    padding-left: 20px;
  }

  .dashIcon {
    color: #fff;
    font-size: 26px;
  }

  .icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #1e398f;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .topic {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 10px;
    transform: translate(-50%, -30%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }

  .topic_box {
    width: 600px;
    height: 500px;
    background-color: #fff;
    border-radius: 10px;
    z-index: 100;
    position: relative;
  }

  .button_block {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  .block-1 {
    padding-top: 40px;
  }

  .block-1 span {
    padding-left: 20px;
  }

  .block-1 p {
    padding-left: 70px;
  }

  .block-1 dl {
    padding-left: 40px;
  }

  dd {
    display: list-item;
    margin-left: 20px;
  }

  .content {
    position: relative;
  }

  .middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  .box.pull-up:hover .box-body {
    opacity: 0.3;
  }

  .box.pull-up:hover .middle {
    opacity: 1;
  }

  .text {
    background-color: #ee7100;
    color: white;
    font-size: 16px;
    padding: 16px 32px;
  }
  details {
	position: relative;
	width: 300px;
	margin-right: 1rem;
}

details[open] {
	z-index: 1;
}

summary {
	padding: 1rem;
	cursor: pointer;
	border-radius: 5px;
	background-color: #ddd;
	list-style: none;
  display: flex;
    justify-content: space-between;
    align-items: center;
  margin-left: 20px;
  margin-top: 30px;
}

summary::-webkit-details-marker {
	display: none;
}

details[open] summary:before {
	content: '';
	display: block;
	width: 100vw;
	height: 100vh;
	background: transparent;
	position: fixed;
	top: 0;
	left: 0;
}

summary:after {
	content: '';
	display: inline-block;
	width: .5rem;
	height: .5rem;
	border-bottom: 1px solid currentColor;
	border-left: 1px solid currentColor;
	border-bottom-left-radius: 2px;
	transform: rotate(45deg) translate(50%, 0%);
	transform-origin: center center;
	transition: transform ease-in-out 100ms;
  margin-bottom: 2px;
}

summary:focus {
	outline: none;
}

details[open] summary:after {
	transform: rotate(-45deg) translate(0%, 0%);
}

ul {
	width: 100%;
	background: #ddd;
	position: absolute;
	top: calc(100% + .5rem);
	left: 0;
	padding: 1rem;
	margin: 0;
	box-sizing: border-box;
	border-radius: 5px;
	max-height: 200px;
	overflow-y: auto;
  list-style: none;
}

li {
	margin: 0;
	padding: 1rem 0;
	border-bottom: 1px solid #ccc;
}

li:first-child {
	padding-top: 0;
}

li:last-child {
	padding-bottom: 0;
	border-bottom: none;
}

/* FAKE SELECT */

summary.radios {
	counter-reset: radios;
}


ul.list {
	counter-reset: labels;
}



.recording_list{
  position: relative;
}
.recording_list .icon{
  position: absolute;
  bottom: 0;
  right: 35%;
}
@media (max-width : 1024px){
  .topic{
    transform: translate(-50%, -50%);
  }
}

</style>
