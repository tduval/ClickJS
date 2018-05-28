const labor =   {
        id: 0,
        name: 'Manual Labor',
        costEnergy: 10,
        earningMoney: 10,
        purchased: 0
    }

const vehicles = [
    {
        id: 0,
        name: 'Bicycle',
        costMoney: 50,
        costEnergy: 8,
        moneyPerSeconds: 1,
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
        moneyPerSeconds: 3,
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
        moneyPerSeconds: 10,
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
    vehicles: vehicles,
    labor: labor
  },
  mutations: {
    incrementEnergy (state, amount=1){
        state.energyAmount+=amount
        state.clickAmount++
        console.log("Increment Energy")
    },
    doLabor (state){
        console.log("Do : ", labor.name)
        labor.purchased++
        state.energyAmount -= labor.costEnergy
        state.moneyAmount += labor.earningMoney
    },
    buyVehicle (state, vehicleID){
        var vehicle = state.vehicles.find(vehicle => vehicle.id === vehicleID)
        if (vehicle.id === vehicleID) {
            vehicle.purchased++
            state.moneyAmount -= vehicle.costMoney
            console.log("Buy vehicle : ", vehicle.name)
         }
    }
  }
})
