const labor =   {
        id: 0,
        name: 'Manual Labor',
        earningMoney: 1,
        purchased: 0
    }

const vehicles = [
    {
        id: 0,
        name: 'Bicycle',
        costMoney: 50,
        moneyPerSeconds: 1,
        purchased: 0,
        srcImg: 'assets/images/bike.png'
    },
    {
        id: 1,
        name: 'Scooter',
        costMoney: 500,
        moneyPerSeconds: 3,
        purchased: 0,
        srcImg: 'assets/images/scooter.png'
    },
    {
        id: 2,
        name: 'Car',
        costMoney: 1000,
        moneyPerSeconds: 10,
        purchased: 0,
        srcImg: 'assets/images/car.png'
    },
]

const store = new Vuex.Store({
  state: {
    clickAmount: 0,
    moneyAmount: 1000,
    moneyPerSecond: 0,
    vehicles: vehicles,
    labor: labor
  },
  mutations: {
        incrementMoney (state){
            state.moneyAmount += state.moneyPerSecond
            console.log("Increment Money/s : ", state.moneyPerSecond)
        },
        doLabor (state){
            labor.purchased++
            state.clickAmount++
            state.moneyAmount += labor.earningMoney
            console.log("Do : ", labor.name)
        },
        buyVehicle (state, vehicleID){
            var vehicle = state.vehicles.find(vehicle => vehicle.id === vehicleID)
            if (vehicle.id === vehicleID) {
                vehicle.purchased++
                state.moneyAmount -= vehicle.costMoney
                console.log("Buy vehicle : ", vehicle.name)
             }
        },
        countMoneyPerSecond (state){
            state.moneyPerSecond = 0
            for (let vehicle of state.vehicles) {
                state.moneyPerSecond += vehicle.moneyPerSeconds * vehicle.purchased
            }
            return state.moneyPerSecond
        }
    }
})
