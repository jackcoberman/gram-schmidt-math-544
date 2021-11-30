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
            <template v-for="(row,r) in originalMatrix">
                <v-row :key="r" align="center">
                    <template v-for="(col, c) in row">
                        <v-col :key="c" class="eq-col" cols="1" align="right">
                            <span>{{r}},{{c}} =</span>
                        </v-col>
                        <v-col :key="-(c+1)" class="num-col">
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
        <v-btn @click="gramSchmidt" v-if="hasLengths" color="primary">Print Gram-Schmidt</v-btn>
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
            <h3 class="check-res-txt"> Check results with Sage </h3>
            <v-btn class="sage-btn" @click="copySageText">
                <span class="sage-text">{{sageText}}</span>
                <v-icon class="copy-btn">mdi-content-copy</v-icon>
            </v-btn>
            
        </v-container>
    </v-container>
</template>

<script>
import { gramSchmidt } from '@/utils/gramSchmidt';
import clonedeep from 'lodash.clonedeep';
// import ContentCopyIcon from '@mui/icons-material/ContentCopy';
export default {
    name: 'HomePage',
    // components: {
    //     ContentCopyIcon
    // },
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
        },
        gramSchmidt () {
            this.originalMatrix = this.originalMatrix.map(row => row = row.map(
                x => x = parseInt(x)
            ));
            this.matrix = clonedeep(this.originalMatrix);   
            this.Q = gramSchmidt(this.matrix);
            this.gramSchmidted = true;
        },
        copySageText () {
            // let matrixText = '[';
            // for (let r = 0; r < this.matrix.length; ++r) {
            //     matrixText += '[' + this.matrix[r] + '],';
            // }
            // matrixText = matrixText.substring(0,matrixText.length - 1) + ']';
            navigator.clipboard.writeText(this.sageText);
        }
    },
    computed: {
        hasLengths () {
            return this.rowLength > 0 && this.columnLength > 0;
        },
        sageText () {
            let matrixText = 'matrix(ZZ, [';
            for (let r = 0; r < this.matrix.length; ++r) {
                matrixText += '[' + this.matrix[r] + '],';
            }
            matrixText = matrixText.substring(0,matrixText.length - 1) + ']).gram_schmidt()';
            return matrixText;
        }
    }
}
</script>

<style>
    .matrix-entry {
        max-width: 35px !important;
    }
    .eq-col {
        padding-right: 0px !important;
        /* width: 60% !important; */
    }
    .num-col {
        padding: 0px !important;
    }
    .sage-btn {
        text-transform: none !important;
    }
    .sage-text {
        font-size: 15px;
        font-family:'Times New Roman', Times, serif;
    }
    .copy-btn {
        margin-left: 10px;
    }
    .check-res-txt {
        margin-top: 20px;
    }
</style>