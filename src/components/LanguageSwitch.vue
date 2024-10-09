<script lang="ts" setup>

const isToggled = defineModel()

</script>

<template>
  <div class="flex flex-row rounded-full bg-slate-800 p-1 w-fit h-fit" >

    <label 
    for="language-switch" 
    class="relative flex flex-row items-center cursor-pointer rounded-full [&:has(:focus-visible)]:ring-2 ring-amber-400"  
    @click="isToggled = !isToggled"    
    >
    
        <input 
        type="checkbox" 
        name="language-switch" 
        v-model="isToggled" 
        id="language-switch"
        class=" w-0 "
        />
        <div
            class="absolute w-1/2 h-full bg-slate-200 rounded-full shadow-md transform transition-transform duration-500 ease-in-out"
            :class="isToggled ? 'translate-x-full' : 'translate-x-0'"
            @click="isToggled = !isToggled"
        />
        
        <p
            class="relative text-slate-500 px-1" 
            @click="isToggled = !isToggled"
        >
            FR
        </p>
        
        <p
            class="relative text-slate-500 px-1" 
            @click="isToggled = !isToggled"
        >
            EN
        </p>


    </label>
  </div>
</template>