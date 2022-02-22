import constants from "./constants"
import Services from "./services"
 
const getListAction = (params) => async dispatch => {
 
    dispatch({
        type: constants.LIST_LOADING
    })

    try {
        const List = await Services.GetList(params)
        dispatch({
            type: constants.LIST_SUCCESS,
            payload: List
        })

    } catch (errMsg) {
        dispatch({
            type: constants.LIST_FAILED,
            errMsg: errMsg
        })
    }

}



const GetSingleListAction = (param1, param2 ) => async dispatch => {
    dispatch({
        type: constants.ITEM_LIST_LOADING,
    })
    try {
        const list = await Services.getSinglist(param1, param2)
        dispatch({
            type: constants.ITEM_LIST_SUCCESS,
            payload:list
        })
    } catch (errMsg) {
        dispatch({
            type: constants.ITEM_LIST_FAILED,
            errMsg: errMsg
        })
    }
}


const FilterPriceRange = (priceRange) => (dispatch) => {
    dispatch({
        type: constants.PRICE_RANGE,
        payload: priceRange
    })
}

const FilterStarRatings = (starRatings) => (dispatch) => {
    dispatch({
        type: constants.STAR_RAINGS,
        payload: starRatings
    })
}




export { getListAction, GetSingleListAction, FilterPriceRange, FilterStarRatings }

