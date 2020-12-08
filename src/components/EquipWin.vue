<template>
    <div id="equip-win">
        <div id="equip-contain">
            <div id="equip-left">
                <div id="head-one"/>
                <div id="head-three"/>
                <div id="r-hand"/>
                <div id="robe"/>
                <div id="accessory-one"/>
            </div>
            <div id="equip-center">
                <div id="charHead" v-bind:style="{ backgroundImage: `url(${require('@/assets/rosim/character/' + urlImageHead)})` }" />
                <div id="charBody" v-bind:style="{ backgroundImage: `url(${require('@/assets/rosim/character/' + urlImageBody)})` }"/>
            </div>
            <div id="equip-right">
                <div id="head-two"/>
                <div id="body"/>
                <div id="l-hand"/>
                <div id="shoes"/>
                <div id="accessory-two"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EquipWin",
        props: ['baseInfo'],
        data() {
            return {
                urlImageHead: '',
                urlImageBody: '',
                sex: ["female", "male"],
            }
        },
        watch: {
            baseInfo: {
                immediate: true,
                deep: true,
                handler(baseInfo) {

                    if (baseInfo.sex === 0 && baseInfo.currentClass === '16' ){
                        baseInfo.currentClass = '17'
                    }
                    if (baseInfo.sex === 1 && baseInfo.currentClass === '17' ){
                        baseInfo.currentClass = '16'
                    }

                    this.urlImageHead = this.sex[baseInfo.sex] + '/head/' + '2.gif';
                    this.urlImageBody = this.sex[baseInfo.sex] + '/body/' + baseInfo.currentClass + '.gif';

                    this.$emit('baseInfo', baseInfo);
                }
            }
        },
    }
</script>

<style scoped>
    #head-one {
        background-image: url("../assets/rosim/items/0.gif");
        background-repeat: no-repeat;
        height: 24px;
        width: 24px;
        margin-left: 5px;
        margin-bottom: 2px;
    }

    #head-two {
        background-image: url("../assets/rosim/items/1.gif");
        background-repeat: no-repeat;
        height: 24px;
        width: 24px;
        margin-left: 81px;
        margin-bottom: 2px;
    }

    #head-three {
        background-image: url("../assets/rosim/items/2.gif");
        background-repeat: no-repeat;
        height: 24px;
        width: 24px;
        margin-left: 5px;
        margin-bottom: 2px;
    }

    #body {
        background-image: url("../assets/rosim/items/3.gif");
        background-repeat: no-repeat;
        height: 24px;
        width: 24px;
        margin-left: 81px;
        margin-bottom: 2px;
    }

    #r-hand {
        background-image: url("../assets/rosim/items/4.gif");
        background-repeat: no-repeat;
        height: 24px;
        width: 24px;
        margin-left: 5px;
        margin-bottom: 2px;
    }

    #l-hand {
        background-image: url("../assets/rosim/items/5.gif");
        background-repeat: no-repeat;
        height: 24px;
        width: 24px;
        margin-left: 81px;
        margin-bottom: 2px;
    }

    #robe {
        background-image: url("../assets/rosim/items/6.gif");
        background-repeat: no-repeat;
        height: 24px;
        width: 24px;
        margin-left: 5px;
        margin-bottom: 2px;
    }

    #shoes {
        background-image: url("../assets/rosim/items/7.gif");
        background-repeat: no-repeat;
        height: 24px;
        width: 24px;
        margin-left: 81px;
        margin-bottom: 2px;
    }

    #accessory-one {
        background-image: url("../assets/rosim/items/8.gif");
        background-repeat: no-repeat;
        height: 24px;
        width: 24px;
        margin-left: 5px;
        margin-bottom: 2px;
    }

    #accessory-two {
        background-image: url("../assets/rosim/items/9.gif");
        background-repeat: no-repeat;
        height: 24px;
        width: 24px;
        margin-left: 81px;
        margin-bottom: 2px;
    }

    #equip-win {
        padding: 0;
        margin: 0;
        background-image: url("../assets/rosim/skin/equipwin_bg.png");
        background-repeat: no-repeat;
        font-size: 10px;
        height: 147px;
        width: 280px;
        display: inline-flex;

        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Chrome/Safari/Opera */
        -khtml-user-select: none; /* Konqueror */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently not supported by any browser */
    }

    #equip-contain {
        top: 17px;
        left: 0;
        position: relative;
        display: inline-flex;
        height: 130px;
        width: 280px;
    }

    #equip-left {
        width: 114px;
    }

    #equip-right {
        width: 112px;
    }

    #equip-center {
        width: 57px;
        height: 130px;
        display: inline-block;
    }

    #charHead {
        /*background-image: url("../assets/rosim/character/male/1-1.gif");*/
        background-repeat: no-repeat;

        position: absolute;
        left: 125px;
        top: 30px;
        width: 31px;
        height: 41px;
        z-index: 2;
    }

    #charBody {
        /*background-image: url("../assets/rosim/character/male/Novice.gif");*/
        background-repeat: no-repeat;

        position: absolute;
        left: 114px;
        top: 50px;
        width: 53px;
        height: 80px;
        z-index: 0;
    }
</style>