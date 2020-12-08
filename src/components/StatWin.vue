<template>
    <div id="stat-win">
        <div id="stat-contain">
            <div class="stat">
                <div class="stat-left">{{baseInfo.str}}+00</div>
                <div class="stat-right">2</div>
                <div class="arw-div"><i class="arw-left"></i><i class="arw-right"></i></div>
            </div>
            <div class="stat">
                <div class="stat-left">{{baseInfo.agi}}+00</div>
                <div class="stat-right">2</div>
                <div class="arw-div"><i class="arw-left"></i><i class="arw-right"></i></div>
            </div>
            <div class="stat">
                <div class="stat-left">{{baseInfo.vit}}+00</div>
                <div class="stat-right">2</div>
                <div class="arw-div"><i class="arw-left"></i><i class="arw-right"></i></div>
            </div>
            <div class="stat">
                <div class="stat-left">{{baseInfo.int}}+00</div>
                <div class="stat-right">2</div>
                <div class="arw-div"><i class="arw-left"></i><i class="arw-right"></i></div>
            </div>
            <div class="stat">
                <div class="stat-left">{{baseInfo.dex}}+00</div>
                <div class="stat-right">2</div>
                <div class="arw-div"><i class="arw-left"></i><i class="arw-right"></i></div>
            </div>
            <div class="stat">
                <div class="stat-left">{{baseInfo.luk}}+00</div>
                <div class="stat-right" v-if="">2</div>
                <div class="arw-div"><i class="arw-left"></i><i class="arw-right"></i></div>
            </div>
        </div>
        <div id="stat-status">
            <div id="stat-status-right">
                <div id="def" class="stat">000</div>
                <div id="mdef" class="stat">000</div>
                <div id="flee" class="stat">000</div>
                <div id="asped" class="stat">000</div>
                <div id="stat-point" class="stat">000</div>
            </div>
            <div id="stat-status-left">
                <div id="atk" class="stat">000</div>
                <div id="matk" class="stat">000</div>
                <div id="hit" class="stat">000</div>
                <div id="critical" class="stat">000</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StatWin",
        props: ['baseInfo'],
        watch: {
            baseInfo: {
                immediate: true,
                deep: true,
                handler(baseInfo) {
                    baseInfo.currentClass
                }
            }
        },
    }
</script>

<style scoped>

    #stat-status-left {
        /*border: 1px solid black;*/
        float: right;
        width: 80px;
        text-align: right;
    }
    #stat-status-right {
        /*border: 1px solid black;*/
        float: right;
        width: 80px;
        text-align: right;
    }
    #stat-status {
        width: 160px;
        height: 92px;
        top: 24px;
        left: 47px;
        position: relative;
        display: inline-block;
    }
    
    #stat-win {
        padding: 0;
        margin: 0;
        background-image: url("../assets/rosim/skin/statwin_bg.png");
        background-repeat: no-repeat;
        font-size: 10px;
        height: 120px;
        width: 280px;
        display: inline-flex;

        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none;   /* Chrome/Safari/Opera */
        -khtml-user-select: none;    /* Konqueror */
        -moz-user-select: none;      /* Firefox */
        -ms-user-select: none;       /* Internet Explorer/Edge */
        user-select: none;           /* Non-prefixed version, currently not supported by any browser */
    }

    #stat-contain {
        width: 66px;
        height: 92px;
        top: 24px;
        left: 36px;
        position: relative;
    }

    .stat-left {
        padding-top: 1px;
        padding-left: 1px;
        float: left;
        width: 35px;
    }

    .stat-right {
        padding-top: 1px;
        padding-right: 1px;
        float: right;
        width: 11px;
        text-align: right;
    }

    .stat {
        height: 15px;
        margin-bottom: 1px;
        position: relative;
    }

    .arw-div {
        padding-top: 1px;
        float: right;
        width: 16px;
    }

    .arw-left {
        background-image: url("../assets/rosim/skin/arw_left.png");
        padding-left: 6px;
        background-repeat: no-repeat;
        left: 72px;
        margin-right: 2px;
        cursor: pointer;
    }

    .arw-left:active {
        background-image: url("../assets/rosim/skin/arw_left_on.png");
    }

    .arw-right {
        background-image: url("../assets/rosim/skin/arw_right.png");
        padding-right: 6px;
        background-repeat: no-repeat;
        left: 82px;
        margin-top: 2px;
        margin-left: 1px;
        cursor: pointer;
    }

    .arw-right:active {
        background-image: url("../assets/rosim/skin/arw_right_on.png");
    }

</style>