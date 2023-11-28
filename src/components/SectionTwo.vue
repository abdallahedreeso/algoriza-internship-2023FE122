<template>
  <section class="section2 mt-14">
    <h2 class="text-black mb-6 font-semibold">
      Get inspiration for your next trip
    </h2>
    <div class="posts flex gap-5">
      <!-- post 1 -->
      <div id="post1" class="post p-5 rounded bg-cover">
        <h5 class="text-white font-semibold text-xl mb-2 mt-56">
          Sydeny's 10 most fashionable 5 star hotels
        </h5>
        <p class="text-white w-96">
          Browse the fastest growing tourism sector in the heart of Australia
          tourism capital ....
        </p>
      </div>
      <!-- post 2 -->
      <div id="post2" class="post p-5 rounded bg-cover">
        <h5 class="text-white font-semibold text-xl mb-2 mt-56">
          Top cities for Vegan Travellers
        </h5>
        <p class="text-white w-96">
          Top sites where you do not have to worry about being a vegan. Our
          tourist guide is here...
        </p>
      </div>
      <!-- post 3 -->
      <div id="post3" class="post p-5 rounded bg-cover">
        <h5 class="text-white font-semibold text-xl mb-2 mt-52">
          World's top destinations during and post covid timeline
        </h5>
        <p class="text-white w-96">
          Pandemic is still intact and will be here for a longer time. Here's
          where your next destination...
        </p>
      </div>
    </div>
  </section>
</template>



<style>
.post {
  width: 33%;
}

.post img {
  width: 100%;
}

.post .post-description {
  position: relative;
  /* top: -25%; */
  left: 6%;
}

#post1 {
  background-image: url("../assets/images/posts/Rectangle\ 1.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
}

#post2 {
  background-image: url("../assets/images/posts/Rectangle\ 16.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
}

#post3 {
  background-image: url("../assets/images/posts/Rectangle\ 17.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
}
</style>