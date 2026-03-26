const TextBlock = ({ text }) => {
    return (
        <>
            {text.map((text, i) => (
                <p key={i}>{text}</p>
            ))}
        </>
    );
}
export default TextBlock