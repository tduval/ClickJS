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
        discovered: false,
        srcIco: 'fa fa-bicycle',
        srcSprite: 'assets/images/bicycle_spritesheet_h63px.png',
    },
    {
        id: 1,
        name: 'Scooter',
        costMoney: 500,
        moneyPerSeconds: 3,
        purchased: 0,
        discovered: false,
        srcIco: 'fa fa-motorcycle',
        srcSprite: 'assets/images/scooter_spritesheet_h63px.png',
    },
    {
        id: 2,
        name: 'Car',
        costMoney: 1000,
        moneyPerSeconds: 10,
        purchased: 0,
        discovered: false,
        srcIco: 'fa fa-car',
        srcSprite: 'assets/images/car_spritesheet_h63px.png',
    },
]

const store = new Vuex.Store({
  state: {
    clickAmount: 0,
    moneyAmount: 10000,
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
        discoverVehicle (state){
            for (let vehicle of state.vehicles) {
                if(vehicle.discovered === false && state.moneyAmount >= vehicle.costMoney){
                    console.log("Discovered : ", vehicle.name)
                    vehicle.discovered = true
                }
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
