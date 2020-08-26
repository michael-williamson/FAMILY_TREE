import {CREATE_TREE} from './types';
import history from '../history';

export const createTree = (formValues) => {


let objArr = [];

class ObjConstructor{
    constructor(name,spouseName,children,generation){
        this.name = name;
        this.spouseName = spouseName; 
        this.children = children;
        this.generation = generation; 
    }
}

const mappingFn = () => {
    //start off by hard coding in values to objArr
    objArr.push({ancestor:formValues[`ancestor`]});  
    objArr[0].spouseName =formValues[`ancestorspouse`];

     const arrIterator = (iterObj,generationArg) => {

           if(!iterObj) return; 
           return iterObj.map((element)=>{
            let currentGeneration = generationArg; 
            let generationCounter = generationArg; 
            let name = element[`field`];
            let spouseName = element[`spouse`]  || undefined; 
            let children = element[`arr`] || undefined; 

            //if there are children that will be the next generation
            if (children)  generationCounter+=1 

                return (!children ? 
                        new ObjConstructor(name,spouseName,children,currentGeneration) : 
                        new ObjConstructor(name,spouseName,arrIterator(children,generationCounter),currentGeneration));
        });//////  
    }
    //passing in what would be ancestorChildren named array on formValues;  also starting generation count at 1 since ancestor children are first generation
    objArr[0].children = arrIterator(formValues[`ancestorChildren`],1); 
  
  //adding generation prop and value after objArr was created and all iterations are done
  objArr[0].generation =0;
  return objArr[0]
} 

let newObj = mappingFn();


history.push(`${process.env.PUBLIC_URL}/tree`);

return {
    type: CREATE_TREE,
    payload: newObj
}
}