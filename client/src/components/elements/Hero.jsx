import Button from './Button';

const Hero = () => {
  return (
    <section className="sm:flex mt-10 mb-0">
      <div className="flex-1 text-center">
        <h1 className="text-xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni veniam
          magnam quas distinctio!
        </h1>
        <p>
          Error, animi ipsam quasi aperiam quam enim aspernatur saepe molestiae
          illum voluptate consequatur, doloremque, provident quae autem.``
        </p>
      </div>
      <div className="sm:flex-[2]"></div>
      <div className="sm:flex-1 text-center my-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facilis
          non obcaecati ut ipsum quibusdam culpa alias, nulla, molestiae earum
          nam temporibus? Velit eaque, nemo adipisci tempore exercitationem
          delectus laborum!
        </p>
        <Button className="bg-blue-800 text-yellow-50 my-5">Register!</Button>
      </div>
    </section>
  );
};

export default Hero;
