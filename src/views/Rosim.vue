<template>
    <div id="rosim">
        <div id="rosimLeftWin">
            <BaseWin v-bind:baseInfo="baseInfo" v-bind:optionGroups="optionGroups" @base-info="baseInfo" />
            <StatWin v-bind:baseInfo="baseInfo" />
            <EquipWin v-bind:baseInfo="baseInfo" @base-info="baseInfo" />
            <div id="short-item-win"/>
        </div>
        <div>
            <div id="skill-win"/>
        </div>
    </div>
</template>

<script>
    import StatWin from '../components/StatWin'
    import BaseWin from '../components/BaseWin'
    import EquipWin from '../components/EquipWin'

    export default {
        name: "Rosim",
        components: {
            StatWin,
            BaseWin,
            EquipWin
        },
        watch: {
            baseInfo: {
                immediate: true,
                deep: true,
                handler(baseInfo) {
                    // if (baseInfo.sex) {
                    //     console.log(this.optionGroups["2nd Job"].findIndex(x => x.id === 16))
                    // }
                }
            }
        },
        data() {
            return {
                baseInfo: {
                    currentClass: 1,
                    sex: 1,
                    baseLv: 1,
                    jobLv: 1,
                    str: 1, agi: 1, vit: 1, int: 1, dex: 1, luk: 1,
                    hp: 40, sp: 11, Weight: 2030,
                },
                sex: ["female", "male"],
                optionGroups: {
                    "Novice": [
                        {id: 0, name: "Novice"},
                    ],
                    "1st Job": [
                        {id: 1, name: "Swordman"},
                        {id: 2, name: "Thief"},
                        {id: 3, name: "Acolyte"},
                        {id: 4, name: "Archer"},
                        {id: 5, name: "Mage"},
                        {id: 6, name: "Merchant"},
                    ],
                    "2nd Job": [
                        {id: 7, name: "Knight"},
                        {id: 8, name: "Assassin"},
                        {id: 9, name: "Priest"},
                        {id: 10, name: "Hunter"},
                        {id: 11, name: "Wizard"},
                        {id: 12, name: "Blacksmith"},
                        {id: 13, name: "Crusader"},
                        {id: 14, name: "Rogue"},
                        {id: 15, name: "Monk"},
                        {id: 16, name: "Bard"},
                        {id: 17, name: "Dancer"},
                        {id: 18, name: "Sage"},
                        {id: 19, name: "Alchemist"},
                    ],
                    "Super Novice": [
                        {id: 20, name: "Super Novice"},
                        {id: 73, name: "Expanded Super Novice"},
                    ],
                    "Transcended Novice": [
                        {id: 34, name: "High Novice"},
                    ],
                    "Transcended 1st Job": [
                        {id: 35, name: "High Swordman"},
                        {id: 36, name: "High Thief"},
                        {id: 37, name: "High Acolyte"},
                        {id: 38, name: "High Archer"},
                        {id: 39, name: "High Magician"},
                        {id: 40, name: "High Merchant"},
                    ],
                    "Transcended 2nd Job": [
                        {id: 21, name: "Lord Knight"},
                        {id: 22, name: "Assassin Cross"},
                        {id: 23, name: "High Priest"},
                        {id: 24, name: "Sniper"},
                        {id: 25, name: "High Wizard"},
                        {id: 26, name: "Mastersmith"},
                        {id: 27, name: "Paladin"},
                        {id: 28, name: "Stalker"},
                        {id: 29, name: "Champion"},
                        {id: 30, name: "Clown"},
                        {id: 31, name: "Gypsy"},
                        {id: 32, name: "Scholar"},
                        {id: 33, name: "Biochemist"},
                    ],
                    "Non-Transcended 3rd Job": [
                        {id: 46, name: "Rune Knight (non-trans)"},
                        {id: 48, name: "Guillotine Cross (non-trans)"},
                        {id: 50, name: "Arch Bishop (non-trans)"},
                        {id: 52, name: "Ranger (non-trans)"},
                        {id: 54, name: "Warlock (non-trans)"},
                        {id: 56, name: "Mechanic (non-trans)"},
                        {id: 58, name: "Royal Guard (non-trans)"},
                        {id: 60, name: "Shadow Chaser (non-trans)"},
                        {id: 62, name: "Sura (non-trans)"},
                        {id: 64, name: "Minstrel (non-trans)"},
                        {id: 66, name: "Wanderer (non-trans)"},
                        {id: 68, name: "Sorcerer (non-trans)"},
                        {id: 70, name: "Geneticist (non-trans)"},
                    ],
                    "Transcended 3rd Job": [
                        {id: 47, name: "Rune Knight (trans)"},
                        {id: 49, name: "Guillotine Cross (trans)"},
                        {id: 51, name: "Arch Bishop (trans)"},
                        {id: 53, name: "Ranger (trans)"},
                        {id: 55, name: "Warlock (trans)"},
                        {id: 57, name: "Mechanic (trans)"},
                        {id: 59, name: "Royal Guard (trans)"},
                        {id: 61, name: "Shadow Chaser (trans)"},
                        {id: 63, name: "Sura (trans)"},
                        {id: 65, name: "Minstrel (trans)"},
                        {id: 67, name: "Wanderer (trans)"},
                        {id: 69, name: "Sorcerer (trans)"},
                        {id: 71, name: "Geneticist (trans)"},
                    ],
                    "Expanded 1st Job": [
                        {id: 41, name: "Taekwon Kid"},
                        {id: 44, name: "Ninja"},
                        {id: 45, name: "Gunslinger"},
                    ],
                    "Expanded 2nd Job": [
                        {id: 42, name: "Teakwon Master"},
                        {id: 43, name: "Soul Linker"},
                        {id: 72, name: "Kagerou/Oboro"},
                    ]
                }
            }
        },
    }
</script>

<style scoped>
    #rosim {
        font-size: 10px;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none;   /* Chrome/Safari/Opera */
        -khtml-user-select: none;    /* Konqueror */
        -moz-user-select: none;      /* Firefox */
        -ms-user-select: none;       /* Internet Explorer/Edge */
        user-select: none;           /* Non-prefixed version, currently not supported by any browser */
    }
    #rosimLeftWin {
        margin: 0;
        width: 280px;
    }
    #short-item-win {
        background-image: url("../assets/rosim/skin/shortitem_bg.png");
        padding-top: 35px;
        background-repeat: no-repeat;
    }


</style>