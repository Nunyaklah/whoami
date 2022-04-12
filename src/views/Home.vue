<template>
  <div class="home font-poppins bg-background-color h-screen">
    <div class="grid grid-cols-2 m-auto content-center gap-3 p-10 items-center">
      <div class="">
        <div class="">
          <p class="mb-2">- Get to know yourself</p>
          <h1 class="text-6xl font-extrabold">
            Easy, Pezy <br />
            Way To Check <br />
            Your Personality
          </h1>
        </div>
        <div>
          <p class="mt-6 w-7/12">
            We all have a personality trait, use this application to find out
            where you fit. This can help you in your relationships, career and
            your entire life
          </p>
        </div>
        <div class="mt-8">
          <button
            class="bg-white text-black font-semibold py-4 px-10 rounded"
          >
           How it Works 
          </button>
           <button
            class="bg-black text-white font-semibold py-4 px-10 rounded ml-4"
          >
            Start Personality Test !
          </button>
        </div>
      </div>
      <div>
        <img src="@/assets/images/happy-woman.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
