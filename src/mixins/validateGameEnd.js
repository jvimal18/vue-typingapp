import { mapGetters, mapMutations, mapActions } from 'vuex'

export const mymixin = {
    computed: {
        ...mapGetters(['getLifePoint', 'getWrongTypeCount'])
    },
    watch: {
        getLifePoint() {
            if ( this.getLifePoint <= 0 ){
                this.setGameLive(false)
                this.resetAllDefaults()
            }
        },
        getWrongTypeCount() {
            if ( this.getWrongTypeCount >= 50 ){
                this.setGameLive(false)
                this.resetAllDefaults()
            }
        }
    },
    methods: {
        ...mapMutations(['setGameLive', 'setLifePoint', 'setWrongTypeCount']),
        ...mapActions(['resetAllDefaults'])
    }
}


