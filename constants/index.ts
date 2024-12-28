import { Facebook, Linkedin, Phone } from 'lucide-react'

export const projects = {
    completed: [
      {
        id: 1,
        title: "Mollah Villa",
        description: "Luxury apartments with panoramic city views",
        image: "/Projects/project(1).jpg",
        location: "Motijheel",
        units: 120,
        progress: 100
      },
      {
        id: 2,
        title: "Khaza Dreams",
        description: "Eco-friendly suburban housing complex",
        image: "/Projects/project(2).png",
        location: "Gulshan",
        units: 80,
        progress: 100
      }
    ],
    ongoing: [
      {
        id: 3,
        title: "F-R Tower",
        description: "Modern high-rise with riverside amenities",
        image: "/Projects/project(3).jpg",
        location: "Banasree",
        units: 200,
        progress: 60
      },
      {
        id: 4,
        title: "Sultana Residence",
        description: "Smart homes for the tech-savvy urbanite",
        image: "/Projects/project(4).jpg",
        location: "North Bashabo",
        units: 150,
        progress: 40
      }
    ],
    upcoming: [
      {
        id: 5,
        title: "Sultana Garden",
        description: "Futuristic skyscraper with cloud-touching penthouses",
        image: "/Projects/project(5).jpg",
        location: "North Bashabo",
        units: 300,
        progress: 0
      },
      {
        id: 6,
        title: "Sarwar Tower",
        description: "Integrated community with extensive green spaces",
        image: "/Projects/project(6).jpg",
        location: "North Paltan",
        units: 250,
        progress: 0
      }
    ]
  }
export const carouselItems = [
    {
      image: "/ai.png",
      title: "Building Dreams, Creating Homes",
      subtitle: "Your trusted partner in premium real estate development"
    },
    {
      image: "/ai2.png",
      title: "Luxury Living Redefined",
      subtitle: "Experience the epitome of modern architecture"
    },
    {
      image: "/ai3.png",
      title: "Sustainable Communities",
      subtitle: "Creating eco-friendly spaces for future generations"
    }
  ]

 export const projectItems: { title: string; href: string }[] = [
    {
      title: "Upcoming",
      href: "/projects/upcoming",
    },
    {
      title: "Ongoing",
      href: "/projects/ongoing",
    },
    {
      title: "Completed",
      href: "/projects/completed",
    },
  ]

 export const toolbarItems = [
    {
      id: 'facebook',
      icon: Facebook,
      href: 'https://www.facebook.com/@shelterhousinglimited',
      label: 'Visit our Facebook page',
      isExternal: true,
      color: '#1877F2' // Facebook blue
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/shelterhousingltd/',
      label: 'Connect with us on LinkedIn',
      isExternal: true,
      color: '#0A66C2' // LinkedIn blue
    },

  ]