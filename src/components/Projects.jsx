
import React from "react";
import vpn from '../assets/vpn.png'
import copeople from '../assets/copeople.png'
import ktd from '../assets/ktd.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title==='Cloud Resume Challenge' && <a href="https://github.com/Kesar-Chanana/Cloud-Resume-Challenge-AWS-SAM-serverless-stack-">
                <img className="w-full rounded-t-lg h-auto object-cover " src={vpn} alt="" />
            </a>}
            {title==='Server Sync Automation Script' && <a href="https://github.com/Kesar-Chanana/Script-Sync-Servers">
                <img className="w-full rounded-t-lg h-auto object-cover " src={copeople} alt="" />
            </a>}
            {title==='Restaurant Rating Microservice with Kubernetes and Terraform Automation' && <a href="https://github.com/Kesar-Chanana/RestaurantRatingService">
                <img className="w-full rounded-t-lg h-auto object-cover " src={ktd} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="https://github.com/Kesar-Chanana">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Cloud Resume Challenge',
        description:'Built a fully serverless, globally distributed personal resume site on AWS with automated CI/CD. Integrated a Python-based backend to track visitors using Lambda, API Gateway, and DynamoDB.',
        image: {vpn},
        git:'https://github.com/Kesar-Chanana/Cloud-Resume-Challenge-AWS-SAM-serverless-stack-',
        technologies:['AWS SAM', 'Lambda', 'API Gateway, DynamoDB', 'S3', 'Route 53', 'CloudFront', 'GitHub Actions', 'Python', 'HTML/CSS']
    },
    {
        title:'Server Sync Automation Script',
        description:'Developed PowerShell scripts to automate error-resilient file syncing across Windows servers. Enabled flexible, config-driven sync with detailed logging and smart retries to enhance reliability and efficiency.',
        image: {copeople},
        git:"https://github.com/Kesar-Chanana/Script-Sync-Servers",
        technologies:[ 'PowerShell', 'Windows', 'Robocopy', 'SMB protocol', 'Logging', 'CSV', 'File system automation']
    },
    {
        title:'Restaurant Rating Microservice with Kubernetes and Terraform Automation',
        description:'This is a simple Java-based Restaurant Rating Service that I containerized using Docker and deployed on a Kubernetes cluster with Minikube for local testing. The infrastructure is partly managed via Terraform (Infrastructure as Code).',
        image: {ktd},
        git:"https://github.com/Kesar-Chanana/RestaurantRatingService",
        technologies:[ 'Docker', 'Kubernetes', 'Terraform', 'Java', 'Spring Boot']  
    }
]

export default Projects