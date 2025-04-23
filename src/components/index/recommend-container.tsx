export interface Props {
    reservations: {
        position: string;
        explanation: string;
        price: string;
    }[];
}

const RecommendContainer = ({ reservations }: Props) => {
    return (
        <section className="recommendations container">
                <h2>🔥 인기 여행지</h2>
                <div className="card-container">
                    {reservations.map((reservation, index) => (
                        <div className="card" key={index}>
                            <h3>{reservation.position}</h3>
                            <p>{reservation.explanation}</p>
                            <p>{reservation.price}</p>
                        </div>
                    ))}
                </div>
        </section>        
    )
}

export default RecommendContainer;
    