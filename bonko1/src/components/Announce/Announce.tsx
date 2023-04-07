import './Announce.css';

type AnnounceProps = {
    title: string;
    description: string;
    author: string;
}

function Announce(props: AnnounceProps) {

    return (
        <div className="card">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.author}</p>
        </div>
    );

}

export default Announce;