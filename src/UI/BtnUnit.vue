<template>
        <button class="btn-dafault">
            <slot></slot>
        </button>
</template>

<script>
export default {

}
</script>

<style>
.btn-default {
    border: none;
    background-color: transparent;
    padding: 5px 10px;
    background-color: rgb(143, 143, 151);
    cursor: pointer;
}

</style>

