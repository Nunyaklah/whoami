<template>
  <div class="home overflow-x-hidden font-poppins bg-background-color h-screen">
    <Navbar/>
    <div
      class="flex flex-col md:flex-row lg:flex-row justify-center items-center pt-40 p-8"
    >
      <div class="w-full md:w-2/5 lg:2/5 p-4">
        <div class="text-center md:text-left lg:text-left">
          <p class="mb-2">- Get to know yourself</p>

          <h1 class="text-4xl md:text-6xl font-extrabold leading-normal z-50">
            Easy, Pezy <br />
            Way To Check <br />
            Your Personality
          </h1>
        </div>

        <div class="text-center md:text-left lg:text-left">
          <p class="mt-6 w-full md:w-7/12 lg:w-7/12">
            We all have a personality trait, use this application to find out
            where you fit. This can help you in your relationships, career and
            your entire life
          </p>
        </div>
        <div class="mt-8 text-center md:text-left lg:text-left">
          <button
            class="bg-white text-black font-semibold py-4 px-10 rounded mb-4"
            @click="showModal()"
          >
            How it Works
          </button>
          
            <button
              class="bg-black text-white font-semibold py-4 px-10 rounded ml-4"
              @click="checkLoginStatus"
            >
              Start Personality Test !
            </button>
         
        </div>
      </div>
      <div class="p-4 relative">
        <img src="@/assets/images/happy-woman.png" alt="" />
        <div
          class="bg-black text-white font-semibold py-8 px-10 rounded absolute bottom-0 right-20"
        >
          Everyone is special 😎 😘
        </div>
        <div
          class="bg-line-color text-white font-semibold px-5 py-5 rounded-full absolute top-0 right-10"
        >
          Go you!
        </div>
      </div>
      <Modal />
      <AuthModal />
    </div>
  </div>
</template>

<script setup>
import Modal from "../components/Modal.vue";
import AuthModal from "../components/AuthModal.vue";
import Navbar from "../components/Navbar.vue"
import { useAuthStore } from "../stores/auth";
import router from "../router/index"

// create store
const authStore = useAuthStore();

// showModal removes hidden class from modal element and replace with inline-block.
function showModal() {
  let m = document.getElementById("modal");
  m.classList.remove("hidden");
  m.classList.add("inline-block");
}

function showAuthModal() {
  let m = document.getElementById("authmodal");
  m.classList.remove("hidden");
  m.classList.add("inline-block");
}

function checkLoginStatus(){
  console.log(authStore.isLoggedIn)
  if(authStore.isLoggedIn){
    router.push("/personality")
    
  }else{
    showAuthModal()
  }
}
</script>
