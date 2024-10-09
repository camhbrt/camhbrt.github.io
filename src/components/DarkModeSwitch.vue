<script lang="ts" setup>

const isToggled = defineModel({default:false})

</script>

<template>
  <div class="flex flex-row rounded-full bg-slate-800 p-1 w-fit h-fit" >

    <label 
    for="darkMode-switch" 
    class="relative flex flex-row items-center cursor-pointer rounded-full py-1 [&:has(:focus-visible)]:ring-2 ring-amber-400"  
    @click="isToggled = !isToggled"    
    >
    
        <input 
        type="checkbox" 
        name="darkMode-switch" 
        v-model="isToggled" 
        id="darkMode-switch"
        class=" w-0 "
        />
        <div
            class="absolute w-1/2 h-full bg-slate-200 rounded-full shadow-md transform transition-transform duration-500 ease-in-out"
            :class="isToggled ? 'translate-x-full' : 'translate-x-0'"
            @click="isToggled = !isToggled"
        />
        
        <font-awesome-icon 
            icon="fa-solid fa-circle-half-stroke" 
            class="relative text-slate-500 px-2" 
            @click="isToggled = !isToggled"
        />
        <font-awesome-icon 
            icon="fa-solid fa-moon" 
            class="relative text-slate-500 px-2" 
            @click="isToggled = !isToggled"
        />

    </label>
  </div>
</template>