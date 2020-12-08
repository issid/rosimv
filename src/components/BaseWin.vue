<template>
    <div id="base-win">

        <div id="baseBlock">
            <select v-model="selected" id="currentClass" @change.prevent="currentClass">
                <optgroup v-for="(group, name) in optionGroups" :label="name">
                    <option v-for="cClass in group" :value="cClass.id"
                            v-if="(baseInfo.sex === 1 && ![17, 31, 67].includes(cClass.id)) || (baseInfo.sex === 0 && ![16, 30, 65].includes(cClass.id))">
                        {{ cClass.name }}
                    </option>
                </optgroup>
            </select>
            <div id="lvs">
                <div id="Lv">Lv. {{baseInfo.baseLv}}</div>
                <div class="arw-div">
                    <i class="arw-left" :class="{active:interval}" @mousedown="LvDown" @mouseleave="stop"
                       @mouseup="stop"></i>
                    <i class="arw-right" :class="{active:interval}" @mousedown="LvUp" @mouseleave="stop"
                       @mouseup="stop"></i>
                </div>
                <div id="jLv">/ Jlv. {{baseInfo.jobLv}}</div>
                <div class="arw-div">
                    <i class="arw-left" :class="{active:interval}" @mousedown="jLvDown" @mouseleave="stop"
                       @mouseup="stop"></i>
                    <i class="arw-right" :class="{active:interval}" @mousedown="jLvUp" @mouseleave="stop"
                       @mouseup="stop"></i>
                </div>
            </div>
        </div>
        <div id="baseHeal">
            HP {{baseInfo.hp}} | SP {{baseInfo.sp}} | Weight {{baseInfo.Weight}} |
            <a id="sex" href="" v-on:click.stop.prevent="changeSex">{{this.sex[baseInfo.sex]}}</a>
        </div>

    </div>
</template>

<script>
    export default {
        name: "BaseWin",
        props: [
            'baseInfo',
            'optionGroups'
        ],
        watch: {
            baseInfo: {
                immediate: true,
                deep: true,
                handler(baseInfo, oldValue) {
                    this.$emit('baseInfo', baseInfo);
                }
            }
        },
        data() {
            return {
                sex: ["female", "male"],
                selected: this.baseInfo.currentClass,
                interval: false,
                timeout: 70,
            }
        },
        methods: {
            currentClass(event) {
                this.baseInfo.currentClass = event.target.value;
            },
            changeSex() {
                this.baseInfo.sex = +!this.baseInfo.sex
            },
            LvDown() {
                if (!this.interval) {
                    this.interval = setInterval(() => {
                        if (this.baseInfo.baseLv > 1)
                            --this.baseInfo.baseLv;
                    }, this.timeout)
                }
            },
            LvUp() {
                if (!this.interval) {
                    this.interval = setInterval(() => {
                        if (this.baseInfo.baseLv < 99)
                            ++this.baseInfo.baseLv;
                    }, this.timeout)
                }
            },
            jLvDown() {
                if (!this.interval) {
                    this.interval = setInterval(() => {
                        if (this.baseInfo.jobLv > 1)
                            --this.baseInfo.jobLv;
                    }, this.timeout)
                }
            },
            jLvUp() {
                if (!this.interval) {
                    this.interval = setInterval(() => {
                        if (this.baseInfo.jobLv < 99)
                            ++this.baseInfo.jobLv;
                    }, this.timeout)
                }
            },
            stop() {
                clearInterval(this.interval);
                this.interval = false
            },
        },
    }
</script>

<style scoped>
    #base-win {
        background-image: url("../assets/rosim/skin/basewin_mini.png");
        padding: 0;
        margin: 0;
        height: 34px;
        width: 280px;
        display: block;
    }

    #currentClass {
        height: 17px;
        width: 100px;
    }

    #baseBlock {
        height: 17px;
        margin-bottom: 1px;
        position: relative;
    }

    #baseHeal {
        width: 280px;
        padding: 1px;
        font-size: 12px;
        float: right;
        text-align: right;
    }

    #lvs {
        padding-top: 2px;
        font-size: 12px;
        float: right;
        height: 16px;
        display: flex;
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

    #Lv {
        margin-right: 3px;
    }

    #jLv {
        margin-right: 3px;
    }
</style>