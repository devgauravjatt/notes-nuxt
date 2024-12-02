<template>
  <div class="flex bg-zinc-900 h-screen">
    <!-- sidebar -->
    <div class="bg-black w-[338px] p-8">
      <Logo />

      <!-- today main container -->
      <div>
        <p class="text-xs font-bold text-[#C2C2C5] mt-12 mb-4">Today</p>
        <div class="ml-2">
          <div class="p-2 bg-[#A1842C] rounded-lg">
            <h3 class="text-sm font-bold text-[#F4F4F5]">
              Just finished reading...
            </h3>
            <div class="leading-none">
              <span class="text-xs text-[#F4F4F5] mr-4">Today</span>
              <span class="text-xs text-[#D6D6D6]"
                >The Midnight Library...</span
              >
            </div>
          </div>
          <div class="p-2">
            <h3 class="text-sm font-bold text-[#F4F4F5]">
              Just finished reading...
            </h3>
            <div class="leading-none">
              <span class="text-xs text-[#F4F4F5] mr-4">Today</span>
              <span class="text-xs text-[#C2C2C5]"
                >The Midnight Library...</span
              >
            </div>
          </div>
        </div>
      </div>
      <!-- /today main container -->

      <!-- yesterday main container -->
      <div>
        <p class="text-xs font-bold text-[#C2C2C5] mt-12 mb-4">Yesterday</p>
        <div class="ml-2">
          <div class="p-2">
            <h3 class="text-sm font-bold text-[#F4F4F5]">
              Just finished reading...
            </h3>
            <div class="leading-none">
              <span class="text-xs text-[#F4F4F5] mr-4">Today</span>
              <span class="text-xs text-[#C2C2C5]"
                >The Midnight Library...</span
              >
            </div>
          </div>
        </div>
      </div>
      <!-- /yesterday main container -->
    </div>
    <!-- /sidebar -->
    <!-- note container -->
    <div class="w-full">
      <div class="flex justify-between w-full items-start p-8">
        <button
          class="inline-flex items-center text-xs text-[#C2C2C5] hover:text-white font-bold space-x-2"
        >
          <PencilIcon />
          <span>Create Note</span>
        </button>

        <button>
          <TrashIcon class="text-[#6D6D73] hover:text-white" />
        </button>
      </div>

      <div class="max-w-[437px] mx-auto">
        <p class="text-[#929292] font-playfair">November 22nd, 2024</p>
        <p class="text-[#D4D4D4] my-4 font-playfair">
          Finally moved into my tiny house today! After months of YouTube
          tutorials, countless trips to Home Depot, and more scrapes and bruises
          than I care to count, I'm officially a tiny home dweller. The sunset
          streaming through my handmade stained glass window makes the whole 240
          square feet glow like a jewel box. Still can't believe I built this
          with my own two hands (and Dad's power tools).
        </p>
        <p class="text-[#D4D4D4] my-4 font-playfair">
          Living small means getting creative with space. Today I installed my
          fold-down desk that transforms into a dining table - probably my
          proudest DIY achievement yet. The copper pipes and reclaimed wood give
          it this amazing steampunk vibe I wasn't even planning. Had my first
          meal on it tonight: takeout ramen and a victory beer, because after
          all that building, cooking was definitely not happening.
        </p>
      </div>
    </div>
    <!-- /note container -->
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth'],
})
</script>
