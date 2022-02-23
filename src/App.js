import React, {useState} from 'react';
import './index.css';


const App = () => {
    const [items, setItems] = useState([]);

    const [inputValue, setInputValue] = useState('');

    const Ajouter = () => {
        const newItem = {
            itemName: inputValue,
            isSelected: false,
        };

        const newItems = [ ...items, newItem];

        setItems(newItems);
        setInputValue('');
    };


    const Supprimer = (index) => {
        const newItems = [ ...items];

        newItems[index].isSelected = !newItems[index].isSelected;

        setItems(newItems);
    };


    return (
        <div className='app-background'>
            <div className='main-container'>
                <h1>Liste des courses</h1>
                <div className='list'>
                    {items.map((item, index) => (
                        <div className='container'>
                            <div className='name' onClick={() => Supprimer(index)}>
                                {item.isSelected ? (
                                    <>
                                        <span className='supprimer'>{item.itemName}</span>
                                    </>
                                ) : (
                                    <>
                                        <span>{item.itemName}</span>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <h2>Ajouter un nouvel item à la liste :</h2>
                <div className='box'>
                    <input value={inputValue} onChange={(event) => setInputValue(event.target.value)}
                           className='input-item' placeholder='Ajouter un produits'/>
                </div>
                    <button onClick={() => Ajouter()}>Ajouter</button>
            </div>
        </div>
    );
};

export default App;