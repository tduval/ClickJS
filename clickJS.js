const labor =   {
        id: 0,
        name: 'Manual Labor',
        costEnergy: 10,
        earningMoney: 10,
        purchased: 0
    }

let producers = [
    {
        id: 0,
        name: 'Bicycle',
        costMoney: 50,
        costEnergy: 8,
        moneyPerSeconds: 0,
        energyPerSeconds: 1,
        earningMoney: 15,
        earningEnergy:0,
        purchased: 0
    },
    {
        id: 1,
        name: 'Scooter',
        costMoney: 500,
        costEnergy: 5,
        moneyPerSeconds: 0,
        energyPerSeconds: 2,
        earningMoney: 25,
        earningEnergy:0,
        purchased: 0
    },
    {
        id: 2,
        name: 'Car',
        costMoney: 1000,
        costEnergy: 10,
        moneyPerSeconds: 0,
        energyPerSeconds: 3,
        earningMoney: 100,
        earningEnergy:0,
        purchased: 0
    },
]

const store = new Vuex.Store({
  state: {
    clickAmount: 0,
    moneyAmount: 1000,
    energyAmount: 10,
    producers: producers,
    labor: labor
  },
  mutations: {
    incrementEnergy (state, amount=1){
        state.energyAmount+=amount
        state.clickAmount++
    },
    doLabor (state){
        console.log(labor.name)
        labor.purchased++
        state.energyAmount -= labor.costEnergy
        state.moneyAmount += labor.earningMoney
    },
    buyProducer (state, producerID){
        var producer = state.producers.find(producer => producer.id === producerID)
        if (producer.id === producerID) {
            producer.purchased++
            state.energyAmount -= producer.costEnergy
            state.moneyAmount -= producer.costMoney
         }
         return producer
    }
  }
})
