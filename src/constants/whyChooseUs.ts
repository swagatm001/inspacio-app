
export type WhyChooseItem = {
    id: string
    title: string
    description: string
}

export type WhyChooseUs = {
    heading: string
    subheading?: string
    items: WhyChooseItem[]
}

export const WHY_CHOOSE_US: WhyChooseUs = {
    heading: 'Why Choose Inspacio Design?',
    subheading: 'As a full-service architecture and interior design studio, we manage every detail, from concept to completion. Here\'s how working with us makes a difference.',
    items: [
        {
            id: 'turnkey-expertise',
            title: 'Turnkey Expertise',
            description:
                'We offer end-to-end solutions, from design and documentation to execution, ensuring seamless coordination and single-point accountability.'
        },
        {
            id: 'timely-delivery',
            title: 'Timely Delivery',
            description:
                'Every project is managed with meticulous attention to timelines and quality, so your space is ready exactly when promised.'
        },
        {
            id: 'in-house-excellence',
            title: 'In-House Excellence',
            description:
                'From site supervision to installations, our talented in-house team ensures flawless quality control and consistent craftsmanship.'
        },
        {
            id: 'tailored-design-approach',
            title: 'Tailored Design Approach',
            description:
                'Each project is designed around your lifestyle and aspirations, creating spaces that feel deeply personal and distinctly yours.'
        },
        {
            id: 'transparent-process',
            title: 'Transparent Process',
            description:
                'We believe great design comes with great trust, no hidden costs, no surprises, just complete clarity at every stage.'
        },
        {
            id: 'proven-experience',
            title: 'Proven Experience',
            description:
                'With over a decade of design and build expertise, we bring tested systems, efficiency, and innovation to every project.'
        },
        {
            id: 'client-satisfaction',
            title: 'Client Satisfaction',
            description:
                'Our greatest reward is the trust of our clients. Every decision we make is guided by your comfort, satisfaction, and long-term delight.'
        }
    ]
}

export default WHY_CHOOSE_US