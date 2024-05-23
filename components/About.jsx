import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Rosyamdani",
  },
  {
    icon: <MailIcon size={20} />,
    text: "rosyamdani@gmail.com",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+6287885727458",
  },
  {
    icon: <Calendar size={20} />,
    text: "Lahir pada tanggal 2 Mei, 2002",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Berkuliah di Universitas Ahmad Dahlan",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Pringgabaya, Lombok Timur, NTB, Indonesia.",
  },
];

const qualificationData = [
  {
    title: "pendidikan",
    data: [
      {
        university: "Universitas Ahmad Dahlan",
        qualification: "Sarjana Komputer",
        year: "2020 - 2024",
      },
    ],
  },
  {
    title: "pengalaman",
    data: [
      {
        company: "PT. Trafoindo Prima Perkasa",
        role: "Fullstack Developer Internship",
        year: "2022 - 2023",
      },
      {
        company: "PT. Tokopedia Indonesia (Amin)",
        role: "Fullstack Developer",
        year: "2024 - 2026",
      },
    ],
  },
];

const skillsData = [
  {
    title: "skill",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "PHP, Laravel",
      },
      {
        name: "Javascript, React",
      },
      {
        name: "Fullstack Development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Tentang saya
        </h2>
        <div className="flex  flex-col xl:flex-row">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative "
              imgSrc="/about/developer.png"
            />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Kualifikasi
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Keahlian
                </TabsTrigger>
              </TabsList>
              {/* Tabs Konten */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal info */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Kualitas Layanan Tak Tertandingi Selama Lebih Dari 2 Tahun
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Saya berspesialisasi dalam membuat situs web intuitif
                      dengan teknologi mutakhir, memberikan pengalaman pengguna
                      yang dinamis dan menarik
                    </p>
                    {/* Info data */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* Language skills */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Bahasa yang di kuasai</div>
                      <div className="border-b border-border"></div>
                      <div>English, Indonesian, Arab, French</div>
                    </div>
                  </div>
                </TabsContent>
                {/* Kualifikasi */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      Perjalananku Yang Luar Biasa
                    </h3>
                    {/* Pengalaman dan Pendidikan */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Pengalaman */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "pengalaman").title}
                          </h4>
                        </div>
                        {/* List data pengalaman */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "pengalaman").data.map(
                            (item, index) => {
                              const { company, role, year } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="h-[11px] w-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* Pendidikan */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "pendidikan").title}
                          </h4>
                        </div>
                        {/* List data pengalaman */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "pendidikan").data.map(
                            (item, index) => {
                              const { university, qualification, year } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="h-[11px] w-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Skills & Tools */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Yang Saya Gunakan Setiap Hari</h3>
                    {/* Skill */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Keahlian</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* List Keahlian */}
                      <div>
                        {getData(skillsData, "skill").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* Tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Alat</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Tool List */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillsData, "tools").data.map(
                          (item, index) => {
                            const { imgPath } = item;
                            return (
                              <div>
                                <Image
                                  src={imgPath}
                                  alt="image"
                                  width={48}
                                  height={48}
                                  priority
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
