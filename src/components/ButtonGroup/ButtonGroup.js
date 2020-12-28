const ButtonGroup = ({ handleClick, selected, id }) => {
    return(
        <div className="btn-group">
            <button 
                onClick={ handleClick }
                data-rating={ 1 }
                data-id={ id }
                className={ +selected === 1 ? "selected" : "" }
            >
                ⭐
            </button>
            <button 
                onClick={ handleClick }
                data-rating={ 2 }
                data-id={ id }
                className={ +selected === 2 ? "selected" : "" }
            >
                ⭐⭐
            </button>
            <button 
                onClick={ handleClick }
                data-rating={ 3 }
                data-id={ id }
                className={ +selected === 3 ? "selected" : "" }
            >
                ⭐⭐⭐
            </button>
        </div>
    );
};

export default ButtonGroup;