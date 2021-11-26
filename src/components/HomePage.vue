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
                    @change="sizeChange"
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
                    @change="sizeChange"
                />
            </v-col>
        </v-row>
        <v-spacer/>
        <v-container v-if="hasLengths">
            <!-- <h1>Row length is {{rowLength}} and column length is {{columnLength}}</h1> -->
            <template v-for="(row,r) in originalMatrix">
                <v-row :key="r">
                    <template v-for="(col, c) in row">
                        <v-col :key="c" cols="1">
                            <span>{{r}},{{c}} =</span>
                        </v-col>
                        <v-col :key="-(c+1)">
                            <v-text-field
                                v-model="originalMatrix[r][c]"
                                :value="originalMatrix[r][c]"
                                type="number"
                                class="matrix-entry"
                            />
                        </v-col>
                    </template>
                </v-row>
            </template>
        </v-container>
        <v-btn @click="gramSchmidt" v-if="hasLengths">Print Gram-Schmidt</v-btn>
        <v-container v-if="gramSchmidted">
            <h3>Result of Gram-Schmidt</h3>
            <template v-for="(row,r) in Q">
                <v-row :key="r">
                    <template v-for="(col, c) in row">
                        <v-col :key="c" cols="1">
                            <span>{{Q[r][c].toFixed(3)}}</span>
                        </v-col>
                    </template>
                </v-row>
            </template>
        </v-container>
    </v-container>
</template>

<script>
import { gramSchmidt } from '@/utils/gramSchmidt';
import clonedeep from 'lodash.clonedeep';

export default {
    name: 'HomePage',
    data () {
        return {
            rowLength: 0,
            columnLength: 0,
            originalMatrix: [],
            Q: [],
            matrix: [],
            gramSchmidted: false
        };
    },
    methods: {
        sizeChange () {
            this.originalMatrix = [];
            for (let r = 0; r < this.rowLength; ++r) {
                this.originalMatrix.push([]);
                for (let c = 0; c < this.columnLength; ++c) {
                    this.originalMatrix[r].push(0);
                }
            }
            this.gramSchmidted = false;
            // console.log(this.originalMatrix);
        },
        gramSchmidt () {
            this.originalMatrix = this.originalMatrix.map(row => row = row.map(
                x => x = parseInt(x)
            ));
            this.matrix = clonedeep(this.originalMatrix);   
            // console.log(this.matrix);
            this.Q = gramSchmidt(this.matrix);
            // console.log(this.Q);
            this.gramSchmidted = true;
        }
    },
    computed: {
        hasLengths () {
            return this.rowLength > 0 && this.columnLength > 0;
        }
    }
}
</script>

<style>
    .matrix-entry {
        max-width: 30px !important;
    }
</style>