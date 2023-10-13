export const increment =()=>{
    return {
        type:"INCREMENT"
    }
}

export const decrement =()=>{
    return {
        type:"DECREMENT"
    }
}

export const red =(text)=>{
    return{
        type:'RED',
        payload:text
    }

}

export const green =(text)=>{
    return{
        type:'GREEN',
        payload:text
    }

}

export const displayRead =(text)=>{
    return {
        type:'READ',
        payload:text
    }
}

export const createstudent=(text)=>{
    return{
        type:'CREATE',
        payload:text
    }
}

export const deletestudent=(id)=>{
    return{
        type:'DELETE',
        payload:id
    }
}