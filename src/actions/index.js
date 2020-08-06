import {CREATE_TREE} from './types';

import history from '../history';

export const createTree = (formValues) => {
    let objArr = [];

    const mappingFn = () => {
            for(let prop in formValues){
                if(prop === "ancestor"){
                    objArr.push({ancestor:formValues[`${prop}`]});
                    continue;
                }

        class ObjConstructor{
            constructor(name,children){
                this.name = name;
                this.children = children
            }
        }

         const arrIterator = (iterObj) => {
             let arr; 
               return iterObj.map((element)=>{
                 console.log(element, "item console");
                let name;
                let children; 

                    for(let prop in element){
                        if(prop.slice(0,2)=== "fi"){
                            name = element[`${prop}`]
                            continue; 
                        }
                        if(prop.slice(0,2) === "ar"){
                            return new ObjConstructor(name,arrIterator(element[`${prop}`]))
                        }    
                    }
                    return new ObjConstructor(name,children = null)
            });//////  
        }
        objArr[0].children = arrIterator(formValues[`${prop}`]); 
      }
      return objArr[0]
    } 

    let newObj = mappingFn();
    history.push("/tree")
    return {
        type: CREATE_TREE,
        payload: newObj
    }
}
  



// const mappingFn = () => {
//     for(let prop in formValues){
//         if(prop === "ancestor"){
//             objArr.push({ancestor:formValues[`${prop}`]});
//             console.log(objArr[0],"obj arr 00000000000000")
//             objArr[0].children =[]; 
//             console.log(objArr)
//             continue;
//         }

//      for(let item of formValues[`${prop}`]){
//          console.log(item, "item console");
//          let obj = {}; 

//         const arrIterator = (item) => {
//             console.log("arrIterator is running <-------------")
//             for(let prop in item){
//                 console.log(prop,"prop in items")

//                 if(prop.slice(0,2)=== "fi"){
//                     obj.name = item[`${prop}`]
//                     continue; 
//                 }

//                 // console.log(objArr.push(obj),"push obj before arr")

//                 console.log(obj.name,"obj name in prop",formValues,"form vlaues")
//                 console.log(prop.slice(0,2),"prop slice.....................")
//                 if(prop.slice(0,2) === "ar"){
//                     console.log("arr is running <------------------")
//                     obj.children = item[`${prop}`];
//                     objArr[0].children.push(obj);
//                     // objArr.push(obj);
//                     arrIterator([item[`${prop}`]]); 

//                 }
//             }

//     }//////
//     arrIterator(item); 
// }

// }
// return objArr[0]
// } 