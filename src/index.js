import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Welcome nama="Rozin"/>
    </>
);



const nama = 'rozin';

function Home(nama) {
    if (props.nama!= null) {
        function Welcome(props){
            return <h1>Selamat datang {props.nama} </h1>;
        }
    }
    function button(props){
        return <button>Login</button>
    }
    const root1 = ReactDOM.createRoot(document.getElementById("root1"));
    root1.render(
        <>
            <Home />
        </>
    );
}
