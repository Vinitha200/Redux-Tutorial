

const initialState = {
    result: 0,
    background:'black',
    studentList:[],
}

export const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                result: state.result + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                result: state.result - 1
            }
        case 'RED':
            return{
                ...state,
                background:'red',
                textColor:action.payload
            }
        case 'GREEN':
                return{
                    ...state,
                background:'green',
                textColor:action.payload
                }
        case 'READ':
            return{
              ...state,
              studentList:[ {
                id:1,
                student:"Ravi",
                collage:"BIT"
            }]
            }    
        case 'CREATE':
            
            return{
                ...state,
                studentList:[...state.studentList,action.payload]
              }  
        case 'DELETE':
            return{
                ...state,
                studentList:state.studentList.filter((user)=>user.id!==action.payload)
            }      

        default:
            return state
    }
}