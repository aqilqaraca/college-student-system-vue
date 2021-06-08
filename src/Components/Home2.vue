<template>
  <div>
    <div class="row">
      <div class="col-xl-3 col-md-6 col-12">
        <div class="box pull-up my-4">
          <div class="box-body text-center">
            <i class="dashIcon fas fa-table"></i>
            <button class="dash btn btn-primary">My check-in</button>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6 col-12">
        <div class="box pull-up my-4">
          <div class="box-body text-center">
            <i class="dashIcon fas fa-stream"></i>
            <button class="dash btn btn-primary">Take an exam</button>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6 col-12">
        <div class="box pull-up my-4">
          <div class="box-body text-center">
            <i class="dashIcon fas fa-poll"></i>
            <button class="dash btn btn-primary">Exam Result</button>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6 col-12">
        <div class="box pull-up my-4">
          <div class="box-body text-center">
            <i class="dashIcon fas fa-book"></i>
            <button class="dash btn btn-primary">Classes</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-3 col-md-6 col-12">
        <div class="box pull-up my-4">
          <div class="box-body text-center">
            <i class="dashIcon fas fa-briefcase"></i>
            <button class="dash btn btn-primary">Home Work</button>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6 col-12">
        <div class="box pull-up my-4">
          <div class="box-body text-center">
            <i class="dashIcon fas fa-calendar-check"></i>
            <button class="dash btn btn-primary">HW Result</button>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6 col-12">
        <div class="box pull-up my-4">
          <div class="box-body text-center">
            <i class="dashIcon fas fa-file-pdf"></i>
            <button class="dash btn btn-primary">Resources</button>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6 col-12">
        <div class="box pull-up my-4">
          <div class="box-body text-center">
            <i class="dashIcon fas fa-star"></i>
            <button class="dash btn btn-primary">Speakings</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-3 col-md-6 col-12">
        <div class="box pull-up my-4">
          <div class="box-body text-center">
            <i class="dashIcon fas fa-microphone"></i>
            <button class="dash btn btn-primary">Speaking Reviews</button>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6 col-12">
        <div class="box pull-up my-4">
          <div class="box-body text-center">
            <i class="dashIcon fas fa-headphones"></i>
            <button class="dash btn btn-primary">Listening</button>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6 col-12">
        <div class="box pull-up my-4">
          <div class="box-body text-center">
            <i class="dashIcon fas fa-newspaper"></i>
            <button class="dash btn btn-primary">Essay</button>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6 col-12">
        <div class="box pull-up my-4">
          <div class="box-body text-center">
            <i class="dashIcon fas fa-star"></i>
            <button class="dash btn btn-primary">Esaay Reviews</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

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

  .dashIcon {
    padding-bottom: 10px;
    color: #ee7100;
    font-size: 30px;
  }

</style>
