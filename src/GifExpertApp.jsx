import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Overwatch']);
    const onAddCategory = (onNewCategory) => {

      if( categories.includes(onNewCategory) ) return;


        setCategories([ onNewCategory ,...categories ]);
    }
  return (
    <>
      
      <h1 className="titulo1">Buscador de gif prrones</h1>
      <br />

      <AddCategory onNewCategory={ onAddCategory }/>

      {
        categories.map(( category ) => (

          <GifGrid

          key={ category }
          category= { category } 

          />


        )
          )
      }


  


    </>
  )
}
