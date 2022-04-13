<template>
  <div
    class="font-poppins bg-background-color h-screen text-center p-10 m-auto"
  >
    <div class="m-auto bg-white h-5/6 p-10 rounded-2xl">
      <div>
        <p class="font-bold text-orange-300">Question 1 / 5</p>
        <h3 class="font-bold text-2xl mt-4">
          You’ve been sitting in the doctor’s waiting room for more than 25
          minutes. You:
        </h3>
      </div>
      <div class="mt-10">
        Pick an Answer !

        <div class="w-5/6 m-auto pt-10">
          <table class="w-full whitespace-nowrap">
            <tbody>
              <tr
                tabindex="0"
                class="focus:outline-none h-16 border border-gray-200 dark:border-gray-600 rounded"
              >
                <td>
                  <div class="ml-5">
                    <div
                      class="bg-gray-200 dark:bg-gray-800 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative"
                    >
                      <input
                        type="radio"
                        class="focus:opacity-100 radio opacity-0 absolute cursor-pointer w-full h-full"
                      />
                    </div>
                  </div>
                </td>
                <td class="">
                  <div class="flex items-center pl-5">
                    <p
                      class="text-base font-medium leading-none text-gray-700 dark:text-white mr-2"
                    >
                      Explain to other equally impatient people in the room that the doctor is always running late
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mt-8">
          <button class="bg-gray-200 text-black font-semibold py-4 px-10 rounded">
            Previous
          </button>
          <router-link to="/personality">
            <button
              class="bg-black text-white font-semibold py-4 px-10 rounded ml-4"
            >
              Next
            </button>
          </router-link>
        </div>
    </div>
  </div>
</template>
