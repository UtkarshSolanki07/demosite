export const NavbarMenu=[
    {
        id:1,
        title:"Home",
        link:"/",
    },
    {
        id:2,
        title:"Pricing",
        link:"/pricing",
    },
    {
        id:3,
        title:"Services",
        link:"/services",
    },
    {
        id:4,
        title:"About Us",
        link:"/about-us",
    },
    {
        id:5,
        title:"Contact Us",
        link:"/contact-us",
    },
];


export const mockProjects = [
    {
        id: 1,
        title: "Modern Office Building",
        description: "Construction of a 5-story modern office complex with sustainable design",
        status: "Completed",
        progress: 100,
        startDate: "2023-01-15",
        endDate: "2023-08-30",
        budget: 2500000,
        spent: 2450000,
        client: "TechCorp Inc.",
        clientEmail: "john.smith@techcorp.com",
        location: "Downtown Business District",
        type: "Commercial",
        priority: "High",
        projectManager: "Mike Johnson",
        images: ["office1.jpg", "office2.jpg"],
        milestones: [
            { id: 1, title: "Foundation Complete", completed: true, date: "2023-02-15" },
            { id: 2, title: "Structural Framework", completed: true, date: "2023-04-20" },
            { id: 3, title: "Electrical & Plumbing", completed: true, date: "2023-06-15" },
            { id: 4, title: "Interior Finishing", completed: true, date: "2023-07-30" }
        ],
        rating: 5,
        review: "Excellent work! EzyBuilds delivered our office building on time and within budget. Highly recommended!"
    },
    {
        id: 2,
        title: "Residential Complex",
        description: "Building a 20-unit residential complex with modern amenities",
        status: "In Progress",
        progress: 75,
        startDate: "2024-01-01",
        endDate: "2024-08-15",
        budget: 1800000,
        spent: 1350000,
        client: "Housing Development Co.",
        clientEmail: "sarah.johnson@housingdev.com",
        location: "Suburban Area",
        type: "Residential",
        priority: "Medium",
        projectManager: "David Wilson",
        images: ["residential1.jpg"],
        milestones: [
            { id: 1, title: "Site Survey Complete", completed: true, date: "2024-01-15" },
            { id: 2, title: "Permits Approved", completed: true, date: "2024-02-28" },
            { id: 3, title: "Foundation Work", completed: true, date: "2024-03-30" },
            { id: 4, title: "Structural Work", completed: false, date: "2024-06-15" }
        ],
        rating: null,
        review: null
    },
    {
        id: 3,
        title: "Shopping Mall Renovation",
        description: "Complete renovation of existing shopping mall infrastructure",
        status: "Completed",
        progress: 100,
        startDate: "2023-06-01",
        endDate: "2023-12-28",
        budget: 1200000,
        spent: 1180000,
        client: "Mall Properties Ltd.",
        clientEmail: "mike.davis@mallproperties.com",
        location: "City Center",
        type: "Renovation",
        priority: "High",
        projectManager: "Lisa Chen",
        images: ["mall1.jpg", "mall2.jpg", "mall3.jpg"],
        milestones: [
            { id: 1, title: "Demolition Complete", completed: true, date: "2023-07-15" },
            { id: 2, title: "Structural Repairs", completed: true, date: "2023-09-20" },
            { id: 3, title: "New Installations", completed: true, date: "2023-11-30" },
            { id: 4, title: "Final Inspection", completed: true, date: "2023-12-25" }
        ],
        rating: 4,
        review: "Great renovation work! The mall looks modern and fresh. Minor delays but overall satisfied."
    },
    {
        id: 4,
        title: "Industrial Warehouse",
        description: "Construction of a large-scale industrial warehouse facility",
        status: "Planning",
        progress: 15,
        startDate: "2024-03-01",
        endDate: "2024-10-30",
        budget: 3200000,
        spent: 480000,
        client: "Industrial Solutions",
        clientEmail: "alex.wilson@industrialsolutions.com",
        location: "Industrial Zone",
        type: "Industrial",
        priority: "Medium",
        projectManager: "Robert Brown",
        images: ["warehouse1.jpg"],
        milestones: [
            { id: 1, title: "Site Preparation", completed: true, date: "2024-03-20" },
            { id: 2, title: "Foundation Work", completed: false, date: "2024-05-15" },
            { id: 3, title: "Structural Steel", completed: false, date: "2024-07-15" },
            { id: 4, title: "Roof Installation", completed: false, date: "2024-09-30" }
        ],
        rating: null,
        review: null
    }
];

// Mock Clients Data - People who hire EzyBuilds
export const mockClients = [
    {
        id: 1,
        firstName: "John",
        lastName: "Smith",
        email: "john.smith@techcorp.com",
        phone: "+1 (555) 123-4567",
        company: "TechCorp Inc.",
        position: "CEO",
        joinDate: "2022-03-15",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        projects: [1],
        totalSpent: 2500000,
        completedProjects: 1,
        activeProjects: 0,
        averageRating: 5.0,
        status: "Active",
        address: "123 Business Ave, Downtown, NY 10001",
        preferredContact: "email"
    },
    {
        id: 2,
        firstName: "Sarah",
        lastName: "Johnson",
        email: "sarah.johnson@housingdev.com",
        phone: "+1 (555) 234-5678",
        company: "Housing Development Co.",
        position: "Project Director",
        joinDate: "2023-01-20",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        projects: [2],
        totalSpent: 1800000,
        completedProjects: 0,
        activeProjects: 1,
        averageRating: null,
        status: "Active",
        address: "456 Suburban St, Suburbia, NY 10002",
        preferredContact: "phone"
    },
    {
        id: 3,
        firstName: "Mike",
        lastName: "Davis",
        email: "mike.davis@mallproperties.com",
        phone: "+1 (555) 345-6789",
        company: "Mall Properties Ltd.",
        position: "Property Manager",
        joinDate: "2022-08-10",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        projects: [3],
        totalSpent: 1200000,
        completedProjects: 1,
        activeProjects: 0,
        averageRating: 4.0,
        status: "Active",
        address: "789 City Center Blvd, Downtown, NY 10003",
        preferredContact: "email"
    },
    {
        id: 4,
        firstName: "Alex",
        lastName: "Wilson",
        email: "alex.wilson@industrialsolutions.com",
        phone: "+1 (555) 456-7890",
        company: "Industrial Solutions",
        position: "Operations Manager",
        joinDate: "2023-06-05",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        projects: [4],
        totalSpent: 3200000,
        completedProjects: 0,
        activeProjects: 1,
        averageRating: null,
        status: "Active",
        address: "321 Industrial Park Rd, Industrial Zone, NY 10004",
        preferredContact: "phone"
    }
];

// Project Types for Dashboard Form
export const projectTypes = [
    { id: 1, name: "Residential", description: "Houses, apartments, condos" },
    { id: 2, name: "Commercial", description: "Office buildings, retail spaces" },
    { id: 3, name: "Industrial", description: "Warehouses, factories, facilities" },
    { id: 4, name: "Renovation", description: "Remodeling, upgrades, repairs" },
    { id: 5, name: "Infrastructure", description: "Roads, bridges, utilities" }
];

// Status colors for projects
export const statusColors = {
    "Planning": "bg-blue-100 text-blue-800",
    "In Progress": "bg-yellow-100 text-yellow-800",
    "On Hold": "bg-orange-100 text-orange-800",
    "Completed": "bg-green-100 text-green-800",
    "Cancelled": "bg-red-100 text-red-800"
};

// Priority colors
export const priorityColors = {
    "High": "bg-red-100 text-red-800",
    "Medium": "bg-yellow-100 text-yellow-800",
    "Low": "bg-green-100 text-green-800"
};