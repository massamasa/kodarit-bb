export default function Card({ card }){
    return (
        <>
            <div className='card'>
                <img src={card.kuva} />
            </div>
        </>
    );
}