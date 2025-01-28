import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*/ TEXTO */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Desenvolvedor Full Stack</span>
            <h1 className="h1 mb-6">
              Hello, world! Eu sou o <br />
              <span className="text-accent">Marco Pezzote</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Sou especialista em resolver problemas e criar experiências
              digitais únicas e inovadoras. Tenho facilidade para trabalhar com
              diversas linguagens de programação e tecnologias variadas.
            </p>
            {/*/ btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                as="a"
                href="https://drive.google.com/uc?id=1XBRLJ3fGp8HBOaYuJ2uk38vl8NcRJGJl&export=download"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all durations-500"
                />
              </div>
            </div>
          </div>
          {/*/ foto */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
