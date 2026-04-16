import Element from "@/components/element/Element";

const LayoutBlock = ({ layout }) => {
    return (
        <>
            {layout.map((node, index) => (
                <Element key={index} node={node} />
            ))}
        </>
    );
}

export default LayoutBlock