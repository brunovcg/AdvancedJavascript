


let state = {looged: false, data: {id: 1, techs: [], name: "Matheus"} }


function addTech(id){
  state = {...state, data:{...state.data, techs: [...state.data.techs, id]} }
}


addTech(1)



console.log(state)