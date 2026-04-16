import TextBlock from "./blocks/TextBlock";
import ListBlock from "./blocks/ListBlock";
import TagsBlock from "./blocks/TagsBlock";
import CardsBlock from "./blocks/CardsBlock";
import LayoutBlock from "./blocks/LayoutBlock"

const blockMap = {
    text: TextBlock,
    list: ListBlock,
    tags: TagsBlock,
    cards: CardsBlock,
    layout: LayoutBlock
};

const PostBody = ({ blocks }) => {
  return (
    <div className="post-body">
      {blocks.map((block, index) => {
        const Component = blockMap[block.type];

        if (!Component) return null;

        return <Component key={index} {...block.data} />;
      })}
    </div>
  );
}
export default PostBody