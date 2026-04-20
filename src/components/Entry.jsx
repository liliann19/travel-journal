import './Entry.css'

export default function Entry(props) {
    return (
        <article className="journal-entry">
            <img
                src={props.img.src}
                alt={props.img.alt}
                className="entry-image"
            />

            <div className="entry-content">
                <div className="entry-location-row">
                    <img
                        src="/marker.webp"
                        alt="Image of a map marker"
                        className="marker"
                    />
                    <span className="country">{props.country.toUpperCase()}</span>
                    <a href={props.googleMapsLink}>
                        View on Google Maps
                    </a>
                </div>

                <h2>{props.title}</h2>
                <p className="entry-dates">{props.dates}</p>
                <p className="entry-description">{props.text}</p>
            </div>
        </article>
    )
}