<template>
    <div>
        <div class="angry-grid">
  <div id="item-0">&nbsp;</div>
  <div id="item-1">&nbsp;</div>
  <div id="item-2">&nbsp;</div>
  <div id="item-3">&nbsp;</div>
  <div id="item-4">&nbsp;</div>
</div>
    </div>
</template>
<style scoped>
.angry-grid {
   display: grid; 

   grid-template-rows: 1fr 1fr 1fr 1fr;
   grid-template-columns: 1fr 1fr;
   
   gap: 0px;
   height: 100%;
   
}
  
#item-0 {

   background-color: #9769B9; 
   grid-row-start: 1;
   grid-column-start: 2;

   grid-row-end: 5;
   grid-column-end: 3;
   
}
#item-1 {

   background-color: #5F9F5E; 
   grid-row-start: 1;
   grid-column-start: 1;

   grid-row-end: 2;
   grid-column-end: 2;
   
}
#item-2 {

   background-color: #9A5BD8; 
   grid-row-start: 2;
   grid-column-start: 1;

   grid-row-end: 3;
   grid-column-end: 2;
   
}
#item-3 {

   background-color: #AEF85B; 
   grid-row-start: 3;
   grid-column-start: 1;

   grid-row-end: 4;
   grid-column-end: 2;
   
}
#item-4 {

   background-color: #B798AF; 
   grid-row-start: 4;
   grid-column-start: 1;

   grid-row-end: 5;
   grid-column-end: 2;
   
}
</style>