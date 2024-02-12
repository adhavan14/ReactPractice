
const images = [
    {
        name : "Minion",
        image : "/src/resources/alison-wang-mou0S7ViElQ-unsplash.jpg"
    },
    {
        name : "Batman",
        image : "/src/resources/andrew-reshetov-XzEqlPQsLdI-unsplash.jpg"
    },
    {
        name : "Doreman",
        image : "/src/resources/harshit-mahabale-tkdqPQyMKTI-unsplash.jpg"
    },
    {
        name : "Hammer",
        image : "/src/resources/anirudh-3esjG-nlgyk-unsplash.jpg"
    }
]



const Cartoon = ({imageIndex}) => {

    return (
        <div>
            <h3 className="image-name">{images[imageIndex].name}</h3>
            <img alt={images[imageIndex].name} src = {images[imageIndex].image} className="image"/>
        </div>
    )
}

export default Cartoon