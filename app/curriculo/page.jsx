"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJava,
  FaPython,
  FaMarkdown,
  FaLinux,
  FaGithub,
  FaGit,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";

// About
const sobre = {
  title: "Sobre mim",
  description:
    "Sou um profissional dedicado com experiência em desenvolvimento de software e operações financeiras. Atualmente, estou concluindo minha graduação em Engenharia da Computação e cursando programação full stack. Tenho um sólido conhecimento em linguagens de programação, especialmente JavaScript e TypeScript, e estou desenvolvendo uma API RESTful focada em gestão de tarefas, além de um projeto de PDV (Frente de Caixa). Sou proficiente no uso de diversas bibliotecas e ferramentas, como PostgreSQL, jsonwebtoken, bcrypt, axios, e multer, e estou familiarizado com ambientes de desenvolvimento como Fedora Workstation. Estou em busca de oportunidades para aplicar minhas habilidades em um ambiente profissional e contribuir para o crescimento da empresa.",
  info: [
    {
      fieldName: "Nome",
      fieldValue: "Marco Pezzote",
    },
    {
      fieldName: "Telefone",
      fieldValue: "+55 19 9 9346 6830",
    },
    {
      fieldName: "Experiência",
      fieldValue: "6 meses",
    },
    {
      fieldName: "Email",
      fieldValue: "pezzote@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Disponível",
    },
    {
      fieldName: "Idiomas",
      fieldValue: " Português/BR, Inglês",
    },
  ],
};

// Experiencia
const experiencia = {
  icon: "/assets/resume/badge.svg",
  title: "Minha experiêcnia",
  description:
    "Sou um profissional com ampla experiência em gestão financeira e no setor comercial. Possuo habilidades em liderança, comunicação oral e escrita, e resiliência. Atuei tanto no setor público quanto no privado, participando de processos de compra e venda, licitações, operações financeiras, entre outras funções. Estou sempre buscando novas oportunidades para aplicar minhas competências e contribuir para o sucesso da organização.",
  items: [
    {
      empresa: "Transição de carreira",
      cargo: "Desenvolvedor Full Stack",
      periodo: "2023 - atual",
    },
    {
      empresa: "MpZ Transportes",
      cargo: "Autônomo | MEI",
      periodo: "2018 - atual",
    },
    {
      empresa: "Pref. Municipal de Indaiatuba",
      cargo: "Sup. Técnico Administrativo",
      periodo: "2013 - 2018",
    },
    {
      empresa: "Autônomo",
      cargo: "Comercial | Design",
      periodo: "2003 - 2013",
    },
  ],
};

// Educacao
const educacao = {
  icon: "/assets/resume/cap.svg",
  title: "Formação Acadêmica",
  description:
    "Estou concluindo minha graduação em Engenharia da Computação e estudando Programação Full Stack, adquirindo uma sólida base teórica e prática em desenvolvimento de software.",
  items: [
    {
      instituicao: "Cubos Academy",
      curso: "Developer Full-Stack",
      periodo: "Out/2023 - Dez/2024",
    },
    {
      instituicao: "Univesp",
      curso: "Engenharia da Computação",
      periodo: "Fev/2018 - Jun/2025",
    },
    {
      instituicao: "FIEC - Indaiatuba",
      curso: "Técnico em Gestão Empresarial",
      periodo: "Fev/2001 - Dez/2002",
    },
  ],
};

// Habilidades
const habilidades = {
  title: "Habilidades",
  description:
    "Tenho uma forte competência técnica em linguagens de programação como JavaScript e TypeScript, além de experiência no desenvolvimento de APIs RESTful e no uso de ferramentas como jsonwebtoken, bcrypt, axios e multer. Minha habilidade em programação assíncrona e gestão de banco de dados PostgreSQL complementa minha expertise técnica. Além disso, possuo habilidades interpessoais importantes, como liderança, comunicação oral e escrita, e resiliência, que me permitem colaborar eficazmente em equipes e enfrentar desafios com determinação.",
  skillList: [
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <FaGit />,
      name: "git",
    },
    {
      icon: <FaGithub />,
      name: "github",
    },
    {
      icon: <SiPostgresql />,
      name: "postgresql",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css3",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaMarkdown />,
      name: "markdown",
    },
    {
      icon: <FaLinux />,
      name: "linux",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "css3",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:p-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experiencia"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experiencia">Experiência</TabsTrigger>
            <TabsTrigger value="educacao">Formação</TabsTrigger>
            <TabsTrigger value="habilidades">Habilidades</TabsTrigger>
            <TabsTrigger value="sobre">Sobre mim</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/*experiencia*/}
            <TabsContent value="experiencia" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experiencia.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experiencia.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experiencia.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.periodo}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.cargo}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.empresa}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*educacao*/}
            <TabsContent value="educacao" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{educacao.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {educacao.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {educacao.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.periodo}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.curso}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.instituicao}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*habilidades*/}
            <TabsContent value="habilidades" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3>{habilidades.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {habilidades.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                  {habilidades.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/*sobre*/}
            <TabsContent
              value="sobre"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{sobre.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {sobre.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {sobre.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-accent">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
