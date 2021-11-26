<template>
    <v-container>
        <h1 class="size-text">Input Sizes</h1>
        <v-row>
            <v-col>
                <v-text-field
                    v-model="rowLength"
                    label="Row Length"
                    placeholder="0"
                    clearable
                    type="number"
                />
            </v-col>
            <v-col>
                <v-text-field
                    v-model="columnLength"
                    label="Column Length"
                    placeholder="0"
                    value="0"
                    clearable
                    type="number"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'HomePage',
    data () {
        return {
            rowLength: 0,
            columnLength: 0
        };
    },
    methods: {
        sizeChange () {

        }
    }
}
</script>

<style>

</style>