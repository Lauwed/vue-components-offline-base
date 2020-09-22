/**
 * Chart component
 */

Vue.component('ChartBars', {
    template: `<div class="chart">
        <div class="chart__group" :class="'chart__group--' + groupIndex " v-for="(group, groupIndex) in groups" :key="groupIndex" @click="$emit('clicked', group)">
            <h4 class="chart__title">{{ group.title }}</h4>

            <div class="chart__graph">
                <ul class="chart__grid chart__grid--line">
                    <li data-ejeY='20'></li>
                    <li data-ejeY='40'></li>
                    <li data-ejeY='60'></li>
                    <li data-ejeY='80'></li>
                    <li data-ejeY='100'></li>
                </ul>
                <div class="chart__rows">
                    <template v-for="row in group.rows" :key="row.id + '--' + groupIndex">
                        <span class="chart-x">
                            {{ row.name }}
                        </span>
                        
                        <div class="chart-y" :class="{ hidden: false }" :style="{ width: row.value + '%' }">
                            {{ round(row.value) }}%
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>`,

    props: ['groups'],
    methods: {
        /**
         * Round a number to the nearest integer
         * @param {number} value 
         * @returns {int}
         */
        round(value) {
            return Math.round(value);
        }
    }
})