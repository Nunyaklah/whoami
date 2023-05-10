<template>
  <figure class="max-w-screen-md mx-auto text-center">
    <svg
    
      class="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
     
    >
      <path
        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
        fill="currentColor"
      />
    </svg>
    <blockquote>
      <p class="text-2xl italic font-medium text-gray-900">
        {{ quote }}
      </p>
    </blockquote>
    <figcaption class="flex items-center justify-center mt-6 space-x-3">
      <p>🤓</p>
      <div
        class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700"
      >
        <cite class="pr-3 font-medium text-gray-900"
          >{{quoteAuthor}}</cite
        >
        <cite class="pl-3 text-sm text-gray-800 "
          >{{ quoterPosition }}</cite
        >
      </div>
    </figcaption>
  </figure>
</template>

<script setup>
    const props = defineProps(['quote', 'quoterPosition', 'quoteAuthor' ])
</script>

