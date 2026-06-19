<script setup>
</script>

<template>
    <header class="header">
        <h1 class="title">James Steele</h1>
        <nav class="button-row">
            <button class="button" @click="$router.push('/about')">Home</button>
            <button class="button" @click="$router.push('/godot-python')">Python/Godot</button>
            <button class="button" @click="$router.push('/vue-net')">Vue/.net</button>
            <button class="button" @click="$router.push('/contact')">Contant</button>
        </nav>
    </header>
</template>

<style scoped>
.header {
    margin: 0;
    padding: 0;
    justify-content: space-between;
    align-items: bottom;
    width: 100%;
    display: flex;
    background-color: #000000;
}
.title {

    font-family: 'Cinzel', serif;
    background-color: #f0ebeb;
    color: #000000;
    font-size: 4rem;
    padding: 20px 20px 0px 0px;
    shadow: 0 4px 2px 0px #294789;
}
.button-row {
    display: flex;
    flex: 1;
    justify-content: bottom;
    display: flex;
    padding: 20px 0px 0px 20px;
    font-size: 4rem;
}
.button {
    flex: 1;
    min-width: 200px;
    border-radius: 6px;
    background: transparent;
    font-size: 20px;
    font-family: 'Cinzel', serif;
    padding: 20px 20px 0px 20px;
    color: #f0ebeb;
    border:none;
}
.button:hover {
    background: transparent;
    transform: scale(1.25);
}
</style>