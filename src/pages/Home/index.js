import munster from '../images/munster.png';


export default function Home() {
    return (
        <div>
            <h1>You may like</h1>
            <div className="posts">
                <div box-one>
                    <h2>Munster frequency</h2>
                    <img src= {munster} />
                </div>
            </div>
        </div>
    );
}