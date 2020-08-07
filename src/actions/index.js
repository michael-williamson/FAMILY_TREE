import {CREATE_TREE} from './types';
import history from '../history';


export const createTree = (formValues,fields) => {

        let obj ={}; 

        for(let prop in fields){
        if(fields[prop].name === "ancestor" || fields[prop].name === "ancestorChildren"){
            continue; 
        }
        let regEx = /\[\d+\]/g;
        let arr = fields[prop].name.match(regEx);
        //length of current array is an indicator of which generation current iteration is on
        let len = arr?.length || 0; 
        len = len.toString(); 
        //creating an object out of length properties and adding # of values for each
        if(Object.keys(obj).includes(len)){
            obj[len] = obj[len] + 1; 
        }else if(!Object.keys(obj).includes(len)){
            obj[len] = 1; 
        }
    }


    let determineMax = () => {
        let max = 0; 
        for(let prop in obj){
            if(obj[prop] > max){
                max = obj[prop]
            }
        }
        return max
    }

    let parentHeight = (Math.floor(determineMax()/2)) * 200; 

    /////****************************************************************** */

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
               return iterObj.map((element)=>{
                 console.log(element, "item console");
                let name;
                let children = null

                    for(let prop in element){
                        if(prop.slice(0,2)=== "fi"){
                            name = element[`${prop}`]
                            continue; 
                        }
                        if(prop.slice(0,2) === "ar"){
                            return new ObjConstructor(name,arrIterator(element[`${prop}`]))
                        }    
                    }
                    return new ObjConstructor(name,children)
            });//////  
        }
        objArr[0].children = arrIterator(formValues[`${prop}`]); 
      }
      return objArr[0]
    } 

    let newObj = mappingFn();
    newObj.parentHeight = parentHeight; 

    history.push("/tree");

    return {
        type: CREATE_TREE,
        payload: newObj
    }
}
  