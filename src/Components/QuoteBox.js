const QuoteBox  = ({ text }) => {
    return(
        <div className='Container-QuoteBox'>
                <blockquote>
                <b><p>{text.quote}</p></b> 
                <p>{text.author}</p>
                </blockquote>
        </div>
    )
}

export default QuoteBox;