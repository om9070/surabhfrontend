import Image from "next/image"



interface ImageContentProps {
    image: string,
    content: string,
    title: string,
    imagePosition: string

}


const ImageContent: React.FC<ImageContentProps> = ({ image, content, title, imagePosition }) => {

    return (
        <div>
            <div className="p-5 grid grid-cols-2">
                <div className={`order-${imagePosition}`}>
                    <Image src={`/images/${image}`} height={700} width={700} alt={"for brands image"} className="px-3" />
                </div>
                <div className="px-3">
                    <h2 className="text-lg font-medium">{title}</h2>
                    <p className="text-base pr-10">{content}</p>
                </div>
            </div>
        </div>
    )
}

export default ImageContent



