import { Card } from './ui/card';

export default function LoadingSkeleton() {
    const totalCards = 16;
    return (
        <div className='md:w-[85%] w-[95%] m-auto grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-5'>
            {
                Array.from({ length: totalCards }).map((_, index) => {
                    return (
                        <Card key={index} className="flex flex-col h-[300px] md:h-[481px] gap-6 mb-6 relative animate-pulse">
                            {/* Image Placeholder */}
                            <div className="h-[260px] md:h-[350px] w-full bg-lightGray"></div>

                            {/* Text Placeholder */}
                            <div className="flex flex-col gap-2 px-4 py-2">
                                <div className="flex gap-4 md:justify-between">
                                    <div className="flex flex-col">
                                        <div className="h-4 w-3/4 bg-lightGray rounded"></div>
                                        <div className="h-4 w-1/2 bg-lightGray rounded mt-2"></div>
                                    </div>
                                    <div className="w-[54px] h-[30px] bg-lightGray rounded"></div>
                                </div>
                            </div>

                            {/* Price & Rating Placeholder */}
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:space-x-4 sm:mt-2 mt-0 px-4">
                                <div className="flex gap-4 font-din_medium">
                                    <div className="h-4 w-12 bg-lightGray rounded"></div>
                                    <div className="h-4 w-8 bg-lightGray rounded"></div>
                                </div>
                                <div className="flex gap-1">
                                    <div className="h-4 w-4 bg-lightGray rounded-full"></div>
                                    <div className="h-4 w-4 bg-lightGray rounded-full"></div>
                                    <div className="h-4 w-4 bg-lightGray rounded-full"></div>
                                </div>
                            </div>

                            {/* Wishlist Icon Placeholder */}
                            <div className="flex absolute w-[40px] h-[30px] md:h-[40px] xl:h-[40px] bg-lightGray justify-center items-center right-0"></div>
                        </Card>
                    );
                })
            }
        </div>
    )
}