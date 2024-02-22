const FavoriteButton = ({handleFavorite, name}) => {

    return (
        <div className="p-2 w-full mt-auto">
            <button className="w-full bg-[#1560bd] text-[white] rounded-md p-1 hover:bg-indigo-500" onClick={handleFavorite}>{name}</button>
        </div>
    )
}

export default FavoriteButton