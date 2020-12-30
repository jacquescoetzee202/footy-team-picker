const ButtonGroup = ({ handleClick, selected, id, skill }) => {
    return(
        <div className="btn-group">
            <div className="btn-group__label"><p>{ skill }:</p></div>
            <button 
                onClick={ handleClick }
                data-rating={ 1 }
                data-id={ id }
                data-skill={ skill }
                className={`btn-group__btn ${ selected === 1 ? "selected" : "" }`}
            >
                ⭐
            </button>
            <button 
                onClick={ handleClick }
                data-rating={ 2 }
                data-id={ id }
                data-skill={ skill }
                className={`btn-group__btn ${ selected === 2 ? "selected" : "" }`}
            >
                ⭐⭐
            </button>
            <button 
                onClick={ handleClick }
                data-rating={ 3 }
                data-id={ id }
                data-skill={ skill }
                className={`btn-group__btn ${ selected === 3 ? "selected" : "" }`}
            >
                ⭐⭐⭐
            </button>
        </div>
    );
};

export default ButtonGroup;