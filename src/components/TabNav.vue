<template>
    <div id="Tabnav">
        <ul>
            <li v-for="tab in tabs" :key="tab">
                <a class="tab-link" :class="{ active: tab === selected }" @click="setTab(tab)">
                    {{ tab }}
                </a>
            </li>
        </ul>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props:{
        tabs:{  
            type: Array,
            required: true,
        },
        selected: {
            type: String,
            required: true,
        }
    },
    methods:{
        setTab(tab){
            this.$emit('selected', tab);
        }
    }
}
</script>