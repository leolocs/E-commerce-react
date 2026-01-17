export default function App({onClick, children}) {
    return (
        <button className="btn" onClick={onClick}>
            {children}
        </button>
    );
}