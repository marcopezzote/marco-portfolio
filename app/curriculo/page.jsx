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
      fildname: "Nome",
      fieldValue: "Marco Pezzote",
    },
    {
      fildname: "Telefone",
      fieldValue: "+55 19 9 9346 6830",
    },
    {
      fildname: "Experiência",
      fieldValue: "Em transição de carreira",
    },
    {
      fildname: "Email",
      fieldValue: "pezzote@gmail.com",
    },
    {
      fildname: "Freelance",
      fieldValue: "Disponível",
    },
    {
      fildname: "Idioma",
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
      cargo: " Developer Full-Stack | Back-End | Front-End",
      periodo: "2023 - atual",
    },
    {
      empresa: "MpZ Transportes",
      cargo: "Autônomo | MEI",
      periodo: "2018 - atual",
    },
    {
      empresa: "Prefeitura Municipal de Indaiatuba",
      cargo: "Supervisor Técnico e de Serviços Administrativos",
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
  description: "Formação Acadêmica",
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
  description: "Hard Skills",
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
            <TabsTrigger value="educacao">Educação</TabsTrigger>
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
                        <li key={index}>
                          <span>{item.periodo}</span>
                          <h3>{item.cargo}</h3>
                          <div>
                            <span></span>
                            <p>{item.empresa}</p>
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
              Educação
            </TabsContent>
            {/*habilidades*/}
            <TabsContent value="habilidades" className="w-full">
              Habilidades
            </TabsContent>
            {/*sobre*/}
            <TabsContent value="sobre" className="w-full">
              Sobre mim
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
