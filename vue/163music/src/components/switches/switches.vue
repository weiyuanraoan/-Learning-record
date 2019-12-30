<template>
  <ul class="switches">
  <li
    v-for="(item,index) in switches"
    :key= "item.id"
    class="switch-item"
    :class = "{'active':currentIndex === index}"
    @click="switchIndex(index)"
    >
    <span>{{item.name}}</span>
  </li>
</ul>
</template>

<script>
export default {
    props:{
        switches:{
            type:Array
        },
        currentIndex:{
            type:Number,
            default:0
        }
        },
    methods:{
        switchIndex(index){
            this.$emit('switch',index)
        }
    
    }

}
</script>

<style lang= "stylus">
@import "../../common/styl/variable"
.switches
    display flex
    align-items center
    width 240px
    margin 0 auto 
    .switch-item
        flex 1
        padding 8px
        margin 0 20px
        text-align center
        font-style 16px
        color $color-text-l
        border-bottom 2px solid $color-theme
        &.active
            color #ffffff
            border-bottom 2px solid $color-text-l
</style>