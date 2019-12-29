<template>
  <div class="rules" id="rules">
      <div class="sub-section"> Rules </div>
      <ul>
          <li>Score will be Increase by one when completly typing one quote correcly </li>
          <li>20 life Point will be added when starting game</li>
          <li>1 life point is burned when skipping a quote </li>
          <li>1 life point is burned when 50 wrong letter typed</li>
          <li>Game ends when all life point are burned or time ends before completion of quote</li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'rules'
}
</script>

<style scoped>
.rules {
    min-height: 85vh;
    background-color:rgba(214, 219, 223, 0.75);
    float: right;
    width: 100%;
    font-size: 1.2rem;
}

.rules .sub-section {
    font-size: 2rem;
    padding: 20px;
    font-weight: bold;
    text-align: center;
    background-color:rgba(214, 219, 223, 0.75);
}
.rules ul {
    float: left;
    padding: 2rem;
}
</style>