import { ArrowRight, BlocksIcon, BriefcaseBusinessIcon,  CodeIcon, EyeIcon, HandIcon, LinkIcon, MailIcon, MapPinIcon, SquareArrowOutUpRightIcon, WrenchIcon } from 'lucide-react';
import image from '../assets/myimage.jpg'
import jobTracker from '../assets/job-tracker.gif'
import hotelRecommendation from '../assets/hotel-recommendation.gif'
import linkedin from '../assets/linkedin-svgrepo-com.svg'
import github from '../assets/github-142-svgrepo-com.svg'
import instagram from '../assets/instagram-svgrepo-com.svg'
import { Button } from '@/components/ui/button';
import { backEndSkills, developerTools, devOpsAndCloudSkills, frontEndSkills } from '@/Data';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';


const LandingPage = () => {

    return (
        <>
        <div className='bg-gray-50 base:px-1 basexl:px-1 xs:px-1 sm:px-2 md:px-2 lg:px-10 xl:px-2   0 2xl:px-50 3xl:px-50 animate-fade-in pb-50'>
            <div className='flex base:flex-col basexl:flex-col xs:flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row items-center'>
                <img src={image} className='h-60 w-60 shadow-2xl rounded-2xl m-10 object-cover hover:scale-105 transition-transform duration-300 ease-in-out' />
                <div className='flex flex-col base:items-center basexl:items-center xs:items-center sm:items-start md:items-start lg:items-start xl:items-start 2xl:items-start 3xl:items-start gap-2'>
                    <h1 className='text-3xl font-bold font-primary text-deep-green '>
                        Sebastian Casal
                    </h1>
                    <div className='flex flex-row items-center gap-2'>
                        <MapPinIcon className='text-deep-green' />
                        <p className='text-deep-green font-medium font-secondary text-xl '>Las Piñas, Philippines</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <CodeIcon className='text-deep-green' />
                        <p className='text-deep-green font-medium font-secondary text-xl '>Software Engineer</p>
                    </div>
                    <div className='flex flex-row items-center gap-2 mt-2'>
                        <Button variant='outline' className='bg-deep-green text-white hover:text-white font-tertiary hover:bg-muted-taupe cursor-pointer group'>
                            <a className='flex flex-row gap-2 items-center' href='https://drive.google.com/file/d/1JFnVnpcaSu5OIjrT3gW-lWQFIM4Ly5_l/view?usp=drive_link' target='_blank'>
                                <EyeIcon className='text-white' />
                                View Resume
                                <ArrowRight className='text-white group-hover:translate-x-1 transition-transform duration-300' />
                            </a>
                        </Button>
                        <Button variant='outline' className='group bg-off-white text-deep-green hover:text-off-white font-tertiary hover:bg-muted-taupe hover:scale-105 transition-all duration-300 ease-in-out'>
                            <a className='flex flex-row gap-2 items-center' href='mailto:casal.sebastianluis@gmail.com'>
                                <MailIcon className='text-deep-green group-hover:text-off-white transition-colors duration-300' />
                                Send Email
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-4'>
                <div className='base:col-span-12 basexl:col-span-12 xs:col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-6 3xl:col-span-6'>
                    <div className='flex flex-col gap-2 py-10'>
                        <div className='flex flex-row base:mx-5 basexl:mx-5 xs:mx-5 sm:mx-10 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-10 3xl:mx-10 items-start gap-2'>
                            <HandIcon className='text-deep-green' />
                            <h1 className='text-deep-green font-semibold text-xl font-primary'>
                                About
                            </h1>
                        </div>
                        <div className='flex flex-col gap-10'>
                            <p className='base:mx-5 basexl:mx-5 xs:mx-5 sm:mx-10 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-10 3xl:mx-10 font-secondary text-dark-gray base:text-md basexl:text-md xs:text-md sm:text-lg md:text-lg xl:text-lg 2xl:text-lg 3xl:text-lg  hover:text-deep-green hover:scale-105 transition-transform duration-300 ease-in-out'>
                                Hi! I'm Sebastian, a passionate software engineer with a strong foundation in computer science and a 
                                deep expertise in <span className='font-bold'>JavaScript</span> and <span className='font-bold'>TypeScript</span>. I thrive on solving complex problems and 
                                building innovative, scalable web applications that deliver exceptional user experiences.
                            </p>
                            <p className='base:mx-5 basexl:mx-5 xs:mx-5 sm:mx-10 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-10 3xl:mx-10 font-secondary text-dark-gray base:text-md basexl:text-md xs:text-md sm:text-lg md:text-lg xl:text-lg 2xl:text-lg 3xl:text-lghover:text-deep-green hover:scale-105 transition-transform duration-300 ease-in-out'>
                                With a keen eye for clean, maintainable code, I specialize in <span className='font-bold'>modern frontend and 
                                full-stack development</span>, leveraging frameworks like <span className='font-bold'>React</span>, <span className='font-bold'>Express.js</span>,
                                and <span className='font-bold'>Node.js</span> to create performant and 
                                dynamic solutions.
                            </p>
                            <p className='base:mx-5 basexl:mx-5 xs:mx-5 sm:mx-10 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-10 3xl:mx-10 font-secondary text-dark-gray base:text-md basexl:text-md xs:text-md sm:text-lg md:text-lg xl:text-lg 2xl:text-lg 3xl:text-lg hover:text-deep-green hover:scale-105 transition-transform duration-300 ease-in-out'>
                                My goal is to contribute to impactful projects, push the boundaries of web development, 
                                and continuously grow as a developer—always 
                                staying ahead of the latest trends and best practices in the JavaScript ecosystem.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='base:col-span-12 basexl:col-span-12 xs:col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-6 3xl:col-span-6'>
                    <div className='flex flex-col gap-4 py-10'>
                        <div className='flex flex-row base:mx-5 basexl:mx-5 xs:mx-5 sm:mx-10 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-10 3xl:mx-10 items-start gap-2'>
                            <WrenchIcon className='text-deep-green' />
                            <h1 className='text-deep-green font-semibold text-xl font-primary'>
                                Tech Stack
                            </h1>
                        </div>
                        <h1 className='font-primary text-deep-green base:mx-5 basexl:mx-5 xs:mx-5 sm:mx-10 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-10 3xl:mx-10 font-semibold'>
                            Frontend
                        </h1>
                        <div className='flex flex-wrap gap-2 base:mx-5 basexl:mx-5 xs:mx-5 sm:mx-10 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-10 3xl:mx-10'>
                            {frontEndSkills.map((skill, index) => (
                                <Badge key={index} className='bg-deep-green text-off-white font-secondary hover:bg-muted-taupe hover:scale-105 transition-transform duration-300 ease-in-out'>
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                        <h1 className='font-primary text-deep-green base:mx-5 basexl:mx-5 xs:mx-5 sm:mx-10 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-10 3xl:mx-10 font-semibold'>
                            Backend
                        </h1>
                        <div className='flex flex-wrap gap-2 base:mx-5 basexl:mx-5 xs:mx-5 sm:mx-10 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-10 3xl:mx-10'>
                            {backEndSkills.map((skill, index) => (
                                <Badge key={index} className='bg-deep-green text-off-white font-secondary hover:bg-muted-taupe hover:scale-105 transition-transform duration-300 ease-in-out'>
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                        <h1 className='font-primary text-deep-green base:mx-5 basexl:mx-5 xs:mx-5 sm:mx-10 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-10 3xl:mx-10 font-semibold'>
                            DevOps & Cloud
                        </h1>
                        <div className='flex flex-wrap gap-2 base:mx-5 basexl:mx-5 xs:mx-5 sm:mx-10 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-10 3xl:mx-10'>
                            {devOpsAndCloudSkills.map((skill, index) => (
                                <Badge key={index} className='bg-deep-green text-off-white font-secondary hover:bg-muted-taupe hover:scale-105 transition-transform duration-300 ease-in-out'>
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                        <h1 className='font-primary text-deep-green base:mx-5 basexl:mx-5 xs:mx-5 sm:mx-10 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-10 3xl:mx-10 font-semibold'>
                            Developer Tools
                        </h1>
                        <div className='flex flex-wrap gap-2 base:mx-5 basexl:mx-5 xs:mx-5 sm:mx-10 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-10 3xl:mx-10'>
                            {developerTools.map((skill, index) => (
                                <Badge key={index} className='bg-deep-green text-off-white font-secondary hover:bg-muted-taupe hover:scale-105 transition-transform duration-300 ease-in-out'>
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='col-span-12'>
                    <div className='flex flex-col gap-2 py-10 base:mx-5 basexl:mx-5 xs:mx-5 sm:mx-10 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-10 3xl:mx-10 '>
                       <div className='flex flex-row items-start gap-2'>
                            <BriefcaseBusinessIcon className='text-deep-green' />
                            <h1 className='text-deep-green font-semibold text-xl font-primary'>
                                Experience
                            </h1>
                       </div>
                       <Accordion type='single' collapsible className='bg-off-white rounded-2xl p-5'>
                            <AccordionItem value='item-1'>
                                <AccordionTrigger className='hover:no-underline cursor-pointer '>
                                   <div className='flex flex-row items-center font-primary font-semibold'>
                                        <div className='flex flex-col gap-1'>
                                            <p className='text-deep-green font-semibold font-primary'>System Analyst Intern</p>
                                            <div className='flex flex-row items-center gap-3'>
                                                <p className='text-deep-green font-tertiary'>SAVii</p>
                                                <Badge className='bg-deep-green text-white font-secondary hover:bg-muted-taupe' > 
                                                    Dec 2024 - Jan 2025
                                                </Badge>
                                            </div>
                                        </div>
                                   </div>
                                </AccordionTrigger>
                                <AccordionContent className='font-medium font-secondary text-dark-gray'>
                                    <ul className='list-["-"] list-inside flex flex-col gap-1'>
                                        <li>
                                            Streamlined security protocols by installing and configuring JumpCloud on all company machines, 
                                            ensuring enhanced data security and system integrity.
                                        </li>
                                        <li>
                                            Resolved employee issues efficiently, addressing and closing P3 tickets that minimized potential 
                                            downtime and maintained productivity across teams.
                                        </li>
                                        <li>
                                            Managed work equipments, including retrieving defective hardware and delivering replacement equipments 
                                            promptly to ensure employee's operational continuity.
                                        </li>
                                        <li>
                                            Enhanced team collaboration by participating in weekly meetings to share updates, discuss challenges, and 
                                            develop swift solutions for technical issues.
                                        </li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value='item-2'>
                                <AccordionTrigger className='hover:no-underline cursor-pointer'>
                                   <div className='flex flex-row items-center font-primary font-semibold'>
                                        <div className='flex flex-col gap-1'>
                                            <p className='text-deep-green font-semibold font-primary'>BS Computer Science</p>
                                            <div className='flex flex-row items-center gap-3'>
                                                <p className='text-deep-green font-tertiary'>AMA Computer College - Parañaque Campus</p>
                                                <Badge className='bg-deep-green text-white font-secondary hover:bg-muted-taupe mx-auto'>
                                                    June 2021 - Sept 2025
                                                </Badge>
                                            </div>
                                        </div>
                                   </div>
                                </AccordionTrigger>
                                <AccordionContent className='font-medium font-secondary text-dark-gray'>
                                    <ul className='list-["-"] list-inside flex flex-col gap-1'>
                                        <li>
                                            Gained a strong foundation in computer science principles, including algorithms, data structures, and software engineering practices.
                                        </li>
                                        <li>
                                            Developed hands-on experience in programming languages such as JavaScript, TypeScript, and Python through various academic projects.
                                        </li>
                                        <li>
                                            Collaborated with peers on team-based projects, enhancing skills in communication, problem-solving, and project management.
                                        </li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                       </Accordion>
                    </div>
                </div>
                <div className='col-span-12'>
                    <div className='flex flex-col  gap-2 py-10 base:mx-5 basexl:mx-5 xs:mx-5 sm:mx-10 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-10 3xl:mx-10'>
                        <div className='flex flex-row items-start gap-2'>
                            <BlocksIcon className='text-deep-green' />
                            <h1 className='text-deep-green font-semibold text-xl font-primary'>
                                Recent Projects
                            </h1>
                        </div>
                        <div className='flex base:flex-col basexl:flex-col xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row items-center gap-5'>
                            <div className='flex flex-col items-start self-start gap-2 mt-5'>
                                <img className='w-100 h-50 rounded-2xl object-cover' src={jobTracker}  />
                                <div className='flex flex-row items-center gap-2'>
                                    <h1 className='text-deep-green font-primary font-bold text-lg'>
                                        Traqify
                                    </h1>
                                    <a href='https://traqify.live' target='_blank' className='text-deep-green hover:text-muted-taupe hover:scale-105 transition-transform duration-300 ease-in-out'>
                                        <SquareArrowOutUpRightIcon className='size-4.5' />
                                    </a>
                                </div>
                                <p className='text-dark-gray font-secondary base:text-md basexl:text-md xs:text-md sm:text-lg md:text-lg xl:text-lg 2xl:text-lg 3xl:text-lg max-w-lg'>
                                    A job tracking application that allows users to easily manage and track their job applications, 
                                    providing a user-friendly interface and seamless experience. Built with React, Elysia.js, and PostgreSQL.
                                </p>
                            </div>
                            <div className='flex flex-col items-start self-start gap-2 mt-5'>
                                <img className='w-100 h-50 rounded-2xl object-cover' src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2FtNmp1cHg2Ym9ic3FibGp6MzQzNWJkMHcxZHFtNGZzZG1vOXZ2NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ekn37VbHrR648/giphy.gif' />
                                <div className='flex flex-row items-center gap-2'>
                                    <h1 className='text-deep-green font-primary font-bold text-lg'>
                                        Connect
                                    </h1>
                                    <a href='https://github.com/Hurishihara/Social-Media-App' target='_blank' className='text-deep-green hover:text-muted-taupe hover:scale-105 transition-transform duration-300 ease-in-out'>
                                        <SquareArrowOutUpRightIcon className='size-4.5' />
                                    </a>
                                </div>
                                <p className='text-dark-gray font-secondary base:text-md basexl:text-md xs:text-md sm:text-lg md:text-lg xl:text-lg 2xl:text-lg 3xl:text-lg max-w-md'>
                                    A social media application that allows users to connect with friends, share updates, and engage in discussions.
                                    Built with React, Express.js, Socket.io, and PostgreSQL.
                                </p>
                            </div>
                            <div className='flex flex-col items-start self-start gap-2 mt-5'>
                                <img className='w-100 h-50 rounded-2xl  object-cover' src={hotelRecommendation} />
                                <div className='flex flex-row items-center gap-2'>
                                    <h1 className='text-deep-green font-primary font-bold text-lg'>
                                        StayEasyManila
                                    </h1>
                                    <a href='https://github.com/Hurishihara/stayeasymanila' target='_blank' className='text-deep-green hover:text-muted-taupe hover:scale-105 transition-transform duration-300 ease-in-out'>
                                        <SquareArrowOutUpRightIcon className='size-4.5' />
                                    </a>
                                </div>
                                <p className='text-dark-gray font-secondary base:text-md basexl:text-md xs:text-md sm:text-lg md:text-lg xl:text-lg 2xl:text-lg 3xl:text-lg max-w-lg'>
                                   A capstone web application project that provides hotel recommendations based on user preferences and location.
                                   Built with React, Express.js, ml-knn.js, natural.js, and PostgreSQL.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer className='bg-gray-50 text-white py-5'>
            <div className='grid grid-cols-12 gap-10'>
                {/* Social Link */}
                <div  className='col-span-12'>
                    <ul className='flex flex-col items-center text-sm space-y-3 text-off-white'>
                        <div className='flex flex-row items-start gap-2'>
                            <LinkIcon className='text-deep-green' />
                            <h1 className='text-deep-green font-semibold text-xl font-primary'>
                                Social Links
                            </h1>
                        </div>
                       <div className='flex items-center base:flex-col basexl:flex-col xs:flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row gap-5'>
                       <li>
                            <a href='https://www.linkedin.com/in/sebastiaancasal/' target='_blank'>
                                <div className='rounded-lg bg-off-white px-13 py-2 '>
                                    <img src={linkedin} className='h-8' />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href='https://github.com/Hurishihara' target='_blank'>
                                <div className='flex items-center justify-center rounded-lg bg-off-white px-13 py-2 '>
                                    <img src={github} className='h-8' />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/sebastiaancasal/' target='_blank'>
                                <div className='flex items-center justify-center rounded-lg bg-off-white px-13 py-2 '>
                                    <img src={instagram} className='h-8' />
                                </div>
                            </a>
                        </li>
                       </div>
                    </ul>
                </div>
            </div>
            {/* Copyright */}
            <div className='text-center font-semibold font-tertiary text-sm pt-5 text-deep-green'>
                © {new Date().getFullYear()} Sebastian Casal. All rights reserved.
            </div>
        </footer>
        </>
    );
}

export default LandingPage;