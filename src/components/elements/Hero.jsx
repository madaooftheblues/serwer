import Button from './Button';

const Hero = () => {
  return (
    <section className="flex mt-10 mb-0">
      <div className="flex-1 text-center">
        <h1 className="text-xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni veniam
          magnam quas distinctio!
        </h1>
        Error, animi ipsam quasi aperiam quam enim aspernatur saepe molestiae
        illum voluptate consequatur, doloremque, provident quae autem.``
      </div>
      <div className="flex-[2]"></div>
      <div className="flex-1 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facilis
        non obcaecati ut ipsum quibusdam culpa alias, nulla, molestiae earum nam
        temporibus? Velit eaque, nemo adipisci tempore exercitationem delectus
        laborum!
        <Button className="bg-blue-800 text-yellow-50 my-5">Register!</Button>
      </div>
    </section>
  );
};

export default Hero;
