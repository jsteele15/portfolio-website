<script setup>
</script>

<template>
    <header class="header">
        <h1 class="title">James Steele</h1>
        <nav class="button-row">
            <button class="button" @click="$router.push('/')">Home</button>
            <button class="button" @click="$router.push('/godot-python')">Python/Godot</button>
            <button class="button">Vue/.net</button>
            <button class="button">Contant</button>
        </nav>
    </header>
</template>

<style scoped>
.header {
    justify-content: space-between;
    align-items: center;

    width: 100%;
    display: flex;
    background-color: #e7d4c5;
    color: #9b896f;
}
.title {
    font-family: 'Cinzel', serif;
    font-size: 4rem;
    padding: 20px;
}
.button-row {
    display: flex;
    padding: 20px;
    font-size: 4rem;
}
.button {
    font-family: 'Cinzel', serif;
    padding: 20px;
}
.button:hover {
    transform: scale(1.25);
}
</style>