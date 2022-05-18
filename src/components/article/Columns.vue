<template>
  <!-- Background color split screen for large screens -->
  <div class="fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true" />
  <div class="fixed top-0 right-0 w-1/2 h-full bg-gray-50" aria-hidden="true" />
  <div class="relative min-h-screen flex flex-col">
    <!-- 3 column wrapper -->
    <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
      <!-- Left sidebar & main wrapper -->
      <div class="flex-1 min-w-0 bg-white xl:flex">
        <div class="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-white">
          <div class="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
            <!-- Start left column area -->
            <div class="h-full relative" style="min-height: 12rem">
              <div class="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg" >un</div>
            </div>
            <!-- End left column area -->
          </div>
        </div>

        <div class="bg-pink-200 lg:min-w-0 lg:flex-1">
          <div class="h-full py-6 px-4 sm:px-6 lg:px-8">
            <!-- Start main area-->
            <div class="relative h-full" style="min-height: 36rem">
              <div class="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg" >deux</div>
            </div>
            <!-- End main area -->
          </div>
        </div>
      </div>

    </div>
  </div>
</template>