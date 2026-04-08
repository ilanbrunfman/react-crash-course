import { motion } from "framer-motion";
import RouterLink from '@/components/RouterLink/RouterLink';
import Image from "@/components/image/Image"
import Icon from '@/components/icons/Icon';

const MotionLink = motion(RouterLink);

const Item = ({item}) => {
    return (
        <MotionLink 
            to={item.path} 
            className="item"
            // layout
            initial={{ alpha: 0, }}
            animate={{ alpha: 1, }}
            exit={{ alpha: 0, }}
            transition={{ duration: 0.15 }}
        >
            <div className="item-header">
                <Image 
                    file={item.thumbnail.file} 
                    alt={item.thumbnail.alt} 
                    ratio={item.thumbnail.ratio} 
                    className={item.thumbnail.className} 
                />
            </div>
            <div className="item-body">
                <h3 className="title">{item.title}</h3>
                <h4 className="sub">{item.sub}</h4>
            </div>
            <div className="item-footer">
                <Icon
                    name={'IconCaretRight'}
                    size="16"
                    className="icon"
                />
            </div>
        </MotionLink>
        
    )
}

export default Item;