// import CustomSwiper from './components/CustomSwiper';
import CustomSlide from './CustomSlide';

const BlogSlide = () => {
  const images = [
    'https://via.placeholder.com/800x400?text=Slide+1',
    'https://via.placeholder.com/800x400?text=Slide+2',
    'https://via.placeholder.com/800x400?text=Slide+3',
  ];

  return (
    <div className="max-w-[800px] mx-auto my-10">
      <CustomSlide slides={images} />
    </div>
  );
};

export default BlogSlide;
