import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {


  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
    const newInputValue = inputValue.trim();
    if(newInputValue.length <= 0) return;
    // setCategories( categories => [inputValue, ...categories]);

    onNewCategory( newInputValue );
    
    setInputValue('');

  }

  return (
    <form onSubmit={onSubmit}>
      
      <input 
      type="text" 
      placeholder="Buscar Gif"
      value={ inputValue }
      onChange={ onInputChange }
      
      />
    </form>
  )
}
