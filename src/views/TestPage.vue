<template>
    <v-input
        max-errors="2"
        :error-messages="['Fatal error', 'Another error']"
        error
        disabled
    >
        Input
    </v-input>
    <v-text-field label="Label"></v-text-field>
</template>