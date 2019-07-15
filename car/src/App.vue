<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        <router-view />
        </div>
    </div>
</template>
<script>
</script>
<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
}
body,
html {
    width: 100%;
    height: 100%;
}
* {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 15px;
}
</style>
