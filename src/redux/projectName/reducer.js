import constants from "./constants"

const initialData = {
    loading: true,
    data: [],
    errMsg: "",
}


const Reducer1 = (state = initialData, actions) => {

    switch (actions.type) {
        case constants.LIST_LOADING:
            return {
                loading: true,
            }

        case constants.LIST_SUCCESS:
            return {
                loading: false,
                suggestedCityList: actions.payload
            }

        case constants.LIST_FAILED:
            return {
                loading: false,
                suggestedCityList: actions.payload
            }

        default:
            return state

    }
}


const Reducer2 = (state = initialData, actions) => {

    switch (actions.type) {
        case constants.ITEM_LIST_LOADING:
            return {
                loading: true,
            }
        case constants.ITEM_LIST_SUCCESS:
            return {
                loading: false,
                data: actions.payload
            }
        case constants.ITEM_LIST_FAILED:
            return {
                loading: false,
                data: actions.payload
            }

        default:
            return state

    }
}


const Reducer3 = (state = null, { type, payload }) => {
    switch (type) {
        case constants.PRICE_RANGE:
            return payload
        default:
            return state
    }
}

const Reducer4 = (state = null, { type, payload }) => {
    switch (type) {
        case constants.STAR_RAINGS:
            return payload

        default:
            return state
    }
}




export { Reducer1, Reducer2, Reducer3, Reducer4 }



