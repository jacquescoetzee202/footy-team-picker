const ButtonGroup = ({ ratingClick, selected }) => {
    return(
        <div className="btn-group">
            <button 
                onClick={ ratingClick }
                data-rating={ 1 }
                className={ selected === 1 ? "selected" : "" }
            >
                ⭐
            </button>
            <button 
                onClick={ ratingClick }
                data-rating={ 2 }
                className={ selected === 2 ? "selected" : "" }
            >
                ⭐⭐
            </button>
            <button 
                onClick={ ratingClick }
                data-rating={ 3 }
                className={ selected === 3 ? "selected" : "" }
            >
                ⭐⭐⭐
            </button>
        </div>
    );
};

export default ButtonGroup;